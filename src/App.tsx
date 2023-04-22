import { Routes, Route } from "react-router-dom";
import { ListClient } from "./screens/client/ListClients";
import { Toaster } from "react-hot-toast";
import { ClientPerfils } from "./screens/client/ClientPerfils";

export default function App() {
  return (
    <>
      <Toaster />
      <Routes>
        <Route path="/" element={<ListClient />} />
        <Route path="/perfil/:clientId" element={<ClientPerfils />} />
        {/* <Route
        path="/address/:clientId"
        element={
          
            <DayOfMonth />
          
        }
      /> */}
      </Routes>
    </>
  );
}
