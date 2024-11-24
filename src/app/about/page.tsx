import React from 'react'
import Image from 'next/image'



const About = () => {
  return (
    <main className='flex flex-col md:flex-row'>
    <div  id="about"  className='container pt-20 ml-20'>
      <h2 className='text-4xl md:text-5xl font-bold'  data-aos="zoom-in-up">About Me</h2>
      <p className='text-white pt-20 ' data-aos="zoom-in-up">As a developer ,I am a driven by a passion for innovation<br/> and a commitment to excellence. I build fast scalable, and<br/> visually appealing web application.</p>
    </div>
    {/* <div> */}
    <div className='ml-28 mt-20 md: mr-44 mb-72 '>
      <Image src={"/round image.jpg"} width={400} height={200} alt='about image'></Image>
    </div>
  </main>
  )
}

export default About
