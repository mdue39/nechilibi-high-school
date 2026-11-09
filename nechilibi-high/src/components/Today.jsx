import { useState, useEffect } from 'react';

const t = (h, m) => h * 60 + m;

const MORNING = [
  { name: 'Classes', s: t(7,30),  e: t(10,0) },
  { name: 'Break',   s: t(10,0),  e: t(10,30) },
  { name: 'Classes', s: t(10,30), e: t(13,0) },
  { name: 'Lunch',   s: t(13,0),  e: t(14,0) },
];
const REGULAR = [...MORNING, { name: 'Classes',     s: t(14,0), e: t(16,0) }];
const SPORTS  = [...MORNING, { name: 'Sports time', s: t(14,0), e: t(16,0) }];
const FRIDAY  = MORNING; // dismissal at 2:00 PM, when lunch ends

// 0 = Sunday ... 6 = Saturday
const scheduleFor = (day) => (day === 2 || day === 4 ? SPORTS : day === 5 ? FRIDAY : REGULAR);

const fmt = (min) => { const h = Math.floor(min / 60), m = String(min % 60).padStart(2, '0'); return `${((h + 11) % 12) + 1}:${m}`; };

export default function Today() {
  const [now, setNow] = useState(new Date());
  useEffect(() => { const id = setInterval(() => setNow(new Date()), 30000); return () => clearInterval(id); }, []);
  const mins = now.getHours() * 60 + now.getMinutes();
  const weekend = now.getDay() === 0 || now.getDay() === 6;
  const BELLS = scheduleFor(now.getDay());
  const idx = weekend ? -1 : BELLS.findIndex(b => mins >= b.s && mins < b.e);
  const current = BELLS[idx];
  const next = weekend ? undefined : BELLS.find(b => b.s > mins);
  let status;
  if (weekend) status = `No school today · Classes resume Monday at ${fmt(REGULAR[0].s)}`;
  else if (current) status = `${current.name} · ${current.e - mins} minutes remaining`;
  else if (next) status = `School starts at ${fmt(next.s)}`;
  else status = 'Classes have ended for the day';
  return (
    <div className="bg-surface text-ink rounded-sm border-t-4 border-gold p-5 sm:p-6 w-full max-w-md shadow-lg">
      <h2 className="font-serif font-semibold text-xl">Today’s bell schedule</h2>
      <p className="text-sm text-muted mt-1" aria-live="polite">{status}</p>
      {!weekend && (
        <ul className="mt-4 divide-y divide-line">
          {BELLS.map((b, i) => {
            const active = i === idx;
            return (
              <li key={`${b.name}-${b.s}`} className={`flex justify-between py-2 px-3 -mx-3 ${active ? 'bg-brand text-white font-semibold' : ''}`}>
                <span>{b.name}</span>
                <span className={`text-sm tabular-nums ${active ? '' : 'text-muted'}`}>{fmt(b.s)} – {fmt(b.e)}</span>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}