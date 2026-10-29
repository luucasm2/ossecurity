import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { ContactShadows, OrbitControls, RoundedBox } from '@react-three/drei'

const WHITE = '#eaf3ff'
const BLUE = '#0664fb'
const DARK = '#111e38'
const METAL = '#a9bedc'

function CameraModel() {
  return (
    <group rotation={[0, -0.35, 0]}>
      <mesh position={[0, -0.85, -0.27]} castShadow><cylinderGeometry args={[0.43, 0.50, 0.15, 42]} /><meshStandardMaterial color={METAL} metalness={0.7} roughness={0.3}/></mesh>
      <mesh position={[0, -0.51, -0.27]} castShadow><cylinderGeometry args={[0.14,0.14,0.58,24]} /><meshStandardMaterial color="#e5efff" metalness={0.45} roughness={0.35}/></mesh>
      <mesh position={[0, -0.23, -0.27]} castShadow><sphereGeometry args={[0.22,24,24]}/><meshStandardMaterial color={METAL} metalness={0.8} roughness={0.2}/></mesh>
      <group position={[0, 0.18, 0.15]} rotation={[-0.13,0,0]}>
        <RoundedBox args={[2.35, 0.92, 0.94]} radius={0.21} smoothness={5} castShadow receiveShadow><meshStandardMaterial color={WHITE} metalness={0.18} roughness={0.3}/></RoundedBox>
        <RoundedBox args={[0.22, 0.83, 0.87]} radius={0.10} position={[1.17,0,0]} castShadow><meshStandardMaterial color="#e3e9f1" metalness={0.38} roughness={0.34}/></RoundedBox>
        <mesh rotation={[0, Math.PI/2, 0]} position={[1.31,0,0]}><cylinderGeometry args={[0.34,0.34,0.10,64]}/><meshStandardMaterial color="#24364e" metalness={0.4} roughness={0.25}/></mesh>
        <mesh rotation={[0,Math.PI/2,0]} position={[1.38,0,0]}><cylinderGeometry args={[0.235,0.235,0.045,64]}/><meshPhysicalMaterial color="#031b58" metalness={0.35} roughness={0.1} clearcoat={1}/></mesh>
        <mesh rotation={[0,Math.PI/2,0]} position={[1.415,0,0]}><cylinderGeometry args={[0.11,0.11,0.02,64]}/><meshBasicMaterial color={BLUE}/></mesh>
        <mesh position={[-0.52,0.39,0]}><boxGeometry args={[0.4,0.025,0.9]}/><meshStandardMaterial color={BLUE} metalness={0.2}/></mesh>
        <mesh position={[-0.73,-0.46,0.24]}><boxGeometry args={[0.55,0.05,0.10]}/><meshStandardMaterial color={METAL}/></mesh>
      </group>
      <mesh position={[-0.7,0.75,0.25]}><sphereGeometry args={[0.06,12,12]}/><meshBasicMaterial color="#4dd6ae"/></mesh>
    </group>
  )
}

function ACModel() {
  return (
    <group rotation={[0,-0.25,0]}>
      <RoundedBox args={[3.05, 1.08, 0.73]} radius={0.15} smoothness={5} castShadow receiveShadow><meshStandardMaterial color={WHITE} metalness={0.14} roughness={0.24}/></RoundedBox>
      <RoundedBox args={[2.75, 0.14, 0.035]} radius={0.025} position={[0,-0.38,0.372]}><meshStandardMaterial color="#c9d9ef"/></RoundedBox>
      <mesh position={[0,-0.405,0.407]} rotation={[0,0,0]}><boxGeometry args={[2.3,0.035,0.027]}/><meshStandardMaterial color={DARK}/></mesh>
      {Array.from({length: 8}).map((_,i)=><mesh key={i} position={[-1.02+i*0.29,-0.46,0.426]}><boxGeometry args={[0.025,0.1,0.018]}/><meshStandardMaterial color="#91a6c6"/></mesh>)}
      <mesh position={[-1.17,0.2,0.38]}><boxGeometry args={[0.14,0.14,0.018]}/><meshStandardMaterial color={BLUE}/></mesh>
      <mesh position={[1.18,0.17,0.38]}><sphereGeometry args={[0.045,16,16]}/><meshBasicMaterial color="#4ad6b1"/></mesh>
      <mesh position={[0,-0.65,0.11]} rotation={[0.2,0,0]}><boxGeometry args={[2.8,0.12,0.56]}/><meshStandardMaterial color="#b3c6df" roughness={0.35}/></mesh>
      <group position={[0,-0.9,0.55]}>
        {[-0.75,0,0.75].map((x,i)=><mesh key={i} position={[x,0.02,0]} rotation={[0,0,Math.PI]}><coneGeometry args={[0.23,0.65,3]}/><meshBasicMaterial color="#6ec9ff" transparent opacity={0.13}/></mesh>)}
      </group>
    </group>
  )
}

function ElectricModel() {
  return (
    <group rotation={[0,-0.35,0]}>
      <RoundedBox args={[2.15,2.65,0.42]} radius={0.17} smoothness={5} castShadow><meshStandardMaterial color="#dce6f5" metalness={0.65} roughness={0.3}/></RoundedBox>
      <RoundedBox args={[1.88,2.32,0.10]} radius={0.08} position={[0,0,0.26]}><meshStandardMaterial color={WHITE} metalness={0.25}/></RoundedBox>
      <mesh position={[0,0.75,0.328]}><boxGeometry args={[1.6,0.055,0.03]}/><meshStandardMaterial color="#a7bad6"/></mesh>
      {Array.from({length: 3}).map((_,r)=>Array.from({length:4}).map((_,c)=>(
        <group key={`${r}-${c}`} position={[-0.61+c*0.405, 0.40-r*0.60,0.346]}>
          <RoundedBox args={[0.32,0.48,0.10]} radius={0.045}><meshStandardMaterial color={r === 1 ? '#c8dcf4' : '#ebf3ff'}/></RoundedBox>
          <RoundedBox args={[0.17,0.25,0.06]} radius={0.025} position={[0,0.075,0.09]}><meshStandardMaterial color={DARK}/></RoundedBox>
          <mesh position={[0,0.06,0.126]}><boxGeometry args={[0.095,0.10,0.012]}/><meshStandardMaterial color={r===1 ? BLUE : '#c5cfe0'}/></mesh>
        </group>
      )))}
      <mesh position={[0,-1.08,0.33]}><boxGeometry args={[1.52,0.10,0.03]}/><meshStandardMaterial color={BLUE}/></mesh>
    </group>
  )
}

function AutomationModel() {
  return (
    <group rotation={[0,-0.3,0]}>
      <RoundedBox args={[2.25,2.55,0.35]} radius={0.23} smoothness={5} castShadow><meshStandardMaterial color="#edf4ff" metalness={0.22} roughness={0.3}/></RoundedBox>
      <RoundedBox args={[1.96,2.25,0.06]} radius={0.13} position={[0,0,0.21]}><meshStandardMaterial color="#162b53" metalness={0.2} roughness={0.32}/></RoundedBox>
      <mesh position={[0,0.56,0.26]}><torusGeometry args={[0.40,0.055,18,64]}/><meshBasicMaterial color="#4f97ff"/></mesh>
      <mesh position={[0,0.56,0.28]}><circleGeometry args={[0.23,48]}/><meshBasicMaterial color="#1f437c"/></mesh>
      <mesh position={[0,0.56,0.29]}><ringGeometry args={[0.085,0.105,48]}/><meshBasicMaterial color="#b9d8ff"/></mesh>
      {[[-0.43,-0.34],[0.43,-0.34],[-0.43,-0.83],[0.43,-0.83]].map(([x,y],i)=>(
        <group key={i} position={[x,y,0.265]}>
          <RoundedBox args={[0.67,0.36,0.045]} radius={0.075}><meshStandardMaterial color="#264574"/></RoundedBox>
          <mesh position={[0,0,0.032]}><circleGeometry args={[0.075,24]}/><meshBasicMaterial color={i===0 ? '#4eacff' : '#c0d9ff'}/></mesh>
        </group>
      ))}
      <mesh position={[0,-1.08,0.255]}><boxGeometry args={[0.30,0.04,0.015]}/><meshBasicMaterial color="#6a8bad"/></mesh>
    </group>
  )
}

const models = { security: CameraModel, cooling: ACModel, electric: ElectricModel, automation: AutomationModel }

export default function Service3D({ selected = 'security' }) {
  const Model = models[selected] || CameraModel
  return (
    <div className="canvas-wrap" role="img" aria-label={`Modelo tridimensional interativo: ${selected}. Arraste com o mouse para girar.`}>
      <Canvas camera={{ position:[4.5, 2.3, 5.5], fov: 38 }} shadows dpr={[1, 1.65]} gl={{antialias: true, alpha: true}}>
        <ambientLight intensity={1.6}/>
        <hemisphereLight args={['#f5f8ff','#63758a',1.0]}/>
        <directionalLight position={[4,7,5]} intensity={2.8} castShadow shadow-mapSize={[1024,1024]}/>
        <pointLight position={[-4,0,2]} color="#e7efff" intensity={1.2}/>
        <Suspense fallback={null}>
          <Model />
          <ContactShadows position={[0,-1.8,0]} opacity={0.42} scale={8} blur={2.8} far={4} color="#080f29"/>
        </Suspense>
        <OrbitControls enablePan={false} enableZoom={false} minPolarAngle={Math.PI*0.23} maxPolarAngle={Math.PI*0.73} autoRotate={false}/>
      </Canvas>
    </div>
  )
}
