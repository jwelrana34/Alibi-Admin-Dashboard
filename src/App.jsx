import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import "./App.css";
import Setting from "./pages/Setting";
import Home from "./pages/Home";

// Lazy-loaded pages
const Login = lazy(() => import("./pages/Login"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Overview = lazy(() => import("./pages/Overview"));
const UserManageMent = lazy(() => import("./pages/UserManageMent"));
const LiveMonitoring = lazy(() => import("./pages/LiveMonitoring"));
const AIIntelligence = lazy(() => import("./pages/AIIntelligence"));
const UserInterection = lazy(() => import("./pages/UserInterection"));
const DroneDeploye = lazy(() => import("./pages/DroneDeploye"));
const Analysis = lazy(() => import("./pages/Analysis"));

// Loading UI Component
function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 animate-fade">
      <div className="text-center">
        <div className="loader mb-2"></div>
        <p className="text-white text-2xl">Loading...</p>
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingScreen />}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route index element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="overview" element={<Overview />} />
            <Route path="user_management" element={<UserManageMent />} />
            <Route path="live_monitoring" element={<LiveMonitoring />} />
            <Route path="ai_inteligence" element={<AIIntelligence />} />
            <Route path="user_interection" element={<UserInterection />} />
            <Route path="drone_deployee" element={<DroneDeploye />} />
            <Route path="analysis" element={<Analysis />} />
            <Route path="setting" element={<Setting />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
