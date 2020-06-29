# South African Health Facility Map
>  TODO Blurb

![](images/updatedmap.png)

## Installation

There are no specific pre-requisite libraries or framework needed to be installed for run this project. 

This assumes that you have some internet access for cdn scripts (Jquery, AJAX and bootstrap). 

After cloning / forking it - simply replace the Google Maps Javascript API key with your own. To use the geolocation feature with clear view (not one with overlaying transparent cover with text  `"FOR DEVELOPMENT PURPOSES" `). To deploy this for use beyond locally hosting, your API key needs to be from a Google Cloud account that is enabled for billing. 

If you have your own geoJSON data, you may replace it following the convention of the currently used geoJson file.

If you have your data as a csv and you wish to convert it to geJSON, you could use [this tool](https://www.convertcsv.com/csv-to-geojson.htm)  

## Usage example

1. You may use this to view the capacities of health facilites around you, mostly which are public and private hospitals. Use the geolocation feature that can be accessed from the big blue button with yellow text "My Location" , to locate your self (Obviously the map boundries are define to be South African centric). 
Once located, then click on the the marker of your interest to get more details about that hospital . 

2. Whats great about this map is you can get multiple detials at once , in case you wish to campare the facility of one hospital to a few more others. So the pop up info windows, do not open one at the time but they can all open at once. 

This is just a start, you may suggest more features for this map [here](https://docs.google.com/forms/d/e/1FAIpQLSeMm5zm-syGnw-l06QV2q6caFtNldS3nBsAoIPzs3G2e4-ncg/viewform)


## Development setup

When developing this mapping exercise , VS code text editor was used  with a live server extension  to get a live preview during built time. But I think it should be ok to use any text editor of your choice. 

Knowledge of JS , HTML and some styling will make it easy to customize this. 

To run locally (assuming you are using the tools mentioned prior) - right click on the HTML file and select an option  `"Open with live server" `

## Release History

* 0.0.1
    * First commit and version

## Meta

- Nompumelelo Mtsweni
- Herkulaas MVE Combrink
- Vukosi Marivate [github/@vukosim](https://github.com/vukosim) [twitter/@vukosi](https://twitter.com/vukosi)
- [dsfsi/covid19za contributors and volunteers](https://github.com/dsfsi/covid19za)

See ``LICENSE`` for more information.

## Contributing

1. Fork it (<https://github.com/dsfsi/healthfacilitymap/fork>)
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -am 'Add some fooBar'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request
