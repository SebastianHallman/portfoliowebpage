import React from 'react'
import SkillCard from './SkillCard';
import { SiHtml5, SiCss3, SiJavascript, SiReact, SiNodedotjs, SiUnity, SiFirebase, SiFlutter, SiWordpress, SiPhp, SiMysql, SiPython, SiOpenai, SiOpenaigym, SiChessdotcom } from 'react-icons/si';
import { FaVideo } from 'react-icons/fa';

export default function About() {

    const skills = [
    { name: 'HTML', Icon: SiHtml5 },
    { name: 'CSS', Icon: SiCss3 },
    { name: 'JavaScript', Icon: SiJavascript },
    { name: 'React', Icon: SiReact },
    { name: 'Node.js', Icon: SiNodedotjs },
    { name: 'Unity', Icon: SiUnity },
    { name: 'Firebase', Icon: SiFirebase },
    { name: 'Flutter', Icon: SiFlutter },
    { name: 'Video editing', Icon: FaVideo },
    { name: 'WordPress', Icon: SiWordpress },
    { name: 'PHP', Icon: SiPhp },
    { name: 'MySQL', Icon: SiMysql },
    { name: 'Python', Icon: SiPython },
    { name: 'Codex', Icon: SiOpenai },
    { name: 'Chess', Icon: SiChessdotcom },

];


  return (
    <div id="about" className='h-screen w-[90%] text-[#FAFDF6] flex flex-col mx-auto items-center lg:flex-row snap-start gap-8 overflow-hidden'>
        <div className='flex flex-col w-full min-h-0'>
            <h1 className='text-4xl font-bold lg:text-[64px] text-center text-[#DDD92A] lg:text-left p-6'>About Me</h1>
            <p className='text-lg lg:text-xl font-medium lg:max-w-3xl p-6 text-center lg:text-left'>I'm Sebastian, a curious media technology enthusiast with a Master's in Media Technology. I build dynamic, accessible web experiences and enjoy exploring unfamiliar problems. I work mainly with JavaScript, HTML, and CSS, using frameworks like React and Vue, and I actively seek out new knowledge to improve my work.</p>
            
        </div>

        <div className='flex flex-col w-full min-h-0'>
            <h1 className='text-4xl font-bold lg:text-[64px] text-center text-[#DDD92A] lg:text-left p-6'>Skills</h1>
            <div className='grid grid-cols-2 md:grid-cols-3 gap-6 lg:justify-start w-full flex-1 min-h-0 overflow-y-auto'>
                {skills.map((skill, index) => (
                    <SkillCard key={index} skill={skill.name} Icon={skill.Icon} />
                ))}
            </div>
        </div>
    </div>
  )
}
