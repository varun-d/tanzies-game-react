export default function Dice({ id, number, isHeld, onClick }) {
  /* This is a comment block */
  return (
    <button
      onClick={(e) => onClick(e, id)}
      className={`w-16
      h-16
      cursor-pointer rounded-md drop-shadow-lg text-center py-3 ${
        isHeld ? 'bg-mygreen ' : 'bg-white'
      } md:hover:bg-slate-200 md:hover:drop-shadow-md`}
    >
      <h3 className='text-3xl font-bold'>{number}</h3>
    </button>
  )
}
