---
layout: doc
---

# Informativa sui Cookie — Sono AAC Communicator

**Ultimo aggiornamento: 23 febbraio 2026**

---

## 1. Cosa Sono i Cookie?

I cookie sono piccoli file di testo collocati su un dispositivo da un sito web o da un servizio basato sul web per memorizzare informazioni tra le sessioni. Si tratta di una tecnologia del browser web e non sono una componente intrinseca delle applicazioni mobile native.

---

## 2. Questa App Utilizza Cookie?

**Per lo più no.** Sono è un'applicazione mobile nativa. Durante il normale utilizzo — sfogliare i simboli, costruire frasi, riprodurre l'output vocale o utilizzare la funzionalità AI per le frasi — non vengono utilizzati cookie, sessioni web o spazio di archiviazione del browser.

L'App include una componente WebView incorporata utilizzata **esclusivamente** per visualizzare i documenti legali (la presente Informativa sui Cookie, l'Informativa sulla Privacy e i Termini e Condizioni) quando si sceglie di visualizzarli dalla schermata di benvenuto dell'App. A seconda di come tali documenti sono ospitati, quella WebView potrebbe o meno trasmettere cookie al Suo dispositivo (vedere la Sezione 4).

Non vengono utilizzati cookie di tracciamento, cookie analitici o cookie pubblicitari in nessun momento durante il normale funzionamento dell'App.

---

## 3. Archiviazione Locale Utilizzata dall'App

Sebbene l'App non utilizzi cookie durante il normale funzionamento, memorizza un piccolo numero di valori di preferenza sul Suo dispositivo tramite il servizio di cache interno dell'App. Questi sono funzionalmente necessari per il funzionamento dell'App e non La tracciano tra applicazioni o dispositivi.

I seguenti dati vengono memorizzati localmente sul Suo dispositivo:

| Elemento Memorizzato | Scopo | Formato | Salvato su Disco |
|---|---|---|---|
| `gsaCache.db` | Archivio delle preferenze dell'App — contiene nome visualizzato, genere, interruttore AI, selezione della voce TTS e l'indice delle foto dei simboli personalizzate | Database chiave-valore Sembast | Sì |
| File foto personalizzate | Foto personali assegnate ai simboli dall'operatore | File immagine | Sì |
| Cronologia messaggi | Frasi pronunciate di recente (solo sessione corrente) | Solo in memoria | **No** |
| Modello linguistico AI | Il file LLM sul dispositivo (se scaricato) | Binario GGUF | Sì |
| Modelli voce TTS | File di sintesi vocale offline (se scaricati) | Binario modello | Sì |

Tutti questi elementi sono memorizzati nella directory sandbox privata dell'App sul Suo dispositivo. Non sono accessibili ad altre applicazioni e non vengono trasmessi ad alcun server dall'App.

Poiché le preferenze dell'App sono memorizzate come cookie funzionali nel database `gsaCache.db`, sono soggette al meccanismo di consenso ai cookie dell'App. Se il consenso ai cookie funzionali viene revocato, l'App cancellerà il database delle preferenze alla successiva accettazione del consenso.

---

## 4. WebView Incorporata per la Visualizzazione dei Documenti Legali

L'App include una componente WebView incorporata (basata su `webview_flutter`) utilizzata **esclusivamente** per visualizzare i documenti legali — la presente Informativa sui Cookie, l'Informativa sulla Privacy e i Termini e Condizioni. Questa WebView viene aperta solo quando tocca deliberatamente un link a un documento legale nella schermata di benvenuto dell'App.

**Se i documenti legali sono ospitati su un URL remoto:** Il server che fornisce quei documenti potrebbe impostare cookie o utilizzare altri meccanismi di tracciamento nella WebView, allo stesso modo di qualsiasi sito web visitato in un browser. In tal caso si applicano le pratiche sulla privacy e sui cookie di quel servizio di hosting — non la presente informativa.

**Se i documenti legali vengono serviti dalle risorse locali dell'App:** Non viene effettuata alcuna richiesta di rete esterna e non vengono impostati né ricevuti cookie.

Nessun'altra componente WebView, browser incorporato o contenuto web di terze parti viene caricato durante qualsiasi altra parte del normale funzionamento dell'App.

---

## 5. Servizi di Terze Parti e la Loro Archiviazione

Quando sceglie volontariamente di scaricare file di modelli AI o TTS facoltativi, l'App effettua richieste HTTPS ai seguenti server di terze parti. Questi server potrebbero impostare i propri cookie o utilizzare i propri meccanismi di tracciamento se li visita successivamente tramite un browser, ma non impostano cookie sul Suo dispositivo tramite l'App stessa.

| Servizio | Cosa Accade | Informativa Cookie/Privacy |
|---|---|---|
| Hugging Face (`huggingface.co`) | Solo download file — nessun cookie impostato tramite l'App | [huggingface.co/privacy](https://huggingface.co/privacy) |
| GitHub (`github.com`) | Solo download file — nessun cookie impostato tramite l'App | [docs.github.com/en/site-policy/privacy-policies](https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement) |
| Apple TTS (fallback, iOS) | Gestito dal sistema operativo — v. informativa privacy di Apple | [apple.com/legal/privacy](https://www.apple.com/legal/privacy/) |
| Google TTS (fallback, Android) | Gestito dal sistema operativo — v. informativa privacy di Google | [policies.google.com/privacy](https://policies.google.com/privacy) |

---

## 6. Rimozione di Tutti i Dati dell'App

Può rimuovere tutti i dati memorizzati dall'App in qualsiasi momento **disinstallando l'App** dal Suo dispositivo. Questa operazione eliminerà definitivamente tutti i file di preferenza, le foto personalizzate e i file modello scaricati. La procedura varia leggermente in base alla piattaforma:

**iOS:** Acceda a Impostazioni > Generali > Spazio iPhone (o iPad) > Sono > Elimina App.

**Android:** Acceda a Impostazioni > App > Sono > Disinstalla. In alternativa, utilizzi Impostazioni > App > Sono > Spazio di archiviazione > Cancella dati per rimuovere tutti i dati memorizzati senza disinstallare l'App.

Può anche rimuovere singole foto personalizzate in qualsiasi momento tenendo premuta una scheda simbolo nell'App e selezionando l'opzione per rimuovere la foto personalizzata.

---

## 7. Modifiche alla Presente Informativa

Potremmo aggiornare la presente Informativa sui Cookie di tanto in tanto. La data di "Ultimo aggiornamento" in cima al presente documento riflette la revisione più recente. Poiché questa App non utilizza cookie e le sue pratiche di archiviazione locale cambiano solo con aggiornamenti significativi dell'App, le modifiche alla presente informativa sono previste essere poco frequenti.

---

## 8. Contatti

Per qualsiasi domanda sulla presente Informativa sui Cookie o sulle pratiche di archiviazione locale dell'App, ci contatti a:

> **Matan Ljubas**
> **lj.matan@gmail.com**

---

*La presente Informativa sui Cookie si applica esclusivamente all'app mobile nativa Sono. Non si applica ad alcun sito web o servizio basato sul web che possa essere associato all'editore.*
