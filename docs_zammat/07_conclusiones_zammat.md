# Conclusiones y Recomendaciones — Caso Equifax 2017

## Introducción

El caso Equifax 2017 representa uno de los incidentes de ciberseguridad más
significativos de la historia moderna. A continuación se presentan las
principales lecciones aprendidas, recomendaciones de seguridad y una
reflexión final sobre el impacto del caso en la legislación global.

---

## Recomendaciones de Seguridad

### 1. Gestión oportuna de parches
El parche para CVE-2017-5638 estuvo disponible desde marzo de 2017, dos
meses antes de la intrusión. Equifax no lo aplicó a tiempo. Toda organización
debe implementar un proceso formal de gestión de vulnerabilidades con plazos
máximos de aplicación de parches críticos, idealmente no superiores a 30 días.

### 2. Segmentación de red
Los datos de ciudadanos de tres países distintos (EE.UU., UK y Canadá)
estaban almacenados en sistemas interconectados. Una correcta segmentación
de red habría limitado el alcance de la brecha, impidiendo que los atacantes
accedieran a todos los registros desde un único punto de entrada.

### 3. Monitoreo continuo de tráfico anómalo
Los atacantes permanecieron dentro de los sistemas durante 76 días sin ser
detectados. Un sistema de detección de intrusiones (IDS) y monitoreo de
comportamiento anómalo habría alertado sobre las aproximadamente 9.000
consultas inusuales realizadas a las bases de datos internas.

### 4. Planes de respuesta ante incidentes
Equifax tardó 6 semanas en notificar públicamente la brecha tras descubrirla.
Toda organización que maneje datos personales debe contar con un plan de
respuesta ante incidentes que incluya protocolos claros de notificación a
autoridades y afectados dentro de los plazos legales exigidos.

---

## Síntesis Normativa

| Norma | Cumplimiento de Equifax |
|---|---|
| Ley 19.628 (Chile) | Incumplido — no aplicó medidas de seguridad adecuadas |
| GDPR (UE) | Incumplido — no notificó en 72 horas según Art. 33 |
| FCRA (EE.UU.) | Incumplido — no protegió datos crediticios adecuadamente |
| Ley 21.459 (Chile) | N/A — aplica a los atacantes, no a Equifax |

---

## Reflexión Final

El caso Equifax aceleró debates legislativos sobre protección