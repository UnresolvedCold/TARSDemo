import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
  InputGroup,
  InputGroupText,
  InputGroupAddon,
  Input,
} from "reactstrap";
import ImageComponents from "./ImageComponents";

const Main = (props) => {
  const [item, setItem] = useState(true);
  const [query, setQuery] = useState("");
  const [result, setResult] = useState([]);

  return (
    <div>
      <Navbar color="dark" dark expand="sm" className="mb-5">
        <Container>
          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>Search Unsplash</InputGroupText>
            </InputGroupAddon>
            <Input
              placeholder="Wanna see a cool pic?"
              onChange={(e) => {
                const url = `https://api.unsplash.com/search/photos?page=1&query=${
                  e.target.value
                }&client_id=${require("../constants").ID}`;
                axios
                  .get(url)
                  .then((res) => {
                    setResult(res.data.results);
                  })
                  .catch((err) => {
                    console.log(err);
                  });
              }}
            />
          </InputGroup>
          <NavbarToggler onClick={() => setItem(!item)} />
          <Collapse isOpen={item} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="https://github.com/UnresolvedCold">
                  Github
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
      {result.map((image) => {
        return <ImageComponents image={image} />;
      })}
    </div>
  );
};

export default Main;
