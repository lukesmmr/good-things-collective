"use client";

import React from "react";

interface ValueCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ValueCard = ({ icon, title, description }: ValueCardProps) => {
  return (
    <div className="rounded-lg border border-collective-beige/10 bg-collective-black/80 p-8 transition-all hover:border-collective-beige/20">
      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-collective-beige/5">
        {icon}
      </div>
      <h3 className="mb-3 text-xl font-bold">{title}</h3>
      <p className="opacity-75">{description}</p>
    </div>
  );
};

export default ValueCard;
