import React from 'react';
import { Line } from 'react-chartjs-2';

// const data = {
//   labels: ['1', '2', '3', '4', '5', '6'],
//   datasets: [
//     {
//       label: 'pH',
//       data: [3, 8, 9, 5, 2, 6],
//       fill: false,
//       backgroundColor: 'rgb(255, 99, 132)',
//       borderColor: 'rgba(255, 99, 132, 0.2)',
//       yAxisID: 'y-axis-1',
//     },
//     {
//       label: 'Temperature',
//       data: [1, 2, 1, 1, 2, 2],
//       fill: false,
//       backgroundColor: 'rgb(54, 162, 235)',
//       borderColor: 'rgba(54, 162, 235, 0.2)',
//       yAxisID: 'y-axis-1',
//     },
//      {
//       label: 'EC',
//       data: [7, 5, 1, 7, 2, 4],
//       fill: false,
//       backgroundColor: 'darkviolet',
//       borderColor: 'violet',
//       yAxisID: 'y-axis-1',
//     },
//   ],
// }

// const options = {
//   scales: {
//     yAxes: [
//       {
//         type: 'linear',
//         display: true,
//         position: 'left',
//         id: 'y-axis-1',
//       },
//       {
//         type: 'linear',
//         display: true,
//         position: 'right',
//         id: 'y-axis-2',
//         gridLines: {
//           drawOnArea: false,
//         },
//       },
//     ],
//   },
// }

const MultiAxisLine = (props) => {
  const {data, options} = props;
  return (
    <>
      <div className='header'>
        {/* <h1 className='title'>Data Chart</h1> */}
      </div>
      <Line data={data} options={options} />
    </>
  )
}

export default MultiAxisLine;