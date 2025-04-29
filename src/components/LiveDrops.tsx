import React from "react";
import { ArrowRight } from "lucide-react";

interface Drop {
  id: string;
  username: string;
  itemName: string;
  itemImage: string;
  rarity: "common" | "uncommon" | "rare" | "mythical" | "legendary" | "ancient";
  caseName: string;
  time: string;
}

const mockDrops: Drop[] = [
  {
    id: "1",
    username: "XPlayer2023",
    itemName: "AWP | Азимов",
    itemImage: "https://images.unsplash.com/photo-1614294149010-950b698f72c0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    rarity: "rare",
    caseName: "Premium Case",
    time: "только что"
  },
  {
    id: "2",
    username: "GamerPro",
    itemName: "Karambit | Fade",
    itemImage: "https://images.unsplash.com/photo-1616683955261-ac7b9959a223?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    rarity: "legendary",
    caseName: "VIP Case",
    time: "2 мин назад"
  },
  {
    id: "3",
    username: "CSFan42",
    itemName: "AK-47 | Вулкан",
    itemImage: "https://images.unsplash.com/photo-1593002748822-ad8b65976032?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    rarity: "mythical",
    caseName: "Weapon Case",
    time: "5 мин назад"
  }
];

const LiveDrops: React.FC = () => {
  return (
    <div className="glass rounded-lg p-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-white">Последние дропы</h3>
        <a href="/top-drops" className="flex items-center text-sm text-gaming-accent hover:underline">
          Все дропы
          <ArrowRight className="ml-1 h-4 w-4" />
        </a>
      </div>
      
      <div className="space-y-3">
        {mockDrops.map((drop) => (
          <div key={drop.id} className="flex items-center gap-3 rounded-md bg-gaming-gray/20 p-2">
            <img
              src={drop.itemImage}
              alt={drop.itemName}
              className="h-12 w-12 rounded-md object-cover"
            />
            
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-white truncate">
                {drop.username}
              </p>
              <p className={`text-xs truncate rarity-${drop.rarity} inline-block px-1.5 py-0.5 rounded`}>
                {drop.itemName}
              </p>
            </div>
            
            <div className="text-right">
              <p className="text-xs text-white">{drop.caseName}</p>
              <p className="text-xs text-gray-400">{drop.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LiveDrops;
