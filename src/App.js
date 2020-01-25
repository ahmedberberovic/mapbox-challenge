import React, { Component, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import ReactMapboxGl, { GeoJSONLayer } from 'react-mapbox-gl';
import DrawControl from "react-mapbox-gl-draw";
import "@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css";
import Slider from '@material-ui/core/Slider';


const Map = ReactMapboxGl({
  accessToken:
    'pk.eyJ1IjoiYWhtZWRiaDkiLCJhIjoiY2s1bzZkbmQ1MDNzMTNzcWw0eXJpc3duNiJ9.RcZZI2_JbPoeFp-14N8y8w'

});

let valueLength=0.037;

export default class App extends Component {

  state = {
    value: 0.037,
  };

  handleChange = (event, value) => {
    this.setState({ value });
    valueLength=value;
  };
 

  onDrawCreate = ({ features }) => {
    console.log(features);
  };

  onDrawUpdate = ({ features }) => {
    console.log({ features });
  };
  _onClickMap(map, evt) {

    if (map.getLayer('route')) map.removeLayer('route');
    if (map.getSource('routesource')) map.removeSource('routesource');

    console.log(evt.lngLat);
    document.getElementById('info').innerHTML =
      JSON.stringify(evt.lngLat.wrap());
    let lng=evt.lngLat.lng;
    let lat=evt.lngLat.lat;
    map.addSource('routesource', {
          type: 'geojson',
          data: {
            "type": "FeatureCollection",
            "features": [
          {
            "type": "Feature",
            "properties": {
              "stroke": "#555555",
              "stroke-width": 3,
              "stroke-opacity": 1
            },
            "geometry": {
              "type": "LineString",
              "coordinates": [
                [
                  lng,
                  lat
                ],
                [
                  lng+valueLength,
                  lat
                ]
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "stroke": "#555555",
              "stroke-width": 3,
              "stroke-opacity": 1
            },
            "geometry": {
              "type": "LineString",
              "coordinates": [
                [
                  lng,
                  lat+0.0013
                ],
                [
                  lng+valueLength,
                  lat+0.0013
                ]
              ]
            }
          }
        ]
      }

        });
    map.addLayer({
        'id': 'route',
        'type': 'line',
        'source': 'routesource',
            
            'layout': {
            'line-join': 'round',
            'line-cap': 'round'
            },
            'paint': {
            'line-color': '#0044FF',
            'line-width': 5
            }
        });
  }

render() {
  
  const { value } = this.state;

  return (

    <div>

    <pre id="info"></pre>
      <Map
        style="mapbox://styles/mapbox/satellite-v9"
        center={[28.672388600125828,41.062677228593344]}
        containerStyle={{
          height: '80vh',
          width: '100vw'
        }}
        zoom={[10]}
        //center={[-122.48369693756104, 37.83381888486939]}
        //center={[-73.97777080535889, 40.69336192556367]}
        onClick={this._onClickMap}
      >

        <DrawControl
            position="top-left"
            onDrawCreate={this.onDrawCreate}
            onDrawUpdate={this.onDrawUpdate}
          />


        {/*<GeoJSONLayer {...geojsonStyles} data={geojson} />*/}
          
          <Slider
            step={0.0001}
            valueLabelDisplay="on"
            aria-label="custom thumb label"
            defaultValue={0.037}
            max={1.5}
            min={0.005}
            style={{
              width: '230px',
              padding: '220px 15px 10px 0',
              margin: '15px'
            }}
            value={value}
            aria-labelledby="label"
            onChange={this.handleChange}
          />

      </Map>
    </div>

  );
}
}