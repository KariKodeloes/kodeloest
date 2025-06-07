
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Bilder from "./pages/Bilder";
import Foto from "./pages/Foto";
import Som from "./pages/Som";
import Design from "./pages/Design";
import OmMeg from "./pages/OmMeg";
import Admin from "./pages/Admin";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="min-h-screen flex flex-col" style={{ backgroundColor: 'rgb(255, 255, 255)' }}>
            <Navigation />
            <main className="flex-1" style={{ backgroundColor: 'rgb(255, 255, 255)' }}>
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
                <Route path="/som/redesign-og-gjenbruk" element={<Som />} />
                <Route path="/som/rett-fra-rullen" element={<Som />} />
                <Route path="/design" element={<Design />} />
                <Route path="/om-meg" element={<OmMeg />} />
                <Route path="/admin" element={<Admin />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
