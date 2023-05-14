import React, { useState } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import bmcimg from "/Users/coryparrish/Desktop/bmc_app_ui/client/src/assets/bmcimg.png";

const stripePromise = loadStripe("YOUR_PUBLISHABLE_KEY");

const Registration = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [bundleQuantity, setBundleQuantity] = useState(0);
  const [classQuantity, setClassQuantity] = useState(0);
  const [emailError, setEmailError] = useState(false);
  const [nameError, setNameError] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setEmailError(false);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
    setNameError(false);
  };

  const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const handleIncrementBundle = () => {
    setBundleQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrementBundle = () => {
    if (bundleQuantity > 0) {
      setBundleQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const handleIncrementClass = () => {
    setClassQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrementClass = () => {
    if (classQuantity > 0) {
      setClassQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const handleClick = async () => {
    try {
      if (!validateEmail(email)) {
        setEmailError(true);
        return;
      }
  
      if (!name) {
        setNameError(true);
        return;
      }
  
      if (bundleQuantity > 0 && classQuantity === 0) {
        const response = await fetch(
          "http://localhost:3000/create-checkout-session",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            mode: "cors",
            body: JSON.stringify({
              email,
              name,
              items: [{ id: 1, quantity: bundleQuantity }],
            }),
          }
        );
  
        if (response.ok) {
          const { url } = await response.json();
          window.location = url;
        } else {
          const error = await response.json();
          setEmailError(`Error: ${error.error}`);
        }
      } else if (bundleQuantity === 0 && classQuantity > 0) {
        const response = await fetch(
          "http://localhost:3000/create-checkout-session",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            mode: "cors",
            body: JSON.stringify({
              email,
              name,
              items: [{ id: 2, quantity: classQuantity }],
            }),
          }
        );
  
        if (response.ok) {
          const { url } = await response.json();
          window.location = url;
        } else {
          const error = await response.json();
          setEmailError(`Error: ${error.error}`);
        }
      } else if (bundleQuantity > 0 || classQuantity > 0) {
        // Proceed to checkout with both bundleQuantity and classQuantity
        const response = await fetch(
          "http://localhost:3000/create-checkout-session",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            mode: "cors",
            body: JSON.stringify({
              email,
              name,
              items: [
                { id: 1, quantity: bundleQuantity },
                { id: 2, quantity: classQuantity },
              ],
            }),
          }
        );
  
        if (response.ok) {
          const { url } = await response.json();
          window.location = url;
        } else {
          const error = await response.json();
          setEmailError(`Error: ${error.error}`);
        }
      } else {
        console.log(
          "Please select at least one item before proceeding to checkout."
        );
      }
    } catch (error) {
      console.error(error);
    }
  };
  

  return (
    <div>
      <div className="flex mf:flex-row flex-col items-center justify-between mf:p-20 pb-12 pt-36 pr-12 pl-10">
        <div className="flex flex-1 justify-center flex-col sm:flex-row mf:mr-10 ml-10 items-center">
          <h1
            className="text-[#0d0630] py-20 sm:text-8xl text-5xl gothic text-left"
            style={{
              fontWeight: 900,
              paddingLeft: "40px",
              paddingRight: "40px",
            }}
          >
            <span className="responsive-text">TAKE A CLASS WITH US...</span>
          </h1>

          <div className="text-center">
            <h2
              style={{
                fontSize: "36px",
                fontWeight: 700,
                textAlign: "center",
                paddingLeft: "40px",
                paddingRight: "40px",
                paddingBottom: "40px",
              }}
            >
              Carson <br /> Improv Workshop
            </h2>
            <p
              style={{
                wordBreak: "break-word",
                paddingLeft: "40px",
                paddingRight: "40px",
                fontFamily: "Poppins",
                fontSize: "20px",
              }}
            >
              New Class
            </p>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        {/* class info */}
        <div
          style={{
            fontSize: "18px",
            textAlign: "center",
            fontFamily: "Poppins",
            fontSize: "20px",
          }}
        >
          {/* <p>
            <strong>Location:</strong>Terasaki Budokan Community Room & Plaza
            <br />
            <br />
            <strong>Schedule:</strong> Tuesdays 8:15pm - 9:45pm
            <br />
            <br />
            <strong>Cost:</strong> $10 per workshop or $30 for 4 workshops
            <br />
            <br />
            <strong>Registration:</strong> Pre-register using the link below.
            <br />
                <br />
                <strong>Contact:</strong> TeraBudo@LTSC.org
          </p> */}
          <br />
          <br />
          <br />
          {/* Class registration */}
          <div>
            <h2>
              <strong>Sign up today!</strong>
            </h2>
            <br />
            <br />
            <p>
              Bundle Improv (4 classes) - April 2023 | Tuesdays 8:15pm-9:45pm{" "}
              <br />
              $30.00
            </p>
            <br />
            <span
              className={`select-none w-auto cursor-pointer px-1 py-0 ${
                bundleQuantity === 0 ? "bg-gray-100" : "bg-gray-200"
              } font-semibold`}
              onClick={handleDecrementBundle}
            >
              -
            </span>
            <span className="w-auto px-4 py-4 font-semibold">
              {bundleQuantity}
            </span>
            <span
              className={`select-none w-auto cursor-pointer px-1 py-0 ${
                bundleQuantity === 1 ? "bg-gray-100" : "bg-gray-200"
              } font-semibold`}
              onClick={handleIncrementBundle}
            >
              +
            </span>
            <br />
            <div className="h-[1px] w-full bg-[#6761A8] my-2" />
            <br />
            <p>
              Improv - Single Class <br /> $10.00
            </p>
            <br />
            <span
              className={`select-none w-auto cursor-pointer px-1 py-0 ${
                classQuantity === 0 ? "bg-gray-100" : "bg-gray-200"
              } font-semibold`}
              onClick={handleDecrementClass}
            >
              -
            </span>
            <span className="w-auto px-4 py-4 font-semibold">
              {classQuantity}
            </span>
            <span
              className={`select-none w-auto cursor-pointer px-1 py-0 ${
                classQuantity === 1 ? "bg-gray-100" : "bg-gray-200"
              } font-semibold`}
              onClick={handleIncrementClass}
            >
              +
            </span>
            <br />
            <div className="h-[1px] w-full bg-[#6761A8] my-2" />
            <br />
          </div>
          <div
            className="text-center"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "20px",
            }}
          >
            <Elements stripe={stripePromise}>
              <div className="flex flex-col">
        <div className="flex flex-row">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
            className={`my-4 blue-glassmorphism ${nameError ? "border-red-500" : ""}`}
            required
          />
          {nameError && <p className="text-red-500">{nameError}</p>}
        </div>
        <div className="flex flex-row">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            className={`my-4 blue-glassmorphism ${emailError ? "border-red-500" : ""}`}
            required
          />
          {emailError && <p className="text-red-500">{emailError}</p>}
        </div>
              <button
                onClick={handleClick}
                className="bg-[#3A86FF] hover:bg-[#FFBE0B] text-white px-8 py-1 rounded-full font-semibold shadow-xl"
              >
                Checkout
              </button>
              </div>

            </Elements>
          </div>
          <div className="flex flex-row pt-20 items-center justify-center">
            <img
              src={bmcimg}
              alt="Bmcimg"
              style={{ width: "100px", height: "100px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
