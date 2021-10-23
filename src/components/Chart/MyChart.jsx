import React, { useEffect } from 'react'
import Chart from 'chart.js/auto'
import cl from './MyChart.module.css'

export default function MyChart(props) {

  function calcAxis(data, param) {
    const arr = [];
    for (let i = 0; i < Object.keys(data).length; i++) {
      arr.push(data[`${i + 1}`][[param]]);
    }

    return arr;
  }

  let url = ''
  if (!props.calcMaxValues) {
    url = props.url
      + props.timeRange
      + props.type.charAt(0).toUpperCase()
      + props.type.slice(1)
  } else if (props.timeRange !== 'hour') {
    url = props.url + 'max'
      + props.timeRange.charAt(0).toUpperCase()
      + props.timeRange.slice(1)
  }

  useEffect(() => {
    fetch(url)
      .then(function (response) {
        response.json().then(function (response) {
          const xAx = calcAxis(response, 'time')
          const yAx = props.type === 'tmp' ? calcAxis(response, 'temp') : calcAxis(response, 'humidity')

          //Пересоздание canvas для создания нового экземпляра класса Chart
          document.querySelector('#' + props.type + 'Canvas').innerHTML = `<canvas id=${props.type}></canvas>`

          const ctx = document.getElementById(props.type)
          const myChart = new Chart(ctx, {
            type: 'line',
            data: {
              labels: xAx,
              datasets: [{
                label: props.type === 'tmp' ? "Server's temperature" : "Server's humidity",
                data: yAx,
                borderColor: props.type === 'tmp' ? "#dc3545" : "#0b5ed7",
              }]
            },
            options: {
              scales: {
                y: {
                  // beginAtZero: true,
                  grace: "2%",
                }
              }
            }
          })
          myChart.clear()
        }, [])
      })
  })

  return (
    <div id={props.type + 'Canvas'} className={cl.MyChart}>
      <canvas id={props.type}></canvas>
    </div>
  )
}
