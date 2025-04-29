import React from "react";
import { Button } from "@/components/ui/button";

export interface Item {
  name: string;
  rarity: "common" | "uncommon" | "rare" | "mythical" | "legendary" | "ancient";
  image: string;
  price: number;
}

export interface CaseProps {
  id: string;
  name: string;
  price: number;
  image: string;
  items: Item[];
}

const CaseCard: React.FC<CaseProps> = ({ id, name, price, image }) => {
  return (
    <div className="group relative overflow-hidden rounded-lg border border-gaming-accent/30 bg-gaming-secondary hover:border-gaming-accent/60 transition-all duration-300">
      <div className="flex flex-col p-4">
        {/* Case image with glow effect */}
        <div className="relative mb-4 overflow-hidden rounded-md bg-gaming-gray/50 p-4 flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-b from-gaming-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <img
            src={image || "https://images.unsplash.com/photo-1605418900965-dc739ecbf427?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"}
            alt={name}
            className="h-32 w-auto object-contain transition-transform duration-500 group-hover:scale-110 group-hover:animate-float"
          />
        </div>

        {/* Case details */}
        <div className="flex flex-col gap-2">
          <h3 className="font-medium text-white group-hover:text-gaming-accent transition-colors duration-300">
            {name}
          </h3>
          <div className="flex items-center justify-between">
            <span className="text-lg font-bold text-gaming-neon">
              {price} ₽
            </span>
            <Button 
              size="sm" 
              className="bg-gaming-accent hover:bg-gaming-accent/80"
            >
              Открыть
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseCard;
