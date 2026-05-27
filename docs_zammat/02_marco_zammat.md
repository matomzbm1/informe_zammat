# Marco Normativo Aplicable — Caso Equifax 2017

## Introducción

El caso Equifax 2017 involucra el tratamiento masivo de datos personales y 
una intrusión informática de escala global. A continuación se identifican 
4 normas aplicables, combinando legislación nacional chilena con marcos 
internacionales relevantes al caso.

---

## 1. Ley 19.628 — Protección de la Vida Privada (Chile, 1999)

**Tipo:** Nacional chilena  
**Organismo emisor:** Congreso Nacional de Chile  
**Artículos relevantes:** Art. 1, Art. 2, Art. 11, Art. 23

**Justificación de aplicabilidad:**  
Equifax operaba en Chile como agencia de reporte crediticio, almacenando 
datos personales y financieros de ciudadanos chilenos. El Art. 11 de esta 
ley establece la obligación del responsable del registro de adoptar medidas 
de seguridad para proteger los datos personales. La brecha de Equifax 
evidencia el incumplimiento directo de esta obligación al no aplicar el 
parche CVE-2017-5638 disponible desde marzo de 2017, exponiendo datos 
durante 76 días sin detección ni notificación oportuna a los afectados.

---

## 2. Ley 21.459 — Delitos Informáticos (Chile, 2022)

**Tipo:** Nacional chilena  
**Organismo emisor:** Congreso Nacional de Chile  
**Artículos relevantes:** Art. 2, Art. 3, Art. 6

**Justificación de aplicabilidad:**  
Los atacantes accedieron sin autorización a los servidores de Equifax 
explotando la vulnerabilidad CVE-2017-5638, conducta que encuadra 
directamente en el Art. 2 (acceso ilícito) de esta ley. Adicionalmente, 
la interceptación de datos durante 76 días configura el tipo del Art. 3 
(interceptación ilícita). Si el caso hubiera ocurrido bajo jurisdicción 
chilena, esta ley sería el instrumento penal principal para perseguir a 
los atacantes.

---

## 3. GDPR — Reglamento General de Protección de Datos (UE, 2016)

**Tipo:** Internacional  
**Organismo emisor:** Parlamento Europeo y Consejo de la UE  
**Artículos relevantes:** Art. 5, Art. 32, Art. 33, Art. 83

**Justificación de aplicabilidad:**  
Equifax operaba en el Reino Unido a través de su filial Equifax Ltd, 
afectando a 15,2 millones de ciudadanos británicos. El Art. 33 del GDPR 
exige notificar una brecha de datos a la autoridad supervisora en un plazo 
máximo de 72 horas. Equifax tardó 6 semanas en informar públicamente, 
incumpliendo directamente este requisito. Por este motivo la ICO (autoridad 
británica) multó a Equifax Ltd con 500.000 libras esterlinas.

---

## 4. FCRA — Fair Credit Reporting Act (EE.UU., 1970)

**Tipo:** Internacional  
**Organismo emisor:** Co