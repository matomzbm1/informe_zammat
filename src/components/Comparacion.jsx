import { BarChart2 } from 'lucide-react'

const marcos = [
  {
    nombre: 'Ley 19.628',
    subtitulo: 'Chile, 1999',
    color: 'blue',
    alcance: 'Territorio chileno. Aplica a personas naturales y jurídicas que traten datos de chilenos.',
    sancion: 'Indemnización de perjuicios por daño moral y patrimonial (Art. 23). Sin multa fija establecida.',
    sujeto: 'Toda persona natural o jurídica que administre registros o bancos de datos personales.',
    aplicabilidad: 'Equifax operaba en Chile. Incumplió Art. 11 al no proteger datos con medidas adecuadas.',
    nivel: 'Alta',
  },
  {
    nombre: 'GDPR',
    subtitulo: 'Unión Europea, 2016',
    color: 'green',
    alcance: 'Extraterritorial. Aplica a cualquier organización que trate datos de ciudadanos europeos.',
    sancion: 'Hasta 20 millones de euros o 4% de facturación global anual (Art. 83).',
    sujeto: 'Responsables y encargados del tratamiento de datos de residentes en la UE.',
    aplicabilidad: 'Afectó 15,2 millones de ciudadanos del Reino Unido. ICO multó a Equifax Ltd con 500.000 libras.',
    nivel: 'Alta',
  },
  {
    nombre: 'FCRA',
    subtitulo: 'Estados Unidos, 1970',
    color: 'yellow',
    alcance: 'Territorio estadounidense. Aplica a agencias de reporte crediticio.',
    sancion: 'Hasta 1.000 USD por infracción intencional más daños punitivos (Sección 616).',
    sujeto: 'Agencias de información crediticia (CRA) y usuarios de informes crediticios.',
    aplicabilidad: 'Equifax es una CRA regulada directamente. FTC aplicó multa de 700 millones USD.',
    nivel: 'Alta',
  },
]

const ejes = [
  { key: 'alcance', label: 'Alcance Jurisdiccional' },
  { key: 'sancion', label: 'Sanción Máxima' },
  { key: 'sujeto', label: 'Sujeto Regulado' },
  { key: 'aplicabilidad', label: 'Aplicabilidad al Caso Equifax' },
]

const headerColor = {
  blue: 'bg-blue-600',
  green: 'bg-green-600',
  yellow: 'bg-yellow-500',
}

const rowColor = {
  blue: 'bg-blue-50',
  green: 'bg-green-50',
  yellow: 'bg-yellow-50 dark:bg-yellow-900',
}

function Comparacion() {
  return (
    <div>
      <div className="flex items-center gap-3 mb-6">
        <BarChart2 size={28} className="text-slate-700" />
        <h2 className="text-2xl font-bold text-slate-800">
          Comparación de Marcos Regulatorios
        </h2>
      </div>

      <div className="overflow-x-auto rounded-lg border border-slate-200 mb-6">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-slate-800 text-white">
              <th className="px-4 py-3 text-left">Eje de Comparación</th>
              {marcos.map((m) => (
                <th key={m.nombre} className={`px-4 py-3 text-left ${headerColor[m.color]}`}>
                  <p className="font-bold">{m.nombre}</p>
                  <p className="text-xs font-normal opacity-80">{m.subtitulo}</p>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {ejes.map((eje, i) => (
              <tr key={eje.key} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                <td className="px-4 py-3 font-medium text-slate-700 border-r border-slate-200">
                  {eje.label}
                </td>
                {marcos.map((m) => (
                  <td
                    key={m.nombre}
                    className={`px-4 py-3 text-slate-600 border-r border-slate-200 ${
                      eje.key === 'aplicabilidad' ? rowColor[m.color] : ''
                    }`}
                  >
                    {eje.key === 'aplicabilidad' ? (
                      <div>
                        <span className="inline-block bg-green-600 text-white text-xs px-2 py-0.5 rounded-full mb-1">
                          {m.nivel}
                        </span>
                        <p>{m[eje.key]}</p>
                      </div>
                    ) : (
                      m[eje.key]
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
        <p className="text-sm font-semibold text-slate-700 mb-2">Conclusión Comparativa</p>
        <p className="text-sm text-slate-600 leading-relaxed">
          Los tres marcos coinciden en proteger datos personales pero difieren
          significativamente en alcance y sanción. El GDPR es el más estricto en términos
          de multas y el único con alcance extraterritorial explícito. La Ley 19.628 chilena
          carece de multas administrativas fijas, lo que debilita su poder disuasivo comparado
          con el GDPR y la FCRA. El caso Equifax demuestra que operar en múltiples
          jurisdicciones implica cumplir simultáneamente con todos los marcos aplicables,
          y que el incumplimiento de cualquiera conlleva consecuencias legales y económicas severas.
        </p>
      </div>
    </div>
  )
}

export default Comparacion