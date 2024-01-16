import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import TaskBoard from "./components/TaskBoard/TaskBoard";
function App() {
  return (
    <div className="bg-[#191D26] font-[Inter] text-white">
      <Header />
      {/* <!-- Navbar Ends -->

	<!-- Begin hero --> */}
      <Hero />
      {/* <!-- End Hero -->

	<!-- Begin Table --> */}
      <TaskBoard />
      {/* <!-- End Table -->

	<!-- Footer --> */}
      <Footer />
    </div>
  );
}

export default App;
