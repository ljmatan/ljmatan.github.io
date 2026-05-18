---
layout: doc
---

# Zásady ochrany osobních údajů — Sono AAC Communicator

**Poslední aktualizace: 23. února 2026**

---

## 1. Úvod a totožnost správce osobních údajů

Sono je aplikace pro komunikaci pomocí obrázkových symbolů, navržená k tomu, aby lidem pomáhala vyjadřovat se prostřednictvím obrázků a mluvených slov.

**Správce osobních údajů:** Subjekt odpovědný za zpracování osobních údajů v souvislosti s touto aplikací je:

> **Matan Ljubas**
> Kontakt: **lj.matan@gmail.com**

**Zástupce v EU (je-li to relevantní):** Pokud je vydavatel usazen mimo Evropský hospodářský prostor (EHP), je podle článku 27 Obecného nařízení o ochraně osobních údajů (GDPR) vyžadován zástupce v EU. Kde je to vyžadováno, zástupce v EU je:

> **[Název a adresa zástupce v EU — doplnit, pokud je vydavatel mimo EHP]**

**Základní zásada:** Sono je navržen tak, aby fungoval výhradně na vašem zařízení. Neshromažďuje osobní údaje na dálku, nevytváří uživatelské účty, nesleduje vás a nepřenáší vaši komunikační aktivitu na žádný server.

---

## 2. Informace uložené ve vašem zařízení

Sono ukládá malé množství dat o preferencích lokálně ve vašem zařízení. Tato data nikdy neopouštějí zařízení, pokud si výslovně nezazálohujete zařízení prostřednictvím služby třetí strany (například iCloud nebo Google Drive), na kterou se vztahují vlastní zásady ochrany osobních údajů dané služby.

| Údaj | Co je | Kde je uložen |
|---|---|---|
| Zobrazované jméno | Jméno, které opatrovník nastaví pro uživatele (např. „Alex") | Souborový systém zařízení |
| Preference pohlaví | Vizuální preference (neutrální / mužské / ženské) pro varianty ilustrací | Souborový systém zařízení |
| Přepínač vylepšování vět pomocí AI | Zda je povolen jazykový model na zařízení | Souborový systém zařízení |
| Výběr hlasu | Zvolený hlas pro převod textu na řeč | Souborový systém zařízení |
| Vlastní fotografie symbolů | Fotografie přiřazené opatrovníkem ke komunikačním symbolům | Souborový systém zařízení |
| Index vlastních fotografií | Lokální mapa propojující ID symbolů s cestami k souborům fotografií | Souborový systém zařízení |

**Historie zpráv** (nedávno vyslovené věty) je uchovávána **pouze v paměti** po dobu aktuální relace aplikace. Nezapisuje se na disk a po zavření aplikace je trvale ztracena.

---

## 3. Jak tyto informace používáme

Výše uvedené informace jsou používány výhradně k provozu aplikace na vašem zařízení:

- **Zobrazované jméno** — zobrazuje se jako pozdrav na domovské obrazovce.
- **Preference pohlaví** — volí varianty ilustrací odpovídající pohlaví.
- **Přepínač AI** — určuje, zda jazykový model na zařízení vylepšuje vyslovené věty.
- **Výběr hlasu** — řídí engine pro převod textu na řeč.
- **Vlastní fotografie** — zobrazují se na kartičkách symbolů místo výchozích ilustrací.

Žádná z těchto informací není používána pro analytiku, reklamu, profilování ani pro jakýkoli jiný účel než pro lokální provoz aplikace na vašem zařízení.

---

## 4. Právní základ pro zpracování (GDPR)

Kde se uplatňuje Obecné nařízení o ochraně osobních údajů (EU) 2016/679, jsou právní základy podle článku 6 GDPR pro zpracování údajů popsaných v oddíle 2:

| Údaj | Právní základ | Vysvětlení |
|---|---|---|
| Zobrazované jméno, preference pohlaví, přepínač AI, výběr hlasu | **Čl. 6 odst. 1 písm. b) — Plnění smlouvy** | Tyto preference jsou nezbytné k poskytování základní funkcionality aplikace podle nastavení uživatele/opatrovníka. |
| Vlastní fotografie symbolů | **Čl. 6 odst. 1 písm. a) — Souhlas** | Opatrovník výslovně přiřadí fotografii k symbolu. Souhlas lze kdykoli odvolat odstraněním fotografie prostřednictvím nabídky dlouhého stisku. |

Žádné zpracování není založeno na automatizovaném profilování a žádná rozhodnutí o zpracování nemají právní ani podobně závažné účinky na žádnou osobu (viz také oddíl 13, Právo nebýt předmětem automatizovaného rozhodování).

---

## 5. Umělá inteligence na zařízení

Pokud je povolena funkce vylepšování vět pomocí AI, aplikace používá velký jazykový model (LLM) na zařízení, aby vyslovené věty zněly přirozeněji. Toto zpracování probíhá **výhradně na vašem zařízení**:

- Model (Qwen2.5-0.5B-Instruct, přibližně 400 MB) je jednou stažen z veřejného repozitáře (Hugging Face) a uložen lokálně.
- Žádné věty, symboly ani žádné jiné vstupní údaje, které zadáváte nebo klepáte, nejsou nikdy odesílány na externí server ke zpracování AI.
- Pokud je funkce AI zakázána nebo model nebyl stažen, aplikace se vrátí k vestavěnému gramatickému engine založenému na pravidlech.
- Funkce AI neprodukuje profilování, automatizované rozhodování ani závěry o žádné osobě.

---

## 6. Převod textu na řeč

Sono nabízí dva režimy převodu textu na řeč:

**Offline hlasy (preferované):** Aplikace může stahovat jazykově specifické hlasové modely z veřejného repozitáře (Sherpa-ONNX / GitHub releases). Po stažení probíhá veškerá syntéza řeči výhradně na vašem zařízení bez přenosu dat do externích služeb.

**Systémové hlasy zařízení (záložní):** Pokud pro zvolený jazyk není k dispozici offline hlas, aplikace používá vestavěnou službu převodu textu na řeč vašeho zařízení (poskytovanou společností Apple nebo Google v závislosti na vašem zařízení). Tyto systémové služby se řídí zásadami ochrany osobních údajů společností Apple a Google a **mohou přenášet mluvený text na jejich servery** za účelem jeho syntézy. Tomu lze předejít stažením offline hlasu v **Nastavení > Hlas**.

---

## 7. Volitelná internetová připojení

Sono nevyžaduje povinné internetové připojení. Aplikace funguje plně offline po instalaci.

Jediná síťová aktivita, ke které dochází, nastane, když se rozhodnete stáhnout volitelné zdroje:

- **AI jazykový model** — stažen z Hugging Face (`huggingface.co`), když klepnete na „Stáhnout model" v Nastavení. Přibližně 400 MB.
- **Offline hlasové modely** — staženy z Sherpa-ONNX releases na GitHubu (`github.com`), když vyberete a stáhnete hlas v Nastavení. Velikost modelu se liší podle jazyka.

Tato stažení přenášejí pouze data inherentní jakémukoli požadavku HTTPS (vaše IP adresa a základní záhlaví požadavku). Do těchto požadavků nejsou zahrnuty žádné osobní informace, komunikační obsah ani data o používání. Po stažení modely fungují výhradně offline.

---

## 8. Oprávnění zařízení

Aplikace žádá o následující oprávnění zařízení:

| Oprávnění | Proč je žádáno |
|---|---|
| **Fotoaparát** | Pro pořízení fotografie a přiřazení ke komunikačnímu symbolu. Fotografie jsou uloženy pouze lokálně a nikdy nejsou přenášeny. |
| **Knihovna fotografií** | Pro výběr existující fotografie a přiřazení ke komunikačnímu symbolu. Vybraná fotografie je zkopírována pouze lokálně a nikdy není přenášena. |

Aplikace nepožaduje přístup k poloze, kontaktům, mikrofonu (pro nahrávání), Bluetooth, zdravotním datům ani k žádným jiným citlivým oprávněním kromě výše uvedených.

---

## 9. Informace, které neshromažďujeme

Sono neshromažďuje, nepřenáší ani neukládá nic z následujícího:

- Komunikační obsah (vyslovené věty nebo klepnuté symboly)
- Vzorce používání, délku relace nebo četnost používání
- Identifikátory zařízení, reklamní ID nebo data pro snímání otisků
- Zprávy o chybách nebo diagnostické protokoly odeslané na vzdálený server
- Jména, e-mailové adresy ani žádné osobní identifikátory kromě těch, které lokálně zadal opatrovník
- Lokalizační data jakéhokoli druhu
- Biometrická data nebo data týkající se zdraví

Do aplikace nejsou integrovány žádné analytické SDK, žádné reklamní sítě ani žádné sledovací knihovny třetích stran.

---

## 10. Služby třetích stran

Jedinou službou třetích stran zapojených do aplikace jsou volitelné zdroje stahování modelů a platformní služby na úrovni zařízení:

| Služba | Role | Zásady ochrany osobních údajů |
|---|---|---|
| Hugging Face (`huggingface.co`) | Hostuje volitelný soubor AI jazykového modelu | [huggingface.co/privacy](https://huggingface.co/privacy) |
| GitHub (`github.com`) | Hostuje volitelné archivy offline hlasových modelů | [docs.github.com/en/site-policy/privacy-policies](https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement) |
| Apple TTS (iOS, záložní) | Převod textu na řeč na zařízení, pokud není nainstalován offline hlas | [apple.com/legal/privacy](https://www.apple.com/legal/privacy/) |
| Google TTS (Android, záložní) | Převod textu na řeč na zařízení, pokud není nainstalován offline hlas | [policies.google.com/privacy](https://policies.google.com/privacy) |

Aplikace nemá žádný vztah s reklamními sítěmi, poskytovateli analytiky ani datovými zprostředkovateli.

---

## 11. Mezinárodní předávání údajů

Samotná aplikace nepřenáší osobní údaje mezinárodně. Když však dobrovolně stahujete soubory AI nebo TTS modelů, jsou tyto požadavky odesílány na servery provozované společnostmi Hugging Face a GitHub, které sídlí ve Spojených státech.

Tato stažení neobsahují osobní údaje nad rámec standardních informací obsažených v jakémkoli požadavku HTTPS (IP adresa, záhlaví požadavku). Nepřenáší se žádný komunikační obsah, uživatelské preference ani identifikační informace o žádné osobě.

Kde se uplatňuje GDPR, předávání osobních údajů do Spojených států se opírá o:
- Rámec ochrany osobních údajů EU–USA (kde je příjemce certifikován), nebo
- Standardní smluvní doložky (SCC) přijaté Evropskou komisí, nebo
- Skutečnost, že v příslušných požadavcích nejsou přenášeny žádné osobní údaje ve smyslu GDPR, což činí kapitolu V GDPR na tato předávání nepoužitelnou.

Pokud jde o zpracování prováděné Apple TTS a Google TTS (kde jsou používány jako záložní), odkazujeme na zásady ochrany osobních údajů společností Apple a Google a jejich zveřejněné mechanismy předávání.

---

## 12. Ochrana soukromí dětí

Sono je navržen pro podporu lidí všech věků, kteří profitují z komunikace pomocí obrázkových symbolů, včetně dětí.

Protože aplikace neshromažďuje osobní údaje na dálku a funguje výhradně na zařízení, představuje minimální riziko pro soukromí všech uživatelů, včetně dětí.

**EU/EHP — Věk digitálního souhlasu (GDPR článek 8):** V Evropské unii a Evropském hospodářském prostoru se věk, ve kterém může osoba souhlasit se zpracováním dat v souvislosti s digitálními službami, liší podle členského státu (mezi 13 a 16 lety). Pokud aplikaci používá dítě mladší platného věku digitálního souhlasu, je pro jakékoli zpracování dat vyžadován souhlas nositele rodičovské odpovědnosti. Pro tuto aplikaci je jediným zpracováním vyžadujícím souhlas přiřazení vlastních fotografií (viz oddíl 4). Rodiče a opatrovníci jsou vyzýváni k přezkoumání a konfiguraci těchto nastavení.

Pokud se rozhodnete stáhnout AI nebo TTS model, tato stažení probíhají přes šifrované připojení HTTPS. Rodiče a opatrovníci, kteří chtějí zabránit jakémukoli přístupu aplikace k internetu, tak mohou učinit omezením přístupu k internetu na úrovni zařízení nebo routeru — aplikace bude nadále plně fungovat s dříve staženými modely.

---

## 13. Vaše práva podle GDPR

Pokud se nacházíte v Evropském hospodářském prostoru, Spojeném království nebo jiné jurisdikci s rovnocennou legislativou v oblasti ochrany dat, máte v souvislosti s touto aplikací zpracovávanými osobními údaji následující práva. Protože prakticky všechna data jsou uložena lokálně na vašem zařízení a vy je přímo kontrolujete, většinu práv můžete kdykoli uplatnit přímo v samotné aplikaci.

| Právo | Jak ho uplatnit |
|---|---|
| **Právo na přístup (čl. 15)** | Veškerá uložená data jsou na vašem zařízení. Zobrazované jméno a nastavení si můžete prohlédnout přímo v Nastavení opatrovníka. Vlastní fotografie jsou viditelné na tabuli symbolů. |
| **Právo na opravu (čl. 16)** | Kteroukoli uloženou informaci změňte přímo v Nastavení opatrovníka kdykoli. |
| **Právo na výmaz / „právo být zapomenut" (čl. 17)** | Odstraňte jednotlivé vlastní fotografie prostřednictvím nabídky dlouhého stisku symbolu. Odstraňte veškerá data aplikace odinstalováním aplikace. |
| **Právo na omezení zpracování (čl. 18)** | Zakažte konkrétní funkce (např. vypněte přepínač AI, odstraňte vlastní fotografii), abyste omezili příslušné zpracování. |
| **Právo na přenositelnost dat (čl. 20)** | Data aplikace jsou uložena ve standardních formátech (prostý text, JSON, běžné formáty obrázků) v izolovaném adresáři aplikace. Na podporovaných platformách k nim můžete přistupovat prostřednictvím zálohovacích nástrojů zařízení. |
| **Právo vznést námitku (čl. 21)** | Kdykoli můžete vznést námitku proti zpracování na základě oprávněných zájmů kontaktováním nás (viz oddíl 18). Kde je zpracování založeno na souhlasu, viz níže právo na odvolání souhlasu. |
| **Právo na odvolání souhlasu (čl. 7 odst. 3)** | Kde je zpracování založeno na souhlasu (vlastní fotografie), souhlas můžete kdykoli odvolat odstraněním fotografie. Odvolání nemá vliv na zákonnost zpracování před odvoláním. |
| **Právo nebýt předmětem automatizovaného rozhodování (čl. 22)** | Aplikace neprovádí automatizované rozhodování ani profilování, které by mělo právní nebo podobně závažné účinky na osoby. |

Pro uplatnění práv, která nelze vyřešit přímo v aplikaci, nebo pro vyjádření znepokojení ohledně našich postupů v oblasti dat, nás kontaktujte pomocí kontaktních údajů v oddíle 18.

---

## 14. Uchovávání a výmaz dat

**Data relace (historie zpráv):** Automaticky vymazána pokaždé, když se aplikace zavře. Nezapisují se na disk.

**Data o preferencích (jméno, pohlaví, přepínač, výběr hlasu):** Uchovávaná na zařízení, dokud opatrovník ručně nezmění nastavení nebo dokud není aplikace odinstalována.

**Vlastní fotografie:** Uchovávaná na zařízení, dokud nejsou jednotlivě odstraněny prostřednictvím nabídky dlouhého stisku symbolu nebo dokud není aplikace odinstalována.

**Soubory AI a TTS modelů:** Uchovávaná na zařízení, dokud nejsou odstraněny v Nastavení nebo dokud není aplikace odinstalována.

**Pro výmaz veškerých dat aplikace:** Odinstalováním aplikace z vašeho zařízení se odstraní veškeré lokálně uložené soubory, včetně všech preferencí, vlastních fotografií a stažených souborů modelů.

Na našich vlastních serverech neuchováváme žádné tyto informace, protože nám žádné z nich nejsou nikdy odesílány.

---

## 15. Zabezpečení dat

Veškerá data uložená aplikací se nacházejí v privátním izolovaném kontejneru aplikace na vašem zařízení, který je chráněn vestavěnými bezpečnostními mechanismy vašeho operačního systému (šifrování souborového systému, izolace procesů, sandboxing aplikace). Aplikace neimplementuje šifrovací vrstvy nad rámec toho, co poskytuje operační systém.

Protože žádné osobní údaje nejsou přenášeny do naší infrastruktury, neexistují na naší straně žádná data na serveru, která by mohla být předmětem úniku. V nepravděpodobném případě, že se dozvíme o bezpečnostní zranitelnosti v aplikaci, která ovlivňuje osobní údaje, budeme dotčené uživatele informovat prostřednictvím aktualizace aplikace a tam, kde to vyžaduje zákon, upozorníme příslušný dozorový úřad do 72 hodin od zjištění (GDPR článek 33).

---

## 16. Přístup k nastavení opatrovníka

Nastavení (včetně možnosti změny jména uživatele, hlasu a vlastních fotografií) jsou přístupná prostřednictvím skrytého gesta — čtyři klepnutí během dvou sekund v oblasti věty. Tento mechanismus je zamýšlen jako jednoduchá bariéra proti náhodným změnám, nikoli jako silný systém kontroly přístupu. Pokud požadujete přísnou kontrolu přístupu, doporučujeme používat funkce řízeného přístupu nebo času u obrazovky na vašem zařízení k omezení navigace v aplikaci.

---

## 17. Změny těchto zásad

Tyto zásady ochrany osobních údajů můžeme čas od času aktualizovat, aby odrážely změny v aplikaci nebo v platném právu. Když tak učiníme, změní se datum „Poslední aktualizace" v horní části tohoto dokumentu. Kde jsou změny podstatné, upozorníme vás prostřednictvím oznámení v aplikaci nebo aktualizace aplikace.

Pokračující používání aplikace po zveřejnění změny představuje přijetí aktualizovaných zásad, pokud vaše pokračující používání není na základě práva, které vyžaduje nový souhlas, v takovém případě si tento souhlas výslovně vyžádáme.

---

## 18. Kontakt, pověřenec pro ochranu osobních údajů a dozorový úřad

**Kontakt pro dotazy týkající se ochrany osobních údajů:**

> **Matan Ljubas**
> **[Adresa]**
> **lj.matan@gmail.com**

**Pověřenec pro ochranu osobních údajů (DPO):** Pokud byl jmenován pověřenec pro ochranu osobních údajů, jeho kontaktní údaje jsou:

> **[Jméno a kontaktní údaje DPO — nebo uvést „DPO nebyl jmenován", pokud není relevantní]**

**Právo podat stížnost:** Pokud se domníváte, že zpracování vašich osobních údajů porušuje GDPR nebo platné národní právo na ochranu dat, máte právo podat stížnost u dozorového úřadu v členském státě EU vašeho obvyklého bydliště, místa výkonu práce nebo místa údajného porušení. Seznam dozorových úřadů EU je k dispozici na [edpb.europa.eu/about-edpb/about-edpb/members_en](https://www.edpb.europa.eu/about-edpb/about-edpb/members_en). Zachováváte si také právo na soudní ochranu.

---

*Tyto zásady ochrany osobních údajů se vztahují na aplikaci Sono. Nevztahují se na žádné služby třetích stran, na které je zde odkazováno nebo které jsou zde uvedeny, a které mají vlastní zásady ochrany osobních údajů a vlastní odpovědnosti správce osobních údajů.*
