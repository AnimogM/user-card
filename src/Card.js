import React from 'react'
import { Col } from 'react-bootstrap'

const Card = ({
  name,
  company: { catchPhrase },
  phone,
    email,
  username,
  address: { street, suite, city},
}) => {
  return (
    <Col className="bg-card px-3 px-md-5 py-2 border" lg={5}>
      <h1 className="display-5 fw-bold">{name}</h1>
      <p>{catchPhrase}</p>
      <div className="pt-3">
        <h3 className="pb-md-3">General Info </h3>
        <p className=" mb-2 row">
          <span className=" col-md-3 fw-bold">Username</span>{" "}
          <span className=" col-md-9 fw-normal">{username}</span>
        </p>
        <p className=" mb-2 row">
          <span className=" col-md-3 fw-bold">Address</span>
          <span className=" col-md-9 fw-normal">
            {street}, {suite}, {city}
          </span>
        </p>
        <p className="row mb-2">
          <span className=" col-md-3 fw-bold">Email</span>
          <span className=" col-md-9">{email}</span>
        </p>
        <p className="row mb-2">
          <span className=" col-md-3 fw-bold">Phone</span>
          <span className=" col-md-9">{phone}</span>
        </p>
      </div>
    </Col>
  );
};

export default Card
