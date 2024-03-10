import React from "react";
import { seller } from "../../assets/sellerData";
import { FaStar } from 'react-icons/fa'
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { db } from '../../firebaseSeller';
import { collection, getDocs } from 'firebase/firestore' //establish a connection to a specific connection

const Order = () => {
  const [dataCount, setDataCount] = useState(0);
  const [businessName, setBusinessName] = useState([]);
  const businessNameCollectionRef = collection(db, "SellerInfo");

  

  useEffect(() => {

    // Fetch data from Firebase and get its count
    const fetchData = async () => {
      try {
        const snapshot = await getDocs(businessNameCollectionRef);
        const count = snapshot.size; // Get count of items
        setDataCount(count);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    const getBusinessName = async () => {
      const data = await getDocs(businessNameCollectionRef);
      //console.log(data);
      //looping through the documents in the collection and setting to businessName array equal to doc
      setBusinessName(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    };
    fetchData(); // Call the function to fetch data
    getBusinessName()
  }, [])
  return (
    <>
      <div className="w-full  bg-white flex justify-center items-center">
        <div className="md:w-full">
          <div className="flex justify-center items-center">
            <input
              type="text"
              className="w-1/2 h-10 rounded-xl mt-10 px-4 py-2 bg-gray-200"
              placeholder="Search Seller..."
            />
            <button className="h-10 rounded-xl mt-10 px-4 py-2 bg-red-500 font-bold text-white ml-2 ">
              Search
            </button>
          </div>
          <div className="mt-10 pt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {businessName.map((b) => (
              <div key={b.id} className="w-full rounded-2xl bg-white">
                <div className="h-64 overflow-hidden rounded-t-2xl">
                  <img src="src/assets/orderImg.jpg" alt="Seller" className="w-full h-full object-cover" />
                </div>
                <div className="p-4">
                  <h4 className="font-bold text-lg mb-2">{b.businessName}</h4>
                  <h5 className="font-bold text-lg mb-2">{b.fname} {b.lname}</h5>
                  <p className="mb-4">{b.address}</p>
                  <p className="mb-4">{b.phone}</p>
                  <div className="flex">
                    <span className="px-2 py-1 bg-pink-300 text-sm rounded mr-2">
                      Lunch
                    </span>
                    <span className="px-2 py-1 bg-pink-300 text-sm rounded mr-2">
                      Dinner
                    </span>
                  </div>
                  <Link to="orderinfo">
                  <div className="flex justify-center">
                  <button className="mt-4 text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none">&gt;</button>
                  </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Order;
