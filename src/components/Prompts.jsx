import { Bot, ChevronDown, ChevronUp } from 'lucide-react'
import { useState } from 'react'

const secciones = [
  {
    nombre: 'Resumen Ejecutivo',
    prompt: `Actúa como analista de ciberseguridad. Redacta un resumen ejecutivo del caso Equifax 2017 en español para un informe académico universitario. Debe incluir qué ocurrió (brecha de datos, vulnerabilidad Apache Struts CVE-2017-5638), cuándo ocurrió (mayo–julio 2017, descubierto en julio, divulgado en septiembre), quiénes participaron (Equifax como víctima/responsable, atacantes externos, 147.9 millones de afectados en EE.UU., UK y Canadá), datos comprometidos (nombres, RUT/SSN, fechas nacimiento, direcciones, números de tarjetas de crédito) e impacto económico y reputacional (multa FTC ~700 millones USD, demandas). 3 a 5 párrafos, tono académico, sin bullets, en español.`,
    acepto: 'La estructura general, los datos del incidente y las fechas.',
    correccion: 'Se agregó manualmente la referencia al Ejército Popular de Liberación de China como actor vinculado, ya que la respuesta inicial indicaba solo "atacantes desconocidos", lo que era impreciso considerando que el DOJ de EE.UU. formalizó cargos en 2020.',
  },
  {
    nombre: 'Marco Normativo',
    prompt: `Redacta el contenido del archivo 02_marco.md para el análisis legal del caso Equifax 2017 bajo criterio 2.1.1 de una rúbrica universitaria chilena. Debe incluir exactamente 4 normas con justificación aplicada al caso: Ley 19.628 (Chile) justificando por qué aplica citando un hecho concreto, Ley 21.459 (Chile) justificando con la intrusión no autorizada, GDPR (UE) porque Equifax operaba en UK y afectó ciudadanos europeos, y FCRA (EE.UU.) porque Equifax es una agencia de reporte crediticio. Para cada norma incluir nombre completo, año, país/organismo emisor, artículos relevantes y párrafo de justificación citando un hecho concreto del caso Equifax 2017. Formato Markdown con encabezados ##.`,
    acepto: 'La estructura de las 4 normas y sus justificaciones.',
    correccion: 'Se verificó manualmente el número de artículos citados de la Ley 19.628. La IA citó el Art. 9 inicialmente, que corresponde a datos de organismos públicos y no aplica al caso. Se reemplazó por Art. 11 que establece las obligaciones de seguridad para el responsable del registro.',
  },
  {
    nombre: 'Tipificación de Delitos',
    prompt: `Redacta el archivo 03_delitos.md para el caso Equifax 2017, aplicando la Ley 21.459 de Chile como análisis hipotético: "si el caso hubiera ocurrido bajo jurisdicción chilena". Mapea las acciones del atacante con estos 3 artículos: Art. 2 (acceso ilícito) porque los atacantes explotaron CVE-2017-5638 para acceder sin autorización, Art. 3 (interceptación ilícita) porque capturaron datos durante 76 días, y Art. 6 (fraude informático) por el uso posterior de los datos robados. Para cada artículo incluir número y nombre, texto resumido del artículo, acción concreta del atacante en Equifax y análisis de por qué esa acción encuadra en ese artículo. Formato Markdown.`,
    acepto: 'El mapeo de los tres artículos y el análisis de cada uno.',
    correccion: 'Se agregó la aclaración explícita de que el análisis es hipotético bajo jurisdicción chilena, ya que la respuesta inicial no mencionaba este contexto y podría generar confusión académica.',
  },
  {
    nombre: 'Comparación de Marcos Regulatorios',
    prompt: `Redacta el archivo 04_comparacion.md para el caso Equifax 2017. Crea una tabla Markdown con exactamente 3 marcos y 4 ejes de comparación. Marcos: Ley 19.628 (Chile, 1999), GDPR (UE, 2016) y FCRA (EE.UU., 1970). Ejes: alcance jurisdiccional, sanción máxima, sujeto regulado y aplicabilidad explícita al caso Equifax. La tabla debe tener una columna final "Aplicabilidad al caso Equifax" con análisis específico para cada marco. Incluye párrafo introductorio y uno de conclusión comparativa. Formato Markdown con tabla.`,
    acepto: 'La estructura de la tabla y los tres marcos comparados.',
    correccion: 'Se verificó el monto de la multa de la ICO al Reino Unido. La IA indicó inicialmente 800.000 libras, pero el monto real fue 500.000 libras esterlinas según el reporte oficial de la ICO de 2018.',
  },
  {
    nombre: 'Responsabilidades Legales',
    prompt: `Redacta el archivo 05_responsabilidades.md para el caso Equifax 2017. Identifica 3 actores con 2 tipos de responsabilidad cada uno. Actor 1: los atacantes con responsabilidad penal (Art. 2 y Art. 3 Ley 21.459) y civil (Art. 2314 Código Civil chileno). Actor 2: Equifax Inc. con responsabilidad civil (Art. 23 Ley 19.628) y administrativa (Art. 33 GDPR). Actor 3: ejecutivos Richard Smith y Susan Mauldin con responsabilidad administrativa (Art. 11 Ley 19.628) y civil (Art. 2329 Código Civil). Para cada actor y tipo cita el artículo o norma específica. Formato Markdown.`,
    acepto: 'La identificación de los tres actores y sus responsabilidades.',
    correccion: 'Se agregó la referencia al Art. 2329 del Código Civil para los ejecutivos, ya que la respuesta inicial solo citaba el Art. 2314 sin distinguir entre responsabilidad por hecho propio (2314) y por negligencia (2329), distinción relevante para el caso de los directivos.',
  },
  {
    nombre: 'Datos Personales',
    prompt: `Redacta el archivo 06_datos.md para el caso Equifax 2017 bajo la Ley 19.628 de Chile. Sección A: clasifica los datos comprometidos en personales (según Art. 2: nombres, fechas nacimiento, direcciones, licencias de conducir) y sensibles (según Art. 2 inc. 6: SSN, historial crediticio, tarjetas de crédito). Explica la distinción legal entre ambos tipos. Sección B: analiza 3 derechos ARCO afectados (Acceso, Rectificación y Cancelación) con cita textual del Art. 12 de la Ley 19.628 y descripción de cómo fue vulnerado cada derecho en el caso Equifax. Formato Markdown.`,
    acepto: 'La clasificación de datos y el análisis de los derechos ARCO.',
    correccion: 'Se reformuló la descripción del derecho de Cancelación ya que la IA lo describía como si los afectados hubieran solicitado la eliminación y Equifax se hubiera negado, lo cual no ocurrió. La vulneración real fue la imposibilidad de ejercerlo por falta de transparencia sobre las prácticas de almacenamiento.',
  },
  {
    nombre: 'Conclusiones',
    prompt: `Redacta el archivo 07_conclusiones.md para el caso Equifax 2017. Incluye: 4 recomendaciones de seguridad basadas en las fallas del caso (gestión de parches, segmentación de red, monitoreo IDS y plan de respuesta ante incidentes), una tabla Markdown de síntesis normativa con nivel de cumplimiento de Equifax para cada marco (Ley 19.628, GDPR, FCRA, Ley 21.459), y una reflexión final sobre el impacto del caso en la legislación chilena mencionando la Ley 21.719 como reforma modernizadora. Formato Markdown.`,
    acepto: 'Las 4 recomendaciones y la tabla de síntesis.',
    correccion: 'Se verificó el año de la Ley 21.719 ya que la IA indicó 2023. La ley fue promulgada en diciembre de 2024, por lo que se corrigió la referencia temporal en el texto.',
  },
]

function SeccionPrompt({ seccion, index }) {
  const [abierto, setAbierto] = useState(false)

  return (
    <div className="border border-slate-200 rounded-lg overflow-hidden">
      <button
        onClick={() => setAbierto(!abierto)}
        className="w-full flex items-center justify-between px-4 py-3 bg-slate-50 hover:bg-slate-100 transition-colors"
      >
        <div className="flex items-center gap-2">
          <span className="bg-slate-800 text-white text-xs px-2 py-0.5 rounded-full">
            Sección {index + 1}
          </span>
          <p className="font-semibold text-slate-800 text-sm">{seccion.nombre}</p>
        </div>
        {abierto ? <ChevronUp size={16} className="text-slate-500" /> : <ChevronDown size={16} className="text-slate-500" />}
      </button>

      {abierto && (
        <div className="p-4 space-y-4">
          <div>
            <p className="text-xs text-slate-500 uppercase tracking-wide font-semibold mb-2">
              Prompt utilizado
            </p>
            <div className="bg-slate-900 rounded-lg p-4">
              <p className="text-green-400 text-sm font-mono leading-relaxed whitespace-pre-wrap">
                {seccion.prompt}
              </p>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
            <p className="text-xs text-blue-700 font-semibold uppercase tracking-wide mb-1">
              Qué se aceptó
            </p>
            <p className="text-sm text-slate-600">{seccion.acepto}</p>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-3">
            <p className="text-xs text-amber-700 font-semibold uppercase tracking-wide mb-1">
              Qué se corrigió y por qué
            </p>
            <p className="text-sm text-slate-600">{seccion.correccion}</p>
          </div>
        </div>
      )}
    </div>
  )
}

function Prompts() {
  return (
    <div>
      <div className="flex items-center gap-3 mb-4">
        <Bot size={28} className="text-slate-700" />
        <h2 className="text-2xl font-bold text-slate-800">Bitácora de Uso de IA</h2>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
        <p className="text-sm text-blue-800">
          <strong>Herramienta:</strong> Claude (claude.ai) — chatbot externo utilizado para
          investigación del caso, redacción de archivos Markdown y generación de componentes React.
          Haz click en cada sección para ver el prompt completo, lo que se aceptó y lo que se corrigió.
        </p>
      </div>

      <div className="space-y-3 mb-8">
        {secciones.map((s, i) => (
          <SeccionPrompt key={s.nombre} seccion={s} index={i} />
        ))}
      </div>

      <div className="bg-slate-800 rounded-lg p-5 text-white">
        <p className="font-bold mb-3">Reflexión — IA como Agente vs Chatbot</p>
        <p className="text-slate-300 text-sm leading-relaxed mb-3">
          Como chatbot externo, Claude no tenía acceso al proyecto. Cada prompt debía incluir
          todo el contexto necesario (nombre del caso, normas específicas, estructura esperada),
          lo que requirió prompts más detallados pero generó mayor control sobre el resultado.
          Fue útil principalmente para la investigación y redacción de contenido legal.
        </p>
        <p className="text-slate-300 text-sm leading-relaxed">
          Un agente integrado como Copilot puede leer los archivos del proyecto directamente,
          reduciendo errores de integración. Para proyectos futuros combinaría ambas herramientas:
          chatbot externo para investigación legal y agente integrado para construcción de
          componentes React.
        </p>
      </div>
    </div>
  )
}

export default Prompts