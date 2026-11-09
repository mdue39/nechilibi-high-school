const PROGRAMS = [
  {
    name: 'Mathematics',
    text: 'Build practical problem-solving skills, from foundational concepts to advanced topics.',
  },
  {
    name: 'Sciences',
    text: 'Explore the natural world through scientific inquiry and hands-on learning.',
  },
  {
    name: 'Languages',
    text: 'Strengthen reading, writing, communication, and language skills.',
  },
  {
    name: 'Humanities',
    text: 'Study history, society, and culture to better understand the world.',
  },
];

export default function Academics() {
  return (
    <section id="academics" className="max-w-6xl mx-auto px-5 py-14">
      <h2 className="font-serif font-semibold text-3xl">Academics</h2>
      <p className="mt-2 text-muted max-w-xl">
        A broad program of study that prepares students for their next steps.
      </p>
      <dl className="mt-8 grid gap-x-10 gap-y-8 md:grid-cols-2">
        {PROGRAMS.map((program) => (
          <div key={program.name} className="border-l-2 border-gold pl-5">
            <dt className="font-serif font-semibold text-xl">{program.name}</dt>
            <dd className="mt-1 text-muted leading-relaxed">{program.text}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}