import { useState } from 'react'
import Globe from 'react-globe.gl'
import image from '../public/img/dot_mercator_projection.png'
import countries from './data.min.js'

import * as THREE from 'three'

export default function App() {
  const [lon, setLon] = useState(22)
  const [lat, setLat] = useState(22)

  const globeMaterial = new THREE.MeshPhongMaterial({
    color: '#232326'
  })

  return (
    <div style={{ position: 'relative' }}>
      <div style={{ position: 'absolute', zIndex: '10' }}>
        <button
          onClick={() => {
            setLat((prev) => prev + 10)
          }}>
          +10 lat
        </button>
        <button
          onClick={() => {
            setLat((prev) => prev - 10)
          }}>
          - 10 lat
        </button>
        <button
          onClick={() => {
            setLon((prev) => prev + 10)
          }}>
          + 10 lon
        </button>
        <button
          onClick={() => {
            setLon((prev) => prev - 10)
          }}>
          - 10 lon
        </button>
      </div>
      <Globe
        globeMaterial={globeMaterial}
        backgroundColor={'#161618'}
        atmosphereColor={'rgba(225, 225, 254, 0.15)'}
        labelAltitude={0.05}
        labelResolution={2}
        labelSize={5}
        labelsTransitionDuration={0}
        hexPolygonsData={countries.features}
        hexPolygonResolution={3}
        atmosphereAltitude={0.2}
        hexPolygonMargin={0.5}
        hexPolygonColor={'rgb(112, 111, 120)'}
        labelsData={[
          {
            text: 'ISS',
            lat: lat + '',
            lng: lon + '',
            color: '#f76190'
          }
        ]}
      />
    </div>
  )
}
