"use client";
import React from "react";
import ThreeModel from "./ThreeModel";
import { useProgress } from "@react-three/drei";

function Loader() {
  const { progress } = useProgress();
  const [show, setShow] = React.useState(true);
  const [fakeProgress, setFakeProgress] = React.useState(0);

  React.useEffect(() => {
    // 创建一个5秒的假进度
    const duration = 5000; // 5秒
    const interval = 50; // 每50ms更新一次
    const step = 100 / (duration / interval);
    
    const timer = setInterval(() => {
      setFakeProgress(prev => {
        const next = prev + step;
        return next > 100 ? 100 : next;
      });
    }, interval);

    return () => clearInterval(timer);
  }, []);

  React.useEffect(() => {
    // 当真实进度为100且假进度也为100时，延迟隐藏loader
    if (progress === 100 && fakeProgress >= 100) {
      const timer = setTimeout(() => setShow(false), 300);
      return () => clearTimeout(timer);
    }
  }, [progress, fakeProgress]);

  if (!show) return null;

  return (
    <div className="w-[100vw] h-[100vh] fixed top-0 left-0 bg-black z-30 flex items-center justify-center">
      <div className="w-[80%] max-w-[400px]">
        <div className="text-white text-xl mb-4 text-center">
          加载中... {Math.min(progress, fakeProgress).toFixed(0)}%
        </div>
        <div className="w-full bg-gray-700 rounded-full h-2.5">
          <div
            className="bg-white h-2.5 rounded-full transition-all duration-300 ease-out"
            style={{
              width: `${Math.min(progress, fakeProgress)}%`,
            }}
          />
        </div>
      </div>
    </div>
  );
}
export default function App() {
  return (
    <div className="Home relative">
        <Loader />
      <ThreeModel />
    </div>
  );
}
