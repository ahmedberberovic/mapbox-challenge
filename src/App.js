import React, { Component} from "react";
import ReactMapboxGl from 'react-mapbox-gl';
import DrawControl from "react-mapbox-gl-draw";
import "@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css";
import Slider from '@material-ui/core/Slider';

const Map = ReactMapboxGl({
  accessToken:
    'pk.eyJ1IjoiYWhtZWRiaDkiLCJhIjoiY2s1bzZkbmQ1MDNzMTNzcWw0eXJpc3duNiJ9.RcZZI2_JbPoeFp-14N8y8w'

});

let drawingCheck = false;

const marks = [
  {
    value: 0,
    label: '0°',
  },
  {
    value: 0.75,
    label: '0.75°',
  },
  {
    value: 1.5,
    label: '1.5°',
  },
];

export default class App extends Component {

    state = {
      value: 0.037,
    };

    handleChange = (event, value) => {
      this.setState({ value });
    };

    onDrawCreate = ({ features }) => {
      drawingCheck = true;
    };
    onDrawUpdate = ({ features }) => {
      drawingCheck = true;
    };
    onDrawSelectionChange = ({ features }) => {
      drawingCheck = false;
    };
    onDrawActionable = ({ features }) => {
      drawingCheck = true;
    };

    _onClickMap = (map, evt) => { 
      if(drawingCheck===false){
          if (map.getLayer('route')) map.removeLayer('route');
          if (map.getSource('routesource')) map.removeSource('routesource');

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
                        lng+this.state.value,
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
                        lng+this.state.value,
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
    };

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
          onClick={this._onClickMap.bind(this)}
        >

          <DrawControl
              position="top-left"
              onDrawCreate={this.onDrawCreate}
              onDrawUpdate={this.onDrawUpdate}
              onDrawActionable={this.onDrawActionable}
              displayControlsDefault= {false}
              onDrawSelectionChange={this.onDrawSelectionChange}
              controls= {{
                polygon: true,
                trash: true
              }}
            />
        </Map>

        <Slider
            step={0.0001}
            valueLabelDisplay="on"
            aria-label="custom thumb label"
            defaultValue={0.037}
            max={1.5}
            min={0.005}
            style={{
              width: '230px',
              padding: '20px 15px 10px 0',
              margin: '40px 20px 0 20px'
            }}
            value={value}
            aria-labelledby="label"
            onChange={this.handleChange.bind(this)}
            marks={marks}
        />
      </div>
    );
  }
}