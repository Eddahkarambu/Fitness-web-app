import React, { useEffect } from "react";
import Chart from "chart.js/auto";
import "./Dashboard.css";

const Dashboard = () => {
  useEffect(() => {
    // Dummy data for the chart
    const chartData = {
      labels: ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5"],
      datasets: [
        {
          label: "Workout Progress",
          data: [10, 20, 30, 25, 40], // Replace with actual workout data
          borderColor: "#4caf50",
          backgroundColor: "rgba(76, 175, 80, 0.2)",
          borderWidth: 2,
        },
      ],
    };

    // Get the canvas element
    const ctx = document.getElementById("workoutChart");

    // Create the chart
    const workoutChart = new Chart(ctx, {
      type: "line",
      data: chartData,
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });

    // Cleanup on component unmount
    return () => {
      workoutChart.destroy();
    };
  }, []);

  return (
    <div className="Dashboard">
      <header>
        <h1>Dashboard</h1>
      </header>

      <main>
        <section className="chart-section">
          <h2>Workout Progress</h2>
          <canvas id="workoutChart" width="400" height="200"></canvas>
        </section>

        {/* Add more dashboard sections as needed */}
      </main>
    </div>
  );
};

export default Dashboard;
