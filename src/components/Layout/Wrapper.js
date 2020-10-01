import React from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { Container, Col, Row, ListGroup } from "react-bootstrap";
import "../../styles/Layout/Wrapper.scss";
import DataContainer from "./DataContainer";
import SideBar from "./SideBar";
import OrdersDashboard from "../content/Orders/OrdersDashboard";
import OrderDetails from "../content/Orders/OrderDetails";
import ReturnsDashboard from "../content/Returns/ReturnsDashboard";

const sideBarItems = [
  {
    title: "orders",
    path: "/orders",
    exact: true,
    component: OrdersDashboard,
    subRoutes: [{ path: "/:id", component: OrderDetails }],
  },
  { title: "books", path: "/books", component: () => <h1>books</h1> },
  { title: "returns", path: "/returns", component: ReturnsDashboard },
  {
    title: "book Requests",
    path: "/requests",
    component: () => <h1>not found books</h1>,
  },
  {
    title: "Queries",
    path: "/queries",
    component: () => <h1>Queries</h1>,
  },
];
const Wrapper = (props) => {
  return (
    <Container
      style={{ display: "flex", flexDirection: "column", height: "100vh" }}
      fluid
    >
      <Row className="bg-primary header">
        <Col className="text-center name" md={3}>
          Martolex Dashboard
        </Col>
      </Row>
      <Row style={{ flex: "auto" }}>
        <Col
          md={2}
          style={{ width: "200px" }}
          className=" sidebar bg-dark text-light"
        >
          <SideBar items={sideBarItems} />
        </Col>
        <Col>
          <DataContainer items={sideBarItems} />
        </Col>
      </Row>
    </Container>
  );
};

export default Wrapper;
