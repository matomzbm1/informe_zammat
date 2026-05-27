# Tipificación de Delitos Informáticos — Caso Equifax 2017

## Introducción

El siguiente análisis aplica la Ley 21.459 sobre Delitos Informáticos de Chile
como ejercicio hipotético: "si el caso Equifax 2017 hubiera ocurrido bajo
jurisdicción chilena, ¿qué delitos serían imputables a los atacantes?".
Se identifican 3 artículos con mapeo directo a las acciones del atacante.

---

## Artículo 2 — Acceso Ilícito

**Texto legal (Ley 21.459, Art. 2):**
"El que sin autorización o excediendo la autorización que posea acceda a un
sistema informático será penado con presidio menor en su grado mínimo o multa
de once a veinte unidades tributarias mensuales."

**Acción del atacante en Equifax:**
Los atacantes explotaron la vulnerabilidad CVE-2017-5638 en Apache Struts
el 13 de mayo de 2017, obteniendo acceso no autorizado a los servidores
internos de Equifax. Este acceso no contó en ningún momento con autorización
de Equifax y se mantuvo activo de forma encubierta durante 76 días.

**Análisis de tipificación:**
La conducta encuadra perfectamente en el Art. 2 ya que los atacantes
accedieron deliberadamente a sistemas informáticos de Equifax sin poseer
ningún tipo de autorización. El uso de una vulnerabilidad conocida como
vector de entrada no elimina el carácter ilícito del acceso, sino que
agrava la intencionalidad del acto.

---

## Artículo 3 — Interceptación Ilícita

**Texto legal (Ley 21.459, Art. 3):**
"El que indebidamente intercepte, interrumpa o interfiera un sistema
informático será penado con presidio menor en su grado mínimo a medio."

**Acción del atacante en Equifax:**
Una vez dentro de los sistemas, los atacantes instalaron herramientas de
exfiltración que interceptaron y capturaron datos personales en tránsito
durante 76 días continuos. Se estima que realizaron aproximadamente 9.000
consultas a bases de datos internas, extrayendo registros de 147,9 millones
de personas sin interrumpir el funcionamiento visible del sistema.

**Análisis de tipificación:**
La intercepción sistemática de datos durante más de dos meses configura
el tipo del Art. 3. Los atacantes no solo accedieron al sistema, sino que
interfirieron activamente con el flujo de datos internos al instalar
software de captura y exfiltración, afectando la integridad y
confidencialidad de la información procesada.

---

## Artículo 6 — Fraude Informático

**Texto legal (Ley 21.459, Art. 6):**
"El que, mediante manipulación informática o artificio semejante, consiga
la transferencia no consentida de cualquier activo en perjuicio de otro,
será penado con presidio menor en su grado medio a máximo."

**Acción del atacante en Equifax:**
Los datos robados — incluyendo 209.000 números de tarjetas de crédito con
fechas de vencimiento y millones de números de seguro social — fueron
utilizados posteriormente para cometer fraudes financieros, suplantación
de identidad y apertura no autorizada de cuentas bancarias en perjuicio
directo de los afectados.

**Análisis de tipificación:**
El uso posterior de los datos extraídos para obtener beneficios económicos
no consentidos configura el tipo del Art. 6. La manipulación informática
inicial (explotación de CVE-2017-5638) fue el medio para conseguir una
transferencia no consentida de activos de información con valor económico
directo, causando perjuicio patrimonial a los afectados.