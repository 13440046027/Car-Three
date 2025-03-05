"use client";
import { Environment, Grid, OrbitControls } from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import React, { forwardRef, useEffect, useState } from "react";
import Model from "./Model";
import Title, { ColorOption } from "./Title";
import { easing } from "maath";

let ThreeModel = () => {
  // 修改类型声明为具体的数组类型
  const [position, setPosition] = useState<[number, number, number]>([
    0.244, -0.04, 0.04,
  ]);

  const [Modelposition, setModelPosition] = useState<[number, number, number]>([
    0, 0, 0,
  ]);

  const [CarColor, setCarColor] = useState<string>("#fff");
  const [TiresRimsid, setTiresRimsid] = useState<number>(1);

  const [Spoiler, setTSpoiler] = useState<number>(0);
  const [sidemirrors, setsidemirrors] =  useState<number>(0);
  

  function changeMotorization() {
    setModelPosition([0, 0, 0]);
    setPosition([0.244, -0.04, 0.04]);
  }
  function changeColor() {
    setModelPosition([0, 0, 0]);
    // 调整相机位置，让它绕到模型侧面，而不是穿过模型
    setPosition([0.004, -0.041, -0.247]);
  }

  function chnageTiresRims() {
    setModelPosition([0.05, 0.05, 0]);
    // 调整相机位置，让它从外部移动到目标位置
    setPosition([0.2, 0.038, 0.17]);
  }

  function chnageSpoiler() {
    setModelPosition([0, 0, 0]);
    // 调整相机位置，让它从外部移动到目标位置
    setPosition([-0.091, -0.027, 0.2]);
  }

  function Sidemirrors() {
    setModelPosition([0, 0, 0]);
    // 调整相机位置，让它从外部移动到目标位置
    setPosition([0.16, -0.0365, 0.02]);
  }

  function Driverassistancesystems() {
    setModelPosition([0, 0, 0]);
    // 调整相机位置，让它从外部移动到目标位置
    setPosition([0.14, -0.06, -0.07]);
  }

  function titleColor(itemColor:ColorOption){
  // 添加空值检查
  if (!itemColor) {
    return;
  }
    setCarColor(itemColor.color)

  }


  function titleTiresRims(TiresRims:any){
    // 添加空值检查
    if (!TiresRims) {
      return;
    }
    setTiresRimsid(TiresRims.id)
    

    }


    function titleSpoiler(Spoileritem:any){
          // 添加空值检查
    if (!Spoileritem) {
      return;
    }

  
      setTSpoiler(Spoileritem.id)
    }

    function titleSidemirrors(sidemirrorsitem:any){
      if (!sidemirrorsitem) {
        return;
      }
  
    
      setsidemirrors(sidemirrorsitem.id)
      
    }
  return (
    <>
      <Title
        changeMotorization={changeMotorization}
        changeColor={changeColor}
        chnageTiresRims={chnageTiresRims}
        chnageSpoiler={chnageSpoiler}
        Sidemirrors={Sidemirrors}
        Driverassistancesystems={Driverassistancesystems}
        titleColor={titleColor}

        titleTiresRims={titleTiresRims}

        titleSpoiler={titleSpoiler}
        titleSidemirrors={titleSidemirrors}
      />
      <Canvas
        shadows
        camera={{
          position: position, // 直接在这里设置相机位置
          fov: 55,
          near: 0.1,
          far: 1000,
        }}
      >
        <CameraController position={position} />

        {/* 轨道控制器 */}
        <OrbitControls
          enableDamping={true}
          dampingFactor={0.1}
          enablePan={true}
          enableZoom={true}
        />

        {/* 环境光 */}
        <ambientLight intensity={1.5 * Math.PI} />
        {/* 平行光 */}

        <directionalLight position={[10, 10, 5]} intensity={1} castShadow />

        {/* 模型 */}
        <Model Modelposition={Modelposition} CarColor={CarColor} TiresRimsid={TiresRimsid} Spoiler={Spoiler} sidemirrors={sidemirrors} />

        {/* 房间 */}
        <Environment preset="city" background blur={1} />
      </Canvas>
    </>
  );
};

// 创建一个新组件来控制相机
function CameraController({
  position,
}: {
  position: [number, number, number];
}) {
  const { camera } = useThree();

  useFrame((state, delta) => {
    easing.damp3(
      camera.position, // 当前相机位置
      position, // 目标位置
      0.25, // 平滑系数
      delta // 帧时间差
    );
    camera.lookAt(0, 0, 0);
  });

  return null;
}

export default ThreeModel;
