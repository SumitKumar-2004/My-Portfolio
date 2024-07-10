import React from 'react'
import java from '../../public/java.png'
import c from '../../public/c.jpeg'
import cpp from '../../public/cpp.jpg'
import html from '../../public/html.jpeg'
import css from '../../public/css.jpeg'
import js from '../../public/js.png'



function Portfolio() {
    const cardItem = [
        {
            id:1,
            logo:html,
            name :"HTML5" 
        },
        {
            id:2,
            logo:css,
            name : "CSS3"   
        },
        {
            id:3,
            logo:js,
            name : "JavaScript"
        },
        {
            id:4,
            logo:java,
            name:"Java" 
        },
        {
            id:5,
            logo : c,
            name :"C Programming"
        },
        {
            id:6,
            logo:cpp,
            name:"C++ Programming"
        }
    ]
  return (
    <div name="Portfolio"
     className='max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10'>
        <div>
            <h1 className='text-3xl font-bold'>Portfolio</h1>
            <span className='underline font-semibold'>Featured Projects</span>
            <div className='grid grid-col md:grid-cols-4 gap-3 my-5'>
                {
                    cardItem.map(({id,logo,name})=>(
                        <div className='md:w-[300px] md:h-[300px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-200' key={id}>
                            <img src={logo} className='w-[120px] h-[120px] p-1 rounded-full border-[2px]' alt="" />
                            <div>
                                <div className='px-2 font-bold text-xl mb-2'>{name}</div>
                                <p className='px-2 text-gray-700'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                            <div className='px-6 py-4 space-x-3 justify-around'>
                                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded'>Video</button>
                                <button className='bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded'>Source Code</button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Portfolio
