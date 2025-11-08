import React from 'react';
import { MapPin, Calendar, Star } from 'lucide-react';

export default function EventCard({ event, onOpen }) {
  return (
    <article
      role="button"
      tabIndex={0}
      aria-label={`Open details for ${event.title}`}
      onClick={() => onOpen?.(event)}
      onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onOpen?.(event)}
      className="group rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-4 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 transition"
    >
      <img
        src={event.cover}
        alt={event.title}
        className="w-full h-40 object-cover rounded-xl"
        loading="lazy"
      />
      <div className="mt-3 flex items-start justify-between gap-3">
        <h3 className="text-lg font-semibold line-clamp-1">{event.title}</h3>
        <div className="flex items-center gap-1 text-amber-500" aria-label={`Rating ${event.rating} out of 5`}>
          <Star size={16} fill="currentColor" />
          <span className="text-sm font-medium">{event.rating.toFixed(1)}</span>
        </div>
      </div>
      <p className="mt-1 text-sm text-zinc-600 line-clamp-2">{event.summary}</p>
      <div className="mt-3 flex flex-wrap items-center gap-3 text-sm text-zinc-700">
        <span className="inline-flex items-center gap-1"><Calendar size={16} aria-hidden="true" />{event.date}</span>
        <span className="inline-flex items-center gap-1"><MapPin size={16} aria-hidden="true" />{event.location.name}</span>
      </div>
      <div className="mt-3 flex flex-wrap gap-2">
        {event.categories.map((c) => (
          <span key={c} className="rounded-full bg-zinc-100 dark:bg-zinc-800 px-3 py-1 text-xs font-medium">{c}</span>
        ))}
      </div>
    </article>
  );
}
