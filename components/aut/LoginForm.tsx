'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Input } from '../ui/input'
import { loginSchema } from '@/utils/validations'
import { Button } from '../ui/button'

type TLogin = {
  userName: string
  password: string
}

const LoginForm = () => {
  // const form = useForm<z.infer<typeof loginSchema>>({
  //   resolver: zodResolver(loginSchema),
  //   defaultValues: {
  //     userName: '',
  //     password: ''
  //   }
  // })

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<TLogin>({
    resolver: zodResolver(loginSchema)
  })

  const onSubmit = (values: z.infer<typeof loginSchema>) => {
    console.log(values)
  }
  console.log(errors)

  return (
    <>
      <div className='w-full py-12'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='space-y-6'>
            <Input placeholder='Username/Email' {...register('userName')} />
            <Input placeholder='Password' {...register('password')} />
            {/* <FormField
              control={form.control}
              name='userName'
              render={({ field }) => (
                <>
                  {console.log(field)}
                  <FormItem>
                    <FormLabel>Username or Email</FormLabel>
                    <FormControl>
                      <Input placeholder='Your username or email' />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                </>
              )}
            />
            <FormField
              control={form.control}
              name='password'
              render={({ field }) => (
                <>
                  {console.log(field)}
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input placeholder='Your password' />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                </>
              )}
            /> */}
          </div>

          <Button type='submit' className='mt-10 w-full'>
            Login
          </Button>
        </form>
      </div>
    </>
  )
}

export default LoginForm
