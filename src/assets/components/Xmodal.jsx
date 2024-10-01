import { useState } from "react";
import "./Xmodal.css";
const Xmodal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [no, setNo] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [dob, setDob] = useState("");

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handlerSubmit = (e) => {
    e.preventDefault();
    if (no.length != 10) {
      alert("Invalid phone number. Please enter a 10-digit phone number.");
    } else if (new Date() < new Date(dob)) {
      alert("Invalid date of birth. Date of birth cannot be in the future.");
    } else {
      setDob("");
      setNo("");
      setEmail("");
      setName("");
    }
  };
  const phoneHandler = (e) => {
    setNo(e.target.value);
  };
  const handlerDate = (e) => {
    setDob(e.target.value);
  };
  const handlerName = (e) => {
    setName(e.target.value);
  };
  const handlerEmail = (e) => {
    setEmail(e.target.value);
  };

  return (
    <>
      <div className="header">
        <h1>User Details Modal</h1>
        <button className="btn" onClick={openModal}>
          Open Form
        </button>
      </div>

      {isOpen && (
        <div
          onClick={closeModal}
          className={`modal ${isOpen ? "show-modal" : ""}`}
        >
          <div className="modal-content">
            <form onSubmit={handlerSubmit} className="form_modal">
              <h2>Fill Details</h2>
              <p className="title">Username:</p>
              <input
                type="text"
                className="fill"
                id="username"
                required
                value={name}
                onChange={handlerName}
              />
              <p className="title">Email Address:</p>
              <input
                type="email"
                className="fill"
                id="email"
                required
                value={email}
                onChange={handlerEmail}
              />
              <p className="title">Phone Number:</p>
              <input
                type="tel"
                value={no}
                onChange={phoneHandler}
                className="fill"
                id="phone"
                required
              />
              <p className="title">Date of Birth:</p>
              <input
                type="date"
                className="fill"
                id="dob"
                required
                onChange={handlerDate}
                value={dob}
              />
              <br />
              <button type="submit" className="btn submit-button">
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Xmodal;
