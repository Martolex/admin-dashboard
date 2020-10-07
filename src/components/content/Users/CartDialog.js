import React, { useEffect, useState } from "react";
import { Button, Col, Container, Modal, Row, Table } from "react-bootstrap";
import { UsersApi } from "../../../utils/EndPoints";
import { get } from "../../../utils/requests";
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
                <Table hover>
                  <thead className="bg-primary">
                    <tr>
                      <th>BOOK NAME</th>
                      <th>AUTHOR</th>
                      <th>EDITION</th>
                      <th>PUBLISHER </th>
                      <th>ISBN</th>
                      <th>PLAN</th>
                      <th>SOLD BY</th>
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
                </Table>
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
