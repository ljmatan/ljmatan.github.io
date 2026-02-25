# Informativa sulla Privacy — Sono AAC Communicator

**Ultimo aggiornamento: 23 febbraio 2026**

---

## 1. Introduzione e Identità del Titolare del Trattamento

Sono è un'app di comunicazione basata su simboli pittografici, progettata per aiutare le persone ad esprimersi tramite immagini e parole pronunciate.

**Titolare del trattamento:** Il soggetto responsabile del trattamento dei dati personali in relazione a questa app è:

> **Matan Ljubas**
> Contatto: **lj.matan@gmail.com**

**Rappresentante nell'UE (ove applicabile):** Se l'editore è stabilito al di fuori dello Spazio Economico Europeo (SEE), è richiesto un rappresentante nell'UE ai sensi dell'articolo 27 del Regolamento Generale sulla Protezione dei Dati (GDPR). Ove richiesto, il rappresentante nell'UE è:

> **[Nome e indirizzo del rappresentante nell'UE — da completare se l'editore è fuori dal SEE]**

**Il principio fondamentale:** Sono è progettata per funzionare interamente sul Suo dispositivo. Non raccoglie dati personali da remoto, non crea account utente, non La traccia e non trasmette la Sua attività comunicativa ad alcun server.

---

## 2. Informazioni Memorizzate sul Suo Dispositivo

Sono memorizza una piccola quantità di dati sulle preferenze localmente sul Suo dispositivo. Questi dati non lasciano mai il dispositivo a meno che Lei non esegua esplicitamente il backup del dispositivo tramite un servizio di terze parti (come iCloud o Google Drive), operazione disciplinata dall'informativa sulla privacy di tale servizio.

| Dato | Descrizione | Dove Memorizzato |
|---|---|---|
| Nome visualizzato | Un nome impostato dall'operatore per l'utente (es. "Alex") | File system del dispositivo |
| Preferenza di genere | Preferenza visiva (neutro / maschile / femminile) per le varianti delle illustrazioni | File system del dispositivo |
| Attivazione AI per perfezionamento frasi | Indica se il modello linguistico sul dispositivo è abilitato | File system del dispositivo |
| Selezione voce | La voce di sintesi vocale scelta | File system del dispositivo |
| Foto simbolo personalizzate | Foto assegnate ai simboli di comunicazione dall'operatore | File system del dispositivo |
| Indice foto personalizzate | Una mappa locale che collega gli ID simbolo ai percorsi dei file foto | File system del dispositivo |

**La cronologia messaggi** (frasi pronunciate di recente) viene conservata **solo in memoria** per la durata della sessione dell'app corrente. Non viene scritta su disco ed è definitivamente persa alla chiusura dell'app.

---

## 3. Come Utilizziamo Queste Informazioni

Le informazioni elencate sopra vengono utilizzate esclusivamente per far funzionare l'app sul Suo dispositivo:

- **Nome visualizzato** — mostrato come saluto nella schermata principale.
- **Preferenza di genere** — seleziona varianti delle illustrazioni appropriate al genere.
- **Attivazione AI** — determina se il modello linguistico sul dispositivo migliora le frasi pronunciate.
- **Selezione voce** — gestisce il motore di sintesi vocale.
- **Foto personalizzate** — visualizzate nelle schede simbolo al posto delle illustrazioni predefinite.

Nessuna di queste informazioni viene utilizzata per analisi, pubblicità, profilazione o per qualsiasi scopo diverso dal funzionamento dell'app localmente sul Suo dispositivo.

---

## 4. Base Giuridica del Trattamento (GDPR)

Laddove si applichi il Regolamento Generale sulla Protezione dei Dati (UE) 2016/679, le basi giuridiche ai sensi dell'articolo 6 GDPR per il trattamento dei dati descritti nella Sezione 2 sono:

| Dato | Base Giuridica | Spiegazione |
|---|---|---|
| Nome visualizzato, preferenza di genere, attivazione AI, selezione voce | **Art. 6(1)(b) — Esecuzione del contratto** | Queste preferenze sono necessarie per fornire le funzionalità principali dell'app come configurate dall'utente/operatore. |
| Foto simbolo personalizzate | **Art. 6(1)(a) — Consenso** | L'operatore assegna esplicitamente una foto a un simbolo. Il consenso può essere revocato in qualsiasi momento rimuovendo la foto tramite il menu a pressione prolungata. |

Nessun trattamento è basato su profilazione automatizzata e nessuna decisione di trattamento produce effetti giuridici o analoghi effetti significativi su alcun individuo (v. anche Sezione 13, Diritto di non essere sottoposto a decisioni automatizzate).

---

## 5. Intelligenza Artificiale sul Dispositivo

Quando la funzionalità di perfezionamento AI delle frasi è abilitata, l'app utilizza un modello linguistico di grandi dimensioni (LLM) sul dispositivo per rendere le frasi pronunciate più naturali. Questo processo avviene **interamente sul Suo dispositivo**:

- Il modello (Qwen2.5-0.5B-Instruct, circa 400 MB) viene scaricato una sola volta da un repository pubblico (Hugging Face) e memorizzato localmente.
- Nessuna frase, simbolo o altro input digitato o selezionato viene mai inviato a un server esterno per l'elaborazione AI.
- Se la funzionalità AI è disabilitata o il modello non è stato scaricato, l'app ricorre a un motore grammaticale basato su regole integrato.
- La funzionalità AI non produce profilazioni, decisioni automatizzate o inferenze su alcun individuo.

---

## 6. Sintesi Vocale

Sono offre due modalità di sintesi vocale:

**Voci offline (preferite):** L'app può scaricare modelli vocali specifici per lingua da un repository pubblico (Sherpa-ONNX / release GitHub). Una volta scaricati, tutta la sintesi vocale avviene interamente sul Suo dispositivo senza trasmissione esterna di dati.

**Voci di sistema del dispositivo (fallback):** Quando non è disponibile una voce offline per la lingua selezionata, l'app utilizza il servizio di sintesi vocale integrato nel dispositivo (fornito da Apple o Google, a seconda del dispositivo). Questi servizi di sistema sono disciplinati dalle rispettive informative sulla privacy di Apple e Google e **possono trasmettere il testo pronunciato ai loro server** per sintetizzarlo. È possibile evitare questo comportamento scaricando una voce offline in **Impostazioni > Voce**.

---

## 7. Connessioni Internet Facoltative

Sono non richiede alcuna connessione internet obbligatoria. L'app funziona completamente offline dopo l'installazione.

L'unica attività di rete che si verifica avviene quando Lei sceglie di scaricare risorse opzionali:

- **Modello linguistico AI** — scaricato da Hugging Face (`huggingface.co`) quando tocca "Scarica Modello" nelle Impostazioni. Circa 400 MB.
- **Modelli voce offline** — scaricati dalle release Sherpa-ONNX su GitHub (`github.com`) quando seleziona e scarica una voce nelle Impostazioni. La dimensione del modello varia in base alla lingua.

Questi download trasferiscono solo i dati inerenti a qualsiasi richiesta HTTPS (il Suo indirizzo IP e le intestazioni di richiesta di base). Nessuna informazione personale, contenuto comunicativo o dati di utilizzo è incluso in queste richieste. Una volta scaricati, i modelli funzionano completamente offline.

---

## 8. Permessi del Dispositivo

L'app richiede i seguenti permessi del dispositivo:

| Permesso | Perché Viene Richiesto |
|---|---|
| **Fotocamera** | Per scattare una foto e assegnarla a un simbolo di comunicazione. Le foto vengono memorizzate solo localmente e non vengono mai trasmesse. |
| **Libreria foto** | Per selezionare una foto esistente e assegnarla a un simbolo di comunicazione. La foto selezionata viene copiata solo localmente e non viene mai trasmessa. |

L'app non richiede accesso a posizione, contatti, microfono (per registrazioni), Bluetooth, dati sanitari o qualsiasi altro permesso sensibile oltre a quelli elencati sopra.

---

## 9. Informazioni che Non Raccogliamo

Sono non raccoglie, non trasmette e non memorizza nessuno dei seguenti dati:

- Contenuto delle comunicazioni (frasi pronunciate o simboli selezionati)
- Schemi di utilizzo, durata delle sessioni o frequenza d'uso
- Identificatori del dispositivo, ID pubblicitari o dati di fingerprinting
- Rapporti sugli arresti anomali o log diagnostici inviati a un server remoto
- Nomi, indirizzi e-mail o qualsiasi identificativo personale oltre a quelli inseriti localmente dall'operatore
- Dati di localizzazione di qualsiasi tipo
- Dati biometrici o relativi alla salute

Non sono integrati nell'app SDK di analisi, reti pubblicitarie o librerie di tracciamento di terze parti.

---

## 10. Servizi di Terze Parti

Gli unici servizi di terze parti coinvolti nell'app sono le fonti facoltative per il download dei modelli e i servizi platform a livello di dispositivo:

| Servizio | Ruolo | Informativa sulla Privacy |
|---|---|---|
| Hugging Face (`huggingface.co`) | Ospita il file del modello linguistico AI facoltativo | [huggingface.co/privacy](https://huggingface.co/privacy) |
| GitHub (`github.com`) | Ospita gli archivi dei modelli voce offline facoltativi | [docs.github.com/en/site-policy/privacy-policies](https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement) |
| Apple TTS (iOS, fallback) | Sintesi vocale del dispositivo quando non è installata alcuna voce offline | [apple.com/legal/privacy](https://www.apple.com/legal/privacy/) |
| Google TTS (Android, fallback) | Sintesi vocale del dispositivo quando non è installata alcuna voce offline | [policies.google.com/privacy](https://policies.google.com/privacy) |

L'app non ha alcun rapporto con reti pubblicitarie, fornitori di analisi o data broker.

---

## 11. Trasferimenti Internazionali di Dati

L'app stessa non trasferisce dati personali a livello internazionale. Tuttavia, quando sceglie volontariamente di scaricare file di modelli AI o TTS, tali richieste vengono inviate a server gestiti da Hugging Face e GitHub, con sede negli Stati Uniti.

Questi download non contengono dati personali al di là delle informazioni standard presenti in qualsiasi richiesta HTTPS (indirizzo IP, intestazioni di richiesta). Nessun contenuto comunicativo, preferenza utente o informazione identificativa relativa a persone fisiche viene trasmessa.

Ove si applichi il GDPR, i trasferimenti di dati personali verso gli Stati Uniti si basano su:
- Il Data Privacy Framework UE-USA (ove il destinatario sia certificato), o
- Le Clausole Contrattuali Standard (SCC) adottate dalla Commissione europea, o
- Il fatto che nelle relative richieste non vengano trasmessi dati personali ai sensi del GDPR, rendendo inapplicabile il Capitolo V del GDPR a tali trasferimenti.

Per il trattamento effettuato da Apple TTS e Google TTS (ove utilizzati come fallback), si rimanda alle rispettive informative sulla privacy di Apple e Google e ai meccanismi di trasferimento da esse pubblicati.

---

## 12. Privacy dei Minori

Sono è progettata per supportare persone di tutte le età che beneficiano della comunicazione tramite simboli pittografici, inclusi i bambini.

Poiché l'app non raccoglie dati personali da remoto e funziona interamente sul dispositivo, presenta un rischio minimo per la privacy di tutti gli utenti, inclusi i minori.

**UE/SEE — Età del consenso digitale (art. 8 GDPR):** Nell'Unione europea e nello Spazio Economico Europeo, l'età alla quale una persona può prestare il consenso al trattamento dei dati relativo ai servizi digitali varia in base allo Stato membro (tra i 13 e i 16 anni). Quando l'app viene utilizzata da un minore al di sotto dell'età del consenso digitale applicabile, è necessario il consenso del titolare della responsabilità genitoriale per qualsiasi trattamento di dati. Per questa app, l'unico trattamento che richiede il consenso è l'assegnazione di foto personalizzate (v. Sezione 4). Genitori e tutori sono invitati a rivedere e configurare queste impostazioni.

Se sceglie di scaricare un modello AI o TTS, tali download avvengono tramite una connessione HTTPS cifrata. Genitori e tutori che desiderano impedire qualsiasi accesso a internet da parte dell'app possono farlo limitando l'accesso a internet a livello di dispositivo o router — l'app continuerà a funzionare pienamente utilizzando i modelli già scaricati in precedenza.

---

## 13. I Suoi Diritti ai Sensi del GDPR

Se si trova nello Spazio Economico Europeo, nel Regno Unito o in un'altra giurisdizione con normativa equivalente in materia di protezione dei dati, ha i seguenti diritti riguardo ai dati personali trattati in relazione a questa app. Poiché praticamente tutti i dati sono memorizzati localmente sul Suo dispositivo e Lei li controlla direttamente, la maggior parte dei diritti può essere esercitata in qualsiasi momento tramite l'app stessa.

| Diritto | Come Esercitarlo |
|---|---|
| **Diritto di accesso (art. 15)** | Tutti i dati memorizzati si trovano sul Suo dispositivo. Può visualizzare il nome visualizzato e le impostazioni direttamente in Impostazioni Operatore. Le foto personalizzate sono visibili sulla tavola dei simboli. |
| **Diritto di rettifica (art. 16)** | Modifichi qualsiasi informazione memorizzata direttamente in Impostazioni Operatore in qualsiasi momento. |
| **Diritto alla cancellazione / "diritto all'oblio" (art. 17)** | Elimini le singole foto personalizzate tramite il menu a pressione prolungata del simbolo. Elimini tutti i dati dell'app disinstallando l'app. |
| **Diritto di limitazione del trattamento (art. 18)** | Disabiliti funzionalità specifiche (es. disattivi l'AI, rimuova una foto personalizzata) per limitare il trattamento associato. |
| **Diritto alla portabilità dei dati (art. 20)** | I dati dell'app sono memorizzati in formati standard (testo normale, JSON, formati immagine comuni) nella directory sandbox dell'app. Sulle piattaforme supportate, è possibile accedervi tramite gli strumenti di backup del dispositivo. |
| **Diritto di opposizione (art. 21)** | Può opporsi al trattamento basato su interessi legittimi in qualsiasi momento contattandoci (v. Sezione 18). Ove il trattamento sia basato sul consenso, v. il diritto di revoca del consenso di seguito. |
| **Diritto di revoca del consenso (art. 7(3))** | Ove il trattamento sia basato sul consenso (foto personalizzate), può revocare il consenso in qualsiasi momento rimuovendo la foto. La revoca non pregiudica la liceità del trattamento effettuato prima della revoca. |
| **Diritto di non essere sottoposto a decisioni automatizzate (art. 22)** | L'app non effettua decisioni automatizzate o profilazioni che producono effetti giuridici o analoghi effetti significativi sulle persone. |

Per esercitare diritti che non possono essere soddisfatti direttamente nell'app, o per sollevare una questione relativa alle nostre pratiche in materia di dati, La preghiamo di contattarci utilizzando i recapiti indicati nella Sezione 18.

---

## 14. Conservazione e Cancellazione dei Dati

**Dati di sessione (cronologia messaggi):** Cancellati automaticamente ogni volta che l'app viene chiusa. Non vengono salvati su disco.

**Dati di preferenza (nome, genere, attivazione, selezione voce):** Conservati sul dispositivo fino a quando l'operatore non modifica manualmente l'impostazione, o fino alla disinstallazione dell'app.

**Foto personalizzate:** Conservate sul dispositivo fino alla rimozione individuale tramite il menu a pressione prolungata del simbolo, o fino alla disinstallazione dell'app.

**File modello AI e TTS:** Conservati sul dispositivo fino all'eliminazione tramite Impostazioni, o fino alla disinstallazione dell'app.

**Per eliminare tutti i dati dell'app:** La disinstallazione dell'app dal dispositivo rimuove tutti i file memorizzati localmente, incluse tutte le preferenze, le foto personalizzate e i file modello scaricati.

Non conserviamo nessuna di queste informazioni sui nostri server, poiché nessuna di esse ci viene mai trasmessa.

---

## 15. Sicurezza dei Dati

Tutti i dati memorizzati dall'app risiedono nel container sandbox privato dell'app sul Suo dispositivo, protetto dai meccanismi di sicurezza integrati del sistema operativo (cifratura del file system, isolamento dei processi, sandboxing delle app). L'app non implementa livelli di cifratura aggiuntivi rispetto a quelli forniti dal sistema operativo.

Poiché nessun dato personale viene trasmesso alla nostra infrastruttura, non esistono dati lato server detenuti da noi che potrebbero essere soggetti a una violazione da parte nostra. Nell'improbabile eventualità in cui venissimo a conoscenza di una vulnerabilità di sicurezza nell'app che interessa dati personali, informeremo gli utenti interessati tramite un aggiornamento dell'app e, ove richiesto dalla legge, notificheremo all'autorità di controllo competente entro 72 ore dalla presa di conoscenza (art. 33 GDPR).

---

## 16. Accesso alle Impostazioni Operatore

Le impostazioni (inclusa la possibilità di modificare il nome dell'utente, la voce e le foto personalizzate) sono accessibili tramite un gesto nascosto — quattro tocchi in due secondi nell'area delle frasi. Questo meccanismo è inteso come una semplice barriera contro modifiche accidentali, non come un sistema di controllo degli accessi robusto. Se è necessario un controllo degli accessi rigoroso, si consiglia di utilizzare le funzionalità di accesso guidato o tempo schermo del dispositivo per limitare la navigazione nell'app.

---

## 17. Modifiche alla Presente Informativa

Potremmo aggiornare la presente informativa sulla privacy di volta in volta per riflettere modifiche nell'app o nella normativa applicabile. In tal caso, la data di "Ultimo aggiornamento" in cima al presente documento verrà modificata. In caso di modifiche sostanziali, La informeremo tramite un avviso nell'app o un aggiornamento dell'app.

L'utilizzo continuato dell'app dopo la pubblicazione di una modifica costituisce accettazione dell'informativa aggiornata, a meno che tale utilizzo continuato non si basi su un diritto che richiede un nuovo consenso, nel qual caso lo richiederemo esplicitamente.

---

## 18. Contatto, Responsabile della Protezione dei Dati e Autorità di Controllo

**Contatto per richieste in materia di protezione dei dati:**

> **Matan Ljubas**
> **[Indirizzo]**
> **lj.matan@gmail.com**

**Responsabile della Protezione dei Dati (DPO):** Se è stato designato un Responsabile della Protezione dei Dati, i suoi recapiti sono:

> **[Nome e recapiti del DPO — oppure indicare "Nessun DPO designato" se non applicabile]**

**Diritto di proporre reclamo:** Se ritiene che il trattamento dei Suoi dati personali violi il GDPR o la normativa nazionale applicabile in materia di protezione dei dati, ha il diritto di proporre reclamo all'autorità di controllo nello Stato membro dell'UE in cui risiede abitualmente, lavora o in cui si è verificata la presunta violazione. Un elenco delle autorità di controllo dell'UE è disponibile su [edpb.europa.eu/about-edpb/about-edpb/members_en](https://www.edpb.europa.eu/about-edpb/about-edpb/members_en). Ha inoltre il diritto di proporre ricorso giurisdizionale.

---

*La presente informativa sulla privacy si applica all'app Sono. Non si applica ad alcun servizio di terze parti collegato o citato nel presente documento, i quali dispongono delle proprie informative sulla privacy e delle proprie responsabilità come titolari del trattamento.*
