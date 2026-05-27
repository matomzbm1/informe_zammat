import { Database } from 'lucide-react'

const datosPersonales = [
  'Nombres completos de 147,9 millones de personas',
  'Fechas de nacimiento',
  'Direcciones domiciliarias',
  'Números de licencias de conducir',
]

const datosSensibles = [
  'Números de seguro social (SSN) — equivalente al RUT en Chile',
  'Historial crediticio completo de los afectados',
  'Números de tarjetas de crédito con fechas de vencimiento (209.000 registros)',
]

const derechosARCO = [
  {
    letra: 'A',
    nombre: 'Acceso',
    color: 'blue',
    articulo: 'Art. 12 — Ley 19.628',
    cita: 'Toda persona tiene derecho a exigir al responsable del banco de datos que le comunique los datos relativos a su persona, su procedencia y destinatario, el propósito del almacenamiento y la individualización de las personas u organismos a los cuales sus datos son transmitidos regularmente.',
    vulneracion: 'Equifax almacenaba datos de millones de personas sin su conocimiento ni consentimiento explícito. Los afectados no sabían que Equifax procesaba sus datos y no pudieron ejercer su derecho de acceso. Adicionalmente, al descubrir la brecha el 29 de julio de 2017, Equifax tardó 6 semanas en notificar públicamente, privando a los titulares de tomar medidas de protección oportunas.',
  },
  {
    letra: 'R',
    nombre: 'Rectificación',
    color: 'yellow',
    articulo: 'Art. 12 — Ley 19.628',
    cita: 'El titular de los datos tendrá, además, derecho a que se modifiquen los datos cuando sean erróneos, inexactos, equívocos o incompletos, y a que se cancelen o bloqueen cuando su almacenamiento carezca de fundamento legal o cuando estuvieren caducos.',
    vulneracion: 'El uso fraudulento de los datos robados generó información crediticia errónea e inexacta en los historiales de los afectados: deudas falsas, cuentas bancarias no autorizadas y transacciones fraudulentas. Los titulares no podían rectificar esta información porque desconocían la brecha durante las 6 semanas en que Equifax ocultó el incidente.',
  },
  {
    letra: 'C',
    nombre: 'Cancelación',
    color: 'red',
    articulo: 'Art. 12 — Ley 19.628',
    cita: 'El titular podrá, en cualquier momento, revocar la autorización que hubiere otorgado para el tratamiento de sus datos personales y exigir que estos sean cancelados cuando no sean necesarios o pertinentes para la finalidad para la cual hubieran sido recopilados.',
    vulneracion: 'Equifax recopilaba y almacenaba datos personales y sensibles de ciudadanos sin obtener autorización individual de cada titular. Al no informar sobre sus prácticas de almacenamiento, los afectados nunca pudieron revocar una autorización que no sabían haber otorgado ni exigir la cancelación de sus datos antes de la brecha.',
  },
]

const letraColor = {
  blue: 'bg-blue-600',
  yellow: 'bg-yellow-500',
  red: 'bg-red-600',
}

function Datos() {
  return (
    <div>
      <div className="flex items-center gap-3 mb-6">
        <Database size={28} className="text-slate-700" />
        <h2 className="text-2xl font-bold text-slate-800">
          Tratamiento de Datos Personales
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
        <div className="border border-blue-200 rounded-lg overflow-hidden">
          <div className="bg-blue-600 px-4 py-3">
            <p className="text-white font-bold">Datos Personales</p>
            <p className="text-blue-100 text-xs mt-0.5">Art. 2 — Ley 19.628</p>
          </div>
          <div className="p-4">
            <ul className="space-y-2">
              {datosPersonales.map((d) => (
                <li key={d} className="flex items-start gap-2 text-sm text-slate-600">
                  <span className="text-blue-500 mt-0.5">•</span>
                  {d}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border border-red-200 rounded-lg overflow-hidden">
          <div className="bg-red-600 px-4 py-3">
            <p className="text-white font-bold">Datos Sensibles</p>
            <p className="text-red-100 text-xs mt-0.5">Art. 2 inc. 6 — Ley 19.628</p>
          </div>
          <div className="p-4">
            <ul className="space-y-2">
              {datosSensibles.map((d) => (
                <li key={d} className="flex items-start gap-2 text-sm text-slate-600">
                  <span className="text-red-500 mt-0.5">•</span>
                  {d}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-8">
        <p className="text-sm font-semibold text-slate-700 mb-1">Distinción clave</p>
        <p className="text-sm text-slate-600 leading-relaxed">
          Los datos personales permiten identificar a una persona. Los datos sensibles
          van más allá: revelan aspectos privados de su situación financiera y pueden
          ser utilizados para causarle daño directo. La Ley 19.628 otorga mayor
          protección a los datos sensibles precisamente por este mayor riesgo.
        </p>
      </div>

      <h3 className="text-lg font-bold text-slate-800 mb-4">Derechos ARCO Vulnerados</h3>

      <div className="space-y-4">
        {derechosARCO.map((d) => (
          <div key={d.letra} className="border border-slate-200 rounded-lg overflow-hidden">
            <div className="flex items-center gap-4 p-4">
              <div className={`${letraColor[d.color]} text-white text-2xl font-black w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0`}>
                {d.letra}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <p className="font-bold text-slate-800">Derecho de {d.nombre}</p>
                  <span className="text-xs font-mono bg-slate-100 text-slate-600 px-2 py-0.5 rounded">
                    {d.articulo}
                  </span>
                </div>
                <p className="text-sm text-slate-500 italic mb-2">"{d.cita}"</p>
                <div className="bg-red-50 border border-red-100 rounded p-2">
                  <p className="text-xs text-slate-500 uppercase tracking-wide mb-1">
                    Cómo fue vulnerado en Equifax
                  </p>
                  <p className="text-sm text-slate-600">{d.vulneracion}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Datos