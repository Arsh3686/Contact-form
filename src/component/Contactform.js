import React, { useState } from "react";
import "./style.css";

const Contactform = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    desc: "",
  });
  let name, value;
  const getData = (event) => {
    name = event.target.name;
    value = event.target.value;
    setUser({ ...user, [name]: value });
  };

  const getPost = async (e) => {
    e.preventDefault();
    const {name, email, phone, address, desc} = user;

    if(name && email && phone && address && desc){
      const res = await fetch(
        "https://create-form-1db5c-default-rtdb.firebaseio.com/ArshCreatedDatabase.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            phone,
            address,
            desc,
          }),
        }
      );
      if(res){
        setUser({
          name: "",
          email: "",
          phone: "",
          address: "",
          desc: "",
        })
          alert("Data stored successfully");
      }
    }else{
      alert("Fill data first")
    }

    
    
  };

  return (
    <>
      <form method="POST">
        <div className="main">
          <div className="title">
            <h1>Contactform</h1>
          </div>
          <div className="row">
            <div className="widget">
              <span>Name*</span>
              <br></br>
              <input
                className="inputs"
                type="text"
                placeholder="✍ write your name"
                name="name"
                onChange={getData}
                autoComplete="off"
                required
                size="200px"
              />
            </div>
            <div className="widget">
              <span>Email*</span>
              <br></br>
              <input
                className="inputs"
                type="text"
                placeholder="✍ write your name"
                name="email"
                value={user.email}
                onChange={getData}
                autoComplete="off"
                required
                size="200px"
              />
            </div>
          </div>
          <div className="row">
            <div className="widget">
              <span>Phone No.*</span>
              <br></br>
              <input
                className="inputs"
                type="text"
                placeholder="✍ write your name"
                name="phone"
                value={user.phone}
                onChange={getData}
                autoComplete="off"
                required
                size="200px"
              />
            </div>
            <div className="widget">
              <span>address*</span>
              <br></br>
              <input
                className="inputs"
                type="text"
                placeholder="✍ write your name"
                name="address"
                value={user.address}
                onChange={getData}
                autoComplete="off"
                required
                size="200px"
              />
            </div>
          </div>
          <span className="span-text">Message*</span>
          <textarea
            className="desciprion"
            name="desc"
            value={user.desc}
            onChange={getData}
          ></textarea>
          <div className="submit">
            <br></br>
            <button onClick={getPost}>Submit</button>
          </div>
        </div>
      </form>
    </>
  );
};

export default Contactform;
