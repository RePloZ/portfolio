import { useGLTF, Html } from "@react-three/drei"
import React, { Suspense } from "react"

export const Rocket = () => {
    const gltf = useGLTF('src/assets/rocket/scene.gltf')
    return (<Suspense fallback={<Html center>Where is my rocket</Html>}>
        <primitive object={gltf.scene} />
    </Suspense>)
}