import React from 'react';
import * as Icons from "lucide-react"
import { useEffect, useState } from 'react'
import FadeIn from '../components/backgrounds/RedialGradientBackground.jsx';
import axios from 'axios';
import Skeleton from 'react-loading-skeleton';

const ViewAllSkills = () => {
    const [skill, setSkills] = useState([])
    useEffect(() => {
        const getAllSkills = async () => {
            
                const { data } = await axios.get(
                    "http://localhost:4100/api/v1/skill/getall", { withCredentials: true }
                );
            setSkills(data.skill);
        };
        getAllSkills();
    }, [])
 
    const getProficiencyLevel = (proficiency) => {
        const levels = {
            "Expert": 95,
            "Advanced": 80,
            "Intermediate": 65,
        };
        return levels[proficiency] || 50;
    }

    const getLevelColor = (proficiency) => {
        const colors = {
            'Expert': 'text-[#8DFF69] bg-[#8DFF69]/29 border-[#8DFF69]/30',
            'Advanced': 'text-cyan-400 bg-cyan-500/20 border-cyan-500/30',
            'Intermediate': 'text-emerald-400 bg-emerald-500/20 border-emerald-500/30'
        };
        return colors[proficiency] || 'text-gray-400 bg-gray-500/20 border-gray-500/30';
    }
    

    return (
        
      <div className=' py-20 bg-black '>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="absolute inset-0 overflow-hidden">
                    <div className='absolute top-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-50' />
                    <div className='absolute bottom-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-50' />
                </div>
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    
                        <div className="text-center mb-16">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6">
                                <Icons.Sparkles className="w-4 h-4 text-primary" />
                                <span className='text-sm text-primary font-medium'>My Expertise</span>
                            </div>
                            <h2 className='text-4xl lg:text-5xl font-normal text-white mb-4'>Skills & Software App</h2>
                            <p className='text-lg text-white/60 max-w-2xl mx-auto'>
                                A comprehensive overview of my technical skills and proficiency levels
                            </p>
                    </div>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-1 gap-8">
                                <dev >
                                    <div className="relative bg-white/5 border-white/10 rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 group">
                                        <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
                                            <div className="w-1 h-8 bg-linear-to-b from-primary/30 to-primary/10 rounded-full"></div>
                                            <h3 className='text-xl font-medium text-white'>Skills & Software Application</h3>
                                        </div>

                                        <div className="space-y-5">
                                            {
                                           skill.map((element) => {
                                               const proficiency = getProficiencyLevel(element.proficiency);   
                                                  return (
                                                      <div key={element._id} className="space-y-2">
                                                            <div className="flex items-center justify-between">
                                                                <div className="flex items-center gap-3">
                                                <div className="p-2 bg-transparent rounded-lg">
                                                    <img src={element.svg && element.svg.url} alt=  {element.title} className='h-12 sm:h-24 w-auto ' />
                                    
                                                                    </div>
                                                                    <div>
                                                                        <div className="text-fit font-medium text-white">
                                                                          {element.title}
                                                                        </div>
                                                                       
                                                                    </div>
                                                                </div>
                                            <span className={`text-xs px-2 py-1 rounded-full border ${getLevelColor(element.proficiency)}`}>
                                                {element.proficiency}
                                                                </span>
                                                            </div>
                                                            <div className="relative h-1.5 bg-white/5 rounded-full overflow-auto">
                                                              <div className="absolute top-0 h-full bg-linear-to-r from-primary/10 to-primary/80 rounded-full transition-all duration-1000 easy-out" style={{ width: `${proficiency}%` }}></div>
                                                            </div>
                                                        </div>
                                                    )
                                                })}
                                        </div>
                                        <div className="absolute inset-0 bg-linear-to-br from-primary/5 group-hover:from-primary/5 group-hover:to-primary/5 rounded-2xl transition-all duration-300 pointer-events-none"></div>
                                    </div>
                                </dev>
                    </div>
                    
              </div>
            </div>
        </div>
      
  );
}

export default ViewAllSkills;
