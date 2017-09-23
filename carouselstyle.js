//<![CDATA[
$(document).ready(function(){
$("nav.nav-extended").fadeIn()
if ( $('html').attr('dir') == 'ltr' ) {
$('.buttonShow').sideNav({
edge: 'left',
closeOnClick: false,
draggable: false
});
} else {
$('.buttonShow').sideNav({
edge: 'right',
closeOnClick: false,
draggable: false
});
}
$('.buttonHide').click(function(e){
$('.buttonShow').sideNav('hide');
e.preventDefault();
});
$('.button-collapse').click(function(e){
$('#co-nav').toggleClass('hide-on-med-and-down');
$(this).toggleClass('active');
e.preventDefault();
});
$('ul.tabs').tabs('select_tab', 'tab1');
$('.follow-button').dropdown();
$('.dropdown-button').dropdown();
$('.parallax').parallax();
$('.modal').modal();
$('.content div.spy').each(function(){
var txt = $(this).find('h3:first-child').text();
var id = $(this).find('h3:first-child').text().replace(/\s/g,'').toLowerCase();
$(this).attr('id', id);
  $('#toc ul').find('li.right').before("<li><a href='#"+id+"'>"+ txt +"</a></li>");
  })
$('.content div.spy').scrollSpy({scrollOffset: 64});
});
if ($('#carousel1').length){
  var options = [
    {selector: '#carousel1', offset: 0, callback: function() {
$('#carousel1').addClass('carouselWrapper autoplay1');
$('#carousel1').before("<div id='loader'><div class='preloader-wrapper small active'><div class='spinner-layer spinner-only'><div class='circle-clipper left'><div class='circle'/></div><div class='gap-patch'><div class='circle'/></div><div class='circle-clipper right'><div class='circle'/></div></div></div></div>");
$('#carousel1').parents('.HTML').wrap('<div id="carouselContainer"></div>');
var label = $('#carousel1').attr('data-label');
$.ajax({
    url: "/feeds/posts/default/-/"+label+"?published&alt=json",
    success: function(json) {
        if (json.feed.entry) {
			var count = $('#carousel1').attr('data-count');
            var posts = "";
            var postsNum = (json.feed.entry.length >= count) ? count : json.feed.entry.length;
            for (var i = 0; i < postsNum; i++) {
                var snippet = json.feed.entry[i].content.$t.replace(/<.*?>/ig, "").split(/\s+/).slice(0, 21 - 1).join(" ") + "...";
                var link = json.feed.entry[i].link[json.feed.entry[i].link.length - 1].href;
				var pid = json.feed.entry[i].id.$t.replace(json.feed.id.$t + '.post-','');
				var comment = json.feed.entry[i].link[1].title;
				var m =[,"January","February","March","April","May","June","July","August","September","October","November","December"],
o=json.feed.entry[i].published.$t,h=o.substring(0,4),u=o.substring(5,7),d=o.substring(8,10),date=m[parseInt(u,10)]+" "+d+", "+h;
                var thumb = "";
                try {
                    thumb = json.feed.entry[i].media$thumbnail.url.replace("s72-c", "w400-h300-p");
                } catch (error) {
                    thumb = "https://4.bp.blogspot.com/-s7zr1775JQ8/V4x3GFrVNFI/AAAAAAAANp0/fJwBXEwt2_wuTptYDOkzRumO_6Vk42XMQCLcB/w400-h300-p/No-Image.png";
                }

				var label =  json.feed.entry[i].category[0].term;
				label = "<a class='listLabel' href='/search/label/"+label+"'>" + label + "</a>";

				var meta = "<span class='listMeta'><i class='icon-clock'></i> "+date+" <i class='icon-user'></i> "+comment+"</span>";

                posts +=
                  "<div class='slick-wrapper'><div class='imgWrapper'><a class='imgOverlay' href='"+link+"'><i class='ion-android-search'></i></a><img data-lazy='" + thumb + "'></img></div><div class='listWrapper'><div class='listOuter'>"+label+"<h5 class='post-title'><a href='"+link+"'>" + json.feed.entry[i].title.$t + "</a></h5>"+meta+"</div></div></div>";
}
            document.getElementById("carousel1").innerHTML = posts;
        }
    },
    	complete: function(){
		setTimeout(function(){
			$('#carousel1').prev().remove();
       		$('#carousel1').addClass('loaded');
		}, 500);
if ( $('html').attr('dir') == 'ltr' ) {
$('.autoplay1').slick({
lazyLoad: 'ondemand',
  slidesToShow: 3,
  speed: 200,
  autoplay: true,
  autoplaySpeed: 5000,
 responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1
      }
    }
  ]
});
} else {
$('.autoplay1').slick({
lazyLoad: 'ondemand',
rtl: true,
  slidesToShow: 3,
  speed: 200,
  autoplay: true,
  autoplaySpeed: 5000,
 responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1
      }
    }
  ]
});
};
		}
});

    } },
  ];
  Materialize.scrollFire(options);
};

//]]>
