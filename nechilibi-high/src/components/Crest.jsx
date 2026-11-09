   import logo from '../assets/logo.jpg';

   export default function Crest({ small }) {
     return (
       <img src={logo} alt="" className={`${small ? 'h-10' : 'h-12'} w-auto shrink-0`} />
     );
   }