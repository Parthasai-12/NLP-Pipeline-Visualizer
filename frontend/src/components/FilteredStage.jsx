export default function FilteredStage({ posTagged, filtered }) {
  const keptSet = new Set(filtered)
  const kept = posTagged.filter((t) => keptSet.has(t.token) && !t.is_stop).length
  const removed = posTagged.length - kept

  return (
    <>
      <div className="stats-row">
        <span className="stat-chip green">✓ {kept} kept</span>
        <span className="stat-chip red">✗ {removed} removed</span>
      </div>
      <div className="token-grid">
        {posTagged.map((t, i) => {
          const isKept = !t.is_stop && t.pos !== 'PUNCT'
          return (
            <span
              key={i}
              className={`token-pill ${isKept ? 'kept' : 'stopword'}`}
              title={isKept ? 'Kept' : 'Stop word / punctuation — removed'}
            >
              {t.token}
            </span>
          )
        })}
      </div>
    </>
  )
}
