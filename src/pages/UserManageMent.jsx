import React from "react";
import UserManageMentTable from "../components/userManageMent";
import FilterControls from "../components/userManageMent/FilterControls";

export default function UserManageMent() {
  return (
    <div className="flex flex-col 2xl:gap-2 min-[1920px]:mt-4">
      <FilterControls />
      <UserManageMentTable />
    </div>
  );
}
