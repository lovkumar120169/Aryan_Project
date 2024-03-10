import React from "react";
import { signOut } from "firebase/auth";
import { useState, useEffect } from "react";
import { db } from "../../firebaseSeller";
import { collection, getDocs, addDoc } from "firebase/firestore";
const BuyerProfile = () => {
  const businessNameCollectionRef = collection(db, "SellerInfo");
  const [newFirstName, setnewFirstName] = useState("");
  const [newLasttName, setnewLasttName] = useState("");
  const [newBusinessName, setBusinessName] = useState("");
  const [newGst, setnewGst] = useState("");
  const [newPhone, setnewPhone] = useState(0);
  const [newAddress, setnewAddress] = useState("");
  const createSeller = async () => {
    await addDoc(businessNameCollectionRef, {
      fname: newFirstName,
      lname: newLasttName,
      businessName: newBusinessName,
      gstNo: newGst,
      phone: newPhone,
      address: newAddress,
    });
    alert("Seller added successfully!");
  };

  const buyerDetails = JSON.parse(localStorage.getItem("buyerDetails")) || [];
  // const { user } = userDetails;
  // console.log("userDetails is here", userDetails);

  return (
    <>
      <div className="center">
        <div className="profile">
          <h1>Profile</h1>
          <span onClick={() => signOut(auth)}>Sign Out</span>
        </div>
      </div>
      <div className="w-full h-screen flex justify-center items-center bg-white">
        <div className="h-auto flex flex-col justify-center items-center bg-slate-200 rounded-2xl px-6 py-6">
          <div className="flex">
            <label className="form-control w-full max-w-xs mx-3">
              <div className="label">
                <span className="label-text">First Name</span>
                <span className="label-text-al text-red-600 text-xl font-bold">
                  *
                </span>
              </div>
              <input
                type="text"
                placeholder=""
                value={buyerDetails.fName}
                className="input input-bordered w-full max-w-xs"
                onChange={(event) => {
                  setnewFirstName(event.target.value);
                }}
              />
            </label>
            <label className="form-control w-full max-w-xs mx-3">
              <div className="label">
                <span className="label-text">Last Name</span>
                <span className="label-text-al text-red-600 text-xl font-bold">
                  *
                </span>
              </div>
              <input
                type="text"
                placeholder=""
                value={buyerDetails.lName}
                className="input input-bordered w-full max-w-xs"
                onChange={(event) => {
                  setnewLasttName(event.target.value);
                }}
              />
            </label>
          </div>
          <div className="w-full px-3">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Meal Plan</span>
                <span className="label-text-al text-red-600 text-xl font-bold">
                  *
                </span>
              </div>
              <input
                type="text"
                // value={userDetails.phone}
                placeholder=""
                className="input input-bordered w-full"
                onChange={(event) => {
                  setnewPhone(event.target.value);
                }}
              />
            </label>

            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Duration</span>
                <span className="label-text-al text-red-600 text-xl font-bold">
                  *
                </span>
              </div>
              <input
                type="text"
                placeholder=""
                className="input input-bordered w-full"
                onChange={(event) => {
                  setnewPhone(event.target.value);
                }}
              />
            </label>

            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Payment</span>
                <span className="label-text-al text-red-600 text-xl font-bold">
                  *
                </span>
              </div>
              <input
                type="text"
                // value={userDetails.phone}
                placeholder=""
                className="input input-bordered w-full"
                onChange={(event) => {
                  setnewPhone(event.target.value);
                }}
              />
            </label>

            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Phone No.</span>
                <span className="label-text-al text-red-600 text-xl font-bold">
                  *
                </span>
              </div>
              <input
                type="number"
                value={buyerDetails.phone}
                placeholder=""
                className="input input-bordered w-full"
                onChange={(event) => {
                  setnewPhone(event.target.value);
                }}
              />
            </label>
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Address</span>
                <span className="label-text-al text-red-600 text-xl font-bold">
                  *
                </span>
              </div>
              <input
                type="text"
                placeholder=""
                value={buyerDetails.address}
                className="input input-bordered w-full"
                onChange={(event) => {
                  setnewAddress(event.target.value);
                }}
              />
            </label>
            <button
              onClick={createSeller}
              className="w-full bg-red-600 py-3 rounded-xl text-white font-bold mt-6"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BuyerProfile;
