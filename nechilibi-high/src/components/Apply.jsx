import { useState } from 'react';

// While true, the form shows a banner saying nothing is sent anywhere.
// Set to false once sendApplication() delivers applications for real (step 2).
const DEMO_MODE = true;

const FORMS = {
  'O Level': ['Form 1', 'Form 2', 'Form 3', 'Form 4'],
  'A Level': ['Lower 6', 'Upper 6'],
};
const RELATIONSHIPS = ['Mother', 'Father', 'Guardian', 'Other'];

const EMPTY = {
  firstName: '', lastName: '', dob: '', grade: '', previousSchool: '',
  guardianName: '', relationship: '', phone: '', email: '', notes: '', consent: false,
};

// Placeholder: waits briefly and does nothing else. Step 2 replaces this.
async function sendApplication() {
  await new Promise((resolve) => setTimeout(resolve, 600));
}

function validate(v) {
  const e = {};
  if (!v.firstName.trim()) e.firstName = 'Enter the student’s first name.';
  if (!v.lastName.trim()) e.lastName = 'Enter the student’s last name.';
  if (!v.dob) e.dob = 'Enter the student’s date of birth.';
  else if (new Date(v.dob) > new Date()) e.dob = 'The date of birth cannot be in the future.';
  if (!v.grade) e.grade = 'Choose the form being applied for.';
  if (!v.guardianName.trim()) e.guardianName = 'Enter the parent or guardian’s full name.';
  if (!v.relationship) e.relationship = 'Choose the relationship to the student.';
  if (!v.phone.trim()) e.phone = 'Enter a phone number.';
  else if (v.phone.replace(/\D/g, '').length < 7) e.phone = 'Enter a valid phone number.';
  if (!v.email.trim()) e.email = 'Enter an email address.';
  else if (!/^\S+@\S+\.\S+$/.test(v.email.trim())) e.email = 'Enter a valid email address.';
  if (!v.consent) e.consent = 'Please confirm before submitting.';
  return e;
}

const inputClass = (error) =>
  `w-full bg-bg text-ink border px-3 py-2 ${error ? 'border-red-600' : 'border-line'}`;

function Field({ id, label, error, hint, wide, children }) {
  return (
    <div className={wide ? 'sm:col-span-2' : undefined}>
      <label htmlFor={id} className="block font-semibold mb-1">{label}</label>
      {children}
      {hint && !error && <p className="text-sm text-muted mt-1">{hint}</p>}
      {error && <p id={`${id}-error`} className="text-sm font-semibold mt-1">⚠ {error}</p>}
    </div>
  );
}

export default function Apply() {
  const [values, setValues] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | sending | sent | failed

  const set = (name) => (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setValues((v) => ({ ...v, [name]: value }));
  };

  const field = (name) => ({
    id: name,
    name,
    value: values[name],
    onChange: set(name),
    className: inputClass(errors[name]),
    'aria-invalid': errors[name] ? 'true' : undefined,
    'aria-describedby': errors[name] ? `${name}-error` : undefined,
  });

  async function handleSubmit(e) {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    const keys = Object.keys(found);
    if (keys.length) {
      document.getElementById(keys[0])?.focus();
      return;
    }
    setStatus('sending');
    try {
      await sendApplication(values);
      setValues(EMPTY);
      setStatus('sent');
    } catch {
      setStatus('failed');
    }
  }

  const today = new Date().toISOString().split('T')[0];

  return (
    <section id="apply" className="max-w-6xl mx-auto px-5 py-14">
      <h2 className="font-serif font-semibold text-3xl">Apply for admission</h2>
      <p className="mt-2 text-muted max-w-xl leading-relaxed">Complete this form to apply for a place from Form 1 to Upper 6. The school will contact you about the next steps.</p>

      {status === 'sent' ? (
        <div role="status" className="mt-8 max-w-3xl bg-surface border border-line border-t-4 border-t-gold p-6">
          <h3 className="font-serif font-semibold text-xl">Application submitted</h3>
          <p className="mt-2 text-muted leading-relaxed">Thank you. The school will contact you using the email address or phone number you provided.</p>
          {DEMO_MODE && <p className="mt-2 text-sm font-semibold">Demo mode: nothing was actually sent.</p>}
          <button type="button" onClick={() => setStatus('idle')} className="mt-4 underline underline-offset-4 decoration-gold decoration-2">Submit another application</button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="mt-8 max-w-3xl space-y-6">
          {DEMO_MODE && <p className="border border-gold p-3 text-sm">Demo mode: this form does not send anything yet.</p>}

          <fieldset className="bg-surface border border-line p-6">
            <legend className="font-serif font-semibold text-xl px-2">Student</legend>
            <div className="grid gap-5 sm:grid-cols-2">
              <Field id="firstName" label="First name" error={errors.firstName}>
                <input type="text" autoComplete="given-name" {...field('firstName')} />
              </Field>
              <Field id="lastName" label="Last name" error={errors.lastName}>
                <input type="text" autoComplete="family-name" {...field('lastName')} />
              </Field>
              <Field id="dob" label="Date of birth" error={errors.dob}>
                <input type="date" max={today} {...field('dob')} />
              </Field>
              <Field id="grade" label="Form applying for" error={errors.grade}>
                <select {...field('grade')}>
                  <option value="">Choose a form</option>
                  {Object.entries(FORMS).map(([level, forms]) => (
                    <optgroup key={level} label={level}>
                      {forms.map((f) => <option key={f} value={f}>{f}</option>)}
                    </optgroup>
                  ))}
                </select>
              </Field>
              <Field id="previousSchool" label="Previous school" hint="Optional." wide>
                <input type="text" {...field('previousSchool')} />
              </Field>
            </div>
          </fieldset>

          <fieldset className="bg-surface border border-line p-6">
            <legend className="font-serif font-semibold text-xl px-2">Parent or guardian</legend>
            <div className="grid gap-5 sm:grid-cols-2">
              <Field id="guardianName" label="Full name" error={errors.guardianName}>
                <input type="text" autoComplete="name" {...field('guardianName')} />
              </Field>
              <Field id="relationship" label="Relationship to student" error={errors.relationship}>
                <select {...field('relationship')}>
                  <option value="">Choose one</option>
                  {RELATIONSHIPS.map((r) => <option key={r} value={r}>{r}</option>)}
                </select>
              </Field>
              <Field id="phone" label="Phone number" error={errors.phone}>
                <input type="tel" autoComplete="tel" {...field('phone')} />
              </Field>
              <Field id="email" label="Email address" error={errors.email}>
                <input type="email" autoComplete="email" {...field('email')} />
              </Field>
              <Field id="notes" label="Anything else the school should know" hint="Optional. Please do not include ID numbers or medical details." wide>
                <textarea rows={4} maxLength={500} {...field('notes')} />
              </Field>
            </div>
          </fieldset>

          <div>
            <label className="flex items-start gap-3">
              <input
                type="checkbox"
                id="consent"
                name="consent"
                checked={values.consent}
                onChange={set('consent')}
                aria-invalid={errors.consent ? 'true' : undefined}
                aria-describedby={errors.consent ? 'consent-error' : undefined}
                className="mt-1 w-4 h-4 accent-gold"
              />
              <span>I confirm the information above is correct and that the school may contact me about this application.</span>
            </label>
            {errors.consent && <p id="consent-error" className="text-sm font-semibold mt-1">⚠ {errors.consent}</p>}
          </div>

          {status === 'failed' && (
            <p role="alert" className="border border-red-600 p-3 text-sm font-semibold">Something went wrong and the application was not sent. Please try again, or contact the school office.</p>
          )}

          <button type="submit" disabled={status === 'sending'} className="bg-gold text-[#2E0F47] font-semibold px-6 py-3 rounded-full disabled:opacity-60">
            {status === 'sending' ? 'Sending…' : 'Submit application'}
          </button>
        </form>
      )}
    </section>
  );
}
