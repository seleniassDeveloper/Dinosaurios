// src/components/LivePreviewSection.jsx
import React, { useMemo, useState } from "react";
import "../../../src/css/sections/LivePreview.css";

export default function LivePreviewSection() {
  const status = "live";
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
        {/* 📺 Player principal - sin iframe */}
        <div className="player-card">
          <div className="player-wrap">
            <div className="ratio blank-player">
              <p>🎥 Espacio reservado para tu video</p>
            </div>

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

        {/* 📅 Panel lateral */}
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

      {/* 🦕 Clips vacíos sin imágenes */}
      <section className="clips">
        <h3 className="clips-title">Highlights</h3>
        <div className="clips-grid">
          {[1, 2, 3, 4].map((id) => (
            <div key={id} className="clip">
              <div className="ratio blank-clip">
                <p>🦴 Espacio para imagen o clip</p>
              </div>
              <span className="clip-label">Fossil highlight #{id}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 💬 Overlay del chat */}
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
            <form className="chat-form" onSubmit={(e) => e.preventDefault()}>
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