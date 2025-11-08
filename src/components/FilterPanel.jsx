import React from 'react';

export default function FilterPanel({ filters, setFilters }) {
  function update(key, value) {
    setFilters((prev) => ({ ...prev, [key]: value }));
  }

  return (
    <section aria-label="Search and filters" className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-4">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
        <label className="flex flex-col gap-1">
          <span className="text-sm font-medium">Keyword</span>
          <input
            type="text"
            value={filters.q}
            onChange={(e) => update('q', e.target.value)}
            placeholder="Search events"
            className="w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </label>
        <label className="flex flex-col gap-1">
          <span className="text-sm font-medium">Category</span>
          <select
            value={filters.category}
            onChange={(e) => update('category', e.target.value)}
            className="w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="">All</option>
            <option>Music</option>
            <option>Exhibition</option>
            <option>Festival</option>
            <option>Theatre</option>
          </select>
        </label>
        <label className="flex flex-col gap-1">
          <span className="text-sm font-medium">From</span>
          <input
            type="date"
            value={filters.from}
            onChange={(e) => update('from', e.target.value)}
            className="w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </label>
        <label className="flex flex-col gap-1">
          <span className="text-sm font-medium">To</span>
          <input
            type="date"
            value={filters.to}
            onChange={(e) => update('to', e.target.value)}
            className="w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </label>
        <label className="flex flex-col gap-1">
          <span className="text-sm font-medium">Min Rating</span>
          <input
            type="range"
            min="0"
            max="5"
            step="0.5"
            value={filters.minRating}
            onChange={(e) => update('minRating', Number(e.target.value))}
            aria-label="Minimum rating"
          />
          <span className="text-xs text-zinc-600" aria-live="polite">{filters.minRating.toFixed(1)}+</span>
        </label>
      </div>
    </section>
  );
}
