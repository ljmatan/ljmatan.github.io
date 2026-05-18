---
layout: doc
---

# Tietosuojakäytäntö — Sono AAC Communicator

**Viimeksi päivitetty: 23. helmikuuta 2026**

---

## 1. Johdanto ja rekisterinpitäjän henkilöllisyys

Sono on kuvasymboleita hyödyntävä kommunikointisovellus, joka on suunniteltu auttamaan ihmisiä ilmaisemaan itseään kuvien ja puhuttujen sanojen avulla.

**Rekisterinpitäjä:** Henkilötietojen käsittelystä tässä sovelluksessa vastaa:

> **Matan Ljubas**
> Yhteystiedot: **[sähköpostiosoite — täytetään ennen julkaisua]**

**EU:n edustaja (tarvittaessa):** Jos julkaisija on sijoittautunut Euroopan talousalueen (ETA) ulkopuolelle, yleisen tietosuoja-asetuksen (GDPR) 27 artiklan nojalla vaaditaan EU:n edustaja. Tarvittaessa EU:n edustaja on:

> **[EU:n edustajan nimi ja osoite — täytetään, jos julkaisija on ETA:n ulkopuolella]**

**Pääperiaate:** Sono on suunniteltu toimimaan kokonaan laitteellasi. Se ei kerää henkilötietoja etäpalvelimelle, ei luo käyttäjätilejä, ei seuraa sinua eikä välitä kommunikointitoimintaasi millekään palvelimelle.

---

## 2. Laitteellesi tallennetut tiedot

Sono tallentaa pienen määrän asetustietoja paikallisesti laitteellesi. Nämä tiedot eivät koskaan poistu laitteeltasi, ellei sinä itse varmuuskopioi laitettasi kolmannen osapuolen palvelun (kuten iCloud tai Google Drive) avulla, jolloin kyseisen palvelun oma tietosuojakäytäntö on voimassa.

| Tieto | Kuvaus | Tallennuspaikka |
|---|---|---|
| Näyttönimi | Nimi, jonka hoitaja asettaa käyttäjälle (esim. "Alex") | Laitteen tiedostojärjestelmä |
| Sukupuoliasetus | Visuaalinen asetus (neutraali / mies / nainen) kuvitusvariantteja varten | Laitteen tiedostojärjestelmä |
| Tekoälylauseiden viimeistely | Onko laitteen kielimalli käytössä | Laitteen tiedostojärjestelmä |
| Äänivalinta | Valittu tekstistä puheeksi -ääni | Laitteen tiedostojärjestelmä |
| Mukautetut symbolikuvat | Hoitajan kommunikointisymboleille määrittämät valokuvat | Laitteen tiedostojärjestelmä |
| Mukautettujen kuvien hakemisto | Paikallinen kartta, joka yhdistää symbolitunnisteet kuvatiedostopolkuihin | Laitteen tiedostojärjestelmä |

**Viestihistoria** (äskettäin lausutut virkkeet) säilytetään **vain muistissa** nykyisen sovellusistunnon ajan. Sitä ei kirjoiteta levylle, ja se häviää pysyvästi sovelluksen sulkemisen yhteydessä.

---

## 3. Tietojen käyttötarkoitus

Edellä lueteltuja tietoja käytetään yksinomaan sovelluksen toimintaan laitteellasi:

- **Näyttönimi** — näytetään tervehdyksenä aloitusnäytöllä.
- **Sukupuoliasetus** — valitsee sukupuolelle sopivat kuvitusvariantit.
- **Tekoälyasetus** — määrittää, parantaako laitteen kielimalli lausuttuja virkkeitä.
- **Äänivalinta** — ohjaa tekstistä puheeksi -moottoria.
- **Mukautetut kuvat** — näytetään symbolikorteilla oletuskuvitusten sijaan.

Mitään näistä tiedoista ei käytetä analytiikkaan, mainontaan, profilointiin tai muuhun tarkoitukseen kuin sovelluksen paikalliseen toimintaan laitteellasi.

---

## 4. Käsittelyn oikeusperuste (GDPR)

Silloin kun Euroopan parlamentin ja neuvoston asetus (EU) 2016/679 (yleinen tietosuoja-asetus) on sovellettavissa, jaksossa 2 kuvattujen tietojen käsittelyn GDPR:n 6 artiklan mukaiset oikeusperusteet ovat:

| Tieto | Oikeusperuste | Selitys |
|---|---|---|
| Näyttönimi, sukupuoliasetus, tekoälyasetus, äänivalinta | **Art. 6(1)(b) — Sopimuksen täyttäminen** | Nämä asetukset ovat välttämättömiä sovelluksen ydintoiminnallisuuden tarjoamiseksi käyttäjän/hoitajan määrittämällä tavalla. |
| Mukautetut symbolikuvat | **Art. 6(1)(a) — Suostumus** | Hoitaja osoittaa valokuvan symbolille nimenomaisesti. Suostumus voidaan peruuttaa milloin tahansa poistamalla kuva pitkän painalluksen valikosta. |

Käsittely ei perustu automaattiseen profilointiin, eikä käsittelypäätöksillä ole kenenkään yksilön kannalta oikeudellisia tai vastaavia merkittäviä vaikutuksia (ks. myös jakso 13, oikeus olla joutumatta automatisoidun päätöksenteon kohteeksi).

---

## 5. Laitteella toimiva tekoäly

Kun tekoälylauseiden viimeistelytoiminto on käytössä, sovellus käyttää laitteen suurta kielimallia (LLM) tekemään lausutuista virkkeistä luonnollisemman kuuloisia. Tämä käsittely tapahtuu **kokonaan laitteellasi**:

- Malli (Qwen2.5-0.5B-Instruct, noin 400 Mt) ladataan kerran julkisesta tietovarastosta (Hugging Face) ja tallennetaan paikallisesti.
- Kirjoittamiasi tai napauttamiasi virkkeitä, symboleja tai muita syötteitä ei lähetetä ulkoiselle palvelimelle tekoälykäsittelyä varten.
- Jos tekoälytoiminto on poistettu käytöstä tai mallia ei ole ladattu, sovellus käyttää varavaihtoehtona sisäänrakennettua sääntöpohjaista kielioppimoottoria.
- Tekoälytoiminto ei tuota profilointia, automatisoitua päätöksentekoa eikä päätelmiä mistään yksilöstä.

---

## 6. Tekstistä puheeksi

Sono tarjoaa kaksi tekstistä puheeksi -tilaa:

**Offline-äänet (suositeltava):** Sovellus voi ladata kielikohtaisia äänimalleja julkisesta tietovarastosta (Sherpa-ONNX / GitHub-julkaisut). Lataamisen jälkeen kaikki puhesynteesi tapahtuu kokonaan laitteellasi ilman ulkopuolelle välitettäviä tietoja.

**Laitteen järjestelmääänet (varavalinta):** Kun valitulle kielelle ei ole saatavilla offline-ääntä, sovellus käyttää laitteesi sisäänrakennettua tekstistä puheeksi -palvelua (Applen tai Googlen tarjoama laitteesta riippuen). Nämä järjestelmäpalvelut ovat Applen ja Googlen tietosuojakäytäntöjen alaisia, ja **ne saattavat välittää puhutun tekstin palvelimilleen** syntetisointia varten. Voit välttää tämän lataamalla offline-äänen kohdasta **Asetukset > Ääni**.

---

## 7. Valinnaiset internet-yhteydet

Sono ei vaadi internet-yhteyttä. Sovellus toimii täysin offline-tilassa asennuksen jälkeen.

Ainoa verkkoliikenne tapahtuu, kun valitset valinnaisten resurssien lataamisen:

- **Tekoälykielimalli** — ladataan Hugging Facesta (`huggingface.co`), kun napautat asetuksissa "Lataa malli". Koko noin 400 Mt.
- **Offline-äänimallit** — ladataan Sherpa-ONNX-julkaisuista GitHubissa (`github.com`), kun valitset ja lataat äänen asetuksista. Mallin koko vaihtelee kielen mukaan.

Nämä lataukset siirtävät vain tiedot, jotka sisältyvät mihin tahansa HTTPS-pyyntöön (IP-osoitteesi ja perusotsakkeet). Pyyntöihin ei sisälly henkilötietoja, viestisisältöä eikä käyttötietoja. Lataamisen jälkeen mallit toimivat täysin offline-tilassa.

---

## 8. Laitteen käyttöoikeudet

Sovellus pyytää seuraavia laitteen käyttöoikeuksia:

| Käyttöoikeus | Pyytämisen syy |
|---|---|
| **Kamera** | Valokuvan ottaminen ja sen liittäminen kommunikointisymboliin. Kuvat tallennetaan vain paikallisesti eikä niitä koskaan välitetä. |
| **Kuvagalleria** | Olemassa olevan valokuvan valitseminen ja sen liittäminen kommunikointisymboliin. Valittu kuva kopioidaan vain paikallisesti eikä sitä koskaan välitetä. |

Sovellus ei pyydä pääsyä sijaintiin, yhteystietoihin, mikrofoniin (tallennusta varten), Bluetoothiin, terveystietoihin eikä muihin arkaluonteisiin lupiin edellä mainittujen lisäksi.

---

## 9. Tiedot, joita emme kerää

Sono ei kerää, välitä eikä tallenna mitään seuraavista:

- Viestisisältöä (lausuttuja virkkeitä tai napautettuja symboleja)
- Käyttötottumuksia, istunnon kestoa tai käyttötiheyttä
- Laitetunnisteita, mainostunnisteita tai sormenjälkitietoja
- Kaatumisraportteja tai diagnostiikkalokeja etäpalvelimelle lähetettynä
- Nimiä, sähköpostiosoitteita tai muita henkilötunnisteita kuin hoitajan paikallisesti syöttämät
- Sijaintitietoja mistään lähteestä
- Biometrisiä tai terveyteen liittyviä tietoja

Sovelluksessa ei ole analytiikka-SDK:ita, mainontaverkostoja eikä kolmannen osapuolen seurantakirjastoja.

---

## 10. Kolmannen osapuolen palvelut

Ainoat sovellukseen liittyvät kolmannen osapuolen palvelut ovat valinnaiset mallinlatauslähteet ja laitteen alustatasoiset palvelut:

| Palvelu | Rooli | Tietosuojakäytäntö |
|---|---|---|
| Hugging Face (`huggingface.co`) | Isännöi valinnaista tekoälykielimallia | [huggingface.co/privacy](https://huggingface.co/privacy) |
| GitHub (`github.com`) | Isännöi valinnaisia offline-äänimallipaketteja | [docs.github.com/en/site-policy/privacy-policies](https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement) |
| Apple TTS (iOS, varavalinta) | Laitteen tekstistä puheeksi, kun offline-ääntä ei ole asennettu | [apple.com/legal/privacy](https://www.apple.com/legal/privacy/) |
| Google TTS (Android, varavalinta) | Laitteen tekstistä puheeksi, kun offline-ääntä ei ole asennettu | [policies.google.com/privacy](https://policies.google.com/privacy) |

Sovelluksella ei ole yhteyttä mainostajiin, analytiikantarjoajiin eikä datanvälittäjiin.

---

## 11. Kansainväliset tiedonsiirrot

Sovellus itse ei siirrä henkilötietoja kansainvälisesti. Kuitenkin kun vapaaehtoisesti lataat tekoäly- tai TTS-mallitiedostoja, pyynnöt lähetetään Hugging Facen ja GitHubin palvelimille, jotka sijaitsevat Yhdysvalloissa.

Nämä lataukset eivät sisällä henkilötietoja muutoin kuin minkä tahansa HTTPS-pyynnön tavanomaisina tietoina (IP-osoite, pyyntöotsakkeet). Kommunikointisisältöä, käyttäjäasetuksia eikä kenenkään henkilöä tunnistavia tietoja välitetä.

Silloin kun GDPR on sovellettavissa, henkilötietojen siirrot Yhdysvaltoihin perustuvat:
- EU–USA-tietosuojakehykseen (silloin kun vastaanottaja on sertifioitu), tai
- Euroopan komission hyväksymiin vakiosopimuslausekkeisiin (SCC), tai
- Siihen, että kyseisten pyyntöjen yhteydessä ei välitetä GDPR:n tarkoittamia henkilötietoja, jolloin GDPR:n V luku ei ole sovellettavissa kyseisiin siirtoihin.

Apple TTS:n ja Google TTS:n suorittaman käsittelyn osalta (silloin kun niitä käytetään varavaihtoehtona) viitaamme Applen ja Googlen tietosuojakäytäntöihin ja niiden julkaisemiin siirtomekanismeihin.

---

## 12. Lasten yksityisyys

Sono on suunniteltu tukemaan kaiken ikäisiä henkilöitä, joille kuvasymboleista on kommunikoinnissa hyötyä, mukaan lukien lapset.

Koska sovellus ei kerää henkilötietoja etäpalvelimelle ja toimii kokonaan laitteella, se aiheuttaa kaikkien käyttäjien, myös lasten, kannalta minimaalisen tietosuojariskin.

**EU/ETA — Digitaalinen suostumusikä (GDPR:n 8 artikla):** Euroopan unionissa ja Euroopan talousalueella ikä, jolla henkilö voi antaa suostumuksensa digitaalisiin palveluihin liittyvään tietojenkäsittelyyn, vaihtelee jäsenvaltiosta toiseen (13–16 vuotta). Kun sovellusta käyttää lapsi, joka on alle sovellettavan digitaalisen suostumusikärajan, vaaditaan vanhempainvastuun haltijan suostumus kaikkeen tietojenkäsittelyyn. Tässä sovelluksessa ainoa suostumusta edellyttävä käsittely on mukautettujen kuvien liittäminen (ks. jakso 4). Vanhempia ja huoltajia kannustetaan tarkastelemaan ja määrittämään nämä asetukset.

Jos valitset tekoäly- tai TTS-mallin lataamisen, kyseinen lataus tapahtuu salatun HTTPS-yhteyden kautta. Vanhemmat ja huoltajat, jotka haluavat estää sovelluksen kaiken internet-yhteyden, voivat tehdä sen rajoittamalla internet-yhteyttä laitteen tai reitittimen tasolla — sovellus toimii edelleen täysin aiemmin ladattujen mallien avulla.

---

## 13. Oikeutesi GDPR:n nojalla

Jos olet Euroopan talousalueella, Yhdistyneessä kuningaskunnassa tai muussa vastaavan tietosuojalainsäädännön alaisessa lainkäyttöalueessa, sinulla on seuraavat oikeudet tähän sovellukseen liittyvien henkilötietojen käsittelyn osalta. Koska käytännöllisesti katsoen kaikki tiedot tallennetaan paikallisesti laitteellesi ja hallitset niitä suoraan itse, useimmat oikeudet voidaan käyttää milloin tahansa suoraan sovelluksessa.

| Oikeus | Käyttämistapa |
|---|---|
| **Oikeus saada pääsy tietoihin (Art. 15)** | Kaikki tallennetut tiedot ovat laitteellasi. Voit tarkastella näyttönimeä ja asetuksia suoraan hoitajan asetuksissa. Mukautetut kuvat näkyvät symbolilaudalla. |
| **Oikeus tietojen oikaisemiseen (Art. 16)** | Muuta mitä tahansa tallennettua tietoa suoraan hoitajan asetuksissa milloin tahansa. |
| **Oikeus tietojen poistamiseen / "oikeus tulla unohdetuksi" (Art. 17)** | Poista yksittäisiä mukautettuja kuvia symbolin pitkän painalluksen valikosta. Poista kaikki sovelluksen tiedot poistamalla sovellus. |
| **Oikeus käsittelyn rajoittamiseen (Art. 18)** | Poista käytöstä tiettyjä toimintoja (esim. kytke tekoäly pois päältä tai poista mukautettu kuva) rajoittaaksesi niihin liittyvää käsittelyä. |
| **Oikeus tietojen siirrettävyyteen (Art. 20)** | Sovelluksen tiedot tallennetaan tavallisissa muodoissa (pelkkä teksti, JSON, yleiset kuvaformaatit) sovelluksen hiekkalaatikoidussa hakemistossa. Tuetuilla alustoilla pääset niihin käsiksi laitteen varmuuskopiointityökalujen avulla. |
| **Vastustamisoikeus (Art. 21)** | Voit milloin tahansa vastustaa oikeutettuihin etuihin perustuvaa käsittelyä ottamalla meihin yhteyttä (ks. jakso 18). Silloin kun käsittely perustuu suostumukseen, katso alla oleva oikeus peruuttaa suostumus. |
| **Oikeus peruuttaa suostumus (Art. 7(3))** | Silloin kun käsittely perustuu suostumukseen (mukautetut kuvat), voit peruuttaa suostumuksen milloin tahansa poistamalla kuvan. Peruuttaminen ei vaikuta ennen peruuttamista suoritetun käsittelyn lainmukaisuuteen. |
| **Oikeus olla joutumatta automatisoidun päätöksenteon kohteeksi (Art. 22)** | Sovellus ei suorita automatisoitua päätöksentekoa eikä profilointia, jolla olisi oikeudellisia tai vastaavia merkittäviä vaikutuksia yksilöihin. |

Oikeuksien käyttämiseksi, joita ei voida käsitellä suoraan sovelluksessa, tai tietojenkäsittelykäytäntöihin liittyvän huolen ilmaisemiseksi ota meihin yhteyttä jaksossa 18 annetuilla tiedoilla.

---

## 14. Tietojen säilyttäminen ja poistaminen

**Istuntotiedot (viestihistoria):** Poistetaan automaattisesti sovelluksen sulkemisen yhteydessä. Ei tallenneta levylle.

**Asetustiedot (nimi, sukupuoli, asetus, äänivalinta):** Säilytetään laitteella, kunnes hoitaja muuttaa asetusta manuaalisesti tai sovellus poistetaan.

**Mukautetut kuvat:** Säilytetään laitteella, kunnes ne poistetaan yksitellen symbolin pitkän painalluksen valikosta tai sovellus poistetaan.

**Tekoäly- ja TTS-mallitiedostot:** Säilytetään laitteella, kunnes ne poistetaan asetuksista tai sovellus poistetaan.

**Kaikkien sovelluksen tietojen poistaminen:** Sovelluksen poistaminen laitteeltasi poistaa kaikki paikallisesti tallennetut tiedostot, mukaan lukien kaikki asetukset, mukautetut kuvat ja ladatut mallitiedostot.

Emme säilytä mitään näistä tiedoista omilla palvelimillamme, koska niitä ei koskaan lähetetä meille.

---

## 15. Tietoturva

Kaikki sovelluksen tallentamat tiedot sijaitsevat sovelluksen yksityisessä hiekkalaatikoidussa säilössä laitteellasi, jota suojaavat käyttöjärjestelmäsi sisäänrakennetut turvallisuusmekanismit (tiedostojärjestelmän salaus, prosessi-eristys, sovelluksen hiekkalaatikointi). Sovellus ei toteuta salauskerroksia käyttöjärjestelmän tarjoamien lisäksi.

Koska henkilötietoja ei välitetä infrastruktuurillemme, meillä ei ole palvelinpuolen tietoja, jotka voisivat olla meidän päässämme tapahtuvan tietomurron kohteena. Siinä epätodennäköisessä tilanteessa, että tulemme tietoisiksi sovelluksen henkilötietoihin vaikuttavasta tietoturvahaavoittuvuudesta, ilmoitamme siitä asianomaisille käyttäjille sovelluspäivityksen kautta ja, siltä osin kuin laki niin vaatii, ilmoitamme asiasta toimivaltaiselle valvontaviranomaiselle 72 tunnin kuluessa siitä, kun olemme saaneet tiedon (GDPR:n 33 artikla).

---

## 16. Hoitajan asetukset

Asetuksiin (mukaan lukien mahdollisuus muuttaa käyttäjän nimeä, ääntä ja mukautettuja kuvia) pääsee piilotettua elettä käyttämällä — neljä napautusta kahden sekunnin sisällä virrealueella. Tämä mekanismi on tarkoitettu yksinkertaiseksi esteeksi tahattomia muutoksia vastaan, ei vahvaksi pääsynvalvontajärjestelmäksi. Jos tarvitset tiukkaa pääsynvalvontaa, suosittelemme käyttämään laitteesi ohjattua käyttöä tai näyttöajan rajoitustoimintoja sovelluksen sisäisen navigoinnin rajoittamiseksi.

---

## 17. Muutokset tähän käytäntöön

Saatamme päivittää tätä tietosuojakäytäntöä ajoittain, jos sovelluksessa tai sovellettavassa lainsäädännössä tapahtuu muutoksia. Muutosten yhteydessä tämän asiakirjan alussa oleva "Viimeksi päivitetty" -päivämäärä muuttuu. Olennaisten muutosten yhteydessä ilmoitamme niistä sovelluksen sisäisellä ilmoituksella tai sovelluspäivityksen kautta.

Sovelluksen jatkuva käyttö muutoksen julkaisemisen jälkeen merkitsee päivitetyn käytännön hyväksymistä, ellei jatkuva käyttö perustu oikeuteen, joka edellyttää uuden suostumuksen hankkimista — tällöin pyydämme kyseisen suostumuksen nimenomaisesti.

---

## 18. Yhteystiedot, tietosuojavastaava ja valvontaviranomainen

**Yhteystiedot tietosuoja-asioissa:**

> **Matan Ljubas**
> **[Osoite]**
> **[Sähköpostiosoite — täytetään ennen julkaisua]**

**Tietosuojavastaava (DPO):** Mikäli tietosuojavastaava on nimetty, heidän yhteystietonsa ovat:

> **[Tietosuojavastaavan nimi ja yhteystiedot — tai mainitse "Tietosuojavastaavaa ei ole nimetty", jos ei sovelleta]**

**Oikeus tehdä valitus:** Jos katsot, että henkilötietojesi käsittely loukkaa GDPR:ää tai sovellettavaa kansallista tietosuojalainsäädäntöä, sinulla on oikeus tehdä valitus sen EU:n jäsenvaltion valvontaviranomaiselle, jossa sinulla on vakinainen asuinpaikka, työskentelypaikka tai jossa väitetty loukkaus on tapahtunut. Luettelo EU:n valvontaviranomaisista on saatavilla osoitteessa [edpb.europa.eu/about-edpb/about-edpb/members_en](https://www.edpb.europa.eu/about-edpb/about-edpb/members_en). Sinulla on myös oikeus hakea tuomioistuinsuojaa.

---

*Tämä tietosuojakäytäntö koskee Sono-sovellusta. Se ei koske mitään kolmannen osapuolen palveluja, joihin tässä viitataan tai joihin tässä on linkki, sillä niillä on omat tietosuojakäytäntönsä ja rekisterinpitäjän vastuunsa.*
