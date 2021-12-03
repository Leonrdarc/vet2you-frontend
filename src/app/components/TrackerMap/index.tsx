/**
 *
 * TrackerMap
 *
 */
import { useState, useMemo } from 'react';
import ReactMapGL, { Layer, Marker, Source } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from 'mapbox-gl';
import { geojson } from './route';
import { useInterval } from 'usehooks-ts';
import { DeliveryIcon, MarkerIcon, StoreIcon } from './styled';
import { ServiceState } from '../TrackerDetails';

// The following is required to stop "npm build" from transpiling mapbox code.
// notice the exclamation point in the import.
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax, import/no-unresolved
mapboxgl.workerClass =
  require('worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker').default;

interface Props {
  setState: (state) => void;
}

export function TrackerMap(props: Props) {
  const [viewport, setViewport] = useState({
    latitude: 10.94,
    longitude: -74.8,
    zoom: 9.5,
  });
  const [counter, setCounter] = useState(0);

  const dataLength = geojson.features.length;

  useInterval(
    () => {
      setCounter(counter + 1);
    },
    counter < geojson.features.length - 2 ? 300 : null,
  );

  const updateRoute = counter => {
    let newGeoJson = { ...geojson };
    newGeoJson.features = geojson.features.slice(
      counter,
      geojson.features.length - 1,
    );
    if (counter >= geojson.features.length - 2) {
      props.setState(ServiceState.COMPLETED);
    }
    if (counter === 7) {
      props.setState(ServiceState.ONWAY);
    }
    return newGeoJson;
  };
  // eslint-disable-next-line
  const data = useMemo(() => updateRoute(counter), [counter]);

  return (
    <ReactMapGL
      {...viewport}
      width="100%"
      height="100%"
      mapStyle="mapbox://styles/leonrdarc/ckwev1be01ql914pcsueqo6qz"
      onViewportChange={viewport => setViewport(viewport)}
    >
      <Source id="my-data" type="geojson" data={data}>
        <Layer
          id="lineLayer"
          type="line"
          layout={{
            'line-join': 'round',
            'line-cap': 'round',
          }}
          paint={{
            'line-color': 'rgba(13, 106, 182, 1)',
            'line-width': 8,
          }}
        />
        <Marker
          offsetLeft={-20}
          offsetTop={-20}
          longitude={viewport.longitude}
          latitude={viewport.latitude}
        >
          {/* <MarkerIcon /> */}
        </Marker>
        <Marker
          offsetLeft={-20}
          offsetTop={-20}
          //@ts-ignore
          longitude={data.features[0].geometry.coordinates[0][0]}
          //@ts-ignore
          latitude={data.features[0].geometry.coordinates[0][1]}
        >
          <DeliveryIcon />
        </Marker>
        <Marker
          offsetLeft={-20}
          offsetTop={-20}
          //@ts-ignore
          longitude={geojson.features[0].geometry.coordinates[0][0]}
          //@ts-ignore
          latitude={geojson.features[0].geometry.coordinates[0][1]}
        >
          <StoreIcon />
        </Marker>
        <Marker
          offsetLeft={-20}
          offsetTop={-20}
          longitude={
            //@ts-ignore
            geojson.features[dataLength - 1].geometry.coordinates[0][0]
          }
          //@ts-ignore
          latitude={geojson.features[dataLength - 1].geometry.coordinates[0][1]}
        >
          <MarkerIcon />
        </Marker>
      </Source>
    </ReactMapGL>
  );
}
