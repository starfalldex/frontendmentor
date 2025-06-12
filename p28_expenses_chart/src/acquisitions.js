import Chart from 'chart.js/auto'
import chartData from "./data.json"
console.log(chartData);
(async function () {
  const data = chartData;

  new Chart(
    document.getElementById('acquisitions'),
    {

      type: 'bar',
      data: {
        labels: data.map(row => row.day),
        datasets: [
          {
            label: '$',
            data: data.map(row => row.amount),
            backgroundColor: "#EC755D",
            hoverBackgroundColor: "#B4DFE5",
            borderSkipped: false,
            borderRadius: 8,
            categoryPercentage: 0.8,
            barPercentage: 1,
          }
        ]
      },
      options: {
        aspectRatio: 1.8,
        scales: {
          x: {
            ticks: {
              font: {
                weight: 600,
                size: 18,
              }
            },
            grid: {
              display: false
            },
            border: {
              display: false,
            }
          },
          y: {
            grid: {
              display: false,
            },
            ticks: { display: false },
            border: {
              display: false,
            },


          }
        },
        plugins: {
          legend: {
            display: false
          },
          tooltip: {
            enabled: false, // Disable default tooltip
            external: function (context) {
              let tooltip = context.tooltip;
              let chart = context.chart;
              let canvas = chart.canvas;

              // Remove existing tooltip element if it exists
              let tooltipEl = document.getElementById('chartjs-tooltip');
              if (!tooltipEl) {
                tooltipEl = document.createElement('div');
                tooltipEl.id = 'chartjs-tooltip';
                tooltipEl.style.position = 'absolute';
                tooltipEl.style.background = '#372413'; // Brown background
                tooltipEl.style.color = 'white';
                tooltipEl.style.padding = '0.5em 10px';
                tooltipEl.style.borderRadius = '0.5em';
                tooltipEl.style.fontSize = '1rem';
                tooltipEl.style.fontWeight = 'bold';
                tooltipEl.style.transition = 'opacity 0.2s ease';
                tooltipEl.style.textAlign = 'center';
                document.body.appendChild(tooltipEl);
              }

              // Hide tooltip when not active
              if (tooltip.opacity === 0) {
                tooltipEl.style.opacity = '0';
                return;
              }

              // Set text (custom label)
              if (tooltip.dataPoints) {
                let value = tooltip.dataPoints[0].raw;
                tooltipEl.innerHTML = `$${value.toFixed(2)}`; // Format value
              }

              // Position tooltip
              let position = canvas.getBoundingClientRect();
              let tooltipX = position.left + window.pageXOffset + tooltip.caretX - tooltipEl.offsetWidth / 2;
              let tooltipY = position.top + window.pageYOffset + tooltip.caretY - tooltipEl.offsetHeight - 10;

              tooltipEl.style.left = `${tooltipX}px`;
              tooltipEl.style.top = `${tooltipY}px`;
              tooltipEl.style.opacity = '1';
            }
          }
        },



      }

    }
  );
})();
