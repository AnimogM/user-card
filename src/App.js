import { useEffect, useState } from "react";
import { Container, Navbar, NavbarBrand, Row } from "react-bootstrap";

import Card from "./Card";

function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div>
      <Navbar bg="success">
        <Container>
          <NavbarBrand className="text-white fs-4">Users</NavbarBrand>
        </Container>
      </Navbar>
      <div className="bg-light py-5">
        <Container>
          <Row className="gap-5 justify-content-around px-3">
            {users.map((user) => (
              <Card key={user.id} {...user} />
            ))}
          </Row>
        </Container>
      </div>
      <footer className="bg-black text-center py-3 text-white">
        &copy; copyright 2022
      </footer>
    </div>
  );
}

export default App;
