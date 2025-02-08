import dynamic from 'next/dynamic';
import Hero from './components/Hero';
import LoadingSpinner from './components/LoadingSpinner';

// Dynamic imports for better performance
const Overview = dynamic(() => import('./components/Overview'), { 
  loading: () => <LoadingSpinner />,
  ssr: true 
});
const Team = dynamic(() => import('./components/Team'), { 
  loading: () => <LoadingSpinner />,
  ssr: true 
});
const Services = dynamic(() => import('./components/Services'), { 
  loading: () => <LoadingSpinner />,
  ssr: true 
});
const Engagement = dynamic(() => import('./components/Engagement'), { 
  loading: () => <LoadingSpinner />,
  ssr: true 
});
const Contact = dynamic(() => import('./components/Contact'), { 
  loading: () => <LoadingSpinner />,
  ssr: true 
});

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <section id="overview" className="scroll-mt-24">
        <Overview />
      </section>
      <section id="team" className="scroll-mt-24">
        <Team />
      </section>
      <section id="services" className="scroll-mt-24">
        <Services />
      </section>
      <section id="engagement" className="scroll-mt-24">
        <Engagement />
      </section>
      <section id="contact" className="scroll-mt-24">
        <Contact />
      </section>
    </>
  );
};

export default Home;

