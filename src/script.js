function initMap() {
  let mapOptions = {
    center: new google.maps.LatLng(-29.0, 24.0),
    zoom: 6,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
  };

  function infoCallback(infowindow, marker) {
    return function () {
      infowindow.open(map, marker);
    };
  }

  let mapElement = document.getElementById("mapDiv");
  let map = new google.maps.Map(mapElement, mapOptions);
  let geoLocationControlDiv = document.createElement("div");
  let geoLocationControl = new GeoLocationControl(geoLocationControlDiv, map);
  map.controls[google.maps.ControlPosition.TOP_CENTER].push(
    geoLocationControlDiv
  );

  function GeoLocationControl(geoLocControlDiv, map) {
    if (navigator.geolocation) {
      geoLocControlDiv.className = "controlContainer";
      let controlButton = document.createElement("div");
      controlButton.className = "controlButton";
      controlButton.innerHTML =
        "My Location" +
        '<img src="icons/me.png" width=/"400px/" height=/"100%/}>';
      geoLocControlDiv.appendChild(controlButton);

      google.maps.event.addDomListener(controlButton, "click", function () {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function (position) {
            let lat = position.coords.latitude;
            let lng = position.coords.longitude;
            let devCenter = new google.maps.LatLng(lat, lng);
            map.setCenter(devCenter);
            map.setZoom(15);

            let marker = new google.maps.Marker({
              position: devCenter,
              map: map,
            });
          });
        }
      });
    } else {
      alert("Geolocation is not supported by your browser.");
    }
  }

  function createMarkers(geom, myInfo) {
    if (geom.type == "Point") {
      let coordinate = new google.maps.LatLng(
        geom.coordinates[1],
        geom.coordinates[0]
      );
      let marker = new google.maps.Marker({
        position: coordinate,
        map: map,
        title: myInfo.Name,
        icon: "icons/private.png",
        scaledSize: new google.maps.Size(1, 1),
      });

      let infowindow = new google.maps.InfoWindow({
        maxWidth: 120,
        content:
          "<div class=infowindow><h6>" +
          myInfo.Name +
          "</h6><p>" +
          myInfo.Province +
          ", " +
          myInfo.District +
          ", " +
          myInfo.Subdistrict +
          ", Bed usable: " +
          myInfo.BedsUsable +
          "</p></div>",
      });
      google.maps.event.addListener(
        marker,
        "click",
        infoCallback(infowindow, marker)
      );
    } else if (geom.type == "Other") {
      let coordinate = new google.maps.LatLng(
        geom.coordinates[1],
        geom.coordinates[0]
      );
      let marker = new google.maps.Marker({
        position: coordinate,
        map: map,
        title: myInfo.Name,
        icon: "icons/other.png",
        scaledSize: new google.maps.Size(-6, -6),
      });
      // second infowindow
      let infowindow = new google.maps.InfoWindow({
        maxWidth: 100,
        content:
          "<div class=infowindow><h6>" +
          myInfo.Name +
          "</h6><p> " +
          myInfo.Province +
          ", " +
          myInfo.District +
          ", " +
          myInfo.Subdistrict +
          ",Bed usable: " +
          myInfo.BedsUsable +
          "</p></div>",
      });

      // 2nd attachment  to the marker
      google.maps.event.addListener(
        marker,
        "click",
        infoCallback(infowindow, marker)
      );
    } else if (geom.type == "District") {
      let coordinate = new google.maps.LatLng(
        geom.coordinates[1],
        geom.coordinates[0]
      );
      let marker = new google.maps.Marker({
        position: coordinate,
        map: map,
        title: myInfo.Name,
        icon: "icons/district.png",
        scaledSize: new google.maps.Size(5, 5),
      });

      let infowindow = new google.maps.InfoWindow({
        maxWidth: 100,
        content:
          "<div class=infowindow><h6>" +
          myInfo.Name +
          "</h6><p> " +
          myInfo.Province +
          ", " +
          myInfo.District +
          ", " +
          myInfo.Subdistrict +
          ",Bed usable: " +
          myInfo.BedsUsable +
          "</p></div>",
      });

      google.maps.event.addListener(
        marker,
        "click",
        infoCallback(infowindow, marker)
      );
    }
  }

  function fetchGeoJSON() {
    fetch("src/geojson.js")
      .then((response) => response.json())
      .then((data) => {
        data.features.forEach((feature) =>
          createMarkers(feature.geometry, feature.properties)
        );
        window.infowindow = data.properties;
      })
      .catch((error) => {
        console.error("Error fetching GeoJSON data:", error);
      });
  }

  fetchGeoJSON();
}
