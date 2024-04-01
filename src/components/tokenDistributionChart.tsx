"use client"
// components/TokenDistributionChart.tsx
import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const TokenDistributionChart = () => {
  const chartRef = useRef<Chart<"doughnut", number[], string> | null>(null);

  useEffect(() => {
    // Data for the Doughnut chart
    const data = {
      labels: ['Presale', 'LP'],
      datasets: [{
        label: 'Token Distribution',
        data: [50, 50], // 50% Presale, 50% LP
        backgroundColor: [
          'rgb(0, 0, 0)',
          'rgb(200, 200, 200)',
        ],
        hoverOffset: 4
      }]
    };

    

    const ctx = document.getElementById('tokenDistributionChart') as HTMLCanvasElement;

    if (ctx) {
      if (chartRef.current) {
        chartRef.current.destroy(); // Destroy the existing chart instance
      }

      chartRef.current = new Chart(ctx, {
        type: 'doughnut',
        data: data,
        options: {
            responsive: true,
            plugins: {
              legend: {
                position: 'bottom',
                labels: {
                    padding: 30, // Adjust the padding between legend items
                    color: 'rgb(255, 255, 255)',
                    font: {
                        size: 20
                    }
    
                }
              },
            },
            
          }
      });
    }

    // Cleanup function to destroy the chart when component unmounts
    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, []); // Run only once on component mount

  return <canvas id="tokenDistributionChart" width="400" height="400"></canvas>;
};

export default TokenDistributionChart;

