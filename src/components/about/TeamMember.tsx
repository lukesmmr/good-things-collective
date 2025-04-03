
import React from 'react';

interface TeamMemberProps {
  name: string;
  role: string;
  location: string;
  image?: string;
  placeholder?: boolean;
  square?: boolean;
}

const TeamMember: React.FC<TeamMemberProps> = ({ 
  name, 
  role, 
  location, 
  image, 
  placeholder = false, 
  square = false 
}) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="relative aspect-square">
        <div className="absolute top-0 right-0 bg-collective-black text-collective-beige px-2 py-1 text-xs z-10">
          {location}
        </div>
        {placeholder ? (
          <div className="w-full h-full bg-[#CCCCCC] flex items-center justify-center">
            <span className="text-gray-500 font-medium">{name.charAt(0)}</span>
          </div>
        ) : (
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover object-center"
          />
        )}
      </div>
      <div className="p-3 sm:p-4">
        <h3 className="text-sm font-bold">{name}</h3>
        <p className="text-xs opacity-75">{role}</p>
      </div>
    </div>
  );
};

export default TeamMember;
