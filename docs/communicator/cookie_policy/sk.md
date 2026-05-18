---
layout: doc
---

# Zásady používania cookies — Sono AAC Communicator

**Posledná aktualizácia: 23. februára 2026**

---

## 1. Čo sú cookies?

Cookies sú malé textové súbory, ktoré webová stránka alebo webová služba umiestni na zariadenie za účelom ukladania informácií medzi reláciami. Ide o technológiu webového prehliadača a prirodzene nie sú súčasťou natívnych mobilných aplikácií.

---

## 2. Používa táto aplikácia cookies?

**Väčšinou nie.** Sono je natívna mobilná aplikácia. Pri bežnom používaní — prezeraní symbolov, zostavovaní viet, prehrávaní hlasového výstupu alebo používaní funkcie viet s pomocou AI — sa nepoužívajú žiadne cookies, webové relácie ani úložisko prehliadača.

Aplikácia obsahuje vstavaný komponent WebView, ktorý sa používa **výlučne** na zobrazovanie právnych dokumentov (tieto Zásady používania cookies, Zásady ochrany osobných údajov a Obchodné podmienky), keď sa ich rozhodnete zobraziť z uvítacej obrazovky aplikácie. V závislosti od toho, kde sú tieto dokumenty umiestnené, môže alebo nemusí tento WebView prenášať cookies do vášho zariadenia (pozri Sekciu 4).

Pri bežnej prevádzke aplikácie sa v žiadnom okamihu nepoužívajú žiadne sledovacie cookies, analytické cookies ani reklamné cookies.

---

## 3. Lokálne úložisko používané aplikáciou

Hoci aplikácia pri bežnej prevádzke nepoužíva cookies, ukladá malý počet preferenčných hodnôt vo vašom zariadení prostredníctvom internej služby vyrovnávacej pamäte aplikácie. Tieto sú funkčne nevyhnutné pre prevádzku aplikácie a nesledia vás naprieč aplikáciami ani zariadeniami.

V zariadení sú lokálne uložené nasledujúce údaje:

| Položka úložiska | Účel | Formát | Zapísané na disk |
|---|---|---|---|
| `gsaCache.db` | Úložisko preferenčných nastavení aplikácie — uchováva zobrazené meno, pohlavie, prepínač AI, výber hlasu TTS a vlastný index fotografií symbolov | Databáza kľúč-hodnota Sembast | Áno |
| Vlastné fotografické súbory | Osobné fotografie priradené symbolom opatrovníkom | Obrazové súbory | Áno |
| História správ | Nedávno vypovedané vety (len aktuálna relácia) | Iba v pamäti | **Nie** |
| Jazykový model AI | Súbor LLM v zariadení (ak bol stiahnutý) | GGUF binárny súbor | Áno |
| Hlasové modely TTS | Offline súbory syntézy reči (ak boli stiahnuté) | Binárny súbor modelu | Áno |

Všetky tieto položky sú uložené v privátnom sandboxovanom adresári aplikácie vo vašom zariadení. Nie sú prístupné iným aplikáciám a aplikácia ich nepreváza na žiadny server.

Keďže preferencie aplikácie sú uložené ako funkčné cookies v databáze `gsaCache.db`, podliehajú mechanizmu súhlasu s cookies v aplikácii. Ak je súhlas s funkčnými cookies odvolaný, aplikácia vymaže databázu preferencií pri ďalšom potvrdení súhlasu.

---

## 4. Vstavaný WebView na zobrazovanie právnych dokumentov

Aplikácia obsahuje vstavaný komponent WebView (využívajúci `webview_flutter`), ktorý sa používa **výlučne** na zobrazovanie právnych dokumentov — týchto Zásad používania cookies, Zásad ochrany osobných údajov a Obchodných podmienok. Tento WebView sa otvorí len vtedy, keď úmyselne ťuknete na odkaz právneho dokumentu na uvítacej obrazovke aplikácie.

**Ak sú právne dokumenty umiestnené na vzdialenom URL:** Server, ktorý tieto dokumenty poskytuje, môže nastaviť cookies alebo používať iné sledovacie mechanizmy v rámci WebView, rovnako ako akákoľvek webová stránka navštívená v prehliadači. V takom prípade sa uplatňujú zásady ochrany súkromia a cookies danej hostingovej služby — nie tieto zásady.

**Ak sú právne dokumenty poskytované z lokálnych prostriedkov aplikácie:** Nerealizuje sa žiadna externá sieťová požiadavka a žiadne cookies sa nenastavujú ani neprijímajú.

Počas žiadnej inej časti bežnej prevádzky aplikácie sa nenačítava žiadny iný komponent WebView, vstavaný prehliadač ani webový obsah tretích strán.

---

## 5. Služby tretích strán a ich vlastné úložisko

Keď dobrovoľne sťahujete voliteľné súbory modelov AI alebo TTS, aplikácia odosiela požiadavky HTTPS na nasledujúce servery tretích strán. Tieto servery môžu nastaviť vlastné cookies alebo používať vlastné sledovacie mechanizmy, ak ich neskôr navštívite v prehliadači, ale prostredníctvom aplikácie nenastavujú cookies vo vašom zariadení.

| Služba | Čo sa deje | Ich cookies/zásady ochrany osobných údajov |
|---|---|---|
| Hugging Face (`huggingface.co`) | Iba stiahnutie súboru — žiadne cookies prostredníctvom aplikácie | [huggingface.co/privacy](https://huggingface.co/privacy) |
| GitHub (`github.com`) | Iba stiahnutie súboru — žiadne cookies prostredníctvom aplikácie | [docs.github.com/en/site-policy/privacy-policies](https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement) |
| Apple TTS (záložné riešenie, iOS) | Spravuje OS — pozri zásady ochrany osobných údajov Apple | [apple.com/legal/privacy](https://www.apple.com/legal/privacy/) |
| Google TTS (záložné riešenie, Android) | Spravuje OS — pozri zásady ochrany osobných údajov Google | [policies.google.com/privacy](https://policies.google.com/privacy) |

---

## 6. Odstránenie celého úložiska aplikácie

Všetky údaje uložené aplikáciou môžete kedykoľvek odstrániť **odinštalovaním aplikácie** z vášho zariadenia. Tým sa natrvalo vymažú všetky preferenčné súbory, vlastné fotografie a stiahnuté súbory modelov. Postup sa mierne líši podľa platformy:

**iOS:** Prejdite na Nastavenia > Všeobecné > Úložisko iPhone (alebo iPad) > Sono > Odstrániť aplikáciu.

**Android:** Prejdite na Nastavenia > Aplikácie > Sono > Odinštalovať. Prípadne použite Nastavenia > Aplikácie > Sono > Úložisko > Vymazať údaje na odstránenie všetkých uložených údajov bez odinštalovania aplikácie.

Jednotlivé vlastné fotografie môžete kedykoľvek odstrániť dlhým stlačením karty symbolu v aplikácii a výberom možnosti odstránenia vlastnej fotografie.

---

## 7. Zmeny týchto zásad

Tieto Zásady používania cookies môžeme čas od času aktualizovať. Dátum „Poslednej aktualizácie" v hornej časti tohto dokumentu odráža posledný dátum revízie. Keďže táto aplikácia nepoužíva cookies a jej praktiky lokálneho úložiska sa menia len pri významných aktualizáciách aplikácie, zmeny týchto zásad sa očakávajú len zriedkavo.

---

## 8. Kontakt

Ak máte akékoľvek otázky týkajúce sa týchto Zásad používania cookies alebo praktík lokálneho úložiska aplikácie, kontaktujte nás na:

> **Matan Ljubas**
> **lj.matan@gmail.com**

---

*Tieto Zásady používania cookies sa vzťahujú výlučne na natívnu mobilnú aplikáciu Sono. Nevzťahujú sa na žiadnu webovú stránku ani webovú službu, ktorá môže byť spojená s vydavateľom.*
