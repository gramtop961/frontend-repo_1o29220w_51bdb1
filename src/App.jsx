import React, { useMemo, useState } from 'react';
import HeroSpline from './components/HeroSpline.jsx';
import FilterPanel from './components/FilterPanel.jsx';
import EventCard from './components/EventCard.jsx';
import NewsStrip from './components/NewsStrip.jsx';

const MOCK_EVENTS = [
  {
    id: 'e1',
    title: 'Midnight Jazz Festival',
    summary: 'An open-air celebration of contemporary and classic jazz with local ensembles.',
    date: '2025-11-21',
    rating: 4.6,
    categories: ['Music', 'Festival'],
    cover: 'https://images.unsplash.com/photo-1504805572947-34fad45aed93?q=80&w=1600&auto=format&fit=crop',
    location: { name: 'Riverside Park', lat: 40.71, lng: -74.01 },
  },
  {
    id: 'e2',
    title: 'Immersive Art Exhibition',
    summary: 'Step into a projection-mapped gallery of light and color with guided tours.',
    date: '2025-11-28',
    rating: 4.8,
    categories: ['Exhibition'],
    cover: 'https://images.unsplash.com/photo-1517816428104-797678c7cfde?q=80&w=1600&auto=format&fit=crop',
    location: { name: 'City Museum', lat: 40.73, lng: -73.99 },
  },
  {
    id: 'e3',
    title: 'Street Theater Pop-up',
    summary: 'A roaming troupe brings classic tales to life with modern flair.',
    date: '2025-12-05',
    rating: 4.2,
    categories: ['Theatre'],
    cover: 'https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?q=80&w=1600&auto=format&fit=crop',
    location: { name: 'Old Town Square', lat: 40.72, lng: -74.0 },
  },
];

const MOCK_NEWS = [
  { id: 'n1', title: 'City unveils winter culture pass', excerpt: 'Unlimited entry to select museums and venues with the new pass.' },
  { id: 'n2', title: 'Community mural completed', excerpt: 'Local artists finish a month-long collaboration in the arts district.' },
  { id: 'n3', title: 'Night market returns', excerpt: 'Street food and live performances every Friday through January.' },
];

export default function App() {
  const [filters, setFilters] = useState({ q: '', category: '', from: '', to: '', minRating: 0 });

  const filtered = useMemo(() => {
    return MOCK_EVENTS.filter((e) => {
      const matchesQ = filters.q
        ? [e.title, e.summary, e.location.name, ...e.categories].join(' ').toLowerCase().includes(filters.q.toLowerCase())
        : true;
      const matchesCat = filters.category ? e.categories.includes(filters.category) : true;
      const matchesFrom = filters.from ? new Date(e.date) >= new Date(filters.from) : true;
      const matchesTo = filters.to ? new Date(e.date) <= new Date(filters.to) : true;
      const matchesRating = e.rating >= filters.minRating;
      return matchesQ && matchesCat && matchesFrom && matchesTo && matchesRating;
    });
  }, [filters]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-zinc-950 text-zinc-100">
      <header className="max-w-7xl mx-auto px-4 py-6">
        <HeroSpline />
      </header>

      <main className="max-w-7xl mx-auto px-4 pb-16 space-y-6">
        <FilterPanel filters={filters} setFilters={setFilters} />

        <section aria-label="Events list and map" className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">Featured Events</h2>
              <a href="#" className="text-indigo-400 hover:text-indigo-300 text-sm underline">View all</a>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {filtered.map((e) => (
                <EventCard key={e.id} event={e} onOpen={() => alert(`Open event: ${e.title}`)} />
              ))}
            </div>
          </div>

          <aside className="space-y-4">
            <NewsStrip items={MOCK_NEWS} />
            <div className="rounded-2xl border border-zinc-800 p-4 bg-zinc-900">
              <h3 className="font-semibold">Map Preview</h3>
              <p className="text-sm text-zinc-400 mt-1">Interactive map will appear here in the full app. Markers will cluster and show distance.</p>
              <div className="mt-3 grid grid-cols-3 gap-2">
                {filtered.map((e) => (
                  <img key={e.id} src={e.cover} alt={`${e.title} thumbnail`} className="h-20 w-full object-cover rounded" />
                ))}
              </div>
            </div>
          </aside>
        </section>
      </main>

      <footer className="max-w-7xl mx-auto px-4 py-10 text-center text-sm text-zinc-400">
        Built for an immersive cultural discovery experience. Accessible, responsive, and fast.
      </footer>
    </div>
  );
}
