import React, { useState } from "react";
import { Button, Col, Container, Row, Table } from "react-bootstrap";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { deleteCall, get } from "../../../utils/requests";
import { reviewsApi } from "../../../utils/EndPoints";
import moment from "moment";
import ReviewModal from "./reviewModal";
const ReviewsDashboard = (props) => {
  const [reviews, setReviews] = useState([]);
  const [viewReview, setCurrReview] = useState({
    isOpen: false,
    review: { id: "", review: "" },
  });
  async function getData(api, params) {
    console.log(api);
    try {
      const [data] = await get(api, true, params);
      setReviews(data);
    } catch (err) {
      console.log(err);
    }
  }

  React.useEffect(() => {
    getData(reviewsApi.getReviews);
  }, []);

  async function deleteReview(id) {
    const confirmation = window.confirm("are you sure ? ");
    if (confirmation) {
      try {
        await deleteCall(reviewsApi.delete, true, { id });
        setReviews([...reviews.filter((review) => review.id !== id)]);
      } catch (err) {}
    }
  }
  function openReview(id) {
    setCurrReview({
      isOpen: true,
      review: reviews.find((review) => review.id === id),
    });
  }
  return (
    <Container className="mt-4" fluid>
      <ReviewModal
        show={viewReview.isOpen}
        review={viewReview.review}
        handleClose={() => setCurrReview({ isOpen: false })}
        deleteReview={deleteReview}
      />
      <Row className="justify-content-center">
        <Col>
          <div style={{ border: "1px solid #eee" }}>
            <Table hover>
              <thead className="bg-primary">
                <tr>
                  <th width="20%">REVIEW ID</th>
                  <th>BOOK</th>
                  <th>RATING</th>
                  <th>REVIEW</th>
                  <th>POSTED BY</th>
                  <th>DATE/TIME</th>
                  <th>DELETE</th>
                </tr>
              </thead>
              {reviews.length > 0 ? (
                <tbody>
                  {reviews.map((review) => (
                    <tr key={review.id}>
                      <td>{review.id}</td>
                      <td>{review.book.name}</td>
                      <td>{review.rating}</td>
                      <td>
                        <Button
                          variant="info"
                          onClick={() => openReview(review.id)}
                        >
                          View Review
                        </Button>
                      </td>
                      <td>{review.user.name}</td>
                      <td>{moment(review.createdAt).fromNow()}</td>
                      <td>
                        <Button
                          onClick={() => deleteReview(review.id)}
                          variant="danger"
                        >
                          Delete
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              ) : (
                <tr>
                  <td colspan="100%">
                    <h2 className="w-100 text-center display-4">No Reviews</h2>
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

export default ReviewsDashboard;
