   const EVENTS = [
     { d: 'Nov 10', day: 'Tue', title: 'Varsity soccer semifinal', where: 'School field, 4:00 PM' },
     { d: 'Nov 14', day: 'Sat', title: 'Open house for incoming 9th graders', where: 'Main hall, 10:00 AM' },
     { d: 'Nov 19', day: 'Thu', title: 'Parent–teacher conferences', where: 'Classrooms, 3:00–7:00 PM' },
     { d: 'Nov 21', day: 'Sat', title: 'Fall Showcase', where: 'Auditorium, 7:00 PM' },
   ];

   export default function Events() {
     return (
       <section id="calendar" className="bg-surface border-y border-line">
         <div className="max-w-6xl mx-auto px-5 py-14">
           <h2 className="font-serif font-semibold text-3xl">Upcoming events</h2>
           <ul className="mt-6 divide-y divide-line border-y border-line">
             {EVENTS.map(e => (
               <li key={e.title} className="flex gap-6 py-4 items-center">
                 <div className="w-16 shrink-0">
                   <div className="font-serif font-semibold text-xl leading-none">{e.d}</div>
                   <div className="text-sm text-muted mt-1">{e.day}</div>
                 </div>
                 <div>
                   <p className="font-semibold">{e.title}</p>
                   <p className="text-sm text-muted">{e.where}</p>
                 </div>
               </li>
             ))}
           </ul>
         </div>
       </section>
     );
   }