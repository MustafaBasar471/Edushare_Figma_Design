import {
  Navbar,
  Header,
  Brand,
  HowItWorks,
  HowItWorks2,
  Features,
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
    </div>
  );
}

export default App;
