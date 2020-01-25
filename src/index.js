/*import React, { Component } from 'react';
import ReactDOM from "react-dom";
import ReactMapboxGl, { GeoJSONLayer } from "react-mapbox-gl";
import DrawControl from 'react-mapbox-gl-draw';
import '@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css';

import "./styles.css";

const Map = ReactMapboxGl({
  accessToken:
    'pk.eyJ1IjoiYWhtZWRiaDkiLCJhIjoiY2s1bzZkbmQ1MDNzMTNzcWw0eXJpc3duNiJ9.RcZZI2_JbPoeFp-14N8y8w'

});
class App extends Component {
  onDrawCreate = ({ features }) => {
    console.log(features);
  };

  onDrawUpdate = ({ features }) => {
    console.log({ features });
  };

render() {
    const geojson = {
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          properties: {
            text: "Fort Greene"
          },
          geometry: {
            type: "Polygon",
            coordinates: [
              [
                [-73.97777080535889, 40.69336192556367],
                [-73.97704124450682, 40.68986390865585],
                [-73.97315740585327, 40.68970120572578],
                [-73.97388696670532, 40.69323177008439],
                [-73.97777080535889, 40.69336192556367]
              ]
            ]
          }
        }
      ]
    };
  const geojsonStyles = {
      lineLayout: {
        "line-join": "round",
        "line-cap": "round"
      },
      linePaint: {
        "line-color": "#ff11ff",
        "line-width": 4,
        "line-opacity": 1
      },
      symbolLayout: {
        "text-field": "{text}",
        "symbol-placement": "line",
        "text-rotation-alignment": "map",
        "text-size": {
          base: 1,
          stops: [[9, 9], [14, 12]]
        }
      },
      symbolPaint: {
        "text-color": "rgba(0, 0, 0, 1)",
        "text-halo-color": "rgba(255, 255, 255, 1)",
        "text-halo-width": 2
      }
    };
  return (
    <div className="App">
      <Map
        style="mapbox://styles/mapbox/streets-v9"
        //center={[28.6864, 41.0391]}
        containerStyle={{
          height: '80vh',
          width: '100vw'
        }}
        zoom={[16]}
        center={[-73.9757752418518, 40.69144210646147]}
      >
        <DrawControl
            position="top-left"
            onDrawCreate={this.onDrawCreate}
            onDrawUpdate={this.onDrawUpdate}
          />
          <GeoJSONLayer {...geojsonStyles} data={geojson} />
      </Map>
    </div>
  );
}
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);*/






import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();






/*import React from 'react';
import ReactDOM from 'react-dom';
import mapboxgl from 'mapbox-gl';
 
mapboxgl.accessToken = 
'pk.eyJ1IjoiYWhtZWRiaDkiLCJhIjoiY2s1bzZkbmQ1MDNzMTNzcWw0eXJpc3duNiJ9.RcZZI2_JbPoeFp-14N8y8w';
 
class Application extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			lng: 28.6864 ,
			lat:  41.0391,
			zoom: 10.89
		};
	}
 
	componentDidMount() {
		const map = new mapboxgl.Map({
			container: this.mapContainer,
			style: 'mapbox://styles/mapbox/streets-v11',
			center: [this.state.lng, this.state.lat],
			zoom: this.state.zoom
		});
	 
		map.on('move', () => {
			this.setState({
				lng: map.getCenter().lng.toFixed(4),
				lat: map.getCenter().lat.toFixed(4),
				zoom: map.getZoom().toFixed(2)
				});
		});
	}
	 
	render() {
		return (
			<div>
				<div className='sidebarStyle'>
					<div>Longitude: {this.state.lng} | Latitude: {this.state.lat} | Zoom: {this.state.zoom}</div>
				</div>
				<div ref={el => this.mapContainer = el} className='mapContainer' />
				</div>
		)
	}
}
 
ReactDOM.render(<Application />, document.getElementById('app'));*/