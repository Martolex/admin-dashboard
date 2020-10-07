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
import ReviewsDashboard from "../content/reviews/reviewsDashboard";
import { BiPackage } from "react-icons/bi";
import { FaBook, FaUser } from "react-icons/fa";
import { GiReturnArrow } from "react-icons/gi";
import { GoRequestChanges } from "react-icons/go";
import {
  MdRateReview,
  MdEmail,
  MdPeople,
  MdShoppingCart,
} from "react-icons/md";
import UsersDashboard from "../content/Users/UsersDashboard";
import UserCartsDashboard from "../content/Users/UserCarts";
const sideBarItems = [
  {
    title: "orders",
    path: "/orders",
    exact: true,
    icon: { component: BiPackage, size: 25 },
    component: OrdersDashboard,
    subRoutes: [{ path: "/:id", component: OrderDetails }],
  },
  {
    title: "books",
    icon: { component: FaBook, size: 22 },
    path: "/books",
    component: BooksDashboard,
  },
  {
    title: "returns",
    icon: { component: GiReturnArrow, size: 22 },
    path: "/returns",
    component: ReturnsDashboard,
  },
  {
    title: "book Requests",
    path: "/requests",
    component: RequestDashboard,
    icon: { component: GoRequestChanges, size: 22 },
  },
  {
    title: "Reviews",
    path: "/reviews",
    icon: { component: MdRateReview },
    component: ReviewsDashboard,
  },
  {
    title: "subscribers",
    path: "/subscribers",
    icon: { component: MdEmail },
    component: SubscribersDashboard,
  },
  {
    title: "users",
    path: "/users",
    icon: { component: MdPeople },
    component: UsersDashboard,
  },
  {
    title: "user carts",
    path: "/carts",
    icon: { component: MdShoppingCart },
    component: UserCartsDashboard,
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
