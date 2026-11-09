import Crest from './Crest';

const PHONE = '+263 77 914 4795';
const EMAIL = 'mduduzimpofu155@gmail.com';

const linkClass = 'underline underline-offset-4 decoration-gold decoration-2 hover:text-white';

export default function Footer() {
  return (
    <footer id="contact" className="bg-brand text-white">
      <div className="max-w-6xl mx-auto px-5 py-12 grid gap-8 md:grid-cols-3">
        <div className="flex items-start gap-3">
          <Crest small />
          <p className="font-serif font-semibold text-xl leading-tight">Nechilibi High School</p>
        </div>
        <address className="not-italic text-white/85 leading-relaxed">
          Street address<br />
          Town or city, Province<br />
          <a href={`tel:${PHONE.replace(/[^\d+]/g, '')}`} className={linkClass}>{PHONE}</a><br />
          <a href={`mailto:${EMAIL}`} className={linkClass}>{EMAIL}</a>
        </address>
        <div className="text-white/85 leading-relaxed">
          <p className="font-semibold text-white">Office hours</p>
          <p>Monday to Friday, 7:30 AM – 4:00 PM</p>
        </div>
      </div>
      <div className="border-t border-white/10 text-sm text-white/60">
        <p className="max-w-6xl mx-auto px-5 py-4">© 2026 Nechilibi High School. All rights reserved.</p>
      </div>
    </footer>
  );
}