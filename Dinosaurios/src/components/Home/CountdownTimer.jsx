import React, { useEffect, useState } from "react";
import "../css/sections/CountdownTimer.css";

export default function CountdownTimer({ targetDate }) {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const pad = (num) => String(num).padStart(2, "0");

  return (
    <section className="countdown-section ">
      <div className="countdown-header">
        <h2 className="countdown-heading">
          LIVESTREAM EXCAVATION <span className="highlight-date">Starting September 25, 2025</span>
        </h2>
      </div>

      <div className="countdown-wrapper">
        <div className="time-box">
          <span className="time-value">{pad(timeLeft.days || 0)}</span>
          <span className="time-label">Días</span>
        </div>
        <div className="time-box">
          <span className="time-value">{pad(timeLeft.hours || 0)}</span>
          <span className="time-label">Horas</span>
        </div>
        <div className="time-box">
          <span className="time-value">{pad(timeLeft.minutes || 0)}</span>
          <span className="time-label">Minutos</span>
        </div>
        <div className="time-box">
          <span className="time-value">{pad(timeLeft.seconds || 0)}</span>
          <span className="time-label">Segundos</span>
        </div>
      </div>

      <p className="countdown-subtitle"></p>
    </section>
  );
}