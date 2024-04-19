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
import { Button } from './ui/button'

interface IAlert {
  buttonLabel?: string
  icon?: React.ReactElement
}

const Alert = ({ buttonLabel, icon }: IAlert) => {
  return (
    <>
      <AlertDialog>
        <AlertDialogTrigger>
          {icon ? (
            <Button variant={'ghost'} size={'sm'}>
              {icon}
            </Button>
          ) : null}
          {buttonLabel ? buttonLabel : null}
        </AlertDialogTrigger>
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
