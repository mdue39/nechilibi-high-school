   const QUICK = [
     { title: 'Admissions', text: 'Apply for the next school year.' },
     { title: 'Parent portal', text: 'Grades, attendance, and messages.' },
     { title: 'Student portal', text: 'Assignments and course materials.' },
     { title: 'Staff directory', text: 'Find and contact a teacher or office.' },
   ];

   export default function QuickLinks() {
     return (
       <section id="admissions" className="max-w-6xl mx-auto px-5 -mt-1 py-10 grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-4 border border-line my-10">
         {QUICK.map(q => (
           <a key={q.title} href="#contact" className="bg-surface p-5 hover:bg-bg transition-colors">
             <h3 className="font-serif font-semibold text-lg">{q.title}</h3>
             <p className="text-sm text-muted mt-1">{q.text}</p>
           </a>
         ))}
       </section>
     );
   }