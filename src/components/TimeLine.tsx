import React from 'react';

interface StepProps {
  number: number;
  title: string;
  description: string;
  position: 'top' | 'bottom';
  isActive?: boolean;
}

const TimelineStep: React.FC<StepProps> = ({ number, title, description, position, isActive }) => {
  return (
    <div className={`relative flex flex-col items-center w-64 min-w-[16rem] ${position === 'top' ? 'mb-72' : 'mt-72'}`}>
      <div className={`border rounded-xl p-6 bg-white shadow-md transition-all duration-300
        ${isActive ? 'border-blue-500 shadow-blue-200' : 'border-gray-200'}`}>
        <h3 className="font-bold text-lg text-gray-800">
          <span className="text-teal-600">#{number}</span> {title}
        </h3>
        <p className="text-sm text-gray-500 mt-2">{description}</p>
      </div>
      {/* Vertical connector line */}
      <div
        className={`absolute w-0.5 h-10 bg-blue-400 ${position === 'top' ? 'top-full' : 'bottom-full'}`}
      />
    </div>
  );
};

const Timeline: React.FC = () => {
  const steps: StepProps[] = [
    {
      number: 1,
      title: 'Assemble the right team',
      description: "We handle all aspects of vetting and choosing the right team that you don't have the time, expertise, or desire to do.",
      position: 'top',
    },
    {
      number: 2,
      title: 'Sprint planning',
      description: 'Sprint roadmap is a collective planning effort. Team members collaborate to clarify items and ensure shared understanding.',
      position: 'bottom',
    },
    {
      number: 3,
      title: 'Tech architecture',
      description: 'We break monolithic apps into microservices. Decoupling the code allows teams to move faster and more independently.',
      position: 'top',
      isActive: true,
    },
    {
      number: 4,
      title: 'Standups & weekly demos',
      description: 'Standups, weekly demos, and weekly reviews make sure everyone is on the same page and can raise their concerns.',
      position: 'bottom',
    },
    {
      number: 5,
      title: 'Code reviews',
      description: 'Code reviews before release help detect issues like memory leaks, file leaks, performance signs, and general bad smells.',
      position: 'top',
    },
    {
      number: 6,
      title: 'Iterative delivery',
      description: 'We divide the implementation process into several checkpoints rather than a single deadline.',
      position: 'bottom',
    },
  ];

  return (
    <div className="w-full overflow-x-auto scrollbar-hide py-10">
      <div className="relative flex min-w-[1100px] justify-between items-center px-10">
        {/* Horizontal timeline line */}
        <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-blue-200 z-0" />

        {/* Steps */}
        {steps.map((step, index) => (
          <TimelineStep key={index} {...step} />
        ))}

        {/* Trophy at the end */}
        <div className="text-3xl ml-4 relative z-10">🏆</div>
      </div>
    </div>
  );
};

export default Timeline;
