function i21_setButtons () {
	var $i21_titleA = 'naar leeftijdsklasse';
	var $i21_titleB = 'naar welstand';
	var $i21_titleC = 'naar Nielsen district';
	var $i21_visA = true;
	var $i21_visB = false;
	var $i21_visC = false;
	var $i21_seriesA = [];
	var $i21_seriesB = [];
	var $i21_seriesC = [];
	var $i21_dividerArray = [];
	var $i21_dividerEnding = [];
	var $i21_language = [];
	$i21_language[0] = ' ';
	$i21_language[1] = ' ';
	$i21_titleH1 = $('.i21 #title');


	function i21_titleSet() {
		$i21_txt = '';
		var count = 0;
		var i21_dividerCheckVar = 0;

		if ($i21_visA) {
			count++;
		}
		if ($i21_visB) {
			count++;
		}
		if ($i21_visC) {
			count++;
		}

		if (count == 0) {
			$i21_dividerArray[0] = ' ';
			$i21_dividerArray[1] = '';
			$i21_dividerArray[2] = '';
		} else if (count == 1) {
			$i21_dividerArray[0] = '.';
			$i21_dividerArray[1] = '';
			$i21_dividerArray[2] = '';
		} else if (count == 2) {
			$i21_dividerArray[0] = ' en ';
			$i21_dividerArray[1] = '. ';
			$i21_dividerArray[2] = '';
		} else if (count == 3) {
			$i21_dividerArray[0] = ', ';
			$i21_dividerArray[1] = ' en ';
			$i21_dividerArray[2] = '.';
		}

		if ($i21_visA == true || $i21_visB == true || $i21_visC == true) {
			$i21_txt = $i21_txt+ 'Gemiddeld bereik '
			if ($i21_visA == true) {
				$i21_txt = $i21_txt + $i21_titleA + i21_dividerCheck(i21_dividerCheckVar);
				i21_dividerCheckVar++;
			}
			if ($i21_visB == true) {
				$i21_txt = $i21_txt + $i21_titleB + i21_dividerCheck(i21_dividerCheckVar);
				i21_dividerCheckVar++;
			}
			if ($i21_visC == true) {
				$i21_txt = $i21_txt + $i21_titleC + i21_dividerCheck(i21_dividerCheckVar);
				i21_dividerCheckVar++;
			}
		}
		return $i21_txt;
	}

	function i21_dividerCheck(i) {
		tmp = $i21_dividerArray[i];
		return tmp;
	}

	/* agebutton */
	$i21_age = $('.i21 #age');
	$i21_age.html($i21_language[1] + 'Gemiddeld bereik ' + $i21_titleA);
	$i21_age.click(function() {
		ageClick();
	});
	var ageClick = function () {
		console.log ('click age')
		//$i21_age.toggleClass('hide');
		$('.i21 button').addClass('hide');


		if ($i21_visA) {
			chart.series[0].hide();
			chart.series[1].hide();
			chart.series[2].hide();
			chart.series[3].hide();
			chart.series[4].hide();
			$i21_age.html($i21_language[0] + 'Gemiddeld bereik ' + $i21_titleA);
		} else {
			chart.series[0].show();
			chart.series[1].show();
			chart.series[2].show();
			chart.series[3].show();
			chart.series[4].show();
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
			$i21_age.removeClass('hide');
			$i21_age.html($i21_language[1] + 'Gemiddeld bereik ' + $i21_titleA);
		}
		if ($i21_visA) {
			$i21_visA = false;
		} else {
			$i21_visA = true;
		}
		//$i21_titleH1.html(i21_titleSet());
	}
	/* end agebutton */

	/* welstandbutton */
	$i21_welstand = $('.i21 #welstand');
	$i21_welstand.html($i21_language[0] + 'Gemiddeld bereik ' + $i21_titleB);
	$i21_welstand.click(function() {
		welstandClick();
	});
	var welstandClick = function () {
		console.log ('click welstand')
		//$i21_welstand.toggleClass('hide');
		$('.i21 button').addClass('hide');
		if ($i21_visB) {
			chart.series[5].hide();
			chart.series[6].hide();
			chart.series[7].hide();
			chart.series[8].hide();
			chart.series[9].hide();
			$i21_welstand.html($i21_language[0] + 'Gemiddeld bereik ' + $i21_titleB);
		} else {
			chart.series[0].hide();
			chart.series[1].hide();
			chart.series[2].hide();
			chart.series[3].hide();
			chart.series[4].hide();
			chart.series[5].show();
			chart.series[6].show();
			chart.series[7].show();
			chart.series[8].show();
			chart.series[9].show();
			chart.series[10].hide();
			chart.series[11].hide();
			chart.series[12].hide();
			chart.series[13].hide();
			chart.series[14].hide();
			$i21_welstand.removeClass('hide');
			$i21_welstand.html($i21_language[1] + 'Gemiddeld bereik ' + $i21_titleB);
		}
		if ($i21_visB) {
			$i21_visB = false;
		} else {
			$i21_visB = true;
		}
		//$i21_titleH1.html(i21_titleSet());
	}
	/* end welstandbutton */

	/* districtbutton */
	$i21_district = $('.i21 #district');
	$i21_district.html($i21_language[0] + 'Gemiddeld bereik ' + $i21_titleC);
	$i21_district.click(function() {
		districtClick();
	});
	var districtClick = function () {
		console.log ('click district')
		//$i21_district.toggleClass('hide');
		$('.i21 button').addClass('hide');
		if ($i21_visC) {
			chart.series[10].hide();
			chart.series[11].hide();
			chart.series[12].hide();
			chart.series[13].hide();
			chart.series[14].hide();
			$i21_district.html($i21_language[0] + 'Gemiddeld bereik ' + $i21_titleC);
		} else {
			chart.series[0].hide();
			chart.series[1].hide();
			chart.series[2].hide();
			chart.series[3].hide();
			chart.series[4].hide();
			chart.series[5].hide();
			chart.series[6].hide();
			chart.series[7].hide();
			chart.series[8].hide();
			chart.series[9].hide();
			chart.series[10].show();
			chart.series[11].show();
			chart.series[12].show();
			chart.series[13].show();
			chart.series[14].show();
			$i21_district.removeClass('hide');
			$i21_district.html($i21_language[1] + 'Gemiddeld bereik ' + $i21_titleC);
		}
		if ($i21_visC) {
			$i21_visC = false;
		} else {
			$i21_visC = true;
		}
		//$i21_titleH1.html(i21_titleSet());
	}
	/* end welstandbutton */
}

/////////////

function i22_setButtons () {
	var $i22_titleA = 'naar leeftijdsklasse';
	var $i22_titleB = 'naar welstand';
	var $i22_titleC = 'naar Nielsen district';
	var $i22_visA = false;
	var $i22_visB = true;
	var $i22_visC = false;
	var $i22_seriesA = [];
	var $i22_seriesB = [];
	var $i22_seriesC = [];
	var $i22_dividerArray = [];
	var $i22_dividerEnding = [];
	var $i22_language = [];
	$i22_language[0] = '';
	$i22_language[1] = '';
	$i22_titleH1 = $('.i22 #title');


	function i22_titleSet() {
		$i22_txt = '';
		var count = 0;
		var i22_dividerCheckVar = 0;

		if ($i22_visA) {
			count++;
		}
		if ($i22_visB) {
			count++;
		}
		if ($i22_visC) {
			count++;
		}

		if (count == 0) {
			$i22_dividerArray[0] = ' ';
			$i22_dividerArray[1] = '';
			$i22_dividerArray[2] = '';
		} else if (count == 1) {
			$i22_dividerArray[0] = '.';
			$i22_dividerArray[1] = '';
			$i22_dividerArray[2] = '';
		} else if (count == 2) {
			$i22_dividerArray[0] = ' en ';
			$i22_dividerArray[1] = '. ';
			$i22_dividerArray[2] = '';
		} else if (count == 3) {
			$i22_dividerArray[0] = ', ';
			$i22_dividerArray[1] = ' en ';
			$i22_dividerArray[2] = '.';
		}

		if ($i22_visA == true || $i22_visB == true || $i22_visC == true) {
			$i22_txt = $i22_txt+ 'Gemiddeld bereik '
			if ($i22_visA == true) {
				$i22_txt = $i22_txt + $i22_titleA + i22_dividerCheck(i22_dividerCheckVar);
				i22_dividerCheckVar++;
			}
			if ($i22_visB == true) {
				$i22_txt = $i22_txt + $i22_titleB + i22_dividerCheck(i22_dividerCheckVar);
				i22_dividerCheckVar++;
			}
			if ($i22_visC == true) {
				$i22_txt = $i22_txt + $i22_titleC + i22_dividerCheck(i22_dividerCheckVar);
				i22_dividerCheckVar++;
			}
		}
		return $i22_txt;
	}

	function i22_dividerCheck(i) {
		tmp = $i22_dividerArray[i];
		return tmp;
	}

	/* 5years */
	$i22_years5 = $('.i22 #years5');
	$i22_years5.html($i22_language[0] + 'jaar 2003 t/m 2007');
	$i22_years5.click(function() {
		years5Click();
	});
	var years5Click = function () {
		console.log ('click age')
		$i22_years5.toggleClass('hide');

		if ($i22_visA) {
			charti22.series[0].hide();
			charti22.series[1].hide();
			charti22.series[2].hide();
			charti22.series[3].hide();
			charti22.series[4].hide();
			$i22_years5.html($i22_language[0] + 'jaar 2003 t/m 2007');
		} else {
			charti22.series[0].show();
			charti22.series[1].show();
			charti22.series[2].show();
			charti22.series[3].show();
			charti22.series[4].show();
			$i22_years5.html($i22_language[1] + 'jaar 2003 t/m 2007');
		}
		if ($i22_visA) {
			$i22_visA = false;
		} else {
			$i22_visA = true;
		}
		$i22_titleH1.html('Totaal verspreide oplage van landelijke, regionale en gratis dagbladen *');
	}
	/* end 5years */

	/* 10years */
	$i22_years10 = $('.i22 #years10');
	$i22_years10.html($i22_language[1] + 'jaar 2008 t/m 2012');
	$i22_years10.click(function() {
		years10Click();
	});
	var years10Click = function () {
		console.log ('click years10')
		$i22_years10.toggleClass('hide');

		if ($i22_visB) {
			charti22.series[5].hide();
			charti22.series[6].hide();
			charti22.series[7].hide();
			charti22.series[8].hide();
			charti22.series[9].hide();
			$i22_years10.html($i22_language[0] + 'jaar 2008 t/m 2012');
		} else {
			charti22.series[5].show();
			charti22.series[6].show();
			charti22.series[7].show();
			charti22.series[8].show();
			charti22.series[9].show();
			$i22_years10.html($i22_language[1] + 'jaar 2008 t/m 2012');
		}
		if ($i22_visB) {
			$i22_visB = false;
		} else {
			$i22_visB = true;
		}
		$i22_titleH1.html('Totaal verspreide oplage van landelijke, regionale en gratis dagbladen *');
	}
	/* end 10years */

}

function i31_setButtons () {
	$i31_totaal = $('.i31 #totaal');
	$i31_totaal.click(function() {
		changeSeriesTotaal();
		$('.i31 button').addClass('hide');
		$(this).removeClass('hide');
	});
	$i31_landelijk = $('.i31 #landelijk');
	$i31_landelijk.click(function() {
		changeSeriesLandelijk();
		$('.i31 button').addClass('hide');
		$(this).removeClass('hide');
	});
	$i31_regionaal = $('.i31 #regionaal');
	$i31_regionaal.click(function() {
		changeSeriesRegionaal();
		$('.i31 button').addClass('hide');
		$(this).removeClass('hide');
	});
	$i31_gratis = $('.i31 #gratis');
	$i31_gratis.click(function() {
		changeSeriesGratis();
		$('.i31 button').addClass('hide');
		$(this).removeClass('hide');
	});


	changeSeriesTotaal = function () {
		//console.log ('change series : Totaal dagbladen');
		charti31.series[0].setData ([100,89,83.2,81.1,75.7]);
		charti31.series[1].setData ([100,103.9,101.4,94.7,93.3]);
		charti31.series[2].setData ([100,102.5,111.9,103.4,98.0]);
		charti31.series[3].setData ([100,87.5,81.5,79.3,75.7]);
		charti31.series[4].setData ([100,76.0,65.3,60.2,52.0]);
		charti31.series[5].setData ([100,102.7,92.7,121.1,110.2]);
		charti31.series[6].setData ([100,55.6,37.8,30.0,20.0]);
		charti31.series[7].setData ([100,100.1,91.6,86.6,80.9]);
		charti31.series[8].setData ([100,92.2,90.8,76.7,54.8]);
		charti31.series[9].setData ([100,101.9,110.1,125.5,133.2]);
	}

	changeSeriesLandelijk = function () {
		//console.log ('change series : Landelijke dagbladen');
		charti31.series[0].setData([100,81.6,67.2,60.1,58.2]);
		charti31.series[1].setData([100,94.1,81.1,86.5,90.7]);
		charti31.series[2].setData([100,91.2,96.2,85.7,88.0]);
		charti31.series[3].setData([100,77.1,60.1,54.2,53.7]);
		charti31.series[4].setData([100,75.3,58.3,44.1,34.8]);
		charti31.series[5].setData([100,98.7,76.2,80.4,79.0]);
		charti31.series[6].setData([100,61.8,37.6,28.3,23.7]);
		charti31.series[7].setData([100,96.1,89.6,82.6,76.4]);
		charti31.series[8].setData([100,104.9,123.7,58.3,48.3]);
		charti31.series[9].setData([100,91.3,91.0,85.9,92.8]);
	}

	changeSeriesRegionaal = function () {
		//console.log ('change series : Regionale dagbladen');
		charti31.series[0].setData([100,92.5,89.8,89.5,83.3]);
		charti31.series[1].setData([100,105.8,104.6,97.0,94.5]);
		charti31.series[2].setData([100,108.5,120.5,111.3,105.5]);
		charti31.series[3].setData([100,93.1,92.8,92.0,87.9]);
		charti31.series[4].setData([100,76.3,68.9,68.5,61.1]);
		charti31.series[5].setData([100,107.4,104.8,149.7,134.6]);
		charti31.series[6].setData([100,54.5,40.2,32.6,19.4]);
		charti31.series[7].setData([100,101.1,92.1,87.6,82.1]);
		charti31.series[8].setData([100,89.4,84.8,78.0,54.8]);
		charti31.series[9].setData([100,107.5,118.8,140.8,152.9]);
	}

	changeSeriesGratis = function () {
		//console.log ('change series : Gratis dagbladen');
		charti31.series[0].setData ([100,77.8,70.2,68.0,56.0]);
		charti31.series[1].setData ([100,97.2,100.7,74.1,78.7]);
		charti31.series[2].setData ([100,87.3,88.2,89.6,68.3]);
		charti31.series[3].setData ([100,83.6,75.5,76.8,64.8]);
		charti31.series[4].setData ([100,89.5,110.0,145.5,108.6]);
		charti31.series[5].setData ([100,86.1,71.8,76.3,60.4]);
		charti31.series[6].setData ([100,39.4,15.9,12.0,9.8]);
		charti31.series[7].setData ([100,null, null, null, null]);
		charti31.series[8].setData ([100,319.3,394.7,375.4,249.1]);
		charti31.series[9].setData ([100,76.1,80.0,98.7,53.3]);
	}

}


function s31_setButtons () {
	$s31_totaal = $('.s31 #s31totaal');
	$s31_totaal.click(function() {
		s31changeSeriesTotaal();
		$('.s31 button').addClass('hide');
		$(this).removeClass('hide');
	});
	$s31_landelijk = $('.s31 #s31landelijk');
	$s31_landelijk.click(function() {
		s31changeSeriesLandelijk();
		$('.s31 button').addClass('hide');
		$(this).removeClass('hide');
	});
	$s31_regionaal = $('.s31 #s31regionaal');
	$s31_regionaal.click(function() {
		s31changeSeriesRegionaal();
		$('.s31 button').addClass('hide');
		$(this).removeClass('hide');
	});
	$s31_gratis = $('.s31 #s31gratis');
	$s31_gratis.click(function() {
		s31changeSeriesGratis();
		$('.s31 button').addClass('hide');
		$(this).removeClass('hide');
	});


	$s31_totaal2011 = $('.s31 #s31totaal2011');
	$s31_totaal2011.click(function() {
		s31changeSeriesTotaal2011();
		$('.s31 button').addClass('hide');
		$(this).removeClass('hide');
	});
	$s31_landelijk2011 = $('.s31 #s31landelijk2011');
	$s31_landelijk2011.click(function() {
		s31changeSeriesLandelijk2011();
		$('.s31 button').addClass('hide');
		$(this).removeClass('hide');
	});
	$s31_regionaal2011 = $('.s31 #s31regionaal2011');
	$s31_regionaal2011.click(function() {
		s31changeSeriesRegionaal2011();
		$('.s31 button').addClass('hide');
		$(this).removeClass('hide');
	});
	$s31_gratis2011 = $('.s31 #s31gratis2011');
	$s31_gratis2011.click(function() {
		s31changeSeriesGratis2011();
		$('.s31 button').addClass('hide');
		$(this).removeClass('hide');
	});




	s31changeSeriesTotaal = function () {
		//console.log ('change series : Totaal dagbladen');
		charts31.series[0].setData ([
			['Detaillisten',26],
			['Fabrikanten-Importeurs',9],
			['Overige merken en diensten',21],
			['Totaal gerubriceerd',6],
			['Uitgaan',10],
			['Personeel',4],
			['Familieberichten',8],
			['Onroerend goed',3],
			['Toerisme',12]
		])
	}

	s31changeSeriesLandelijk = function () {
		//console.log ('change series : Landelijke dagbladen');
		charts31.series[0].setData ([
			['Detaillisten',17],
			['Fabrikanten-Importeurs',10],
			['Overige merken en diensten',24],
			['Totaal gerubriceerd',8],
			['Uitgaan',13],
			['Personeel',8],
			['Familieberichten',8],
			['Onroerend goed',2],
			['Toerisme',10]
		])

	}

	s31changeSeriesRegionaal = function () {
		//console.log ('change series : Regionale dagbladen');
		charts31.series[0].setData ([
		['Detaillisten',28],
		['Fabrikanten-Importeurs',9],
		['Overige merken en diensten',19],
		['Totaal gerubriceerd',6],
		['Uitgaan',10],
		['Personeel',3],
		['Familieberichten',8],
		['Onroerend goed',4],
		['Toerisme',13]
		])
	}

	s31changeSeriesGratis = function () {
		//console.log ('change series : Gratis dagbladen');
		charts31.series[0].setData ([
		['Detaillisten',22],
		['Fabrikanten-Importeurs',15],
		['Overige merken en diensten',36],
		['Totaal gerubriceerd',2],
		['Uitgaan',13],
		['Personeel',4],
		['Familieberichten',0],
		['Onroerend goed',1],
		['Toerisme',7]
		])
	}


	s31changeSeriesTotaal2011 = function () {
		//console.log ('change series : Totaal dagbladen');
		charts31.series[0].setData ([
			['Detaillisten',24],
			['Fabrikanten-Importeurs',9],
			['Overige merken en diensten',20],
			['Totaal gerubriceerd',7],
			['Uitgaan',11],
			['Personeel',6],
			['Familieberichten',8],
			['Onroerend goed',4],
			['Toerisme',10]
		])
	}

	s31changeSeriesLandelijk2011 = function () {
		//console.log ('change series : Landelijke dagbladen');
		charts31.series[0].setData ([
			['Detaillisten',16],
			['Fabrikanten-Importeurs',10],
			['Overige merken en diensten',23],
			['Totaal gerubriceerd',10],
			['Uitgaan',12],
			['Personeel',9],
			['Familieberichten',9],
			['Onroerend goed',2],
			['Toerisme',9]
		])

	}

	s31changeSeriesRegionaal2011 = function () {
		//console.log ('change series : Regionale dagbladen');
		charts31.series[0].setData ([
		['Detaillisten',27],
		['Fabrikanten-Importeurs',9],
		['Overige merken en diensten',19],
		['Totaal gerubriceerd',6],
		['Uitgaan',10],
		['Personeel',5],
		['Familieberichten',8],
		['Onroerend goed',5],
		['Toerisme',11]
		])
	}

	s31changeSeriesGratis2011 = function () {
		//console.log ('change series : Gratis dagbladen');
		charts31.series[0].setData ([
		['Detaillisten',17],
		['Fabrikanten-Importeurs',16],
		['Overige merken en diensten',36],
		['Totaal gerubriceerd',2],
		['Uitgaan',13],
		['Personeel',4],
		['Familieberichten',0],
		['Onroerend goed',2],
		['Toerisme',10]
		])
	}

}



function i11_setButtons () {
	$i11_2012 = $('.i11 #bt2012');
	$i11_2012.click(function() {
		changeSeries_i11_2012();
		$('.i11 button').addClass('hide');
		$(this).removeClass('hide');
	});

	$i11_2011 = $('.i11 #bt2011');
	$i11_2011.click(function() {
		changeSeries_i11_2011();
		$('.i11 button').addClass('hide');
		$(this).removeClass('hide');
	});

	changeSeries_i11_2012 = function () {
		charti11.series[0].setData ([831,455,259,117,490,341]);
		charti11.series[1].setData ([336,181,99,56,199,137]);
		charti11.series[2].setData ([51,31,15,5,33,18]);
	}
	changeSeries_i11_2011 = function () {
		charti11.series[0].setData ([833,458,259,116,492,341]);
		charti11.series[1].setData ([385,201,121,63,220,165]);
		charti11.series[2].setData ([47,31,12,4,33,13]);
	}

}

