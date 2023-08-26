export const data = {
  labels: [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ],
  datasets: [
    {
      label: "Current week",
      backgroundColor: "rgba(255,99,132,0.2)",
      borderColor: "rgba(255,99,132,1)",
      borderWidth: 1,
      hoverBackgroundColor: "rgba(255,99,132,0.4)",
      hoverBorderColor: "rgba(255,99,132,1)",
      data: [65, 59, 80, 81, 56, 55, 40],
    },
    {
      label: "Past week",
      backgroundColor: "rgba(0,99,255,0.2)",
      borderColor: "rgba(0,99,255,1)",
      borderWidth: 1,
      hoverBackgroundColor: "rgba(0,99,255,0.4)",
      hoverBorderColor: "rgba(0,99,255,1)",
      data: [60, 70, 30, 20, 6, 80, 60],
    },
  ],
};
