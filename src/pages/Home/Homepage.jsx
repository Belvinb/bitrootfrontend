import React, { useEffect, useState } from "react";
import "./Homepage.css";
import axios from "axios";
import './Homepage.css'
import Card from "../../components/Card/Card";


const Homepage = () => {
  const [cardData, setcardData] = useState([]);

  useEffect(() => {
    const getCardData = async () => {
      try {
        const details = await axios.get(
          "https://my-json-server.typicode.com/Codeinwp/front-end-internship-api/posts"
        );
        setcardData(details.data);
        console.log(details.data, "axios get result");
      } catch (error) {}
    };
    getCardData();
  }, []);

  return (
    <>
      <div className="row">
        {cardData.map((data) => {
          return <Card value={data} key={data.id} />;
        })}
      </div>
    </>
  );
};

export default Homepage;
