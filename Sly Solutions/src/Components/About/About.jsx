import React from 'react';
import Sachin from "./Sachin.jpg";

const About = () => {
  return (
    <div>
      <div className="about mb-8">
        <section className='team_members'>
          <div className="container_about justify-center mx-auto pt-16">
            <div>
              <h1 className="xl:text-4xl text-3xl text-center text-gray-800 font-extrabold pb-6 sm:w-4/6 w-5/6 mx-auto">About Me</h1>
            </div>
          </div>
          <div className="w-full  px-10 pt-10">
            <div className="container_about mx-auto text-center justify-center">
              <div role="list" aria-label="Behind the scenes People " className=" justify-center">
                  <div role="listitem" className="relative mt-16 mb-32 sm:mb-24">
                    <div className="rounded overflow-hidden shadow-md bg-white">
                      <div className="absolute -mt-20 w-full flex justify-center">
                        <div className="h-32 w-32">
                          <img src={Sachin} alt="Display Picture of Satyam Kumar" role="img" className="rounded-full object-cover h-full w-full shadow-md" />
                        </div>
                      </div>
                      <div className="px-6 mt-16">
                        <h1 className="font-bold text-3xl text-center mb-1">Satyam Kumar</h1>
                        <p className="text-gray-800 text-sm text-center">Lead Backend</p>
                        <p className="text-center text-gray-600 text-base pt-3 font-normal">An Aspiring Python Developer, Mining in the Depths of Modules and Data Structures.<br/>I have Up-to-date skills in the Python Development, addition to always learning and making projects.</p>
                        <div className="w-full flex justify-center pt-5 pb-5">
                        </div>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default About;
