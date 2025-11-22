export default function Card({children, title}) {
  return (
    <div className="sp-card" role="group" aria-label={title || 'card'}>
      {title && <h3>{title}</h3>}
      <div className="card-body">{children}</div>
    </div>
  );
}
