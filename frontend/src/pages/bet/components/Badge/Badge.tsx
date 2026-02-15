interface IProps {
  timeLeft: number
}

const Badge = ({ timeLeft }: IProps) => (
  <div className="absolute top-4 right-4">
    <span className={`px-3 py-1 rounded-full text-xs font-bold border ${timeLeft > 0 ? 'bg-emerald-900/30 text-emerald-400 border-emerald-700' : 'bg-rose-900/30 text-rose-400 border-rose-700'
      }`}>
      {timeLeft > 0 ? 'AKTIVNÍ' : 'EXPIRUJE'}
    </span>
  </div>
)
export default Badge