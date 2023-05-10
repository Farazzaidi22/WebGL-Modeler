import React, { useRef, useState, useEffect } from "react";
import { useLoader, useFrame } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import * as THREE from "three"; // Add this import statement

const GltfModel = ({
  modelPath,
  scale = 0.2,
  position = [-50, -50, -50],
  autoScale = false,
}) => {
  const ref = useRef();
  const gltf = useLoader(GLTFLoader, modelPath);
  const [hovered, hover] = useState(false);

  useEffect(() => {
    if (autoScale && ref.current) {
      const bbox = new THREE.Box3().setFromObject(ref.current);
      const size = bbox.getSize(new THREE.Vector3()).length();
      const newScale = scale / size;
      ref.current.scale.set(newScale, newScale, newScale);
    }
  }, [autoScale, scale]);

  useFrame((state, delta) => (ref.current.rotation.y += 0.003));

  return (
    <>
      <primitive
        ref={ref}
        object={gltf.scene}
        position={position}
        scale={scale * 0.08}
        // onPointerOver={() => hover(true)}
        // onPointerOut={() => hover(false)}
      />
    </>
  );
};

export default GltfModel;
