import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { LogOut, Settings, User, Wallet, History, Gift } from "lucide-react";

interface UserProfileProps {
  isLoggedIn: boolean;
  onLogin: () => void;
}

const UserProfile = ({ isLoggedIn, onLogin }: UserProfileProps) => {
  // Это тестовые данные. В реальном приложении эти данные будут получены от сервера
  const [user] = useState({
    name: "SteamUser",
    avatar: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    balance: 2500,
  });

  if (!isLoggedIn) {
    return (
      <Button 
        onClick={onLogin} 
        variant="default" 
        size="sm" 
        className="gap-2 bg-gaming-accent hover:bg-gaming-accent/80"
      >
        <User className="h-4 w-4" />
        <span>Войти</span>
      </Button>
    );
  }

  return (
    <div className="flex items-center gap-4">
      {/* Баланс пользователя */}
      <div className="hidden md:flex items-center gap-1 px-3 py-1.5 bg-gaming-accent/10 rounded-md border border-gaming-accent/20">
        <Wallet className="h-4 w-4 text-gaming-accent" />
        <span className="text-sm font-medium">{user.balance} ₽</span>
      </div>

      {/* Профиль пользователя */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button 
            variant="ghost" 
            className="relative h-9 w-9 rounded-full border border-gaming-accent/40 bg-gaming-secondary p-0"
          >
            <Avatar className="h-9 w-9">
              <AvatarImage src={user.avatar} alt={user.name} />
              <AvatarFallback className="bg-gaming-accent/20 text-white">
                {user.name.substring(0, 2)}
              </AvatarFallback>
            </Avatar>
            <span className="absolute -bottom-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-gaming-accent text-[10px] text-white">
              3
            </span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56 bg-gaming-secondary border border-gaming-accent/30" align="end" forceMount>
          <DropdownMenuLabel className="font-normal">
            <div className="flex flex-col space-y-1">
              <p className="text-sm font-medium text-white">{user.name}</p>
              <p className="text-xs text-muted-foreground">ID: STEAM_0:0:12345678</p>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator className="bg-gaming-accent/20" />
          <DropdownMenuItem className="text-white hover:bg-gaming-accent/20 cursor-pointer">
            <User className="mr-2 h-4 w-4 text-gaming-accent" />
            <span>Мой профиль</span>
          </DropdownMenuItem>
          <DropdownMenuItem className="text-white hover:bg-gaming-accent/20 cursor-pointer">
            <Wallet className="mr-2 h-4 w-4 text-gaming-accent" />
            <span>Баланс: {user.balance} ₽</span>
          </DropdownMenuItem>
          <DropdownMenuItem className="text-white hover:bg-gaming-accent/20 cursor-pointer">
            <History className="mr-2 h-4 w-4 text-gaming-accent" />
            <span>История операций</span>
          </DropdownMenuItem>
          <DropdownMenuItem className="text-white hover:bg-gaming-accent/20 cursor-pointer">
            <Gift className="mr-2 h-4 w-4 text-gaming-accent" />
            <span>Инвентарь</span>
            <span className="ml-auto bg-gaming-accent text-xs px-1.5 py-0.5 rounded text-white">3</span>
          </DropdownMenuItem>
          <DropdownMenuItem className="text-white hover:bg-gaming-accent/20 cursor-pointer">
            <Settings className="mr-2 h-4 w-4 text-gaming-accent" />
            <span>Настройки</span>
          </DropdownMenuItem>
          <DropdownMenuSeparator className="bg-gaming-accent/20" />
          <DropdownMenuItem className="text-white hover:bg-destructive/90 cursor-pointer">
            <LogOut className="mr-2 h-4 w-4" />
            <span>Выйти</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default UserProfile;
