// components/ProjectCard.js
import { motion } from 'framer-motion';
import {
  Brain,
  Globe,
  Zap,
  Shield,
  Rocket,
  Codepen,
  Cpu,
  Layers,
  Code,
  Database,
  Cloud,
  Server,
  Terminal,
  GitBranch,
  Monitor,
  Smartphone,
} from 'lucide-react';

const icons = {
  Brain,
  Globe,
  Zap,
  Shield,
  Cpu,
  Layers,
  Code,
  Database,
  Cloud,
  Server,
  Terminal,
  GitBranch,
  Monitor,
  Smartphone,
};

const ProjectCard = ({ project, index, gradientColors }) => {
  const IconComponent = icons[project.icon] || Codepen; // Fallback to Codepen if icon is missing
  const gradientColor = gradientColors[index % gradientColors.length]; // Cycle through gradient colors
  const textColor = project.textColor || 'text-gray-900'; // Fallback text color

  return (
    <motion.div
      key={project.id || index} // Fallback to index if id is missing
      initial={{ 
        opacity: 0, 
        x: index % 2 === 0 ? -100 : 100,
        scale: 0.9
      }}
      animate={{ 
        opacity: 1, 
        x: 0,
        scale: 1
      }}
      transition={{ 
        duration: 0.8, 
        delay: index * 0.3,
        type: "spring",
        stiffness: 50
      }}
      whileHover={{ 
        scale: 1.05,
        boxShadow: "0 25px 50px rgba(0,0,0,0.1)"
      }}
      className={`
        ${gradientColor}
        rounded-3xl 
        overflow-hidden 
        shadow-2xl 
        border 
        border-gray-200
        transform 
        transition-all 
        duration-300
        p-8
      `}
    >
      <div className="space-y-6">
        {/* Project Header */}
        <div className="flex items-center mb-4">
          <div className="mr-6">
            <IconComponent 
              className={`w-16 h-16 ${textColor} opacity-80`}
              strokeWidth={1.5} 
            />
          </div>
          <h2 className={`text-4xl font-bold ${textColor}`}>
            {project.title || 'Untitled Project'}
          </h2>
        </div>
        
        {/* Description */}
        <p className={`${textColor} opacity-80 text-xl leading-relaxed`}>
          {project.description || 'No description provided.'}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {project.technologies?.map((tech) => (
            <span 
              key={tech}
              className={`
                px-3 
                py-1 
                rounded-full 
                text-sm 
                font-medium 
                ${textColor}
                bg-white/50 
                backdrop-blur-lg
              `}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Features */}
        <div>
          <h3 className={`text-2xl font-semibold mb-4 ${textColor}`}>
            Key Innovations
          </h3>
          <ul className="space-y-3">
            {project.features?.map((feature) => (
              <li 
                key={feature} 
                className={`
                  flex 
                  items-center 
                  ${textColor}
                  opacity-80
                  text-base
                `}
              >
                <Codepen 
                  className={`w-5 h-5 mr-3 ${textColor} opacity-60`}
                  strokeWidth={1.5} 
                />
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* Project Link */}
        <motion.a 
          href={project.githubUrl || '#'}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`
            block
            text-center
            px-7 
            py-4 
            mt-6
            ${textColor}
            bg-white/60 
            hover:bg-white 
            backdrop-blur-lg 
            rounded-xl 
            font-semibold 
            text-base
            transition-all 
            flex 
            items-center
            justify-center
          `}
        >
          <Rocket className={`w-6 h-6 mr-3 ${textColor}`} strokeWidth={1.5} />
          {project.githubUrl ? 'View on GitHub' : 'Explore Project'}
        </motion.a>
      </div>
    </motion.div>
  );
};

export default ProjectCard;