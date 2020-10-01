import React, { useEffect, useState } from "react";
import { Col, Container, Nav, Row, Table } from "react-bootstrap";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { notFoundBooks } from "../../../utils/EndPoints";
import { get } from "../../../utils/requests";
import moment from "moment";

const RequestDashboard = (props) => {
  const [queries, setQueries] = useState([]);
  async function getData(api, params) {
    console.log(api);
    try {
      const [data] = await get(api, true, params);
      setQueries(data);
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    getData(notFoundBooks);
  }, []);
  return (
    <Container className="mt-4" fluid>
      <Row>
        <Col>
          <div style={{ border: "1px solid #eee" }}>
            <Table hover>
              <thead className="bg-primary">
                <tr>
                  <th>USER NAME</th>
                  <th>MOBILE</th>
                  <th>EMAIL</th>
                  <th>BOOK NAME</th>
                  <th>PUBLISHER</th>
                  <th>AUTHOR</th>
                  <th>EDITION</th>
                  <th>ISBN</th>
                  <th>DATE</th>
                </tr>
              </thead>
              {queries.length > 0 ? (
                <tbody>
                  {queries.map((query) => (
                    <tr>
                      <td>{query.userName}</td>
                      <td>{query.userPhone}</td>
                      <td>{query.userEmail}</td>
                      <td>{query.name}</td>
                      <td>{query.publisher || "NA"}</td>
                      <td>{query.author || "NA"}</td>
                      <td>{query.edition || "NA"}</td>
                      <td>{query.isbn || "NA"}</td>
                      <td>{moment(query.createdAt).format("DD/MM/YYYY")}</td>
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

export default RequestDashboard;
