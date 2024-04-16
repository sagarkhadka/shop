import SignUpForm from '@/components/auth/SignUpForm'

const page = () => {
  return (
    <>
      <section className='container'>
        <div className='mx-auto w-full max-w-[36rem]'>
          <SignUpForm />
        </div>
      </section>
    </>
  )
}

export default page
