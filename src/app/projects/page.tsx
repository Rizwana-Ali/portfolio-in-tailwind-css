
import Card from "@/components/card";
import Heading from "@/components/heading";
import React from 'react'
import Image from "next/image";



const data = [
  {
    id: 1,
    title:"figtemweb.png",
    desc: "I have designe a pixle perfect pre-designe figma template.",
    img: "/figtemweb.png",
    tags: ["Next.js", "Tailwind Css"],
  },



  {
    id: 2,
    title:"calculator",
    desc: "I have designe Calculator, problem solving and user interface designe.",
    img: "/calculator image2.png",
    tags: ["HTML", "Css", "Typescript"],
  },


  {
    id: 3,
    title:"Resume Builder",
    desc: "I have created Resume Builder to showcases creative design skills.",
    img: "/Rizwana Resume.png",
    tags: ["HTML","CSS", ],
  },


  {
    id: 4,
    title:"Aditable Resume",
    desc: "A Editable Resume project demonstrates my experties in front-end development.",
    img: "/Screenshot 2024-11-14 034519.png",
    tags: ["HTML", "CSS" ],
  },

]

const Projects = () => {
    return(
      
        <div  id="projects"  className='container p-5'>
            
            
            <Heading title="My projects"/>
            <div className='grid gap-10 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center'>
                {data.map((el) => (<Card
                key={el.id}
                title={el.title}
                desc={el.desc}
                img={el.img}
                tags={el.tags} 
                />))}
            </div>

        </div>
    )
}
export default Projects