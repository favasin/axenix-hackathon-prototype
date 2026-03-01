import { useState } from "react";
import { Link } from "react-router";
import {
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Download,
  Share2,
  Palette,
  Type,
  Settings,
  MessageSquare,
  Clock,
  Save,
  MoreVertical,
  Edit2,
  FileDown,
  Link2,
  Monitor,
} from "lucide-react";

const mockSlides = [
  {
    id: 1,
    title: "Проблема",
    content: "Существующие AI-инструменты генерируют дизайн, но не смысл",
    bgColor: "from-blue-500 to-blue-600",
  },
  {
    id: 2,
    title: "Решение: DeckAI",
    content: "Смысл прежде дизайна. Данные пользователя в основе.",
    bgColor: "from-purple-500 to-purple-600",
  },
  {
    id: 3,
    title: "Размер рынка",
    content: "Рынок AI-инструментов: рост 35% в год, $2.5B к 2027",
    bgColor: "from-green-500 to-green-600",
  },
];

const tones = [
  { id: "formal", label: "Формальный", emoji: "🎩" },
  { id: "business", label: "Деловой", emoji: "💼" },
  { id: "persuasive", label: "Убедительный", emoji: "💪" },
  { id: "technical", label: "Технический", emoji: "🔧" },
  { id: "educational", label: "Образовательный", emoji: "🎓" },
];

export function EditorPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showSettings, setShowSettings] = useState(false);
  const [showExport, setShowExport] = useState(false);
  const [selectedTone, setSelectedTone] = useState("business");

  return (
    <div className="h-screen flex flex-col bg-gray-900">
      {/* Header */}
      <header className="bg-gray-800 border-b border-gray-700">
        <div className="px-4 py-3">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <Link to="/dashboard" className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <span className="text-lg font-bold text-white">DeckAI</span>
              </Link>

              <div className="h-6 w-px bg-gray-600"></div>

              <div className="flex items-center gap-2">
                <input
                  type="text"
                  defaultValue="Питч для инвестора Q1 2026"
                  className="bg-transparent text-white font-medium outline-none focus:bg-gray-700 px-2 py-1 rounded"
                />
                <div className="flex items-center gap-1 text-xs text-gray-400">
                  <Save className="w-3 h-3" />
                  <span>Сохранено</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button className="flex items-center gap-2 px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-700 rounded-lg text-sm">
                <Clock className="w-4 h-4" />
                История
              </button>

              <button className="flex items-center gap-2 px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-700 rounded-lg text-sm">
                <MessageSquare className="w-4 h-4" />
                Комментарии
              </button>

              <div className="h-6 w-px bg-gray-600 mx-2"></div>

              <button
                onClick={() => setShowSettings(!showSettings)}
                className="flex items-center gap-2 px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-700 rounded-lg text-sm"
              >
                <Palette className="w-4 h-4" />
                Стиль
              </button>

              <button
                onClick={() => setShowExport(!showExport)}
                className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:opacity-90"
              >
                <Share2 className="w-4 h-4" />
                Экспорт
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-1 flex overflow-hidden">
        {/* Slide Thumbnails */}
        <aside className="w-64 bg-gray-800 border-r border-gray-700 overflow-y-auto">
          <div className="p-4">
            <h3 className="text-sm font-semibold text-gray-400 mb-3">
              СЛАЙДЫ ({mockSlides.length})
            </h3>
            <div className="space-y-2">
              {mockSlides.map((slide, index) => (
                <button
                  key={slide.id}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-full text-left p-3 rounded-lg transition-colors ${
                    currentSlide === index
                      ? "bg-gray-700 ring-2 ring-blue-500"
                      : "bg-gray-700/50 hover:bg-gray-700"
                  }`}
                >
                  <div className="flex gap-3">
                    <div className="flex-shrink-0 w-10 h-10 bg-gray-600 text-white rounded flex items-center justify-center text-sm font-semibold">
                      {index + 1}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-medium text-white truncate">
                        {slide.title}
                      </div>
                      <div className="text-xs text-gray-400 truncate mt-1">
                        {slide.content.substring(0, 30)}...
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </aside>

        {/* Slide Preview */}
        <main className="flex-1 flex flex-col items-center justify-center p-8 overflow-auto">
          <div className="w-full max-w-5xl">
            {/* Slide Container */}
            <div className="bg-white rounded-lg shadow-2xl aspect-[16/9] overflow-hidden mb-6">
              <div
                className={`w-full h-full bg-gradient-to-br ${mockSlides[currentSlide].bgColor} p-12 flex flex-col justify-center`}
              >
                <h1 className="text-5xl font-bold text-white mb-6">
                  {mockSlides[currentSlide].title}
                </h1>
                <p className="text-2xl text-white/90">
                  {mockSlides[currentSlide].content}
                </p>
              </div>
            </div>

            {/* Controls */}
            <div className="flex items-center justify-between">
              <button
                onClick={() =>
                  setCurrentSlide(Math.max(0, currentSlide - 1))
                }
                disabled={currentSlide === 0}
                className="flex items-center gap-2 px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronLeft className="w-5 h-5" />
                Назад
              </button>

              <div className="flex items-center gap-2">
                <span className="text-white font-medium">
                  {currentSlide + 1} / {mockSlides.length}
                </span>
              </div>

              <button
                onClick={() =>
                  setCurrentSlide(
                    Math.min(mockSlides.length - 1, currentSlide + 1)
                  )
                }
                disabled={currentSlide === mockSlides.length - 1}
                className="flex items-center gap-2 px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Вперед
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </main>

        {/* Right Sidebar - Edit Panel */}
        <aside className="w-80 bg-gray-800 border-l border-gray-700 overflow-y-auto">
          <div className="p-4">
            <h3 className="text-sm font-semibold text-gray-400 mb-4">
              РЕДАКТИРОВАНИЕ СЛАЙДА
            </h3>

            <div className="space-y-4">
              {/* Slide Title */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Заголовок
                </label>
                <input
                  type="text"
                  defaultValue={mockSlides[currentSlide].title}
                  className="w-full px-3 py-2 bg-gray-700 text-white rounded-lg border border-gray-600 focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>

              {/* Slide Content */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Содержание
                </label>
                <textarea
                  defaultValue={mockSlides[currentSlide].content}
                  rows={4}
                  className="w-full px-3 py-2 bg-gray-700 text-white rounded-lg border border-gray-600 focus:ring-2 focus:ring-blue-500 outline-none resize-none"
                />
              </div>

              {/* AI Improve */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Улучшить с помощью AI
                </label>
                <textarea
                  placeholder="Сделай этот слайд более убедительным..."
                  rows={3}
                  className="w-full px-3 py-2 bg-gray-700 text-white placeholder-gray-500 rounded-lg border border-gray-600 focus:ring-2 focus:ring-blue-500 outline-none resize-none"
                />
                <button className="mt-2 w-full flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                  <Sparkles className="w-4 h-4" />
                  Улучшить слайд
                </button>
              </div>

              {/* Quick Actions */}
              <div className="pt-4 border-t border-gray-700">
                <h4 className="text-sm font-medium text-gray-300 mb-3">
                  Быстрые действия
                </h4>
                <div className="space-y-2">
                  <button className="w-full flex items-center gap-2 px-3 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 text-sm">
                    <Edit2 className="w-4 h-4" />
                    Сделать короче
                  </button>
                  <button className="w-full flex items-center gap-2 px-3 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 text-sm">
                    <Type className="w-4 h-4" />
                    Добавить данные
                  </button>
                  <button className="w-full flex items-center gap-2 px-3 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 text-sm">
                    <Palette className="w-4 h-4" />
                    Изменить стиль
                  </button>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>

      {/* Settings Panel */}
      {showSettings && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-gray-800 rounded-2xl p-6 max-w-2xl w-full mx-4 max-h-[80vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-white">Настройки стиля</h2>
              <button
                onClick={() => setShowSettings(false)}
                className="text-gray-400 hover:text-white"
              >
                ✕
              </button>
            </div>

            <div className="space-y-6">
              {/* Tone Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-3">
                  Тональность
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {tones.map((tone) => (
                    <button
                      key={tone.id}
                      onClick={() => setSelectedTone(tone.id)}
                      className={`p-4 rounded-lg border-2 text-left transition-all ${
                        selectedTone === tone.id
                          ? "border-blue-500 bg-blue-500/20"
                          : "border-gray-600 bg-gray-700 hover:border-gray-500"
                      }`}
                    >
                      <div className="text-2xl mb-2">{tone.emoji}</div>
                      <div className="font-medium text-white">{tone.label}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Brand Kit */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-3">
                  Brand Kit
                </label>
                <div className="bg-gray-700 rounded-lg p-4">
                  <div className="flex justify-between items-center">
                    <span className="text-white">Корпоративный стиль</span>
                    <Link
                      to="/brand-kit"
                      className="text-blue-400 hover:text-blue-300 text-sm"
                    >
                      Настроить →
                    </Link>
                  </div>
                </div>
              </div>

              <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:opacity-90">
                Применить изменения
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Export Panel */}
      {showExport && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-gray-800 rounded-2xl p-6 max-w-md w-full mx-4">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-white">
                Экспорт презентации
              </h2>
              <button
                onClick={() => setShowExport(false)}
                className="text-gray-400 hover:text-white"
              >
                ✕
              </button>
            </div>

            <div className="space-y-3">
              <button className="w-full flex items-center gap-3 p-4 bg-gray-700 hover:bg-gray-600 rounded-lg text-left">
                <FileDown className="w-5 h-5 text-blue-400" />
                <div>
                  <div className="font-medium text-white">Скачать PPTX</div>
                  <div className="text-sm text-gray-400">
                    Полностью редактируемый PowerPoint
                  </div>
                </div>
              </button>

              <button className="w-full flex items-center gap-3 p-4 bg-gray-700 hover:bg-gray-600 rounded-lg text-left">
                <FileDown className="w-5 h-5 text-red-400" />
                <div>
                  <div className="font-medium text-white">Скачать PDF</div>
                  <div className="text-sm text-gray-400">
                    Для печати и распространения
                  </div>
                </div>
              </button>

              <button className="w-full flex items-center gap-3 p-4 bg-gray-700 hover:bg-gray-600 rounded-lg text-left">
                <Link2 className="w-5 h-5 text-green-400" />
                <div>
                  <div className="font-medium text-white">Поделиться ссылкой</div>
                  <div className="text-sm text-gray-400">
                    Настройка прав доступа
                  </div>
                </div>
              </button>

              <button className="w-full flex items-center gap-3 p-4 bg-gray-700 hover:bg-gray-600 rounded-lg text-left">
                <Monitor className="w-5 h-5 text-purple-400" />
                <div>
                  <div className="font-medium text-white">Веб-презентация</div>
                  <div className="text-sm text-gray-400">
                    Публикация в интернете
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
