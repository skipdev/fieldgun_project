---
layout: default
permalink: /contact/
title: Contact
---

<!-- Title -->

<div class="row">
  <div class="col-8 offset-2 center subtitle"><h2>Contact Us</h2></div>
</div>

<!-- Content -->

<div class="sub-content">
  <div class="row">
    <!-- Contact Details -->
    <p>
      Please feel free to contact us by telephone at
      <a href="tel:07715921909">07715 921909</a>
    </p>
  </div>
  <div class="row">
    <div class="col-12">
      <!-- Map -->
      <div id="map"></div>
      <script>
        mapboxgl.accessToken =
          "pk.eyJ1Ijoic3RlcGh5eCIsImEiOiJjanBjZTkxcm4yd2c5M3Zsa3UzMnhtYXRqIn0.7Bk_qxfDrB2hhPYlYKr_vQ";
        var map = new mapboxgl.Map({
          container: "map",
          style: "mapbox://styles/mapbox/streets-v9",
          center: [0.304185764693532, 50.7766960443568], // Starting Point
          zoom: 15
        });
      </script>
    </div>
  </div>
</div>
