////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function graph_i30_builder() {
	var groupAge = [];
	charti30 = Highcharts.setOptions(Highcharts.themeBarsi11);
	charti30 = new Highcharts.Chart({
		chart: {
			renderTo: 'i30container',
			type: 'column'
		},
		credits: {
            text: 'bron: Ledenbenchmark NDP Nieuwsmedia',
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
			reversed: false,
			min: 0,
			labels: {
				formatter: function() {
					return ''+ (this.value-100) * -1;
				}
            },
			title: {
				text: 'Omzet in procenten'
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
				return '<b>'+this.series.name+' ' + this.point.percentage.toFixed(1) + '%';
				// Math.ceil(this.point.percentage)
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
				name: 'Digitaal',
				data: [10, 16,5,6,16,4]
			}, {
				name: 'Print',
				//data: [336,181,99,56,199,137]
				data: [90,84,95,94,84,96]
			}]
	});
	//Reveal.layout();
		//charti11.series[0].setData ([884,451,310,123,496,388]);
		//charti11.series[1].setData ([295,148,101,46,165,130]);
		//charti11.series[2].setData ([66,31,28,7,33,33]);
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
            text: 'bron: Ledenbenchmark NDP Nieuwsmedia',
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
				text: 'Omzet in procenten'
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
				return '<b>'+this.series.name+' = ' +this.y + ' mln.</b><br>' + this.point.percentage.toFixed(1) + '%';
				// Math.ceil(this.point.percentage)
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
				data: [884,451,310,123,496,388]
			}, {
				name: 'Advertentiemarkt',
				//data: [336,181,99,56,199,137]
				data: [295,148,101,46,165,130]
			}, {
				name: 'Overige',
				//data: [73,53,15,5,55,18]
				data: [66,31,28,7,33,33]
			}]
	});
	//Reveal.layout();
		//charti11.series[0].setData ([884,451,310,123,496,388]);
		//charti11.series[1].setData ([295,148,101,46,165,130]);
		//charti11.series[2].setData ([66,31,28,7,33,33]);
}

function graph_i20_builder() {
	//console.log ('addEventListener : graph_i21_build');
/*
	var chart = null;
	var ageClick = null;
	var welstandClick = null;
	var districtClick = null;

	var chart;
*/
	var groupAge = [];
	// ignoreHiddenSeries
	charti20 = Highcharts.setOptions(Highcharts.themeBarsi11);
	charti20 = new Highcharts.Chart({
		chart: {
			renderTo: 'i20container',
			type: 'column'
		},
		credits: {
            text: 'bron: GfK',
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
				'Totaal',
				'Man',
				'Vrouw',
				'13-17',
				'18-34',
				'35-49',
				'50-64',
				'65+',
				'Laag',
				'Midden',
				'Hoog'
			]
		},
		yAxis: {
			min: 0,
			max: 100,
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
				return '<b>'+this.series.name+' = ' + this.y + '%</b>'
			}
		},
		plotOptions: {
			column: {
				stacking: 'normal',
				animation: false,
				pointPadding: 1,
				borderWidth: 0
			}
		},
		series: [{
				name: 'Alleen digitaal',
				data: [15,13,17,14,22,17,10,7,16,15,14]
			},
			{
				name: 'Papier en digitaal',
				data: [55,61,48,35,46,60,62,60,38,56,59]
			},
			{
				name: 'Alleen papier',
				data: [20,18,22,25,16,15,22,29,28,20,17]
			}]
	});
	// charti20.series[0].data[3].graphic.hide();
	// charti20.series[1].data[3].graphic.hide();
	// charti20.series[2].data[3].graphic.hide();

	// charti20.series[0].data[4].graphic.hide();
	// charti20.series[1].data[4].graphic.hide();
	// charti20.series[2].data[4].graphic.hide();

	// charti20.series[0].data[5].graphic.hide();
	// charti20.series[1].data[5].graphic.hide();
	// charti20.series[2].data[5].graphic.hide();

	// charti20.series[0].data[6].graphic.hide();
	// charti20.series[1].data[6].graphic.hide();
	// charti20.series[2].data[6].graphic.hide();

	// charti20.series[0].data[7].graphic.hide();
	// charti20.series[1].data[7].graphic.hide();
	// charti20.series[2].data[7].graphic.hide();

	// charti20.series[0].data[8].graphic.hide();
	// charti20.series[1].data[8].graphic.hide();
	// charti20.series[2].data[8].graphic.hide();

	// charti20.series[0].data[9].graphic.hide();
	// charti20.series[1].data[9].graphic.hide();
	// charti20.series[2].data[9].graphic.hide();

	// charti20.series[0].data[10].graphic.hide();
	// charti20.series[1].data[10].graphic.hide();
	// charti20.series[2].data[10].graphic.hide();

}

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
				data: [22,17,35,15,43]
			}, {
				name: '25-34 jr',
				data: [21,15,32,14,40]
			}, {
				name: '35-49 jr',
				data: [27,25,46,13,52]
			}, {
				name: '50-64jr',
				data: [40,34,64,15,69]
			}, {
				name: '65+ jr',
				data: [46,42,75,9,77]
			},

			{
				name: 'W1-hoog',
				data: [43,27,60,12,64]
			}, {
				name: 'W2',
				data: [31,27,50,15,57]
			}, {
				name: 'W3',
				data: [29,26,47,14,53]
			}, {
				name: 'W4',
				data: [28,28,49,13,54]
			}, {
				name: 'W5-laag',
				data: [26,34,54,11,59]
			},

			{
				name: '3 grote steden',
				data: [42,7,46,20,56]
			}, {
				name: 'Rest west',
				data: [42,16,52,15,58]
			}, {
				name: 'Noord',
				data: [25,37,51,10,55]
			}, {
				name: 'Oost',
				data: [28,35,52,11,56]
			}, {
				name: 'Zuid',
				data: [20,45,54,10,58]
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
            text: 'bron: NDP Nieuwsmedia',
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
				return '<b>'+this.series.name+' = ' + formatNumber((this.y*1000)) + '</b><br>' + this.x
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
				name: '2004',
				data: [1874,2188,4062,668,4730]
			}, {
				name: '2005',
				data: [1814,2172,3986,764,4750]
			}, {
				name: '2006',
				data: [2125,1817,3942,865,4806]
			}, {
				name: '2007',
				data: [2038,1791,3829,1890,5719]
			}, {
				name: '2008',
				data: [2002,1742,3744,1763,5508]
			}, {
				name: '2009',
				data: [1938,1694,3633,1226,4858]
			}, {
				name: '2010',
				data: [1897,1655,3553,1099,4651]
			}, {
				name: '2011',
				data: [1856,1599,3454,1084,4538]
			}, {
				name: '2012',
				data: [1792,1524,3316,790,4106]
			}, {
				name: '2013',
				data: [1709,1364,3073,767,3840]
			}]
	});
	charti22.series[0].hide();
	charti22.series[1].hide();
	charti22.series[2].hide();
	charti22.series[3].hide();
	charti22.series[4].hide();


	//Reveal.layout();
}
formatNumber = function(num) {
    var array = num.toString().split('');
    var index = -3;
    while (array.length + index > 0) {
        array.splice(index, 0, '.');
        // Decrement by 4 since we just added another unit to the array.
        index -= 4;
    }
    return array.join('');
};
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
				'2009',
				'2010',
				'2011',
				'2012',
				'2013'
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
				data: [100,93,91,85,76]
			}, {
				name: 'Detaillisten',
				data: [100,98,91,89,85]
			}, {
				name: 'Fabrikanten-Importeurs',
				data: [100,109,100,98,70]
			},{
				name: 'Overige merken-diensten',
				data: [100,93,91,86,76]
			}, {
				name: 'Totaal gerubriceerd',
				data: [100,86,79,68,53]
			}, {
				name: 'Uitgaan',
				data: [100,90,117,107,99]
			}, {
				name: 'Personeel',
				data: [100,68,54,36,25]
			}, {
				name: 'Familieberichten',
				data: [100,91,87,81,78]
			}, {
				name: 'Onroerend goed',
				data: [100,98,83,59,47]
			}, {
				name: 'Toerisme',
				data: [100,108,124,131,130]
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
