 

 
export function  getData() {
	fetch("https://cdn.jsdelivr.net/gh/highcharts/highcharts@v7.0.0/samples/data/new-intraday.json")
	.then((response) => response.json())
	.then((responseJson) => {
		console.log(responseJson);
		 
	})
	
}


const dataSet = {
    label: ' ',
    // data: [4160, 4120, 4100, 4080, 4060, 4020, 4062,4033, 4090],
    backgroundColor: [
      'rgba(6, 95, 211, 0.6)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(255, 206, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(255, 159, 64, 0.2)',
    ],
    borderColor: [
      'rgba(6, 95, 211, 1)',
      'rgba(54, 162, 235, 1)',
      'rgba(255, 206, 86, 1)',
      'rgba(75, 192, 192, 1)',
      'rgba(153, 102, 255, 1)',
      'rgba(255, 159, 64, 1)',
    ],
    borderWidth: 1,
    fill: true,
  }

export function dataSetTemp(){
	return dataSet;
}