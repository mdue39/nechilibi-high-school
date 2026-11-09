   import Header from './components/Header';
   import QuickLinks from './components/QuickLinks';
   import News from './components/News';
   import Campus from './components/Campus';
   import Principal from './components/Principal';
   import Academics from './components/Academics';
   import Events from './components/Events';
   import Technology from './components/Technology';
    import Apply from './components/Apply';
   import Footer from './components/Footer';
    

   export default function App() {
     return (
       <div>
         <Header />
         <main>
           <QuickLinks />
           <News />
           <Campus />
           <Principal />
           <Academics />
           <Events />
           <Technology />
           <Apply />
         </main>
         <Footer />
       </div>
     );
   }