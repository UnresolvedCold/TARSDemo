import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Img from "react-cool-img";
import loadingImage from "../assets/animations/loading.gif";
import errorImage from "../assets/animations/error.png";

const MAIN = (props) => {
  return (
    <div style={{ display: "inline-block", margin: 20 }}>
      <Img
        placeholder={loadingImage}
        src={props.image.urls.thumb}
        error={errorImage}
        style={{ width: 200, height: 200 }}
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
          <img
            src="http://clipart-library.com/images_k/thumbs-up-transparent-background/thumbs-up-transparent-background-17.png"
            alt="new"
            style={{ width: 20, height: 20, marginRight: 5 }}
          />
          <span style={{ color: "white", marginRight: 5, flex: 1 }}>
            {props.image.likes}
          </span>
          <span style={{ color: "white" }}>{props.image.user.username}</span>
        </div>
      </div>
    </div>
  );
};

export default MAIN;
