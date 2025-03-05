"use client";
import clsx from "clsx";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useFrame } from "@react-three/fiber";
import { easing } from "maath";
import { color } from "three/tsl";

export type ColorOption ={
    id: number;
    image: string;
    title: string;
    specs: string;
    color: string;
  }
export default function Title({
  changeMotorization,
  changeColor,
  chnageTiresRims,
  chnageSpoiler,
  Sidemirrors,
  Driverassistancesystems,
  titleColor,
  titleTiresRims,
  titleSpoiler,
  titleSidemirrors
}: any) {
  let [active, setactive] = useState("Motorization");
  const menuItems = [
    { text: "Motorization" },
    { text: "Color" },
    { text: "Tires & Rims" },
    { text: "Spoiler" },
    { text: "Side mirrors" },
    { text: "Driver assistance systems" },
    { text: "Your configuration" },
  ];

  //   Motorization
  let [Motorization, setMotorization] = useState(-1);
  const engineOptions = [
    {
      id: 1,
      image: "/1.webp",
      title: "AMG 4.0-Liter V8",
      specs: "370 kW(503 PS), 650 Nm",
      price: "+0,00€",
    },
    {
      id: 2,
      image: "/2.webp",
      title: "AMG 4.0-Liter V8 Biturbo",
      specs: "430 kW(585 PS), 750 Nm",
      price: "+11.386,50€",
    },
    {
      id: 3,
      image: "/3.webp",
      title: "AMG 5.5-Liter V8 Biturbo",
      specs: "470 kW(639 PS), 850 Nm",
      price: "+19.479,80€",
    },
  ];

  // Color
  let [Color, setColor] = useState(-1);

  const ColorOptions:ColorOption[] = [
    {
      id: 1,
      image: "/22.webp",
      title: "Arctic Pearl (White)",
      specs: "Pure and pristine sophistication.",
      color: "#fff",
    },
    {
      id: 2,
      image: "/33.webp",
      title: "Midnight Obsidian (Black)",
      specs: "Sleek and mysterious elegance.",
      color: "#2b323e",
    },
    {
      id: 3,
      image: "/44.webp",
      title: "Crimson Blaze (Red)",
      specs: "Vibrant and nature-inspired charm.",
      color: "#8a3435",
    },
    {
      id: 4,
      image: "/55.webp",
      title: "Sapphire Sky (Blue)",
      specs: "Cool and captivating serenity.",
      color: "#3c82be",
    },
  ];

  //TiresRims
  let [TiresRims, setTiresRims] = useState(-1);
  const TiresRimsOptions = [
    {
      id: 1,
      image: "/12.webp",
      title: "Arctic Pearl (White)",
      specs: "Pure and pristine sophistication.",
    },
    {
      id: 2,
      image: "/13.webp",
      title: "Midnight Obsidian (Black)",
      specs: "Sleek and mysterious elegance.",
    },
    {
      id: 3,
      image: "/14.webp",
      title: "Crimson Blaze (Red)",
      specs: "Vibrant and nature-inspired charm.",
    },
    {
      id: 4,
      image: "/15.webp",
      title: "Sapphire Sky (Blue)",
      specs: "Cool and captivating serenity.",
    },
  ];

  //Spoiler
  let [Spoiler, setSpoiler] = useState(-1);
  const SpoilerOptions = [
    {
      id: 1,
      image: "/16.webp",
      title: "AeroBlade",
      specs: "Dynamic airflow optimization for speed.",
      price: "+0,00€",
    },
    {
      id: 2,
      image: "/17.webp",
      title: "TurboSweep",
      specs: "Boosts top speed and stability.",
      price: "+1.350,50€",
    },
    {
      id: 3,
      image: "/18.webp",
      title: "StealthWing",
      specs: "Aggressive styling and improved downforce.",
      price: "+1.650,20€",
    },
  ];

  //Side mirrors
  let [SideMirrors, setSideMirrors] = useState(-1);
  const SideMirrorsOptions = [
    {
      id: 1,
      image: "/78.webp",
      title: "Standard mirrors",
      specs: "The standard manufacturer mirrors.",
      price: "+0,00€",
      color:"#fff"
    },
    {
      id: 2,
      image: "/79.webp",
      title: "Altered Carbon mirrors",
      specs: "A set of carbon Fiber Ultra light mirrors.",
      price: "+780,50€",
      color:"#000"
    },
  ];

  //Driver assistance systems
  let [DriverAssistanceSystems, setDriverAssistanceSystems] = useState(-1);
  const DriverAssistanceSystemsOptions = [
    {
      id: 1,
      image: "/112.svg",
      title: "3D-Surround-Soundsystem",
      specs: "High-End 3D-Surround-Soundsystem",
      price: "+5.926,20 €",
    },
    {
      id: 2,
      image: "/113.svg",
      title: "Driving Assistance Package",
      specs: "Driving Assistance Package",
      price: "+2.891,70 €",
    },
    {
      id: 3,
      image: "/114.svg",
      title: "Crash Assistant Pro",
      specs: "Active Information Anti-crash system",
      price: "+1.458,50 €",
    },
  ];
  useEffect(() => {
    active == "Motorization" && changeMotorization();
    active == "Color" && changeColor();

    active == "Tires & Rims" && chnageTiresRims();
    active == "Spoiler" && chnageSpoiler();
    active == "Side mirrors" && Sidemirrors();

    active == "Driver assistance systems" && Driverassistancesystems();

  }, [active]);

  useEffect(() => {
    
    titleColor(ColorOptions.filter(item=>item.id==Color)[0]);
  }, [Color]);

  useEffect(() => {
    
    titleTiresRims(TiresRimsOptions.filter(item=>item.id==TiresRims)[0]);
  }, [TiresRims]);

  useEffect(() => {
    
    titleSpoiler(SpoilerOptions.filter(item=>item.id==Spoiler)[0]);
  }, [Spoiler]);
  useEffect(() => {
    
    titleSidemirrors(SideMirrorsOptions.filter(item=>item.id==SideMirrors)[0]);
  }, [SideMirrors]);

  
  return (
    <div className=" animate__animated  animate__fadeInUp ">
      <div className="fixed left-10 top-10 flex bg-[#00000080] z-10 rounded-md py-[1px] px-[1px] text-[12px]">
        <div className="bg-black text-white px-3 rounded-sm py-1 mr-2">
          GT 63S - 4Door 2023
        </div>
        {menuItems.map((item) => (
          <div
            key={item.text}
            id={item.text}
            onClick={() => setactive(item.text)}
            className={clsx(
              "px-3 py-1  cursor-pointer rounded-sm  ",
              active == item.text ? "bg-white text-black" : "text-white"
            )}
          >
            {item.text}
          </div>
        ))}
      </div>

      {active == "Motorization" && (
        <div className="fixed left-10  top-[25%]   z-10  text-[12px] text-white flex flex-col">
          <div className="max-w-[420px] bg-[#00000080] rounded-xl p-3 mb-5">
            <div className="fs-radio_field-1 is-flex-vertical">
              <div className=" ">configuration</div>
              <div className="  text-2xl mb-2">AMG & Motorization</div>
              <div className="card-info-text is-subtitle is-breaking">
                AMG engines are renowned for their high-performance capabilities
                and exhilarating power. Designed with precision engineering and
                cutting-edge technology.
              </div>
            </div>
          </div>

          {engineOptions.map((engine) => (
            <div
              key={engine.id}
              onClick={() => setMotorization(engine.id)}
              className={clsx(
                "max-w-[420px]  rounded-xl p-3 mb-5 grid grid-cols-3 cursor-pointer",
                Motorization == engine.id
                  ? "bg-[#fff] text-black border-[2px] border-[#7facf3]"
                  : "bg-[#00000080] text-white border-[2px] border-transparent "
              )}
            >
              <div className="col-span-1">
                <Image
                  alt={engine.title}
                  src={engine.image}
                  width={120}
                  height={100}
                />
              </div>
              <div className="col-span-2">
                <div className="">{engine.title}</div>
                <div className="text-md mb-2">{engine.specs}</div>
                <div className="">
                  <p>{engine.price}</p>
                  <p>includes 16% Sales tax</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {active == "Color" && (
        <div className="fixed left-10  top-[25%]   z-10  text-[12px] text-white flex flex-col">
          <div className="max-w-[420px] bg-[#00000080] rounded-xl p-3 mb-5">
            <div className="fs-radio_field-1 is-flex-vertical">
              <div className=" ">configuration</div>
              <div className="  text-2xl mb-2">Color & Appearance</div>
              <div className="card-info-text is-subtitle is-breaking">
                Car color options allow you to personalize your vehicles and
                reflect your individual style. From classic shades to vibrant
                hues, these options offer a range of choices.
              </div>
            </div>
          </div>

          {ColorOptions.map((engine) => (
            <div
              key={engine.id}
              onClick={() => setColor(engine.id)}
              className={clsx(
                "max-w-[420px]  rounded-xl p-3 mb-5 flex cursor-pointer",
                Color == engine.id
                  ? "bg-[#fff] text-black border-[2px] border-[#7facf3]"
                  : "bg-[#00000080] text-white border-[2px] border-transparent "
              )}
            >
              <div className="mr-3">
                <Image
                  alt={engine.title}
                  src={engine.image}
                  width={70}
                  height={70}
                />
              </div>
              <div className="">
                <div className="">{engine.title}</div>
                <div className="text-md mb-2">{engine.specs}</div>
                <div className="">
                  <p>includes 16% Sales tax</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {active == "Tires & Rims" && (
        <div className="fixed left-10  top-[25%]   z-10  text-[12px] text-white flex flex-col">
          <div className="max-w-[420px] bg-[#00000080] rounded-xl p-3 mb-5">
            <div className="fs-radio_field-1 is-flex-vertical">
              <div className=" ">configuration</div>
              <div className="  text-2xl mb-2">Tires & Rims</div>
              <div className="card-info-text is-subtitle is-breaking">
                The manufacturer supplies a set of winter and summer tires with
                every new car. The vehicle is delivered with the appropriate
                seasonal tires.
              </div>
            </div>
          </div>

          {TiresRimsOptions.map((engine) => (
            <div
              key={engine.id}
              onClick={() => setTiresRims(engine.id)}
              className={clsx(
                "max-w-[420px]  rounded-xl p-3 mb-5 flex cursor-pointer",
                TiresRims == engine.id
                  ? "bg-[#fff] text-black border-[2px] border-[#7facf3]"
                  : "bg-[#00000080] text-white border-[2px] border-transparent "
              )}
            >
              <div className="">
                <Image
                  alt={engine.title}
                  src={engine.image}
                  width={70}
                  height={70}
                />
              </div>
              <div className="">
                <div className="">{engine.title}</div>
                <div className="text-md mb-2">{engine.specs}</div>
                <div className="">
                  <p>includes 16% Sales tax</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {active == "Spoiler" && (
        <div className="fixed left-10  top-[25%]   z-10  text-[12px] text-white flex flex-col">
          <div className="max-w-[420px] bg-[#00000080] rounded-xl p-3 mb-5">
            <div className="fs-radio_field-1 is-flex-vertical">
              <div className=" ">configuration</div>
              <div className="  text-2xl mb-2">Select Spoilers</div>
            </div>
          </div>

          {SpoilerOptions.map((engine) => (
            <div
              key={engine.id}
              onClick={() => setSpoiler(engine.id)}
              className={clsx(
                "max-w-[420px]  rounded-xl p-3 mb-5 grid grid-cols-3 gap-3 cursor-pointer",
                Spoiler == engine.id
                  ? "bg-[#fff] text-black border-[2px] border-[#7facf3]"
                  : "bg-[#00000080] text-white border-[2px] border-transparent "
              )}
            >
              <div className="col-span-1">
                <img
                  alt={engine.title}
                  src={engine.image}
                  className="h-[80px] object-center"
                />
              </div>
              <div className="col-span-2">
                <div className="">{engine.title}</div>
                <div className="text-md mb-2">{engine.specs}</div>
                <div className="">
                  <p>{engine.price}</p>
                  <p>includes 16% Sales tax</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {active == "Side mirrors" && (
        <div className="fixed left-10  top-[25%]   z-10  text-[12px] text-white flex flex-col">
          <div className="max-w-[420px] bg-[#00000080] rounded-xl p-3 mb-5">
            <div className="fs-radio_field-1 is-flex-vertical">
              <div className=" ">configuration</div>
              <div className="  text-2xl mb-2">Select Side Mirrors</div>
            </div>
          </div>

          {SideMirrorsOptions.map((engine) => (
            <div
              key={engine.id}
              onClick={() => setSideMirrors(engine.id)}
              className={clsx(
                "max-w-[420px]  rounded-xl p-3 mb-5 grid grid-cols-3 gap-3 cursor-pointer",
                SideMirrors == engine.id
                  ? "bg-[#fff] text-black border-[2px] border-[#7facf3]"
                  : "bg-[#00000080] text-white border-[2px] border-transparent "
              )}
            >
              <div className="col-span-1">
                <img
                  alt={engine.title}
                  src={engine.image}
                  className="h-[80px] object-center"
                />
              </div>
              <div className="col-span-2">
                <div className="">{engine.title}</div>
                <div className="text-md mb-2">{engine.specs}</div>
                <div className="">
                  <p>{engine.price}</p>
                  <p>includes 16% Sales tax</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {active == "Driver assistance systems" && (
        <div className="fixed left-10  top-[25%]   z-10  text-[12px] text-white flex flex-col">
          <div className="max-w-[420px] bg-[#00000080] rounded-xl p-3 mb-5">
            <div className="fs-radio_field-1 is-flex-vertical">
              <div className=" ">configuration</div>
              <div className="  text-2xl mb-2">Driver Assistence System</div>
              <div className="card-info-text is-subtitle is-breaking">
                Driver assistance systems are advanced technologies that enhance
                driving safety and convenience in various aspects of vehicle
                operation.
              </div>
            </div>
          </div>

          {DriverAssistanceSystemsOptions.map((engine) => (
            <div
              key={engine.id}
              onClick={() => setDriverAssistanceSystems(engine.id)}
              className={clsx(
                "max-w-[420px]  rounded-xl p-3 mb-5 grid grid-cols-2 mb-1 gap-3 cursor-pointer",
                DriverAssistanceSystems == engine.id
                  ? "bg-[#fff] text-black border-[2px] border-[#7facf3]"
                  : "bg-[#00000080] text-white border-[2px] border-transparent "
              )}
            >
              <div className="col-span-1 bg-[#323437] flex flex-col items-center justify-center">
                <img
                  alt={engine.title}
                  src={engine.image}
                  className="w-[50px] h-[50px] object-center"
                />
              </div>
              <div className="col-span-1">
                <div className="line-clamp-2 ">{engine.title}</div>
                <div className="text-md mb-2 line-clamp-2 ">{engine.specs}</div>
                <div className="">
                  <p>{engine.price}</p>
                  <p>includes 16% Sales tax</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {active == "Your configuration" && (
        <div className="fixed left-10  top-[25%]   z-10  text-[12px] text-white flex flex-col">
          <div className="max-w-[420px] bg-[#00000080] rounded-xl p-3 mb-5">
            <div className="fs-radio_field-1 is-flex-vertical">
              <div className=" ">configuration</div>
              <div className="  text-2xl mb-2">AMG GT 63S - 4Door 2023</div>
              <div className=" text-[12px]">
                The AMG GT 4-door 63 S is a luxurious and high-performance
                sports car that combines the comfort of a sedan with the
                exhilaration of a sports coupe. With its powerful engine,
                advanced technology, and stunning design, it offers an
                extraordinary driving experience that is both refined and
                thrilling.
              </div>
            </div>
          </div>

          <div className="max-w-[420px] bg-[#00000080] rounded-xl p-3 mb-5 text-[12px]">
            <div className="fs-radio_field-1 is-flex-vertical">
              <div className="text-[12px] mb-3">
                Mercedes-AMG GT, an excellent choice. Here you will find
                everything about your new vehicle at a glance:
              </div>
              <div className="grid grid-cols-2 mb-1">
                <div>Fuel Type</div>
                <div>Super Plus</div>
              </div>
              <div className="grid grid-cols-2 mb-1">
                <div>Cylinder</div>
                <div>8</div>
              </div>
              <div className="grid grid-cols-2 mb-1">
                <div>Displacement</div>
                <div>2.999 cc</div>
              </div>

              <div className="grid grid-cols-2 mb-1">
                <div>Power</div>
                <div>454 kW + up to 16 kW (617hp + 22hp)</div>
              </div>

              <div className="grid grid-cols-2 mb-1">
                <div>Transmission</div>
                <div>AMG SPEEDSHIFT TCT 9G</div>
              </div>
              <div className="grid grid-cols-2 mb-1">
                <div>Acceleration</div>
                <div>0-100 km/h in 2.3 sec</div>
              </div>
              <div className="grid grid-cols-2  pb-5 border-b-[1px] border-[#fff]">
                <div>Top Speed</div>
                <div>315 km/h</div>
              </div>

              <div className="grid grid-cols-2  pt-5 mb-5">
                <div>Total Price</div>
                <div>Private customer 230.616,05€</div>
              </div>

              <div className="text-[12px] mb-3">
                Fuel consumption weighted, combined [1]7.9 l/100km; Electricity
                consumption weighted, combined [1]12.0 kWh/100km. CO₂ emissions
                weighted, combined [1]180 g/km Electric range, urban (EAER)
                [1]13 km Exhaust emission standard [1]Euro 6d-ISC-FCM
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
