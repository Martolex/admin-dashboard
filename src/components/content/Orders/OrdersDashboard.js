import React, { useEffect, useState } from "react";

import { Container, Table, Row, Col, Nav } from "react-bootstrap";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import "../../../styles/Content/Orders/OrderDashboard.scss";
import { ordersApi } from "../../../utils/EndPoints";
import moment from "moment";
import { get } from "../../../utils/requests";
const OrdersDashboard = (props) => {
  const [orders, setOrders] = useState([]);
  async function getData(api, params) {
    console.log(api);
    try {
      const [data] = await get(api, true, params);
      setOrders(data);
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    getData(ordersApi.getOrders);
  }, []);
  function getOrderByType(eventKey) {
    getData(ordersApi.getOrders, { status: eventKey });
  }
  return (
    <Container className="mt-4" fluid>
      <Row className="mb-3 py-2">
        <Col
          style={{ border: "1px solid #ddd", borderRadius: 5 }}
          className="py-2 mx-3"
        >
          <Nav
            onSelect={getOrderByType}
            variant="pills"
            defaultActiveKey="NOT PROCESSED"
          >
            <Nav.Item>
              <Nav.Link className="text-dark" eventKey="PROCESSING">
                NOT PROCESSED
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className="text-dark" eventKey="INTRANSIT">
                DISPATCHED
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className="text-dark" eventKey="DELIVERED">
                DELIVERED
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
      </Row>
      <Row>
        <Col>
          <div style={{ border: "1px solid #eee" }}>
            <Table hover>
              <thead className="bg-primary">
                <tr>
                  <th>ORDER ID</th>
                  <th>CUSTOMER NAME</th>
                  <th>DELIVERY CITY</th>
                  <th>PAYMENT MODE</th>
                  <th>ORDER STATUS</th>
                  <th>ORDER PRICE</th>
                  <th>ORDER DATE</th>
                </tr>
              </thead>
              {orders.length > 0 ? (
                <tbody>
                  {orders.map((order) => (
                    <tr key={order.id}>
                      <td>
                        <Link to={`${props.location.pathname}/${order.id}`}>
                          {order.id.substring(0, 18).toUpperCase()}
                        </Link>
                      </td>
                      <td>{order.user.name}</td>
                      <td>{order.address.city}</td>
                      <td>{order.paymentMode}</td>
                      <td>{order.orderStatus}</td>
                      <td>Rs. {order.totalAmount}/-</td>
                      <td>{moment(order.createdAt).format("DD-MM-YYYY")}</td>
                    </tr>
                  ))}
                </tbody>
              ) : (
                <tr>
                  <td colspan="100%">
                    <h2 className="w-100 text-center display-4">No Orders</h2>
                  </td>
                </tr>
              )}
            </Table>
          </div>
        </Col>
      </Row>
      <Row className="pagination justify-content-center mt-3 p-0">
        <Col md={3} className="p-0 m-0">
          <Row className="p-0 m-0">
            <Col onClick={() => {}} className="button">
              <BsChevronLeft size={20} />
            </Col>
            <Col className="button pageNum">
              <span style={{ fontSize: "1.3em" }}>{1}</span>
            </Col>
            <Col onClick={() => {}} className="button m-0">
              <BsChevronRight size={20} />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default OrdersDashboard;
