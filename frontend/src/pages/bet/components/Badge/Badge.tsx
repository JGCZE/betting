interface IProps {
  timeLeft: number
}

const Badge = ({ timeLeft }: IProps) => (
  <div className="absolute top-4 right-4">
    <span className={`px-3 py-1 rounded-full text-xs font-bold border ${timeLeft > 0 ? 'bg-green-900/50 text-green-400 border-green-700' : 'bg-red-900/50 text-red-400 border-red-700'
      }`}>
      {timeLeft > 0 ? 'AKTIVNÍ' : 'EXPIRUJE'}
    </span>
  </div>
)
export default Badge