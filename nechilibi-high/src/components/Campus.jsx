   import entranceSign from '../assets/entrance-sign.jpg';
   import classroomBlock from '../assets/classroom-block.jpg';
   import schoolGrounds from '../assets/school-grounds.jpg';

   export default function Campus() {
     return (
       <section id="campus" className="max-w-6xl mx-auto px-5 py-14">
         <h2 className="font-serif font-semibold text-3xl">Our campus</h2>
         <p className="mt-2 text-muted max-w-xl">Tree-lined paths lead past the cream classroom blocks to the main entrance.</p>
         <div className="mt-8 grid gap-4 md:grid-cols-2">
           <figure className="md:row-span-2"><img src={entranceSign} alt="The entrance arch reading Nechilibi High, beside a tree-lined path" className="w-full h-full object-cover aspect-[3/4] md:aspect-auto" /></figure>
           <figure><img src={classroomBlock} alt="A classroom block with green window frames and a tiled walkway" className="w-full h-full object-cover aspect-[4/3]" /></figure>
           <figure><img src={schoolGrounds} alt="Cream and black classroom blocks across the school grounds" className="w-full h-full object-cover aspect-[4/3]" /></figure>
         </div>
       </section>
     );
   }