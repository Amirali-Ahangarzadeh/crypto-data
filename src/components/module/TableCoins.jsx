

export default function TableCoins({ data, error }) {
  return (
    <div>
      {!error && data.length > 0 && data.map((coin) => <img src={coin?.image} alt="" />)}
    </div>
  )
}
