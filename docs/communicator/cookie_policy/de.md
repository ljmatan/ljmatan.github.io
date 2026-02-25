# Cookie-Richtlinie — Sono AAC Communicator

**Zuletzt aktualisiert: 23. Februar 2026**

---

## 1. Was sind Cookies?

Cookies sind kleine Textdateien, die von einer Website oder einem webbasierten Dienst auf einem Gerät abgelegt werden, um Informationen zwischen Sitzungen zu speichern. Sie sind eine Webbrowser-Technologie und sind nicht inhärent Teil nativer mobiler Anwendungen.

---

## 2. Verwendet diese App Cookies?

**Größtenteils nein.** Sono ist eine native mobile Anwendung. Bei der normalen Nutzung — dem Durchsuchen von Symbolen, dem Erstellen von Sätzen, der Wiedergabe der Sprachausgabe oder der Verwendung der KI-Satzfunktion — werden keine Cookies, Web-Sitzungen oder Browser-Speicher verwendet.

Die App enthält eine eingebettete WebView-Komponente, die **ausschließlich** zur Anzeige von rechtlichen Dokumenten (diese Cookie-Richtlinie, die Datenschutzerklärung und die Nutzungsbedingungen) genutzt wird, wenn Sie diese über den Willkommensbildschirm der App aufrufen. Je nach Art der Bereitstellung dieser Dokumente kann diese WebView Cookies auf Ihr Gerät übertragen oder auch nicht (siehe Abschnitt 4).

Es werden zu keinem Zeitpunkt des normalen Betriebs der App Tracking-Cookies, Analyse-Cookies oder Werbe-Cookies verwendet.

---

## 3. Lokaler Speicher der App

Obwohl die App beim normalen Betrieb keine Cookies verwendet, speichert sie eine geringe Anzahl von Einstellungswerten auf Ihrem Gerät mithilfe des internen Cache-Dienstes der App. Diese sind für den Betrieb der App funktional notwendig und verfolgen Sie nicht anwendungs- oder geräteübergreifend.

Die folgenden Daten werden lokal auf Ihrem Gerät gespeichert:

| Speicherelement | Zweck | Format | Dauerhaft gespeichert |
|---|---|---|---|
| `gsaCache.db` | App-Einstellungsspeicher — enthält Anzeigename, Geschlecht, KI-Umschalter, TTS-Stimmenauswahl und den Index benutzerdefinierter Symbolfotos | Sembast-Schlüssel-Wert-Datenbank | Ja |
| Benutzerdefinierte Fotodateien | Persönliche Fotos, die von der Betreuungsperson Symbolen zugewiesen wurden | Bilddateien | Ja |
| Nachrichtenverlauf | Zuletzt gesprochene Sätze (nur aktuelle Sitzung) | Nur im Arbeitsspeicher | **Nein** |
| KI-Sprachmodell | Die LLM-Datei auf dem Gerät (falls heruntergeladen) | GGUF-Binärdatei | Ja |
| TTS-Stimmmodelle | Offline-Sprachsynthese-Dateien (falls heruntergeladen) | Modell-Binärdatei | Ja |

Alle diese Elemente werden im privaten sandboxed Verzeichnis der App auf Ihrem Gerät gespeichert. Sie sind für andere Anwendungen nicht zugänglich und werden von der App nicht an Server übertragen.

Da App-Einstellungen als funktionale Cookies in der `gsaCache.db`-Datenbank gespeichert werden, unterliegen sie dem Cookie-Zustimmungsmechanismus der App. Wird die Einwilligung für funktionale Cookies widerrufen, löscht die App die Einstellungsdatenbank bei der nächsten Zustimmungsbestätigung.

---

## 4. Eingebettete WebView zur Anzeige rechtlicher Dokumente

Die App enthält eine eingebettete WebView-Komponente (bereitgestellt durch `webview_flutter`), die **ausschließlich** zur Anzeige rechtlicher Dokumente genutzt wird — dieser Cookie-Richtlinie, der Datenschutzerklärung und der Nutzungsbedingungen. Diese WebView wird nur geöffnet, wenn Sie auf dem Willkommensbildschirm der App bewusst auf einen Link zu einem rechtlichen Dokument tippen.

**Wenn die rechtlichen Dokumente unter einer externen URL bereitgestellt werden:** Der Server, der diese Dokumente ausliefert, kann in der WebView Cookies setzen oder andere Tracking-Mechanismen einsetzen, genauso wie jede im Browser besuchte Website. In diesem Fall gelten die Datenschutz- und Cookie-Praktiken des jeweiligen Hosting-Dienstes — nicht diese Richtlinie.

**Wenn die rechtlichen Dokumente aus lokalen App-Assets bereitgestellt werden:** Es wird keine externe Netzwerkanfrage gestellt, und es werden keine Cookies gesetzt oder empfangen.

Keine anderen WebView-Komponenten, eingebetteten Browser oder webbasierte Drittanbieter-Inhalte werden während eines anderen Teils des normalen Betriebs der App geladen.

---

## 5. Drittanbieterdienste und deren eigener Speicher

Wenn Sie freiwillig optionale KI- oder TTS-Modelldateien herunterladen, sendet die App HTTPS-Anfragen an folgende Drittanbieter-Server. Diese Server können eigene Cookies setzen oder eigene Tracking-Mechanismen verwenden, wenn Sie sie anschließend in einem Browser besuchen, setzen jedoch über die App selbst keine Cookies auf Ihrem Gerät.

| Dienst | Vorgang | Cookie-/Datenschutzrichtlinie |
|---|---|---|
| Hugging Face (`huggingface.co`) | Nur Datei-Download — keine Cookies über die App gesetzt | [huggingface.co/privacy](https://huggingface.co/privacy) |
| GitHub (`github.com`) | Nur Datei-Download — keine Cookies über die App gesetzt | [docs.github.com/en/site-policy/privacy-policies](https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement) |
| Apple TTS (Fallback, iOS) | Vom Betriebssystem verwaltet — siehe Apple-Datenschutzrichtlinie | [apple.com/legal/privacy](https://www.apple.com/legal/privacy/) |
| Google TTS (Fallback, Android) | Vom Betriebssystem verwaltet — siehe Google-Datenschutzrichtlinie | [policies.google.com/privacy](https://policies.google.com/privacy) |

---

## 6. Entfernen aller App-Daten

Sie können alle von der App gespeicherten Daten jederzeit entfernen, indem Sie **die App von Ihrem Gerät deinstallieren**. Dadurch werden alle Einstellungsdateien, benutzerdefinierten Fotos und heruntergeladenen Modelldateien dauerhaft gelöscht. Das Vorgehen unterscheidet sich je nach Plattform leicht:

**iOS:** Gehen Sie zu Einstellungen > Allgemein > iPhone-Speicher (oder iPad-Speicher) > Sono > App löschen.

**Android:** Gehen Sie zu Einstellungen > Apps > Sono > Deinstallieren. Alternativ können Sie über Einstellungen > Apps > Sono > Speicher > Daten löschen alle gespeicherten Daten entfernen, ohne die App zu deinstallieren.

Sie können auch einzelne benutzerdefinierte Fotos jederzeit entfernen, indem Sie in der App eine Symbolkarte lang drücken und die Option zum Entfernen des benutzerdefinierten Fotos auswählen.

---

## 7. Änderungen dieser Richtlinie

Wir können diese Cookie-Richtlinie von Zeit zu Zeit aktualisieren. Das Datum „Zuletzt aktualisiert" am Anfang dieses Dokuments gibt die jüngste Überarbeitung an. Da diese App keine Cookies verwendet und sich ihre lokalen Speicherpraktiken nur bei wesentlichen App-Updates ändern, sind Änderungen an dieser Richtlinie voraussichtlich selten.

---

## 8. Kontakt

Wenn Sie Fragen zu dieser Cookie-Richtlinie oder den lokalen Speicherpraktiken der App haben, kontaktieren Sie uns unter:

> **[Name des Herausgebers]**
> **[E-Mail-Adresse — vor Veröffentlichung auszufüllen]**

---

*Diese Cookie-Richtlinie gilt ausschließlich für die native mobile App Sono. Sie gilt nicht für Websites oder webbasierte Dienste, die mit dem Herausgeber verbunden sein können.*
