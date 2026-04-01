export default function StageCard({ icon, title, badge, delay = '0ms', children }) {
  return (
    <div className="stage-card" style={{ animationDelay: delay }}>
      <div className="stage-header">
        <span className="stage-icon">{icon}</span>
        <span className="stage-title">{title}</span>
        {badge && <span className="stage-badge">{badge}</span>}
      </div>
      {children}
    </div>
  )
}
