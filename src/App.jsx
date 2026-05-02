import './App.css'
import SideBar from './components/SideBar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import WorkExperience from './components/WorkExperience'
import Contact from './components/Contact'
import Blog from './components/Blog'
import ChatBox from './components/ChatBox'

function App() {
  return (
    <div className='bg-black min-h-screen lg:flex'>
      <div className='flex-1 h-full align-middle'>
        <SideBar />
      </div>
      <div className='w-full pt-12 lg:pt-0 lg:ml-[10%] h-screen overflow-y-scroll md:snap-y md:snap-mandatory scroll-smooth'>
        <Hero />
        <About />
        <WorkExperience />
        <Projects />
        <Blog />
        <Contact />
      </div>
      <ChatBox />
    </div>
  )
}

export default App
