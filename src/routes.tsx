import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import ChatUI from "./pages/ChatUI";
import NotFound from "./pages/NotFound";

export default (
  <Routes>
    <Route path="/" element={<ChatUI />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
);
