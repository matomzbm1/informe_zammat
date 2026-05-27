# Bitácora de Uso de Inteligencia Artificial — Caso Equifax 2017

## Herramienta utilizada
Claude (claude.ai) — chatbot externo utilizado para investigación del caso,
redacción de archivos Markdown y generación de componentes React.

---

## Sección 1 — Resumen Ejecutivo

**Prompt utilizado:**
"Actúa como analista de ciberseguridad. Redacta un resumen ejecutivo del caso
Equifax 2017 en español para un informe académico universitario. Debe incluir
qué ocurrió (brecha de datos, vulnerabilidad Apache Struts CVE-2017-5638),
cuándo ocurrió, quiénes participaron, datos comprometidos e impacto económico.
3 a 5 párrafos, tono académico, sin bullets, en español."

**Qué se aceptó:** La estructura general, los datos del incidente y las fechas.

**Qué se corrigió:** Se agregó manualmente la referencia al Ejército Popular
de Liberación de China como actor vinculado, ya que la respuesta inicial
indicaba solo "atacantes desconocidos", lo que era impreciso considerando
que el DOJ de EE.UU. formalizó cargos en 2020.

---

## Sección 2 — Marco Normativo

**Prompt utilizado:**
"Redacta el contenido del archivo 02_marco.md para el análisis legal del caso
Equifax 2017 bajo criterio 2.1.1. Debe incluir 4 normas con justificación
aplicada al caso: Ley 19.628 (Chile), Ley 21.459 (Chile), GDPR (UE) y FCRA
(EE.UU.). Para cada norma incluir artículos relevantes y párrafo de
justificación citando un hecho concreto del caso Equifax 2017."

**Qué se aceptó:** La estructura de las 4 normas y sus justificaciones.

**Qué se corrigió:** Se verificó manualmente el número de artículos citados
de la Ley 19.628 ya que la IA citó el Art. 9 inicialmente, que corresponde
a datos de organismos públicos y no aplica al caso. Se reemplazó por Art. 11
que establece las obligaciones de seguridad para el responsable del registro.

---

## Sección 3 — Tipificación de Delitos

**Prompt utilizado:**
"Redacta el archivo 03_delitos.md para el caso Equifax 2017 aplicando la
Ley 21.459 de Chile como análisis hipotético. Mapea las acciones del atacante
con Art. 2 (acceso ilícito), Art. 3 (interceptación ilícita) y Art. 6
(fraude informático). Para cada artículo incluir texto legal resumido, acción
concreta del atacante y análisis de tipificación."

**Qué se aceptó:** El mapeo de los tres artículos y el análisis de cada uno.

**Qué se corrigió:** Se agregó la aclaración explícita de que el análisis
es hipotético bajo jurisdicción chilena, ya que la respuesta inicial no
mencionaba este contexto y podría generar confusión académica.

---

## Sección 4 — Comparación de Marcos Regulatorios

**Prompt utilizado:**
"Redacta el archivo 04_comparacion.md para el caso Equifax 2017. Crea una
tabla Markdown comparando Ley 19.628 (Chile), GDPR (UE) y FCRA (EE.UU.)
con 4 ejes: alcance jurisdiccional, sanción máxima, sujeto regulado y
aplicabilidad al caso Equifax. Incluye columna explícita de aplicabilidad."

**Qué se aceptó:** La estructura de la tabla y los tres marcos comparados.

**Qué se corrigió:** Se verificó el monto de la multa de la ICO al Reino
Unido. La IA indicó inicialmente 800.000 libras, pero el monto real fue
500.000 libras esterlinas según el reporte oficial de la ICO de 2018.

---

## Sección 5 — Responsabilidades Legales

**Prompt utilizado:**
"Redacta el archivo 05_responsabilidades.md para el caso Equifax 2017.
Identifica 3 actores: los atacantes, Equifax Inc. y los ejecutivos Richard
Smith y Susan Mauldin. Para cada actor distingue 2 tipos de responsabilidad
(penal, civil o administrativa) citando artículos de la Ley 21.459, Ley
19.628 y Código Civil chileno."

**Qué se aceptó:** La identificación de los tres actores y sus responsabilidades.

**Qué se corrigió:** Se agregó la referencia al Art. 2329 del Código Civil
para los ejecutivos, ya que la respuesta inicial solo citaba el Art. 2314
sin distinguir entre responsabilidad por hecho propio (2314) y por negligencia
(2329), distinción relevante para el caso de los directivos.

---

## Sección 6 — Datos Personales

**Prompt utilizado:**
"Redacta el archivo 06_datos.md para el caso Equifax 2017 bajo la Ley 19.628
de Chile. Clasifica los datos comprometidos en personales y sensibles según
Art. 2 y Art. 2 inc. 6. Analiza 3 derechos ARCO afectados (Acceso,
Rectificación, Cancelación) con cita textual del Art. 12 y descripción de
cómo fue vulnerado cada derecho en el caso."

**Qué se aceptó:** La clasificación de datos y el análisis de los derechos ARCO.

**Qué se corrigió:** Se reformuló la descripción del derecho de Cancelación
ya que la IA lo describía como si los afectados hubieran solicitado la
eliminación de sus datos y Equifax se hubiera negado, lo cual no ocurrió.
La vulneración real fue la imposibilidad de ejercerlo por falta de
transparencia sobre las prácticas de almacenamiento de Equifax.

---

## Sección 7 — Conclusiones

**Prompt utilizado:**
"Redacta el archivo 07_conclusiones.md para el caso Equifax 2017. Incluye
4 recomendaciones de seguridad basadas en las fallas identificadas (parches,
segmentación de red, monitoreo IDS, plan de respuesta ante incidentes), una
tabla de síntesis normativa con nivel de cumplimiento de Equifax para cada
marco, y una reflexión final sobre el impacto del caso en la legislación
chilena, mencionando la Ley 21.719."

**Qué se aceptó:** Las 4 recomendaciones y la tabla de síntesis.

**Qué se corrigió:** Se verificó el año de la Ley 21.719 ya que la IA
indicó 2023. La ley fue promulgada en diciembre de 2024, por lo que se
corrigió la referencia temporal en el texto.

---

## Reflexión Final — IA como Agente vs Chatbot

Durante el desarrollo de este informe utilicé Claude como chatbot externo
(claude.ai) en lugar de un agente integrado como GitHub Copilot.

**Diferencias observadas:**

Como **chatbot externo**, Claude no tenía acceso al proyecto ni a los
archivos creados. Cada prompt debía incluir todo el contexto necesario
(nombre del caso, normas específicas, estructura esperada), lo que requirió
prompts más detallados pero también generó mayor control sobre el resultado.
Fue útil principalmente para la investigación y redacción de contenido legal.

Como **agente** (Copilot en VS Code), el asistente puede leer los archivos
abiertos del proyecto, conocer la estructura de carpetas y crear o modificar
archivos directamente. Esto reduce errores de integración y es más eficiente
para tareas de programación que involucran múltiples archivos.

**Conclusión:** Para la parte legal e investigativa del informe, el chatbot
externo fue suficiente y flexible. Para la construcción de los componentes
React, un agente integrado habría sido más eficiente al tener contexto directo
del proyecto. En proyectos futuros combinaría ambas herramientas según la
naturaleza de la tarea.