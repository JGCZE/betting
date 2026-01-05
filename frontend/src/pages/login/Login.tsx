import { Link } from "@tanstack/react-router"; // Předpokládám, že používáš TanStack Router
import { User, Lock, ArrowRight } from "lucide-react"; // Ikonky pro hezčí vzhled (volitelné)

const LoginPage = () => {
  return (
    // Hlavní kontejner - vycentruje vše na střed obrazovky
    <div className="my-20 flex items-center justify-center p-4 mx-auto">

      {/* Karta přihlášení */}
      <div className="max-w-96 bg-gray-800 border border-gray-700 rounded-2xl shadow-2xl p-8">

        {/* Nadpis */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Vítejte zpět</h1>
          <p className="text-gray-400 text-sm">Přihlaste se ke svému účtu</p>
        </div>

        {/* Formulář */}
        <form className="space-y-6">

          {/* 1. Input - Email */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-300 block">
              Email
            </label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
              <input
                className="w-full bg-gray-900 border border-gray-600 text-white rounded-lg py-2.5 pl-10 pr-4 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors placeholder:text-gray-600"
                placeholder="vas@email.cz"
                type="email"
              />
            </div>
          </div>

          {/* 2. Input - Heslo */}
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <label className="text-sm font-medium text-gray-300 block">
                Heslo
              </label>
              <a className="text-xs text-blue-400 hover:text-blue-300" href="#">
                Zapomenuté heslo?
              </a>
            </div>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
              <input
                className="w-full bg-gray-900 border border-gray-600 text-white rounded-lg py-2.5 pl-10 pr-4 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors placeholder:text-gray-600"
                placeholder="••••••••"
                type="password"
              />
            </div>
          </div>

          {/* Tlačítko Přihlásit */}
          <button
            className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-4 rounded-xl transition-all transform active:scale-95 flex items-center justify-center gap-2"
            type="button" // Změň na "submit", až budeš mít logiku
          >
            Přihlásit se
            <ArrowRight className="w-4 h-4" />
          </button>

        </form>

        {/* Patička - Registrace */}
        <div className="mt-8 text-center text-sm text-gray-400 border-t border-gray-700 pt-6">
          Ještě nemáte účet?{" "}
          <Link
            className="text-blue-400 font-semibold hover:text-blue-300 hover:underline transition-colors"
            to="/register" // Uprav podle své routy
          >
            Zaregistrujte se
          </Link>
        </div>

      </div>
    </div>
  )
}

export default LoginPage