import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";
import { ListGroup } from "react-bootstrap";
const SideBar = ({ items }) => {
  const location = useLocation();
  return (
    <ListGroup variant="flush" className="bg-dark sidebar-container">
      {items.map((item) => (
        <ListGroup.Item className="sidebar-item">
          <Link className="btn-link" to={item.path}>
            <div
              className={`item ${
                location.pathname.includes(item.path) && "clicked"
              }`}
            >
              {item.title}
            </div>
          </Link>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default SideBar;
