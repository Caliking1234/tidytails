import React from "react";
import "../css/Volunteer.css";

const Volunteer = () => {
  return (
    <div className="main-vol">
      <h2>Volunteer Registration Form</h2>

      <form action="#" method="post">
        <label for="fullname">Full Name:</label>
        <br />
        <input type="text" id="fullname" name="fullname" required />
        <br />
        <br />

        <label for="email">Email:</label>
        <br />
        <input type="email" id="email" name="email" required />
        <br />
        <br />

        <label for="phone">Phone Number:</label>
        <br />
        <input type="tel" id="phone" name="phone" required />
        <br />
        <br />

        <label for="interests">Interests:</label>
        <br />
        <textarea id="interests" name="interests" rows="4" cols="50"></textarea>
        <br />
        <br />

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Volunteer;
