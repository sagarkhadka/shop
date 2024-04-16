import * as React from 'react'

import { cn } from '@/lib/utils'

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  required?: boolean
  id?: string
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, label, error, required, id, ...props }, ref) => {
    return (
      <>
        <div className='space-y-2'>
          {label ? (
            <label
              className={cn('text-sm font-semibold text-slate-500', {
                'after:ml-1.5 after:text-red-500 after:content-["*"]': required
              })}
              htmlFor={id ?? ''}
            >
              {label}
            </label>
          ) : null}
          <input
            type={type}
            className={cn(
              'flex h-9 w-full rounded-md border border-primary-orange bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary-orange/75 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:placeholder:text-slate-400 dark:focus-visible:ring-slate-300',
              className
            )}
            ref={ref}
            {...props}
          />
          {error ? <p className='text-sm text-red-500'>{error}</p> : null}
        </div>
      </>
    )
  }
)
Input.displayName = 'Input'

export { Input }
