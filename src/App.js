import {
  Navbar,
  Header,
  Brand,
  HowItWorks,
  HowItWorks2,
  Features,
  Testimonial,
  Pricing,
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
    </div>
  );
}

export default App;
