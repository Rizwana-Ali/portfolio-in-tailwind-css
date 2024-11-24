"use client";
import React from 'react'



import AOS from"aos"
import "aos/dist/aos.css";
import { useEffect } from "react";
import Image from "next/image";

export default function Home() {
  useEffect (() => {
    AOS.init({
      easing: "ease-out-back",
      duration: 1200,
      delay: 100,
      mirror: true,
      anchorPlacement: "bottom-bottom",
      offset: 160,
    });
    AOS.refresh();
  }, []);


return (
    <main className='flex flex-col md:flex-row'>
    <div  id="about"  className='container pt-20 ml-20'>
      <h2 className='text-4xl md:text-5xl font-bold'  data-aos="zoom-in-up">Hello,<br/>I am Rizwana Ali <br/>I am<br/> Web Developer &<br/>Web Designer</h2>
      <p className='text-white pt-20 ' data-aos="zoom-in-up"></p>
    </div>
    {/* <div> */}
    <div className='ml-28 mt-32 md: mr-44 mb-72 '>
      <Image src={"/12.jpg"} width={800} height={500} alt='about image'></Image>
    </div>
  </main>
  )
}

 Home
