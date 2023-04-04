var options = {
  series: [
    {
      name: "Desktops",
      data: Array.from({ length: 24 }, (_, i) => i),
    },
  ],
  chart: {
    fontFamily: "Inter, Arial, sans-serif",
    height: 350,
    foreColor: "#fff",
    type: "line",
    zoom: {
      enabled: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "straight",
  },
  title: {
    text: "Tarefas Concluídas por Hora",
    align: "left",
  },
  striped: false,
  grid: {
    show: false,
    row: {
      colors: ["transparent"], // takes an array which will be repeated on columns
      opacity: 0.5,
    },
  },
  colors: ["#1658f2"],
  grid: {
    borderColor: "#626161",
    showLines: true,
  },
  xaxis: {
    categories: Array.from({ length: 24 }, (_, i) =>
      new Date(0, 0, 0, i).toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      })
    ),
  },
};

var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();
