import { useState } from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import L from "leaflet";
import { usermanagement } from "../../data/Data";
import UserModal from "../../modal/UserModal";
import { useTranslation } from "react-i18next";

const MiniMap = ({ userLocation }) => {
  const { t } = useTranslation();
  const [selectedUser, setSelectedUser] = useState(null);

  const ammanCoords = [31.9632, 35.9239];

  const getUserIcon = (avatar, risk, type) => {
    const dotColor =
      type === "high" ? "red" : type === "medium" ? "orange" : "yellow";

    return new L.DivIcon({
      html: `
      <div style="display: flex; flex-direction: column; align-items: center;">
        <div style="
          width: 42px;
          height: 42px;
          border-radius: 50%;
          overflow: hidden;
          border: 1px solid ${dotColor};
          box-shadow: 0 0 6px rgba(0,0,0,0.4);
          background: white;
        ">
          <img src="${avatar}" style="width: 100%; height: 100%; object-fit: cover;" />
        </div>
        <div style="
          margin-top: 4px;
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: ${dotColor};
          border: 2px solid white;
        "></div>
      </div>
    `,
      className: "",
      iconAnchor: [21, 21],
    });
  };

  return (
    <div className="relative w-full bg-[#0a0a0a] h-full rounded-2xl shadow-lg">
      <h2 className="absolute top-2 left-12 z-[1000] text-[#FFFFFFCC] text-lg font-medium px-3 py-1 rounded shadow">
        {t("Mini Map")}
      </h2>
      <MapContainer
        center={userLocation || ammanCoords}
        zoom={12}
        scrollWheelZoom={false}
        className="w-full h-full rounded-xl"
      >
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a> &copy; <a href="https://carto.com/">CARTO</a>'
          subdomains="abcd"
          maxZoom={25}
        />

        {/* User Markers */}
        {usermanagement.map((user) => (
          <Marker
            key={user.id}
            position={[user.location.lat, user.location.lng]}
            icon={getUserIcon(user.avatar, user.risk, user.type)}
            eventHandlers={{
              click: () => {
                setSelectedUser(user);
              },
            }}
          />
        ))}
      </MapContainer>

      {/* Legend */}
      <div className="absolute bottom-4 right-4 z-[1000] bg-[#1a1a1a]/90 border border-white/10 text-[#FFFFFFCC] p-3 rounded-md text-xs shadow-md space-y-1">
        <div className="flex items-center">
          <span className="w-3 h-3 bg-red-500 rounded-full mr-2"></span>{" "}
          {t("High Alert")}
        </div>
        <div className="flex items-center">
          <span className="w-3 h-3 bg-orange-400 rounded-full mr-2"></span>{" "}
          {t("Medium Alert")}
        </div>
        <div className="flex items-center">
          <span className="w-3 h-3 bg-yellow-300 rounded-full mr-2"></span> {t("Low Alert")}
        </div>
      </div>

      {/* Modal for selected user */}
      {selectedUser && (
        <UserModal user={selectedUser} onClose={() => setSelectedUser(null)} />
      )}
    </div>
  );
};

export default MiniMap;
