import React, { useEffect, useState } from "react";
import { projectsData, projectsNav } from "./Data";
import WorkItem from "./WorkItem";

const Works = () => {
  const [selectedItem, setSelectedItem] = useState("all");
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    if (selectedItem === "all") {
      setProjects(projectsData);
    } else {
      const newProjects = projectsData.filter((project) => {
        return project.category === selectedItem;
      });
      setProjects(newProjects);
    }
  }, [selectedItem]);

  const handleClick = (itemName) => {
    setSelectedItem(itemName);
  };

  return (
    <>
      <div className="work__filters">
        {projectsNav.map((item, index) => (
          <span
            onClick={() => handleClick(item.name)}
            className={`work__item ${selectedItem === item.name ? 'active' : ''}`}
            key={index}
          >
            {item.name}
          </span>
        ))}
      </div>

      <div className="work__container container grid">
        {projects.map((item) => (
          <WorkItem item={item} key={item.id} />
        ))}
      </div>
    </>
  );
};

export default Works;
