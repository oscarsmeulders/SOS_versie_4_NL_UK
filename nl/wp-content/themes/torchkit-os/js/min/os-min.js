jQuery(document).ready(function($){function e(e,o,t){if(e<o[0]||e>o[1])return 0/0;var n=o[1]-o[0],a=t[1]-t[0],l=e-o[0];return l*a/n+t[0]}function o(){ga_TimeoutId=setTimeout(t,1e3)}function t(){clearTimeout(ga_TimeoutId);var e=$(".full.present").attr("data-title"),o=window.location;ga("send","pageview",{page:o,title:e})}function n(e){for(var o,t,n=e.length;n;o=parseInt(Math.random()*n),t=e[--n],e[n]=e[o],e[o]=t);return e}$("body").mousemove(function(o){var t=100,n=20,a=$(window).width()/2,l=$(window).height()/2,s=a-o.pageX,i=l-o.pageY,m=Math.floor(e(s,[-a,a],[0,-t])),r=Math.floor(e(i,[-a,a],[0,-t])),c=Math.floor(e(s,[-a,a],[-n,n])),_=Math.floor(e(i,[-a,a],[n,-n]));$(".home .bg.parallax").css("background-position",m+"px "+r+"px"),$(".home .headings.right h1").css("right",c-25+"px "),$(".home .headings.right h2").css("right",c-25+"px "),$(".home .headings.top h1").css("top",_-25+"px "),$(".home .headings.top h2").css("top",_+30+"px ")}),function(e,o,t,n,a,l,s){e.GoogleAnalyticsObject=a,e[a]=e[a]||function(){(e[a].q=e[a].q||[]).push(arguments)},e[a].l=1*new Date,l=o.createElement(t),s=o.getElementsByTagName(t)[0],l.async=1,l.src=n,s.parentNode.insertBefore(l,s)}(window,document,"script","//www.google-analytics.com/analytics.js","ga"),ga("create","UA-9620542-2","auto"),ga("require","linkid","linkid.js"),o(),Reveal.addEventListener("slidechanged",o),rnddly=function(e){var o=Math.ceil(500*Math.random())+e;return o},rndimg=function(e){return Math.floor(Math.random()*e)},rndCheck2x2=function(e){var o=Math.floor(Math.random()*e);return 0>=o?!0:!1},$home_2x2_imageUrl=new Array("/nl/wp-content/uploads/home_bloks/2x2_a","/nl/wp-content/uploads/home_bloks/2x2_b","/nl/wp-content/uploads/home_bloks/2x2_c","/nl/wp-content/uploads/home_bloks/2x2_d","/nl/wp-content/uploads/home_bloks/2x2_e","/nl/wp-content/uploads/home_bloks/2x2_f","/nl/wp-content/uploads/home_bloks/2x2_g","/nl/wp-content/uploads/home_bloks/2x2_h","/nl/wp-content/uploads/home_bloks/2x2_i","/nl/wp-content/uploads/home_bloks/2x2_j","/nl/wp-content/uploads/home_bloks/2x2_k"),$home_imageUrl=new Array("/nl/wp-content/uploads/home_1.jpg","/nl/wp-content/uploads/home_2.jpg","/nl/wp-content/uploads/home_3.jpg","/nl/wp-content/uploads/home_4.jpg","/nl/wp-content/uploads/home_5.jpg","/nl/wp-content/uploads/home_6.jpg","/nl/wp-content/uploads/home_7.jpg","/nl/wp-content/uploads/home_9.jpg","/nl/wp-content/uploads/home_10.jpg","/nl/wp-content/uploads/home_11.jpg","/nl/wp-content/uploads/home_13.jpg","/nl/wp-content/uploads/home_14.jpg","/nl/wp-content/uploads/home_15.jpg","/nl/wp-content/uploads/home_16.jpg","/nl/wp-content/uploads/home_17.jpg","/nl/wp-content/uploads/home_18.jpg","/nl/wp-content/uploads/home_19.jpg","/nl/wp-content/uploads/home_20.jpg","/nl/wp-content/uploads/home_22.jpg","/nl/wp-content/uploads/home_23.jpg","/nl/wp-content/uploads/home_24.jpg","/nl/wp-content/uploads/home_25.jpg","/nl/wp-content/uploads/home_26.jpg","/nl/wp-content/uploads/home_27.jpg","/nl/wp-content/uploads/home_29.jpg","/nl/wp-content/uploads/home_30.jpg","/nl/wp-content/uploads/home_31.jpg","/nl/wp-content/uploads/home_32.jpg","/nl/wp-content/uploads/home_34.jpg","/nl/wp-content/uploads/home_35.jpg","/nl/wp-content/uploads/home_36.jpg","/nl/wp-content/uploads/home_37.jpg","/nl/wp-content/uploads/home_39.jpg","/nl/wp-content/uploads/home_40.jpg","/nl/wp-content/uploads/home_41.jpg","/nl/wp-content/uploads/home_42.jpg","/nl/wp-content/uploads/home_43.jpg","/nl/wp-content/uploads/home_44.jpg","/nl/wp-content/uploads/home_45.jpg"),sos_home_fill_divs_front=function(){n($home_imageUrl),$(".sos-theme.content-image-txt li").each(function(e){$(this).find("div.front").css("background-image","url("+$home_imageUrl[e]+")")})},sos_home_fill_divs_back=function(){n($home_imageUrl),$(".sos-theme.content-image-txt li").each(function(e){$(this).find("div.back").css("background-image","url("+$home_imageUrl[e]+")")})},sos_home_fill_divs_back_2x2=function(){n($home_imageUrl),n($home_2x2_imageUrl),sos_add_photos_2x2_to_back_or_front("div.back")},sos_home_fill_divs_front_2x2=function(){n($home_imageUrl),n($home_2x2_imageUrl),sos_add_photos_2x2_to_back_or_front("div.front")},sos_add_photos_2x2_to_back_or_front=function(e){var o=$(".sos-theme.content-image-txt li").length,t=Math.floor(3*Math.random());if(0==t){$(".sos-theme.content-image-txt li:eq(0)").find(e).css("background-image","url("+$home_2x2_imageUrl[0]+"/blok_tl.jpg)"),$(".sos-theme.content-image-txt li:eq(1)").find(e).css("background-image","url("+$home_2x2_imageUrl[0]+"/blok_tr.jpg)"),$(".sos-theme.content-image-txt li:eq(2)").find(e).css("background-image","url("+$home_2x2_imageUrl[0]+"/blok_bl.jpg)"),$(".sos-theme.content-image-txt li:eq(3)").find(e).css("background-image","url("+$home_2x2_imageUrl[0]+"/blok_br.jpg)");for(var n=4;o>n;n++)$(".sos-theme.content-image-txt li:eq("+n+")").find(e).css("background-image","url("+$home_imageUrl[n]+")")}else if(1==t){$(".sos-theme.content-image-txt li:eq(4)").find(e).css("background-image","url("+$home_2x2_imageUrl[0]+"/blok_tl.jpg)"),$(".sos-theme.content-image-txt li:eq(5)").find(e).css("background-image","url("+$home_2x2_imageUrl[0]+"/blok_tr.jpg)"),$(".sos-theme.content-image-txt li:eq(8)").find(e).css("background-image","url("+$home_2x2_imageUrl[0]+"/blok_bl.jpg)"),$(".sos-theme.content-image-txt li:eq(9)").find(e).css("background-image","url("+$home_2x2_imageUrl[0]+"/blok_br.jpg)");for(var n=0;4>n;n++)$(".sos-theme.content-image-txt li:eq("+n+")").find(e).css("background-image","url("+$home_imageUrl[n]+")");for(var n=6;8>n;n++)$(".sos-theme.content-image-txt li:eq("+n+")").find(e).css("background-image","url("+$home_imageUrl[n]+")");for(var n=10;o>n;n++)$(".sos-theme.content-image-txt li:eq("+n+")").find(e).css("background-image","url("+$home_imageUrl[n]+")")}else if(2==t){$(".sos-theme.content-image-txt li:eq(6)").find(e).css("background-image","url("+$home_2x2_imageUrl[0]+"/blok_tl.jpg)"),$(".sos-theme.content-image-txt li:eq(7)").find(e).css("background-image","url("+$home_2x2_imageUrl[0]+"/blok_tr.jpg)"),$(".sos-theme.content-image-txt li:eq(10)").find(e).css("background-image","url("+$home_2x2_imageUrl[0]+"/blok_bl.jpg)"),$(".sos-theme.content-image-txt li:eq(11)").find(e).css("background-image","url("+$home_2x2_imageUrl[0]+"/blok_br.jpg)");for(var n=0;6>n;n++)$(".sos-theme.content-image-txt li:eq("+n+")").find(e).css("background-image","url("+$home_imageUrl[n]+")");for(var n=8;10>n;n++)$(".sos-theme.content-image-txt li:eq("+n+")").find(e).css("background-image","url("+$home_imageUrl[n]+")")}},sos_home_rotate=function(){clearInterval($timerStarter),"back"==$dir?(rndCheck2x2(1)?sos_home_fill_divs_back_2x2():sos_home_fill_divs_back(),$(".sos-theme.content-image-txt li").each(function(){$(this).delay(rnddly(2e3)).queue(function(e){$(this).addClass("flipped"),$(this).dequeue()})}),$dir="front",$timer=setTimeout(sos_home_rotate,5e3)):(rndCheck2x2(1)?sos_home_fill_divs_front_2x2():sos_home_fill_divs_front(),$(".sos-theme.content-image-txt li").each(function(){$(this).delay(rnddly(2e3)).queue(function(e){$(this).removeClass("flipped"),$(this).dequeue()})}),$dir="back",$timer=setTimeout(sos_home_rotate,5e3))},sos_home_rotate_stop=function(){clearInterval($timer),clearInterval($timerStarter)},$dir="back",rndCheck2x2(1)?sos_home_fill_divs_front_2x2():sos_home_fill_divs_front(),$timerStarter=setTimeout(sos_home_rotate,2e3),client_load_images=function(){var e=0,o=0;$(".content-clients .grid_3").each(function(){var t='<img src="/nl/wp-content/uploads/'+$(this).attr("data-img")+'">';$(this).css("background-color","white").hover(function(){$(this).css("background-color",$(this).attr("data-color"))},function(){$(this).css("background-color","white")}),$(this).html(t),e++,o=e,o>12&&(o-=12),client_fade_images($(this),o,$(this).attr("data-color"))})},client_fade_images=function(e,o,t){var n=1e3,a=100,l=1e3;(2==o||5==o)&&(n+=a),(3==o||6==o||9==o)&&(n=n+a+a),(4==o||7==o||10==o)&&(n=n+a+a+a),(8==o||11==o)&&(n=n+a+a+a+a),12==o&&(n=n+a+a+a+a+a);var s=setTimeout(function(){e.css("background-color",t).delay(l).queue(function(){$(this).css("background-color","white")})},n)},init_body_loading=function(){timerLoading=setTimeout(function(){$("body").removeClass("loading").addClass("loaded")},1e3)},init_body_loading()});