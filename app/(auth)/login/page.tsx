import LoginForm from '@/components/auth/LoginForm'

const page = () => {
  return (
    <>
      <section className='container'>
        <div className='mx-auto w-full max-w-[36rem]'>
          <LoginForm />
        </div>
      </section>
    </>
  )
}

export default page
