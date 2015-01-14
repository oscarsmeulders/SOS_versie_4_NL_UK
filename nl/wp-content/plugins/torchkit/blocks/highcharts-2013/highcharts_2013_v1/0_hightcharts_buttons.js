function i30_setButtons () {
	
	$i30_2013 = $('.i30 #bt2013');
	$i30_2013.click(function() {
		//console.log ('i112013 click');
		changeSeries_i30_2013();
		$('.i30 button').addClass('hide');
		$(this).removeClass('hide');
	});

	$i30_2012 = $('.i30 #bt2012');
	$i30_2012.click(function() {
		//console.log ('i112012 click')
		changeSeries_i30_2012();
		$('.i30 button').addClass('hide');
		$(this).removeClass('hide');
	});

	changeSeries_i30_2013 = function () {
		charti30.series[0].setData ([10, 16,5,6,16,4]);
		charti30.series[1].setData ([90,84,95,94,84,96]);
	}
	changeSeries_i30_2012 = function () {
		charti30.series[0].setData ([9,null,null,null,null,null]);
		charti30.series[1].setData ([91,null,null,null,null,null]);
	}

}

function i11_setButtons () {
	
	$i11_2013 = $('.i11 #bt2013');
	$i11_2013.click(function() {
		//console.log ('i112013 click');
		changeSeries_i11_2013();
		$('.i11 button').addClass('hide');
		$(this).removeClass('hide');
	});

	$i11_2012 = $('.i11 #bt2012');
	$i11_2012.click(function() {
		//console.log ('i112012 click')
		changeSeries_i11_2012();
		$('.i11 button').addClass('hide');
		$(this).removeClass('hide');
	});

	changeSeries_i11_2013 = function () {
		charti11.series[0].setData ([884,451,310,123,496,388]);
		charti11.series[1].setData ([295,148,101,46,165,130]);
		charti11.series[2].setData ([66,31,28,7,33,33]);
	}
	changeSeries_i11_2012 = function () {
		charti11.series[0].setData ([898,455,316,127,500,397]);
		charti11.series[1].setData ([359,178,125,56,196,163]);
		charti11.series[2].setData ([52,30,17,5,32,20]);
	}

}



function i20_setButtons () {
	var $i20_titleA = 'Geslacht';
	var $i20_titleB = 'Leeftijd';
	var $i20_titleC = 'Welstand';
	var $i20_visA = true;
	var $i20_visB = true;
	var $i20_visC = true;
	var $i20_seriesA = [];
	var $i20_seriesB = [];
	var $i20_seriesC = [];

	/* geslachtbutton */
	$i20_geslacht = $('.i20 #geslacht');
	$i20_geslacht.html('Geslacht');
	$i20_geslacht.click(function() {
		geslachtClick();
	});
	var geslachtClick = function () {
		console.log ('click geslacht')
		$i20_geslacht.toggleClass('hide');
		//$('.i20 button').addClass('hide');


		if ($i20_visA) {
			charti20.series[0].data[1].graphic.hide();
			charti20.series[1].data[1].graphic.hide();
			charti20.series[2].data[1].graphic.hide();

			charti20.series[0].data[2].graphic.hide();
			charti20.series[1].data[2].graphic.hide();
			charti20.series[2].data[2].graphic.hide();
		} else {
			charti20.series[0].data[1].graphic.show();
			charti20.series[1].data[1].graphic.show();
			charti20.series[2].data[1].graphic.show();

			charti20.series[0].data[2].graphic.show();
			charti20.series[1].data[2].graphic.show();
			charti20.series[2].data[2].graphic.show();
			$i20_geslacht.removeClass('hide');

		}
		if ($i20_visA) {
			$i20_visA = false;
		} else {
			$i20_visA = true;
		}
	}
	/* end geslachtbutton */
	/* welstandbutton */
	$i20_welstand = $('.i20 #welstand');
	$i20_welstand.html('Welstand');
	$i20_welstand.click(function() {
		welstandClick();
	});
	var welstandClick = function () {
		console.log ('click welstand')
		$i20_welstand.toggleClass('hide');
		//$('.i20 button').addClass('hide');


		if ($i20_visC) {
			charti20.series[0].data[8].graphic.hide();
			charti20.series[1].data[8].graphic.hide();
			charti20.series[2].data[8].graphic.hide();

			charti20.series[0].data[9].graphic.hide();
			charti20.series[1].data[9].graphic.hide();
			charti20.series[2].data[9].graphic.hide();

			charti20.series[0].data[10].graphic.hide();
			charti20.series[1].data[10].graphic.hide();
			charti20.series[2].data[10].graphic.hide();


		} else {

			charti20.series[0].data[8].graphic.show();
			charti20.series[1].data[8].graphic.show();
			charti20.series[2].data[8].graphic.show();

			charti20.series[0].data[9].graphic.show();
			charti20.series[1].data[9].graphic.show();
			charti20.series[2].data[9].graphic.show();

			charti20.series[0].data[10].graphic.show();
			charti20.series[1].data[10].graphic.show();
			charti20.series[2].data[10].graphic.show();

			$i20_leeftijd.removeClass('hide');

		}
		if ($i20_visC) {
			$i20_visC = false;
		} else {
			$i20_visC = true;
		}
	}
	/* end geslachtbutton */

	/* leeftijdbutton */
	$i20_leeftijd = $('.i20 #leeftijd');
	$i20_leeftijd.html('Leeftijd');
	$i20_leeftijd.click(function() {
		leeftijdClick();
	});
	var leeftijdClick = function () {
		console.log ('click leeftijd')
		$i20_leeftijd.toggleClass('hide');
		//$('.i20 button').addClass('hide');


		if ($i20_visB) {
			charti20.series[0].data[3].graphic.hide();
			charti20.series[1].data[3].graphic.hide();
			charti20.series[2].data[3].graphic.hide();

			charti20.series[0].data[4].graphic.hide();
			charti20.series[1].data[4].graphic.hide();
			charti20.series[2].data[4].graphic.hide();

			charti20.series[0].data[5].graphic.hide();
			charti20.series[1].data[5].graphic.hide();
			charti20.series[2].data[5].graphic.hide();

			charti20.series[0].data[6].graphic.hide();
			charti20.series[1].data[6].graphic.hide();
			charti20.series[2].data[6].graphic.hide();

			charti20.series[0].data[7].graphic.hide();
			charti20.series[1].data[7].graphic.hide();
			charti20.series[2].data[7].graphic.hide();

		} else {

			charti20.series[0].data[3].graphic.show();
			charti20.series[1].data[3].graphic.show();
			charti20.series[2].data[3].graphic.show();

			charti20.series[0].data[4].graphic.show();
			charti20.series[1].data[4].graphic.show();
			charti20.series[2].data[4].graphic.show();

			charti20.series[0].data[5].graphic.show();
			charti20.series[1].data[5].graphic.show();
			charti20.series[2].data[5].graphic.show();

			charti20.series[0].data[6].graphic.show();
			charti20.series[1].data[6].graphic.show();
			charti20.series[2].data[6].graphic.show();

			charti20.series[0].data[7].graphic.show();
			charti20.series[1].data[7].graphic.show();
			charti20.series[2].data[7].graphic.show();
			$i20_leeftijd.removeClass('hide');

		}
		if ($i20_visB) {
			$i20_visB = false;
		} else {
			$i20_visB = true;
		}
	}
	/* end leeftijdbutton */
}





/////////////////
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
	$i22_years5.html($i22_language[0] + 'jaar 2004 t/m 2008');
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
			$i22_years5.html($i22_language[0] + 'jaar 2004 t/m 2008');
		} else {
			charti22.series[0].show();
			charti22.series[1].show();
			charti22.series[2].show();
			charti22.series[3].show();
			charti22.series[4].show();
			$i22_years5.html($i22_language[1] + 'jaar 2004 t/m 2008');
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
	$i22_years10.html($i22_language[1] + 'jaar 2009 t/m 2013');
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
			$i22_years10.html($i22_language[0] + 'jaar 2009 t/m 20113');
		} else {
			charti22.series[5].show();
			charti22.series[6].show();
			charti22.series[7].show();
			charti22.series[8].show();
			charti22.series[9].show();
			$i22_years10.html($i22_language[1] + 'jaar 2009 t/m 20113');
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
		charti31.series[0].setData ([100,93,91,85,76]);
		charti31.series[1].setData ([100,98,91,89,85]);
		charti31.series[2].setData ([100,109,100,98,70]);
		charti31.series[3].setData ([100,93,91,86,76]);
		charti31.series[4].setData ([100,86,79,68,53]);
		charti31.series[5].setData ([100,90,117,107,99]);
		charti31.series[6].setData ([100,68,54,36,25]);
		charti31.series[7].setData ([100,91,87,81,78]);
		charti31.series[8].setData ([100,98,83,59,47]);
		charti31.series[9].setData ([100,108,124,131,130]);
	}

	changeSeriesLandelijk = function () {
		//console.log ('change series : Landelijke dagbladen');
		charti31.series[0].setData([100,77,58,46,38]);
		charti31.series[1].setData([100,86,91,96,86]);
		charti31.series[2].setData([100,106,94,98,75]);
		charti31.series[3].setData([100,78,71,70,70]);
		charti31.series[4].setData([100,77,58,46,38]);
		charti31.series[5].setData([100,78,81,79,91]);
		charti31.series[6].setData([100,61,46,39,32]);
		charti31.series[7].setData([100,93,86,79,74]);
		charti31.series[8].setData([100,118,56,46,44]);
		charti31.series[9].setData([100,99,94,102,108]);
	}

	changeSeriesRegionaal = function () {
		//console.log ('change series : Regionale dagbladen');
		charti31.series[0].setData([100,97,97,90,79]);
		charti31.series[1].setData([100,99,92,89,86]);
		charti31.series[2].setData([100,110,101,99,69]);
		charti31.series[3].setData([100,100,99,94,81]);
		charti31.series[4].setData([100,90,90,80,61]);
		charti31.series[5].setData([100,97,138,124,107]);
		charti31.series[6].setData([100,74,60,36,23]);
		charti31.series[7].setData([100,91,87,81,79]);
		charti31.series[8].setData([100,95,87,61,48]);
		charti31.series[9].setData([100,111,132,143,142]);
	}

	changeSeriesGratis = function () {
		//console.log ('change series : Gratis dagbladen');
		charti31.series[0].setData ([100,90,87,72,51]);
		charti31.series[1].setData ([100,101,76,78,57]);
		charti31.series[2].setData ([100,106,106,83,54]);
		charti31.series[3].setData ([100,90,92,77,56]);
		charti31.series[4].setData ([100,123,163,121,57]);
		charti31.series[5].setData ([100,84,89,71,61]);
		charti31.series[6].setData ([100,40,30,25,18]);
		charti31.series[7].setData ([null,null,null,null,null]);
		charti31.series[8].setData ([100,124,118,78,34]);
		charti31.series[9].setData ([100,105,130,70,39]);
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