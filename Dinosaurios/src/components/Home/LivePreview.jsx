import React, { useMemo, useState } from "react";
import "../../../src/css/sections/LivePreview.css";

export default function LivePreviewSection() {
  const status = "live";
  const provider = "youtube";
  const streamId = "dQw4w9WgXcQ";

  const [chatOpen, setChatOpen] = useState(false);

  // Countdown (solo si upcoming)
  const startTime = null;
  const countdown = useMemo(() => {
    if (!startTime) return null;
    const target = new Date(startTime).getTime();
    const diff = Math.max(0, target - Date.now());
    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const m = Math.floor((diff / (1000 * 60)) % 60);
    const s = Math.floor((diff / 1000) % 60);
    return { d, h, m, s };
  }, [startTime]);

  const isLive = status === "live";
  const isUpcoming = status === "upcoming";
  const isOffline = status === "offline";

  return (
    <section className="live-section container">
      <header className="live-head">
        <div className="head-left">
          <h2 className="live-title">Live Dig Preview</h2>
          <p className="live-sub">
            Fossils emerge before your eyes. Tune in daily for real-time discoveries.
          </p>
        </div>
        <div className="head-right">
          <StatusPill status={status} />
          <a href="/live" className="btn primary">Watch Live</a>
        </div>
      </header>

      <div className="live-grid">
        {/* Player principal */}
        <div className="player-card">
          <div className="player-wrap">
            <EmbedYouTube id={streamId} isLive={isLive} />

            {isUpcoming && countdown && (
              <div className="upcoming-overlay">
                <span className="label">Starting in</span>
                <div className="countdown">
                  <span>{countdown.d}d</span>
                  <span>{countdown.h}h</span>
                  <span>{countdown.m}m</span>
                  <span>{countdown.s}s</span>
                </div>
              </div>
            )}

            {isOffline && (
              <div className="offline-overlay">
                <h3>Stream offline</h3>
                <p>We’re prepping the next excavation segment. Check highlights below.</p>
              </div>
            )}
          </div>
        </div>

        {/* Panel lateral */}
        <aside className="side-card">
          <h3 className="side-title">Today’s Schedule</h3>
          <ul className="agenda">
            <li><span className="time">09:00</span><span className="item">Site setup & safety check</span></li>
            <li><span className="time">11:30</span><span className="item">Layer removal – Sector B</span></li>
            <li><span className="time">14:15</span><span className="item">Microfossil screening</span></li>
            <li><span className="time">17:00</span><span className="item">Wrap & Q/A</span></li>
          </ul>

          <div className="now">
            <h4>Now Playing</h4>
            <p>Trench cam – Sector B (overburden removal)</p>
          </div>

          <button className="btn ghost" onClick={() => setChatOpen(true)}>
            Open Chat
          </button>
        </aside>
      </div>

      {/* Clips */}
      <section className="clips">
        <h3 className="clips-title">Highlights</h3>
        <div className="clips-grid">
          {mockClips.map((c) => (
            <a key={c.id} className="clip" href={c.href}>
              <img src={c.thumb} alt={c.alt} />
              <span className="clip-label">{c.label}</span>
            </a>
          ))}
        </div>
      </section>

      {/* Overlay del chat */}
      {chatOpen && (
        <div className="chat-overlay">
          <div className="chat-window">
            <header className="chat-header">
              <h4>Live Chat</h4>
              <button className="close-btn" onClick={() => setChatOpen(false)}>×</button>
            </header>
            <div className="chat-messages">
              <div className="msg"><b>Ana:</b> Wow, amazing fossils!</div>
              <div className="msg"><b>Juan:</b> Sector B looking great 🔥</div>
            </div>
            <form
              className="chat-form"
              onSubmit={(e) => {
                e.preventDefault();
                // aquí iría lógica para enviar el mensaje
              }}
            >
              <input type="text" placeholder="Escribe tu mensaje..." />
              <button type="submit" className="btn primary">Send</button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}

function StatusPill({ status }) {
  const map = {
    live: { text: "LIVE", className: "pill live" },
    upcoming: { text: "UPCOMING", className: "pill upcoming" },
    offline: { text: "OFFLINE", className: "pill offline" },
  };
  const { text, className } = map[status] || map.offline;
  return (
    <span className={className}>
      {text}
      {status === "live" && <span className="dot" aria-hidden />} 
    </span>
  );
}

/* ===== Embeds ===== */
function EmbedYouTube({ id, isLive }) {
  const src = isLive
    ? `https://www.youtube.com/embed/${id}?autoplay=0&modestbranding=1&rel=0`
    : `https://www.youtube.com/embed/${id}?modestbranding=1&rel=0`;
  return (
    <div className="ratio">
      <iframe
        title="YouTube player"
        src={src}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
  );
}
function EmbedTwitch({ channel }) {
  const src = `https://player.twitch.tv/?channel=${channel}&parent=localhost&muted=false`;
  return (
    <div className="ratio">
      <iframe title="Twitch player" src={src} allowFullScreen frameBorder="0" scrolling="no" />
    </div>
  );
}
function EmbedMux({ playbackId }) {
  const src = `https://stream.mux.com/${playbackId}.m3u8`;
  return (
    <div className="ratio">
      <video controls playsInline>
        <source src={src} type="application/x-mpegURL" />
      </video>
    </div>
  );
}

const mockClips = [
  { id: 1, href: "#", thumb: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80&auto=format&fit=crop", alt: "Field cam highlight", label: "Bone fragment reveal" },
  { id: 2, href: "#", thumb: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&q=80&auto=format&fit=crop", alt: "Ridge cam highlight", label: "Ridge time-lapse" },
  { id: 3, href: "#", thumb: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800&q=80&auto=format&fit=crop", alt: "Tools highlight", label: "Careful brushing" },
  { id: 4, href: "#", thumb: "https://images.unsplash.com/photo-1520975922284-5f72f226c2a0?w=800&q=80&auto=format&fit=crop", alt: "Lab highlight", label: "Prepping in lab" },
];