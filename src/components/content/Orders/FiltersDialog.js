import React, { useState } from "react";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";
import PropTypes from "prop-types";
import { Container } from "react-bootstrap";

const sellerTypes = ["MARTOLEX", "OTHERS"];
const FiltersDialog = ({ isOpen, handleClose, filterSetter, ...props }) => {
  const [filters, setFilters] = useState({
    sellerTypes: [],
  });
  function filterData() {
    filterSetter((prev) => ({ ...prev, ...filters }));
    handleClose();
  }
  React.useEffect(() => {
    console.log(filters);
  }, [filters]);

  function changeSellerType(event) {
    const newSellerFilters = filters.sellerTypes.includes(event.target.value)
      ? filters.sellerTypes.filter((type) => type !== event.target.value)
      : [...filters.sellerTypes, event.target.value];
    setFilters({ ...filters, sellerTypes: newSellerFilters });
  }

  return (
    <Modal centered show={isOpen} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Filters</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container fluid>
          <Row>
            <Col>
              <Row>
                <Col>
                  <p className="lead">Sellers</p>
                </Col>
              </Row>
              <Row>
                <Col>
                  {sellerTypes.map((type, idx) => (
                    <Form.Check
                      inline
                      onChange={changeSellerType}
                      label={type}
                      value={type}
                      type="checkbox"
                      name="sellerType"
                    />
                  ))}
                </Col>
              </Row>
            </Col>
          </Row>
          <hr />
          <Row>
            <Col>
              <Row>
                <Col>
                  <p className="lead mb-0">Order Date</p>
                </Col>
              </Row>
              <Row>
                <Col className="pt-0">
                  <Form.Group controlId="min-delivery">
                    <Form.Label>Earliest Order Date</Form.Label>
                    <Form.Control
                      type="date"
                      value={
                        filters.minOrderDate
                          ? new Date(filters.minOrderDate)
                              .toISOString()
                              .substring(0, 10)
                          : null
                      }
                      onChange={(event) =>
                        setFilters({
                          ...filters,
                          minOrderDate: event.target.value,
                        })
                      }
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group controlId="min-delivery">
                    <Form.Label>Max Order Date</Form.Label>
                    <Form.Control
                      type="date"
                      value={
                        filters.maxOrderDate
                          ? new Date(filters.maxOrderDate)
                              .toISOString()
                              .substring(0, 10)
                          : null
                      }
                      onChange={(event) =>
                        setFilters({
                          ...filters,
                          maxOrderDate: event.target.value,
                        })
                      }
                    />
                  </Form.Group>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={filterData} variant="success">
          FILTER
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
FiltersDialog.defaultProps = {
  isOpen: true,
};
FiltersDialog.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  filters: PropTypes.object,
  filterSetter: PropTypes.func.isRequired,
};

export default FiltersDialog;
