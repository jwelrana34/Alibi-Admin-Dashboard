import ActiveUsers from "../components/userInterection/ActiveUser";
import ChatUI from "../components/userInterection/ChatUI";
import Sidebar from "../components/userInterection/Sidebar";

export default function UserInterection() {
  return (
    <div className="mt-5 min-[1920px]:mt-8">
      <div className="flex justify-between gap-5 min-[1920px]:gap-10 min-[1920px]:h-screen min-[1920px]:overflow-hidden min-[1920px]:mb-5">
        <div>
          <ActiveUsers />
        </div>

        <div className="w-full">
          <ChatUI />
        </div>
        <div>
          <Sidebar />
        </div>
      </div>
    </div>
  );
}
