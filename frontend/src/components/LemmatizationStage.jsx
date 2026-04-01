export default function LemmatizationStage({ filtered, lemmatized }) {
  const changed = filtered.filter((w, i) => w.toLowerCase() !== lemmatized[i]?.toLowerCase()).length

  return (
    <>
      {changed > 0 && (
        <div className="stats-row">
          <span className="stat-chip green">↓ {changed} word{changed !== 1 ? 's' : ''} lemmatized</span>
          <span className="stat-chip" style={{ background: 'rgba(107,114,128,0.1)', border: '1px solid rgba(107,114,128,0.3)', color: '#6b7280' }}>
            {filtered.length - changed} unchanged
          </span>
        </div>
      )}

      <div className="lemma-grid">
        {filtered.map((word, i) => {
          const lemma = lemmatized[i] ?? word
          const isChanged = word.toLowerCase() !== lemma.toLowerCase()
          return (
            <div className="lemma-pair" key={i}>
              <span className="lemma-original" title="Original form">{word}</span>
              {isChanged && <span className="lemma-arrow">↓</span>}
              <span
                className={`lemma-result ${isChanged ? 'changed' : 'same'}`}
                title={isChanged ? `Lemma of "${word}"` : 'Unchanged'}
              >
                {lemma}
              </span>
              {isChanged && <span className="lemma-note">lemma</span>}
            </div>
          )
        })}
      </div>
    </>
  )
}
