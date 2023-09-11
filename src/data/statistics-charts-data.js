import { chartsConfig } from "@/configs";

const barViewsChart = {
  type: "bar",
  height: 220,
  series: [],
  options: {
    ...chartsConfig,
    colors: "#fff",
    plotOptions: {
      bar: {
        columnWidth: "16%",
        borderRadius: 5,
      },
    },
    xaxis: {
      ...chartsConfig.xaxis,
      categories: [],
    },
  },
};

const lineViewsChart = {
  type: "line",
  height: 220,
  series: [],
  options: {
    ...chartsConfig,
    colors: ["#fff"],
    stroke: {
      lineCap: "round",
    },
    markers: {
      size: 5,
    },
    xaxis: {
      ...chartsConfig.xaxis,
      categories: [],
    },
  },
};

const pieViewsChart = {
  type: "pie",
  height: 220,
  series: [],
  options: {
    labels: [],
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: 200
        },
        legend: {
          position: 'bottom'
        }
      }
    }],
    stroke: {
      lineCap: "round",
    },
    markers: {
      size: 5,
    },
  },
};

export const statisticsCharts = {
  'bar': barViewsChart,
  'line': lineViewsChart,
  'pie': pieViewsChart
}

export const statisticsChartsData = [
  {
    type: 'sales',
    color: "blue",
    title: "Ventas",
    description: " ",
    footer: " ",
    data: [
      {
        name: "Ventas",
        data: [50, 40, 300, 320, 500, 350, 200, 230, 500]
      },
    ],
    categories: ["06-01-2023", "06-15-2021", "06-22-2021", "07-01-2023", "07-14-2023", "08-08-2023", "08-26-2023", "09-02-2023", "09-10-2023"]
  },
  {
    type: 'users',
    color: "green",
    title: "Usuarios Registrador",
    description: " ",
    footer: " ",
    data: [
      {
        name: "Usuarios",
        data: [3, 6, 2, 8, 1, 3, 7, 2]
      },
    ],
    categories: ["06-01-2023", "06-15-2021", "07-01-2023", "07-15-2023", "08-01-2023", "08-15-2023", "09-01-2023", "09-15-2023"]
  }
];
