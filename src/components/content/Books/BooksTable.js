import React from "react";
import { Col, Row, Table } from "react-bootstrap";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { useHistory } from "react-router";

const BooksTable = ({ books, thirdParty }) => {
  const history = useHistory();
  return (
    <div>
      <Row>
        <Col>
          <div style={{ border: "1px solid #eee" }}>
            <Table hover>
              <thead className="bg-primary">
                <tr>
                  <th>BOOK ID</th>
                  <th>BOOK NAME</th>
                  <th>AUTHOR</th>
                  <th>PUBLISHER</th>
                  <th>QTY</th>
                  <th>CATEGORY</th>
                  <th>SUBCATEGORY</th>
                  {thirdParty && <th>UPLOADER</th>}
                </tr>
              </thead>

              {books.length > 0 ? (
                <tbody>
                  {books.map((book) => (
                    <tr
                      key={book.id}
                      onClick={() => history.push(`/book/${book.id}`)}
                    >
                      <td>{book.id}</td>
                      <td>{book.name}</td>
                      <td>{book.author}</td>
                      <td>{book.publisher}</td>
                      <td>{book.quantity}</td>
                      <td>{book.subCat.category.name}</td>
                      <td>{book.subCat.name}</td>
                      {thirdParty && <td>{book.upload.name}</td>}
                    </tr>
                  ))}
                </tbody>
              ) : (
                <tr>
                  <td colspan="100%">
                    <h2 className="w-100 text-center display-4">No Books</h2>
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
    </div>
  );
};

export default BooksTable;
