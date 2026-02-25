# Zásady ochrany osobných údajov — Sono AAC Communicator

**Posledná aktualizácia: 23. februára 2026**

---

## 1. Úvod a totožnosť prevádzkovateľa

Sono je aplikácia na komunikáciu prostredníctvom obrázkových symbolov, ktorá je navrhnutá tak, aby ľuďom pomáhala vyjadrovať sa pomocou obrázkov a hovorených slov.

**Prevádzkovateľ:** Subjekt zodpovedný za spracúvanie osobných údajov v súvislosti s touto aplikáciou je:

> **Matan Ljubas**
> Kontakt: **lj.matan@gmail.com**

**Zástupca pre EÚ (ak je to relevantné):** Ak je vydavateľ usadený mimo Európskeho hospodárskeho priestoru (EHP), v zmysle článku 27 Všeobecného nariadenia o ochrane údajov (GDPR) je povinný menovať zástupcu pre EÚ. Kde sa to vyžaduje, zástupca pre EÚ je:

> **[Meno a adresa zástupcu pre EÚ — doplniť, ak je vydavateľ mimo EHP]**

**Základná zásada:** Sono je navrhnutý tak, aby fungoval výlučne na vašom zariadení. Nezberá osobné údaje na diaľku, nevytvára používateľské účty, nesleduje vás a nevysiela vašu komunikačnú aktivitu na žiadny server.

---

## 2. Informácie uložené vo vašom zariadení

Sono ukladá malé množstvo preferenčných údajov lokálne vo vašom zariadení. Tieto údaje nikdy neopúšťajú zariadenie, pokiaľ výslovne nezálohujete svoje zariadenie pomocou služby tretej strany (ako iCloud alebo Google Drive), na ktorú sa vzťahujú jej vlastné zásady ochrany osobných údajov.

| Údaj | Popis | Miesto uloženia |
|---|---|---|
| Zobrazené meno | Meno, ktoré opatrovník nastaví pre používateľa (napr. „Alex") | Systém súborov zariadenia |
| Preferencia pohlavia | Vizuálna preferencia (neutrálne / mužské / ženské) pre varianty ilustrácií | Systém súborov zariadenia |
| Prepínač zjemňovania viet pomocou AI | Či je jazykový model zariadenia zapnutý | Systém súborov zariadenia |
| Výber hlasu | Zvolený hlas pre prevod textu na reč | Systém súborov zariadenia |
| Vlastné fotografie symbolov | Fotografie priradené komunikačným symbolom opatrovníkom | Systém súborov zariadenia |
| Index vlastných fotografií | Lokálna mapa prepájajúca identifikátory symbolov s cestami k fotografiám | Systém súborov zariadenia |

**História správ** (nedávno vypovedané vety) je uchovávana **len v pamäti** počas trvania aktuálnej relácie aplikácie. Nezapisuje sa na disk a pri zatvorení aplikácie sa natrvalo stratí.

---

## 3. Ako tieto informácie používame

Vyššie uvedené informácie sa používajú výlučne na prevádzku aplikácie vo vašom zariadení:

- **Zobrazené meno** — zobrazuje sa ako pozdrav na domovskej obrazovke.
- **Preferencia pohlavia** — vyberá pohlaviu zodpovedajúce varianty ilustrácií.
- **Prepínač AI** — určuje, či jazykový model zariadenia vylepšuje vypovedané vety.
- **Výber hlasu** — riadi modul prevodu textu na reč.
- **Vlastné fotografie** — zobrazujú sa na kartách symbolov namiesto predvolených ilustrácií.

Žiadna z týchto informácií sa nepoužíva na analytiku, reklamu, profilovanie ani na žiadny iný účel ako na lokálnu prevádzku aplikácie vo vašom zariadení.

---

## 4. Právny základ spracúvania (GDPR)

Ak sa uplatňuje nariadenie Európskeho parlamentu a Rady (EÚ) 2016/679 (všeobecné nariadenie o ochrane údajov), právne základy podľa článku 6 GDPR pre spracúvanie údajov opísaných v časti 2 sú:

| Údaj | Právny základ | Vysvetlenie |
|---|---|---|
| Zobrazené meno, preferencia pohlavia, prepínač AI, výber hlasu | **Čl. 6(1)(b) — Plnenie zmluvy** | Tieto preferencie sú nevyhnutné na poskytovanie základnej funkcionality aplikácie podľa konfigurácie používateľa/opatrovníka. |
| Vlastné fotografie symbolov | **Čl. 6(1)(a) — Súhlas** | Opatrovník výslovne priradí fotografiu k symbolu. Súhlas možno kedykoľvek odvolať odstránením fotografie prostredníctvom ponuky pri dlhom stlačení. |

Žiadne spracúvanie nie je založené na automatickom profilovaní a žiadne rozhodnutia o spracúvaní nemajú pre žiadnu fyzickú osobu právne ani podobne závažné účinky (pozri tiež časť 13, Právo nebyť predmetom automatizovaného rozhodovania).

---

## 5. Umelá inteligencia v zariadení

Keď je zapnutá funkcia zjemňovania viet pomocou AI, aplikácia používa veľký jazykový model (LLM) v zariadení, aby zneli hovorené vety prirodzenejšie. Toto spracúvanie prebieha **výlučne vo vašom zariadení**:

- Model (Qwen2.5-0.5B-Instruct, približne 400 MB) sa raz stiahne z verejného úložiska (Hugging Face) a uloží lokálne.
- Žiadne vety, symboly ani akýkoľvek iný vstup, ktorý napíšete alebo ťuknete, sa nikdy neodosielajú na externý server na spracúvanie pomocou AI.
- Ak je funkcia AI vypnutá alebo model nebol stiahnutý, aplikácia prejde na záložný vstavaný gramatický modul založený na pravidlách.
- Funkcia AI nevytvára profilovanie, automatizované rozhodovanie ani závery o žiadnej fyzickej osobe.

---

## 6. Prevod textu na reč

Sono ponúka dva režimy prevodu textu na reč:

**Hlasy offline (odporúčané):** Aplikácia si môže stiahnuť jazykovo špecifické hlasové modely z verejného úložiska (Sherpa-ONNX / vydania GitHub). Po stiahnutí prebieha všetka syntéza reči výlučne vo vašom zariadení bez toho, aby sa externe prenášali akékoľvek údaje.

**Systémové hlasy zariadenia (záložné riešenie):** Keď pre vybraný jazyk nie je dostupný hlas offline, aplikácia používa vstavanú službu prevodu textu na reč vášho zariadenia (poskytovanú spoločnosťou Apple alebo Google v závislosti od zariadenia). Na tieto systémové služby sa vzťahujú zásady ochrany osobných údajov spoločností Apple a Google, pričom **môžu prenášať hovorený text na ich servery** za účelom jeho syntézy. Tomu môžete predísť stiahnutím hlasu offline v časti **Nastavenia > Hlas**.

---

## 7. Voliteľné internetové pripojenia

Sono nevyžaduje povinné internetové pripojenie. Aplikácia funguje po inštalácii úplne offline.

Jediná sieťová aktivita nastáva, keď sa rozhodnete stiahnuť voliteľné zdroje:

- **Jazykový model AI** — stiahne sa z Hugging Face (`huggingface.co`), keď ťuknete na „Stiahnuť model" v Nastaveniach. Približne 400 MB.
- **Hlasové modely offline** — stiahnu sa z vydaní Sherpa-ONNX na GitHub (`github.com`), keď v Nastaveniach vyberiete a stiahnete hlas. Veľkosť modelu sa líši podľa jazyka.

Tieto stiahnutia prenášajú len údaje, ktoré sú neoddeliteľnou súčasťou každej požiadavky HTTPS (vaša IP adresa a základné hlavičky požiadaviek). Žiadne osobné informácie, obsah komunikácie ani údaje o používaní nie sú súčasťou týchto požiadaviek. Po stiahnutí fungujú modely výlučne offline.

---

## 8. Povolenia zariadenia

Aplikácia požaduje nasledujúce povolenia zariadenia:

| Povolenie | Dôvod požadovania |
|---|---|
| **Fotoaparát** | Odfotografovanie a priradenie fotografie ku komunikačnému symbolu. Fotografie sa ukladajú len lokálne a nikdy sa neprevádzajú. |
| **Fotoknižnica** | Výber existujúcej fotografie a jej priradenie ku komunikačnému symbolu. Vybraná fotografia sa kopíruje len lokálne a nikdy sa nepreváza. |

Aplikácia nepožaduje prístup k polohe, kontaktom, mikrofónu (na nahrávanie), Bluetooth, zdravotným údajom ani k žiadnym iným citlivým povoleníam nad rámec uvedených.

---

## 9. Informácie, ktoré nezbierame

Sono nezbiera, neprenáša ani neukladá žiadne z nasledujúcich:

- Obsah komunikácie (vypovedané vety alebo ťuknuté symboly)
- Vzorce používania, dĺžku relácie ani frekvenciu používania
- Identifikátory zariadenia, reklamné identifikátory ani odtlačky zariadenia
- Správy o zlyhaní ani diagnostické záznamy odosielané na vzdialený server
- Mená, e-mailové adresy ani žiadne osobné identifikátory okrem tých, ktoré lokálne zadal opatrovník
- Lokalizačné údaje akéhokoľvek druhu
- Biometrické alebo zdravotné údaje

V aplikácii nie sú integrované žiadne analytické SDK, reklamné siete ani sledovacie knižnice tretích strán.

---

## 10. Služby tretích strán

Jedinými službami tretích strán zapojenými do aplikácie sú voliteľné zdroje stiahnutia modelov a služby platformy na úrovni zariadenia:

| Služba | Úloha | Zásady ochrany osobných údajov |
|---|---|---|
| Hugging Face (`huggingface.co`) | Hostí voliteľný súbor jazykového modelu AI | [huggingface.co/privacy](https://huggingface.co/privacy) |
| GitHub (`github.com`) | Hostí voliteľné archívy hlasových modelov offline | [docs.github.com/en/site-policy/privacy-policies](https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement) |
| Apple TTS (iOS, záložné riešenie) | Prevod textu na reč zariadením, keď nie je nainštalovaný hlas offline | [apple.com/legal/privacy](https://www.apple.com/legal/privacy/) |
| Google TTS (Android, záložné riešenie) | Prevod textu na reč zariadením, keď nie je nainštalovaný hlas offline | [policies.google.com/privacy](https://policies.google.com/privacy) |

Aplikácia nemá žiadny vzťah s reklamnými sieťami, poskytovateľmi analytiky ani sprostredkovateľmi údajov.

---

## 11. Medzinárodné prenosy údajov

Samotná aplikácia neprenáša osobné údaje medzinárodne. Keď však dobrovoľne sťahujete súbory modelov AI alebo TTS, tieto požiadavky sa odosielajú na servery spoločností Hugging Face a GitHub, ktoré sídlia v Spojených štátoch amerických.

Tieto stiahnutia neobsahujú osobné údaje nad rámec štandardných informácií v každej požiadavke HTTPS (IP adresa, hlavičky požiadaviek). Neprevádzajú sa žiadny obsah komunikácie, používateľské preferencie ani identifikačné informácie o žiadnej fyzickej osobe.

Ak sa uplatňuje GDPR, prenosy osobných údajov do Spojených štátov sú opodstatnené:
- Rámcovým dohovorom o ochrane osobných údajov EÚ–USA (ak je príjemca certifikovaný), alebo
- Štandardnými zmluvnými doložkami (SCC) prijatými Európskou komisiou, alebo
- Skutočnosťou, že v príslušných požiadavkách sa neprenášajú osobné údaje v zmysle GDPR, čím sa kapitola V GDPR stáva nevzťahujúcou na tieto prenosy.

V prípade spracúvania uskutočneného spoločnosťami Apple TTS a Google TTS (ak sa používajú ako záložné riešenie) odkazujeme na ich príslušné zásady ochrany osobných údajov a ich zverejnené prenosové mechanizmy.

---

## 12. Ochrana súkromia detí

Sono je navrhnutý tak, aby podporoval ľudí všetkých vekových kategórií, ktorí využívajú komunikáciu prostredníctvom obrázkových symbolov, vrátane detí.

Keďže aplikácia vzdialene nezbiera žiadne osobné údaje a funguje výlučne v zariadení, predstavuje pre všetkých používateľov vrátane detí minimálne riziko pre ochranu súkromia.

**EÚ/EHP — Vek digitálneho súhlasu (článok 8 GDPR):** V Európskej únii a Európskom hospodárskom priestore sa vek, v ktorom môže osoba súhlasiť so spracúvaním údajov súvisiacim s digitálnymi službami, líši v závislosti od členského štátu (13 až 16 rokov). Ak aplikáciu používa dieťa mladšie ako je príslušný vek digitálneho súhlasu, na akékoľvek spracúvanie údajov je potrebný súhlas osoby s rodičovskou zodpovednosťou. V prípade tejto aplikácie je jediným spracúvaním vyžadujúcim súhlas priradenie vlastných fotografií (pozri časť 4). Rodičia a opatrovníci sú vyzvaní, aby si tieto nastavenia preskúmali a nakonfigurovali.

Ak sa rozhodnete stiahnuť model AI alebo TTS, toto stiahnutie prebieha cez šifrované pripojenie HTTPS. Rodičia a opatrovníci, ktorí chcú zabrániť akémukoľvek internetovému prístupu aplikácie, tak môžu urobiť obmedzením prístupu na internet na úrovni zariadenia alebo smerovača — aplikácia bude naďalej plne fungovať s predtým stiahnutými modelmi.

---

## 13. Vaše práva podľa GDPR

Ak sa nachádzate v Európskom hospodárskom priestore, Spojenom kráľovstve alebo v inej jurisdikcii s rovnocennou legislatívou na ochranu údajov, máte nasledujúce práva týkajúce sa osobných údajov spracúvaných v súvislosti s touto aplikáciou. Keďže prakticky všetky údaje sú uložené lokálne vo vašom zariadení a vy ich priamo kontrolujete, väčšinu práv môžete kedykoľvek uplatniť priamo prostredníctvom aplikácie.

| Právo | Ako ho uplatniť |
|---|---|
| **Právo na prístup (čl. 15)** | Všetky uložené údaje sú vo vašom zariadení. Zobrazené meno a nastavenia môžete zobraziť priamo v Nastaveniach opatrovníka. Vlastné fotografie sú viditeľné na tabuli symbolov. |
| **Právo na opravu (čl. 16)** | Zmeňte akékoľvek uložené informácie priamo v Nastaveniach opatrovníka kedykoľvek. |
| **Právo na výmaz / „právo byť zabudnutý" (čl. 17)** | Odstráňte jednotlivé vlastné fotografie prostredníctvom ponuky pri dlhom stlačení symbolu. Všetky údaje aplikácie vymažte odinštalovaním aplikácie. |
| **Právo na obmedzenie spracúvania (čl. 18)** | Deaktivujte konkrétne funkcie (napr. vypnite prepínač AI, odstráňte vlastnú fotografiu) a obmedzíte tak príslušné spracúvanie. |
| **Právo na prenosnosť údajov (čl. 20)** | Údaje aplikácie sú uložené v štandardných formátoch (obyčajný text, JSON, bežné formáty obrázkov) v sandboxovanom adresári aplikácie. Na podporovaných platformách k nim môžete pristupovať prostredníctvom zálohovacích nástrojov zariadenia. |
| **Právo namietať (čl. 21)** | Spracúvaniu na základe oprávnených záujmov môžete kedykoľvek namietať kontaktovaním nás (pozri časť 18). Ak je spracúvanie založené na súhlase, pozrite právo odvolať súhlas nižšie. |
| **Právo odvolať súhlas (čl. 7(3))** | Ak je spracúvanie založené na súhlase (vlastné fotografie), môžete súhlas kedykoľvek odvolať odstránením fotografie. Odvolanie nemá vplyv na zákonnosť spracúvania pred odvolaním. |
| **Právo nebyť predmetom automatizovaného rozhodovania (čl. 22)** | Aplikácia nevykonáva automatizované rozhodovanie ani profilovanie, ktoré by malo právne alebo podobne závažné účinky na fyzické osoby. |

Ak chcete uplatniť práva, ktoré nemožno riešiť priamo v aplikácii, alebo chcete vyjadriť obavu týkajúcu sa našich postupov v oblasti ochrany údajov, kontaktujte nás pomocou údajov uvedených v časti 18.

---

## 14. Uchovávanie a vymazanie údajov

**Údaje relácie (história správ):** Automaticky vymazané pri každom zatvorení aplikácie. Nezapisujú sa na disk.

**Preferenčné údaje (meno, pohlavie, prepínač, výber hlasu):** Uchovávané v zariadení, kým opatrovník nastavenie manuálne nezmení alebo kým nie je aplikácia odinštalovaná.

**Vlastné fotografie:** Uchovávané v zariadení, kým nie sú jednotlivo odstránené prostredníctvom ponuky pri dlhom stlačení symbolu alebo kým nie je aplikácia odinštalovaná.

**Súbory modelov AI a TTS:** Uchovávané v zariadení, kým nie sú odstránené prostredníctvom Nastavení alebo kým nie je aplikácia odinštalovaná.

**Vymazanie všetkých údajov aplikácie:** Odinštalovanie aplikácie zo zariadenia odstráni všetky lokálne uložené súbory vrátane všetkých preferencií, vlastných fotografií a stiahnutých súborov modelov.

Žiadne z týchto informácií neuchovávame na vlastných serveroch, keďže nám nie sú nikdy prenášané.

---

## 15. Bezpečnosť údajov

Všetky údaje uložené aplikáciou sa nachádzajú v privátnom sandboxovanom kontajneri aplikácie vo vašom zariadení, ktorý je chránený vstavanými bezpečnostnými mechanizmami vášho operačného systému (šifrovanie súborového systému, izolácia procesov, sandboxovanie aplikácií). Aplikácia neimplementuje šifrovacie vrstvy nad rámec tých, ktoré poskytuje operačný systém.

Keďže žiadne osobné údaje sa neprevádzajú do našej infraštruktúry, na našej strane nie sú uložené žiadne serverové dáta, ktoré by mohli byť predmetom narušenia na našom konci. V nepravdepodobnom prípade, že sa dozvieme o bezpečnostnej zraniteľnosti aplikácie, ktorá sa týka osobných údajov, upozorníme dotknutých používateľov prostredníctvom aktualizácie aplikácie a v prípade, keď to vyžaduje zákon, oznámime to príslušnému dozornému orgánu do 72 hodín od toho, ako sme sa o tom dozvedeli (článok 33 GDPR).

---

## 16. Prístup k nastaveniam opatrovníka

Nastavenia (vrátane možnosti zmeniť meno, hlas a vlastné fotografie používateľa) sú prístupné prostredníctvom skrytého gesta — štyri ťuknutia do dvoch sekúnd na oblasť vety. Tento mechanizmus je určený ako jednoduchá bariéra proti náhodným zmenám, nie ako silný systém riadenia prístupu. Ak požadujete prísne riadenie prístupu, odporúčame použiť funkciu riadeného prístupu alebo správy času pred obrazovkou vášho zariadenia na obmedzenie navigácie v aplikácii.

---

## 17. Zmeny týchto zásad

Tieto zásady ochrany osobných údajov môžeme čas od času aktualizovať, aby odrážali zmeny v aplikácii alebo v platných právnych predpisoch. Keď tak urobíme, dátum „Poslednej aktualizácie" v hornej časti tohto dokumentu sa zmení. V prípade podstatných zmien vás o nich upozorníme prostredníctvom oznámenia v aplikácii alebo aktualizácie aplikácie.

Ďalšie používanie aplikácie po zverejnení zmeny predstavuje prijatie aktualizovaných zásad, pokiaľ ďalšie používanie nie je na základe práva, ktoré si vyžaduje nový súhlas, v takom prípade si tento súhlas výslovne vyžiadame.

---

## 18. Kontakt, zodpovedná osoba za ochranu údajov a dozorný orgán

**Kontakt pre otázky týkajúce sa ochrany údajov:**

> **Matan Ljubas**
> **[Adresa]**
> **lj.matan@gmail.com**

**Zodpovedná osoba za ochranu údajov (DPO):** Ak bola určená zodpovedná osoba za ochranu údajov, jej kontaktné údaje sú:

> **[Meno a kontaktné údaje DPO — alebo uveďte „DPO nebol vymenovaný", ak to nie je relevantné]**

**Právo podať sťažnosť:** Ak sa domnievate, že spracúvanie vašich osobných údajov porušuje GDPR alebo platné vnútroštátne právo na ochranu údajov, máte právo podať sťažnosť dozornému orgánu v členskom štáte EÚ svojho obvyklého pobytu, miesta výkonu práce alebo miesta údajného porušenia. Zoznam dozorných orgánov EÚ je dostupný na stránke [edpb.europa.eu/about-edpb/about-edpb/members_en](https://www.edpb.europa.eu/about-edpb/about-edpb/members_en). Máte tiež právo domáhať sa súdnej nápravy.

---

*Tieto zásady ochrany osobných údajov sa vzťahujú na aplikáciu Sono. Nevzťahujú sa na žiadne služby tretích strán, na ktoré sa v tomto dokumente odkazuje alebo ktoré sú tu prepojené, keďže tieto majú vlastné zásady ochrany osobných údajov a vlastnú zodpovednosť prevádzkovateľa.*
