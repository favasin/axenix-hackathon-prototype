import { Link } from "react-router";
import {
  Sparkles,
  Plus,
  Search,
  MoreVertical,
  FileText,
  Clock,
  User,
  Settings,
  LogOut,
  Folder,
  Star,
} from "lucide-react";

const mockProjects = [
  {
    id: "1",
    title: "Питч для инвестора Q1 2026",
    slides: 15,
    updatedAt: "2 часа назад",
    thumbnail: "blue",
  },
  {
    id: "2",
    title: "Еженедельный отчет по продажам",
    slides: 8,
    updatedAt: "Вчера",
    thumbnail: "purple",
  },
  {
    id: "3",
    title: "Стратегическая презентация для клиента",
    slides: 22,
    updatedAt: "3 дня назад",
    thumbnail: "green",
  },
  {
    id: "4",
    title: "Обучающий материал для команды",
    slides: 12,
    updatedAt: "1 неделю назад",
    thumbnail: "orange",
  },
];

export function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-50">
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
              <Link
                to="/create"
                className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-5 py-2.5 rounded-lg font-medium hover:opacity-90 transition-opacity"
              >
                <Plus className="w-5 h-5" />
                Создать презентацию
              </Link>

              <div className="relative group">
                <button className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                    <User className="w-5 h-5 text-white" />
                  </div>
                  <span className="font-medium text-gray-700">Иван И.</span>
                </button>

                <div className="hidden group-hover:block absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border py-1">
                  <a
                    href="#"
                    className="flex items-center gap-2 px-4 py-2 hover:bg-gray-50"
                  >
                    <User className="w-4 h-4" />
                    <span className="text-sm">Профиль</span>
                  </a>
                  <Link
                    to="/brand-kit"
                    className="flex items-center gap-2 px-4 py-2 hover:bg-gray-50"
                  >
                    <Settings className="w-4 h-4" />
                    <span className="text-sm">Brand Kit</span>
                  </Link>
                  <div className="border-t my-1"></div>
                  <a
                    href="#"
                    className="flex items-center gap-2 px-4 py-2 hover:bg-gray-50 text-red-600"
                  >
                    <LogOut className="w-4 h-4" />
                    <span className="text-sm">Выйти</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Sidebar + Content */}
        <div className="flex gap-8">
          {/* Sidebar */}
          <aside className="w-64 flex-shrink-0">
            <nav className="space-y-1">
              <a
                href="#"
                className="flex items-center gap-3 px-4 py-3 rounded-lg bg-blue-50 text-blue-700 font-medium"
              >
                <FileText className="w-5 h-5" />
                Все презентации
              </a>
              <a
                href="#"
                className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-100"
              >
                <Star className="w-5 h-5" />
                Избранное
              </a>
              <a
                href="#"
                className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-100"
              >
                <Clock className="w-5 h-5" />
                Недавние
              </a>
              <a
                href="#"
                className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-100"
              >
                <Folder className="w-5 h-5" />
                Папки
              </a>
            </nav>

            <div className="mt-8 p-4 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">
                Бесплатный тариф
              </h3>
              <p className="text-sm text-gray-600 mb-3">
                2 из 3 презентаций использовано
              </p>
              <div className="w-full bg-gray-200 rounded-full h-2 mb-3">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full w-2/3"></div>
              </div>
              <Link
                to="/pricing"
                className="block text-center text-sm font-medium text-blue-600 hover:text-blue-700"
              >
                Перейти на Pro →
              </Link>
            </div>
          </aside>

          {/* Main Content Area */}
          <main className="flex-1">
            {/* Search and Filters */}
            <div className="mb-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Найти презентацию..."
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                />
              </div>
            </div>

            {/* Projects Grid */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Мои презентации
              </h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Create New Card */}
                <Link
                  to="/create"
                  className="border-2 border-dashed border-gray-300 rounded-xl p-8 hover:border-blue-400 hover:bg-blue-50/50 transition-all group"
                >
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 group-hover:from-blue-200 group-hover:to-purple-200 rounded-full flex items-center justify-center mx-auto mb-4 transition-colors">
                      <Plus className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Создать презентацию
                    </h3>
                    <p className="text-sm text-gray-500">
                      Начните с нуля или загрузите данные
                    </p>
                  </div>
                </Link>

                {/* Project Cards */}
                {mockProjects.map((project) => (
                  <div
                    key={project.id}
                    className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow group"
                  >
                    <Link
                      to={`/editor/${project.id}`}
                      className={`block h-40 bg-gradient-to-br ${
                        project.thumbnail === "blue"
                          ? "from-blue-400 to-blue-600"
                          : project.thumbnail === "purple"
                          ? "from-purple-400 to-purple-600"
                          : project.thumbnail === "green"
                          ? "from-green-400 to-green-600"
                          : "from-orange-400 to-orange-600"
                      } p-6 relative`}
                    >
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
                      <div className="relative text-white">
                        <Sparkles className="w-8 h-8 opacity-50" />
                      </div>
                    </Link>

                    <div className="p-4">
                      <div className="flex justify-between items-start mb-2">
                        <Link
                          to={`/editor/${project.id}`}
                          className="flex-1 min-w-0"
                        >
                          <h3 className="font-semibold text-gray-900 truncate hover:text-blue-600">
                            {project.title}
                          </h3>
                        </Link>
                        <button className="flex-shrink-0 p-1 hover:bg-gray-100 rounded">
                          <MoreVertical className="w-5 h-5 text-gray-400" />
                        </button>
                      </div>

                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span className="flex items-center gap-1">
                          <FileText className="w-4 h-4" />
                          {project.slides} слайдов
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {project.updatedAt}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
