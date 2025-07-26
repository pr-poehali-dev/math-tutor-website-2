import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [calculatorValue, setCalculatorValue] = useState('');
  const [quadraticA, setQuadraticA] = useState('');
  const [quadraticB, setQuadraticB] = useState('');
  const [quadraticC, setQuadraticC] = useState('');
  const [quadraticResult, setQuadraticResult] = useState('');

  const calculateQuadratic = () => {
    const a = parseFloat(quadraticA);
    const b = parseFloat(quadraticB);
    const c = parseFloat(quadraticC);
    
    if (isNaN(a) || isNaN(b) || isNaN(c)) {
      setQuadraticResult('Введите корректные числа');
      return;
    }
    
    const discriminant = b * b - 4 * a * c;
    
    if (discriminant > 0) {
      const x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
      const x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
      setQuadraticResult(`x₁ = ${x1.toFixed(2)}, x₂ = ${x2.toFixed(2)}`);
    } else if (discriminant === 0) {
      const x = -b / (2 * a);
      setQuadraticResult(`x = ${x.toFixed(2)}`);
    } else {
      setQuadraticResult('Корней нет (дискриминант < 0)');
    }
  };

  const services = [
    {
      title: "Подготовка к ЕГЭ",
      description: "Интенсивная подготовка к экзамену с разбором сложных задач",
      icon: "GraduationCap",
      price: "от 2000₽/час"
    },
    {
      title: "Школьная программа",
      description: "Помощь с домашними заданиями и объяснение тем",
      icon: "BookOpen",
      price: "от 1500₽/час"
    },
    {
      title: "Высшая математика",
      description: "Решение задач по матанализу, алгебре, геометрии",
      icon: "Calculator",
      price: "от 2500₽/час"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-turquoise/5 to-coral/5">
      {/* Header */}
      <header className="container mx-auto px-6 py-8">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Icon name="Sigma" size={32} className="text-coral" />
            <h1 className="text-2xl font-bold text-gray-800">МатТьютор</h1>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#services" className="text-gray-600 hover:text-coral transition-colors">Услуги</a>
            <a href="#calculators" className="text-gray-600 hover:text-coral transition-colors">Калькуляторы</a>
            <a href="#contact" className="text-gray-600 hover:text-coral transition-colors">Контакты</a>
          </div>
          <Button className="bg-coral hover:bg-coral/90">
            Записаться на урок
          </Button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-5xl font-bold text-gray-800 mb-6 leading-tight">
              Математика станет
              <span className="text-coral"> простой</span> и
              <span className="text-turquoise"> понятной</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Индивидуальные занятия с опытным репетитором. Подготовка к ЕГЭ, помощь со школьной программой, решение задач любой сложности.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-coral hover:bg-coral/90 text-white px-8 py-4 text-lg">
                <Icon name="MessageCircle" size={20} className="mr-2" />
                Бесплатная консультация
              </Button>
              <Button size="lg" variant="outline" className="border-turquoise text-turquoise hover:bg-turquoise hover:text-white px-8 py-4 text-lg">
                <Icon name="Play" size={20} className="mr-2" />
                Смотреть видео
              </Button>
            </div>
          </div>
          <div className="relative">
            <img 
              src="/img/f263d60c-295b-47e3-97d6-8dd90c9f2430.jpg" 
              alt="Репетитор по математике" 
              className="rounded-3xl shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500"
            />
            <div className="absolute -top-4 -left-4 bg-turquoise text-white p-4 rounded-2xl font-bold shadow-lg">
              <Icon name="Trophy" size={24} />
              <div className="text-sm mt-1">100% сдача ЕГЭ</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-white/50 py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-800 mb-4">Мои услуги</h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Персональный подход к каждому ученику и гарантированный результат
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-white/80 backdrop-blur-sm">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto w-16 h-16 bg-gradient-to-br from-coral to-turquoise rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon name={service.icon} size={32} className="text-white" />
                  </div>
                  <CardTitle className="text-xl text-gray-800">{service.title}</CardTitle>
                  <CardDescription className="text-gray-600">{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="text-2xl font-bold text-coral mb-4">{service.price}</div>
                  <Button className="w-full bg-gradient-to-r from-coral to-turquoise hover:from-coral/90 hover:to-turquoise/90 text-white">
                    Подробнее
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Calculators */}
      <section id="calculators" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-800 mb-4">Интерактивные калькуляторы</h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Решайте математические задачи онлайн с пошаговым объяснением
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Basic Calculator */}
            <Card className="bg-gradient-to-br from-coral/10 to-turquoise/10 border-0">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <Icon name="Calculator" size={28} className="mr-3 text-coral" />
                  Базовый калькулятор
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-4 gap-3 mb-4">
                  <Input 
                    value={calculatorValue} 
                    onChange={(e) => setCalculatorValue(e.target.value)}
                    className="col-span-4 text-xl text-center font-mono"
                    placeholder="0"
                  />
                  {['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '0', '.', '=', '+'].map((btn) => (
                    <Button 
                      key={btn}
                      variant={btn === '=' ? 'default' : 'outline'}
                      className={`h-12 text-lg font-semibold ${
                        btn === '=' ? 'bg-coral hover:bg-coral/90 text-white' : 
                        ['/', '*', '-', '+'].includes(btn) ? 'bg-turquoise/20 hover:bg-turquoise/30' : ''
                      }`}
                      onClick={() => {
                        if (btn === '=') {
                          try {
                            setCalculatorValue(eval(calculatorValue).toString());
                          } catch {
                            setCalculatorValue('Ошибка');
                          }
                        } else {
                          setCalculatorValue(prev => prev + btn);
                        }
                      }}
                    >
                      {btn}
                    </Button>
                  ))}
                </div>
                <Button 
                  variant="outline" 
                  className="w-full border-coral text-coral hover:bg-coral hover:text-white"
                  onClick={() => setCalculatorValue('')}
                >
                  Очистить
                </Button>
              </CardContent>
            </Card>

            {/* Quadratic Equation Solver */}
            <Card className="bg-gradient-to-br from-turquoise/10 to-coral/10 border-0">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <Icon name="Function" size={28} className="mr-3 text-turquoise" />
                  Квадратное уравнение
                </CardTitle>
                <CardDescription>ax² + bx + c = 0</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-1 block">a</label>
                    <Input 
                      value={quadraticA}
                      onChange={(e) => setQuadraticA(e.target.value)}
                      placeholder="1"
                      className="text-center"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-1 block">b</label>
                    <Input 
                      value={quadraticB}
                      onChange={(e) => setQuadraticB(e.target.value)}
                      placeholder="0"
                      className="text-center"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-1 block">c</label>
                    <Input 
                      value={quadraticC}
                      onChange={(e) => setQuadraticC(e.target.value)}
                      placeholder="0"
                      className="text-center"
                    />
                  </div>
                </div>
                
                <Button 
                  onClick={calculateQuadratic}
                  className="w-full bg-turquoise hover:bg-turquoise/90 text-white"
                >
                  Решить уравнение
                </Button>
                
                {quadraticResult && (
                  <div className="bg-white/50 p-4 rounded-lg border border-turquoise/30">
                    <div className="text-sm text-gray-600 mb-1">Результат:</div>
                    <div className="text-lg font-mono text-gray-800">{quadraticResult}</div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-gradient-to-r from-coral/5 to-turquoise/5 py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-4xl font-bold text-gray-800 mb-4">Свяжитесь со мной</h3>
              <p className="text-xl text-gray-600">
                Готов ответить на все ваши вопросы и помочь с математикой
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-coral p-3 rounded-full">
                    <Icon name="Phone" size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Телефон</h4>
                    <p className="text-gray-600">+7 (999) 123-45-67</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-turquoise p-3 rounded-full">
                    <Icon name="Mail" size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Email</h4>
                    <p className="text-gray-600">tutor@mathhelp.ru</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-deepblue p-3 rounded-full">
                    <Icon name="MessageSquare" size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Telegram</h4>
                    <p className="text-gray-600">@mathtutor_pro</p>
                  </div>
                </div>
              </div>

              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
                <CardHeader>
                  <CardTitle>Записаться на урок</CardTitle>
                  <CardDescription>Заполните форму и я свяжусь с вами в течение часа</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Input placeholder="Ваше имя" />
                  <Input placeholder="Телефон" />
                  <Input placeholder="Email" />
                  <Textarea placeholder="Расскажите о ваших целях и сложностях в математике" rows={4} />
                  <Button className="w-full bg-gradient-to-r from-coral to-turquoise hover:from-coral/90 hover:to-turquoise/90 text-white">
                    Отправить заявку
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Sigma" size={28} className="text-coral" />
                <h4 className="text-xl font-bold">МатТьютор</h4>
              </div>
              <p className="text-gray-400">
                Профессиональный репетитор по математике с 10-летним опытом работы
              </p>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Услуги</h5>
              <ul className="space-y-2 text-gray-400">
                <li>Подготовка к ЕГЭ</li>
                <li>Школьная программа</li>
                <li>Высшая математика</li>
                <li>Онлайн занятия</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Контакты</h5>
              <div className="space-y-2 text-gray-400">
                <p>+7 (999) 123-45-67</p>
                <p>tutor@mathhelp.ru</p>
                <p>@mathtutor_pro</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 МатТьютор. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;