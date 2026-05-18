---
layout: doc
---

# Politika kolačića — Sono AAC Communicator

**Zadnje ažuriranje: 23. veljače 2026**

---

## 1. Što su kolačići?

Kolačići su male tekstualne datoteke koje web stranica ili web-bazirana usluga postavlja na uređaj radi pohrane informacija između sesija. Radi se o tehnologiji web preglednika i nisu inherentno dio nativnih mobilnih aplikacija.

---

## 2. Koristi li ova Aplikacija kolačiće?

**Uglavnom ne.** Sono je nativna mobilna aplikacija. Tijekom normalnog korištenja — pregledavanja simbola, sastavljanja rečenica, reprodukcije glasovnog izlaza ili korištenja AI značajke za rečenice — ne koriste se kolačići, web sesije ni pohrana preglednika.

Aplikacija uključuje ugrađenu WebView komponentu koja se koristi **isključivo** za prikaz pravnih dokumenata (ove Politike kolačića, Politike privatnosti i Uvjeta korištenja) kada ih odaberete pregledati s početnog zaslona Aplikacije. Ovisno o načinu na koji su ti dokumenti hostirani, ta WebView komponenta može ili ne mora prenositi kolačiće na vaš uređaj (pogledajte Odjeljak 4).

Kolačići za praćenje, analitički kolačići niti oglasni kolačići ne koriste se ni u jednom trenutku tijekom normalnog rada Aplikacije.

---

## 3. Lokalna pohrana koju koristi Aplikacija

Iako Aplikacija ne koristi kolačiće tijekom normalnog rada, ona pohranjuje mali broj vrijednosti postavki na vašem uređaju putem internog servisa predmemorije Aplikacije. One su funkcionalno neophodne za rad Aplikacije i ne prate vas kroz aplikacije niti uređaje.

Sljedeći podaci pohranjuju se lokalno na vašem uređaju:

| Stavka pohrane | Svrha | Format | Trajno na disku |
|---|---|---|---|
| `gsaCache.db` | Pohrana postavki Aplikacije — sadrži prikazano ime, spol, AI prebacivač, odabir TTS glasa i indeks prilagođenih fotografija simbola | Sembast baza podataka ključ-vrijednost | Da |
| Datoteke prilagođenih fotografija | Osobne fotografije koje skrbnik dodjeljuje simbolima | Datoteke slika | Da |
| Povijest poruka | Nedavno izgovorene rečenice (samo trenutna sesija) | Samo u memoriji | **Ne** |
| AI jezični model | Datoteka LLM-a na uređaju (ako je preuzeta) | GGUF binarni | Da |
| Modeli TTS glasova | Datoteke za izvanmrežnu sintezu govora (ako su preuzete) | Binarni model | Da |

Sve ove stavke pohranjuju se u privatnom izoliranom direktoriju Aplikacije na vašem uređaju. Nisu dostupne drugim aplikacijama i Aplikacija ih ne prenosi na nijedan poslužitelj.

Budući da se postavke Aplikacije pohranjuju kao funkcionalni kolačići u bazi podataka `gsaCache.db`, podliježu mehanizmu pristanka na kolačiće Aplikacije. Ako se pristanak na funkcionalne kolačiće opozove, Aplikacija će obrisati bazu podataka postavki pri sljedećem potvrđivanju pristanka.

---

## 4. Ugrađeni WebView za prikaz pravnih dokumenata

Aplikacija uključuje ugrađenu WebView komponentu (pokretanu putem `webview_flutter`) koja se koristi **isključivo** za prikaz pravnih dokumenata — ove Politike kolačića, Politike privatnosti i Uvjeta korištenja. Ovaj WebView otvara se samo kada namjerno tapnete vezu na pravni dokument na početnom zaslonu Aplikacije.

**Ako su pravni dokumenti hostirani na udaljenom URL-u:** Poslužitelj koji isporučuje te dokumente može postaviti kolačiće ili koristiti druge mehanizme praćenja unutar WebView-a, na isti način kao i bilo koja web stranica posjećena u pregledniku. U tom slučaju primjenjuju se prakse privatnosti i kolačića tog usluge hostiranja — a ne ova politika.

**Ako se pravni dokumenti poslužuju iz lokalnih resursa Aplikacije:** Ne upućuje se nikakav vanjski mrežni zahtjev i kolačići se ne postavljaju niti primaju.

Nijedna druga WebView komponenta, ugrađeni preglednik niti web-sadržaj trećih strana ne učitava se ni u jednom drugom dijelu normalnog rada Aplikacije.

---

## 5. Usluge trećih strana i njihova vlastita pohrana

Kada dobrovoljno preuzimate opcijske datoteke AI ili TTS modela, Aplikacija upućuje HTTPS zahtjeve sljedećim poslužiteljima trećih strana. Ti poslužitelji mogu postaviti vlastite kolačiće ili koristiti vlastite mehanizme praćenja ako ih naknadno posjetite u pregledniku, ali ne postavljaju kolačiće na vaš uređaj putem Aplikacije.

| Usluga | Što se događa | Njihova politika kolačića/privatnosti |
|---|---|---|
| Hugging Face (`huggingface.co`) | Samo preuzimanje datoteke — kolačići se ne postavljaju putem Aplikacije | [huggingface.co/privacy](https://huggingface.co/privacy) |
| GitHub (`github.com`) | Samo preuzimanje datoteke — kolačići se ne postavljaju putem Aplikacije | [docs.github.com/en/site-policy/privacy-policies](https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement) |
| Apple TTS (rezerva, iOS) | Rukuje OS-om — vidi Appleovu politiku privatnosti | [apple.com/legal/privacy](https://www.apple.com/legal/privacy/) |
| Google TTS (rezerva, Android) | Rukuje OS-om — vidi Googleovu politiku privatnosti | [policies.google.com/privacy](https://policies.google.com/privacy) |

---

## 6. Uklanjanje sve pohrane Aplikacije

Možete ukloniti sve podatke koje je Aplikacija pohranila u bilo koje doba **deinstalacijom Aplikacije** s vašeg uređaja. Time ćete trajno obrisati sve datoteke postavki, prilagođene fotografije i preuzete datoteke modela. Postupak se neznatno razlikuje po platformi:

**iOS:** Idite na Postavke > Općenito > Pohrana iPhonea (ili iPada) > Sono > Obriši aplikaciju.

**Android:** Idite na Postavke > Aplikacije > Sono > Deinstaliraj. Alternativno, koristite Postavke > Aplikacije > Sono > Pohrana > Obriši podatke za uklanjanje svih pohranjenih podataka bez deinstalacije Aplikacije.

Također možete ukloniti pojedinačne prilagođene fotografije u bilo koje doba dugim pritiskom na karticu simbola u Aplikaciji i odabirom opcije za uklanjanje prilagođene fotografije.

---

## 7. Izmjene ove politike

Ovu Politiku kolačića možemo povremeno ažurirati. Datum „Zadnje ažuriranje" na vrhu ovog dokumenta odražava najnoviju reviziju. Budući da ova Aplikacija ne koristi kolačiće i njezine prakse lokalne pohrane mijenjaju se samo sa značajnim ažuriranjima Aplikacije, izmjene ove politike očekuju se rijetko.

---

## 8. Kontakt

Ako imate pitanja o ovoj Politici kolačića ili praksama lokalne pohrane Aplikacije, kontaktirajte nas na:

> **[Naziv nakladnika]**
> **lj.matan@gmail.com**

---

*Ova Politika kolačića primjenjuje se samo na nativnu mobilnu aplikaciju Sono. Ne primjenjuje se na bilo koju web stranicu ili web-baziranu uslugu koja može biti povezana s nakladnikom.*
