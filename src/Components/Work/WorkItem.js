/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const WorkItem = ({ item }) => {
  return (
    <div className="work__card" key={item.id}>
      <img src={item.image} alt="" className="work__img" />
      <h3 className="work__title">{item.title}</h3>
      <p style={{ fontSize: "var(--small-font-size)", marginBottom: "12px" }}>
        {item.matter}
      </p>
      <a className="work__button" href={item.url} target="new">
        View <i className="bx bx-right-arrow-alt work__button_icon"></i>
      </a>
    </div>
  );
};

export default WorkItem;
