---
layout: doc
---

# Datenschutzerklärung — Sono AAC Communicator

**Zuletzt aktualisiert: 23. Februar 2026**

---

## 1. Einleitung und Identität des Verantwortlichen

Sono ist eine Bildsymbol-Kommunikations-App, die Menschen dabei unterstützt, sich mithilfe von Bildern und gesprochenen Wörtern auszudrücken.

**Verantwortlicher:** Die für die Verarbeitung personenbezogener Daten im Zusammenhang mit dieser App verantwortliche Stelle ist:

> **[Name und eingetragene Adresse des Herausgebers — vor Veröffentlichung auszufüllen]**
> Kontakt: **[Kontakt-E-Mail-Adresse — vor Veröffentlichung auszufüllen]**

**EU-Vertreter (soweit zutreffend):** Ist der Herausgeber nicht im Europäischen Wirtschaftsraum (EWR) niedergelassen, ist gemäß Artikel 27 der Datenschutz-Grundverordnung (DSGVO) ein EU-Vertreter zu benennen. Sofern erforderlich, ist der EU-Vertreter:

> **[Name und Adresse des EU-Vertreters — auszufüllen, wenn der Herausgeber außerhalb des EWR ansässig ist]**

**Das Kernprinzip:** Sono ist so konzipiert, dass die App vollständig auf Ihrem Gerät betrieben wird. Sie erhebt keine personenbezogenen Daten aus der Ferne, legt keine Benutzerkonten an, verfolgt Sie nicht und übermittelt Ihre Kommunikationsaktivitäten an keinen Server.

---

## 2. Auf Ihrem Gerät gespeicherte Informationen

Sono speichert eine geringe Menge an Einstellungsdaten lokal auf Ihrem Gerät. Diese Daten verlassen das Gerät nicht, es sei denn, Sie sichern Ihr Gerät ausdrücklich über einen Drittanbieterdienst (z. B. iCloud oder Google Drive). In diesem Fall gilt die Datenschutzerklärung des jeweiligen Dienstes.

| Daten | Beschreibung | Speicherort |
|---|---|---|
| Anzeigename | Ein Name, den die Betreuungsperson für den Nutzer festlegt (z. B. „Alex") | Gerätedateisystem |
| Geschlechtspräferenz | Visuelle Präferenz (neutral / männlich / weiblich) für Illustrationsvarianten | Gerätedateisystem |
| KI-Satzverbesserungs-Schalter | Ob das sprachliche KI-Modell auf dem Gerät aktiviert ist | Gerätedateisystem |
| Stimmauswahl | Die gewählte Stimme für die Text-zu-Sprache-Ausgabe | Gerätedateisystem |
| Benutzerdefinierte Symbolfotos | Fotos, die von der Betreuungsperson Kommunikationssymbolen zugewiesen wurden | Gerätedateisystem |
| Benutzerdefinierter Fotoindex | Eine lokale Zuordnung von Symbol-IDs zu Fotodateipfaden | Gerätedateisystem |

**Nachrichtenverlauf** (zuletzt gesprochene Sätze) wird **ausschließlich im Arbeitsspeicher** für die Dauer der aktuellen App-Sitzung gehalten. Er wird nicht auf dem Datenträger gespeichert und geht beim Schließen der App dauerhaft verloren.

---

## 3. Verwendung dieser Informationen

Die oben aufgeführten Informationen werden ausschließlich zum Betrieb der App auf Ihrem Gerät verwendet:

- **Anzeigename** — wird als Begrüßung auf dem Startbildschirm angezeigt.
- **Geschlechtspräferenz** — wählt geschlechtsspezifische Illustrationsvarianten aus.
- **KI-Schalter** — legt fest, ob das sprachliche KI-Modell auf dem Gerät gesprochene Sätze verbessert.
- **Stimmauswahl** — steuert die Text-zu-Sprache-Engine.
- **Benutzerdefinierte Fotos** — werden auf Symbolkarten anstelle der Standardillustrationen angezeigt.

Keine dieser Informationen wird für Analysen, Werbung, Profilerstellung oder einen anderen Zweck als den lokalen Betrieb der App auf Ihrem Gerät verwendet.

---

## 4. Rechtsgrundlage der Verarbeitung (DSGVO)

Soweit die Datenschutz-Grundverordnung (EU) 2016/679 Anwendung findet, sind die Rechtsgrundlagen gemäß Artikel 6 DSGVO für die Verarbeitung der in Abschnitt 2 beschriebenen Daten:

| Daten | Rechtsgrundlage | Erläuterung |
|---|---|---|
| Anzeigename, Geschlechtspräferenz, KI-Schalter, Stimmauswahl | **Art. 6 Abs. 1 lit. b — Vertragserfüllung** | Diese Einstellungen sind notwendig, um die Kernfunktionalität der App entsprechend der Konfiguration durch den Nutzer bzw. die Betreuungsperson bereitzustellen. |
| Benutzerdefinierte Symbolfotos | **Art. 6 Abs. 1 lit. a — Einwilligung** | Die Betreuungsperson weist einem Symbol explizit ein Foto zu. Die Einwilligung kann jederzeit widerrufen werden, indem das Foto über das Menü nach langem Drücken entfernt wird. |

Keine Verarbeitung basiert auf automatisierter Profilerstellung, und keine Verarbeitungsentscheidung hat rechtliche oder ähnlich weitreichende Auswirkungen auf Personen (vgl. auch Abschnitt 13, Recht auf Widerspruch gegen automatisierte Entscheidungsfindung).

---

## 5. Künstliche Intelligenz auf dem Gerät

Wenn die KI-Satzverbesserungsfunktion aktiviert ist, verwendet die App ein großes Sprachmodell (LLM) auf dem Gerät, um gesprochene Sätze natürlicher klingen zu lassen. Diese Verarbeitung erfolgt **vollständig auf Ihrem Gerät**:

- Das Modell (Qwen2.5-0.5B-Instruct, ca. 400 MB) wird einmalig aus einem öffentlichen Repository (Hugging Face) heruntergeladen und lokal gespeichert.
- Keine Sätze, Symbole oder sonstige Eingaben, die Sie tippen oder antippen, werden zur KI-Verarbeitung an einen externen Server übermittelt.
- Wenn die KI-Funktion deaktiviert oder das Modell noch nicht heruntergeladen wurde, greift die App auf eine integrierte regelbasierte Grammatik-Engine zurück.
- Die KI-Funktion erstellt keine Profilerstellung, keine automatisierte Entscheidungsfindung und keine Rückschlüsse auf Personen.

---

## 6. Text-zu-Sprache

Sono bietet zwei Text-zu-Sprache-Modi:

**Offline-Stimmen (bevorzugt):** Die App kann sprachspezifische Stimmmodelle aus einem öffentlichen Repository (Sherpa-ONNX / GitHub Releases) herunterladen. Nach dem Herunterladen erfolgt die gesamte Sprachsynthese vollständig auf Ihrem Gerät, ohne dass Daten extern übertragen werden.

**Systemstimmen des Geräts (Fallback):** Wenn für die gewählte Sprache keine Offline-Stimme verfügbar ist, verwendet die App den integrierten Text-zu-Sprache-Dienst Ihres Geräts (bereitgestellt von Apple oder Google, je nach Gerät). Diese Systemdienste unterliegen den jeweiligen Datenschutzrichtlinien von Apple und Google, und **gesprochener Text kann zur Synthese an deren Server übertragen werden**. Sie können dies vermeiden, indem Sie unter **Einstellungen > Stimme** eine Offline-Stimme herunterladen.

---

## 7. Optionale Internetverbindungen

Sono erfordert keine Internetverbindung. Die App funktioniert nach der Installation vollständig offline.

Die einzige Netzwerkaktivität findet statt, wenn Sie sich dazu entscheiden, optionale Ressourcen herunterzuladen:

- **KI-Sprachmodell** — wird von Hugging Face (`huggingface.co`) heruntergeladen, wenn Sie in den Einstellungen auf „Modell herunterladen" tippen. Ca. 400 MB.
- **Offline-Stimmmodelle** — werden von Sherpa-ONNX-Releases auf GitHub (`github.com`) heruntergeladen, wenn Sie unter Einstellungen eine Stimme auswählen und herunterladen. Die Modellgröße variiert je nach Sprache.

Bei diesen Downloads werden nur die Daten übertragen, die bei jeder HTTPS-Anfrage anfallen (Ihre IP-Adresse und grundlegende Anfrage-Header). Keine personenbezogenen Daten, Kommunikationsinhalte oder Nutzungsdaten sind in diesen Anfragen enthalten. Nach dem Herunterladen funktionieren die Modelle vollständig offline.

---

## 8. Geräteberechtigungen

Die App fordert folgende Geräteberechtigungen an:

| Berechtigung | Grund der Anforderung |
|---|---|
| **Kamera** | Um ein Foto aufzunehmen und es einem Kommunikationssymbol zuzuweisen. Fotos werden ausschließlich lokal gespeichert und niemals übertragen. |
| **Fotomediathek** | Um ein vorhandenes Foto auszuwählen und es einem Kommunikationssymbol zuzuweisen. Das ausgewählte Foto wird ausschließlich lokal kopiert und niemals übertragen. |

Die App fordert keinen Zugriff auf Standort, Kontakte, Mikrofon (zur Aufnahme), Bluetooth, Gesundheitsdaten oder andere sensible Berechtigungen über die oben aufgeführten hinaus an.

---

## 9. Von uns nicht erhobene Informationen

Sono erhebt, überträgt oder speichert keine der folgenden Informationen:

- Kommunikationsinhalte (gesprochene Sätze oder angetippte Symbole)
- Nutzungsmuster, Sitzungsdauer oder Nutzungshäufigkeit
- Gerätekennungen, Werbe-IDs oder Fingerprinting-Daten
- Absturzberichte oder Diagnoseprotokolle, die an einen Remote-Server gesendet werden
- Namen, E-Mail-Adressen oder persönliche Identifikatoren über die lokal von der Betreuungsperson eingegebenen Daten hinaus
- Standortdaten jeglicher Art
- Biometrische oder gesundheitsbezogene Daten

In der App sind keine Analyse-SDKs, keine Werbenetzwerke und keine Drittanbieter-Tracking-Bibliotheken integriert.

---

## 10. Drittanbieterdienste

Die einzigen Drittanbieterdienste, die mit der App in Verbindung stehen, sind die optionalen Modell-Download-Quellen sowie plattformseitige Gerätedienste:

| Dienst | Funktion | Datenschutzrichtlinie |
|---|---|---|
| Hugging Face (`huggingface.co`) | Hostet die optionale KI-Sprachmodelldatei | [huggingface.co/privacy](https://huggingface.co/privacy) |
| GitHub (`github.com`) | Hostet optionale Offline-Stimmmodell-Archive | [docs.github.com/en/site-policy/privacy-policies](https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement) |
| Apple TTS (iOS, Fallback) | Text-zu-Sprache des Geräts, wenn keine Offline-Stimme installiert ist | [apple.com/legal/privacy](https://www.apple.com/legal/privacy/) |
| Google TTS (Android, Fallback) | Text-zu-Sprache des Geräts, wenn keine Offline-Stimme installiert ist | [policies.google.com/privacy](https://policies.google.com/privacy) |

Die App unterhält keine Beziehung zu Werbenetzwerken, Analyseanbietern oder Datenbrokern.

---

## 11. Internationale Datenübermittlungen

Die App selbst übermittelt keine personenbezogenen Daten ins Ausland. Wenn Sie jedoch freiwillig KI- oder TTS-Modelldateien herunterladen, werden diese Anfragen an Server von Hugging Face und GitHub gesendet, die in den Vereinigten Staaten ansässig sind.

Diese Downloads enthalten keine personenbezogenen Daten über die bei jeder HTTPS-Anfrage standardmäßig übermittelten Informationen hinaus (IP-Adresse, Anfrage-Header). Es werden keine Kommunikationsinhalte, Nutzereinstellungen oder Identifikationsdaten von Personen übertragen.

Soweit die DSGVO gilt, stützen sich Übermittlungen personenbezogener Daten in die Vereinigten Staaten auf:
- das EU-US-Datenschutzrahmenabkommen (Data Privacy Framework), sofern der Empfänger zertifiziert ist, oder
- Standardvertragsklauseln (SCC), die von der Europäischen Kommission verabschiedet wurden, oder
- den Umstand, dass in den jeweiligen Anfragen keine personenbezogenen Daten im Sinne der DSGVO übermittelt werden, wodurch Kapitel V DSGVO auf diese Übermittlungen nicht anwendbar ist.

Für die Verarbeitung durch Apple TTS und Google TTS (bei Verwendung als Fallback) verweisen wir auf die jeweiligen Datenschutzrichtlinien von Apple und Google sowie auf die dort veröffentlichten Übermittlungsmechanismen.

---

## 12. Datenschutz für Kinder

Sono ist darauf ausgelegt, Menschen aller Altersgruppen zu unterstützen, die von der Bildsymbol-Kommunikation profitieren, einschließlich Kinder.

Da die App keine personenbezogenen Daten aus der Ferne erhebt und vollständig auf dem Gerät betrieben wird, stellt sie für alle Nutzer, einschließlich Kinder, ein minimales Datenschutzrisiko dar.

**EU/EWR — Altersgrenze für die digitale Einwilligung (Art. 8 DSGVO):** In der Europäischen Union und im Europäischen Wirtschaftsraum variiert das Alter, ab dem eine Person in die Datenverarbeitung im Zusammenhang mit digitalen Diensten einwilligen kann, je nach Mitgliedstaat (zwischen 13 und 16 Jahren). Wird die App von einem Kind unterhalb des jeweils geltenden Einwilligungsalters genutzt, ist die Einwilligung des Inhabers der elterlichen Verantwortung für jede Datenverarbeitung erforderlich. Bei dieser App ist die einzige Verarbeitung, die einer Einwilligung bedarf, die Zuweisung benutzerdefinierter Fotos (vgl. Abschnitt 4). Eltern und Erziehungsberechtigte werden gebeten, diese Einstellungen zu prüfen und zu konfigurieren.

Wenn Sie ein KI- oder TTS-Modell herunterladen, erfolgt dieser Download über eine verschlüsselte HTTPS-Verbindung. Eltern und Erziehungsberechtigte, die jedweden Internetzugang der App verhindern möchten, können dies durch Einschränkung des Internetzugangs auf Geräte- oder Router-Ebene tun — die App funktioniert weiterhin vollständig mit zuvor heruntergeladenen Modellen.

---

## 13. Ihre Rechte gemäß DSGVO

Wenn Sie sich im Europäischen Wirtschaftsraum, im Vereinigten Königreich oder in einem anderen Rechtsgebiet mit gleichwertigen Datenschutzvorschriften befinden, stehen Ihnen folgende Rechte in Bezug auf die im Zusammenhang mit dieser App verarbeiteten personenbezogenen Daten zu. Da nahezu alle Daten lokal auf Ihrem Gerät gespeichert sind und Sie diese direkt kontrollieren, können die meisten Rechte jederzeit von Ihnen über die App selbst ausgeübt werden.

| Recht | Ausübung |
|---|---|
| **Auskunftsrecht (Art. 15)** | Alle gespeicherten Daten befinden sich auf Ihrem Gerät. Anzeigename und Einstellungen können direkt in den Betreuungseinstellungen eingesehen werden. Benutzerdefinierte Fotos sind auf dem Symbolboard sichtbar. |
| **Recht auf Berichtigung (Art. 16)** | Ändern Sie gespeicherte Informationen jederzeit direkt in den Betreuungseinstellungen. |
| **Recht auf Löschung / „Recht auf Vergessenwerden" (Art. 17)** | Einzelne benutzerdefinierte Fotos können über das Menü nach langem Drücken des Symbols gelöscht werden. Alle App-Daten können durch Deinstallation der App gelöscht werden. |
| **Recht auf Einschränkung der Verarbeitung (Art. 18)** | Deaktivieren Sie bestimmte Funktionen (z. B. KI-Schalter ausschalten, benutzerdefiniertes Foto entfernen), um die damit verbundene Verarbeitung einzuschränken. |
| **Recht auf Datenübertragbarkeit (Art. 20)** | App-Daten werden in Standardformaten (Klartext, JSON, gängige Bildformate) im sandboxed Verzeichnis der App gespeichert. Auf unterstützten Plattformen kann darauf über Gerätesicherungswerkzeuge zugegriffen werden. |
| **Widerspruchsrecht (Art. 21)** | Sie können der Verarbeitung auf Grundlage berechtigter Interessen jederzeit widersprechen, indem Sie uns kontaktieren (vgl. Abschnitt 18). Soweit die Verarbeitung auf einer Einwilligung beruht, gilt das nachstehende Recht auf Widerruf der Einwilligung. |
| **Recht auf Widerruf der Einwilligung (Art. 7 Abs. 3)** | Soweit die Verarbeitung auf einer Einwilligung beruht (benutzerdefinierte Fotos), können Sie diese jederzeit durch Entfernen des Fotos widerrufen. Der Widerruf berührt nicht die Rechtmäßigkeit der bis dahin erfolgten Verarbeitung. |
| **Recht auf Widerspruch gegen automatisierte Entscheidungsfindung (Art. 22)** | Die App führt keine automatisierte Entscheidungsfindung oder Profilerstellung durch, die rechtliche oder ähnlich weitreichende Auswirkungen auf Personen hat. |

Um Rechte auszuüben, die nicht direkt in der App wahrgenommen werden können, oder um Bedenken bezüglich unserer Datenschutzpraktiken zu äußern, kontaktieren Sie uns über die Angaben in Abschnitt 18.

---

## 14. Datenspeicherung und Löschung

**Sitzungsdaten (Nachrichtenverlauf):** Werden bei jedem Schließen der App automatisch gelöscht. Nicht auf dem Datenträger gespeichert.

**Einstellungsdaten (Name, Geschlecht, Schalter, Stimmauswahl):** Bleiben auf dem Gerät gespeichert, bis die Betreuungsperson die Einstellung manuell ändert oder bis die App deinstalliert wird.

**Benutzerdefinierte Fotos:** Bleiben auf dem Gerät gespeichert, bis sie einzeln über das Menü nach langem Drücken des Symbols entfernt werden oder bis die App deinstalliert wird.

**KI- und TTS-Modelldateien:** Bleiben auf dem Gerät gespeichert, bis sie über die Einstellungen gelöscht werden oder bis die App deinstalliert wird.

**So löschen Sie alle App-Daten:** Durch Deinstallieren der App von Ihrem Gerät werden alle lokal gespeicherten Dateien entfernt, einschließlich aller Einstellungen, benutzerdefinierter Fotos und heruntergeladener Modelldateien.

Wir speichern keine dieser Informationen auf unseren eigenen Servern, da sie uns niemals übermittelt werden.

---

## 15. Datensicherheit

Alle von der App gespeicherten Daten befinden sich im privaten sandboxed Container der App auf Ihrem Gerät, der durch die integrierten Sicherheitsmechanismen Ihres Betriebssystems geschützt ist (Dateisystemverschlüsselung, Prozesstrennung, App-Sandboxing). Die App implementiert keine Verschlüsselungsebenen über das hinaus, was das Betriebssystem bereitstellt.

Da keine personenbezogenen Daten an unsere Infrastruktur übertragen werden, werden von uns keine serverseitigen Daten gespeichert, die bei uns von einer Sicherheitsverletzung betroffen sein könnten. Sollten wir in dem unwahrscheinlichen Fall auf eine Sicherheitsschwachstelle in der App aufmerksam werden, die personenbezogene Daten betrifft, werden wir betroffene Nutzer durch ein App-Update benachrichtigen und, sofern gesetzlich vorgeschrieben, die zuständige Aufsichtsbehörde innerhalb von 72 Stunden nach Bekanntwerden informieren (Art. 33 DSGVO).

---

## 16. Zugang zu den Betreuungseinstellungen

Die Einstellungen (einschließlich der Möglichkeit, Name, Stimme und benutzerdefinierte Fotos des Nutzers zu ändern) sind über eine versteckte Geste zugänglich — vier Antippen des Satzbereichs innerhalb von zwei Sekunden. Dieser Mechanismus dient als einfache Barriere gegen versehentliche Änderungen und ist kein starkes Zugangskontrollsystem. Wenn Sie eine strikte Zugangskontrolle benötigen, empfehlen wir, die Geführte Nutzung oder die Bildschirmzeit Ihres Geräts zu verwenden, um die App-interne Navigation einzuschränken.

---

## 17. Änderungen dieser Datenschutzerklärung

Wir können diese Datenschutzerklärung von Zeit zu Zeit aktualisieren, um Änderungen in der App oder im geltenden Recht zu berücksichtigen. In diesem Fall wird das Datum „Zuletzt aktualisiert" am Anfang dieses Dokuments geändert. Bei wesentlichen Änderungen werden wir Sie durch einen In-App-Hinweis oder ein App-Update informieren.

Die weitere Nutzung der App nach der Veröffentlichung einer Änderung gilt als Zustimmung zur aktualisierten Datenschutzerklärung, es sei denn, Ihre weitere Nutzung basiert auf einem Recht, das eine erneute Einwilligung erfordert. In diesem Fall werden wir diese Einwilligung ausdrücklich einholen.

---

## 18. Kontakt, Datenschutzbeauftragter und Aufsichtsbehörde

**Kontakt für Datenschutzanfragen:**

> **[Name des Herausgebers]**
> **[Adresse]**
> **[E-Mail-Adresse — vor Veröffentlichung auszufüllen]**

**Datenschutzbeauftragter (DSB):** Sofern ein Datenschutzbeauftragter benannt wurde, lauten dessen Kontaktdaten:

> **[Name und Kontaktdaten des DSB — oder „Kein DSB bestellt" angeben, falls nicht zutreffend]**

**Recht auf Beschwerde:** Wenn Sie der Ansicht sind, dass die Verarbeitung Ihrer personenbezogenen Daten gegen die DSGVO oder das anwendbare nationale Datenschutzrecht verstößt, haben Sie das Recht, eine Beschwerde bei der Aufsichtsbehörde in dem EU-Mitgliedstaat Ihres gewöhnlichen Aufenthaltsorts, Ihres Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes einzulegen. Eine Liste der EU-Aufsichtsbehörden ist abrufbar unter [edpb.europa.eu/about-edpb/about-edpb/members_en](https://www.edpb.europa.eu/about-edpb/about-edpb/members_en). Sie haben auch das Recht, einen gerichtlichen Rechtsbehelf einzulegen.

---

*Diese Datenschutzerklärung gilt für die Sono-App. Sie gilt nicht für Drittanbieterdienste, auf die hier verlinkt oder verwiesen wird; diese verfügen über eigene Datenschutzrichtlinien und sind für die Verarbeitung personenbezogener Daten eigenverantwortlich.*
