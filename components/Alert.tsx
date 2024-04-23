import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger
} from '@/components/ui/alert-dialog'
import React from 'react'
import { Button, buttonVariants } from './ui/button'

interface IAlert {
  buttonLabel?: string
  icon?: React.ReactElement
}

const Alert = ({ buttonLabel, icon }: IAlert) => {
  return (
    <>
      <AlertDialog>
        {icon ? (
          <AlertDialogTrigger
            className={`inline-flex h-8 items-center justify-center gap-3 whitespace-nowrap rounded-md px-3 text-xs font-medium transition-colors hover:bg-primary-orange/10 hover:text-primary-orange focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-950 disabled:pointer-events-none disabled:opacity-50 dark:hover:bg-slate-800 dark:hover:text-slate-50 dark:focus-visible:ring-slate-300`}
          >
            {icon}
          </AlertDialogTrigger>
        ) : null}
        {buttonLabel ? (
          <AlertDialogTrigger>{buttonLabel}</AlertDialogTrigger>
        ) : null}
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction>Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  )
}

export default Alert
