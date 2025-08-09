import React from 'react'
import SkillsCard from './SkillsCard'

const Skill = () => {
  return (
    <section className="w-full py-10 text-white">
      <div className="max-w-6xl mx-auto flex flex-col gap-16 ">
        <div className="text-center" >
          <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-400 tracking-wide transition duration-500">
            Skills & Technologies
          </h1>
        </div>
        <div  data-aos="fade-up" className="place-items-center">
          <SkillsCard />     
        </div>
      </div>
    </section>

  )
}

export default Skill