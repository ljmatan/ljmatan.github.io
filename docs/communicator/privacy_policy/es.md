---
layout: doc
---

# Política de privacidad — Sono AAC Communicator

**Última actualización: 23 de febrero de 2026**

---

## 1. Introducción e identidad del responsable del tratamiento

Sono es una aplicación de comunicación por pictogramas diseñada para ayudar a las personas a expresarse mediante imágenes y palabras habladas.

**Responsable del tratamiento:** La entidad responsable del tratamiento de datos personales en relación con esta aplicación es:

> **Matan Ljubas**
> Contacto: **[dirección de correo electrónico de contacto — a completar antes de la publicación]**

**Representante en la UE (cuando proceda):** Si el editor está establecido fuera del Espacio Económico Europeo (EEE), se requiere un representante en la UE en virtud del artículo 27 del Reglamento General de Protección de Datos (RGPD). Cuando sea necesario, el representante en la UE es:

> **[Nombre y dirección del representante en la UE — a completar si el editor está establecido fuera del EEE]**

**El principio fundamental:** Sono está diseñada para funcionar íntegramente en su dispositivo. No recopila datos personales de forma remota, no crea cuentas de usuario, no le rastrea y no transmite su actividad de comunicación a ningún servidor.

---

## 2. Información almacenada en su dispositivo

Sono almacena una pequeña cantidad de datos de preferencias localmente en su dispositivo. Estos datos nunca abandonan el dispositivo, a menos que usted realice explícitamente una copia de seguridad del dispositivo mediante un servicio de terceros (como iCloud o Google Drive), que se rige por la política de privacidad de dicho servicio.

| Dato | Descripción | Ubicación |
|---|---|---|
| Nombre de visualización | Un nombre que el cuidador establece para el usuario (p. ej., «Alex») | Sistema de archivos del dispositivo |
| Preferencia de género | Preferencia visual (neutro / masculino / femenino) para variantes de ilustraciones | Sistema de archivos del dispositivo |
| Activación de corrección de frases por IA | Si el modelo de lenguaje en el dispositivo está habilitado | Sistema de archivos del dispositivo |
| Selección de voz | La voz de síntesis de voz elegida | Sistema de archivos del dispositivo |
| Fotos de símbolos personalizadas | Fotos asignadas a símbolos de comunicación por el cuidador | Sistema de archivos del dispositivo |
| Índice de fotos personalizadas | Un mapa local que vincula los ID de símbolos con las rutas de archivos de fotos | Sistema de archivos del dispositivo |

**El historial de mensajes** (frases pronunciadas recientemente) se conserva **solo en memoria** durante la sesión actual de la aplicación. No se escribe en el disco y se pierde de forma permanente cuando se cierra la aplicación.

---

## 3. Uso de esta información

La información indicada anteriormente se utiliza únicamente para hacer funcionar la aplicación en su dispositivo:

- **Nombre de visualización** — se muestra como saludo en la pantalla de inicio.
- **Preferencia de género** — selecciona variantes de ilustraciones apropiadas según el género.
- **Activación de IA** — determina si el modelo de lenguaje en el dispositivo mejora las frases pronunciadas.
- **Selección de voz** — impulsa el motor de síntesis de voz.
- **Fotos personalizadas** — se muestran en las tarjetas de símbolos en lugar de las ilustraciones predeterminadas.

Ninguna de esta información se utiliza con fines analíticos, publicitarios, de elaboración de perfiles ni para ningún otro propósito que no sea el funcionamiento local de la aplicación en su dispositivo.

---

## 4. Base jurídica del tratamiento (RGPD)

Cuando se aplica el Reglamento General de Protección de Datos (UE) 2016/679, las bases jurídicas en virtud del artículo 6 del RGPD para el tratamiento de los datos descritos en la sección 2 son las siguientes:

| Dato | Base jurídica | Explicación |
|---|---|---|
| Nombre de visualización, preferencia de género, activación de IA, selección de voz | **Art. 6(1)(b) — Ejecución de un contrato** | Estas preferencias son necesarias para proporcionar la funcionalidad principal de la aplicación según la configuración del usuario/cuidador. |
| Fotos de símbolos personalizadas | **Art. 6(1)(a) — Consentimiento** | El cuidador asigna explícitamente una foto a un símbolo. El consentimiento puede retirarse en cualquier momento eliminando la foto mediante el menú de pulsación prolongada. |

Ningún tratamiento se basa en elaboración de perfiles automatizada, y ninguna decisión de tratamiento tiene efectos jurídicos o efectos igualmente significativos sobre ningún individuo (véase también la sección 13, Derecho a no ser objeto de una decisión automatizada).

---

## 5. Inteligencia artificial en el dispositivo

Cuando la función de corrección de frases por IA está habilitada, la aplicación utiliza un modelo de lenguaje de gran tamaño (LLM) que funciona en su dispositivo para hacer que las frases pronunciadas suenen más naturales. Este procesamiento se realiza **íntegramente en su dispositivo**:

- El modelo (Qwen2.5-0.5B-Instruct, aproximadamente 400 MB) se descarga una sola vez desde un repositorio público (Hugging Face) y se almacena localmente.
- Ninguna frase, símbolo ni ninguna otra entrada que usted escriba o seleccione se envía nunca a un servidor externo para su procesamiento por IA.
- Si la función de IA está deshabilitada o el modelo no ha sido descargado, la aplicación recurre a un motor gramatical basado en reglas integrado.
- La función de IA no genera perfiles, toma de decisiones automatizada ni inferencias sobre ningún individuo.

---

## 6. Síntesis de voz

Sono ofrece dos modos de síntesis de voz:

**Voces sin conexión (recomendadas):** La aplicación puede descargar modelos de voz específicos para cada idioma desde un repositorio público (Sherpa-ONNX / GitHub releases). Una vez descargados, toda la síntesis de voz se realiza íntegramente en su dispositivo sin transmisión externa de datos.

**Voces del sistema del dispositivo (alternativa):** Cuando no hay una voz sin conexión disponible para el idioma seleccionado, la aplicación utiliza el servicio de síntesis de voz integrado en su dispositivo (proporcionado por Apple o Google, según su dispositivo). Estos servicios del sistema se rigen por las políticas de privacidad de Apple y Google respectivamente, y **pueden transmitir el texto hablado a sus servidores** para sintetizarlo. Puede evitar esto descargando una voz sin conexión en **Ajustes > Voz**.

---

## 7. Conexiones a Internet opcionales

Sono no requiere ninguna conexión a Internet obligatoria. La aplicación funciona completamente sin conexión tras la instalación.

La única actividad de red que se produce es cuando usted elige descargar recursos opcionales:

- **Modelo de lenguaje de IA** — se descarga desde Hugging Face (`huggingface.co`) cuando pulsa «Descargar modelo» en Ajustes. Aproximadamente 400 MB.
- **Modelos de voz sin conexión** — se descargan desde las versiones de Sherpa-ONNX en GitHub (`github.com`) cuando selecciona y descarga una voz en Ajustes. El tamaño del modelo varía según el idioma.

Estas descargas solo transfieren los datos inherentes a cualquier solicitud HTTPS (su dirección IP y las cabeceras de solicitud básicas). No se incluye información personal, contenido de comunicación ni datos de uso en estas solicitudes. Una vez descargados, los modelos funcionan completamente sin conexión.

---

## 8. Permisos del dispositivo

La aplicación solicita los siguientes permisos del dispositivo:

| Permiso | Motivo de la solicitud |
|---|---|
| **Cámara** | Para tomar una foto y asignarla a un símbolo de comunicación. Las fotos se almacenan solo localmente y nunca se transmiten. |
| **Biblioteca de fotos** | Para seleccionar una foto existente y asignarla a un símbolo de comunicación. La foto seleccionada se copia solo localmente y nunca se transmite. |

La aplicación no solicita acceso a la ubicación, contactos, micrófono (para grabación), Bluetooth, datos de salud ni ningún otro permiso sensible más allá de los enumerados anteriormente.

---

## 9. Información que no recopilamos

Sono no recopila, transmite ni almacena ninguno de los siguientes elementos:

- Contenido de las comunicaciones (frases pronunciadas o símbolos pulsados)
- Patrones de uso, duración de la sesión o frecuencia de uso
- Identificadores del dispositivo, identificadores publicitarios o datos de huella digital
- Informes de fallos o registros de diagnóstico enviados a un servidor remoto
- Nombres, direcciones de correo electrónico ni ningún identificador personal más allá de los introducidos localmente por el cuidador
- Datos de localización de ningún tipo
- Datos biométricos o relacionados con la salud

No hay SDK de análisis, redes publicitarias ni bibliotecas de seguimiento de terceros integradas en la aplicación.

---

## 10. Servicios de terceros

Los únicos servicios de terceros involucrados en la aplicación son las fuentes opcionales de descarga de modelos y los servicios de plataforma a nivel de dispositivo:

| Servicio | Función | Política de privacidad |
|---|---|---|
| Hugging Face (`huggingface.co`) | Aloja el archivo del modelo de lenguaje de IA opcional | [huggingface.co/privacy](https://huggingface.co/privacy) |
| GitHub (`github.com`) | Aloja los archivos de modelos de voz sin conexión opcionales | [docs.github.com/en/site-policy/privacy-policies](https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement) |
| Apple TTS (iOS, alternativa) | Síntesis de voz del dispositivo cuando no hay voz sin conexión instalada | [apple.com/legal/privacy](https://www.apple.com/legal/privacy/) |
| Google TTS (Android, alternativa) | Síntesis de voz del dispositivo cuando no hay voz sin conexión instalada | [policies.google.com/privacy](https://policies.google.com/privacy) |

La aplicación no mantiene ninguna relación con redes publicitarias, proveedores de análisis ni intermediarios de datos.

---

## 11. Transferencias internacionales de datos

La propia aplicación no transfiere datos personales a nivel internacional. Sin embargo, cuando usted elige descargar archivos de modelos de IA o TTS, esas solicitudes se envían a servidores operados por Hugging Face y GitHub, que están basados en los Estados Unidos.

Estas descargas no contienen datos personales más allá de la información estándar de cualquier solicitud HTTPS (dirección IP, cabeceras de solicitud). No se transmite ningún contenido de comunicación, preferencia de usuario ni información identificativa de ningún individuo.

Cuando se aplica el RGPD, las transferencias de datos personales a los Estados Unidos se basan en:
- El Marco de Privacidad de Datos UE-EE. UU. (cuando el destinatario está certificado), o
- Las cláusulas contractuales tipo (CCT) adoptadas por la Comisión Europea, o
- El hecho de que no se transmite ningún dato personal en el sentido del RGPD en las solicitudes pertinentes, lo que hace inaplicable el Capítulo V del RGPD a dichas transferencias.

Para el tratamiento realizado por Apple TTS y Google TTS (cuando se utilizan como alternativa), consulte las políticas de privacidad respectivas de Apple y Google y sus mecanismos de transferencia publicados.

---

## 12. Privacidad de los menores

Sono está diseñada para ayudar a personas de todas las edades que se benefician de la comunicación por pictogramas, incluidos los niños.

Dado que la aplicación no recopila datos personales de forma remota y funciona íntegramente en el dispositivo, presenta un riesgo mínimo para la privacidad de todos los usuarios, incluidos los niños.

**UE/EEE — Edad de consentimiento digital (artículo 8 del RGPD):** En la Unión Europea y el Espacio Económico Europeo, la edad a la que una persona puede consentir el tratamiento de datos relacionado con servicios digitales varía según el Estado miembro (entre 13 y 16 años). Cuando la aplicación es utilizada por un menor por debajo de la edad de consentimiento digital aplicable, se requiere el consentimiento del titular de la responsabilidad parental para cualquier tratamiento de datos. En esta aplicación, el único tratamiento que requiere consentimiento es la asignación de fotos personalizadas (véase la sección 4). Se anima a los padres y tutores a revisar y configurar estos ajustes.

Si elige descargar un modelo de IA o TTS, esas descargas se realizan a través de una conexión HTTPS cifrada. Los padres y tutores que deseen impedir cualquier acceso a Internet por parte de la aplicación pueden hacerlo restringiendo el acceso a Internet a nivel del dispositivo o del enrutador — la aplicación seguirá funcionando plenamente con los modelos descargados anteriormente.

---

## 13. Sus derechos en virtud del RGPD

Si usted se encuentra en el Espacio Económico Europeo, el Reino Unido u otra jurisdicción con legislación equivalente en materia de protección de datos, tiene los siguientes derechos respecto a los datos personales tratados en relación con esta aplicación. Dado que prácticamente todos los datos se almacenan localmente en su dispositivo y usted los controla directamente, la mayoría de los derechos pueden ser ejercidos por usted en cualquier momento a través de la propia aplicación.

| Derecho | Cómo ejercerlo |
|---|---|
| **Derecho de acceso (art. 15)** | Todos los datos almacenados están en su dispositivo. Puede ver el nombre de visualización y los ajustes directamente en Ajustes del cuidador. Las fotos personalizadas son visibles en el tablero de símbolos. |
| **Derecho de rectificación (art. 16)** | Modifique cualquier información almacenada directamente en Ajustes del cuidador en cualquier momento. |
| **Derecho de supresión / «derecho al olvido» (art. 17)** | Elimine fotos personalizadas individuales mediante el menú de pulsación prolongada del símbolo. Elimine todos los datos de la aplicación desinstalándola. |
| **Derecho a la limitación del tratamiento (art. 18)** | Deshabilite funciones específicas (p. ej., desactivar la IA, eliminar una foto personalizada) para restringir el tratamiento asociado. |
| **Derecho a la portabilidad de los datos (art. 20)** | Los datos de la aplicación se almacenan en formatos estándar (texto plano, JSON, formatos de imagen comunes) en el directorio aislado de la aplicación. En las plataformas compatibles, puede acceder a ellos mediante herramientas de copia de seguridad del dispositivo. |
| **Derecho de oposición (art. 21)** | Puede oponerse en cualquier momento al tratamiento basado en intereses legítimos poniéndose en contacto con nosotros (véase la sección 18). Cuando el tratamiento se basa en el consentimiento, consulte el derecho a retirar el consentimiento a continuación. |
| **Derecho a retirar el consentimiento (art. 7(3))** | Cuando el tratamiento se basa en el consentimiento (fotos personalizadas), puede retirar su consentimiento en cualquier momento eliminando la foto. La retirada no afecta a la licitud del tratamiento anterior a la misma. |
| **Derecho a no ser objeto de una decisión automatizada (art. 22)** | La aplicación no realiza toma de decisiones automatizada ni elaboración de perfiles que produzca efectos jurídicos o efectos igualmente significativos sobre las personas. |

Para ejercer derechos que no puedan atenderse directamente en la aplicación, o para plantear una preocupación sobre nuestras prácticas en materia de datos, póngase en contacto con nosotros utilizando los datos de la sección 18.

---

## 14. Conservación y eliminación de datos

**Datos de sesión (historial de mensajes):** Se borran automáticamente cada vez que se cierra la aplicación. No se persisten en el disco.

**Datos de preferencias (nombre, género, activación, selección de voz):** Se conservan en el dispositivo hasta que el cuidador cambia el ajuste manualmente o hasta que se desinstala la aplicación.

**Fotos personalizadas:** Se conservan en el dispositivo hasta que se eliminan individualmente mediante el menú de pulsación prolongada del símbolo, o hasta que se desinstala la aplicación.

**Archivos de modelos de IA y TTS:** Se conservan en el dispositivo hasta que se eliminan a través de Ajustes, o hasta que se desinstala la aplicación.

**Para eliminar todos los datos de la aplicación:** La desinstalación de la aplicación de su dispositivo elimina todos los archivos almacenados localmente, incluidas todas las preferencias, fotos personalizadas y archivos de modelos descargados.

No conservamos ninguna de esta información en nuestros propios servidores, ya que nunca nos es transmitida.

---

## 15. Seguridad de los datos

Todos los datos almacenados por la aplicación residen en el contenedor aislado privado de la aplicación en su dispositivo, que está protegido por los mecanismos de seguridad integrados en su sistema operativo (cifrado del sistema de archivos, aislamiento de procesos, aislamiento de aplicaciones). La aplicación no implementa capas de cifrado más allá de las que proporciona el sistema operativo.

Dado que no se transmite ningún dato personal a nuestra infraestructura, no existe ningún dato en el lado del servidor que pueda estar expuesto en caso de una violación de seguridad por nuestra parte. En el improbable caso de que tengamos conocimiento de una vulnerabilidad de seguridad en la aplicación que afecte a datos personales, notificaremos a los usuarios afectados mediante una actualización de la aplicación y, cuando la ley lo exija, notificaremos a la autoridad de control competente en un plazo de 72 horas desde que tuviéramos conocimiento del hecho (artículo 33 del RGPD).

---

## 16. Acceso a los ajustes del cuidador

Los ajustes (incluida la posibilidad de cambiar el nombre del usuario, la voz y las fotos personalizadas) son accesibles mediante un gesto oculto — cuatro pulsaciones en dos segundos sobre la zona de la frase. Este mecanismo está diseñado como una barrera simple contra cambios accidentales, no como un sistema de control de acceso robusto. Si necesita un control de acceso estricto, le recomendamos que utilice las funciones de acceso guiado o tiempo de pantalla de su dispositivo para restringir la navegación dentro de la aplicación.

---

## 17. Cambios en esta política

Podemos actualizar esta política de privacidad de vez en cuando para reflejar cambios en la aplicación o en la legislación aplicable. Cuando lo hagamos, la fecha de «Última actualización» en la parte superior de este documento cambiará. Cuando los cambios sean sustanciales, se lo notificaremos a través de un aviso dentro de la aplicación o una actualización de la misma.

El uso continuado de la aplicación tras la publicación de un cambio constituye la aceptación de la política actualizada, salvo que su uso continuado se base en un derecho que requiera un consentimiento nuevo, en cuyo caso solicitaremos dicho consentimiento de forma explícita.

---

## 18. Contacto, delegado de protección de datos y autoridad de control

**Contacto para consultas sobre protección de datos:**

> **Matan Ljubas**
> **[Dirección]**
> **[Dirección de correo electrónico — a completar antes de la publicación]**

**Delegado de Protección de Datos (DPD):** Si se ha designado un Delegado de Protección de Datos, sus datos de contacto son:

> **[Nombre y datos de contacto del DPD — o indicar «No se ha designado DPD» si no procede]**

**Derecho a presentar una reclamación:** Si usted considera que el tratamiento de sus datos personales infringe el RGPD o la legislación nacional aplicable en materia de protección de datos, tiene derecho a presentar una reclamación ante la autoridad de control del Estado miembro de la UE de su residencia habitual, lugar de trabajo o lugar en que se haya producido la infracción presunta. Una lista de las autoridades de control de la UE está disponible en [edpb.europa.eu/about-edpb/about-edpb/members_en](https://www.edpb.europa.eu/about-edpb/about-edpb/members_en). También conserva el derecho a interponer un recurso judicial.

---

*Esta política de privacidad se aplica a la aplicación Sono. No se aplica a ningún servicio de terceros vinculado o referenciado en el presente documento, que tiene sus propias políticas de privacidad y sus propias responsabilidades como responsable del tratamiento.*
