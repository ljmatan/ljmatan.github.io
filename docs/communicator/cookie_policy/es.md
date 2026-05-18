---
layout: doc
---

# Política de cookies — Sono AAC Communicator

**Última actualización: 23 de febrero de 2026**

---

## 1. ¿Qué son las cookies?

Las cookies son pequeños archivos de texto que un sitio web o servicio web coloca en un dispositivo para almacenar información entre sesiones. Son una tecnología de navegador web y no forman parte intrínseca de las aplicaciones móviles nativas.

---

## 2. ¿Utiliza esta Aplicación cookies?

**En su mayor parte, no.** Sono es una aplicación móvil nativa. Durante el uso normal — navegar por símbolos, construir frases, reproducir la salida de voz o utilizar la función de frases con IA — no se utilizan cookies, sesiones web ni almacenamiento del navegador.

La Aplicación incluye un componente WebView integrado utilizado **únicamente** para mostrar documentos legales (esta Política de cookies, la Política de privacidad y los Términos y Condiciones) cuando usted elige verlos desde la pantalla de bienvenida de la Aplicación. Dependiendo de cómo estén alojados esos documentos, esa WebView puede o no transmitir cookies a su dispositivo (consulte la Sección 4).

No se utilizan cookies de seguimiento, cookies de análisis ni cookies publicitarias en ningún momento durante el funcionamiento normal de la Aplicación.

---

## 3. Almacenamiento local utilizado por la Aplicación

Aunque la Aplicación no utiliza cookies durante su funcionamiento normal, sí almacena un pequeño número de valores de preferencias en su dispositivo mediante el servicio de caché interno de la Aplicación. Estos son funcionalmente necesarios para que la Aplicación funcione y no le rastrean entre aplicaciones o dispositivos.

Los siguientes datos se almacenan localmente en su dispositivo:

| Elemento de almacenamiento | Propósito | Formato | Persistido en disco |
|---|---|---|---|
| `gsaCache.db` | Almacén de preferencias de la Aplicación — contiene el nombre de visualización, el género, el ajuste de IA, la selección de voz TTS y el índice de fotos de símbolos personalizados | Base de datos clave-valor Sembast | Sí |
| Archivos de fotos personalizadas | Fotos personales asignadas a los símbolos por el cuidador | Archivos de imagen | Sí |
| Historial de mensajes | Frases pronunciadas recientemente (solo sesión actual) | Solo en memoria | **No** |
| Modelo de lenguaje de IA | El archivo LLM en el dispositivo (si se descargó) | Binario GGUF | Sí |
| Modelos de voz TTS | Archivos de síntesis de voz sin conexión (si se descargaron) | Binario de modelo | Sí |

Todos estos elementos se almacenan en el directorio aislado privado de la Aplicación en su dispositivo. No son accesibles a otras aplicaciones y no son transmitidos a ningún servidor por la Aplicación.

Dado que las preferencias de la Aplicación se almacenan como cookies funcionales en la base de datos `gsaCache.db`, están sujetas al mecanismo de consentimiento de cookies de la Aplicación. Si se revoca el consentimiento a las cookies funcionales, la Aplicación borrará la base de datos de preferencias en el siguiente reconocimiento del consentimiento.

---

## 4. WebView integrada para la visualización de documentos legales

La Aplicación incluye un componente WebView integrado (desarrollado con `webview_flutter`) utilizado **exclusivamente** para mostrar documentos legales — esta Política de cookies, la Política de privacidad y los Términos y Condiciones. Esta WebView se abre únicamente cuando usted pulsa deliberadamente un enlace a un documento legal en la pantalla de bienvenida de la Aplicación.

**Si los documentos legales están alojados en una URL remota:** el servidor que entrega esos documentos puede establecer cookies o utilizar otros mecanismos de seguimiento en la WebView, de la misma manera que cualquier sitio web visitado en un navegador. En ese caso, se aplican las prácticas de privacidad y cookies de ese servicio de alojamiento — no esta política.

**Si los documentos legales se sirven desde los recursos locales de la Aplicación:** no se realiza ninguna solicitud de red externa y no se establecen ni reciben cookies.

Ningún otro componente WebView, navegador integrado ni contenido web de terceros se carga durante ninguna otra parte del funcionamiento normal de la Aplicación.

---

## 5. Servicios de terceros y su propio almacenamiento

Cuando usted descarga voluntariamente archivos opcionales de modelos de IA o TTS, la Aplicación realiza solicitudes HTTPS a los siguientes servidores de terceros. Estos servidores pueden establecer sus propias cookies o utilizar sus propios mecanismos de seguimiento si usted los visita posteriormente en un navegador, pero no establecen cookies en su dispositivo a través de la propia Aplicación.

| Servicio | Lo que ocurre | Su política de cookies/privacidad |
|---|---|---|
| Hugging Face (`huggingface.co`) | Solo descarga de archivos — no se establecen cookies a través de la Aplicación | [huggingface.co/privacy](https://huggingface.co/privacy) |
| GitHub (`github.com`) | Solo descarga de archivos — no se establecen cookies a través de la Aplicación | [docs.github.com/en/site-policy/privacy-policies](https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement) |
| Apple TTS (alternativa, iOS) | Gestionado por el SO — consulte la política de privacidad de Apple | [apple.com/legal/privacy](https://www.apple.com/legal/privacy/) |
| Google TTS (alternativa, Android) | Gestionado por el SO — consulte la política de privacidad de Google | [policies.google.com/privacy](https://policies.google.com/privacy) |

---

## 6. Eliminación de todo el almacenamiento de la Aplicación

Puede eliminar todos los datos almacenados por la Aplicación en cualquier momento **desinstalando la Aplicación** de su dispositivo. Esto eliminará permanentemente todos los archivos de preferencias, fotos personalizadas y archivos de modelos descargados. El proceso varía ligeramente según la plataforma:

**iOS:** Vaya a Ajustes > General > Almacenamiento del iPhone (o Almacenamiento del iPad) > Sono > Eliminar aplicación.

**Android:** Vaya a Ajustes > Aplicaciones > Sono > Desinstalar. Alternativamente, use Ajustes > Aplicaciones > Sono > Almacenamiento > Borrar datos para eliminar todos los datos almacenados sin desinstalar la Aplicación.

También puede eliminar fotos personalizadas individuales en cualquier momento manteniendo pulsada una tarjeta de símbolo en la Aplicación y seleccionando la opción para eliminar la foto personalizada.

---

## 7. Cambios en esta política

Podemos actualizar esta Política de cookies de vez en cuando. La fecha de «Última actualización» en la parte superior de este documento refleja la revisión más reciente. Dado que esta Aplicación no utiliza cookies y sus prácticas de almacenamiento local solo cambian con actualizaciones significativas de la Aplicación, se espera que los cambios en esta política sean poco frecuentes.

---

## 8. Contacto

Si tiene alguna pregunta sobre esta Política de cookies o las prácticas de almacenamiento local de la Aplicación, póngase en contacto con nosotros en:

> **Matan Ljubas**
> **[Dirección de correo electrónico — a completar antes de la publicación]**

---

*Esta Política de cookies se aplica únicamente a la aplicación móvil nativa Sono. No se aplica a ningún sitio web o servicio web que pueda estar asociado con el editor.*
