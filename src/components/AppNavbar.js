import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import { v1 as uuid } from "uuid";
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
import { Player, Controls } from "@lottiefiles/react-lottie-player";

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
                const url = `https://api.unsplash.com/search/photos?page=1&per_page=50&query=${
                  e.target.value
                }&quantity=50&order_by=latest&client_id=${
                  require("../constants").ID
                }`;
                axios
                  .get(url)
                  .then((res) => {
                    console.log(res.data.results.length);
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
      <div style={{ marginLeft: 20, marginRight: 20 }}>
        {result.length > 0 ? (
          result.map((image) => {
            return <ImageComponents key={uuid()} image={image} />;
          })
        ) : (
          <div
            style={{
              position: "absolute",
              top: "30%",
              left: 0,
              right: 0,
              bottom: 0,
            }}
          >
            <Player
              autoplay
              loop
              src="https://assets1.lottiefiles.com/packages/lf20_GlZGOi.json"
              style={{
                height: "300px",
                width: "300px",
              }}
            >
              <Controls
                visible={false}
                buttons={["play", "repeat", "frame", "debug"]}
              />
            </Player>
          </div>
        )}
      </div>
    </div>
  );
};

export default Main;
