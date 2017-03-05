var mapLocation = new google.maps.LatLng(34.0565328,-117.8237182); //change coordinates here
var marker;
var map;

function initialize() {
    var mapOptions = {
        zoom: 12, // Change zoom here
        center: mapLocation,
        scrollwheel: false
    };
    
    map = new google.maps.Map(document.getElementById('map'),
    mapOptions);
    
    
    //change address details here
    var contentString = '<div class="map-info">' 
    + '<div class="map-title">' 
    + '<h3><img alt="" width="140" src="img/brand.png"></h3></div>' 
    + '<p class="map-address"><div class="map-address-row"><i class="fa fa-map-marker"></i><span class="text"><strong>St. Kutuzova</strong><br>Krasnodar, Russian Federation</span></div><div class="map-address-row"><i class="fa fa-phone"></i><span class="text">345 678 91 23</span></div><div class="map-address-row"><span class="map-email"><i class="fa fa-envelope"></i><span class="text">vanessamail@mail.com</span></span></p>' 
    + '<p class="gmap-open"><a href="https://www.google.com/maps/place/Cal+Poly+Pomona/@34.0565328,-117.8237182,17z/data=!3m1!4b1!4m5!3m4!1s0x80c32ea5e3dc4361:0x904ae4ed22c91eeb!8m2!3d34.0565284!4d-117.8215295" target="_blank">Open on Google Maps</a></p></div>';
    
    
    var infowindow = new google.maps.InfoWindow({
        content: contentString,
    });
    

    marker = new google.maps.Marker({
        map: map,
        draggable: true,
        title: 'Felix', //change title here
        animation: google.maps.Animation.DROP,
        position: mapLocation
    });

    google.maps.event.addListener(marker, 'click', function() {
        infowindow.open(map, marker);
    });



}

if ($('#map').length) {
    google.maps.event.addDomListener(window, 'load', initialize);
}

