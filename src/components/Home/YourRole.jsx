
export default function YourRole() {
  return (
    <section className="section container my-5 your-role">
      <h2 className="h2">Your Role in the Dig</h2>
      <p className="muted">
        Your support brings science to life. Vote on where to dig next, name new discoveries, or enter sweepstakes for replica fossils and behind-the-scenes access.
      </p>
      <div className="cta-row">
        <a href="/donate" className="btn primary">Donate to Join</a>
        <a href="/sweepstakes" className="btn secondary">Enter Sweepstakes</a>
      </div>
    </section>
  );
}