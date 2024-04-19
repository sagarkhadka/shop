'use client'

import { useState } from 'react'
import Link from 'next/link'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import ReactLoading from 'react-loading'

import { Input } from '../ui/input'
import { signUpSchema } from '@/utils/validations'
import { Button } from '../ui/button'
import { Separator } from '../ui/separator'

interface ISignUp {
  userName: string
  password: {
    password: string
    confirm: string
  }
  phoneNumber: string
  email: string
}

const SignUpForm = () => {
  const [isLoading, setIsLoading] = useState(false)

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<ISignUp>({
    resolver: zodResolver(signUpSchema)
  })

  const onSubmit = (values: z.infer<typeof signUpSchema>) => {
    setIsLoading(true)
    console.log(values)
    setTimeout(() => setIsLoading(false), 2000)
  }

  return (
    <>
      <div className='w-full py-12'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='space-y-4'>
            <div className='space-y-2'>
              <Input
                placeholder='Username/Email'
                label='Username/Email'
                id='email'
                required={true}
                error={errors?.userName?.message}
                {...register('userName')}
              />
            </div>
            <div className='space-y-2'>
              <Input
                placeholder='Email'
                label='Email'
                id='email'
                required={true}
                error={errors?.email?.message}
                {...register('email')}
              />
            </div>
            <div className='space-y-2'>
              <Input
                placeholder='Phone number'
                label='Phone Number'
                id='phoneNumber'
                required={true}
                error={errors?.phoneNumber?.message}
                {...register('phoneNumber')}
              />
            </div>
            <div className='space-y-2'>
              <Input
                id='password'
                type='password'
                placeholder='Password'
                label='Password'
                required={true}
                error={errors?.password?.password?.message}
                {...register('password.password')}
              />
            </div>
            <div className='space-y-2'>
              <Input
                id='confirmPassword'
                type='password'
                placeholder='Confirm Password'
                label='Confirm Password'
                required={true}
                error={errors?.password?.confirm?.message}
                {...register('password.confirm')}
              />
            </div>
          </div>

          <Button type='submit' size={'lg'} className='mt-5 w-full gap-3'>
            {isLoading && <ReactLoading type='spin' height={20} width={20} />}
            Sign up
          </Button>
        </form>

        <div className='mt-8 space-y-6'>
          <Separator />
          <div className='space-y-3'>
            <Button className='w-full' variant={'outline'} asChild>
              <Link href='/login'>Login</Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}

export default SignUpForm
