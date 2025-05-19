import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./reslog.css"; // Your CSS styles
import hotel from './assets/reserve.jpg';

const Reservation = () => {

const user = JSON.parse(localStorage.getItem("user"));
const navigate = useNavigate();

useEffect(() => {
  if (!user) {
    alert("Please login to access the menu");
    navigate("/login");
  }
}, [user, navigate]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "",
    comments: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://zaiqa-app-1.onrender.com/reserve", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        alert(result.message || "Reservation successful!");
        // Reset form 
        setFormData({
          name: "",
          email: "",
          phone: "",
          date: "",
          time: "",
          guests: "",
          comments: "",
        });
      } else {
        alert(result.message || "Failed to reserve table.");
      }
    } catch (error) {
      console.error("Error during reservation:", error);
      alert("An error occurred while submitting your reservation.");
    }
  };

  return (
    <>
      <h1 className="reservation-title">Reserve a Table</h1>
      <div className="reservation-container">
        <div id="reserve">
          <img src={hotel} alt="table reservation" id="reserve-image" />
        </div>
        <form onSubmit={handleSubmit} className="reservation-form">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="phone">Phone</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />

          <label htmlFor="date">Date</label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />

          <label htmlFor="time">Time</label>
          <input
            type="time"
            id="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
          />

          <label htmlFor="guests">Number of Guests</label>
          <input
            type="number"
            id="guests"
            name="guests"
            value={formData.guests}
            onChange={handleChange}
            required
          />

          <label htmlFor="comments">Comments (optional)</label>
          <textarea
            id="comments"
            name="comments"
            value={formData.comments}
            onChange={handleChange}
          />

          <input type="submit" value="Reserve" />
        </form>
      </div>
    </>
  );
};

export default Reservation;
// import React, {useState} from "react";
// import "./reslog.css"; // Your CSS styles
// import hotel from './assets/reserve.jpg';

// const Reservation = () => {

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     date: "",
//     time: "",
//     guests: "",
//     comments: "",
//   });

//  const handleChange = (e) => {
//   setFormData({...formData, [e.target.name]: e.target.value});
//  };

//  const handleSubmit = async (e) => {
//   e.preventDefault();

//   const response = await fetch("http://localhost:5000/reserve", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(formData),
//   });

//   const result = await response.json();
//   alert(result.message);
//  };


//   return (
//     <>
//       <h1 className="reservation-title">Reserve a Table</h1>
//       <div className="reservation-container">
//         <div id="reserve">
//           <img src={hotel} alt="table reservation" id="reserve-image" />
//         </div>
//         <form onSubmit={handleSubmit} className="reservation-form">
//           <label htmlFor="name">Name</label>
//           <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />

//           <label htmlFor="email">Email</label>
//           <input type="email" id="email" name="email" value={formData.email} onChange={handleChange}required />

//           <label htmlFor="phone">Phone</label>
//           <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required />

//           <label htmlFor="date">Date</label>
//           <input type="date" id="date" name="date" value={formData.date} onChange={handleChange}required />

//           <label htmlFor="time">Time</label>
//           <input type="time" id="time" name="time"value={formData.time} onChange={handleChange} required />

//           <label htmlFor="guests">Number of Guests</label>
//           <input type="number" id="guests" name="guests" value={formData.guests} onChange={handleChange}required />

//           <label htmlFor="comments">Comments (optional)</label>
//           <textarea id="comments" name="comments" value={formData.comments} onChange={handleChange} />

//           <input type="submit" value="Reserve" />
//         </form>
//       </div>
//     </>
//   );
// };

// export default Reservation;
