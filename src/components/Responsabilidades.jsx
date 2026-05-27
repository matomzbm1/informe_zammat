import { Users } from 'lucide-react'

const actores = [
  {
    nombre: 'Los Atacantes',
    descripcion: 'Grupo vinculado por el Departamento de Justicia de EE.UU. a miembros del Ejército Popular de Liberación de China.',
    responsabilidades: [
      {
        tipo: 'Penal',
        color: 'red',
        norma: 'Art. 2 y Art. 3 — Ley 21.459',
        descripcion: 'Bajo jurisdicción chilena hipotética, serían imputados por acceso ilícito e interceptación ilícita. El Art. 2 sanciona el acceso no autorizado a sistemas informáticos con presidio menor en grado mínimo. El Art. 3 sanciona la interceptación ilícita de datos con presidio menor en grado mínimo a medio. Ambos delitos son acumulables dada la reiteración de conductas durante 76 días.',
      },
      {
        tipo: 'Civil',
        color: 'orange',
        norma: 'Art. 2314 — Código Civil Chile',
        descripcion: 'El Art. 2314 establece que quien causa daño a otro por un hecho ilícito está obligado a indemnizar. Los atacantes serían responsables por perjuicios patrimoniales y morales causados a los 147,9 millones de afectados cuyos datos fueron robados y utilizados fraudulentamente para suplantación de identidad y fraude financiero.',
      },
    ],
  },
  {
    nombre: 'Equifax Inc.',
    descripcion: 'Empresa responsable del tratamiento de datos personales. Agencia de reporte crediticio que operaba en múltiples países.',
    responsabilidades: [
      {
        tipo: 'Civil',
        color: 'orange',
        norma: 'Art. 23 — Ley 19.628 Chile',
        descripcion: 'El Art. 23 establece que toda persona que sufra daño por el tratamiento indebido de sus datos tiene derecho a indemnización. Equifax incumplió el Art. 11 al no aplicar el parche CVE-2017-5638 disponible desde marzo de 2017, lo que derivó en una multa de 700 millones USD pagada a la FTC y en miles de demandas individuales por daños patrimoniales y morales.',
      },
      {
        tipo: 'Administrativa',
        color: 'yellow',
        norma: 'Art. 33 — GDPR (UE)',
        descripcion: 'El Art. 33 del GDPR exige notificar una brecha de datos a la autoridad supervisora en un plazo máximo de 72 horas desde su descubrimiento. Equifax descubrió la brecha el 29 de julio de 2017 y no la notificó públicamente hasta el 7 de septiembre, tardando 6 semanas. La ICO del Reino Unido impuso una multa de 500.000 libras esterlinas por este incumplimiento directo.',
      },
    ],
  },
  {
    nombre: 'Ejecutivos de Equifax',
    descripcion: 'Richard Smith (CEO) y Susan Mauldin (CISO), responsables de la gestión del riesgo y la seguridad informática de la empresa.',
    responsabilidades: [
      {
        tipo: 'Administrativa',
        color: 'yellow',
        norma: 'Art. 11 — Ley 19.628 Chile',
        descripcion: 'El Art. 11 establece que el responsable del registro debe adoptar medidas de seguridad necesarias para proteger los datos. Esta obligación recae sobre quienes dirigen la organización. Richard Smith (CEO) fue citado ante el Congreso de EE.UU. y obligado a renunciar. Susan Mauldin (CISO) también renunció. Ambos enfrentaron consecuencias administrativas directas por no implementar controles básicos como la aplicación oportuna del parche CVE-2017-5638.',
      },
      {
        tipo: 'Civil',
        color: 'orange',
        norma: 'Art. 2329 — Código Civil Chile',
        descripcion: 'El Art. 2329 establece que todo daño imputable a malicia o negligencia de una persona debe ser reparado por ella. No aplicar un parche crítico disponible durante más de 60 días constituye negligencia grave e inexcusable que los hace personalmente responsables por los perjuicios derivados de la brecha, de forma independiente a la responsabilidad corporativa de Equifax Inc. como entidad jurídica.',
      },
    ],
  },
]

const badgeColor = {
  red: 'bg-red-100 text-red-700 border border-red-200',
  orange: 'bg-orange-100 text-orange-700 border border-orange-200',
  yellow: 'bg-yellow-100 text-yellow-700 border border-yellow-200',
}

function Responsabilidades() {
  return (
    <div>
      <div className="flex items-center gap-3 mb-6">
        <Users size={28} className="text-slate-700" />
        <h2 className="text-2xl font-bold text-slate-800">
          Responsabilidades Legales de los Actores
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch">
        {actores.map((actor) => (
          <div key={actor.nombre} className="border border-slate-200 rounded-lg overflow-hidden flex flex-col">
            <div className="bg-slate-800 px-4 py-3">
              <p className="text-white font-bold">{actor.nombre}</p>
            </div>

            <div className="p-4 flex flex-col flex-1">
              <p className="text-sm text-slate-500 mb-4 leading-relaxed">{actor.descripcion}</p>

              <div className="space-y-4 flex-1">
                {actor.responsabilidades.map((r) => (
                  <div key={r.tipo} className="bg-slate-50 rounded-lg p-3 flex flex-col">
                    <span className={`text-xs font-semibold px-2 py-1 rounded-full w-fit ${badgeColor[r.color]}`}>
                      {r.tipo}
                    </span>
                    <p className="text-xs font-mono text-slate-600 mt-2 mb-1">{r.norma}</p>
                    <p className="text-sm text-slate-600 leading-relaxed">{r.descripcion}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Responsabilidades