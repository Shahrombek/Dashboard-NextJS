import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

function BarChart(props) {
  const [width, setWidth] = useState(false);
  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth <= 600) {
        setWidth(true);
      } else {
        setWidth(false);
      }
    });
  }, []);

  const spent = [
    {
      data: [
        15000, 4500, 12000, 5000, 7500, 13000, 3000, 12000, 7500, 10000, 5500,
        15000,
      ],
    },
  ];

  const options = {
    chart: {
      type: "bar",
      height: 350,
      fontFamily: "Montserrat",
      zoom: {
        enabled: false,
      },
    },
    plotOptions: {
      bar: {
        borderRadius: 12,
        barHeight: "90%",
        horizontal: width,
        colors: {
          ranges: [
            {
              from: 0,
              to: 0,
              color: undefined,
            },
          ],
          backgroundBarColors: ["white"],
          backgroundBarOpacity: 0,
          backgroundBarRadius: 0,
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Okt",
        "Nov",
        "Dec",
      ],
    },
    grid: {
      show: false,
    },
  };

  return (
    <ReactApexChart options={options} series={spent} type="bar" height={props.height?props.height:350}/>
  );
}

export default BarChart;
