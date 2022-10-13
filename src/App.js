import {
  Navbar,
  Header,
  Brand,
  HowItWorks,
  HowItWorks2,
  Features,
  Testimonial,
  Pricing,
  Footer,
} from "./components/index";

function App() {
  return (
    <div className="max-w-[73.75rem] mx-auto">
      <Navbar />
      <Header />
      <Brand />
      <HowItWorks />
      <HowItWorks2 />
      <Features />
      <Testimonial />
      <Pricing />
      <Footer />
    </div>
  );
}

export default App;
