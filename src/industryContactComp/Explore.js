import React, { useEffect, useState } from "react";
import DynamicContent from "./DynamicContent";
import { useParams } from "react-router-dom";
import Loader from "../loader/Loader";

const Explore = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(false);
  const { title } = useParams();
  console.log(title, " params");

  useEffect(() => {
    async function fetchData() {
      const responseData = await fetch(
        "http://15.207.123.147:8000/explore/industry/"
      );
      const jsonData = await responseData.json();
      setData(jsonData);
    }
    fetchData();
  }, []);

  useEffect(() => {
    setLoading(true);
    const filterData =
      data &&
      data.filter((ele) => {
        return ele.title.startsWith(title);
      });
    setFilteredData(filterData);
    console.log(filteredData);
    setLoading(false);
  }, [data]);

  return (
    <div>
      {loading && <Loader />}
      {filteredData && (
        <DynamicContent
          // heading="Tech & E-Com"
          title={filteredData[0]?.title}
          // photoUrl="https://assets-global.website-files.com/61eaca7810877f81dc9aaa6b/620f8a767dfb1be540ae97ad_Tech%20_%20E-Com.png"
          image1={filteredData[0]?.image1}
          heading1={filteredData[0]?.heading1}
          para1={filteredData[0]?.para1}
          para3={filteredData[0]?.para3}
          para2={filteredData[0]?.para2}
          subtitle1={filteredData[0]?.subtitle1}
          subtitle2={filteredData[0]?.subtitle2}
        />
      )}

      {/* Add more instances of DynamicContent as needed */}
    </div>
  );
};

export default Explore;
