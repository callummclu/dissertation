import { BrowserRouter, Routes, Route } from "react-router-dom";
import { EspruinoSplashPage } from "./pages/espruino-splash";
import { PeerPage } from "./pages/peer";

export const Routing = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<EspruinoSplashPage/>}/>
            <Route path="peer" element={<PeerPage/>}/>
        </Routes>
    </BrowserRouter>
)