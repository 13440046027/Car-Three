"use client";
import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import React, { useEffect } from "react";
import * as THREE from "three";

export default function Model({
  Modelposition,
  CarColor,
  TiresRimsid,
  Spoiler,
  sidemirrors
}: {
  Modelposition: [number, number, number];
  CarColor: string;
  TiresRimsid: number;
  Spoiler: number;
  sidemirrors: number;
}) {
  //完整模型对象,模型的模块,模型所有材质
  const { scene, nodes, materials } = useGLTF("car_scene.glb");

  const { camera } = useThree();

  useEffect(() => {
    // 获取车身对象
    const carbody = nodes["carbody"] as THREE.Mesh;
    if (carbody) {
      // 创建新的车身材质
      const carBodyMaterial = new THREE.MeshPhysicalMaterial({
        color: CarColor,
        metalness: 0.7, // 金属度
        roughness: 0.1, // 粗糙度
        clearcoat: 0.5, // 清漆层强度
        clearcoatRoughness: 0.1, // 清漆层粗糙度
        reflectivity: 1, // 反射率
        envMapIntensity: 1, // 环境贴图强度
      });

      // 应用材质
      carbody.material = carBodyMaterial;
    }
  }, [CarColor, nodes]); // 当颜色改变时重新应用材质



  useEffect(() => {
    // 获取所有轮毂对象
    const wheels = {
      set1: [
        nodes["wheel4_5"] as THREE.Mesh,
        nodes["Wheel6"] as THREE.Mesh
      ],
      set2: [
        nodes["wheel2_1"] as THREE.Mesh,
        nodes["wheel1_1"] as THREE.Mesh
      ],
      set3: [
        nodes["wheel4_3"] as THREE.Mesh,
        nodes["wheel2_2"] as THREE.Mesh
      ],
      set4: [
        nodes["wheel4_2"] as THREE.Mesh,
        nodes["Wheel6_1"] as THREE.Mesh
        
      ]
    };

    // 首先隐藏所有轮毂
    Object.values(wheels).flat().forEach(wheel => {
      if (wheel) {
        wheel.visible = false;
      }
    });

    // 根据 TiresRimsid 显示对应的轮毂
    switch(TiresRimsid) {
      case 1:
        wheels.set1.forEach(wheel => {
          if (wheel) wheel.visible = true;
        });
        break;
      case 2:
        wheels.set2.forEach(wheel => {
          if (wheel) wheel.visible = true;
        });
        break;
      case 3:
        wheels.set3.forEach(wheel => {
          if (wheel) wheel.visible = true;
        });
        break;
      case 4:
        wheels.set4.forEach(wheel => {
          if (wheel) wheel.visible = true;
        });
        break;
      // case 0 或其他情况都保持隐藏状态
    }
  }, [TiresRimsid, nodes]);

  // useFrame(() => {
  //   console.log("camera.position", camera.position);
  //   return null;
  // });
  // [0.05, 0.05, 0]


  useEffect(() => {
    // 获取所有轮毂对象
    const wheels = {
      set1: [
      ],
      set2: [
        nodes["spoiler2_2"] as THREE.Mesh,
        nodes["spoiler2_3"] as THREE.Mesh,
        nodes["spoiler2_1"] as THREE.Mesh
      ],
      set3: [
        nodes["spoiler1_3"] as THREE.Mesh,
        nodes["spoiler1_2"] as THREE.Mesh
      ],
    };
    Object.values(wheels).flat().forEach(wheel => {
      if (wheel) {
        wheel.visible = false;
      }
    });

    // 根据 TiresRimsid 显示对应的轮毂
    switch(Spoiler) {
      case 1:
        break;
      case 2:
        wheels.set2.forEach(wheel => {
          if (wheel) wheel.visible = true;
        });
        break;
      case 3:
        wheels.set3.forEach(wheel => {
          if (wheel) wheel.visible = true;
        });
        break;

    }
  }, [Spoiler, nodes]);


  useEffect(() => {
    // 获取所有后视镜对象
    const mirrors = {
      set1: [
        nodes["mirror2"] as THREE.Mesh,
      ],
      set2: [
        nodes["mirror1"] as THREE.Mesh,
      ]
    };

    // 1. 先隐藏所有后视镜
    Object.values(mirrors).flat().forEach(mirror => {
      if (mirror) {
        mirror.visible = false;
      }
    });

    // 2. 根据 sidemirrors 显示对应的后视镜
    // 注意这里使用 sidemirrors 而不是 Spoiler
    switch(sidemirrors) {
      case 1:
        mirrors.set1.forEach(mirror => {
          if (mirror) mirror.visible = true;
        });
        break;
      case 2:
        mirrors.set2.forEach(mirror => {
          if (mirror) mirror.visible = true;
        });
        break;
      // 默认情况保持隐藏
      default:
        break;
    }
  }, [sidemirrors, nodes]); // 使用正确的依赖项
  return (
    <primitive
      object={scene}
      position={Modelposition} // 调整位置
    />
  );
}
