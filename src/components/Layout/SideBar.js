import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";
import { Col, ListGroup, Row } from "react-bootstrap";
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
              <Row>
                <Col md={2}>
                  {item.icon && (
                    <item.icon.component size={item.icon.size || 25} />
                  )}
                </Col>
                <Col>{item.title}</Col>
              </Row>
            </div>
          </Link>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default SideBar;
