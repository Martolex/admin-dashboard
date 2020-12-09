import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import IDGen from "../../../../utils/IDGen";
import moment from "moment";
import { FaPen } from "react-icons/fa";
const OrderSummaryCard = ({ order, props }) => {
  return (
    <Card style={{ height: "100%" }}>
      <Card.Header>
        <b>ORDER SUMMARY</b>
      </Card.Header>
      <Card.Body>
        <Row>
          <Col xs={4}>
            <b>Order #:</b>
          </Col>
          <Col>{IDGen(order.id)}</Col>
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
                {moment(order.actualDeliveryDate).format("DD-MM-YYYY")}
              </span>
            ) : (
              <div>
                <span className="mr-3">{`${moment(order.deliveryMinDate).format(
                  "DD-MM-YYYY"
                )} - ${moment(order.deliveryMaxDate).format(
                  "DD-MM-YYYY"
                )}`}</span>
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
  );
};

export default OrderSummaryCard;
