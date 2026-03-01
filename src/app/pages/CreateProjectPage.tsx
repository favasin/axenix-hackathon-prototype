import { useState } from "react";
import { Link, useNavigate } from "react-router";
import {
  Sparkles,
  ArrowLeft,
  Upload,
  FileText,
  Link2,
  Users,
  Target,
  ArrowRight,
  X,
  File,
  AlertCircle,
} from "lucide-react";

const audienceTypes = [
  { id: "investor", label: "Инвестор", icon: "💰" },
  { id: "management", label: "Менеджмент", icon: "👔" },
  { id: "client", label: "Клиент", icon: "🤝" },
  { id: "team", label: "Команда", icon: "👥" },
  { id: "education", label: "Обучение", icon: "🎓" },
  { id: "consulting", label: "Консалтинг", icon: "📊" },
];

export function CreateProjectPage() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [prompt, setPrompt] = useState("");
  const [files, setFiles] = useState<File[]>([]);
  const [url, setUrl] = useState("");
  const [audience, setAudience] = useState("");
  const [goal, setGoal] = useState("");

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles([...files, ...Array.from(e.target.files)]);
    }
  };

  const removeFile = (index: number) => {
    setFiles(files.filter((_, i) => i !== index));
  };

  const handleNext = () => {
    if (step === 1) {
      setStep(2);
    } else {
      // Navigate to outline page
      navigate("/outline/new");
    }
  };

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

      {/* Progress Steps */}
      <div className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-center gap-8">
            <div className="flex items-center gap-3">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                  step >= 1
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                    : "bg-gray-200 text-gray-400"
                }`}
              >
                1
              </div>
              <span
                className={`font-medium ${
                  step >= 1 ? "text-gray-900" : "text-gray-400"
                }`}
              >
                Данные и контент
              </span>
            </div>

            <div className="w-16 h-0.5 bg-gray-200">
              <div
                className={`h-full bg-gradient-to-r from-blue-600 to-purple-600 transition-all ${
                  step >= 2 ? "w-full" : "w-0"
                }`}
              ></div>
            </div>

            <div className="flex items-center gap-3">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                  step >= 2
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                    : "bg-gray-200 text-gray-400"
                }`}
              >
                2
              </div>
              <span
                className={`font-medium ${
                  step >= 2 ? "text-gray-900" : "text-gray-400"
                }`}
              >
                Аудитория и цель
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {step === 1 ? (
          <div>
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Расскажите о вашей презентации
              </h1>
              <p className="text-xl text-gray-600">
                Добавьте текст, файлы или ссылки — AI проанализирует данные
              </p>
            </div>

            <div className="space-y-6">
              {/* Text Prompt */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <div className="flex items-start gap-3 mb-4">
                  <FileText className="w-6 h-6 text-blue-600 mt-1" />
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      Опишите тему презентации
                    </h3>
                    <p className="text-sm text-gray-600">
                      Расскажите, о чем презентация и какие ключевые моменты нужно
                      раскрыть
                    </p>
                  </div>
                </div>
                <textarea
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder="Например: Презентация для инвесторов о нашем стартапе в сфере AI. Нужно показать проблему, решение, размер рынка, бизнес-модель и команду..."
                  className="w-full h-40 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none"
                />
                <p className="text-xs text-gray-500 mt-2">
                  {prompt.length} / 2000 символов
                </p>
              </div>

              {/* File Upload */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <div className="flex items-start gap-3 mb-4">
                  <Upload className="w-6 h-6 text-purple-600 mt-1" />
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      Загрузите файлы с данными
                    </h3>
                    <p className="text-sm text-gray-600">
                      PDF, DOCX, XLSX, CSV — до 50 МБ на файл, до 5 файлов
                    </p>
                  </div>
                </div>

                <label className="block border-2 border-dashed border-gray-300 rounded-lg p-8 text-center cursor-pointer hover:border-blue-400 hover:bg-blue-50/50 transition-all">
                  <input
                    type="file"
                    multiple
                    accept=".pdf,.docx,.xlsx,.csv,.pptx"
                    onChange={handleFileUpload}
                    className="hidden"
                  />
                  <Upload className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                  <p className="font-medium text-gray-700 mb-1">
                    Нажмите для выбора файлов
                  </p>
                  <p className="text-sm text-gray-500">
                    или перетащите их сюда
                  </p>
                </label>

                {files.length > 0 && (
                  <div className="mt-4 space-y-2">
                    {files.map((file, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                      >
                        <div className="flex items-center gap-3">
                          <File className="w-5 h-5 text-gray-400" />
                          <div>
                            <p className="text-sm font-medium text-gray-900">
                              {file.name}
                            </p>
                            <p className="text-xs text-gray-500">
                              {(file.size / 1024 / 1024).toFixed(2)} МБ
                            </p>
                          </div>
                        </div>
                        <button
                          onClick={() => removeFile(index)}
                          className="p-1 hover:bg-gray-200 rounded"
                        >
                          <X className="w-5 h-5 text-gray-400" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* URL Input */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <div className="flex items-start gap-3 mb-4">
                  <Link2 className="w-6 h-6 text-green-600 mt-1" />
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      Добавьте ссылку на источник
                    </h3>
                    <p className="text-sm text-gray-600">
                      Веб-страница, статья или отчет
                    </p>
                  </div>
                </div>
                <input
                  type="url"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  placeholder="https://example.com/report"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                />
              </div>

              {/* Info Banner */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 flex gap-3">
                <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <div className="text-sm text-blue-900">
                  <p className="font-medium mb-1">
                    AI извлечет ключевые данные из ваших источников
                  </p>
                  <p className="text-blue-700">
                    Все цифры и факты в презентации будут ссылаться на ваши
                    документы, чтобы вы могли проверить их достоверность
                  </p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Для кого эта презентация?
              </h1>
              <p className="text-xl text-gray-600">
                AI адаптирует структуру и тональность под вашу аудиторию
              </p>
            </div>

            <div className="space-y-6">
              {/* Audience Selection */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <div className="flex items-start gap-3 mb-4">
                  <Users className="w-6 h-6 text-blue-600 mt-1" />
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      Целевая аудитория
                    </h3>
                    <p className="text-sm text-gray-600">
                      Выберите тип аудитории
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {audienceTypes.map((type) => (
                    <button
                      key={type.id}
                      onClick={() => setAudience(type.id)}
                      className={`p-4 rounded-lg border-2 text-left transition-all ${
                        audience === type.id
                          ? "border-blue-500 bg-blue-50"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      <div className="text-2xl mb-2">{type.icon}</div>
                      <div className="font-medium text-gray-900">
                        {type.label}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Goal */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <div className="flex items-start gap-3 mb-4">
                  <Target className="w-6 h-6 text-purple-600 mt-1" />
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      Основная цель презентации
                    </h3>
                    <p className="text-sm text-gray-600">
                      Что вы хотите донести до аудитории?
                    </p>
                  </div>
                </div>
                <textarea
                  value={goal}
                  onChange={(e) => setGoal(e.target.value)}
                  placeholder="Например: Убедить инвесторов вложить $2M в наш раунд Series A, показав размер рынка и наше конкурентное преимущество..."
                  className="w-full h-32 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none"
                />
              </div>
            </div>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-8">
          {step === 2 && (
            <button
              onClick={() => setStep(1)}
              className="flex items-center gap-2 px-6 py-3 text-gray-600 hover:text-gray-900"
            >
              <ArrowLeft className="w-5 h-5" />
              Назад
            </button>
          )}

          <button
            onClick={handleNext}
            disabled={step === 1 && !prompt && files.length === 0 && !url}
            className="ml-auto flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {step === 1 ? "Далее" : "Создать структуру"}
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
