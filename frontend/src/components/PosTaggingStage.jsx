import { getPos, POS_STYLES } from '../constants/nlpData'

export default function PosTaggingStage({ posTagged }) {
  // Build legend: unique POS types that appear in this text
  const seenPos = [...new Set(posTagged.map((t) => t.pos))]

  return (
    <>
      <div className="pos-grid">
        {posTagged.map((t, i) => {
          const style = getPos(t.pos)
          return (
            <div className="pos-item" key={i}>
              <span className="pos-token">{t.token}</span>
              <span
                className="pos-badge"
                style={{ background: style.bg, borderColor: style.border, color: style.color }}
                data-tooltip={`${style.label}${t.explanation ? ' · ' + t.explanation : ''}`}
              >
                {t.pos}
              </span>
            </div>
          )
        })}
      </div>

      {/* Legend */}
      <div className="pos-legend">
        {seenPos.map((pos) => {
          const style = getPos(pos)
          return (
            <span className="legend-item" key={pos}>
              <span className="legend-dot" style={{ background: style.color }} />
              {style.label}
            </span>
          )
        })}
      </div>
    </>
  )
}
