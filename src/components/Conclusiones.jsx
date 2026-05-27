import { CheckCircle } from 'lucide-react'

const recomendaciones = [
  {
    numero: '01',
    titulo: 'Gestión oportuna de parches',
    descripcion:
      'El parche para CVE-2017-5638 estuvo disponible 2 meses antes de la intrusión. Toda organización debe implementar un proceso formal con plazos máximos de aplicación de parches críticos, idealmente no superiores a 30 días.',
  },
  {
    numero: '02',
    titulo: 'Segmentación de red',
    descripcion:
      'Datos de tres países estaban en sistemas interconectados. Una correcta segmentación habría limitado el alcance de la brecha, impidiendo acceso a todos los registros desde un único punto de entrada.',
  },
  {
    numero: '03',
    titulo: 'Monitoreo continuo de tráfico anómalo',
    descripcion:
      'Los atacantes permanecieron 76 días sin ser detectados. Un sistema IDS y monitoreo de comportamiento anómalo habría alertado sobre las ~9.000 consultas inusuales realizadas a las bases de datos internas.',
  },
  {
    numero: '04',
    titulo: 'Planes de respuesta ante incidentes',
    descripcion:
      'Equifax tardó 6 semanas en notificar la brecha. Toda organización debe contar con protocolos claros de notificación a autoridades y afectados dentro de los plazos legales exigidos.',
  },
]

const sintesis = [
  { norma: 'Ley 19.628 (Chile)', estado: 'Incumplido', detalle: 'No aplicó medidas de seguridad adecuadas', color: 'red' },
  { norma: 'GDPR (UE)', estado: 'Incumplido', detalle: 'No notificó en 72 horas según Art. 33', color: 'red' },
  { norma: 'FCRA (EE.UU.)', estado: 'Incumplido', detalle: 'No protegió datos crediticios adecuadamente', color: 'red' },
  { norma: 'Ley 21.459 (Chile)', estado: 'N/A', detalle: 'Aplica a los atacantes, no a Equifax', color: 'slate' },
]

const estadoColor = {
  red: 'bg-red-100 text-red-700',
  slate: 'bg-slate-100 text-slate-600',
}

function Conclusiones() {
  return (
    <div>
      <div className="flex items-center gap-3 mb-6">
        <CheckCircle size={28} className="text-green-600" />
        <h2 className="text-2xl font-bold text-slate-800">
          Conclusiones y Recomendaciones
        </h2>
      </div>

      <h3 className="text-lg font-bold text-slate-700 mb-4">
        Recomendaciones de Seguridad
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {recomendaciones.map((r) => (
          <div key={r.numero} className="border border-slate-200 rounded-lg p-5">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-3xl font-black text-slate-200">{r.numero}</span>
              <p className="font-bold text-slate-800">{r.titulo}</p>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">{r.descripcion}</p>
          </div>
        ))}
      </div>

      <h3 className="text-lg font-bold text-slate-700 mb-4">
        Síntesis Normativa
      </h3>

      <div className="border border-slate-200 rounded-lg overflow-hidden mb-8">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-slate-800 text-white">
              <th className="px-4 py-3 text-left">Norma</th>
              <th className="px-4 py-3 text-left">Estado</th>
              <th className="px-4 py-3 text-left">Detalle</th>
            </tr>
          </thead>
          <tbody>
            {sintesis.map((s, i) => (
              <tr key={s.norma} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                <td className="px-4 py-3 font-medium text-slate-700">{s.norma}</td>
                <td className="px-4 py-3">
                  <span className={`text-xs font-semibold px-2 py-1 rounded-full ${estadoColor[s.color]}`}>
                    {s.estado}
                  </span>
                </td>
                <td className="px-4 py-3 text-slate-600">{s.detalle}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="bg-green-50 border border-green-200 rounded-lg p-5">
        <p className="text-sm font-bold text-green-800 mb-2">Reflexión Final</p>
        <p className="text-sm text-green-900 leading-relaxed mb-3">
          El caso Equifax aceleró debates legislativos sobre protección de datos en múltiples
          países y demostró que ninguna organización, por grande que sea, está exenta de sufrir
          una brecha de seguridad. La pregunta no es si ocurrirá, sino cuándo, y qué tan
          preparada está la organización para responder.
        </p>
        <p className="text-sm text-green-900 leading-relaxed">
          En el contexto chileno, este caso evidencia las limitaciones de la Ley 19.628 en
          términos de sanciones económicas disuasivas. La reforma introducida por la Ley 21.719
          (2024) busca modernizar este marco, acercándolo a estándares internacionales como el
          GDPR, lo que representa un avance significativo para la protección de los datos
          personales de los ciudadanos chilenos.
        </p>
      </div>
    </div>
  )
}

export default Conclusiones