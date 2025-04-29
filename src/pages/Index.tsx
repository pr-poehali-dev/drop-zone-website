import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import CaseCard, { CaseProps } from "@/components/CaseCard";
import LiveDrops from "@/components/LiveDrops";
import { Shield, BarChart3, CreditCard } from "lucide-react";

// Mock data for case display
const popularCases: CaseProps[] = [
  {
    id: "1",
    name: "Premium Case",
    price: 2499,
    image: "https://images.unsplash.com/photo-1605418900965-dc739ecbf427?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    items: []
  },
  {
    id: "2",
    name: "Knife Case",
    price: 4999,
    image: "https://images.unsplash.com/photo-1616683955261-ac7b9959a223?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    items: []
  },
  {
    id: "3",
    name: "Weapon Case",
    price: 1299,
    image: "https://images.unsplash.com/photo-1593002748822-ad8b65976032?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    items: []
  }
];

const Index = () => {
  const [balanceAmount, setBalanceAmount] = useState<number>(0);

  return (
    <div className="min-h-screen bg-gaming-secondary text-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-[url('https://cdn.poehali.dev/files/8080c452-fd52-4d00-98a7-f0aeb0fe2758.jpg')] bg-cover bg-center opacity-80"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-gaming-secondary to-transparent"></div>
        <div className="container relative flex flex-col items-center text-center">
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-gaming-light sm:text-6xl neon-text">
            DROP <span className="text-gaming-accent">ZONE</span>
          </h1>
          <p className="mb-8 max-w-[42rem] text-white text-shadow">
            Открывай кейсы CS:GO, получай редкие скины и выводи их на свой аккаунт Steam. 
            Начни с бонуса за регистрацию!
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-gaming-accent hover:bg-gaming-accent/80">
              Открыть кейсы
            </Button>
            <Button size="lg" variant="outline" className="border-gaming-accent text-white hover:bg-gaming-accent/20">
              Узнать больше
            </Button>
          </div>
        </div>
      </section>
      
      {/* Popular Cases Section */}
      <section className="py-12 bg-gradient-to-b from-gaming-secondary to-gaming-secondary/95">
        <div className="container">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold">Популярные кейсы</h2>
            <Link to="/cases" className="text-gaming-accent hover:underline">
              Смотреть все
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularCases.map((caseItem) => (
              <CaseCard key={caseItem.id} {...caseItem} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-12 bg-gaming-gray/20">
        <div className="container">
          <h2 className="text-2xl font-bold mb-8 text-center">Почему DROP ZONE?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6 bg-gaming-secondary/80 rounded-lg border border-gaming-accent/20">
              <Shield className="h-12 w-12 mb-4 text-gaming-accent" />
              <h3 className="text-xl font-semibold mb-2">Безопасность</h3>
              <p className="text-muted-foreground">
                Мгновенный вывод скинов на ваш аккаунт Steam. 
                Все транзакции защищены.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6 bg-gaming-secondary/80 rounded-lg border border-gaming-accent/20">
              <BarChart3 className="h-12 w-12 mb-4 text-gaming-accent" />
              <h3 className="text-xl font-semibold mb-2">Прозрачность</h3>
              <p className="text-muted-foreground">
                Честная система дропа с реальными шансами.
                Полная статистика всех выпадений.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6 bg-gaming-secondary/80 rounded-lg border border-gaming-accent/20">
              <CreditCard className="h-12 w-12 mb-4 text-gaming-accent" />
              <h3 className="text-xl font-semibold mb-2">Удобная оплата</h3>
              <p className="text-muted-foreground">
                Множество способов пополнения баланса.
                Быстрые выплаты на банковскую карту.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Live Drops and Stats Section */}
      <section className="py-12">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold mb-6">Статистика дропов</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="glass p-4 rounded-lg text-center">
                  <p className="text-sm text-muted-foreground">Кейсов открыто</p>
                  <p className="text-3xl font-bold text-gaming-accent">127,845</p>
                </div>
                <div className="glass p-4 rounded-lg text-center">
                  <p className="text-sm text-muted-foreground">Топовых дропов</p>
                  <p className="text-3xl font-bold text-gaming-accent">3,291</p>
                </div>
                <div className="glass p-4 rounded-lg text-center">
                  <p className="text-sm text-muted-foreground">Выведено скинов</p>
                  <p className="text-3xl font-bold text-gaming-accent">98,456</p>
                </div>
              </div>
              
              {/* Balance Deposit Card */}
              <div className="mt-6 glass p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Пополнить баланс</h3>
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="number"
                    value={balanceAmount}
                    onChange={(e) => setBalanceAmount(Number(e.target.value))}
                    min="0"
                    placeholder="Сумма пополнения"
                    className="flex h-10 w-full rounded-md border border-input bg-gaming-gray/10 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  />
                  <Button className="bg-gaming-accent hover:bg-gaming-accent/80">
                    Пополнить
                  </Button>
                </div>
                <p className="mt-2 text-xs text-muted-foreground">
                  Доступны различные способы оплаты: банковские карты, электронные кошельки, криптовалюта
                </p>
              </div>
            </div>
            
            <div>
              <LiveDrops />
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-8 border-t border-gaming-accent/20 bg-gaming-secondary">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 neon-text">DROP ZONE</h3>
              <p className="text-sm text-muted-foreground max-w-md">
                DROP ZONE — ваш надежный сервис для открытия кейсов CS:GO с мгновенным выводом скинов.
                Мы работаем с 2023 года.
              </p>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
              <div>
                <h4 className="font-medium mb-3">Навигация</h4>
                <ul className="space-y-2 text-sm">
                  <li><Link to="/" className="text-muted-foreground hover:text-gaming-accent">Главная</Link></li>
                  <li><Link to="/cases" className="text-muted-foreground hover:text-gaming-accent">Кейсы</Link></li>
                  <li><Link to="/upgrades" className="text-muted-foreground hover:text-gaming-accent">Апгрейды</Link></li>
                  <li><Link to="/top-drops" className="text-muted-foreground hover:text-gaming-accent">Топ дропов</Link></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-medium mb-3">Информация</h4>
                <ul className="space-y-2 text-sm">
                  <li><Link to="/faq" className="text-muted-foreground hover:text-gaming-accent">FAQ</Link></li>
                  <li><Link to="/terms" className="text-muted-foreground hover:text-gaming-accent">Условия использования</Link></li>
                  <li><Link to="/privacy" className="text-muted-foreground hover:text-gaming-accent">Политика конфиденциальности</Link></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-medium mb-3">Контакты</h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="mailto:support@dropzone.ru" className="text-muted-foreground hover:text-gaming-accent">support@dropzone.ru</a></li>
                  <li><a href="https://t.me/dropzone" className="text-muted-foreground hover:text-gaming-accent">Telegram</a></li>
                  <li><a href="https://vk.com/dropzone" className="text-muted-foreground hover:text-gaming-accent">VK</a></li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gaming-accent/10 text-center">
            <p className="text-sm text-muted-foreground">
              © 2023-2025 DROP ZONE. Все права защищены. Сервис предназначен для лиц старше 18 лет.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
