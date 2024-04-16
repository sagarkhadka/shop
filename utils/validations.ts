import { z } from 'zod'

export const loginSchema = z.object({
  userName: z.string(),
  password: z.string().min(8, {
    message: 'Password be at least 8 characters.'
  })
})
