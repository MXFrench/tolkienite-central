

const GameBtns = ({ multipleChoice, message, loadAnswer }) => {
  return (
    <section className='grid gap-4 md:gap-8 sm:grid-cols-3'>
      <h1 className='text-3xl font-bold col-span-full'>Who Said It?</h1>
      {multipleChoice ? multipleChoice?.map(choice => (
        <button key={choice?._id} className="text-center text-lg md:text-2xl font-semibold text-primary border-2 border-primary p-2 md:p-4 rounded bg-bg-secondary hover:bg-primary hover:text-btn-text transition cursor-pointer hover:shadow-xl"
          onClick={() => loadAnswer(choice?._id)}
        >{choice?.name}</button>
      )) : (<>
        <div className="col-span-full text-2xl">{message}</div>
        <div className="progress-bar col-span-full"></div>
      </>)}
    </section>
  )
}

export default GameBtns