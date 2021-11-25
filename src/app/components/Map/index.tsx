/**
 *
 * Map
 *
 */
import * as React from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';
import { ReactComponent as MarkerIcon } from '../../assets/icons/marker_map.svg';

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
      mapboxApiAccessToken="pk.eyJ1IjoibGVvbnJkYXJjIiwiYSI6ImNrd2V0c3k4cTA4N3AzMHFqZTJxcmxwMXMifQ.jHbunGjDY_vKZi8GR0ApGw"
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
