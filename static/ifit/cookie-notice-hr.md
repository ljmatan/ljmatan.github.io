# iFit Obavijest o kolačićima

Zadnje ažurirano: 2026-08-31

Ovaj dokument je hrvatski nacrt za projekt. Prije objave zamijenite vrijednosti u uglatim zagradama, osobito kontakt podatke operatora i pohranu trećih strana specifičnu za implementaciju.

### 1. Što obuhvaća ova obavijest

Ova Obavijest o kolačićima objašnjava kako iFit koristi kolačiće i slične
tehnologije. U ovoj obavijesti "kolačići" uključuju kolačiće preglednika,
lokalnu pohranu, IndexedDB, Sembast pohranu u pregledniku i sličnu pohranu na
uređaju koju koristi aplikacija.

iFit je web aplikacija za rezervacije. Neka lokalna pohrana potrebna je za
održavanje prijave, pamćenje odabira privole i siguran rad aplikacije. Trenutna
implementacija iFita ne uključuje analitičke kolačiće, oglašivačke kolačiće ni
marketinske kolačiće.

Ako je iFit ugrađen u drugu web stranicu, ta stranica može koristiti vlastite
kolačiće. Tim kolačićima upravlja ta web stranica, a ne ova iFit Obavijest o
kolačićima.

### 2. Tko je odgovoran

Operator odgovoran za kolačiće i sličnu pohranu u ovoj iFit implementaciji je:

- Operator: `[puni pravni naziv operatora]`
- Kontakt: `[e-mail za privatnost ili podršku]`

### 3. Nužna pohrana

Nužna pohrana potrebna je za rad aplikacije, sigurnost ili pamćenje vaših
odabira privatnosti. Ne može se isključiti kroz iFit postavke kolačića.

| Naziv ili prefiks | Svrha | Uobičajeno trajanje |
| --- | --- | --- |
| `generic_shop_app_ifit-mandatory-cookieConsentMandatory` | Bilježi je li obavijest o nužnim kolačićima potvrđena | Dok se ne obrišu podaci preglednika ili resetira cache aplikacije |
| `generic_shop_app_ifit-mandatory-cookieConsentFunctionality` | Bilježi korisnikov odabir funkcionalnih kolačića | Dok se ne obrišu podaci preglednika ili resetira cache aplikacije |
| `generic_shop_app_ifit-mandatory-cookieConsentStatistics` | Bilježi korisnikov odabir statističkih kolačića, iako statistički kolačići trenutno nisu uključeni za iFit | Dok se ne obrišu podaci preglednika ili resetira cache aplikacije |
| `generic_shop_app_ifit-mandatory-cookieConsentMarketing` | Bilježi korisnikov odabir marketinskih kolačića, iako marketinski kolačići trenutno nisu uključeni za iFit | Dok se ne obrišu podaci preglednika ili resetira cache aplikacije |
| `generic_shop_app_ifit-mandatory-version` | Sprema verziju lokalnog cachea kako bi aplikacija mogla sigurno migrirati ili očistiti lokalnu pohranu | Dok se ne obrišu podaci preglednika ili resetira cache aplikacije |
| `generic_shop_app_ifit-mandatory-sessionToken` | Sprema bearer token prijavljenog korisnika kako bi sesija preživjela osvježavanje stranice | Do odjave, brisanja podataka preglednika ili resetiranja cachea aplikacije. Odgovarajuća sesija na poslužitelju predviđena je da istekne u roku od 7 dana od izrade ili osvježavanja |
| `generic_shop_app_ifit-mandatory-sessionUser` | Sprema ograničene podatke prijavljenog korisnika, kao što su korisnički id, ime, e-mail, telefon, uloga, krediti i datum izrade računa | Do odjave, brisanja podataka preglednika ili resetiranja cachea aplikacije |
| `generic_shop_app_ifit-mandatory-deviceId` | Ako ga generira zajednički aplikacijski okvir, identificira preglednik ili uređaj za sigurnost i rad usluge | Dok se ne obrišu podaci preglednika ili resetira cache aplikacije |
| `generic_shop_app_ifit-mandatory-translations` | Koristi se samo kada je uključen način uređivanja prijevoda, za spremanje prijevodnih vrijednosti | Dok se ne obrišu podaci preglednika ili resetira cache aplikacije |

Točna fizička pohrana može biti IndexedDB ili drugi mehanizam pohrane preglednika
koji odabere Flutter/web runtime i zajednički aplikacijski okvir.

### 4. Funkcionalna pohrana

Funkcionalna pohrana poboljšava praktičnost, ali nije strogo nužna. iFit
konfiguracija plugina dopušta funkcionalne kolačiće, ali trenutni iFit tokovi
rezervacija ne ovise o opcionalnim oznakama favorita, povijesti pretraživanja,
analitici ili marketinskoj pohrani.

Ovisno o zajedničkoj aplikacijskoj ljusci i postavkama implementacije,
opcionalna funkcionalna pohrana može uključivati postavke kao što je svjetlina
teme ili drugi lokalni odabiri sučelja. Ako je funkcionalna pohrana isključena,
osnovna usluga rezervacija trebala bi i dalje raditi, ali neke postavke možda se
neće pamtiti.

### 5. Statistička i marketinska pohrana

Statistički i marketinski kolačići isključeni su u trenutnoj implementaciji
iFita. iFit trenutno ne koristi oglašivačke kolačiće, kolačiće za praćenje preko
više stranica ni analitičke kolačiće za marketinsko profiliranje.

Ako se statistička ili marketinska pohrana doda kasnije, ne bi se smjela koristiti
bez potrebne privole i bez ažuriranja ove obavijesti s nazivom pružatelja,
svrhom i trajanjem.

### 6. Kolačići trećih strana i infrastrukture

Neke implementacije mogu koristiti infrastrukturne providere kao što su CDN,
reverse proxy, sigurnosna usluga, tunnel provider, hosting provider ili gateway
za identitet/pristup. Ti provideri mogu postaviti strogo nužne sigurnosne ili
routing kolačiće, primjerice radi zaštite stranice od zlouporabe ili održavanja
sesije s pristupnim gatewayom.

Operator treba prije objave ovdje navesti kolačiće trećih strana specifične za
implementaciju:

| Pružatelj | Kolačić/pohrana | Svrha | Trajanje |
| --- | --- | --- | --- |
| `[naziv pružatelja]` | `[naziv kolačića ili pohrane]` | `[svrha]` | `[trajanje]` |

### 7. Upravljanje odabirima

Opcionalnim odabirima kolačića možete upravljati putem iFit bannera ili panela
postavki gdje su dostupni. Nužna pohrana potrebna je za uslugu i ne može se
isključiti u aplikaciji.

Kolačiće i podatke web stranice možete obrisati ili blokirati i u postavkama
preglednika. Ako obrišete nužnu iFit pohranu, možda ćete biti odjavljeni i
ponovno zamoljeni da potvrdite odabire kolačića. Ako blokirate svu lokalnu
pohranu, neki dijelovi iFita možda neće ispravno raditi.

Odjava uklanja lokalni iFit sesijski token i lokalni cache prijavljenog korisnika
iz pohrane aplikacije na tom uređaju. Ne briše zapise o rezervacijama, dolascima
ili računu na poslužitelju.

### 8. Kontakt

Za pitanja o kolačićima ili lokalnoj pohrani obratite se na `[e-mail za
privatnost ili podršku]`.
