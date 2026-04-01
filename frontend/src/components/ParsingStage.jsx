import { getDep } from '../constants/nlpData'

export default function ParsingStage({ parsing }) {
  return (
    <table className="dep-table">
      <thead>
        <tr>
          <th>Token</th>
          <th>Dependency</th>
          <th>Head</th>
          <th>Children</th>
        </tr>
      </thead>
      <tbody>
        {parsing.map((row, i) => (
          <tr key={i}>
            <td className="dep-token-cell">{row.token}</td>
            <td>
              <span
                className={`dep-label-badge ${row.dep === 'ROOT' ? 'root' : ''}`}
                data-tooltip={getDep(row.dep)}
              >
                {row.dep}
              </span>
            </td>
            <td className="dep-head-cell">{row.head}</td>
            <td>
              {row.children.length > 0 ? (
                <div className="dep-children">
                  {row.children.map((c, j) => (
                    <span key={j} className="dep-child">{c}</span>
                  ))}
                </div>
              ) : (
                <span style={{ color: '#2d3748', fontSize: '0.8rem' }}>—</span>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
