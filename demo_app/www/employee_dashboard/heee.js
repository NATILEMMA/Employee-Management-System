import { Chart } from './frappe-charts/dist/frappe-charts.esm.js'
import dat from './try.json' assert {type: 'json'};



const dates = {};


for(var i =0;i< dat.length;i++ ){

    if(dat[i][0] == "Present"){
      dates[dat[i][1]] = 4;
       }
    else if (dat[i][0] == "Absent") {
      dates[dat[i][1]] = 2;
    } 
    else if (dat[i][0] == "Work From Home"){
      dates[dat[i][1]] = 3;
    }
    else {
      dates[dat[i][1]] = 1;
    }
}

const getTimestamp = (date) =>
  Math.round(new Date(date).getTime() / 1000).toString();
  

// Dates in normal format (mm-dd-yyyy)

const timestamp = new Date().getTime();
const today = new Date(timestamp);
let today1 = today.toLocaleDateString('en-US');




const toDataPointsV2 = (dates) => {
  const normalDates = Object.keys(dates);
  let dataPoints = {};
  normalDates.forEach((item) => {
    const timeStamp = getTimestamp(item);
    dataPoints[timeStamp] = dates[item];
  });

  return dataPoints;
};

let data = {
  dataPoints: toDataPointsV2(dates),
  start: new Date("01-01-2022"), // a JS date object
  end: new Date(today.toLocaleString('sv'))
};

new Chart("#chart", {
  type: "heatmap",
  data,
  colors: ['#FFFFFF','#FFFFFF', '#ff0000', '#FFFF00', '#00FF00'],
});
console.log(dates);


const today = new Date(timestamp);