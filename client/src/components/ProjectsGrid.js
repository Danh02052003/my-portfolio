// components/ProjectsGrid.js
import ProjectCard from './ProjectCard';

const gradientColors = [
  'bg-gradient-to-r from-indigo-100 to-purple-200',
  'bg-gradient-to-r from-cyan-100 to-blue-200',
  'bg-gradient-to-r from-green-100 to-emerald-200',
  'bg-gradient-to-r from-rose-100 to-pink-200',
  'bg-gradient-to-r from-yellow-100 to-orange-200',
  'bg-gradient-to-r from-teal-100 to-cyan-200',
  'bg-gradient-to-r from-violet-100 to-fuchsia-200',
];

const ProjectsGrid = ({ projects }) => {
  return (
    <div className="grid md:grid-cols-2 gap-12">
      {projects.map((project, index) => (
        <ProjectCard
          key={project.id || index}
          project={project}
          index={index}
          gradientColors={gradientColors}
        />
      ))}
    </div>
  );
};

export default ProjectsGrid;