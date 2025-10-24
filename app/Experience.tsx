import React from 'react';

interface ExperienceItemProps {
  role: string;
  company: string;
  period: string;
  description: string[];
  skills: string[];
}

export const ExperienceItem: React.FC<ExperienceItemProps> = ({
  role,
  company,
  period,
  description,
  skills,
}) => {
  return (
    <div className="mb-8">
      <div className="flex justify-between items-start mb-2">
        <div>
          <h3 className="text-xl font-medium text-white">{role}</h3>
          <p className="text-blue-400">{company}</p>
        </div>
        <span className="text-gray-400">{period}</span>
      </div>
      <ul className="list-disc pl-5 mb-3 text-gray-300 space-y-1">
        {description.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="flex items-center text-slate-900 bg-white px-4 py-2 rounded-full border border-slate-200 shadow-sm text-xs"
          >
            <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

const Experience = () => {
  const experiences = [
    {
      role: 'Founding Engineer',
      company: 'Glowbook',
      period: 'Jul 2025 - Present',
      description: [
        'Driving end-to-end technology development, cloud infrastructure, and backend architecture',
        'Owning the complete development lifecycle from coding and deployment to scaling and monitoring',
        'Handling DevOps, automation, and cloud-native solutions (AWS)',
        'Actively contributing to marketing and growth initiatives alongside product development'
      ],
      skills: ['Leadership', 'System Architecture', 'Marketing', 'Product Development']
    },
    {
      role: 'DevOps Engineer Intern',
      company: 'PearlThoughts',
      period: 'Sep 2024 - Oct 2024',
      description: [
        'Built a full CI/CD pipeline using GitHub Actions, automating build, test, and deployment processes',
        'Implemented Infrastructure as Code using Terraform to provision and manage AWS resources',
        'Deployed containerized applications to AWS ECS Fargate Spot, reducing infrastructure costs by ~70%',
        'Containerized applications with Docker and managed them on Docker Hub'
      ],
      skills: ['AWS', 'Terraform', 'Docker', 'CI/CD', 'GitHub Actions', 'ECS Fargate', 'Docker Hub']
    }
  ];

  return (
    <section id="experience" className="mb-16">
      <h2 className="text-2xl font-semibold mb-8 text-white">Experience</h2>
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <ExperienceItem
            key={index}
            role={exp.role}
            company={exp.company}
            period={exp.period}
            description={exp.description}
            skills={exp.skills}
          />
        ))}
      </div>
    </section>
  );
};

export default Experience;
