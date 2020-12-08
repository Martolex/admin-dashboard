import React, { useEffect, useState } from "react";

import { Container, Row, Col, Card, Table } from "react-bootstrap";
import { FaPen } from "react-icons/fa";
import { ordersApi } from "../../../utils/EndPoints";
import { get } from "../../../utils/requests";
import moment from "moment";
import IDGen from "../../../utils/IDGen";
const OrderDetails = (props) => {
  const [order, setOrder] = useState(undefined);
  async function getData(api, params) {
    console.log(api);
    try {
      const [data] = await get(api, true, params);
      setOrder(data);
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    getData(ordersApi.orderDetails(props.match.params.id));
  }, []);

  return order ? (
    <Container className="mt-4" fluid>
      <Row className>
        <Col>
          <h3 className="text-dark my-3 mb-0">Order details</h3>
        </Col>
      </Row>
      <Row className="">
        {/* <Col md={1}></Col> */}
        <Col>
          <Row>
            <Col className="mb-3" xs={12} md={6}>
              <Card style={{ height: "100%" }}>
                <Card.Header>
                  <b>ORDER SUMMARY</b>
                </Card.Header>
                <Card.Body>
                  <Row>
                    <Col xs={4}>
                      <b>Order #:</b>
                    </Col>
                    <Col>{IDGen(props.match.params.id)}</Col>
                  </Row>
                  <Row>
                    <Col xs={4}>
                      <b>Order Date:</b>
                    </Col>
                    <Col>{moment(order.createdAt).format("DD-MM-YYYY")}</Col>
                  </Row>

                  <Row>
                    <Col xs={4}>
                      <b>Order Total:</b>
                    </Col>
                    <Col>₹ {order.totalAmount}/-</Col>
                  </Row>
                  <Row>
                    <Col xs={4}>
                      <b>Delivery Date: </b>
                    </Col>
                    <Col className="align-items-center">
                      {order.actualDeliveryDate ? (
                        <span className="mr-3">
                          {moment(order.actualDeliveryDate).format(
                            "DD-MM-YYYY"
                          )}
                        </span>
                      ) : (
                        <div>
                          <span className="mr-3">{`${moment(
                            order.deliveryMinDate
                          ).format("DD-MM-YYYY")} - ${moment(
                            order.deliveryMaxDate
                          ).format("DD-MM-YYYY")}`}</span>
                          <FaPen className="text-danger" />
                        </div>
                      )}
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={4}>
                      <b>Delivery charge: </b>
                    </Col>
                    <Col>{`₹ ${order.deliveryAmount}/-`}</Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Header>
                  <b>SHIPPING DETAILS</b>
                </Card.Header>
                <Card.Body>
                  <p className="m-0">
                    <b>{order.address.name}</b>
                  </p>
                  <p className="m-0">{order.address.line1}</p>
                  <p className="m-0">{order.address.line2}</p>
                  <p className="m-0">{order.address.city}</p>
                  <p className="m-0">{`${order.address.state} - ${order.address.zip}`}</p>
                  <p className="m-0">
                    <b>Mobile: </b>
                    {order.address.phoneNo}
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row className="mt-3" key={"123"}>
            <Col>
              <div style={{ border: "1px solid #eee" }}>
                <Table hover>
                  <thead className="bg-primary align-items-center">
                    <tr>
                      <th>SOLD BY</th>
                      <th>BOOK NAME</th>
                      <th>AUTHOR</th>
                      <th>PUBLISHER</th>
                      <th>ISBN</th>
                      <th>PLAN</th>
                      <th>QTY</th>
                      <th>RETURN DATE</th>
                    </tr>
                  </thead>
                  <tbody>
                    {order.items.map((item) => (
                      <tr>
                        <td>{item.book.upload.name}</td>
                        <td>{item.book.name}</td>
                        <td>{item.book.author}</td>
                        <td>{item.book.publisher}</td>
                        <td>{item.book.isbn}</td>
                        <td>{item.plan}</td>
                        <td>{item.qty}</td>
                        <td>{moment(item.returnDate).format("DD-MM-YYYY")}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>
            </Col>
          </Row>
        </Col>
        {/* <Col md={1}></Col> */}
      </Row>
    </Container>
  ) : null;
};

export default OrderDetails;
