import React, { useState } from "react";
import { Button, Col, Container, Form, Row, Table } from "react-bootstrap";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { get } from "../../../utils/requests";
import { UsersApi } from "../../../utils/EndPoints";
import { MdRemoveRedEye } from "react-icons/md";
import CartDialog from "./CartDialog";

const UserCartsDashboard = (props) => {
  const [users, setUsers] = useState([]);
  const [cartDialogProps, setCartDialog] = useState({
    isOpen: false,
    userId: "",
  });
  async function getData(api, params) {
    console.log(api);
    try {
      const [data] = await get(api, true, params);
      setUsers(data);
    } catch (err) {
      console.log(err);
    }
  }
  React.useEffect(() => {
    getData(UsersApi.cartStats);
  }, []);

  function openCartDetails(userId) {
    setCartDialog({ isOpen: true, userId });
  }
  return (
    <Container className="mt-4" fluid>
      <CartDialog
        {...cartDialogProps}
        handleClose={() => setCartDialog({ isOpen: false })}
      />
      <Row className="justify-content-center">
        <Col md={9}>
          <div style={{ border: "1px solid #eee" }}>
            <Table hover>
              <thead className="bg-primary">
                <tr>
                  <th>NAME</th>
                  <th>EMAIL</th>
                  <th>MOBILE</th>
                  <th>CART COUNT </th>
                  <th>ACTIONS</th>
                </tr>
              </thead>
              {users.length > 0 ? (
                <tbody>
                  {users.map((user) => (
                    <tr key={user.id}>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td>{user.phoneNo}</td>
                      <td>{user.itemCount}</td>
                      <td>
                        <Button>
                          <MdRemoveRedEye
                            onClick={() => {
                              openCartDetails(user.id);
                            }}
                            size={30}
                          />
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              ) : (
                <tr>
                  <td colspan="100%">
                    <h2 className="w-100 text-center display-4">
                      No Users have items in thier cart
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

export default UserCartsDashboard;
