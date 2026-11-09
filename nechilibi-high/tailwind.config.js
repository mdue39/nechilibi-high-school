   /** @type {import('tailwindcss').Config} */
   export default {
     content: ["./index.html", "./src/**/*.{js,jsx}"],
     theme: {
       extend: {
         colors: {
           bg: 'var(--bg)', surface: 'var(--surface)', ink: 'var(--ink)',
           muted: 'var(--muted)', brand: 'var(--brand)', gold: 'var(--gold)', line: 'var(--line)',
         },
         fontFamily: {
           serif: ['"Source Serif 4"', 'Georgia', 'serif'],
           sans: ['"Source Sans 3"', 'system-ui', 'sans-serif'],
         },
       },
     },
     plugins: [],
   }