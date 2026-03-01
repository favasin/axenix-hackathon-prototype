import { Link } from "react-router";
import { Sparkles, Upload, FileText, Zap, Shield, Globe } from "lucide-react";

export function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                DeckAI
              </span>
            </div>
            <nav className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-gray-600 hover:text-gray-900">
                Возможности
              </a>
              <Link to="/pricing" className="text-gray-600 hover:text-gray-900">
                Тарифы
              </Link>
              <a href="#how-it-works" className="text-gray-600 hover:text-gray-900">
                Как это работает
              </a>
              <Link
                to="/login"
                className="text-gray-600 hover:text-gray-900"
              >
                Вход
              </Link>
              <Link
                to="/dashboard"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2.5 rounded-lg font-medium hover:opacity-90 transition-opacity"
              >
                Начать бесплатно
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
            Профессиональные презентации
            <span className="block mt-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              на основе ваших данных
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-10 leading-relaxed">
            Загрузите свои данные и цель — получите профессиональную презентацию
            с правильной логикой, реальными фактами и вашим корпоративным стилем
            за минуты, а не часы.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/create"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-medium hover:opacity-90 transition-opacity inline-flex items-center justify-center gap-2"
            >
              <Zap className="w-5 h-5" />
              Создать презентацию
            </Link>
            <a
              href="#how-it-works"
              className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg text-lg font-medium hover:border-gray-400 transition-colors inline-flex items-center justify-center gap-2"
            >
              Посмотреть как работает
            </a>
          </div>
        </div>

        {/* Hero Image Placeholder */}
        <div className="mt-16 rounded-2xl bg-gradient-to-br from-blue-100 to-purple-100 p-8 shadow-2xl">
          <div className="bg-white rounded-xl shadow-lg p-6 h-96 flex items-center justify-center">
            <div className="text-center">
              <Sparkles className="w-16 h-16 text-blue-600 mx-auto mb-4" />
              <p className="text-gray-500">Превью интерфейса создания презентации</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Почему DeckAI?
            </h2>
            <p className="text-xl text-gray-600">
              Три кита нашего уникального предложения
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl">
              <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center mb-6">
                <FileText className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Смысл прежде дизайна
              </h3>
              <p className="text-gray-700 leading-relaxed">
                AI сначала строит логику (тезис → аргументы → данные → вывод),
                затем применяет дизайн. Не наоборот.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl">
              <div className="w-14 h-14 bg-purple-600 rounded-xl flex items-center justify-center mb-6">
                <Upload className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Ваши данные → ваши слайды
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Загружайте таблицы, отчеты, документы — AI извлекает ключевые
                инсайты и превращает их в слайды с реальными данными.
              </p>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-8 rounded-2xl">
              <div className="w-14 h-14 bg-indigo-600 rounded-xl flex items-center justify-center mb-6">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Контроль без усилий
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Вы управляете смысловым ядром, AI управляет всем остальным —
                как сказать, как оформить, как выстроить порядок.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <Shield className="w-6 h-6 text-green-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Безопасность корпоративного уровня
                  </h3>
                  <p className="text-gray-600">
                    On-premise развертывание, шифрование данных, соответствие
                    152-ФЗ и GDPR
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Globe className="w-6 h-6 text-blue-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Мультиязычность
                  </h3>
                  <p className="text-gray-600">
                    Качественная генерация на русском, английском и других языках
                    на уровне native speaker
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <FileText className="w-6 h-6 text-purple-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Корпоративный Brand Kit
                  </h3>
                  <p className="text-gray-600">
                    Автоматическое применение вашего стиля, шрифтов и цветов ко
                    всем презентациям
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-8 flex items-center justify-center">
              <div className="text-center">
                <Sparkles className="w-20 h-20 text-gray-600 mx-auto mb-4" />
                <p className="text-gray-600 text-lg">
                  Демонстрация возможностей
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Как это работает
            </h2>
            <p className="text-xl text-gray-600">
              Создайте профессиональную презентацию за 4 простых шага
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Загрузите данные",
                description: "Текст, файлы, таблицы или URL — любые источники данных",
              },
              {
                step: "2",
                title: "Проверьте структуру",
                description: "AI предложит outline — вы можете изменить его",
              },
              {
                step: "3",
                title: "Генерация слайдов",
                description: "AI создаст слайды с данными и визуализацией",
              },
              {
                step: "4",
                title: "Экспорт",
                description: "Скачайте PPTX или PDF, или поделитесь ссылкой",
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Готовы создать первую презентацию?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Начните бесплатно — без кредитной карты
          </p>
          <Link
            to="/create"
            className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-medium hover:bg-blue-50 transition-colors"
          >
            <Zap className="w-5 h-5" />
            Создать презентацию
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-white">DeckAI</span>
              </div>
              <p className="text-gray-400 text-sm">
                AI-сервис генерации профессиональных презентаций
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Продукт</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#features" className="hover:text-white">
                    Возможности
                  </a>
                </li>
                <li>
                  <Link to="/pricing" className="hover:text-white">
                    Тарифы
                  </Link>
                </li>
                <li>
                  <a href="#how-it-works" className="hover:text-white">
                    Как это работает
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-white">
                    О нас
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Блог
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Контакты
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Правовая информация</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-white">
                    Политика конфиденциальности
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Условия использования
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Безопасность
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
            <p>&copy; 2026 DeckAI. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
