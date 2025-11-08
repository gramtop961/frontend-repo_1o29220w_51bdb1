import React from 'react';
import { Newspaper } from 'lucide-react';

export default function NewsStrip({ items }) {
  return (
    <section aria-label="Latest cultural news" className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 overflow-hidden">
      <div className="flex items-center gap-2 px-4 py-2 bg-zinc-50 dark:bg-zinc-800 border-b border-zinc-200 dark:border-zinc-700">
        <Newspaper size={18} aria-hidden="true" />
        <h2 className="text-sm font-semibold">Latest News</h2>
      </div>
      <ul className="divide-y divide-zinc-200 dark:divide-zinc-800">
        {items.map((n) => (
          <li key={n.id} className="px-4 py-3 hover:bg-zinc-50/60 focus-within:bg-zinc-50/60">
            <a href="#" className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded">
              <p className="text-sm font-medium line-clamp-1">{n.title}</p>
              <p className="text-xs text-zinc-600 line-clamp-2">{n.excerpt}</p>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
