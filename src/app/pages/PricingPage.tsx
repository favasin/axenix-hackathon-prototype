import { Link } from "react-router";
import { Sparkles, Check, X, ArrowRight } from "lucide-react";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "навсегда",
    description: "Для знакомства с продуктом",
    features: [
      { text: "3 презентации в месяц", included: true },
      { text: "Базовые шаблоны", included: true },
      { text: "Экспорт в PDF", included: true },
      { text: "Генерация на русском и английском", included: true },
      { text: "Экспорт в PPTX", included: false },
      { text: "Brand Kit", included: false },
      { text: "Загрузка файлов", included: false },
      { text: "Все языки", included: false },
    ],
    cta: "Начать бесплатно",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$19",
    period: "в месяц",
    description: "Для индивидуальных пользователей",
    features: [
      { text: "30 презентаций в месяц", included: true },
      { text: "Все шаблоны", included: true },
      { text: "Экспорт в PPTX и PDF", included: true },
      { text: "Brand Kit (1)", included: true },
      { text: "Загрузка файлов (Excel, PDF, DOCX)", included: true },
      { text: "Все языки", included: true },
      { text: "Настройка тональности", included: true },
      { text: "Приоритетная поддержка", included: true },
    ],
    cta: "Начать Pro",
    highlighted: true,
  },
  {
    name: "Team",
    price: "$15",
    period: "за пользователя в месяц",
    description: "Для команд от 3 человек",
    features: [
      { text: "Безлимит презентаций", included: true },
      { text: "Совместное редактирование", included: true },
      { text: "Общий Brand Kit", included: true },
      { text: "Аналитика просмотров", included: true },
      { text: "Комментарии и ревью", included: true },
      { text: "История версий", included: true },
      { text: "Приоритетная поддержка", included: true },
      { text: "Admin-панель", included: true },
    ],
    cta: "Связаться с продажами",
    highlighted: false,
  },
  {
    name: "Enterprise",
    price: "От $799",
    period: "в месяц",
    description: "Для крупных организаций",
    features: [
      { text: "Все функции Team", included: true },
      { text: "SSO (SAML, OAuth)", included: true },
      { text: "On-premise развертывание", included: true },
      { text: "Кастомный AI-стиль", included: true },
      { text: "SLA и DPA", included: true },
      { text: "Выделенный менеджер", included: true },
      { text: "Обучение команды", included: true },
      { text: "API доступ", included: true },
    ],
    cta: "Связаться с продажами",
    highlighted: false,
  },
];

const faqs = [
  {
    q: "Могу ли я отменить подписку в любое время?",
    a: "Да, вы можете отменить подписку в любое время из настроек аккаунта. При отмене вы сохраните доступ до конца оплаченного периода.",
  },
  {
    q: "Что происходит с моими презентациями при отмене?",
    a: "Все созданные презентации остаются доступны для просмотра и экспорта. Вы не сможете создавать новые на бесплатном тарифе после превышения лимита.",
  },
  {
    q: "Какие способы оплаты вы принимаете?",
    a: "Мы принимаем все основные кредитные карты (Visa, Mastercard, American Express), а также платежи через PayPal. Для Enterprise клиентов доступна оплата по счету.",
  },
  {
    q: "Есть ли скидка при годовой оплате?",
    a: "Да, при годовой оплате предоставляется скидка 20%. Вместо $19/мес вы платите эквивалент $15.20/мес при оплате за год.",
  },
  {
    q: "Безопасны ли мои данные?",
    a: "Абсолютно. Мы используем шифрование AES-256 для данных в покое и TLS 1.3 для передачи. Ваши данные никогда не используются для обучения моделей. Для Enterprise клиентов доступно on-premise развертывание.",
  },
];

export function PricingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                DeckAI
              </span>
            </Link>

            <div className="flex items-center gap-4">
              <Link to="/" className="text-gray-600 hover:text-gray-900">
                На главную
              </Link>
              <Link
                to="/login"
                className="text-gray-600 hover:text-gray-900"
              >
                Вход
              </Link>
              <Link
                to="/dashboard"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-5 py-2.5 rounded-lg font-medium hover:opacity-90"
              >
                Начать бесплатно
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Выберите план для вашей команды
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Начните бесплатно и обновитесь когда будете готовы. Все планы включают
            14-дневную гарантию возврата средств.
          </p>

          <div className="flex items-center justify-center gap-4 mb-8">
            <span className="text-gray-600">Месячная оплата</span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" />
              <div className="w-14 h-7 bg-gray-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
            <span className="text-gray-600">
              Годовая оплата{" "}
              <span className="text-green-600 font-medium">(-20%)</span>
            </span>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-8">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`bg-white rounded-2xl p-8 ${
                  plan.highlighted
                    ? "ring-2 ring-blue-500 shadow-2xl scale-105 relative"
                    : "shadow-lg border border-gray-200"
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-5 left-0 right-0 mx-auto w-fit">
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Популярный
                    </div>
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline gap-1 mb-2">
                    <span className="text-4xl font-bold text-gray-900">
                      {plan.price}
                    </span>
                    <span className="text-gray-600">/ {plan.period}</span>
                  </div>
                  <p className="text-gray-600 text-sm">{plan.description}</p>
                </div>

                <Link
                  to="/dashboard"
                  className={`block w-full text-center px-6 py-3 rounded-lg font-medium mb-6 ${
                    plan.highlighted
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:opacity-90"
                      : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                  }`}
                >
                  {plan.cta}
                </Link>

                <ul className="space-y-3">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      {feature.included ? (
                        <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      ) : (
                        <X className="w-5 h-5 text-gray-300 flex-shrink-0 mt-0.5" />
                      )}
                      <span
                        className={
                          feature.included ? "text-gray-700" : "text-gray-400"
                        }
                      >
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Comparison */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Сравнение возможностей
            </h2>
            <p className="text-xl text-gray-600">
              Подробное сравнение всех функций по тарифам
            </p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8">
            <div className="grid grid-cols-5 gap-4 text-sm">
              <div className="font-semibold text-gray-900">Функция</div>
              <div className="font-semibold text-gray-900 text-center">Free</div>
              <div className="font-semibold text-gray-900 text-center">Pro</div>
              <div className="font-semibold text-gray-900 text-center">Team</div>
              <div className="font-semibold text-gray-900 text-center">
                Enterprise
              </div>

              {[
                ["Презентации в месяц", "3", "30", "∞", "∞"],
                ["Экспорт PPTX", "✗", "✓", "✓", "✓"],
                ["Brand Kit", "✗", "1", "✓", "✓"],
                ["Загрузка файлов", "✗", "✓", "✓", "✓"],
                ["Совместная работа", "✗", "✗", "✓", "✓"],
                ["SSO", "✗", "✗", "✗", "✓"],
                ["On-premise", "✗", "✗", "✗", "✓"],
              ].map((row, index) => (
                <div
                  key={index}
                  className="contents border-t border-gray-200 py-4"
                >
                  <div className="py-3 text-gray-700">{row[0]}</div>
                  <div className="py-3 text-center text-gray-700">{row[1]}</div>
                  <div className="py-3 text-center text-gray-700">{row[2]}</div>
                  <div className="py-3 text-center text-gray-700">{row[3]}</div>
                  <div className="py-3 text-center text-gray-700">{row[4]}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Часто задаваемые вопросы
            </h2>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {faq.q}
                </h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Готовы начать?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Создайте первую презентацию бесплатно за 5 минут
          </p>
          <Link
            to="/create"
            className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-medium hover:bg-blue-50"
          >
            Создать презентацию
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm">&copy; 2026 DeckAI. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
}
