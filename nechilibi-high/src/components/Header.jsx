   import { useState } from 'react';
   import Crest from './Crest';
   import Today from './Today';
     import ThemeToggle from './ThemeToggle';

   const NAV = ['About', 'Academics', 'Admissions', 'Student Life', 'Calendar'];

   export default function Header() {
     const [open, setOpen] = useState(false);
     const id = (n) => n.toLowerCase().replace(' ', '-');
     return (
       <>
           <div className="bg-brand text-white/80 text-sm border-b border-white/10">
    <div className="max-w-6xl mx-auto px-5 py-2 flex items-center justify-end gap-6">
      <a href="#contact" className="hover:text-white">Parents</a>
      <a href="#contact" className="hover:text-white">Students</a>
      <a href="#contact" className="hover:text-white">Staff</a>
      <a href="#contact" className="hover:text-white">Contact</a>
      <ThemeToggle />
    </div>
  </div>

         <header className="bg-brand text-white">
           <div className="max-w-6xl mx-auto px-5 py-5 flex items-center justify-between">
             <a href="#top" className="flex items-center gap-3">
               <Crest />
               <span className="font-serif font-semibold text-xl sm:text-2xl leading-tight">Nechilibi High School</span>
             </a>
             <nav className="hidden lg:flex gap-7 text-[15px]" aria-label="Main">
               {NAV.map(n => <a key={n} href={`#${id(n)}`} className="text-white/85 hover:text-white hover:underline underline-offset-8 decoration-gold decoration-2">{n}</a>)}
             </nav>
             <button className="lg:hidden px-3 py-2 border border-white/40 text-sm rounded-full" aria-expanded={open} onClick={() => setOpen(!open)}>{open ? 'Close' : 'Menu'}</button>
           </div>
           {open && (
             <nav className="lg:hidden px-5 pb-5 flex flex-col gap-3" aria-label="Mobile">
               {NAV.map(n => <a key={n} href={`#${id(n)}`} onClick={() => setOpen(false)}>{n}</a>)}
             </nav>
           )}
           <div id="top" className="max-w-6xl mx-auto px-5 pt-8 pb-16 grid gap-10 lg:grid-cols-[1.2fr_1fr] items-center">
             <div>
               <h1 className="font-serif font-semibold text-4xl sm:text-5xl leading-tight">Preparing students for college, career, and citizenship.</h1>
               <p className="mt-5 text-lg text-white/80 max-w-xl leading-relaxed">Nechilibi High School offers a rigorous academic program, committed teachers, and a full range of activities for students in Form One to Six.</p>
              <div className="mt-7 flex flex-wrap gap-3">
                 <a href="#admissions" className="bg-gold text-[#2E0F47] font-semibold px-6 py-3 rounded-full">Apply for admission</a>
                 <a href="#contact" className="border border-white/50 px-6 py-3 font-medium rounded-full">Schedule a visit</a>
               </div> 
             </div>
             <Today />
           </div>
         </header>
       </>
     );
   }