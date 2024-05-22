import React from "react";

const WorkItems = ({ item }) => {
  return (
    <div className="work-card" key={item.id}>
      <img src={item.image} alt="" className="work-img" />
      <h3 className="work-title">{item.title}</h3>
      <a href={item.Live} className="work-btn">
        Live
      </a>
    </div>
  );
};

export default WorkItems;
