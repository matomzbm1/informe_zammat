import { FileText } from 'lucide-react'

function Resumen() {
  return (
    <div>
      <div className="flex items-center gap-3 mb-6">
        <FileText size={28} className="text-slate-700" />
        <h2 className="text-2xl font-bold text-slate-800">Resumen Ejecutivo del Caso</h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
        {[
          { label: 'Fecha inicio', value: '13 mayo 2017' },
          { label: 'Divulgación', value: '7 sept. 2017' },
          { label: 'Afectados', value: '147,9 millones' },
          { label: 'Multa', value: '~700 millones USD' },
        ].map((item) => (
          <div key={item.label} className="bg-slate-50 border border-slate-200 rounded-lg p-4">
            <p className="text-xs text-slate-500 uppercase tracking-wide">{item.label}</p>
            <p className="text-sm font-semibold text-slate-800 mt-1">{item.value}</p>
          </div>
        ))}
      </div>

      <div className="space-y-4 text-slate-600 leading-relaxed">
        <p>
          En mayo de 2017, atacantes desconocidos explotaron la vulnerabilidad
          CVE-2017-5638 en Apache Struts, un framework utilizado en el portal web
          de disputas de Equifax. Esta falla permitía ejecutar código remoto sin
          autenticación. A pesar de que el parche correctivo había sido publicado
          en marzo de 2017, Equifax no lo aplicó a tiempo, dejando sus sistemas
          expuestos durante meses.
        </p>
        <p>
          La intrusión comenzó el 13 de mayo de 2017 y se prolongó hasta el 30 de
          julio del mismo año, permaneciendo sin detección durante 76 días. Equifax
          descubrió la brecha el 29 de julio de 2017, pero no la informó públicamente
          hasta el 7 de septiembre de 2017, seis semanas después del descubrimiento.
        </p>
        <p>
          La víctima principal fue Equifax Inc., una de las tres agencias de reporte
          crediticio más grandes del mundo. Los atacantes fueron posteriormente
          vinculados por el Departamento de Justicia de EE.UU. a miembros del
          Ejército Popular de Liberación de China. Los afectados fueron aproximadamente
          147,9 millones de personas en Estados Unidos, Reino Unido y Canadá.
        </p>
        <p>
          Los datos filtrados incluyeron nombres completos, números de seguro social,
          fechas de nacimiento, direcciones domiciliarias, números de licencias de
          conducir y aproximadamente 209.000 números de tarjetas de crédito. El impacto
          económico fue de aproximadamente 700 millones de dólares en multas. El CEO
          Richard Smith y la CISO Susan Mauldin renunciaron a sus cargos.
        </p>
      </div>

      <div className="mt-6 bg-red-50 border border-red-200 rounded-lg p-4">
        <p className="text-sm font-semibold text-red-800">Vulnerabilidad explotada</p>
        <p className="text-sm text-red-700 mt-1">
          CVE-2017-5638 — Apache Struts Framework. Parche disponible desde marzo 2017,
          no aplicado por Equifax durante más de 2 meses.
        </p>
      </div>
      <div className="mt-8">
        <p className="text-sm font-bold text-slate-700 mb-4">Línea de tiempo del incidente</p>
        <div className="relative">
          <div className="absolute left-0 right-0 top-5 h-0.5 bg-slate-200 z-0" />
          <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { fecha: 'Mar 2017', evento: 'Parche CVE-2017-5638 publicado', color: 'bg-yellow-500' },
              { fecha: '13 May 2017', evento: 'Inicio de la intrusión', color: 'bg-red-600' },
              { fecha: '29 Jul 2017', evento: 'Equifax descubre la brecha', color: 'bg-orange-500' },
              { fecha: '7 Sep 2017', evento: 'Divulgación pública', color: 'bg-slate-700' },
            ].map((item) => (
              <div key={item.fecha} className="flex flex-col items-center text-center">
                <div className={`w-10 h-10 rounded-full ${item.color} flex items-center justify-center mb-2`}>
                  <div className="w-3 h-3 bg-white rounded-full" />
                </div>
                <p className="text-xs font-bold text-slate-700">{item.fecha}</p>
                <p className="text-xs text-slate-500 mt-1 leading-tight">{item.evento}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Resumen