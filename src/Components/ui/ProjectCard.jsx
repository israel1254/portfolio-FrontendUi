import { ExternalLink, Github, TrendingUp } from 'lucide-react';
import React from 'react';

const ProjectCard = ({project}) => {
  const { title, description,  technologies, deployed, projectLink, gitRepoLink,stack }= project;
  const technologiesInListFormat = technologies.split(", ");
  return (
    <div className='group relative bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-300'>
      <div className="relative h-64 overflow-hidden">
        <img src={project.projectBanner && project.projectBanner.url}
          alt={title} className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-110'  />
        <div className=" absolute inset-0 bg-linear-to-t from-black via-black/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
        <div className="absolute bottom-4 right-4 flex items-center gap-3">
          {
            gitRepoLink && (<a href={gitRepoLink} target='_blank' rel='noopener noreferrer' className='p-2.5 bg-white/10 backdrop-blur-md rounded-lg border border-white/20 hover:bg-primary/50 transition-all duration-300 hover:scale-110' title='view Code'>
              <Github className='w-4 h-4 text-white' />
            </a>
            )}
          {
            projectLink && (<a href={projectLink} target='_blank' rel='noopener noreferrer' className='p-2.5 bg-white/10 backdrop-blur-md rounded-lg border border-white/20 hover:border-primary/50 transition-all duration-300 hover:scale-110' title='view Demo'>
              <ExternalLink className='w-4 h-4 text-white'/>
            </a>
            )}
         
        </div>
        <div className="absolute top-4 left-4">
          <span className='px-3 py-1 text-xs font-medium text-white bg-black/40 backdrop-blur-sm border-white/20 rounded-full'>
            {project.category}
          </span>
        </div>
      </div>
      <div className="p-6 space-y-4">
        <div>
          <h3 className='text-xl font-semibold text-white mb-2 group-hover:text-[#A8FF8D] transition-colors duration-300'>
            {title}
          </h3>
          <p className='text-white/60 text-sm leading-relaxed line-clamp-2'>
            {description}
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          {
            technologiesInListFormat.map((tech, index) => (<span key={index} className='px-3 py-1 text-xs font-medium text-primary bg-primary/10 border border-primary/20 rounded-lg hover:bg-primary/20 transition-colors duration-200'>
              {tech}
            </span>
            ))
          }
        </div>
        <div className="flex gap-2 items-center ">
          <p className='text-sm font-medium !text-white'>Stack</p>
          <span  className='px-3 py-1 text-xs font-medium text-primary bg-primary/10 border border-primary/20 rounded-lg hover:bg-primary/20 transition-colors duration-200'>
             {stack}
            </span>
        </div>
        {deployed && (<div className="flex items-center gap-2 pt-3 border-t border-white/10">
          <TrendingUp className='w-4 h-4 text-green-400' />
          <p className='text-sm font-medium text-green-400'>Deploy Project : {deployed}</p>
        </div> )}
      </div>
    </div>
  );
}

export default ProjectCard;
