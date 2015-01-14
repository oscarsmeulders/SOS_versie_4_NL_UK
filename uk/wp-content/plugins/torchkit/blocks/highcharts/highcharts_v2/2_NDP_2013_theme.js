/**
 * Gray theme for Highcharts JS
 * @author Torstein Hønsi
 */

/*
oranje = 		#d16900
licht blauw = 	#aac4dd
grijs = 		#766c74

50%
oranje = 		#e6b682
licht blauw = 	#d5e2ef
grijs = 		#bbb6b9
*/

Highcharts.themeBars = {
	colors: [	"#d16800", "#da8633", "#e3a466", "#edc399", "#faf0e6",
				"#a5bce4", "#b7c9e9", "#c9d7ef", "#dbe4f4","#edf2fa",
				"#241f64", "#504c83", "#7c79a2", "#a7a5c1", "#d3d2e0"
			],
	chart: {
		backgroundColor:false,
		borderWidth: 0,
		borderRadius: 0,
		plotBackgroundColor: null,
		plotShadow: false,
		plotBorderWidth: 0,
		spacingRight: 130,
	},
	credits: {
        style: {
            color: 'rgba(255,255,255, .6)',
            font: '10px Verdana calibri, Lucida Grande, Lucida Sans Unicode, Arial, Helvetica, sans-serif'
        }
    },
    title: {
		style: {
			color: '#FFF',
			font: '12px Verdana calibri, Lucida Grande, Lucida Sans Unicode, Arial, Helvetica, sans-serif'
		}
	},
	subtitle: {
		style: {
			color: '#DDD',
			font: '10px Verdana, calibri, Lucida Grande, Lucida Sans Unicode, Verdana, Arial, Helvetica, sans-serif'
		}
	},
	xAxis: {
		alternateGridColor: '#71686e',
		gridLineWidth: 0,
		lineColor: '#FFF',
		tickColor: '#FFF',
		labels: {
			y: 20,
			style: {
				color: '#FFF',
				fontWeight: 'bold',
				marginTop:10,
				font: '12px Verdana, Calibri, calibri, Lucida Grande, Lucida Sans Unicode, Verdana, Arial, Helvetica, sans-serif'
			}
		},
		title: {
			style: {
				color: '#FFF',
				font: 'bold 12px Verdana, Calibri, calibri, Lucida Grande, Lucida Sans Unicode, Verdana, Arial, Helvetica, sans-serif'
			}
		}
	},
	yAxis: {
		//alternateGridColor: '#71686e',
		minorTickInterval: null,
		gridLineColor: 'rgba(0, 0, 0, 0.1)',
		lineWidth: 0,
		tickWidth: 0,
		labels: {
			style: {
				color: '#FFF',
				font: '12px Verdana, Calibri, calibri, Lucida Grande, Lucida Sans Unicode, Verdana, Arial, Helvetica, sans-serif'
			}
		},
		title: {
			style: {
				color: '#FFF',
				font: '12px Verdana, calibri, Lucida Grande, Lucida Sans Unicode, Verdana, Arial, Helvetica, sans-serif'
			},
			shadow: false
		}
	},
	legend: {
		itemStyle: {
			color: '#CCC'
		},
		itemHoverStyle: {
			color: '#000'
		},
		itemHiddenStyle: {
			color: '#5d555b'
		}
	},
	labels: {
		style: {
			color: '#CCC'
		}
	},
	tooltip: {
		crosshairs: [false,true],
		borderRadius: 0,
		backgroundColor: 'rgba(0, 0, 0, .8)',
		/*
		backgroundColor: {
		linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
		stops: [
		[0, 'rgba(96, 96, 96, .8)'],
		[1, 'rgba(16, 16, 16, .8)']
		]
		},
		*/
		borderWidth: 0,
		style: {
			color: '#FFF',
			font: 'normal 12px Verdana, calibri, Lucida Grande, Lucida Sans Unicode, Verdana, Arial, Helvetica, sans-serif'
		}
	},


	plotOptions: {
		series: {
			borderWidth: 0,
			shadow: false,
			pointPadding: 0,
			groupPadding: 0.04,
			borderWidth: 0,
		},
		line: {
			dataLabels: {
				color: '#CCC'
			},
			marker: {
				lineColor: '#333'
			}
		},
		spline: {
			marker: {
				lineColor: '#333'
			}
		},
		scatter: {
			marker: {
				lineColor: '#333'
			}
		},
		candlestick: {
			lineColor: 'white'
		}
	},

	toolbar: {
		itemStyle: {
			color: '#CCC'
		}
	},

	navigation: {
		buttonOptions: {
			backgroundColor: {
				linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
				stops: [
					[0.4, '#606060'],
					[0.6, '#333333']
				]
			},
			borderColor: '#000000',
			symbolStroke: '#C0C0C0',
			hoverSymbolStroke: '#FFFFFF'
		}
	},

	exporting: {
		buttons: {
			exportButton: {
				symbolFill: '#55BE3B'
			},
			printButton: {
				symbolFill: '#7797BE'
			}
		}
	},

	// scroll charts
	rangeSelector: {
		buttonTheme: {
			fill: {
				linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
				stops: [
					[0.4, '#888'],
					[0.6, '#555']
				]
			},
			stroke: '#000000',
			style: {
				color: '#CCC',
				fontWeight: 'bold'
			},
			states: {
				hover: {
					fill: {
						linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
						stops: [
							[0.4, '#BBB'],
							[0.6, '#888']
						]
					},
					stroke: '#000000',
					style: {
						color: 'white'
					}
				},
				select: {
					fill: {
						linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
						stops: [
							[0.1, '#000'],
							[0.3, '#333']
						]
					},
					stroke: '#000000',
					style: {
						color: 'yellow'
					}
				}
			}
		},
		inputStyle: {
			backgroundColor: '#333',
			color: 'silver'
		},
		labelStyle: {
			color: 'silver'
		}
	},

	navigator: {
		handles: {
			backgroundColor: '#666',
			borderColor: '#AAA'
		},
		outlineColor: '#CCC',
		maskFill: 'rgba(16, 16, 16, 0.5)',
		series: {
			color: '#7798BF',
			lineColor: '#A6C7ED'
		}
	},

	scrollbar: {
		barBackgroundColor: {
				linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
				stops: [
					[0.4, '#888'],
					[0.6, '#555']
				]
			},
		barBorderColor: '#CCC',
		buttonArrowColor: '#CCC',
		buttonBackgroundColor: {
				linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
				stops: [
					[0.4, '#888'],
					[0.6, '#555']
				]
			},
		buttonBorderColor: '#CCC',
		rifleColor: '#FFF',
		trackBackgroundColor: {
			linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
			stops: [
				[0, '#000'],
				[1, '#333']
			]
		},
		trackBorderColor: '#666'
	},

	// special colors for some of the demo examples
	legendBackgroundColor: 'rgba(48, 48, 48, 0.8)',
	legendBackgroundColorSolid: 'rgb(70, 70, 70)',
	dataLabelsColor: '#444',
	textColor: '#E0E0E0',
	maskColor: 'rgba(255,255,255,0.3)'
};

// Apply the theme
//var highchartsOptions = Highcharts.setOptions(Highcharts.theme);


Highcharts.themeBarsi22 = {
	colors: [
				"#a5bce4", "#b7c9e9", "#c9d7ef", "#dbe4f4","#edf2fa",
				"#d16800", "#da8633", "#e3a466", "#edc399", "#faf0e6",
				"#241f64", "#504c83", "#7c79a2", "#a7a5c1", "#d3d2e0"
			],
	chart: {
		backgroundColor:false,
		borderWidth: 0,
		borderRadius: 0,
		plotBackgroundColor: null,
		plotShadow: false,
		plotBorderWidth: 0,
		spacingRight: 130,
	},
	credits: {
        style: {
            color: 'rgba(255,255,255, .6)',
            font: '10px Verdana calibri, Lucida Grande, Lucida Sans Unicode, Arial, Helvetica, sans-serif'
        }
    },
    title: {
		style: {
			color: '#FFF',
			font: '12px Verdana calibri, Lucida Grande, Lucida Sans Unicode, Arial, Helvetica, sans-serif'
		}
	},
	subtitle: {
		style: {
			color: '#DDD',
			font: '10px Verdana, calibri, Lucida Grande, Lucida Sans Unicode, Verdana, Arial, Helvetica, sans-serif'
		}
	},
	xAxis: {
		alternateGridColor: '#71686e',
		gridLineWidth: 0,
		lineColor: '#FFF',
		tickColor: '#FFF',
		labels: {
			y: 20,
			style: {
				color: '#FFF',
				fontWeight: 'bold',
				marginTop:10,
				font: '12px Verdana, Calibri, calibri, Lucida Grande, Lucida Sans Unicode, Verdana, Arial, Helvetica, sans-serif'
			}
		},
		title: {
			style: {
				color: '#FFF',
				font: 'bold 12px Verdana, Calibri, calibri, Lucida Grande, Lucida Sans Unicode, Verdana, Arial, Helvetica, sans-serif'
			}
		}
	},
	yAxis: {
		//alternateGridColor: '#71686e',
		minorTickInterval: null,
		gridLineColor: 'rgba(0, 0, 0, 0.1)',
		lineWidth: 0,
		tickWidth: 0,
		labels: {
			style: {
				color: '#FFF',
				font: '12px Verdana, Calibri, calibri, Lucida Grande, Lucida Sans Unicode, Verdana, Arial, Helvetica, sans-serif'
			}
		},
		title: {
			style: {
				color: '#FFF',
				font: '12px Verdana, calibri, Lucida Grande, Lucida Sans Unicode, Verdana, Arial, Helvetica, sans-serif'
			},
			shadow: false
		}
	},
	legend: {
		itemStyle: {
			color: '#CCC'
		},
		itemHoverStyle: {
			color: '#000'
		},
		itemHiddenStyle: {
			color: '#5d555b'
		}
	},
	labels: {
		style: {
			color: '#CCC'
		}
	},
	tooltip: {
		crosshairs: [false,true],
		borderRadius: 0,
		backgroundColor: 'rgba(0, 0, 0, .8)',
		/*
		backgroundColor: {
		linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
		stops: [
		[0, 'rgba(96, 96, 96, .8)'],
		[1, 'rgba(16, 16, 16, .8)']
		]
		},
		*/
		borderWidth: 0,
		style: {
			color: '#FFF',
			font: 'normal 12px Verdana, calibri, Lucida Grande, Lucida Sans Unicode, Verdana, Arial, Helvetica, sans-serif'
		}
	},


	plotOptions: {
		series: {
			borderWidth: 0,
			shadow: false,
			pointPadding: 0,
			groupPadding: 0.04,
			borderWidth: 0,
		},
		line: {
			dataLabels: {
				color: '#CCC'
			},
			marker: {
				lineColor: '#333'
			}
		},
		spline: {
			marker: {
				lineColor: '#333'
			}
		},
		scatter: {
			marker: {
				lineColor: '#333'
			}
		},
		candlestick: {
			lineColor: 'white'
		}
	},

	toolbar: {
		itemStyle: {
			color: '#CCC'
		}
	},

	navigation: {
		buttonOptions: {
			backgroundColor: {
				linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
				stops: [
					[0.4, '#606060'],
					[0.6, '#333333']
				]
			},
			borderColor: '#000000',
			symbolStroke: '#C0C0C0',
			hoverSymbolStroke: '#FFFFFF'
		}
	},

	exporting: {
		buttons: {
			exportButton: {
				symbolFill: '#55BE3B'
			},
			printButton: {
				symbolFill: '#7797BE'
			}
		}
	},

	// scroll charts
	rangeSelector: {
		buttonTheme: {
			fill: {
				linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
				stops: [
					[0.4, '#888'],
					[0.6, '#555']
				]
			},
			stroke: '#000000',
			style: {
				color: '#CCC',
				fontWeight: 'bold'
			},
			states: {
				hover: {
					fill: {
						linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
						stops: [
							[0.4, '#BBB'],
							[0.6, '#888']
						]
					},
					stroke: '#000000',
					style: {
						color: 'white'
					}
				},
				select: {
					fill: {
						linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
						stops: [
							[0.1, '#000'],
							[0.3, '#333']
						]
					},
					stroke: '#000000',
					style: {
						color: 'yellow'
					}
				}
			}
		},
		inputStyle: {
			backgroundColor: '#333',
			color: 'silver'
		},
		labelStyle: {
			color: 'silver'
		}
	},

	navigator: {
		handles: {
			backgroundColor: '#666',
			borderColor: '#AAA'
		},
		outlineColor: '#CCC',
		maskFill: 'rgba(16, 16, 16, 0.5)',
		series: {
			color: '#7798BF',
			lineColor: '#A6C7ED'
		}
	},

	scrollbar: {
		barBackgroundColor: {
				linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
				stops: [
					[0.4, '#888'],
					[0.6, '#555']
				]
			},
		barBorderColor: '#CCC',
		buttonArrowColor: '#CCC',
		buttonBackgroundColor: {
				linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
				stops: [
					[0.4, '#888'],
					[0.6, '#555']
				]
			},
		buttonBorderColor: '#CCC',
		rifleColor: '#FFF',
		trackBackgroundColor: {
			linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
			stops: [
				[0, '#000'],
				[1, '#333']
			]
		},
		trackBorderColor: '#666'
	},

	// special colors for some of the demo examples
	legendBackgroundColor: 'rgba(48, 48, 48, 0.8)',
	legendBackgroundColorSolid: 'rgb(70, 70, 70)',
	dataLabelsColor: '#444',
	textColor: '#E0E0E0',
	maskColor: 'rgba(255,255,255,0.3)'
};




Highcharts.themeBarsi11 = {
	colors: [
				"#d16800",
				"#a5bce4",
				"#241f64"
			],
	chart: {
		backgroundColor:false,
		borderWidth: 0,
		borderRadius: 0,
		plotBackgroundColor: null,
		plotShadow: false,
		plotBorderWidth: 0,
		spacingRight: 130,
	},
	credits: {
        style: {
            color: 'rgba(255,255,255, .6)',
            font: '10px Verdana calibri, Lucida Grande, Lucida Sans Unicode, Arial, Helvetica, sans-serif'
        }
    },
    title: {
		style: {
			color: '#FFF',
			font: '12px Verdana calibri, Lucida Grande, Lucida Sans Unicode, Arial, Helvetica, sans-serif'
		}
	},
	subtitle: {
		style: {
			color: '#DDD',
			font: '10px Verdana, calibri, Lucida Grande, Lucida Sans Unicode, Verdana, Arial, Helvetica, sans-serif'
		}
	},
	xAxis: {
		alternateGridColor: '#71686e',
		gridLineWidth: 0,
		lineColor: '#FFF',
		tickColor: '#FFF',
		labels: {
			y: 20,
			style: {
				color: '#FFF',
				fontWeight: 'bold',
				marginTop:10,
				font: '12px Verdana, Calibri, calibri, Lucida Grande, Lucida Sans Unicode, Verdana, Arial, Helvetica, sans-serif'
			}
		},
		title: {
			style: {
				color: '#FFF',
				font: 'bold 12px Verdana, Calibri, calibri, Lucida Grande, Lucida Sans Unicode, Verdana, Arial, Helvetica, sans-serif'
			}
		}
	},
	yAxis: {
		//alternateGridColor: '#71686e',
		minorTickInterval: null,
		gridLineColor: 'rgba(0, 0, 0, 0.1)',
		lineWidth: 0,
		tickWidth: 0,
		labels: {
			style: {
				color: '#FFF',
				font: '12px Verdana, Calibri, calibri, Lucida Grande, Lucida Sans Unicode, Verdana, Arial, Helvetica, sans-serif'
			}
		},
		title: {
			style: {
				color: '#FFF',
				font: '12px Verdana, calibri, Lucida Grande, Lucida Sans Unicode, Verdana, Arial, Helvetica, sans-serif'
			},
			shadow: false
		}
	},
	legend: {
		itemStyle: {
			color: '#CCC'
		},
		itemHoverStyle: {
			color: '#000'
		},
		itemHiddenStyle: {
			color: '#5d555b'
		}
	},
	labels: {
		style: {
			color: '#CCC'
		}
	},
	tooltip: {
		crosshairs: [false,true],
		borderRadius: 0,
		backgroundColor: 'rgba(0, 0, 0, .8)',
		/*
		backgroundColor: {
		linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
		stops: [
		[0, 'rgba(96, 96, 96, .8)'],
		[1, 'rgba(16, 16, 16, .8)']
		]
		},
		*/
		borderWidth: 0,
		style: {
			color: '#FFF',
			font: 'normal 12px Verdana, calibri, Lucida Grande, Lucida Sans Unicode, Verdana, Arial, Helvetica, sans-serif'
		}
	},


	plotOptions: {
		series: {
			borderWidth: 0,
			shadow: false,
			pointPadding: 0,
			groupPadding: 0.2,
			borderWidth: 0,
		},
		line: {
			dataLabels: {
				color: '#CCC'
			},
			marker: {
				lineColor: '#333'
			}
		},
		spline: {
			marker: {
				lineColor: '#333'
			}
		},
		scatter: {
			marker: {
				lineColor: '#333'
			}
		},
		candlestick: {
			lineColor: 'white'
		}
	},

	toolbar: {
		itemStyle: {
			color: '#CCC'
		}
	},

	navigation: {
		buttonOptions: {
			backgroundColor: {
				linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
				stops: [
					[0.4, '#606060'],
					[0.6, '#333333']
				]
			},
			borderColor: '#000000',
			symbolStroke: '#C0C0C0',
			hoverSymbolStroke: '#FFFFFF'
		}
	},

	exporting: {
		buttons: {
			exportButton: {
				symbolFill: '#55BE3B'
			},
			printButton: {
				symbolFill: '#7797BE'
			}
		}
	},

	// scroll charts
	rangeSelector: {
		buttonTheme: {
			fill: {
				linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
				stops: [
					[0.4, '#888'],
					[0.6, '#555']
				]
			},
			stroke: '#000000',
			style: {
				color: '#CCC',
				fontWeight: 'bold'
			},
			states: {
				hover: {
					fill: {
						linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
						stops: [
							[0.4, '#BBB'],
							[0.6, '#888']
						]
					},
					stroke: '#000000',
					style: {
						color: 'white'
					}
				},
				select: {
					fill: {
						linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
						stops: [
							[0.1, '#000'],
							[0.3, '#333']
						]
					},
					stroke: '#000000',
					style: {
						color: 'yellow'
					}
				}
			}
		},
		inputStyle: {
			backgroundColor: '#333',
			color: 'silver'
		},
		labelStyle: {
			color: 'silver'
		}
	},

	navigator: {
		handles: {
			backgroundColor: '#666',
			borderColor: '#AAA'
		},
		outlineColor: '#CCC',
		maskFill: 'rgba(16, 16, 16, 0.5)',
		series: {
			color: '#7798BF',
			lineColor: '#A6C7ED'
		}
	},

	scrollbar: {
		barBackgroundColor: {
				linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
				stops: [
					[0.4, '#888'],
					[0.6, '#555']
				]
			},
		barBorderColor: '#CCC',
		buttonArrowColor: '#CCC',
		buttonBackgroundColor: {
				linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
				stops: [
					[0.4, '#888'],
					[0.6, '#555']
				]
			},
		buttonBorderColor: '#CCC',
		rifleColor: '#FFF',
		trackBackgroundColor: {
			linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
			stops: [
				[0, '#000'],
				[1, '#333']
			]
		},
		trackBorderColor: '#666'
	},

	// special colors for some of the demo examples
	legendBackgroundColor: 'rgba(48, 48, 48, 0.8)',
	legendBackgroundColorSolid: 'rgb(70, 70, 70)',
	dataLabelsColor: '#444',
	textColor: '#E0E0E0',
	maskColor: 'rgba(255,255,255,0.3)'
};

