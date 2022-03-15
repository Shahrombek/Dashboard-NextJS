import dynamic from "next/dynamic";
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const Radar = () => {
  
  const series =[67, 55, 44]
  const options = {
    chart: {
      height: 350,
      type: 'radialBar',
    },
    plotOptions: {
      radialBar: {
        dataLabels: {
          name: {
            fontSize: '22px',
          },
          value: {
            borderRadius: '10px',
            fontSize: '16px',
          },
          total: {
            show: true,
            label: 'Total',
            formatter: function (w) {
              return 73;
            }
          }
        }
      }
    },
    labels: ['Apples', 'Oranges', 'Bananas'],
  }

  return (
    <ReactApexChart
      options={options}
      series={series}
      type="radialBar"
      height={350}
    />
  );
};

export default Radar;
