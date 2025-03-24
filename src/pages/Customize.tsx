
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CustomizationPanel from "../components/CustomizationPanel";

const Customize = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-white">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-28">
        <div className="mb-10">
          <h1 className="text-4xl font-bold mb-6">Customize Your Clothing</h1>
          <p className="text-lg mb-8">
            Create your own unique design with our customization tools
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-gray-800 rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-4">Preview</h2>
              <div className="aspect-square bg-gray-700 rounded-lg flex items-center justify-center">
                <p className="text-gray-400">Your design preview</p>
              </div>
            </div>
            
            <CustomizationPanel />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Customize;
