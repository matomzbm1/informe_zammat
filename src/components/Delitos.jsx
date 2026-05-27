import { AlertTriangle } from 'lucide-react'

const delitos = [
  {
    articulo: 'Art. 2',
    nombre: 'Acceso Ilícito',
    pena: 'Presidio menor grado mínimo',
    texto:
      'El que sin autorización o excediendo la autorización que posea acceda a un sistema informático será penado con presidio menor en su grado mínimo o multa de once a veinte unidades tributarias mensuales.',
    accion:
  'Los atacantes explotaron la vulnerabilidad CVE-2017-5638 en el portal web de disputas de crédito de Equifax el 13 de mayo de 2017. Este portal utilizaba Apache Struts 2, un framework desactualizado que permitía ejecutar comandos remotos sin autenticación. Mediante esta falla obtuvieron acceso no autorizado a los servidores internos y se movieron lateralmente por la red interna de Equifax durante 76 días continuos, sin poseer en ningún momento autorización de la empresa para acceder a dichos sistemas.',
    analisis:
      'La conducta encuadra en el Art. 2 ya que los atacantes accedieron deliberadamente a sistemas de Equifax sin poseer ningún tipo de autorización. El uso de una vulnerabilidad conocida como vector de entrada agrava la intencionalidad del acto.',
    severidad: 'Alta',
  },
  {
    articulo: 'Art. 3',
    nombre: 'Interceptación Ilícita',
    pena: 'Presidio menor grado mínimo a medio',
    texto:
      'El que indebidamente intercepte, interrumpa o interfiera un sistema informático será penado con presidio menor en su grado mínimo a medio.',
    accion:
      'Los atacantes instalaron herramientas de exfiltración que interceptaron datos personales en tránsito durante 76 días. Realizaron aproximadamente 9.000 consultas a bases de datos internas, extrayendo registros de 147,9 millones de personas.',
    analisis:
      'La intercepción sistemática de datos durante más de dos meses configura el Art. 3. Los atacantes interfirieron activamente con el flujo de datos internos al instalar software de captura, afectando la confidencialidad e integridad de la información.',
    severidad: 'Alta',
  },
  {
    articulo: 'Art. 6',
    nombre: 'Fraude Informático',
    pena: 'Presidio menor grado medio a máximo',
    texto:
      'El que, mediante manipulación informática o artificio semejante, consiga la transferencia no consentida de cualquier activo en perjuicio de otro, será penado con presidio menor en su grado medio a máximo.',
    accion:
      'Los datos robados — incluyendo 209.000 números de tarjetas de crédito y millones de números de seguro social — fueron utilizados para cometer fraudes financieros, suplantación de identidad y apertura no autorizada de cuentas bancarias.',
    analisis:
      'El uso posterior de los datos para obtener beneficios económicos no consentidos configura el Art. 6. La explotación de CVE-2017-5638 fue el medio para conseguir una transferencia no consentida de activos con valor económico directo, causando perjuicio patrimonial a los afectados.',
    severidad: 'Alta',
  },
]

function Delitos() {
  return (
    <div>
      <div className="flex items-center gap-3 mb-4">
        <AlertTriangle size={28} className="text-red-600" />
        <h2 className="text-2xl font-bold text-slate-800">
          Tipificación de Delitos Informáticos
        </h2>
      </div>

      <div className="bg-amber-50 border border-amber-200 rounded-lg px-4 py-3 mb-6">
        <p className="text-sm text-amber-800">
          <strong>Nota:</strong> Análisis hipotético bajo jurisdicción chilena —
          Ley 21.459 sobre Delitos Informáticos (vigente desde junio 2022).
        </p>
      </div>

      <div className="space-y-6">
        {delitos.map((d) => (
          <div key={d.articulo} className="border border-slate-200 rounded-lg overflow-hidden">
            <div className="bg-red-600 px-5 py-3 flex items-center justify-between">
              <div>
                <span className="text-white font-bold text-lg">{d.articulo}</span>
                <span className="text-red-100 font-medium ml-2">— {d.nombre}</span>
              </div>
              <span className="text-xs bg-red-800 text-white px-2 py-1 rounded-full">
                Severidad: {d.severidad}
              </span>
            </div>

            <div className="p-5 space-y-4">
              <div className="bg-slate-50 border-l-4 border-red-400 pl-4 py-2">
                <p className="text-xs text-slate-500 uppercase tracking-wide mb-1">
                  Texto legal
                </p>
                <p className="text-sm text-slate-600 italic">"{d.texto}"</p>
                <p className="text-xs text-slate-400 mt-1">Pena: {d.pena}</p>
              </div>

              <div>
                <p className="text-xs text-slate-500 uppercase tracking-wide mb-1">
                  Acción del atacante en Equifax
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">{d.accion}</p>
              </div>

              <div className="bg-red-50 rounded-lg p-3">
                <p className="text-xs text-slate-500 uppercase tracking-wide mb-1">
                  Análisis de tipificación
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">{d.analisis}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Delitos