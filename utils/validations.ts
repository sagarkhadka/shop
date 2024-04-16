import { z } from 'zod'

export const loginSchema = z.object({
  userName: z.string().nonempty({
    message: 'This field is required.'
  }),
  password: z.string().min(8, {
    message: 'Password be at least 8 characters.'
  })
})

export const signUpSchema = z.object({
  userName: z.string().nonempty({
    message: 'Username is required.'
  }),
  phoneNumber: z.string().nonempty({
    message: 'Phone number is required.'
  }),
  email: z
    .string()
    .email({
      message: 'Email is required and must be a valid email address.'
    })
    .nonempty({
      message: 'This filed is required.'
    }),
  password: z
    .object({
      password: z.string(),
      confirm: z.string()
    })
    .refine((data) => data.password === data.confirm, {
      message: "Password don't match",
      path: ['confirm']
    })
  // password: z.string().min(8, {
  //   message: 'Password must be at least 8 characters.'
  // }),
  // confirmPassword: z.string().refine(
  //   (value) => {
  //     return value
  //   },
  //   {
  //     message: 'Passwords do not match.',
  //     path: ['confirmPassword']
  //   }
  // )
})
