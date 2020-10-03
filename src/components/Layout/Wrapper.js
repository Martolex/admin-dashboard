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
import RequestDashboard from "../content/BookRequests/RequestsDashboard";
import BooksDashboard from "../content/Books/BooksDashboard";
import SubscribersDashboard from "../content/subscribersDashboard";

const sideBarItems = [
  {
    title: "orders",
    path: "/orders",
    exact: true,
    component: OrdersDashboard,
    subRoutes: [{ path: "/:id", component: OrderDetails }],
  },
  { title: "books", path: "/books", component: BooksDashboard },
  { title: "returns", path: "/returns", component: ReturnsDashboard },
  {
    title: "book Requests",
    path: "/requests",
    component: RequestDashboard,
  },
  {
    title: "Reviews",
    path: "/reviews",
    component: () => <h1>Reviews</h1>,
  },
  {
    title: "subscribers",
    path: "/subscribers",
    component: SubscribersDashboard,
  },
];
const Wrapper = (props) => {
  return (
    <Container style={{ flexDirection: "column", height: "100vh" }} fluid>
      <Row style={{ height: "8vh" }} className="bg-primary header">
        <Col className="text-center name" md={3}>
          Martolex Dashboard
        </Col>
      </Row>
      <Row style={{ flex: "auto" }}>
        <Col
          md={2}
          style={{ width: "200px", height: "92vh" }}
          className=" sidebar bg-dark text-light"
        >
          <SideBar items={sideBarItems} />
        </Col>
        <Col
          style={{
            height: "92vh",
            overflowY: "scroll",
          }}
        >
          <DataContainer items={sideBarItems} />
        </Col>
      </Row>
    </Container>
  );
};

export default Wrapper;
