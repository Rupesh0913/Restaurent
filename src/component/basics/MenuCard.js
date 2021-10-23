import React from "react";

const MenuCard = ({ menuData }) => {
  //console.log(menuData)
  return (
    <>
    <section classname="main-card--cointainer ">
      {menuData.map((curElem, index) => {
        return (
            <>
          <div className="card-container" key={curElem.id}>
            <div className="card">
              <div className="card-body">
                <span className="card-number card-circle subtle">{curElem.id}</span>
                <span className="card-author subtile">{curElem. category}</span>
                <h2 className="card-title">{curElem.name}</h2>
                <span className="card-description subtile">
                {curElem.description}
                </span>
                <div className="card-read">Read</div>
              </div>
              <img src={curElem.image} alt="image" className="card-media"/>
              <span className="card-tag subtile">Order Now</span>
            </div>
          </div>
          </>
        );
      })}
      </section>
    </>
  );
};

export default MenuCard;