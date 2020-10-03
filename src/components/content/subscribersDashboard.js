import React, { useState } from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { get } from "../../utils/requests";
import { subscribersApi } from "../../utils/EndPoints";

const SubscribersDashboard = (props) => {
  const [subscribers, setSubscribers] = useState([]);
  async function getData(api, params) {
    console.log(api);
    try {
      const [data] = await get(api, true, params);
      setSubscribers(data);
    } catch (err) {
      console.log(err);
    }
  }
  React.useEffect(() => {
    getData(subscribersApi.getSubscribers);
  }, []);
  return (
    <Container className="mt-4" fluid>
      <Row className="justify-content-center">
        <Col md={6}>
          <div style={{ border: "1px solid #eee" }}>
            <Table hover>
              <thead className="bg-primary">
                <tr>
                  <th>NAME</th>
                  <th>EMAIL</th>
                </tr>
              </thead>
              {subscribers.length > 0 ? (
                <tbody>
                  {subscribers.map((subscriber) => (
                    <tr key={subscriber.id}>
                      <td>{subscriber.name}</td>
                      <td>{subscriber.email}</td>
                    </tr>
                  ))}
                </tbody>
              ) : (
                <tr>
                  <td colspan="100%">
                    <h2 className="w-100 text-center display-4">
                      No subscribers
                    </h2>
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

export default SubscribersDashboard;
