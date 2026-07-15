import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { Routes, Route } from "react-router-dom";

import Layout from "./components/layout/Layout";

import Home from "./pages/Home";
import Flowers from "./pages/Collections";
import Services from "./pages/Services";
import Gallery from "./pages/Gallery";
import About from "./pages/About";
import Visit from "./pages/Visit";
import Reservation from "./pages/Reservation";
import NotFound from "./pages/NotFound";

export default function App() {
    return (
        <Routes>
            <Route element={<Layout />}>

                <Route index element={<Home />} />

                <Route path="/flowers" element={<Flowers />} />

                <Route path="/services" element={<Services />} />

                <Route path="/gallery" element={<Gallery />} />

                <Route path="/about" element={<About />} />

                <Route path="/visit" element={<Visit />} />

                <Route path="/reservation" element={<Reservation />} />

                <Route path="*" element={<NotFound />} />

            </Route>
        </Routes>
    );
}