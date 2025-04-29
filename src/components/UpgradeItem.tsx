import React from "react";

interface Skin {
  id: string;
  name: string;
  image: string;
  price: number;
  rarity: "common" | "uncommon" | "rare" | "mythical" | "legendary" | "ancient";
  wear: string;
}

interface UpgradeItemProps {
  skin: Skin;
  onClick: () => void;
}

const UpgradeItem: React.FC<UpgradeItemProps> = ({ skin, onClick }) => {
  const rarityColorMap = {
    common: "border-gray-400",
    uncommon: "border-blue-400",
    rare: "border-purple-400",
    mythical: "border-pink-400",
    legendary: "border-red-400",
    ancient: "border-yellow-400"
  };
  
  const rarityBorderClass = rarityColorMap[skin.rarity] || "border-gray-400";
  
  return (
    <div 
      className={`border-2 ${rarityBorderClass} rounded-lg p-3 cursor-pointer transition-all hover:shadow-md hover:shadow-gaming-accent/20 hover:-translate-y-1 bg-gaming-gray/20`}
      onClick={onClick}
    >
      <div className="flex flex-col gap-2">
        <img 
          src={skin.image} 
          alt={skin.name} 
          className="w-full h-32 object-cover rounded-md mb-2"
        />
        <div>
          <h3 className="font-medium text-sm truncate" title={skin.name}>
            {skin.name}
          </h3>
          <p className="text-xs text-muted-foreground">{skin.wear}</p>
          <p className="text-gaming-accent font-semibold mt-1">{skin.price} ₽</p>
        </div>
      </div>
    </div>
  );
};

export default UpgradeItem;
