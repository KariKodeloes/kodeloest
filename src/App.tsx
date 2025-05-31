
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import Bilder from "./pages/Bilder";
import Foto from "./pages/Foto";
import Som from "./pages/Som";
import Design from "./pages/Design";
import DIY from "./pages/DIY";
import OmMeg from "./pages/OmMeg";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="min-h-screen bg-background">
            <Navigation />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/bilder" element={<Bilder />} />
              <Route path="/bilder/akvareller" element={<Bilder />} />
              <Route path="/bilder/mixed-media" element={<Bilder />} />
              <Route path="/bilder/tegning" element={<Bilder />} />
              <Route path="/foto" element={<Foto />} />
              <Route path="/foto/ved-sjoen" element={<Foto />} />
              <Route path="/foto/i-fjellet" element={<Foto />} />
              <Route path="/foto/flora" element={<Foto />} />
              <Route path="/foto/byliv" element={<Foto />} />
              <Route path="/foto/dyr" element={<Foto />} />
              <Route path="/som" element={<Som />} />
              <Route path="/som/redesign" element={<Som />} />
              <Route path="/som/gjenbruk" element={<Som />} />
              <Route path="/som/rett-fra-rullen" element={<Som />} />
              <Route path="/design" element={<Design />} />
              <Route path="/diy" element={<DIY />} />
              <Route path="/om-meg" element={<OmMeg />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
