import React, { useState } from "react";
import "../css/Contact.css";
import emailjs from "emailjs-com";
import { Toaster, toast } from "sonner";

const Contact = () => {
  const [Name, setName] = useState("");
  const [Emails, setEmails] = useState("");
  const [Phoneno, setPhoneno] = useState("");
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_37hsjmn",
        "template_miiabq1",
        e.target,
        "Y_4M9g4mlyc4wzk7I"
      )
      .then((res) => {
        setName("");
        setEmails("");
        setPhoneno("");
        alert("Message Sent, We'd reach out shortly");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="main-con">
      <h2>CONTACT US</h2>

      <form onSubmit={sendEmail}>
        <label>Full Name:</label>
        <br />
        <input
          type="text"
          name="fullname"
          value={Name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          required
        />
        <br />
        <br />

        <label>Email:</label>
        <br />
        <input
          type="email"
          name="email"
          value={Emails}
          onChange={(e) => {
            setEmails(e.target.value);
          }}
          required
        />
        <br />
        <br />

        <label>Phone Number:</label>
        <br />
        <input
          type="tel"
          name="phone"
          value={Phoneno}
          onChange={(e) => {
            setPhoneno(e.target.value);
          }}
          required
        />
        <br />
        <br />

        {/* <label for="interests">Interests:</label>
        <br />
        <textarea id="interests" name="interests" rows="4" cols="50"></textarea> */}
        <br />
        <br />

        <input type="submit" />
      </form>
    </div>
  );
};

export default Contact;
