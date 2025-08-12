import React, { useState } from "react";
import MapSection from "../components/droneDeploy/MapSection";
import DroneCommandCard from "../components/droneDeploy/DroneCommand";
import DroneMissionLogs from "../components/droneDeploy/DroneMissileLog";

export default function DroneDeploye() {
  const [selectedUser, setSelectedUser] = useState(null);
  return (
    <div className="mt-5 2xl:mt-8">
      <div className="grid grid-cols-3 gap-6 2xl:gap-9 2xl:mb-10">
        <div className="col-span-2">
          <MapSection />
        </div>

        <div className="col-span-1">
          <DroneCommandCard
            dronePosition={[31.9216, 35.85]}
            targetPosition={[31.9806, 35.9934]}
            userLocation={[31.9632, 35.9239]}
          />
        </div>
      </div>

      <div className="mt-5 mb-10 2xl:mt-7">
        <DroneMissionLogs />
      </div>
    </div>
  );
}
