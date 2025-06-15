import './App.css'
import NavBar from "./components/NavBar"
import HeroNewsSection from "./components/HeroNewsSection"
import NewNewsSection from "./components/NewNewsSection"
import TopNewsSection from "./components/TopNewsSection"

function App() {

  return (

    <div className="bg-[#FEFDF9] px-[1rem] py-[1rem] scrollbar-thin
                      sm:p-[2rem] xl:px-[8rem] 2xl:px-[15rem]">
      <NavBar />

      <div className="my-[2rem] flex flex-col gap-8
                        md:flex-row">
        <div className="w-[100%]"> <HeroNewsSection /> </div>
        <div className="min-w-[32.3%]"> <NewNewsSection /> </div>
      </div>

      <TopNewsSection />

    </div>

  )
}

export default App