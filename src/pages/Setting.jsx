import AuditLog from "../components/setting/AuditLog";
import DeploymentMode from "../components/setting/DeploymentMode";
import RoleAssignment from "../components/setting/RoleAssigment";

export default function Setting() {
  return (
    <div className="2xl:mt-8">
      <div className="grid grid-cols-4 gap-4 mt-5 2xl:gap-9">
        <div className="col-span-3">
          <AuditLog />
        </div>

        <div className="col-span-1">
          <DeploymentMode />
        </div>
      </div>{" "}
      <br />
      <div className="2xl:mt-5">
        <RoleAssignment />
      </div>
    </div>
  );
}
