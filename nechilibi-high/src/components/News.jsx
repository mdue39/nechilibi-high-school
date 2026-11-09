   import { useState } from 'react';

   const NEWS = [
     { cat: 'Academics', date: 'Nov 2', title: 'Spring course selection opens Monday', body: 'Students choose electives through the counseling portal. Selections close November 20.' },
     { cat: 'Athletics', date: 'Oct 31', title: 'Varsity soccer advances to the semifinal', body: 'The team won 2–1 on Saturday. The semifinal is at home on November 10.' },
     { cat: 'Arts', date: 'Oct 29', title: 'Fall Showcase tickets are on sale', body: 'Theatre, band, and visual art share one evening on November 21. Tickets are available at the front office.' },
     { cat: 'Academics', date: 'Oct 27', title: 'Robotics team wins regional qualifier', body: 'Eleven students advance to the state competition in January.' },
     { cat: 'Athletics', date: 'Oct 24', title: 'Winter sports tryouts begin November 17', body: 'Students need a signed physical form before their first session.' },
   ];

   export default function News() {
     const cats = ['All', 'Academics', 'Athletics', 'Arts'];
     const [cat, setCat] = useState('All');
     const items = NEWS.filter(n => cat === 'All' || n.cat === cat);
     return (
       <section className="max-w-6xl mx-auto px-5 py-14">
         <div className="flex flex-wrap items-end justify-between gap-4">
           <h2 className="font-serif font-semibold text-3xl">School news</h2>
           <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter news">
             {cats.map(c => (
               <button key={c} role="tab" aria-selected={cat === c} onClick={() => setCat(c)}
                 className={`px-4 py-1.5 text-sm font-medium border rounded-full transition-colors ${cat === c ? 'bg-brand text-white border-brand' : 'border-line text-muted hover:text-ink'}`}>{c}</button>
             ))}
           </div>
         </div>
         <div className="mt-6 grid gap-5 md:grid-cols-2">
           {items.map(n => (
             <article key={n.title} className="bg-surface border border-line p-6">
               <p className="text-sm text-muted">{n.cat} · {n.date}</p>
               <h3 className="font-serif font-semibold text-xl mt-1">{n.title}</h3>
               <p className="mt-2 text-muted leading-relaxed">{n.body}</p>
             </article>
           ))}
         </div>
       </section>
     );
   }