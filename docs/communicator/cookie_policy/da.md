# Cookiepolitik — Sono AAC Communicator

**Senest opdateret: 23. februar 2026**

---

## 1. Hvad er cookies?

Cookies er små tekstfiler, som et websted eller en webbaseret tjeneste placerer på en enhed for at gemme oplysninger mellem sessioner. De er en webbrowserteknologi og er ikke en naturlig del af native mobilapplikationer.

---

## 2. Bruger denne applikation cookies?

**Overvejende nej.** Sono er en native mobilapplikation. Under normal brug — gennemse symboler, opbygge sætninger, afspille stemmeoutput eller bruge AI-sætningsfunktionen — anvendes ingen cookies, websessioner eller browserlagring.

Applikationen indeholder en indlejret WebView-komponent, der bruges **udelukkende** til at vise juridiske dokumenter (denne Cookiepolitik, Privatlivspolitikken og Vilkårene og Betingelserne), når du vælger at se dem fra applikationens velkomstskærm. Afhængigt af hvordan disse dokumenter hostes, kan den pågældende WebView muligvis sende cookies til din enhed — eller måske ikke (se Afsnit 4).

Der anvendes ingen sporingscookies, analyticscookies eller reklamecookies på noget tidspunkt under normal brug af applikationen.

---

## 3. Lokal lagring brugt af applikationen

Selvom applikationen ikke bruger cookies under normal brug, gemmer den et lille antal præferenceværdier på din enhed ved hjælp af applikationens interne cache-tjeneste. Disse er funktionelt nødvendige for, at applikationen kan fungere, og de sporer dig ikke på tværs af applikationer eller enheder.

Følgende data gemmes lokalt på din enhed:

| Lagringselement | Formål | Format | Gemt til disk |
|---|---|---|---|
| `gsaCache.db` | Applikationens præferencelager — indeholder vist navn, køn, AI-skift, TTS-stemmevalg og det tilpassede symbolfotoindeks | Sembast nøgle-værdi-database | Ja |
| Tilpassede fotofiler | Personlige fotos tildelt symboler af omsorgspersonen | Billedfiler | Ja |
| Beskedhistorik | Senest talte sætninger (kun aktuel session) | Kun i hukommelsen | **Nej** |
| AI-sprogmodel | LLM-filen på enheden (hvis downloadet) | GGUF-binær | Ja |
| TTS stemmemodeller | Offline stemmesyntesefiler (hvis downloadet) | Modelbinær | Ja |

Alle disse elementer er gemt i applikationens private sandkassebibliotek på din enhed. De er ikke tilgængelige for andre applikationer og transmitteres ikke til nogen server af applikationen.

Da applikationspræferencer gemmes som funktionelle cookies i databasen `gsaCache.db`, er de underlagt applikationens cookiesamtykkemekanisme. Hvis samtykket til funktionelle cookies tilbagekaldes, vil applikationen rydde præferencedatabasen ved næste samtykkeanerkendelse.

---

## 4. Indlejret WebView til visning af juridiske dokumenter

Applikationen indeholder en indlejret WebView-komponent (drevet af `webview_flutter`), der bruges **udelukkende** til at vise juridiske dokumenter — denne Cookiepolitik, Privatlivspolitikken og Vilkårene og Betingelserne. Denne WebView åbnes kun, når du bevidst trykker på et juridisk dokumentlink på applikationens velkomstskærm.

**Hvis de juridiske dokumenter hostes på en ekstern URL:** Den server, der leverer disse dokumenter, kan indstille cookies eller anvende andre sporingsmekanismer i WebView'et, på samme måde som ethvert websted, der besøges i en browser. I så fald gælder privatlivs- og cookiepraksisserne for den pågældende hostingtjeneste — ikke denne politik.

**Hvis de juridiske dokumenter leveres fra lokale app-ressourcer:** Der foretages ingen ekstern netværksanmodning, og der indstilles eller modtages ingen cookies.

Ingen anden WebView-komponent, indlejret browser eller tredjeparts webindhold indlæses under nogen anden del af applikationens normale drift.

---

## 5. Tredjepartstjenester og deres egen lagring

Når du frivilligt downloader valgfrie AI- eller TTS-modelfiler, foretager applikationen HTTPS-anmodninger til følgende tredjepartsservere. Disse servere kan indstille deres egne cookies eller bruge deres egne sporingsmekanismer, hvis du efterfølgende besøger dem i en browser, men de indstiller ikke cookies på din enhed via applikationen.

| Tjeneste | Hvad sker der | Deres cookies/privatlivspolitik |
|---|---|---|
| Hugging Face (`huggingface.co`) | Kun fildownload — ingen cookies indstillet via applikationen | [huggingface.co/privacy](https://huggingface.co/privacy) |
| GitHub (`github.com`) | Kun fildownload — ingen cookies indstillet via applikationen | [docs.github.com/en/site-policy/privacy-policies](https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement) |
| Apple TTS (reserve, iOS) | Håndteres af OS — se Apples privatlivspolitik | [apple.com/legal/privacy](https://www.apple.com/legal/privacy/) |
| Google TTS (reserve, Android) | Håndteres af OS — se Googles privatlivspolitik | [policies.google.com/privacy](https://policies.google.com/privacy) |

---

## 6. Fjernelse af al applagring

Du kan til enhver tid fjerne alle data, der er gemt af applikationen, ved at **afinstallere applikationen** fra din enhed. Dette vil permanent slette alle præferencefiler, tilpassede fotos og downloadede modelfiler. Processen varierer lidt afhængigt af platform:

**iOS:** Gå til Indstillinger > Generelt > iPhone-lager (eller iPad-lager) > Sono > Slet app.

**Android:** Gå til Indstillinger > Apps > Sono > Afinstaller. Alternativt kan du bruge Indstillinger > Apps > Sono > Lager > Ryd data for at fjerne alle gemte data uden at afinstallere applikationen.

Du kan også til enhver tid fjerne individuelle tilpassede fotos ved at trykke længe på et symbolkort i applikationen og vælge indstillingen til at fjerne det tilpassede foto.

---

## 7. Ændringer af denne politik

Vi kan fra tid til anden opdatere denne Cookiepolitik. Datoen "Senest opdateret" øverst i dette dokument afspejler den seneste revision. Da denne applikation ikke bruger cookies, og dens lokale lagringspraksis kun ændrer sig ved væsentlige appopdateringer, forventes ændringer af denne politik at være sjældne.

---

## 8. Kontakt

Hvis du har spørgsmål om denne Cookiepolitik eller applikationens lokale lagringspraksis, bedes du kontakte os på:

> **Matan Ljubas**
> **lj.matan@gmail.com**

---

*Denne Cookiepolitik gælder udelukkende for Sono native mobilapplikation. Den gælder ikke for nogen websted eller webbaseret tjeneste, der måske er tilknyttet udgiveren.*
