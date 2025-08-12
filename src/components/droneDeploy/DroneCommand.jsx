import { useState } from "react";
import {
  MapContainer,
  Marker,
  Polyline,
  TileLayer,
  Circle,
} from "react-leaflet";
import L from "leaflet";
import droneIconUrl from "../../assets/images/Group 754.png";
import targetIconUrl from "../../assets/images/image1.png";
import { useTranslation } from "react-i18next";

// Helper function: create icon with label
const createImageIconWithLabel = (imgUrl, label = "", size = 20) => {
  return new L.DivIcon({
    html: `
      <div style="display: flex; flex-direction: column; align-items: center;">
        <img src="${imgUrl}" style="width: ${size}px; height: ${size}px; border-radius: 50%;" />
        <div style="color: white; font-size: 10px; margin-top: 3px; text-align: center;">
          ${label}
        </div>
      </div>
    `,
    className: "",
    iconSize: [size, size + 18],
  });
};

// Helper: Smoothly move from currentPos to targetPos
const animateMovement = (currentPos, targetPos, setPos, speed = 0.0005) => {
  let [lat, lng] = currentPos;
  const [targetLat, targetLng] = targetPos;

  const interval = setInterval(() => {
    const latDiff = targetLat - lat;
    const lngDiff = targetLng - lng;

    // Stop when close enough
    if (Math.abs(latDiff) < 0.0001 && Math.abs(lngDiff) < 0.0001) {
      setPos([targetLat, targetLng]);
      clearInterval(interval);
      return;
    }

    // Move fractionally towards target
    lat += latDiff * speed * 100;
    lng += lngDiff * speed * 100;
    setPos([lat, lng]);
  }, 20);
};

export default function DroneCommandCard({
  dronePosition,
  targetPosition,
  userLocation,
}) {
  const [dronePos, setDronePos] = useState(dronePosition);
  const [lockTarget, setLockTarget] = useState(false);
  const { t } = useTranslation();

  const droneLeafletIcon = createImageIconWithLabel(
    droneIconUrl,
    t("B21 Bomber"),
    25
  );
  const targetLeafletIcon = createImageIconWithLabel(
    targetIconUrl,
    t("Yousuf Barkani"),
    25
  );

  const handleLaunch = () => {
    alert(t("🚀 Drone launched!"));
    animateMovement(dronePos, targetPosition, setDronePos, 0.001);
  };

  const handleReturn = () => {
    alert(t("↩ Returning to base..."));
    animateMovement(dronePos, userLocation, setDronePos, 0.001);
  };

  const handleLock = () => {
    alert(t("🎯 Target locked!"));
    setLockTarget(true);
  };

  return (
    <div className="bg-[#0F131C] p-2.5 border border-gray-800 rounded-lg text-white font-sans shadow-lg">
      <div className="w-full h-61 min-[1520px]:h-64 min-[1920px]:h-85 mb-2 rounded-lg overflow-hidden">
        <MapContainer
          center={userLocation}
          zoom={11}
          style={{
            height: "100%",
            width: "100%",
            backgroundColor: "#0F131CCC",
            color: "white",
          }}
          scrollWheelZoom={false}
        >
          <TileLayer
            url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
            attribution='&copy; <a href="https://carto.com/">CARTO</a>'
          />

          <Marker position={dronePos} icon={droneLeafletIcon} />
          <Marker position={targetPosition} icon={targetLeafletIcon} />

          {lockTarget && (
            <Circle center={targetPosition} radius={1000} color="red" />
          )}

          <Polyline
            positions={[dronePos, targetPosition]}
            color="white"
            weight={2}
            opacity={0.7}
          />
        </MapContainer>
      </div>

      {/* Commands */}
      <div className="border-t-2 border-gray-800 pt-5 min-[1920px]:pt-7">
        <p className="text-center text-[#FFFFFFCC] font-medium text-lg mb-3 border-t-2 border-b border-gray-800 py-2">
          {t("Command")}
        </p>
        <div className="flex flex-col gap-2 min-[1920px]:gap-3 text-[#FFFFFFB2] font-medium">
          <button
            onClick={handleLaunch}
            className="bg-[#17202C] hover:bg-[#232C3A] py-2 min-[1920px]:py-3 rounded-md text-sm border border-gray-700"
          >
            {t("Launch")}
          </button>
          <button
            onClick={handleReturn}
            className="bg-[#17202C] hover:bg-[#232C3A] py-2 min-[1920px]:py-3 rounded-md text-sm border border-gray-700"
          >
            {t("Return")}
          </button>
          <button
            onClick={handleLock}
            className="bg-[#17202C] hover:bg-[#232C3A] py-2 min-[1920px]:py-3 rounded-md text-sm border border-gray-700"
          >
            {t("Lock Target")}
          </button>
        </div>
      </div>
    </div>
  );
}
