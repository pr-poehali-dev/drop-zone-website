import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import steamLogo from "../assets/steam-logo.svg";
import { ArrowRight, Shield, Lock } from "lucide-react";

const Login = () => {
  // В реальном приложении здесь будет осуществляться перенаправление на Steam OpenID
  const handleSteamLogin = () => {
    window.location.href = "https://steamcommunity.com/openid/login";
    // В реальном проекте URL должен содержать правильные параметры для OpenID
  };

  return (
    <div className="min-h-screen bg-gaming-secondary text-white">
      <Header />
      
      <div className="container py-12 max-w-md mx-auto">
        <Card className="bg-gaming-secondary/95 border border-gaming-accent/20">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold neon-text">Вход на DROP ZONE</CardTitle>
            <CardDescription className="text-muted-foreground">
              Авторизуйтесь через Steam, чтобы начать открывать кейсы и получать скины
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <Button 
              onClick={handleSteamLogin}
              className="w-full bg-[#1b2838] hover:bg-[#1b2838]/90 text-white flex items-center justify-center gap-3 py-6"
            >
              <img src={steamLogo} alt="Steam" className="h-6 w-6" />
              <span className="font-medium">Войти через Steam</span>
              <ArrowRight className="h-5 w-5" />
            </Button>

            <div className="rounded-lg border border-gaming-accent/20 p-4 bg-gaming-accent/5">
              <div className="flex items-start gap-3">
                <Shield className="h-5 w-5 text-gaming-accent mt-0.5" />
                <div>
                  <h3 className="font-medium mb-1">Безопасная авторизация</h3>
                  <p className="text-sm text-muted-foreground">
                    Мы используем официальную систему Steam OpenID для авторизации.
                    Мы не получаем доступ к вашему паролю или другим личным данным.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col">
            <p className="text-xs text-muted-foreground text-center">
              Авторизуясь, вы подтверждаете, что вам исполнилось 18 лет и вы
              принимаете <a href="/terms" className="text-gaming-accent hover:underline">условия использования</a> и
              <a href="/privacy" className="text-gaming-accent hover:underline"> политику конфиденциальности</a>.
            </p>
          </CardFooter>
        </Card>

        <div className="mt-8 space-y-4">
          <div className="p-4 rounded-lg border border-gaming-accent/20 bg-gaming-secondary/80">
            <div className="flex items-start gap-3">
              <Lock className="h-5 w-5 text-gaming-accent mt-0.5" />
              <div>
                <h3 className="font-medium mb-1">Зачем нужна авторизация?</h3>
                <p className="text-sm text-muted-foreground">
                  Авторизация через Steam позволяет:
                </p>
                <ul className="text-sm text-muted-foreground mt-2 list-disc list-inside space-y-1">
                  <li>Быстро выводить выпавшие скины на ваш аккаунт</li>
                  <li>Сохранять историю ваших открытий и апгрейдов</li>
                  <li>Пользоваться бонусами и промокодами</li>
                  <li>Участвовать в турнирах и розыгрышах</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer можно добавить при необходимости */}
    </div>
  );
};

export default Login;
