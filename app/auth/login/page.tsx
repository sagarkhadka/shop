import LoginForm from '@/components/aut/LoginForm'

const page = () => {
  return (
    <>
      <section className=''>
        <div className='grid grid-cols-2'>
          <div className='flex w-full justify-end pr-20'>
            <div className='w-full max-w-[36rem]'>
              <LoginForm />
            </div>
          </div>
          <div className='w-full bg-primary-orange p-10'></div>
        </div>
      </section>
    </>
  )
}

export default page
