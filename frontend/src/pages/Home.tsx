import HeroSection from '../components/HeroSection';
import HowItWorks from '../components/HowItWorks';
import Features from '../components/Features';
import ExampleScenario from '../components/ExampleScenario';
function Home() {

  return (
    <div>
      <nav>
        <a href="/#how-it-works">How It Works</a>
        <a href="/#features">Features</a>
        <a href="/#example">Example</a>
      </nav>
      {/* Placeholder image or other content */}
      <main>
        <HeroSection />
        <HowItWorks />
        <Features />
        <ExampleScenario />
      </main>
    </div>
  );
}

export default Home;