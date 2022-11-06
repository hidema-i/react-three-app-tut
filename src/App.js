import { Image } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import "./App.css";

function Images() {
  return (
    <group>
      <Image url="./images/shop1.jpg" scale={[3, 2, 1]} position={[-1, 0, 1]} />
    </group>
  );
}

function App() {
  return (
    <Canvas>
      <Images />
    </Canvas>
  );
}

export default App;
