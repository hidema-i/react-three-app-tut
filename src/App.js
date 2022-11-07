import { Image, Scroll, ScrollControls, useScroll } from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import "./App.css";

function Images() {
  const { height } = useThree((state) => state.viewport);
  const group = useRef();
  const data = useScroll();

  useFrame(() => {
    group.current.children[0].material.zoom = 1 + data.range(0, 1 / 3) / 3;
    group.current.children[1].material.zoom = 1 + data.range(0, 1 / 3) / 3;
    group.current.children[2].material.zoom = 1 + data.range(0, 1 / 3) / 3;
    group.current.children[3].material.zoom = 1 + data.range(0, 1 / 3) / 3;
  });

  return (
    <group ref={group}>
      <Image
        url="./images/shop1.jpg"
        scale={[4, height, 1]}
        position={[-1, 0, 1]}
      />
      <Image url="./images/shop2.jpg" scale={3} position={[2, 0, 1]} />
      <Image
        url="./images/shop3.jpg"
        scale={[1, 3.5, 1]}
        position={[-2.3, -height, 2]}
      />
      <Image
        url="./images/shop4.jpg"
        scale={[1, 2.7, 1]}
        position={[-1.4, -height - 0.7, 1]}
      />
    </group>
  );
}

function App() {
  return (
    <Canvas>
      <ScrollControls pages={2} damping={3} horizontal={false}>
        <Scroll>
          <Images />
        </Scroll>
        <Scroll html>
          <h1 style={{ position: "absolute", top: "60vh", left: "1.5em" }}>
            SAMPLE
          </h1>
          <h1 style={{ position: "absolute", top: "140vh", left: "40vw" }}>
            ThreeJS
          </h1>
        </Scroll>
      </ScrollControls>
    </Canvas>
  );
}

export default App;
