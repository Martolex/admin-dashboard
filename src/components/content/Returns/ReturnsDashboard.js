import React, { useEffect, useState } from "react";
import { Col, Container, Nav, Row, Table } from "react-bootstrap";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import { returnsApi } from "../../../utils/EndPoints";
import { get } from "../../../utils/requests";
import ReturnDetailsDialog from "./ReturnDetailsDialog";
import ReturnsPaymentDetails from "./ReturnsPaymentDetails";
import moment from "moment";

const ReturnsDashboard = (props) => {
  const [returnsDialog, setReturnDialogState] = useState({
    isOpen: false,
    itemId: "",
  });
  const closeReturnModal = () =>
    setReturnDialogState({ ...returnsDialog, isOpen: false });
  const [paymentDetailsDialogOpen, setPaymentDetailsDialogState] = useState(
    false
  );
  const [returnRequests, setReturnRequests] = useState([]);
  const closePaymentDetailsModal = () => setPaymentDetailsDialogState(false);
  async function getData(api, params) {
    console.log(api);
    try {
      const [data] = await get(api, true, params);
      setReturnRequests(data);
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    getData(returnsApi.getReturnRequests);
  }, []);
  function viewReturnDetails(itemId) {
    setReturnDialogState({ itemId, isOpen: true });
  }
  return (
    <Container className="mt-4" fluid>
      <ReturnDetailsDialog
        isOpen={returnsDialog.isOpen}
        itemId={returnsDialog.itemId}
        handleClose={closeReturnModal}
        openPaymentDetails={() => setPaymentDetailsDialogState(true)}
      />
      <ReturnsPaymentDetails
        isOpen={paymentDetailsDialogOpen}
        itemId={returnsDialog.itemId}
        handleClose={closePaymentDetailsModal}
      />
      <Row className="mb-3 py-2">
        <Col
          style={{ border: "1px solid #ddd", borderRadius: 5 }}
          className="py-2 mx-3"
        >
          <Nav
            onSelect={(eventKey) => {
              if (eventKey == "PROCESSING") {
                getData(returnsApi.getReturnRequests);
              } else {
                getData(returnsApi.getProcessedReturnRequests);
              }
            }}
            variant="pills"
            defaultActiveKey="PROCESSING"
          >
            <Nav.Item>
              <Nav.Link className="text-dark" eventKey="PROCESSING">
                NEW REQUESTS
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className="text-dark" eventKey="PROCESSED">
                OLD REQUESTS
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
      </Row>
      <Row>
        <Col>
          <div style={{ border: "1px solid #eee" }}>
            <Table hover responsive>
              <thead className="bg-primary">
                <tr>
                  <th>ORDER ID</th>
                  <th>CUSTOMER NAME</th>
                  <th>BOOK NAME</th>
                  <th>PLAN</th>
                  <th>ORDER DATE</th>
                  <th>REQUEST DATE</th>
                  <th>LAST RETURN DATE</th>
                </tr>
              </thead>
              {returnRequests.length > 0 ? (
                <tbody>
                  {returnRequests.map((request) => (
                    <tr onClick={() => viewReturnDetails(request.id)}>
                      <td>{request.order.id.substring(0, 18).toUpperCase()}</td>
                      <td>{request.order.user.name}</td>
                      <td>{request.book.name}</td>
                      <td>{request.plan}</td>
                      <td>
                        {moment(request.order.createdAt).format("DD-MM-YYYY")}
                      </td>
                      <td>
                        {moment(request.returnRequestDate).format("DD-MM-YYYY")}
                      </td>
                      <td>{moment(request.returnDate).format("DD-MM-YYYY")}</td>
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

export default ReturnsDashboard;
