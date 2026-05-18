---
layout: doc
---

# Politika privatnosti — Sono AAC Communicator

**Zadnje ažuriranje: 23. veljače 2026**

---

## 1. Uvod i identitet voditelja obrade podataka

Sono je aplikacija za komunikaciju pomoću slikovnih simbola, osmišljena za pomoć osobama u izražavanju putem slika i govora.

**Voditelj obrade podataka:** Subjekt odgovoran za obradu osobnih podataka u vezi s ovom aplikacijom je:

> **Matan Ljubas**
> Kontakt: **lj.matan@gmail.com**

**EU predstavnik (ako je primjenjivo):** Ako je nakladnik osnovan izvan Europskog gospodarskog prostora (EGP), EU predstavnik je obavezan u skladu s člankom 27. Opće uredbe o zaštiti podataka (GDPR). Gdje je to obavezno, EU predstavnik je:

> **[Naziv i adresa EU predstavnika — popuniti ako je nakladnik izvan EGP-a]**

**Temeljno načelo:** Sono je osmišljen da radi u potpunosti na vašem uređaju. Ne prikuplja osobne podatke na daljinu, ne stvara korisničke račune, ne prati vas i ne prenosi vašu komunikacijsku aktivnost na nijedan poslužitelj.

---

## 2. Podaci pohranjeni na vašem uređaju

Sono lokalno pohranjuje malu količinu podataka o postavkama na vašem uređaju. Ti podaci nikada ne napuštaju uređaj, osim ako ne napravite sigurnosnu kopiju uređaja putem usluge treće strane (kao što je iCloud ili Google Drive), a to se uređuje politikom privatnosti te usluge.

| Podatak | Što je | Gdje se pohranjuje |
|---|---|---|
| Prikazano ime | Ime koje skrbnik postavlja za korisnika (npr. „Alex") | Datotečni sustav uređaja |
| Preferencija spola | Vizualna preferencija (neutralno / muško / žensko) za varijante ilustracija | Datotečni sustav uređaja |
| Preklopnik AI poliranja rečenica | Je li uključen jezični model na uređaju | Datotečni sustav uređaja |
| Odabir glasa | Odabrani glas za pretvaranje teksta u govor | Datotečni sustav uređaja |
| Prilagođene fotografije simbola | Fotografije koje skrbnik dodjeljuje komunikacijskim simbolima | Datotečni sustav uređaja |
| Indeks prilagođenih fotografija | Lokalna mapa koja povezuje ID-ove simbola s putanjama datoteka fotografija | Datotečni sustav uređaja |

**Povijest poruka** (nedavno izgovorene rečenice) čuva se **samo u memoriji** za trajanje trenutne sesije aplikacije. Ne zapisuje se na disk i trajno se gubi zatvaranjem aplikacije.

---

## 3. Kako koristimo ove informacije

Navedene informacije koriste se isključivo za rad aplikacije na vašem uređaju:

- **Prikazano ime** — prikazuje se kao pozdrav na početnom zaslonu.
- **Preferencija spola** — odabir varijanti ilustracija prikladnih za spol.
- **Preklopnik AI** — određuje poboljšava li jezični model na uređaju izgovorene rečenice.
- **Odabir glasa** — pokreće mehanizam za pretvaranje teksta u govor.
- **Prilagođene fotografije** — prikazuju se na karticama simbola umjesto zadanih ilustracija.

Nijedna od ovih informacija ne koristi se za analitiku, oglašavanje, profiliranje niti za ikakvu drugu svrhu osim lokalnog rada aplikacije na vašem uređaju.

---

## 4. Pravna osnova za obradu (GDPR)

Gdje se primjenjuje Opća uredba o zaštiti podataka (EU) 2016/679, pravne osnove prema članku 6. GDPR-a za obradu podataka opisanih u Odjeljku 2 su:

| Podatak | Pravna osnova | Objašnjenje |
|---|---|---|
| Prikazano ime, preferencija spola, AI preklopnik, odabir glasa | **Čl. 6(1)(b) — Izvršenje ugovora** | Ove su postavke neophodne za pružanje temeljnih funkcionalnosti aplikacije kako ih je postavio korisnik/skrbnik. |
| Prilagođene fotografije simbola | **Čl. 6(1)(a) — Pristanak** | Skrbnik izričito dodjeljuje fotografiju simbolu. Pristanak se može povući u bilo koje doba uklanjanjem fotografije putem izbornika duljeg pritiska. |

Nijedna obrada ne temelji se na automatiziranom profiliranju, a nijedna odluka o obradi nema pravne ili slično značajne učinke na bilo koju osobu (vidi i Odjeljak 13, Pravo na nepodlijeganje automatiziranom donošenju odluka).

---

## 5. Umjetna inteligencija na uređaju

Kada je omogućena značajka AI poliranja rečenica, aplikacija koristi veliki jezični model (LLM) na uređaju kako bi izgovorene rečenice bile prirodnije. Ova obrada odvija se **u potpunosti na vašem uređaju**:

- Model (Qwen2.5-0.5B-Instruct, otprilike 400 MB) jednom se preuzima iz javnog repozitorija (Hugging Face) i lokalno pohranjuje.
- Nijedna rečenica, simbol niti ikakav drugi unos koji upisujete ili tapkate nikada se ne šalje na vanjski poslužitelj za AI obradu.
- Ako je AI značajka onemogućena ili model nije preuzet, aplikacija koristi ugrađeni mehanizam gramatike temeljene na pravilima.
- AI značajka ne proizvodi profiliranje, automatizirano donošenje odluka niti zaključke o bilo kojoj osobi.

---

## 6. Pretvaranje teksta u govor

Sono nudi dva načina pretvaranja teksta u govor:

**Izvanmrežni glasovi (preferirano):** Aplikacija može preuzeti jezično specifične modele glasova iz javnog repozitorija (Sherpa-ONNX / GitHub releases). Nakon preuzimanja, sinteza govora odvija se u potpunosti na vašem uređaju bez prijenosa podataka prema vanjskim servisima.

**Sistemski glasovi uređaja (rezerva):** Kada izvanmrežni glas nije dostupan za odabrani jezik, aplikacija koristi ugrađenu uslugu pretvaranja teksta u govor na vašem uređaju (pruža Apple ili Google, ovisno o vašem uređaju). Ti sistemski servisi uređuju se politikama privatnosti tvrtki Apple i Google, te **mogu prenositi izgovoreni tekst na njihove poslužitelje** radi sinteze. Ovo možete izbjeći preuzimanjem izvanmrežnog glasa u **Postavke > Glas**.

---

## 7. Opcijske internetske veze

Sono nema obaveznu internetsku vezu. Aplikacija radi u potpunosti izvanmrežno nakon instalacije.

Jedina mrežna aktivnost koja se događa je kada odaberete preuzimanje opcijskih resursa:

- **AI jezični model** — preuzima se s Hugging Face (`huggingface.co`) kada tapnete „Preuzmi model" u Postavkama. Otprilike 400 MB.
- **Izvanmrežni modeli glasova** — preuzimaju se iz Sherpa-ONNX releases na GitHubu (`github.com`) kada odaberete i preuzmete glas u Postavkama. Veličina modela ovisi o jeziku.

Ova preuzimanja prenose samo podatke inherentne svakom HTTPS zahtjevu (vaša IP adresa i osnovni zaglavlja zahtjeva). Nijedna osobna informacija, komunikacijski sadržaj niti podaci o korištenju nisu uključeni u ove zahtjeve. Nakon preuzimanja, modeli rade u potpunosti izvanmrežno.

---

## 8. Dozvole uređaja

Aplikacija traži sljedeće dozvole uređaja:

| Dozvola | Zašto se traži |
|---|---|
| **Kamera** | Za fotografiranje i dodjelu fotografije komunikacijskom simbolu. Fotografije se pohranjuju samo lokalno i nikada se ne prenose. |
| **Knjižnica fotografija** | Za odabir postojeće fotografije i dodjelu komunikacijskom simbolu. Odabrana fotografija kopira se samo lokalno i nikada se ne prenosi. |

Aplikacija ne traži pristup lokaciji, kontaktima, mikrofonu (za snimanje), Bluetoothu, zdravstvenim podacima niti ikakvim drugim osjetljivim dozvolama osim navedenih.

---

## 9. Informacije koje ne prikupljamo

Sono ne prikuplja, ne prenosi niti ne pohranjuje ništa od sljedećeg:

- Komunikacijski sadržaj (izgovorene rečenice ili tapnuti simboli)
- Obrasce korištenja, trajanje sesije ili učestalost korištenja
- Identifikatore uređaja, ID-ove za oglašavanje niti podatke za otisak prsta
- Izvješća o rušenju ili dijagnostičke zapisnike poslane na udaljeni poslužitelj
- Imena, e-mail adrese niti bilo kakve osobne identifikatore osim onih koje lokalno unese skrbnik
- Podatke o lokaciji bilo koje vrste
- Biometrijske podatke ili podatke vezane uz zdravlje

U aplikaciju nisu integrirani analitički SDK-ovi, oglasne mreže niti biblioteke za praćenje trećih strana.

---

## 10. Usluge trećih strana

Jedine usluge trećih strana koje su uključene u aplikaciju su opcijski izvori preuzimanja modela i platformske usluge na razini uređaja:

| Usluga | Uloga | Politika privatnosti |
|---|---|---|
| Hugging Face (`huggingface.co`) | Domaćin opcijske datoteke AI jezičnog modela | [huggingface.co/privacy](https://huggingface.co/privacy) |
| GitHub (`github.com`) | Domaćin opcijskih arhiva izvanmrežnih modela glasova | [docs.github.com/en/site-policy/privacy-policies](https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement) |
| Apple TTS (iOS, rezerva) | Pretvaranje teksta u govor na uređaju kada nije instaliran izvanmrežni glas | [apple.com/legal/privacy](https://www.apple.com/legal/privacy/) |
| Google TTS (Android, rezerva) | Pretvaranje teksta u govor na uređaju kada nije instaliran izvanmrežni glas | [policies.google.com/privacy](https://policies.google.com/privacy) |

Aplikacija nema nikakav odnos s oglasnim mrežama, pružateljima analitike niti posrednicima podataka.

---

## 11. Međunarodni prijenosi podataka

Sama aplikacija ne prenosi osobne podatke međunarodno. Međutim, kada dobrovoljno preuzimate datoteke AI ili TTS modela, ti se zahtjevi šalju na poslužitelje tvrtki Hugging Face i GitHub, koji se nalaze u Sjedinjenim Državama.

Ova preuzimanja ne sadrže osobne podatke osim standardnih informacija u svakom HTTPS zahtjevu (IP adresa, zaglavlja zahtjeva). Nikakav komunikacijski sadržaj, korisničke postavke niti identifikacijske informacije o bilo kojoj osobi ne prenose se.

Gdje se primjenjuje GDPR, prijenosi osobnih podataka u Sjedinjene Države oslanjaju se na:
- Okvir zaštite podataka EU–SAD (gdje je primatelj certificiran), ili
- Standardne ugovorne klauzule (SCC) koje je usvojila Europska komisija, ili
- Činjenicu da se u relevantnim zahtjevima ne prenose osobni podaci u smislu GDPR-a, što čini Poglavlje V GDPR-a neprimjenjivim na te prijenose.

Za obradu koju provode Apple TTS i Google TTS (gdje se koriste kao rezerva), upućujemo na politike privatnosti Applea i Googlea i njihove objavljene mehanizme prijenosa.

---

## 12. Privatnost djece

Sono je osmišljen za podršku osobama svih dobi kojima koristi komunikacija putem slikovnih simbola, uključujući djecu.

Budući da aplikacija ne prikuplja osobne podatke na daljinu i radi u potpunosti na uređaju, predstavlja minimalni rizik za privatnost svih korisnika, uključujući djecu.

**EU/EGP — Dob digitalne suglasnosti (GDPR članak 8):** U Europskoj uniji i Europskom gospodarskom prostoru, dob u kojoj osoba može dati pristanak za obradu podataka vezanu uz digitalne usluge razlikuje se po državama članicama (između 13 i 16 godina). Kada aplikaciju koristi dijete mlađe od primjenjive dobi digitalne suglasnosti, za svaku obradu podataka potreban je pristanak nositelja roditeljske odgovornosti. Za ovu aplikaciju, jedina obrada koja zahtijeva pristanak je dodjela prilagođenih fotografija (vidi Odjeljak 4). Roditelji i skrbnici pozivaju se da pregledaju i konfiguriraju ove postavke.

Ako odaberete preuzimanje AI ili TTS modela, ta preuzimanja odvijaju se putem šifrirane HTTPS veze. Roditelji i skrbnici koji žele spriječiti bilo kakav pristup internetu aplikacije to mogu učiniti ograničavanjem pristupa internetu na razini uređaja ili usmjerivača — aplikacija će i dalje u potpunosti funkcionirati pomoću prethodno preuzetih modela.

---

## 13. Vaša prava prema GDPR-u

Ako se nalazite u Europskom gospodarskom prostoru, Ujedinjenom Kraljevstvu ili drugoj jurisdikciji s istovjetnim zakonodavstvom o zaštiti podataka, imate sljedeća prava u pogledu osobnih podataka koji se obrađuju u vezi s ovom aplikacijom. Budući da su gotovo svi podaci lokalno pohranjeni na vašem uređaju i vi ih izravno kontrolirate, većina prava može se ostvariti u bilo koje doba putem same aplikacije.

| Pravo | Kako ga ostvariti |
|---|---|
| **Pravo na pristup (čl. 15)** | Svi pohranjeni podaci nalaze se na vašem uređaju. Prikazano ime i postavke možete pregledati izravno u Skrbničkim postavkama. Prilagođene fotografije vidljive su na ploči simbola. |
| **Pravo na ispravak (čl. 16)** | Sve pohranjene informacije promijenite izravno u Skrbničkim postavkama u bilo koje doba. |
| **Pravo na brisanje / „pravo na zaborav" (čl. 17)** | Obrišite pojedinačne prilagođene fotografije putem izbornika duljeg pritiska na simbol. Obrišite sve podatke aplikacije deinstalacijom aplikacije. |
| **Pravo na ograničenje obrade (čl. 18)** | Onemogućite određene značajke (npr. isključite AI preklopnik, uklonite prilagođenu fotografiju) kako biste ograničili povezanu obradu. |
| **Pravo na prenosivost podataka (čl. 20)** | Podaci aplikacije pohranjuju se u standardnim formatima (obični tekst, JSON, uobičajeni formati slika) u izoliranom direktoriju aplikacije. Na podržanim platformama možete im pristupiti putem alata za sigurnosno kopiranje uređaja. |
| **Pravo na prigovor (čl. 21)** | Možete prigovoriti obradi temeljene na legitimnim interesima u bilo koje doba kontaktiranjem nas (vidi Odjeljak 18). Gdje se obrada temelji na pristanku, pogledajte pravo na povlačenje pristanka u nastavku. |
| **Pravo na povlačenje pristanka (čl. 7(3))** | Gdje se obrada temelji na pristanku (prilagođene fotografije), pristanak možete povući u bilo koje doba uklanjanjem fotografije. Povlačenje ne utječe na zakonitost obrade prije povlačenja. |
| **Pravo na nepodlijeganje automatiziranom donošenju odluka (čl. 22)** | Aplikacija ne provodi automatizirano donošenje odluka niti profiliranje koje proizvodi pravne ili slično značajne učinke na osobe. |

Za ostvarivanje prava koja se ne mogu riješiti izravno unutar aplikacije, ili za postavljanje zabrinutosti glede naše prakse podataka, kontaktirajte nas putem podataka u Odjeljku 18.

---

## 14. Čuvanje i brisanje podataka

**Podaci sesije (povijest poruka):** Automatski se brišu svaki put kada se aplikacija zatvori. Ne pohranjuju se na disk.

**Podaci o postavkama (ime, spol, preklopnik, odabir glasa):** Čuvaju se na uređaju dok skrbnik ručno ne promijeni postavku ili dok se aplikacija ne deinstalira.

**Prilagođene fotografije:** Čuvaju se na uređaju dok se pojedinačno ne uklone putem izbornika duljeg pritiska simbola ili dok se aplikacija ne deinstalira.

**Datoteke AI i TTS modela:** Čuvaju se na uređaju dok se ne obrišu putem Postavki ili dok se aplikacija ne deinstalira.

**Za brisanje svih podataka aplikacije:** Deinstalacijom aplikacije s vašeg uređaja uklanjaju se sve lokalno pohranjene datoteke, uključujući sve postavke, prilagođene fotografije i preuzete datoteke modela.

Mi ne čuvamo nijednu od ovih informacija na našim vlastitim poslužiteljima, jer nam nijedna nikada nije poslana.

---

## 15. Sigurnost podataka

Svi podaci koje aplikacija pohranjuje nalaze se u privatnom izoliranom spremniku aplikacije na vašem uređaju, koji je zaštićen ugrađenim sigurnosnim mehanizmima vašeg operacijskog sustava (enkripcija datotečnog sustava, izolacija procesa, izolacija aplikacije). Aplikacija ne implementira slojeve enkripcije izvan onih koje pruža operacijski sustav.

Budući da se nikakvi osobni podaci ne prenose na našu infrastrukturu, ne postoje podaci na strani poslužitelja koje mi čuvamo, a koji bi mogli biti predmetom povrede na našem kraju. U malo vjerojatnom slučaju da saznamo za sigurnosnu ranjivost u aplikaciji koja utječe na osobne podatke, obavijestit ćemo pogođene korisnike putem ažuriranja aplikacije i, gdje to zakon zahtijeva, obavijestiti nadležno nadzorno tijelo u roku od 72 sata od saznanja (GDPR članak 33).

---

## 16. Pristup skrbničkim postavkama

Postavkama (uključujući mogućnost promjene korisnikovog imena, glasa i prilagođenih fotografija) može se pristupiti putem skrivene geste — četiri tapkanja unutar dvije sekunde na području rečenice. Ovaj mehanizam namijenjen je kao jednostavna prepreka slučajnim promjenama, a ne kao snažan sustav kontrole pristupa. Ako zahtijevate strogu kontrolu pristupa, preporučujemo korištenje značajki vođenog pristupa ili vremena zaslona na vašem uređaju za ograničavanje navigacije unutar aplikacije.

---

## 17. Izmjene ove politike

Ovu politiku privatnosti možemo s vremena na vrijeme ažurirati kako bi odražavala promjene u aplikaciji ili u primjenjivom pravu. Kada to učinimo, datum „Zadnje ažuriranje" na vrhu ovog dokumenta će se promijeniti. Gdje su promjene materijalne, obavijestit ćemo vas putem obavijesti unutar aplikacije ili ažuriranja aplikacije.

Nastavak korištenja aplikacije nakon objave promjene predstavlja prihvaćanje ažurirane politike, osim ako se vaš nastavak korištenja temelji na pravu koje zahtijeva novi pristanak, u kojem će slučaju taj pristanak biti izričito zatražen.

---

## 18. Kontakt, Službenik za zaštitu podataka i nadzorno tijelo

**Kontakt za upite o zaštiti podataka:**

> **[Naziv nakladnika]**
> **[Adresa]**
> **lj.matan@gmail.com**

**Službenik za zaštitu podataka (DPO):** Ako je imenovan Službenik za zaštitu podataka, njegovi/njezini kontaktni podaci su:

> **[Ime i kontaktni podaci DPO-a — ili navesti „DPO nije imenovan" ako nije primjenjivo]**

**Pravo na podnošenje pritužbe:** Ako smatrate da obrada vaših osobnih podataka krši GDPR ili primjenjivo nacionalno pravo o zaštiti podataka, imate pravo podnijeti pritužbu nadzornom tijelu u državi članici EU-a vašeg uobičajenog boravišta, mjesta rada ili navodnog kršenja. Popis EU nadzornih tijela dostupan je na [edpb.europa.eu/about-edpb/about-edpb/members_en](https://www.edpb.europa.eu/about-edpb/about-edpb/members_en). Zadržavate i pravo na sudsku zaštitu.

---

*Ova politika privatnosti primjenjuje se na aplikaciju Sono. Ne primjenjuje se na usluge trećih strana koje su ovdje povezane ili navedene, a koje imaju vlastite politike privatnosti i vlastite odgovornosti voditelja obrade podataka.*
