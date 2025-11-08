import React from 'react';
import Spline from '@splinetool/react-spline';
import { Sparkles } from 'lucide-react';

export default function HeroSpline() {
  return (
    <section aria-label="Interactive hero" className="relative w-full h-[420px] rounded-3xl overflow-hidden bg-black">
      <Spline
        scene="https://prod.spline.design/zks9uYILDPSX-UX6/scene.splinecode"
        style={{ width: '100%', height: '100%' }}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-6 md:p-10 text-white">
        <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 backdrop-blur-md ring-1 ring-white/20">
          <Sparkles size={16} aria-hidden="true" />
          <span className="text-xs font-medium tracking-wide uppercase">Discover Cultural Moments</span>
        </div>
        <h1 className="mt-3 text-3xl md:text-5xl font-bold leading-tight">
          Explore events, earn badges, and join the city’s cultural pulse
        </h1>
        <p className="mt-2 max-w-2xl text-white/80">
          Browse nearby festivals, exhibitions, and performances. Check in with QR codes, rate, comment, and climb the leaderboard.
        </p>
      </div>
    </section>
  );
}
