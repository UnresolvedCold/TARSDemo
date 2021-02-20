import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import {
  Container,
  ListGroup,
  ListGroupItem,
  Button,
  Card,
  CardImg,
  CardBody,
  CardSubtitle,
  CardText,
} from "reactstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { v1 as uuid } from "uuid";

const MAIN = (props) => {
  return (
    <Container>
      <ListGroup>
        <TransitionGroup className="shopping-list">
          <ListGroup>
            <Card style={{ display: "flex", flexDirection: "row" }}>
              <CardImg
                top
                style={{ width: 150, height: 150 }}
                src={props.image.urls.thumb}
                alt="Card image cap"
              />
              <CardBody
                style={{
                  flex: 1,
                  justifySelf: "flex-end",
                }}
              >
                <div style={{ flex: 1 }}></div>
                <CardSubtitle tag="h6" className="mb-2 text-muted">
                  Uploaded by {props.image.user.username}
                </CardSubtitle>
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <img
                    src="https://img.flaticon.com/icons/png/512/25/25297.png?size=1200x630f&pad=10,10,10,10&ext=png&bg=FFFFFFFF"
                    alt="new"
                    style={{ width: 30, height: 20 }}
                  />
                  <CardText>{props.image.likes}</CardText>
                </div>
              </CardBody>
            </Card>
          </ListGroup>
        </TransitionGroup>
      </ListGroup>
    </Container>
  );
};

export default MAIN;
