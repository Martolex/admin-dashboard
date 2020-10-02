import React from "react";
import { Container } from "react-bootstrap";
import BooksTable from "./BooksTable";

const ThirdPartyBooks = (props) => {
  return (
    <Container fluid>
      <BooksTable thirdParty />
    </Container>
  );
};

export default ThirdPartyBooks;
