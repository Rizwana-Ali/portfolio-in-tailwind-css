
const Skills = () => {
    return(
        <div id="skills" className="container pt-32">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div data-aos="zoom-in-up">
                <h2 className="text-4xl md:text-5xl">Technologies I work with</h2>
                <p className="text-white pt-10 pb-72">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi quas deserunt voluptatem, porro commodi temporibus quisquam ut, blanditiis hic nam laboriosam reprehenderit at ipsum doloremque a! Dolor reprehenderit minima deleniti.</p>
            </div>
            <div>
            <h1 className="text-4xl md:text-5xl">My Skills</h1>

                <div className="grid grid-cols-2 text-[#34e7de] text-3xl  sm:text-4xl">
                    
                    <div className="space-y-2 mt-10">
                        
                        
                        <h2 data-aos="zoom-in-up">Typescript</h2>
                        <h2 data-aos="zoom-in-up">Next.js</h2>
                        <h2 data-aos="zoom-in-up">Tailwind css</h2>
                          
                    </div>

                    <div className="space-y-2 pb-72 mt-10">
                        <h2 data-aos="zoom-in-up">CSS</h2>
                        <h2 data-aos="zoom-in-up">HTML</h2>
                        <h2 data-aos="zoom-in-up">JavaScript</h2>
                          
                    </div>
                </div>
            </div>
          </div>
        </div>
    )
}

export default Skills