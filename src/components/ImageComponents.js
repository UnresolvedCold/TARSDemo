import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Img from "react-cool-img";
import loadingImage from "../assets/animations/loading.gif";
import errorImage from "../assets/animations/error.png";
import thumbsup from "../assets/like.png";
import ImageModal from "./ImageModal";
import { Button } from "bootstrap";

const ImageComponent = (props) => {
  const [showModal, SetShowModal] = useState(false);
  const toggleModal = () => {
    SetShowModal(!showModal);
  };
  return (
    <>
      <div
        onClick={(e) => {
          toggleModal();
        }}
        style={{ display: "inline-block", margin: 20 }}
      >
        <Img
          placeholder={loadingImage}
          src={props.image.urls.thumb}
          error={errorImage}
          style={{ width: 200, height: 200 ,borderRadius:30}}
        />
        <div
          style={{
            zIndex: 100,
            width: 200,
            marginTop: -50,
            padding: 10,
            flexDirection: "row",
            overflow: "hidden",
          }}
        >
          <div style={{ display: "flex", flexDirection: "row", flex: 1 }}>
            <Img
              src={thumbsup}
              style={{ width: 20, height: 20, marginRight: 5 }}
            />
            <span style={{ color: "white", marginRight: 5, flex: 1 }}>
              {props.image.likes}
            </span>
            <span style={{ color: "white" }}>{props.image.user.username}</span>
          </div>
        </div>
        <ImageModal
          showModal={showModal}
          toggleModal={toggleModal}
          data={props.image}
        />
      </div>
    </>
  );
};

export default ImageComponent;
