'use client'

import { useState } from 'react'
import Link from 'next/link'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import ReactLoading from 'react-loading'

import { Input } from '../ui/input'
import { loginSchema } from '@/utils/validations'
import { Button } from '../ui/button'
import { Separator } from '../ui/separator'

interface ILogin {
  userName: string
  password: string
}

const LoginForm = () => {
  const [isLoading, setIsLoading] = useState(false)

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<ILogin>({
    resolver: zodResolver(loginSchema)
  })

  const onSubmit = (values: z.infer<typeof loginSchema>) => {
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
                id='password'
                placeholder='Password'
                label='Password'
                required={true}
                error={errors?.password?.message}
                {...register('password')}
              />
            </div>
          </div>

          <div className='my-2 flex items-center justify-between'>
            <Button className='px-0' variant={'link'} asChild>
              <Link href='/auth/login'>Forgot Password</Link>
            </Button>
          </div>

          <Button type='submit' size={'lg'} className='mt-5 w-full gap-3'>
            {isLoading && <ReactLoading type='spin' height={20} width={20} />}
            Login
          </Button>
        </form>

        <div className='mt-8 space-y-6'>
          <Separator />
          <div className='space-y-3'>
            <Button className='w-full' variant={'outline'} asChild>
              <Link href='/sign-up'>Sign Up</Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}

export default LoginForm
