import React, { useRef, useState, useEffect } from "react";
import { useLoader, useFrame, useThree } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import * as THREE from "three";

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

  //   useFrame((state, delta) => (ref.current.rotation.y += 0.3));

  const { camera } = useThree();

  // Adjust the camera position to ensure the entire model is visible
  useEffect(() => {
    const bbox = new THREE.Box3().setFromObject(ref.current);
    const center = bbox.getCenter(new THREE.Vector3());
    const size = bbox.getSize(new THREE.Vector3()).length();
    const distance =
      (size * 0.7) / Math.tan(THREE.MathUtils.degToRad(camera.fov) / 2.2);
    const direction = camera.position
      .clone()
      .sub(center)
      .normalize()
      .multiplyScalar(distance);
    camera.position.copy(center).add(direction);
    camera.lookAt(center);
  }, [camera]);

  return (
    <primitive
      ref={ref}
      object={gltf.scene}
      position={position}
      scale={scale * 0.1}
      //   onPointerOver={() => hover(true)}
      //   onPointerOut={() => hover(false)}
    />
  );
};

export default GltfModel;
