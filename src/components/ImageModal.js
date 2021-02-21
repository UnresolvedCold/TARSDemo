import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../App.css";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import thumbsup from "../assets/like.png";
import loadingImage from "../assets/animations/loading.gif";
import errorImage from "../assets/animations/error.png";
import Img from "react-cool-img";

const ImageModal = (props) => {
  const closeBtn = (
    <button className="close" onClick={props.toggleModal}>
      &times;
    </button>
  );
  console.log(props.data);
  return (
    <div>
      <Modal
        isOpen={props.showModal}
        toggle={props.toggleModal}
        style={{ width: "auto" }}
      >
        <ModalHeader toggle={props.toggleModal} close={closeBtn} small>
          <span style={{ color: "black" }}>
            <a
              href={props.data.user.links.html}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={props.data.user.profile_image.medium}
                style={{
                  width: 50,
                  height: 50,
                  marginRight: 5,
                  borderRadius: 25,
                }}
              />
              {props.data.user.username}
            </a>
          </span>
        </ModalHeader>
        <ModalBody>
          <Img
            placeholder={loadingImage}
            error={errorImage}
            src={props.data.urls.full}
            style={{
              maxWidth: "100%",
              maxHeight: "100%",
              transform: "scale(-50%, -50%)",
            }}
          />
        </ModalBody>
        <ModalFooter>
          <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
            <div style={{ display: "flex", flexDirection: "row", flex: 1 }}>
              <span style={{ flex: 1 }}>
                {props.data.height}x{props.data.width}
              </span>
              <button>
                <a
                  href={props.data.links.download}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-download" />
                  download
                </a>
              </button>
            </div>
            <div style={{ display: "flex", flexDirection: "row", flex: 1 }}>
              <img
                src={thumbsup}
                style={{ width: 20, height: 20, marginRight: 5 }}
              />
              <span style={{ color: "grey", marginRight: 5, flex: 1 }}>
                {props.data.likes}
              </span>
              {props.data.alt_description}
            </div>
          </div>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default ImageModal;
