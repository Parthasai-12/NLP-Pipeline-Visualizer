export default function TokenizationStage({ tokens }) {
  return (
    <div className="token-grid">
      {tokens.map((tok, i) => (
        <span key={i} className="token-pill" title={`Token #${i + 1}`}>
          {tok}
        </span>
      ))}
    </div>
  )
}
