---
layout: default
permalink: /contact/
title: Contact
---

<div class="row">
  <div class="col-8 offset-2 center subtitle"><h2>Contact Us</h2></div>
</div>

<div class="row">
  <div class="col-12">
    <div id="map"></div>
    <script>
      mapboxgl.accessToken =
        "pk.eyJ1Ijoic3RlcGh5eCIsImEiOiJjanBjZTkxcm4yd2c5M3Zsa3UzMnhtYXRqIn0.7Bk_qxfDrB2hhPYlYKr_vQ";
      var map = new mapboxgl.Map({
        container: "map", // container id
        style: "mapbox://styles/mapbox/streets-v9",
        center: [0.304185764693532, 50.7766960443568], // starting position
        zoom: 15 // starting zoom
      });
      // Add zoom and rotation controls to the map.
      // map.addControl(new mapboxgl.NavigationControl());
    </script>
  </div>
</div>
