---
layout: doc
---

# Privatlivspolitik — Sono AAC Communicator

**Senest opdateret: 23. februar 2026**

---

## 1. Indledning og den dataansvarliges identitet

Sono er en billedsymbol-kommunikationsapplikation, der er designet til at hjælpe personer med at udtrykke sig ved hjælp af billeder og talte ord.

**Dataansvarlig:** Den enhed, der er ansvarlig for behandlingen af personoplysninger i forbindelse med denne applikation, er:

> **Matan Ljubas**
> Kontakt: **lj.matan@gmail.com**

**EU-repræsentant (hvor relevant):** Hvis udgiveren er etableret uden for Det Europæiske Økonomiske Samarbejdsområde (EØS), kræves en EU-repræsentant i henhold til artikel 27 i den generelle forordning om databeskyttelse (GDPR). Hvor det er påkrævet, er EU-repræsentanten:

> **[EU-repræsentantens navn og adresse — udfyldes, hvis udgiveren er uden for EØS]**

**Grundprincippet:** Sono er designet til at køre udelukkende på din enhed. Den indsamler ikke personoplysninger eksternt, opretter ikke brugerkonti, sporer dig ikke og transmitterer ikke din kommunikationsaktivitet til nogen server.

---

## 2. Oplysninger gemt på din enhed

Sono gemmer en lille mængde præferencedata lokalt på din enhed. Disse data forlader aldrig enheden, medmindre du eksplicit sikkerhedskopierer din enhed ved hjælp af en tredjeparts tjeneste (såsom iCloud eller Google Drive), der er underlagt den pågældende tjenestes egne privatlivspolitik.

| Data | Beskrivelse | Lagringsted |
|---|---|---|
| Vist navn | Et navn, som omsorgspersonen angiver for brugeren (f.eks. "Alex") | Enhedens filsystem |
| Kønspræference | Visuel præference (neutral / mand / kvinde) for illustrationsvarianter | Enhedens filsystem |
| AI-sætningspoleringstil/fravalg | Om sprogsmodellen på enheden er aktiveret | Enhedens filsystem |
| Stemmevælger | Den valgte tekst-til-tale-stemme | Enhedens filsystem |
| Tilpassede symbolfotografier | Fotografier tildelt kommunikationssymboler af omsorgspersonen | Enhedens filsystem |
| Tilpasset fotoindeks | Et lokalt kort, der knytter symbol-id'er til fotostierne | Enhedens filsystem |

**Beskedhistorik** (senest talte sætninger) opbevares **kun i hukommelsen** i den aktuelle appsessions varighed. Den skrives ikke til disk og mistes permanent, når appen lukkes.

---

## 3. Sådan anvender vi disse oplysninger

Ovenstående oplysninger anvendes udelukkende til at drive applikationen på din enhed:

- **Vist navn** — vises som en hilsen på startskærmen.
- **Kønspræference** — vælger kønspassende illustrationsvarianter.
- **AI-til/fra** — afgør, om sprogsmodellen på enheden forbedrer talte sætninger.
- **Stemmevælger** — driver tekst-til-tale-motoren.
- **Tilpassede fotos** — vises på symbolkort i stedet for standardillustrationer.

Ingen af disse oplysninger anvendes til analyser, annoncering, profilering eller noget andet formål end at drive applikationen lokalt på din enhed.

---

## 4. Retsgrundlag for behandling (GDPR)

Hvor den generelle forordning om databeskyttelse (EU) 2016/679 finder anvendelse, er retsgrundlagene i henhold til artikel 6 i GDPR for behandling af de data, der er beskrevet i afsnit 2:

| Data | Retsgrundlag | Forklaring |
|---|---|---|
| Vist navn, kønspræference, AI-til/fra, stemmevælger | **Art. 6(1)(b) — Opfyldelse af kontrakt** | Disse præferencer er nødvendige for at levere applikationens kernefunktionalitet som konfigureret af brugeren/omsorgspersonen. |
| Tilpassede symbolfotografier | **Art. 6(1)(a) — Samtykke** | Omsorgspersonen tildeler eksplicit et foto til et symbol. Samtykke kan til enhver tid tilbagekaldes ved at fjerne fotoet via menuen ved langt tryk. |

Ingen behandling er baseret på automatisk profilering, og ingen behandlingsbeslutninger har retlige eller lignende væsentlige konsekvenser for nogen person (se også afsnit 13, Ret til ikke at være genstand for automatiseret beslutningstagning).

---

## 5. Kunstig intelligens på enheden

Når AI-sætningspolersfunktionen er aktiveret, anvender applikationen en stor sprogmodel (LLM) på enheden til at gøre talte sætninger mere naturligt klingende. Denne behandling foregår **udelukkende på din enhed**:

- Modellen (Qwen2.5-0.5B-Instruct, ca. 400 MB) downloades én gang fra et offentligt lager (Hugging Face) og gemmes lokalt.
- Ingen sætninger, symboler eller andre input, som du skriver eller trykker på, sendes nogensinde til en ekstern server til AI-behandling.
- Hvis AI-funktionen er deaktiveret, eller modellen ikke er downloadet, falder applikationen tilbage til en indbygget regelbaseret grammatikmotor.
- AI-funktionen producerer ingen profilering, automatiseret beslutningstagning eller slutninger om nogen person.

---

## 6. Tekst-til-tale

Sono tilbyder to tekst-til-tale-tilstande:

**Offline-stemmer (foretrukken):** Applikationen kan downloade sprogspecifikke stemmemodeller fra et offentligt lager (Sherpa-ONNX / GitHub-udgivelser). Når de er downloadet, foregår al talesyntese udelukkende på din enhed uden at data transmitteres eksternt.

**Systemstemmer på enheden (reserve):** Når en offline-stemme ikke er tilgængelig for det valgte sprog, anvender applikationen din enheds indbyggede tekst-til-tale-tjeneste (leveret af Apple eller Google afhængigt af din enhed). Disse systemtjenester er underlagt privatlivspolitikkerne fra henholdsvis Apple og Google og **kan transmittere talt tekst til deres servere** for at syntetisere den. Du kan undgå dette ved at downloade en offline-stemme under **Indstillinger > Stemme**.

---

## 7. Valgfri internetforbindelser

Sono har ingen obligatorisk internetforbindelse. Applikationen fungerer fuldt ud offline efter installation.

Den eneste netværksaktivitet, der forekommer, er, når du vælger at downloade valgfrie ressourcer:

- **AI-sprogmodel** — downloades fra Hugging Face (`huggingface.co`), når du trykker på "Download model" i Indstillinger. Ca. 400 MB.
- **Offline stemmemodeller** — downloades fra Sherpa-ONNX-udgivelser på GitHub (`github.com`), når du vælger og downloader en stemme i Indstillinger. Modelstørrelse varierer efter sprog.

Disse downloads overfører kun de data, der er iboende i enhver HTTPS-anmodning (din IP-adresse og grundlæggende anmodningsheadere). Ingen personoplysninger, kommunikationsindhold eller brugsdata er inkluderet i disse anmodninger. Når de er downloadet, fungerer modellerne udelukkende offline.

---

## 8. Enhedstilladelser

Applikationen anmoder om følgende enhedstilladelser:

| Tilladelse | Årsagen til anmodningen |
|---|---|
| **Kamera** | For at tage et foto og tildele det til et kommunikationssymbol. Fotos gemmes kun lokalt og transmitteres aldrig. |
| **Fotobibliotek** | For at vælge et eksisterende foto og tildele det til et kommunikationssymbol. Det valgte foto kopieres kun lokalt og transmitteres aldrig. |

Applikationen anmoder ikke om adgang til placering, kontakter, mikrofon (til optagelse), Bluetooth, sundhedsdata eller andre følsomme tilladelser ud over de ovenfor nævnte.

---

## 9. Oplysninger vi ikke indsamler

Sono indsamler, transmitterer eller gemmer ikke nogen af følgende:

- Kommunikationsindhold (talte sætninger eller trykkede symboler)
- Brugsmønstre, sessionslængde eller brugshyppighed
- Enhedsidentifikatorer, reklame-id'er eller fingeraftryksdata
- Fejlrapporter eller diagnostiske logfiler sendt til en fjernserver
- Navne, e-mailadresser eller personlige identifikatorer ud over dem, der lokalt er indtastet af omsorgspersonen
- Placeringsdata af enhver art
- Biometriske eller sundhedsrelaterede data

Der er ingen analytics-SDK'er, annonceringsnetværk eller tredjeparts sporingsbiblioteker integreret i applikationen.

---

## 10. Tredjeparts tjenester

De eneste tredjepartstjenester, der er involveret i applikationen, er de valgfrie modeldownloadkilder og platformstjenester på enhedsniveau:

| Tjeneste | Rolle | Privatlivspolitik |
|---|---|---|
| Hugging Face (`huggingface.co`) | Hoster den valgfrie AI-sprogmodelfil | [huggingface.co/privacy](https://huggingface.co/privacy) |
| GitHub (`github.com`) | Hoster valgfrie offline-stemmemodellarkiver | [docs.github.com/en/site-policy/privacy-policies](https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement) |
| Apple TTS (iOS, reserve) | Enhedens tekst-til-tale, når ingen offline-stemme er installeret | [apple.com/legal/privacy](https://www.apple.com/legal/privacy/) |
| Google TTS (Android, reserve) | Enhedens tekst-til-tale, når ingen offline-stemme er installeret | [policies.google.com/privacy](https://policies.google.com/privacy) |

Applikationen har intet forhold til annonceringsnetværk, analyticsudbydere eller datamæglere.

---

## 11. Internationale dataoverførsler

Selve applikationen overfører ikke personoplysninger internationalt. Når du frivilligt downloader AI- eller TTS-modelfiler, sendes disse anmodninger dog til servere drevet af Hugging Face og GitHub, som har base i USA.

Disse downloads indeholder ikke personoplysninger ud over standardoplysningerne i enhver HTTPS-anmodning (IP-adresse, anmodningsheadere). Intet kommunikationsindhold, brugerpræferencer eller identificerende oplysninger om nogen person transmitteres.

Hvor GDPR finder anvendelse, beror overførsler af personoplysninger til USA på:
- EU-US Data Privacy Framework (hvor modtageren er certificeret), eller
- Standardkontraktbestemmelser (SCC'er) vedtaget af Europa-Kommissionen, eller
- Det faktum, at der ikke transmitteres personoplysninger i GDPR's forstand i de relevante anmodninger, hvilket gør kapitel V i GDPR inapplicabelt på disse overførsler.

For den behandling, der udføres af Apple TTS og Google TTS (hvor de bruges som reserve), henvises til henholdsvis Apples og Googles privatlivspolitikker og deres offentliggjorte overførselsmekanismer.

---

## 12. Børns privatliv

Sono er designet til at støtte personer i alle aldre, der har gavn af billedsymbol-kommunikation, herunder børn.

Da applikationen ikke indsamler personoplysninger eksternt og udelukkende fungerer på enheden, udgør den en minimal privatlivsrisiko for alle brugere, herunder børn.

**EU/EØS — Digitalt samtykkealdre (GDPR artikel 8):** I Den Europæiske Union og Det Europæiske Økonomiske Samarbejdsområde varierer den alder, hvor en person kan samtykke til databehandling relateret til digitale tjenester, fra medlemsstat til medlemsstat (mellem 13 og 16 år). Hvor applikationen anvendes af et barn under den gældende digitale samtykkealder, kræves samtykke fra indehaveren af forældreansvaret til enhver databehandling. For denne applikation er den eneste behandling, der kræver samtykke, tildelingen af tilpassede fotos (se afsnit 4). Forældre og værger opfordres til at gennemgå og konfigurere disse indstillinger.

Hvis du vælger at downloade en AI- eller TTS-model, foregår disse downloads over en krypteret HTTPS-forbindelse. Forældre og værger, der ønsker at forhindre al internetadgang fra applikationen, kan gøre dette ved at begrænse internetadgang på enheds- eller routerniveau — applikationen vil fortsat fungere fuldt ud ved hjælp af tidligere downloadede modeller.

---

## 13. Dine rettigheder i henhold til GDPR

Hvis du befinder dig i Det Europæiske Økonomiske Samarbejdsområde, Det Forenede Kongerige eller en anden jurisdiktion med tilsvarende databeskyttelseslovgivning, har du følgende rettigheder vedrørende personoplysninger, der behandles i forbindelse med denne applikation. Da praktisk talt alle data er gemt lokalt på din enhed og du kontrollerer dem direkte, kan de fleste rettigheder til enhver tid udøves af dig via selve applikationen.

| Ret | Sådan udøves den |
|---|---|
| **Ret til indsigt (art. 15)** | Alle gemte data er på din enhed. Du kan se det viste navn og indstillinger direkte i Omsorgspersonens indstillinger. Tilpassede fotos er synlige på symboltavlen. |
| **Ret til berigtigelse (art. 16)** | Ændr alle gemte oplysninger direkte i Omsorgspersonens indstillinger til enhver tid. |
| **Ret til sletning / "retten til at blive glemt" (art. 17)** | Slet individuelle tilpassede fotos via symbolets menu ved langt tryk. Slet alle appdata ved at afinstallere applikationen. |
| **Ret til begrænsning af behandling (art. 18)** | Deaktiver specifikke funktioner (f.eks. slå AI-til/fra fra, fjern et tilpasset foto) for at begrænse den tilhørende behandling. |
| **Ret til dataportabilitet (art. 20)** | Appdata gemmes i standardformater (ren tekst, JSON, almindelige billedformater) i applikationens sandkassebibliotek. På understøttede platforme kan du tilgå dette via enhedens sikkerhedskopieringsværktøjer. |
| **Ret til indsigelse (art. 21)** | Du kan til enhver tid gøre indsigelse mod behandling baseret på legitime interesser ved at kontakte os (se afsnit 18). Hvor behandling er baseret på samtykke, se retten til at tilbagekalde samtykke nedenfor. |
| **Ret til at tilbagekalde samtykke (art. 7(3))** | Hvor behandling er baseret på samtykke (tilpassede fotos), kan du til enhver tid tilbagekalde samtykket ved at fjerne fotoet. Tilbagekaldelse påvirker ikke lovligheden af behandling forud for tilbagekaldelsen. |
| **Ret til ikke at være genstand for automatiseret beslutningstagning (art. 22)** | Applikationen udfører ikke automatiseret beslutningstagning eller profilering, der producerer retlige eller lignende væsentlige konsekvenser for personer. |

For at udøve rettigheder, der ikke kan adresseres direkte i applikationen, eller for at rejse en bekymring om vores datapraksis, bedes du kontakte os ved hjælp af oplysningerne i afsnit 18.

---

## 14. Dataopbevaring og sletning

**Sessionsdata (beskedhistorik):** Ryddes automatisk hver gang applikationen lukkes. Bevares ikke til disk.

**Præferencedata (navn, køn, til/fra, stemmevælger):** Opbevares på enheden, indtil omsorgspersonen manuelt ændrer indstillingen, eller indtil applikationen afinstalleres.

**Tilpassede fotos:** Opbevares på enheden, indtil de individuelt fjernes via symbolets menu ved langt tryk, eller indtil applikationen afinstalleres.

**AI- og TTS-modelfiler:** Opbevares på enheden, indtil de slettes via Indstillinger, eller indtil applikationen afinstalleres.

**Sådan sletter du alle appdata:** Afinstallation af applikationen fra din enhed fjerner alle lokalt gemte filer, herunder alle præferencer, tilpassede fotos og downloadede modelfiler.

Vi opbevarer ingen af disse oplysninger på vores egne servere, da ingen af dem nogensinde transmitteres til os.

---

## 15. Datasikkerhed

Alle data, der gemmes af applikationen, befinder sig i applikationens private sandkassebeholder på din enhed, som er beskyttet af dit operativsystems indbyggede sikkerhedsmekanismer (filsystemkryptering, procesisolation, app-sandboxing). Applikationen implementerer ikke krypteringslag ud over dem, som operativsystemet leverer.

Da ingen personoplysninger transmitteres til vores infrastruktur, er der ingen serverside-data hos os, der kunne være genstand for et brud på vores side. I det usandsynlige tilfælde, at vi bliver opmærksomme på en sikkerhedssårbarhed i applikationen, der påvirker personoplysninger, vil vi underrette berørte brugere via en appopdatering og, hvor det kræves ved lov, underrette den relevante tilsynsmyndighed inden for 72 timer efter at være blevet opmærksomme (GDPR artikel 33).

---

## 16. Adgang til omsorgspersonens indstillinger

Indstillinger (herunder muligheden for at ændre brugerens navn, stemme og tilpassede fotos) er tilgængelige via en skjult gestus — fire tryk inden for to sekunder på sætningsområdet. Denne mekanisme er tiltænkt som en simpel barriere mod utilsigtede ændringer, ikke som et stærkt adgangskontrolsystem. Hvis du kræver streng adgangskontrol, anbefaler vi at bruge din enheds styret adgang eller skærmtidsfunktioner til at begrænse in-app-navigation.

---

## 17. Ændringer af denne politik

Vi kan fra tid til anden opdatere denne privatlivspolitik for at afspejle ændringer i applikationen eller i gældende lovgivning. Når vi gør det, ændres datoen "Senest opdateret" øverst i dette dokument. Hvor ændringer er væsentlige, vil vi underrette dig via en in-app-meddelelse eller en appopdatering.

Fortsat brug af applikationen efter en ændring er offentliggjort, udgør accept af den opdaterede politik, medmindre din fortsatte brug er baseret på en rettighed, der kræver nyt samtykke, i hvilket tilfælde vi vil indhente dette samtykke eksplicit.

---

## 18. Kontakt, databeskyttelsesrådgiver og tilsynsmyndighed

**Kontakt for databeskyttelsesforespørgsler:**

> **Matan Ljubas**
> **[Adresse]**
> **lj.matan@gmail.com**

**Databeskyttelsesrådgiver (DPO):** Hvis en databeskyttelsesrådgiver er udpeget, er vedkommendes kontaktoplysninger:

> **[DPO's navn og kontaktoplysninger — eller angiv "Ingen DPO udpeget", hvis ikke relevant]**

**Ret til at indgive en klage:** Hvis du mener, at behandlingen af dine personoplysninger er i strid med GDPR eller gældende national databeskyttelseslovgivning, har du ret til at indgive en klage til tilsynsmyndigheden i det EU-medlemsland, hvor du har dit sædvanlige opholdssted, arbejdssted eller stedet for den påståede overtrædelse. En liste over EU's tilsynsmyndigheder er tilgængelig på [edpb.europa.eu/about-edpb/about-edpb/members_en](https://www.edpb.europa.eu/about-edpb/about-edpb/members_en). Du har også ret til at søge domstolsbeskyttelse.

---

*Denne privatlivspolitik gælder for Sono-applikationen. Den gælder ikke for nogen tredjepartstjenester, der er linket til eller refereret til heri, da disse har deres egne privatlivspolitikker og eget dataansvar.*
