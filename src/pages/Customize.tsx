
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CustomizationPanel from "../components/CustomizationPanel";
import { Button } from "@/components/ui/button";

const Customize = () => {
  const [selectedOptions, setSelectedOptions] = useState<Record<string, string>>({
    Color: "#FFFFFF",
    Size: "M",
  });

  // Define customization options
  const customizationOptions = [
    {
      name: "Color",
      options: ["#FFFFFF", "#000000", "#FF0000", "#0000FF", "#FFFF00", "#00FF00"],
      type: "color" as const,
    },
    {
      name: "Size",
      options: ["XS", "S", "M", "L", "XL", "XXL"],
      type: "size" as const,
    },
    {
      name: "Custom Text",
      options: ["Custom Text"],
      type: "text" as const,
    }
  ];

  const handleOptionChange = (name: string, value: string) => {
    setSelectedOptions(prev => ({
      ...prev,
      [name]: value
    }));
  };

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
                <div className="w-3/4 h-3/4 relative flex items-center justify-center">
                  {/* T-shirt silhouette */}
                  <div 
                    className="w-full h-full"
                    style={{ 
                      backgroundColor: selectedOptions.Color || "#FFFFFF",
                      clipPath: "polygon(25% 0%, 75% 0%, 85% 15%, 85% 90%, 70% 100%, 30% 100%, 15% 90%, 15% 15%)",
                      position: "relative"
                    }}
                  >
                    {/* Display custom text if available */}
                    {selectedOptions["Custom Text"] && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <p className="text-center font-bold" style={{ 
                          color: selectedOptions.Color === "#FFFFFF" ? "#000000" : "#FFFFFF"
                        }}>
                          {selectedOptions["Custom Text"]}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-sm text-gray-400">
                  Selected size: {selectedOptions.Size || "None"}
                </p>
              </div>
            </div>
            
            <div>
              <CustomizationPanel 
                options={customizationOptions}
                selectedOptions={selectedOptions}
                onOptionChange={handleOptionChange}
              />
              
              <div className="mt-8">
                <Button className="w-full">
                  Add Customized Item to Cart
                </Button>
                <p className="text-sm text-gray-400 mt-2">
                  Your custom design will be handcrafted and shipped within 5-7 business days
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Customize;
