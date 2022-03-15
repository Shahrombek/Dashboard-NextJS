import dynamic from "next/dynamic";
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const RadialChart = () => {
  const series = [75, 50, 30];
  const options1 = {
    chart: {
      height: 200,
      width: 150,
      type: "radialBar",
      fontFamily: "Montserrat",
      borderRadius: "12px",
    },

    plotOptions: {
      bar: {
        borderRadius: 12,
      },
      radialBar: {
        dataLabels: {
          total: {
            show: false,
          },
        },
      },
    },
    labels: ["Return", "Orders", "Sales"],
  };

  return (
    <ReactApexChart
      options={options1}
      series={series}
      type="radialBar"
      height={250}
    />
  );
};

export default RadialChart;
