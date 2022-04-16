import { useState } from "react";
import {
  Button,
  Form,
  Container,
  Navbar,
  NavbarBrand,
  Row,
  Col,
} from "react-bootstrap";

function App() {
  const [show, setShow] = useState(false);
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    gender: "",
    bio: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((preValues) => {
      return { ...preValues, [name]: value };
    });
    setShow(false);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setShow(true);
  };

  return (
    <div>
      <Navbar bg="primary">
        <Container>
          <NavbarBrand className="text-white fs-4">React Form</NavbarBrand>
        </Container>
      </Navbar>
      <div className="bg-light py-5">
        <Container>
          {show && (
            <div className="d-flex flex-column align-items-center ">
              <h3>Your Details</h3>
              <div>
                <span className="fw-bold">First Name</span>: {values.firstName}
              </div>
              <div>
                <span className="fw-bold">Last Name</span>: {values.lastName}
              </div>
              <div>
                <span className="fw-bold">Email</span>: {values.email}
              </div>
              <div>
                <span className="fw-bold">Address</span>: {values.address}
              </div>
              <div>
                <span className="fw-bold">Gender</span>: {values.gender}
              </div>
              <div>
                <span className="fw-bold">Bio</span>: {values.bio}
              </div>
            </div>
          )}
          <Form onSubmit={handleSubmit}>
            {show || <h3 className="text-center">Enter Your Details</h3>}
            <Row className="mt-4 justify-content-center gap-3">
              <Col md={7}>
                <input
                  name="firstName"
                  id="firstName"
                  className="py-2 form-control"
                  required
                  type="text"
                  value={values.firstName}
                  onChange={handleChange}
                  placeholder="First Name"
                />
              </Col>
              <Col md={7}>
                <input
                  name="lastName"
                  id="lastName"
                  className="py-2 form-control"
                  required
                  type="text"
                  value={values.lastName}
                  onChange={handleChange}
                  placeholder="Last Name"
                />
              </Col>
              <Col md={7}>
                <input
                  name="email"
                  id="email"
                  className="py-2 form-control"
                  required
                  type="email"
                  value={values.email}
                  onChange={handleChange}
                  placeholder="Email"
                />
              </Col>
              <Col md={7}>
                <input
                  name="address"
                  id="address"
                  className="py-2 form-control"
                  required
                  type="text"
                  value={values.address}
                  onChange={handleChange}
                  placeholder="Address"
                />
              </Col>
              <Col md={7}>
                <legend className="fs-5">Gender</legend>
                <div className="d-flex gap-4">
                  <div>
                    <label className="ms-2" htmlFor="male">
                      <input
                        name="gender"
                        id="male"
                        value="male"
                        required
                        type="radio"
                        checked={values.gender === "male"}
                        onChange={handleChange}
                      />{" "}
                      Male
                    </label>
                  </div>
                  <div>
                    <label className="ms-2" htmlFor="female">
                      <input
                        name="gender"
                        id="female"
                        value="female"
                        required
                        type="radio"
                        checked={values.gender === "female"}
                        onChange={handleChange}
                      />{" "}
                      Female
                    </label>
                  </div>
                  <div>
                    <label className="ms-2" htmlFor="others">
                      <input
                        name="gender"
                        id="others"
                        required
                        type="radio"
                        value="others"
                        checked={values.gender === "others"}
                        onChange={handleChange}
                      />{" "}
                      Others
                    </label>
                  </div>
                </div>
              </Col>
              <Col md={7}>
                <textarea
                  name="bio"
                  id="bio"
                  required
                  className="py-2 form-control"
                  placeholder="Your Bio"
                  value={values.bio}
                  onChange={handleChange}
                ></textarea>
              </Col>
              <Col md={7}>
                <Button type="submit" className="form-control" size="lg">
                  Submit
                </Button>
              </Col>
            </Row>
          </Form>
        </Container>
      </div>
      <footer className="bg-black text-center py-3 text-white">
        &copy; copyright 2022
      </footer>
    </div>
  );
}

export default App;
