/**
 *
 * Map
 *
 */
import * as React from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';
import { ReactComponent as MarkerIcon } from '../../assets/icons/marker_map.svg';
import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from 'mapbox-gl';

// The following is required to stop "npm build" from transpiling mapbox code.
// notice the exclamation point in the import.
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax, import/no-unresolved
mapboxgl.workerClass =
  require('worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker').default;

export function Map() {
  const [viewport, setViewport] = React.useState({
    latitude: 10.94,
    longitude: -74.8,
    zoom: 9.5,
  });

  return (
    <ReactMapGL
      {...viewport}
      width="100%"
      height="100%"
      mapStyle="mapbox://styles/leonrdarc/ckwev1be01ql914pcsueqo6qz"
      onViewportChange={viewport => setViewport(viewport)}
    >
      <Marker
        offsetLeft={-20}
        offsetTop={-20}
        longitude={viewport.longitude}
        latitude={viewport.latitude}
      >
        <MarkerIcon />
      </Marker>
    </ReactMapGL>
  );
}
