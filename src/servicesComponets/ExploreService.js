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
    }
    getData();
  }, []);

  const b = serviceData[0]?.subtitle1;
  const d = JSON.parse(b);
  console.log(d);

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
