   export default function Principal() {
     return (
       <section id="about" className="bg-surface border-y border-line">
         <div className="max-w-6xl mx-auto px-5 py-14 grid gap-8 md:grid-cols-[1fr_2fr]">
           <h2 className="font-serif font-semibold text-3xl">A message from the principal</h2>
           <div className="max-w-2xl space-y-4 text-muted leading-relaxed">
             <p>Welcome to Nechilibi High School. Our work rests on a simple commitment: every student is known by name, challenged in the classroom, and supported outside it.</p>
             <p>Our teachers and staff partner with families so that each student graduates ready for the next step, whether that is university, training, or work. I invite you to visit, meet our community, and see our school in session.</p>
             <p className="text-ink font-semibold">Principal’s Name, Principal</p>
           </div>
         </div>
       </section>
     );
   }