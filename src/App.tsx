import React, { Suspense, useRef, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Flex } from '@react-three/flex'
import { Rocket } from './components/Rocket'
import { Canvas } from '@react-three/fiber'
import { Html } from '@react-three/drei'

const state = {
  top: 0
}

function App() {
  const [pages, setPages] = useState(0);
  const scrollArea = useRef<any>();
  const onScroll = (e: any) => (state.top = e.target.scrollTop);

  //"Sci-Fi Rocket" (https://skfb.ly/NNR9) by 3DHaupt is licensed under Creative Commons Attribution-NonCommercial (http://creativecommons.org/licenses/by-nc/4.0/).
  return (<>
    <Canvas
      shadows
      camera={{ position: [0, 0, 100], zoom: 1 }}
    >
      <pointLight color='0x000000' position={[0, 1, 4]} intensity={0.0} />
      <pointLight color='0xffffff' position={[0, 1, 4]} intensity={200.0} />
      <pointLight color='0xffffff' position={[0, 1, 4]} intensity={0.0} />
      <ambientLight color='0xffffff' intensity={3.0} />

      <Suspense fallback={<Html center>loading...</Html>}>
        <Rocket />
      </Suspense>
    </Canvas>
    <div className="scrollArea" ref={scrollArea} onScroll={onScroll}>
      <div style={{ height: `${pages * 100}vh` }} />
    </div>
  </>)
}

export default App
