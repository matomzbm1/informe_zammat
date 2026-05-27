import { useState, useEffect } from 'react'
import { Shield, Moon, Sun } from 'lucide-react'
import Resumen from './components/Resumen'
import Marco from './components/Marco'
import Delitos from './components/Delitos'
import Comparacion from './components/Comparacion'
import Responsabilidades from './components/Responsabilidades'
import Datos from './components/Datos'
import Conclusiones from './components/Conclusiones'
import Prompts from './components/Prompts'

function App() {
  const [seccionActiva, setSeccionActiva] = useState('resumen')
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  const secciones = [
    { id: 'resumen', label: 'Resumen' },
    { id: 'marco', label: 'Marco Normativo' },
    { id: 'delitos', label: 'Delitos' },
    { id: 'comparacion', label: 'Comparación' },
    { id: 'responsabilidades', label: 'Responsabilidades' },
    { id: 'datos', label: 'Datos Personales' },
    { id: 'conclusiones', label: 'Conclusiones' },
    { id: 'prompts', label: 'Bitácora IA' },
  ]

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <header className="bg-slate-900 text-white py-8 px-6 shadow">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Shield size={40} className="text-red-400" />
            <div>
              <h1 className="text-3xl font-bold">Análisis Legal — Caso Equifax 2017</h1>
              <p className="text-slate-300 mt-1">TI3034 — Fundamentos de Seguridad de la Información</p>
            </div>
          </div>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="flex items-center gap-2 bg-slate-700 hover:bg-slate-600 transition-colors px-4 py-2 rounded-lg text-sm font-medium"
          >
            {darkMode ? <Sun size={16} className="text-yellow-400" /> : <Moon size={16} className="text-slate-300" />}
            {darkMode ? 'Modo claro' : 'Modo oscuro'}
          </button>
        </div>
      </header>

      <nav className="bg-slate-800 px-6">
        <div className="max-w-5xl mx-auto flex flex-wrap gap-1 py-2">
          {secciones.map((s) => (
            <button
              key={s.id}
              onClick={() => setSeccionActiva(s.id)}
              className={`px-3 py-2 rounded text-sm font-medium transition-colors ${
                seccionActiva === s.id
                  ? 'bg-white text-slate-900 dark:bg-slate-500 dark:text-white'
                  : 'text-slate-300 hover:bg-slate-700'
              }`}
            >
              {s.label}
            </button>
          ))}
        </div>
      </nav>

      <main className="flex-1 max-w-5xl mx-auto px-6 py-10 w-full">
        <div className="bg-white rounded-lg shadow p-8">
          {seccionActiva === 'resumen' && <Resumen />}
          {seccionActiva === 'marco' && <Marco />}
          {seccionActiva === 'delitos' && <Delitos />}
          {seccionActiva === 'comparacion' && <Comparacion />}
          {seccionActiva === 'responsabilidades' && <Responsabilidades />}
          {seccionActiva === 'datos' && <Datos />}
          {seccionActiva === 'conclusiones' && <Conclusiones />}
          {seccionActiva === 'prompts' && <Prompts />}
        </div>
      </main>

      <footer className="bg-slate-950 border-t-2 border-red-600 text-white px-6 py-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-6">

          <div className="flex items-center gap-3">
            <div className="bg-red-600 p-2 rounded">
              <Shield size={20} className="text-white" />
            </div>
            <div>
              <p className="text-white font-black text-sm tracking-tight">
                ANÁLISIS DE SEGURIDAD
              </p>
              <p className="text-red-500 font-black text-sm tracking-tight">
                CASO EQUIFAX 2017
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-1 font-mono">
            <div className="flex items-center gap-2">
              <span className="text-slate-500 text-xs">ANALISTA</span>
              <span className="text-slate-200 text-xs">Matias Zamora</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-slate-500 text-xs">ASIGNATURA</span>
              <span className="text-slate-200 text-xs">TI3034 — Fundamentos de Seguridad</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-slate-500 text-xs">DOCENTE</span>
              <span className="text-slate-200 text-xs">Rubén Schnettler L.</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-slate-500 text-xs">INSTITUCIÓN</span>
              <span className="text-slate-200 text-xs">INACAP Valparaíso</span>
            </div>
          </div>

        </div>
      </footer>

      <a
        href="https://github.com/matomzbm1"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 flex items-center gap-2 bg-slate-900 hover:bg-slate-700 text-white px-4 py-3 rounded-full shadow-lg transition-colors text-sm font-medium z-50"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
        </svg>
        @matomzbm1
      </a>
    </div>
  )
}

export default App