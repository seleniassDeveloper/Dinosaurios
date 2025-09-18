export default function SectionHeader({ kicker, title, subtitle, align="center" }) {
  return (
    <div className="container" style={{textAlign:align, marginBottom:18}}>
      {kicker && <div className="kicker">{kicker}</div>}
      {title && <h2 className="h2" style={{marginTop:6}}>{title}</h2>}
      {subtitle && <p className="lead" style={{margin:"6px auto 0", maxWidth:820}}>{subtitle}</p>}
    </div>
  );
}