import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import Header from "@/components/Header";
import UpgradeItem from "@/components/UpgradeItem";
import { Progress } from "@/components/ui/progress";
import { ArrowRight, RefreshCw, ChevronDown, ChevronUp, ShieldCheck } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface Skin {
  id: string;
  name: string;
  image: string;
  price: number;
  rarity: "common" | "uncommon" | "rare" | "mythical" | "legendary" | "ancient";
  wear: "Прямо с завода" | "Немного поношенное" | "После полевых" | "Поношенное" | "Закаленное в боях";
}

const Upgrades = () => {
  const [selectedMultiplier, setSelectedMultiplier] = useState<number>(2);
  const [selectedItemPrice, setSelectedItemPrice] = useState<number>(0);
  const [targetItemPrice, setTargetItemPrice] = useState<number>(0);
  const [winChance, setWinChance] = useState<number>(45);
  const [isSelectingSkin, setIsSelectingSkin] = useState<boolean>(false);
  const [isSelectingTarget, setIsSelectingTarget] = useState<boolean>(false);
  const [selectedSkin, setSelectedSkin] = useState<Skin | null>(null);
  const [targetSkin, setTargetSkin] = useState<Skin | null>(null);

  // Mock data
  const userSkins: Skin[] = [
    {
      id: "1",
      name: "USP-S | Кортекс",
      image: "https://images.unsplash.com/photo-1614755940875-091a92635273?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      price: 350,
      rarity: "uncommon",
      wear: "Прямо с завода"
    },
    {
      id: "2",
      name: "Glock-18 | Градиент",
      image: "https://images.unsplash.com/photo-1595238631101-2fb3c4acff88?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      price: 280,
      rarity: "common",
      wear: "Немного поношенное"
    },
    {
      id: "3",
      name: "M4A4 | Азимов",
      image: "https://images.unsplash.com/photo-1593002748822-ad8b65976032?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      price: 1400,
      rarity: "mythical",
      wear: "После полевых"
    }
  ];

  const targetSkins: Skin[] = [
    {
      id: "4",
      name: "AWP | Азимов",
      image: "https://images.unsplash.com/photo-1614294149010-950b698f72c0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      price: 2800,
      rarity: "rare",
      wear: "Прямо с завода"
    },
    {
      id: "5",
      name: "Butterfly Knife | Градиент",
      image: "https://images.unsplash.com/photo-1616683955261-ac7b9959a223?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      price: 7000,
      rarity: "legendary",
      wear: "Прямо с завода"
    },
    {
      id: "6",
      name: "AK-47 | Вулкан",
      image: "https://images.unsplash.com/photo-1608346128025-1896b97a6fa7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      price: 1400,
      rarity: "mythical",
      wear: "Немного поношенное"
    }
  ];

  const updateChanceAndPrice = (skinPrice: number, multiplier: number) => {
    const targetPrice = Math.round(skinPrice * multiplier);
    setSelectedItemPrice(skinPrice);
    setTargetItemPrice(targetPrice);
    
    // Рассчитываем шанс победы обратно пропорционально множителю
    // Чем выше множитель, тем ниже шанс
    const baseChance = 95; // Максимальный возможный шанс
    const calculatedChance = Math.round(baseChance / multiplier);
    setWinChance(calculatedChance);
  };

  const handleMultiplierClick = (multiplier: number) => {
    setSelectedMultiplier(multiplier);
    if (selectedSkin) {
      updateChanceAndPrice(selectedSkin.price, multiplier);
    }
  };

  const handleSkinSelect = (skin: Skin) => {
    setSelectedSkin(skin);
    setIsSelectingSkin(false);
    updateChanceAndPrice(skin.price, selectedMultiplier);
  };

  const handleTargetSelect = (skin: Skin) => {
    setTargetSkin(skin);
    setIsSelectingTarget(false);
    // Обновляем множитель на основе выбранного целевого скина
    if (selectedSkin) {
      const newMultiplier = Math.round((skin.price / selectedSkin.price) * 10) / 10;
      setSelectedMultiplier(newMultiplier);
      updateChanceAndPrice(selectedSkin.price, newMultiplier);
    }
  };

  return (
    <div className="min-h-screen bg-gaming-secondary text-white">
      <Header />
      
      <main className="container py-8">
        <h1 className="text-3xl font-bold mb-8 flex items-center">
          <span className="text-gaming-accent">Апгрейд</span> скинов
          <Badge className="ml-3 bg-gaming-accent/20 text-gaming-accent border-gaming-accent/30">NEW</Badge>
        </h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Левая колонка - настройки апгрейда */}
          <div className="lg:col-span-2 space-y-6">
            <div className="glass rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4">Настройки апгрейда</h2>
              
              {/* Множители */}
              <div className="mb-6">
                <h3 className="text-sm text-muted-foreground mb-2">Выберите множитель</h3>
                <div className="grid grid-cols-3 gap-4">
                  <Button 
                    variant={selectedMultiplier === 2 ? "default" : "outline"} 
                    className={selectedMultiplier === 2 ? "bg-gaming-accent" : "border-gaming-accent/30 hover:bg-gaming-accent/20"}
                    onClick={() => handleMultiplierClick(2)}
                  >
                    x2
                  </Button>
                  <Button 
                    variant={selectedMultiplier === 5 ? "default" : "outline"} 
                    className={selectedMultiplier === 5 ? "bg-gaming-accent" : "border-gaming-accent/30 hover:bg-gaming-accent/20"}
                    onClick={() => handleMultiplierClick(5)}
                  >
                    x5
                  </Button>
                  <Button 
                    variant={selectedMultiplier === 10 ? "default" : "outline"} 
                    className={selectedMultiplier === 10 ? "bg-gaming-accent" : "border-gaming-accent/30 hover:bg-gaming-accent/20"}
                    onClick={() => handleMultiplierClick(10)}
                  >
                    x10
                  </Button>
                </div>
              </div>
              
              {/* Выбор предметов для апгрейда */}
              <div className="flex flex-col md:flex-row gap-6 mb-6">
                <div className="flex-1">
                  <h3 className="text-sm text-muted-foreground mb-2">Ваш предмет</h3>
                  <div 
                    className="border border-gaming-accent/30 rounded-lg p-4 hover:border-gaming-accent/60 transition-colors cursor-pointer"
                    onClick={() => setIsSelectingSkin(true)}
                  >
                    {selectedSkin ? (
                      <div className="flex items-center gap-3">
                        <img src={selectedSkin.image} alt={selectedSkin.name} className="w-16 h-16 rounded object-cover" />
                        <div>
                          <p className="font-medium">{selectedSkin.name}</p>
                          <p className="text-gaming-accent">{selectedSkin.price} ₽</p>
                          <p className="text-xs text-muted-foreground">{selectedSkin.wear}</p>
                        </div>
                      </div>
                    ) : (
                      <div className="text-center py-4 text-muted-foreground">
                        <p>Выберите предмет для апгрейда</p>
                        <ChevronDown className="w-4 h-4 mx-auto mt-1" />
                      </div>
                    )}
                  </div>
                </div>
                
                <div className="flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-gaming-accent/20 flex items-center justify-center">
                    <ArrowRight className="w-5 h-5 text-gaming-accent" />
                  </div>
                </div>
                
                <div className="flex-1">
                  <h3 className="text-sm text-muted-foreground mb-2">Целевой предмет</h3>
                  <div 
                    className="border border-gaming-accent/30 rounded-lg p-4 hover:border-gaming-accent/60 transition-colors cursor-pointer"
                    onClick={() => setIsSelectingTarget(true)}
                  >
                    {targetSkin ? (
                      <div className="flex items-center gap-3">
                        <img src={targetSkin.image} alt={targetSkin.name} className="w-16 h-16 rounded object-cover" />
                        <div>
                          <p className="font-medium">{targetSkin.name}</p>
                          <p className="text-gaming-accent">{targetSkin.price} ₽</p>
                          <p className="text-xs text-muted-foreground">{targetSkin.wear}</p>
                        </div>
                      </div>
                    ) : (
                      <div className="text-center py-4 text-muted-foreground">
                        <p>Выберите целевой предмет</p>
                        <ChevronDown className="w-4 h-4 mx-auto mt-1" />
                      </div>
                    )}
                  </div>
                </div>
              </div>
              
              {/* Информация об апгрейде */}
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Множитель:</span>
                  <span className="font-medium text-gaming-accent">x{selectedMultiplier.toFixed(1)}</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Стоимость вашего предмета:</span>
                  <span className="font-medium">{selectedItemPrice} ₽</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Стоимость целевого предмета:</span>
                  <span className="font-medium">{targetItemPrice} ₽</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Шанс на победу:</span>
                  <span className="font-medium text-gaming-accent">{winChance}%</span>
                </div>
                
                <div>
                  <span className="text-sm text-muted-foreground">Шанс выигрыша:</span>
                  <Progress value={winChance} className="h-2 mt-1 bg-gaming-gray/30" indicatorClassName="bg-gaming-accent" />
                </div>
              </div>
              
              {/* Кнопка апгрейда */}
              <Button 
                className="w-full mt-6 bg-gaming-accent hover:bg-gaming-accent/80 py-6 text-lg"
                disabled={!selectedSkin}
              >
                <RefreshCw className="mr-2 h-5 w-5 animate-spin-slow" /> 
                Апгрейд {selectedSkin ? `(${selectedSkin.price} ₽ → ${targetItemPrice} ₽)` : ""}
              </Button>
            </div>
            
            {/* Правила апгрейда */}
            <div className="glass rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                <ShieldCheck className="w-5 h-5 mr-2 text-gaming-accent" />
                Правила апгрейда
              </h2>
              
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex gap-2">
                  <ChevronRight className="flex-shrink-0 w-4 h-4 text-gaming-accent" />
                  <span>Выберите предмет, который хотите улучшить и желаемый множитель.</span>
                </li>
                <li className="flex gap-2">
                  <ChevronRight className="flex-shrink-0 w-4 h-4 text-gaming-accent" />
                  <span>Шанс на выигрыш зависит от выбранного множителя – чем выше множитель, тем ниже шанс.</span>
                </li>
                <li className="flex gap-2">
                  <ChevronRight className="flex-shrink-0 w-4 h-4 text-gaming-accent" />
                  <span>В случае выигрыша вы получите предмет, стоимость которого примерно равна стоимости вашего предмета, умноженной на выбранный коэффициент.</span>
                </li>
                <li className="flex gap-2">
                  <ChevronRight className="flex-shrink-0 w-4 h-4 text-gaming-accent" />
                  <span>В случае проигрыша вы теряете предмет, который использовали для апгрейда.</span>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Правая колонка - история апгрейдов */}
          <div>
            <div className="glass rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4">Последние апгрейды</h2>
              
              <div className="space-y-4">
                {/* История апгрейдов */}
                <div className="border border-gaming-accent/20 rounded-lg p-3">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">UnluckyPlayer</span>
                    <span className="text-xs text-red-500">Проигрыш</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <img src="https://images.unsplash.com/photo-1593002748822-ad8b65976032?w=500" alt="Skin" className="w-12 h-12 rounded object-cover" />
                    <ArrowRight className="w-4 h-4 text-muted-foreground" />
                    <img src="https://images.unsplash.com/photo-1616683955261-ac7b9959a223?w=500" alt="Target skin" className="w-12 h-12 rounded object-cover opacity-50" />
                    <div className="ml-auto text-right">
                      <p className="text-xs text-muted-foreground">Множитель: x10</p>
                      <p className="text-xs text-muted-foreground">Шанс: 10%</p>
                    </div>
                  </div>
                </div>
                
                <div className="border border-gaming-accent/20 rounded-lg p-3">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">LuckyGamer</span>
                    <span className="text-xs text-green-500">Выигрыш</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <img src="https://images.unsplash.com/photo-1595238631101-2fb3c4acff88?w=500" alt="Skin" className="w-12 h-12 rounded object-cover" />
                    <ArrowRight className="w-4 h-4 text-muted-foreground" />
                    <img src="https://images.unsplash.com/photo-1614294149010-950b698f72c0?w=500" alt="Target skin" className="w-12 h-12 rounded object-cover" />
                    <div className="ml-auto text-right">
                      <p className="text-xs text-muted-foreground">Множитель: x5</p>
                      <p className="text-xs text-muted-foreground">Шанс: 20%</p>
                    </div>
                  </div>
                </div>
                
                <div className="border border-gaming-accent/20 rounded-lg p-3">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">ProGamer</span>
                    <span className="text-xs text-green-500">Выигрыш</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <img src="https://images.unsplash.com/photo-1614755940875-091a92635273?w=500" alt="Skin" className="w-12 h-12 rounded object-cover" />
                    <ArrowRight className="w-4 h-4 text-muted-foreground" />
                    <img src="https://images.unsplash.com/photo-1608346128025-1896b97a6fa7?w=500" alt="Target skin" className="w-12 h-12 rounded object-cover" />
                    <div className="ml-auto text-right">
                      <p className="text-xs text-muted-foreground">Множитель: x2</p>
                      <p className="text-xs text-muted-foreground">Шанс: 45%</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Модальное окно выбора скина */}
        {isSelectingSkin && (
          <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
            <div className="bg-gaming-secondary border border-gaming-accent/30 rounded-lg p-6 max-w-2xl w-full max-h-[80vh] overflow-auto">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold">Выберите ваш предмет</h3>
                <Button variant="ghost" size="icon" onClick={() => setIsSelectingSkin(false)}>
                  <X className="h-5 w-5" />
                </Button>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {userSkins.map((skin) => (
                  <UpgradeItem 
                    key={skin.id} 
                    skin={skin} 
                    onClick={() => handleSkinSelect(skin)} 
                  />
                ))}
              </div>
            </div>
          </div>
        )}
        
        {/* Модальное окно выбора целевого скина */}
        {isSelectingTarget && (
          <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
            <div className="bg-gaming-secondary border border-gaming-accent/30 rounded-lg p-6 max-w-2xl w-full max-h-[80vh] overflow-auto">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold">Выберите целевой предмет</h3>
                <Button variant="ghost" size="icon" onClick={() => setIsSelectingTarget(false)}>
                  <X className="h-5 w-5" />
                </Button>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {targetSkins.map((skin) => (
                  <UpgradeItem 
                    key={skin.id} 
                    skin={skin} 
                    onClick={() => handleTargetSelect(skin)} 
                  />
                ))}
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

// Компонент ChevronRight для использования в списке правил
const ChevronRight = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

// Компонент X для кнопки закрытия модального окна
const X = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

export default Upgrades;
