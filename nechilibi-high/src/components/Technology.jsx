   import studentsRobots from '../assets/students-robots.jpg';
   import studentsProgramming from '../assets/students-programming.jpg';

   export default function Technology() {
     return (
       <section id="student-life" className="bg-surface border-y border-line">
         <div className="max-w-6xl mx-auto px-5 py-14">
           <h2 className="font-serif font-semibold text-3xl">Learning with technology</h2>
           <p className="mt-2 text-muted max-w-xl leading-relaxed">Students use tablets and small programmable robots to practice coding and problem solving.</p>
           <div className="mt-8 grid gap-4 md:grid-cols-[1.6fr_1fr]">
             <img src={studentsRobots} alt="Students in purple uniforms line up with tablets to control small robots on the floor" className="w-full h-72 md:h-[420px] object-cover" />
             <img src={studentsProgramming} alt="Two students programming a robot from tablets at a work table" className="w-full h-72 md:h-[420px] object-cover object-top" />
           </div>
         </div>
       </section>
     );
   }