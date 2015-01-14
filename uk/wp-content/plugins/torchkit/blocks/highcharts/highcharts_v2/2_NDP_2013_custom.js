function graph_i21_builder() {
	//console.log ('addEventListener : graph_i21_build');
/*
	var chart = null;
	var ageClick = null;
	var welstandClick = null;
	var districtClick = null;

	var chart;
*/
	var groupAge = [];
	chart = Highcharts.setOptions(Highcharts.themeBars);
	chart = new Highcharts.Chart({
		chart: {
			renderTo: 'i21container',
			type: 'column'
		},
		credits: {
            text: 'bron: NOM Print Monitor',
            href: 'http://www.ndpnieuwsmediajaarverslag.nl'
        },
        title: {
			text: ''
		},
		subtitle: {
			text: ''
		},
		xAxis: {
			categories: [
				'Landelijke dagbladen',
				'Regionale dagbladen',
				'Totaal betaalde dagbladen',
				'Gratis dagbladen',
				'Totaal dagbladen'
			]
		},
		yAxis: {
			min: 0,
			title: {
				text: 'Procenten'
			}
		},
		legend: {
			layout: 'vertical',
			backgroundColor: false,
			align: 'right',
			verticalAlign: 'top',
			x:120,
			y: -15,
			floating: true,
			shadow: false,
			borderWidth:false,
			labelFormatter: function() {
				return this.name;
			}
		},
		tooltip: {
			animation: true,
			formatter: function() {
				return '<b>'+this.series.name+' = ' + this.y + '</b><br>' + this.x
			}
		},
		plotOptions: {
			column: {
				animation: false,
				pointPadding: 1,
				borderWidth: 0
			}
		},
		series: [{
				name: '13-24 jr',
				data: [25,19,38,18,47]
			}, {
				name: '25-34 jr',
				data: [23,16,34,15,43]
			}, {
				name: '35-49 jr',
				data: [32,29,53,18,61]
			}, {
				name: '50-64jr',
				data: [41,38,67,17,72]
			}, {
				name: '65+ jr',
				data: [46,46,77,8,79]
			},

			{
				name: 'W1-hoog',
				data: [44,27,60,14,66]
			}, {
				name: 'W2',
				data: [33,31,54,16,61]
			}, {
				name: 'W3',
				data: [30,28,50,16,57]
			}, {
				name: 'W4',
				data: [30,32,53,14,59]
			}, {
				name: 'W5-laag',
				data: [26,35,53,12,59]
			},

			{
				name: '3 grote steden',
				data: [44,7,48,23,59]
			}, {
				name: 'Rest west',
				data: [43,18,54,17,61]
			}, {
				name: 'Noord',
				data: [28,40,56,10,60]
			}, {
				name: 'Oost',
				data: [29,39,56,12,61]
			}, {
				name: 'Zuid',
				data: [21,47,57,11,61]
			}]
	});
	//Reveal.layout();

	chart.series[5].hide();
	chart.series[6].hide();
	chart.series[7].hide();
	chart.series[8].hide();
	chart.series[9].hide();

	chart.series[10].hide();
	chart.series[11].hide();
	chart.series[12].hide();
	chart.series[13].hide();
	chart.series[14].hide();

	//$i21_titleH1.html(i21_titleSet());

}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function graph_i22_builder() {
	var groupAge = [];
	charti22 = Highcharts.setOptions(Highcharts.themeBarsi22);
	charti22 = new Highcharts.Chart({
		chart: {
			renderTo: 'i22container',
			type: 'column'
		},
		credits: {
            text: 'bron: HOI/Cebuco',
            href: 'http://www.ndpnieuwsmediajaarverslag.nl'
        },
        title: {
			text: ''
		},
		subtitle: {
			text: ''
		},
		xAxis: {
			categories: [
				'Landelijke dagbladen',
				'Regionale dagbladen',
				'Totaal betaalde dagbladen',
				'Gratis dagbladen',
				'Totaal dagbladen'
			]
		},
		yAxis: {
			min: 0,
			//allowDecimals: true,
			//tickInterval: 1000,
			//categories: ['Apples', 'Bananas', 'Oranges', 'Apples', 'Bananas', 'Oranges'],
			labels: {
				formatter: function() {
					return ''+ this.value;
				}
            },
			title: {
				text: 'Oplage (x 1.000)'
			}

		},
		legend: {
			layout: 'vertical',
			backgroundColor: false,
			align: 'right',
			verticalAlign: 'top',
			x:120,
			y: -15,
			floating: true,
			shadow: false,
			borderWidth:false,
			labelFormatter: function() {
				return this.name;
			}
		},
		tooltip: {
			animation: true,
			formatter: function() {
				return '<b>'+this.series.name+' = ' + (this.y*1000) + '</b><br>' + this.x
			}
		},
		plotOptions: {
			column: {
				animation: false,
				pointPadding: 1,
				borderWidth: 0
			}
		},
		series: [{
				name: '2003',
				data: [1942,2262,4204,654,4858]
			}, {
				name: '2004',
				data: [1874,2188,4062,668,4730]
			}, {
				name: '2005',
				data: [1814,2099,3913,764,4677]
			}, {
				name: '2006',
				data: [2125,1706,3831,865,4696]
			}, {
				name: '2007',
				data: [2038,1681,3719,1890,5609]
			}, {
				name: '2008',
				data: [2002,1636,3638,1763,5402]
			}, {
				name: '2009',
				data: [1938,1591,3530,1226,4756]
			}, {
				name: '2010',
				data: [1897,1558,3455,1099,4554]
			}, {
				name: '2011',
				data: [1856,1504,3359,1084,4443]
			}, {
				name: '2012',
				data: [1792,1429,3221,790,4011]
			}]
	});
	charti22.series[0].hide();
	charti22.series[1].hide();
	charti22.series[2].hide();
	charti22.series[3].hide();
	charti22.series[4].hide();


	//Reveal.layout();
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function graph_i31_builder() {
	var groupAge = [];
	charti31 = Highcharts.setOptions(Highcharts.themeBars);
	charti31 = new Highcharts.Chart({
		chart: {
			renderTo: 'i31container',
			type: 'spline'
		},
		credits: {
            text: 'bron: Nielsen',
            href: 'http://www.ndpnieuwsmediajaarverslag.nl'
        },
        title: {
			text: ''
		},
		subtitle: {
			text: ''
		},
		xAxis: {
			categories: [
				'2008',
				'2009',
				'2010',
				'2011',
				'2012'
			]
		},
		yAxis: {
			min: 0,
			title: {
				text: 'Indices'
			}
		},
		legend: {
			layout: 'vertical',
			backgroundColor: false,
			align: 'right',
			verticalAlign: 'top',
			x:120,
			y: -15,
			floating: true,
			shadow: false,
			borderWidth:false,
			labelFormatter: function() {
				return this.name;
			}
		},
		tooltip: {
			animation: true,
			formatter: function() {
				return this.x + '<br/><b>'+this.series.name+' = ' + this.y + '</b>'
			}
		},
		plotOptions: {
			spline: {
                animation: false,
                lineWidth: 2,
                states: {
                    hover: {
                        lineWidth: 5
                    }
                },
                marker: {
                        enabled: false
                }
            }
		},
		series: [{
				name: 'Totaal',
				data: [100,89,83.2,81.1,75.7]
			}, {
				name: 'Detaillisten',
				data: [100,103.9,101.4,94.7,93.3]
			}, {
				name: 'Fabrikanten-Importeurs',
				data: [100,102.5,111.9,103.4,98.0]
			},{
				name: 'Overige merken-diensten',
				data: [100,87.5,81.5,79.3,75.7]
			}, {
				name: 'Totaal gerubriceerd',
				data: [100,76.0,65.3,60.2,52.0]
			}, {
				name: 'Uitgaan',
				data: [100,102.7,92.7,121.1,110.2]
			}, {
				name: 'Personeel',
				data: [100,55.6,37.8,30.0,20.0]
			}, {
				name: 'Familieberichten',
				data: [100,100.1,91.6,86.6,80.9]
			}, {
				name: 'Onroerend goed',
				data: [100,92.2,90.8,76.7,54.8]
			}, {
				name: 'Toerisme',
				data: [100,101.9,110.1,125.5,133.2]
			}]
	});



}



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function graph_s31_builder() {
	var groupAge = [];
	charts31 = Highcharts.setOptions(Highcharts.themeBars);
	charts31 = new Highcharts.Chart({
		chart: {
			renderTo: 's31container',
			type: 'pie'
		},
		credits: {
            text: 'bron: Nielsen',
            href: 'http://www.ndpnieuwsmediajaarverslag.nl'
        },
        title: {
			text: ''
		},
		subtitle: {
			text: ''
		},

		legend: {
			layout: 'vertical',
			backgroundColor: false,
			align: 'right',
			verticalAlign: 'top',
			x:120,
			y: -15,
			floating: true,
			shadow: false,
			borderWidth:false,
			labelFormatter: function() {
				return this.name;
			}
		},
		tooltip: {
			animation: true,
			formatter: function() {
				//return '<b>'+this.series.name+'<br/>' + this.point.name +' '+ this.y + '%</b>'
				return '<b>' + this.point.name + '</b>  '+ this.y + '%'
			}
		},
		plotOptions: {
			pie: {
				animation: false,
				allowPointSelect: true,
				cursor: 'pointer',
				dataLabels: {
					enabled: false
				},
				showInLegend: true
			}
		},
		series: [{
                type: 'pie',
                name: 'Aandeel advertentievolume',
                data: [
                    ['Detaillisten',26],
					['Fabrikanten-Importeurs',9],
					['Overige merken en diensten',21],
					['Totaal gerubriceerd',6],
					['Uitgaan',10],
					['Personeel',4],
					['Familieberichten',8],
					['Onroerend goed',3],
					['Toerisme',12]
                ]
            }]
	});

}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function graph_i11_builder() {
	var groupAge = [];
	charti11 = Highcharts.setOptions(Highcharts.themeBarsi11);
	charti11 = new Highcharts.Chart({
		chart: {
			renderTo: 'i11container',
			type: 'column'
		},
		credits: {
            text: 'bron: Bedrijfstakenquête NDP Nieuwsmedia',
            href: 'http://www.ndpnieuwsmediajaarverslag.nl'
        },
        title: {
			text: ''
		},
		subtitle: {
			text: ''
		},
		xAxis: {
			categories: [
				'Totale omzet<br/>print en digitaal',

				'Groot<br/>(oplage > 130.000)',

				'Middelgroot<br/>(70.000 - 130.000)',

				'Klein<br/>(oplage < 70.000)',

				'Landelijk',
				'Regionaal'
			]
		},
		yAxis: {
			reversed: true,
			min: 0,
			labels: {
				formatter: function() {
					return ''+ (this.value-100) * -1;
				}
            },
			title: {
				text: 'Omzet in projecten'
			}

		},
		legend: {
			layout: 'vertical',
			backgroundColor: false,
			align: 'right',
			verticalAlign: 'top',
			x:120,
			y: -15,
			floating: true,
			shadow: false,
			borderWidth:false,
			labelFormatter: function() {
				return this.name;
			}
		},
		tooltip: {
			animation: true,
			formatter: function() {
				return '<b>'+this.series.name+' = ' +this.y + ' mln.</b><br>' + Math.floor(this.point.percentage) + '%'
			}
		},
		plotOptions: {
            column: {
                stacking: 'percent',
				animation: false,
				pointPadding: 1,
				borderWidth: 0
			}
		},
		series: [{
				name: 'Lezersmarkt',
				data: [831,455,259,117,490,341]
			}, {
				name: 'Advertentiemarkt',
				//data: [336,181,99,56,199,137]
				data: [336,181,99,56,199,137]
			}, {
				name: 'Overige',
				//data: [73,53,15,5,55,18]
				data: [51,31,15,5,33,18]
			}]
	});
	//Reveal.layout();
}