import React from "react";
import { useState } from "react";
import img1 from "../resources/image1.svg";
import img2 from "../resources/image2.svg";

export const Modal = ({ openModal, setOpenModal }) => {
  const [input, setInput] = useState("");
  const [emailSend, setEmailSend] = useState(false);

  const sendEmail = () => {
    setEmailSend(true);
    setTimeout(() => {
      setOpenModal(false);
    }, 2000);
  };
  return (
    <>
      {!emailSend && (
        <div className="main-container">
          <div className="modal-container">
            <img className="modal-image" src={img1} />
            <h3 className="">Subscribe to our newsletter</h3>
            <div>
              <div className="modal-text">
                An email will be sent to you everyweek. The email contains a new
                information that will be received and the information about the
                benefits of using our platform.
              </div>
            </div>
            <div className="modal-input-label">
              <label className="modal--input-text ">Email address</label>
              <input
                placeholder="Email"
                className="modal-input"
                label={"Input"}
                type="email"
                onChange={(input) => setInput(input)}
              />
            </div>
            <div>
              <button
                className="modal-footer-button modal-button-send"
                onClick={sendEmail}
              >
                Send
              </button>
              <button
                className="modal-footer-button modal-button-cancel"
                onClick={() => {
                  setOpenModal(false);
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
      {emailSend && (
        <div className="modal-container-sent">
          <img className="modal-image" src={img2} />
          <div className="modal-text">Email sent!</div>
        </div>
      )}
    </>
  );
};