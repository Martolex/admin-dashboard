import React, { useEffect, useState } from "react";
import { Button, Col, Container, Modal, Row } from "react-bootstrap";
import { UsersApi } from "../../../utils/EndPoints";
import { get } from "../../../utils/requests";
import Table from "../../../utils/Table";
const CartDialog = ({ isOpen, handleClose, userId }) => {
  const [cartItems, setCartItems] = useState([]);

  async function getData(api, params) {
    console.log(api);
    try {
      const [data] = await get(api, true, params);
      setCartItems(data);
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    if (userId && userId !== "") {
      getData(UsersApi.getUserCart(userId));
    }
  }, [userId]);
  return (
    <Modal size="lg" centered show={isOpen} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Cart Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container>
          <Row>
            <Col>
              <div style={{ border: "1px solid #eee" }}>
                <Table
                  data={cartItems}
                  keyExtractor={({ book }) => book.id}
                  headerCols={[
                    "BOOK NAME",
                    "AUTHOR",
                    "EDITION",
                    "PUBLISHER ",
                    "ISBN",
                    "PLAN",
                    "SOLD BY",
                  ]}
                  renderRow={({ book, plan }) => [
                    book.name,
                    book.author,
                    book.edition,
                    book.publisher,
                    book.isbn,
                    plan,
                    book.upload.isAdmin ? "MARTOLEX" : book.upload.name,
                  ]}
                  selectable={false}
                  renderEmpty={() => (
                    <h2 className="w-100 text-center display-4">No Books</h2>
                  )}
                />

                {/* <Table hover>
                  <thead className="bg-primary">
                    <tr>
                      "BOOK NAME",
                      "AUTHOR",
                      "EDITION",
                      "PUBLISHER ",
                      "ISBN",
                      "PLAN",
                      "SOLD BY",
                    </tr>
                  </thead>
                  {cartItems.length > 0 ? (
                    <tbody>
                      {cartItems.map(({ book, plan }) => (
                        <tr key={book.id}>
                          <td>{book.name}</td>
                          <td>{book.author}</td>
                          <td>{book.edition}</td>
                          <td>{book.publisher}</td>
                          <td>{book.isbn}</td>
                          <td>{plan}</td>
                          <td>
                            {book.upload.isAdmin
                              ? "MARTOLEX"
                              : book.upload.name}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  ) : (
                    <tr>
                      <td colspan="100%">
                        <h2 className="w-100 text-center display-4">
                          No Items in Cart
                        </h2>
                      </td>
                    </tr>
                  )}
                </Table> */}
              </div>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer></Modal.Footer>
    </Modal>
  );
};

export default CartDialog;
