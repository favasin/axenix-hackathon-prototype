import { Link } from "react-router";
import {
  Sparkles,
  ArrowLeft,
  Upload,
  Palette,
  Type,
  Image as ImageIcon,
  Save,
  Plus,
  X,
} from "lucide-react";

const defaultColors = [
  "#3B82F6",
  "#8B5CF6",
  "#10B981",
  "#F59E0B",
  "#EF4444",
  "#6366F1",
];

export function BrandKitPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
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
              to="/dashboard"
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
            >
              <ArrowLeft className="w-5 h-5" />
              Вернуться к дашборду
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Brand Kit</h1>
          <p className="text-xl text-gray-600">
            Настройте корпоративный стиль для автоматического применения ко всем
            презентациям
          </p>
        </div>

        <div className="space-y-6">
          {/* Logo */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-start gap-3 mb-4">
              <ImageIcon className="w-6 h-6 text-blue-600 mt-1" />
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  Логотип компании
                </h3>
                <p className="text-sm text-gray-600">
                  SVG или PNG, рекомендуемый размер: 200x200px
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-32 h-32 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center bg-gray-50">
                <div className="text-center">
                  <ImageIcon className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                  <p className="text-xs text-gray-500">Логотип</p>
                </div>
              </div>

              <label className="cursor-pointer">
                <input type="file" accept="image/*" className="hidden" />
                <div className="flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 font-medium">
                  <Upload className="w-4 h-4" />
                  Загрузить логотип
                </div>
              </label>
            </div>
          </div>

          {/* Colors */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-start gap-3 mb-4">
              <Palette className="w-6 h-6 text-purple-600 mt-1" />
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  Цветовая палитра
                </h3>
                <p className="text-sm text-gray-600">
                  Основные и дополнительные цвета вашего бренда
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Основной цвет
                </label>
                <div className="flex items-center gap-3">
                  <input
                    type="color"
                    defaultValue="#3B82F6"
                    className="w-16 h-16 rounded-lg cursor-pointer border-2 border-gray-300"
                  />
                  <input
                    type="text"
                    defaultValue="#3B82F6"
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none font-mono"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Дополнительные цвета
                </label>
                <div className="grid grid-cols-6 gap-3">
                  {defaultColors.map((color, index) => (
                    <div key={index} className="relative group">
                      <input
                        type="color"
                        defaultValue={color}
                        className="w-full h-16 rounded-lg cursor-pointer border-2 border-gray-300"
                      />
                      <button className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                        <X className="w-4 h-4 mx-auto" />
                      </button>
                    </div>
                  ))}
                </div>
                <button className="mt-3 flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium">
                  <Plus className="w-4 h-4" />
                  Добавить цвет
                </button>
              </div>
            </div>
          </div>

          {/* Fonts */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-start gap-3 mb-4">
              <Type className="w-6 h-6 text-green-600 mt-1" />
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  Шрифты
                </h3>
                <p className="text-sm text-gray-600">
                  Основной и дополнительный шрифты для заголовков и текста
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Шрифт заголовков
                </label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none">
                  <option>Inter</option>
                  <option>Roboto</option>
                  <option>Open Sans</option>
                  <option>Montserrat</option>
                  <option>Poppins</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Шрифт основного текста
                </label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none">
                  <option>Inter</option>
                  <option>Roboto</option>
                  <option>Open Sans</option>
                  <option>Lato</option>
                  <option>Source Sans Pro</option>
                </select>
              </div>

              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-sm text-gray-600 mb-2">Предпросмотр:</p>
                <h4 className="text-2xl font-bold text-gray-900 mb-2">
                  Заголовок презентации
                </h4>
                <p className="text-gray-700">
                  Это пример основного текста в вашей презентации с выбранными
                  шрифтами и стилем оформления.
                </p>
              </div>
            </div>
          </div>

          {/* Slide Template */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-start gap-3 mb-4">
              <Sparkles className="w-6 h-6 text-orange-600 mt-1" />
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  Шаблон слайда
                </h3>
                <p className="text-sm text-gray-600">
                  Базовый шаблон для всех слайдов презентации
                </p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              {["Минимал", "Бизнес", "Креатив"].map((template, index) => (
                <button
                  key={index}
                  className={`aspect-video rounded-lg border-2 hover:border-blue-500 transition-colors ${
                    index === 0 ? "border-blue-500 bg-blue-50" : "border-gray-300"
                  }`}
                >
                  <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 rounded flex items-center justify-center">
                    <span className="text-sm font-medium text-gray-600">
                      {template}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Corporate Dictionary */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-start gap-3 mb-4">
              <Type className="w-6 h-6 text-indigo-600 mt-1" />
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  Корпоративный словарь
                </h3>
                <p className="text-sm text-gray-600">
                  Обязательные термины и запрещенные фразы
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Обязательные термины (через запятую)
                </label>
                <textarea
                  placeholder="Например: DeckAI, AI-генерация, смысловая структура"
                  className="w-full h-20 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none resize-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Запрещенные фразы (через запятую)
                </label>
                <textarea
                  placeholder="Например: в современном мире, это позволяет нам, важно отметить"
                  className="w-full h-20 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none resize-none"
                />
              </div>
            </div>
          </div>

          {/* Save Button */}
          <div className="flex justify-end gap-4">
            <Link
              to="/dashboard"
              className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50"
            >
              Отмена
            </Link>
            <button className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-medium hover:opacity-90">
              <Save className="w-5 h-5" />
              Сохранить Brand Kit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
