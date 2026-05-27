import { Scale } from 'lucide-react'

const normas = [
  {
    tipo: 'Nacional',
    color: 'blue',
    nombre: 'Ley 19.628 — Protección de la Vida Privada',
    pais: 'Chile, 1999',
    articulos: 'Art. 1, Art. 2, Art. 11, Art. 23',
    justificacion:
      'Equifax operaba en Chile almacenando datos personales y financieros de ciudadanos chilenos. El Art. 11 establece la obligación de adoptar medidas de seguridad para proteger los datos. La brecha evidencia el incumplimiento directo al no aplicar el parche CVE-2017-5638 disponible desde marzo de 2017, exponiendo datos durante 76 días sin notificación oportuna.',
  },
  {
    tipo: 'Nacional',
    color: 'blue',
    nombre: 'Ley 21.459 — Delitos Informáticos',
    pais: 'Chile, 2022',
    articulos: 'Art. 2, Art. 3, Art. 6',
    justificacion:
      'Los atacantes accedieron sin autorización a los servidores de Equifax explotando CVE-2017-5638, conducta que encuadra en el Art. 2 (acceso ilícito). La interceptación de datos durante 76 días configura el Art. 3 (interceptación ilícita). Bajo jurisdicción chilena, esta ley sería el instrumento penal principal para perseguir a los atacantes.',
  },
  {
    tipo: 'Internacional',
    color: 'green',
    nombre: 'GDPR — Reglamento General de Protección de Datos',
    pais: 'Unión Europea, 2016',
    articulos: 'Art. 5, Art. 32, Art. 33, Art. 83',
    justificacion:
      'Equifax operaba en Reino Unido afectando a 15,2 millones de ciudadanos británicos. El Art. 33 exige notificar una brecha en máximo 72 horas. Equifax tardó 6 semanas, incumpliendo directamente este requisito. La autoridad británica ICO multó a Equifax Ltd con 500.000 libras esterlinas por esta infracción.',
  },
  {
    tipo: 'Internacional',
    color: 'green',
    nombre: 'FCRA — Fair Credit Reporting Act',
    pais: 'Estados Unidos, 1970',
    articulos: 'Sección 609, Sección 611, Sección 623',
    justificacion:
      'Equifax es una agencia de reporte crediticio directamente regulada por la FCRA. La brecha expuso números de seguro social y datos financieros de 147,9 millones de estadounidenses, configurando incumplimiento grave de las obligaciones de resguardo de la Sección 623. La FTC usó esta ley como base para la multa de 700 millones de dólares.',
  },
]

function Marco() {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <Scale size={28} className="text-slate-700" />
          <h2 className="text-2xl font-bold text-slate-800">Marco Normativo Aplicable</h2>
        </div>
        <span className="bg-slate-800 text-white text-sm px-3 py-1 rounded-full">
          4 normas identificadas
        </span>
      </div>

      <div className="space-y-4">
        {normas.map((norma) => (
          <div key={norma.nombre} className="border border-slate-200 rounded-lg overflow-hidden">
            <div
              className={`px-5 py-3 flex items-center justify-between ${
                norma.color === 'blue' ? 'bg-blue-600' : 'bg-green-600'
              }`}
            >
              <p className="text-white font-semibold">{norma.nombre}</p>
              <span className="text-xs bg-white px-2 py-1 rounded-full font-medium
                text-slate-700">
                {norma.tipo}
              </span>
            </div>

            <div className="p-5 space-y-3">
              <p className="text-sm text-slate-500">{norma.pais}</p>

              <div className="bg-slate-100 rounded px-3 py-2">
                <p className="text-xs text-slate-500 uppercase tracking-wide mb-1">
                  Artículos relevantes
                </p>
                <p className="font-mono text-sm text-slate-700">{norma.articulos}</p>
              </div>

              <div>
                <p className="text-xs text-slate-500 uppercase tracking-wide mb-1">
                  Justificación de aplicabilidad al caso
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">{norma.justificacion}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Marco