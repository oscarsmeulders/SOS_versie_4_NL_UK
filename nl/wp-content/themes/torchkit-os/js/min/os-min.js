jQuery(document).ready(function($){function o(){ga_TimeoutId=setTimeout(e,2e3)}function e(){clearTimeout(ga_TimeoutId);var o=$(".full.present").attr("data-title"),e=window.location;ga("send","pageview",{page:e,title:o})}function n(o){for(var e,n,t=o.length;t;e=parseInt(Math.random()*t),n=o[--t],o[t]=o[e],o[e]=n);return o}!function(o,e,n,t,l,a,p){o.GoogleAnalyticsObject=l,o[l]=o[l]||function(){(o[l].q=o[l].q||[]).push(arguments)},o[l].l=1*new Date,a=e.createElement(n),p=e.getElementsByTagName(n)[0],a.async=1,a.src=t,p.parentNode.insertBefore(a,p)}(window,document,"script","//www.google-analytics.com/analytics.js","ga"),ga("create","UA-9620542-2","auto"),ga("require","linkid","linkid.js"),o(),Reveal.addEventListener("slidechanged",o),rnddly=function(o){var e=Math.ceil(500*Math.random())+o;return e},rndimg=function(o){return Math.floor(Math.random()*o)},$home_imageUrl=new Array("/nl/wp-content/uploads/home_1.jpg","/nl/wp-content/uploads/home_2.jpg","/nl/wp-content/uploads/home_3.jpg","/nl/wp-content/uploads/home_4.jpg","/nl/wp-content/uploads/home_5.jpg","/nl/wp-content/uploads/home_6.jpg","/nl/wp-content/uploads/home_7.jpg","/nl/wp-content/uploads/home_8.jpg","/nl/wp-content/uploads/home_9.jpg","/nl/wp-content/uploads/home_10.jpg","/nl/wp-content/uploads/home_11.jpg","/nl/wp-content/uploads/home_12.jpg","/nl/wp-content/uploads/home_13.jpg","/nl/wp-content/uploads/home_14.jpg","/nl/wp-content/uploads/home_15.jpg","/nl/wp-content/uploads/home_16.jpg","/nl/wp-content/uploads/home_17.jpg","/nl/wp-content/uploads/home_18.jpg","/nl/wp-content/uploads/home_19.jpg","/nl/wp-content/uploads/home_20.jpg","/nl/wp-content/uploads/home_21.jpg","/nl/wp-content/uploads/home_22.jpg","/nl/wp-content/uploads/home_23.jpg","/nl/wp-content/uploads/home_24.jpg","/nl/wp-content/uploads/home_25.jpg","/nl/wp-content/uploads/home_26.jpg","/nl/wp-content/uploads/home_27.jpg","/nl/wp-content/uploads/home_28.jpg","/nl/wp-content/uploads/home_29.jpg","/nl/wp-content/uploads/home_30.jpg","/nl/wp-content/uploads/home_31.jpg","/nl/wp-content/uploads/home_32.jpg","/nl/wp-content/uploads/home_33.jpg","/nl/wp-content/uploads/home_34.jpg","/nl/wp-content/uploads/home_35.jpg","/nl/wp-content/uploads/home_36.jpg","/nl/wp-content/uploads/home_37.jpg","/nl/wp-content/uploads/home_38.jpg","/nl/wp-content/uploads/home_39.jpg","/nl/wp-content/uploads/home_40.jpg","/nl/wp-content/uploads/home_41.jpg","/nl/wp-content/uploads/home_42.jpg","/nl/wp-content/uploads/home_43.jpg","/nl/wp-content/uploads/home_44.jpg","/nl/wp-content/uploads/home_45.jpg"),sos_home_fill_divs_front=function(){n($home_imageUrl),$(".sos-theme.content-image-txt li").each(function(o){$(this).find("div.front").css("background-image","url("+$home_imageUrl[o]+")")})},sos_home_fill_divs_back=function(){n($home_imageUrl),$(".sos-theme.content-image-txt li").each(function(o){$(this).find("div.back").css("background-image","url("+$home_imageUrl[o]+")")})},sos_home_rotate=function(){clearInterval($timerStarter),"back"==$dir?(sos_home_fill_divs_back(),$(".sos-theme.content-image-txt li").each(function(){$(this).delay(rnddly(2e3)).queue(function(o){$(this).addClass("flipped"),$(this).dequeue()})}),$dir="front",$timer=setTimeout(sos_home_rotate,5e3)):(sos_home_fill_divs_front(),$(".sos-theme.content-image-txt li").each(function(){$(this).delay(rnddly(2e3)).queue(function(o){$(this).removeClass("flipped"),$(this).dequeue()})}),$dir="back",$timer=setTimeout(sos_home_rotate,5e3))},sos_home_rotate_stop=function(){clearInterval($timer),clearInterval($timerStarter)},$dir="back",sos_home_fill_divs_front(),$timerStarter=setTimeout(sos_home_rotate,2e3),client_load_images=function(){var o=0,e=0;$(".content-clients .grid_3").each(function(){var n='<img src="/nl/wp-content/uploads/'+$(this).attr("data-img")+'">';$(this).css("background-color","white").hover(function(){$(this).css("background-color",$(this).attr("data-color"))},function(){$(this).css("background-color","white")}),$(this).html(n),o++,e=o,e>12&&(e-=12),client_fade_images($(this),e,$(this).attr("data-color"))})},client_fade_images=function(o,e,n){var t=1e3,l=100,a=1e3;(2==e||5==e)&&(t+=l),(3==e||6==e||9==e)&&(t=t+l+l),(4==e||7==e||10==e)&&(t=t+l+l+l),(8==e||11==e)&&(t=t+l+l+l+l),12==e&&(t=t+l+l+l+l+l);var p=setTimeout(function(){o.css("background-color",n).delay(a).queue(function(){$(this).css("background-color","white")})},t)},init_body_loading=function(){timerLoading=setTimeout(function(){$("body").removeClass("loading").addClass("loaded")},1e3)},init_body_loading()});