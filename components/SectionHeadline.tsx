interface ISection {
  title: string
  icon?: React.ReactNode
}

const SectionHeadline: React.FC<ISection> = ({ title, icon }) => {
  return (
    <>
      <div className='mb-6 flex items-center gap-2'>
        {icon ? icon : null}
        <h1 className='text-3xl font-bold'>{title}</h1>
      </div>
    </>
  )
}

export default SectionHeadline
