import { useState } from "react";
import { Link, useNavigate } from "react-router";
import {
  Sparkles,
  ArrowLeft,
  Plus,
  GripVertical,
  Trash2,
  Edit2,
  ArrowRight,
  FileText,
  BarChart3,
  Image as ImageIcon,
  Quote,
  Loader2,
} from "lucide-react";

const mockOutline = [
  {
    id: "1",
    title: "Проблема",
    description: "Существующие AI-инструменты генерируют дизайн, но не смысл",
    type: "text",
  },
  {
    id: "2",
    title: "Решение",
    description: "DeckAI: смысл прежде дизайна, данные пользователя в основе",
    type: "text",
  },
  {
    id: "3",
    title: "Размер рынка",
    description: "Рынок AI-инструментов для презентаций: рост 35% в год",
    type: "chart",
  },
  {
    id: "4",
    title: "Конкурентное преимущество",
    description: "Сравнение с Gamma, Canva AI, Microsoft Copilot",
    type: "table",
  },
  {
    id: "5",
    title: "Бизнес-модель",
    description: "Freemium + Seat-based + Usage-based гибридная модель",
    type: "text",
  },
  {
    id: "6",
    title: "Целевые сегменты",
    description: "PMM/BA, консультанты, Enterprise — 3 ключевых сегмента",
    type: "chart",
  },
  {
    id: "7",
    title: "Команда",
    description: "Опыт в AI, продуктовая экспертиза, знание рынка B2B SaaS",
    type: "text",
  },
  {
    id: "8",
    title: "Финансовые показатели",
    description: "Unit-экономика, прогноз выручки на 12 месяцев",
    type: "chart",
  },
  {
    id: "9",
    title: "Использование средств",
    description: "Распределение инвестиций: разработка, продажи, маркетинг",
    type: "chart",
  },
  {
    id: "10",
    title: "Призыв к действию",
    description: "Инвестируйте $2M в наш Series A раунд",
    type: "text",
  },
];

const slideTypeIcons = {
  text: FileText,
  chart: BarChart3,
  image: ImageIcon,
  table: Quote,
};

export function OutlinePage() {
  const navigate = useNavigate();
  const [outline, setOutline] = useState(mockOutline);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = () => {
    setIsGenerating(true);
    // Simulate generation
    setTimeout(() => {
      navigate("/editor/new");
    }, 2000);
  };

  const removeSlide = (id: string) => {
    setOutline(outline.filter((slide) => slide.id !== id));
  };

  const addSlide = () => {
    const newSlide = {
      id: String(Date.now()),
      title: "Новый слайд",
      description: "Опишите содержание слайда",
      type: "text" as const,
    };
    setOutline([...outline, newSlide]);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <Link to="/dashboard" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                DeckAI
              </span>
            </Link>

            <Link
              to="/create"
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
            >
              <ArrowLeft className="w-5 h-5" />
              Вернуться назад
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Проверьте структуру презентации
          </h1>
          <p className="text-xl text-gray-600">
            AI предложил следующую структуру на основе ваших данных. Вы можете
            изменить порядок, добавить или удалить слайды
          </p>
        </div>

        {/* Explanation Box */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-lg p-6 mb-8">
          <div className="flex gap-4">
            <Sparkles className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Почему именно эта структура?
              </h3>
              <p className="text-gray-700">
                Для питч-дека инвестора применена структура Problem → Solution →
                Market → Business Model → Team → Financials → CTA, так как она
                соответствует стандарту Y Combinator и оптимальна для убеждения
                инвесторов.
              </p>
            </div>
          </div>
        </div>

        {/* Outline List */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">
              Структура ({outline.length} слайдов)
            </h2>
            <button
              onClick={addSlide}
              className="flex items-center gap-2 px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-lg font-medium"
            >
              <Plus className="w-5 h-5" />
              Добавить слайд
            </button>
          </div>

          <div className="space-y-3">
            {outline.map((slide, index) => {
              const Icon = slideTypeIcons[slide.type];
              return (
                <div
                  key={slide.id}
                  className="group flex items-start gap-4 p-4 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  {/* Drag Handle */}
                  <button className="flex-shrink-0 mt-1 cursor-move opacity-0 group-hover:opacity-100 transition-opacity">
                    <GripVertical className="w-5 h-5 text-gray-400" />
                  </button>

                  {/* Slide Number */}
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-lg flex items-center justify-center font-semibold text-sm">
                    {index + 1}
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start gap-2 mb-1">
                      <Icon className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                      <input
                        type="text"
                        defaultValue={slide.title}
                        className="flex-1 font-semibold text-gray-900 bg-transparent border-none outline-none focus:bg-white focus:px-2 focus:py-1 focus:rounded"
                      />
                    </div>
                    <textarea
                      defaultValue={slide.description}
                      className="w-full text-sm text-gray-600 bg-transparent border-none outline-none resize-none focus:bg-white focus:px-2 focus:py-1 focus:rounded"
                      rows={2}
                    />
                  </div>

                  {/* Actions */}
                  <div className="flex-shrink-0 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="p-2 hover:bg-gray-200 rounded-lg">
                      <Edit2 className="w-4 h-4 text-gray-600" />
                    </button>
                    <button
                      onClick={() => removeSlide(slide.id)}
                      className="p-2 hover:bg-red-50 rounded-lg"
                    >
                      <Trash2 className="w-4 h-4 text-red-600" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Actions */}
        <div className="flex justify-between items-center">
          <div className="text-sm text-gray-600">
            <p>
              <strong>Совет:</strong> Перетаскивайте слайды для изменения порядка
            </p>
          </div>

          <button
            onClick={handleGenerate}
            disabled={isGenerating}
            className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity disabled:opacity-70"
          >
            {isGenerating ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Генерация слайдов...
              </>
            ) : (
              <>
                Сгенерировать презентацию
                <ArrowRight className="w-5 h-5" />
              </>
            )}
          </button>
        </div>
      </div>

      {/* Generation Modal */}
      {isGenerating && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Loader2 className="w-8 h-8 text-white animate-spin" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Создаем презентацию
              </h3>
              <p className="text-gray-600 mb-6">
                AI генерирует слайды с вашими данными...
              </p>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Анализ данных завершен</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Структура подтверждена</span>
                </div>
                <div className="flex items-center gap-2">
                  <Loader2 className="w-2 h-2 text-blue-600 animate-spin" />
                  <span>Генерация слайдов (3/10)...</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
