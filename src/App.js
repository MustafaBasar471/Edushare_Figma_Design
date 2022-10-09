import {
  Navbar,
  Header,
  Brand,
  HowItWorks,
  HowItWorks2,
} from "./components/index";

function App() {
  return (
    <div className="max-w-[73.75rem] mx-auto">
      <Navbar />
      <Header />
      <Brand />
      <HowItWorks />
      <HowItWorks2 />
    </div>
  );
}

export default App;
