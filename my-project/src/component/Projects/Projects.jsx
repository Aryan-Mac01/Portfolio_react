import React from 'react';
import Devour1 from '../../assests/devour.png';
import Devour2 from '../../assests/devour.png';
import Devour3 from '../../assests/devour.png';
import Devour4 from '../../assests/devour.png';

const Project = () => {
    const projects = [
        {
            img: Devour1,
            title: "Image selector",
            desc: "An Image selector website made with Node.js, Vite, React, and Unsplash API.",
            live: "https://github.com/Aryan-Mac01/Image-Selector",
            code : "https://github.com/Aryan-Mac01/Image-Selector"
        },
        {
            img: Devour2,
            title: "Stack Overflow Clone",
            desc: "Fully Functional Clone of Stack Overflow made with React, Redux Tool-kit, Node.js, MongoDB, Mongoose.",
            live: "https://github.com/Aryan-Mac01/Image-Selector",
            code: "https://github.com/Aryan-Mac01/stack_overflow_clone"
        },
        {
            img: Devour3,
            title: "CodeStone",
            desc: "An Online Code Executor for HTML, CSS, JAVASCRIPT made with HTML, CSS, JAVASCRIPT.",
            live: "https://github.com/Aryan-Mac01/Image-Selector",
            code: "https://github.com/Aryan-Mac01/CodeStone"
        
        },
        {
            img: Devour4,
            title:"Code Compiler",
            desc: "Code Compiler for C++, Python, Java made with Node.js, Express.js, TailWind CSS, Judge0, Rapid API, Monaco Editor.",
            live: "https://github.com/Aryan-Mac01/Image-Selector",
            code: "https://github.com/Aryan-Mac01/code-compiler"
        }
    ];

    return (
        <section className='bg-primary text-white px-5 py-32' id='projects'>
            <div className='container mx-auto grid md:grid-cols-2 items-center md:justify-between'>
                <div className='about-info mb-5'>
                    <h2 className='text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-indigo-600 pb-2'>
                        Projects
                    </h2>

                    <p className='pb-5'>
                        These are some of my Projects. I have built these with MERN, Vanilla and TailWind CSS. Check them out.
                    </p>
                </div>
                <div className='about-img'>

                </div>
            </div>
            <div className='projects container mx-auto grid md:grid-cols-3 gap-10'>
                {projects.map((project, i) => {
                    return (
                        <div className='relative' key={i}>
                            <img src = {project.img} alt = {project.title}/>
                            <div className='flex absolute left-0 right-0 top-[13px] bottom-0 mx-auto w-[90%] h-[90%]  bg-primary  opacity-0 duration-500 justify-center flex-col hover:opacity-100 '>
                                <p className='py-5 text-center font-bold px-2 text-white'>
                                    {project.desc}
                                </p>
                                <div className='mx-auto'>
                                    <a 
                                        href = {project.live}
                                        className='px-5 py-2 bg-blue-500 hover:bg-blue-600 mr-5 font-bold'
                                    >
                                        Live
                                    </a>
                                    <a 
                                        href = {project.code}
                                        className='px-5 py-2 bg-blue-700 hover:bg-blue-600 font-bold'
                                    >
                                        Code    
                                    </a> 
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    );

};

export default Project;

