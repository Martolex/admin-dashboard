import React from "react";

import { Container, Table, Row, Col, Nav } from "react-bootstrap";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import "../../../styles/Content/Orders/OrderDashboard.scss";
const OrdersDashboard = (props) => {
  console.log(props);
  return (
    <Container className="mt-4" fluid>
      <Row className="mb-3 py-2">
        <Col
          style={{ border: "1px solid #ddd", borderRadius: 5 }}
          className="py-2 mx-3"
        >
          <Nav variant="pills" defaultActiveKey="NOT PROCESSED">
            <Nav.Item>
              <Nav.Link className="text-dark" eventKey="NOT PROCESSED">
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
              <thead border={false} className="bg-primary">
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
              <tbody>
                <tr>
                  <td>
                    <Link
                      to={`${props.location.pathname}/${"40f2d332-2ad6-4379"}`}
                    >
                      40f2d332-2ad6-4379
                    </Link>
                  </td>
                  <td>Deepanshu Vangani</td>
                  <td>Navi Mumbai</td>
                  <td>COD</td>
                  <td>PROCESSING</td>
                  <td>Rs. 1200/-</td>
                  <td>12/2/2020</td>
                </tr>
                <tr>
                  <td>
                    <Link
                      to={`${props.location.pathname}/${"40f2d332-2ad6-4379"}`}
                    >
                      40f2d332-2ad6-4379
                    </Link>
                  </td>
                  <td>Deepanshu Vangani</td>
                  <td>Navi Mumbai</td>
                  <td>COD</td>
                  <td>PROCESSING</td>
                  <td>Rs. 1200/-</td>
                  <td>12/2/2020</td>
                </tr>
                <tr>
                  <td>
                    <Link
                      to={`${props.location.pathname}/${"40f2d332-2ad6-4379"}`}
                    >
                      40f2d332-2ad6-4379
                    </Link>
                  </td>
                  <td>Deepanshu Vangani</td>
                  <td>Navi Mumbai</td>
                  <td>COD</td>
                  <td>PROCESSING</td>
                  <td>Rs. 1200/-</td>
                  <td>12/2/2020</td>
                </tr>
                <tr>
                  <td>
                    <Link
                      to={`${props.location.pathname}/${"40f2d332-2ad6-4379"}`}
                    >
                      40f2d332-2ad6-4379
                    </Link>
                  </td>
                  <td>Deepanshu Vangani</td>
                  <td>Navi Mumbai</td>
                  <td>COD</td>
                  <td>PROCESSING</td>
                  <td>Rs. 1200/-</td>
                  <td>12/2/2020</td>
                </tr>
                <tr>
                  <td>
                    <Link
                      to={`${props.location.pathname}/${"40f2d332-2ad6-4379"}`}
                    >
                      40f2d332-2ad6-4379
                    </Link>
                  </td>
                  <td>Deepanshu Vangani</td>
                  <td>Navi Mumbai</td>
                  <td>COD</td>
                  <td>PROCESSING</td>
                  <td>Rs. 1200/-</td>
                  <td>12/2/2020</td>
                </tr>
                <tr>
                  <td>
                    <Link
                      to={`${props.location.pathname}/${"40f2d332-2ad6-4379"}`}
                    >
                      40f2d332-2ad6-4379
                    </Link>
                  </td>
                  <td>Deepanshu Vangani</td>
                  <td>Navi Mumbai</td>
                  <td>COD</td>
                  <td>PROCESSING</td>
                  <td>Rs. 1200/-</td>
                  <td>12/2/2020</td>
                </tr>
              </tbody>
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
