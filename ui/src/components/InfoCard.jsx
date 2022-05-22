import React from "react";
import { Overlay } from "react-bootstrap";
import "react-icons/fa";

export default function InfoCard({ title, value, icon, moreInfo }) {
  return (
    <>
      <div
        className="card  bg-primary  hover-overlay shadow-1-strong rounded"
        onClick={moreInfo}
      >
        <div className="card-body">
          <div className="row">
            <div className="col-md-2">
              <i className={icon}></i>
            </div>
            <div className="col-md-10">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{value}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
