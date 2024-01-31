import React, { useEffect, useState } from "react";
import ServiceBottomExplore from "./ServiceBottomExplore";
import ServiceTopExplore from "./ServiceTopExplore";
import { useParams } from "react-router-dom";

function ExploreService() {
  const { id } = useParams();
  const [serviceData, setServicesData] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await fetch("http://15.207.123.147:8000/api/services/");
      const responsJson = await response.json();
      // console.log("responsJson: ", responsJson);
      // setServicesData(responsJson);
      const data = responsJson.filter((item) => item.id === parseInt(id));
      setServicesData(data);
    }
    getData();
  }, [id]);

  // console.log(serviceData[0]);

  return (
    <>
      <ServiceTopExplore
        data={serviceData[0]?.next_page}
        title={serviceData[0]?.name}
        image={serviceData[0]?.main_image}
      />
      {/* <ServiceBottomExplore /> */}
    </>
  );
}

export default ExploreService;
