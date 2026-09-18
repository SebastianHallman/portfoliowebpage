import { Helmet } from 'react-helmet-async'
import SideBar from '../components/SideBar'
import Hero from '../components/Hero'
import About from '../components/About'
import Projects from '../components/Projects'
import WorkExperience from '../components/WorkExperience'
import Contact from '../components/Contact'
import ChatBox from '../components/ChatBox'

export default function Portfolio() {
  return (
    <div className='bg-black min-h-screen lg:flex'>
      <Helmet>
        <title>Sebastian Hällman - Portfolio</title>
        <meta name='description' content='Portfolio of Sebastian Hällman — M.Sc. Media Technology, developer and designer.' />
        <meta property='og:title' content='Sebastian Hällman - Portfolio' />
        <meta property='og:description' content='Portfolio of Sebastian Hällman — M.Sc. Media Technology, developer and designer.' />
        <meta property='og:url' content='https://sebastianhallman.com' />
      </Helmet>
      <div className='flex-1 h-full align-middle'>
        <SideBar />
      </div>
      <div className='w-full pt-12 lg:pt-0 lg:ml-[10%] h-screen overflow-y-scroll md:snap-y md:snap-proximity scroll-smooth scroll-pt-16 lg:scroll-pt-0'>
        <Hero />
        <About />
        <WorkExperience />
        <Projects />
        <Contact />
      </div>
      <ChatBox />
    </div>
  )
}
