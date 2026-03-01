import { Link } from "react-router";
import { Sparkles, Home, ArrowLeft } from "lucide-react";

export function NotFoundPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-blue-50 flex items-center justify-center p-4">
      <div className="text-center max-w-md">
        <div className="mb-8">
          <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Sparkles className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-9xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            404
          </h1>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Страница не найдена
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            К сожалению, запрашиваемая страница не существует или была перемещена
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:opacity-90"
          >
            <Home className="w-5 h-5" />
            На главную
          </Link>
          <button
            onClick={() => window.history.back()}
            className="flex items-center justify-center gap-2 border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium hover:border-gray-400"
          >
            <ArrowLeft className="w-5 h-5" />
            Назад
          </button>
        </div>
      </div>
    </div>
  );
}
