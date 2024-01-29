import React, { useEffect, useState } from "react";
import ServiceBottomExplore from "./ServiceBottomExplore";
import ServiceTopExplore from "./ServiceTopExplore";
import { useParams } from "react-router-dom";

function ExploreService() {
  const { title } = useParams();
  const [serviceData, setServicesData] = useState([]);
  const [mainContent, setMainContent] = useState({});
  const [filter, setFilter] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await fetch(
        "http://15.207.123.147:8000/explore/services/"
      );
      const responsJson = await response.json();
      setServicesData(responsJson);
      const filtredData = serviceData.filter((ele) => {
        return ele.title === title;
      });
      setFilter(filtredData);
    }
    getData();
  }, [serviceData]);

  // console.log(serviceData)

  return (
    <>
      <ServiceTopExplore
        image={serviceData[0]?.image1}
        title={serviceData[0]?.title}
      />
      <ServiceBottomExplore />
    </>
  );
}

export default ExploreService;
