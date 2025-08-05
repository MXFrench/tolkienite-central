
const GameQuote = ({ dialog }) => {
  return (
    <section className='bg-bg-secondary rounded-lg p-4 md:p-8'>
      <p className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl leading-relaxed text-center text-balance font-thin">
        {dialog}
      </p>
    </section>
  )
}

export default GameQuote