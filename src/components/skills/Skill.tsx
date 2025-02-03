import React from "react";

interface SkillProps {
  item: {
    id: number;
    icon: string;
    name: string;
  };
}

const Skill: React.FC<SkillProps> = ({ item }) => {
  return (
    <div className="skill-item">
      <div className="item-image">
        <img src={item.icon} alt={item.name} />
      </div>
      <div className="item-title">
        <h3>{item.name}</h3>
      </div>
    </div>
  );
};

export default Skill;
