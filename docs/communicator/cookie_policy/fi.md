# Evästekäytäntö — Sono AAC Communicator

**Viimeksi päivitetty: 23. helmikuuta 2026**

---

## 1. Mitä evästeet ovat?

Evästeet ovat pieniä tekstitiedostoja, jotka verkkosivusto tai verkkopalvelu sijoittaa laitteelle tallentaakseen tietoja istuntojen välillä. Ne ovat selainteknologia eivätkä ole luonnostaan osa natiiveja mobiilisovelluksia.

---

## 2. Käyttääkö tämä sovellus evästeitä?

**Pääosin ei.** Sono on natiivi mobiilisovellus. Normaalin käytön aikana — symboleja selattaessa, lauseita rakennettaessa, äänituloste toistettaessa tai tekoälylause-ominaisuutta käytettäessä — evästeitä, verkkoistuntoja tai selaintallennustilaa ei käytetä.

Sovellus sisältää upotetun WebView-komponentin, jota käytetään **ainoastaan** juridisten asiakirjojen (tämän evästekäytännön, tietosuojakäytännön ja käyttöehtojen) näyttämiseen, kun valitset niiden katselemisen sovelluksen tervetuloruudulta. Riippuen siitä, miten nämä asiakirjat on isännöity, kyseinen WebView saattaa tai ei saata välittää evästeitä laitteellesi (ks. Osio 4).

Normaalin sovelluksen käytön aikana ei käytetä seurantaevästeitä, analytiikkaevästeitä eikä mainosevästeitä.

---

## 3. Sovelluksen käyttämä paikallinen tallennus

Vaikka sovellus ei käytä evästeitä normaalin toiminnan aikana, se tallentaa pienen määrän asetusarvoja laitteellesi sovelluksen sisäisen välimuistipalvelun avulla. Nämä ovat toiminnallisesti välttämättömiä sovelluksen toiminnalle eivätkä seuraa sinua sovellusten tai laitteiden välillä.

Seuraavat tiedot tallennetaan paikallisesti laitteellesi:

| Tallennuskohde | Tarkoitus | Muoto | Tallennetaan levylle |
|---|---|---|---|
| `gsaCache.db` | Sovelluksen asetusten tallennuspaikka — sisältää näyttönimen, sukupuolen, tekoälykytkimen, TTS-äänen valinnan ja mukautetun symbolikuvaindeksin | Sembast avain-arvo-tietokanta | Kyllä |
| Mukautetut kuvatiedostot | Hoitajan symboleille liittämät henkilökohtaiset valokuvat | Kuvatiedostot | Kyllä |
| Viestihistoria | Äskettäin lausutut virkkeet (vain nykyinen istunto) | Vain muistissa | **Ei** |
| Tekoälykielimalli | Laitteen LLM-tiedosto (jos ladattu) | GGUF-binääri | Kyllä |
| TTS-äänimallit | Offline-äänisynteesitiedostot (jos ladattu) | Mallibinääri | Kyllä |

Kaikki nämä kohteet tallennetaan sovelluksen yksityiseen hiekkalaatikoiduun hakemistoon laitteellasi. Muut sovellukset eivät pääse niihin käsiksi, eikä sovellus välitä niitä millekään palvelimelle.

Koska sovelluksen asetukset tallennetaan toiminnallisina evästeinä `gsaCache.db`-tietokantaan, ne ovat sovelluksen evästehyväksyntämekanismin alaisia. Jos toiminnallisten evästeiden hyväksyntä peruutetaan, sovellus tyhjentää asetustietokannan seuraavan hyväksynnän vahvistamisen yhteydessä.

---

## 4. Upotettu WebView juridisten asiakirjojen näyttämiseen

Sovellus sisältää upotetun WebView-komponentin (`webview_flutter`-paketin avulla), jota käytetään **yksinomaan** juridisten asiakirjojen — tämän evästekäytännön, tietosuojakäytännön ja käyttöehtojen — näyttämiseen. Tämä WebView avataan vain silloin, kun napautat tarkoituksellisesti juridisen asiakirjan linkkiä sovelluksen tervetuloruudulla.

**Jos juridiset asiakirjat sijaitsevat etä-URL-osoitteessa:** Asiakirjat toimittava palvelin saattaa asettaa evästeitä tai käyttää muita seurantamekanismeja WebView-näkymässä samalla tavoin kuin mikä tahansa selaimessa vierailtu verkkosivusto. Tällöin kyseisen isännöintipalvelun tietosuoja- ja evästekäytännöt ovat voimassa — ei tämä käytäntö.

**Jos juridiset asiakirjat toimitetaan sovelluksen paikallisista resursseista:** Ulkoisia verkkopyyntöjä ei tehdä eikä evästeitä aseteta tai vastaanoteta.

Muita WebView-komponentteja, upotettuja selaimia tai kolmannen osapuolen verkkosisältöä ei ladata normaalin sovelluksen käytön minkään muun vaiheen aikana.

---

## 5. Kolmannen osapuolen palvelut ja niiden oma tallennus

Kun vapaaehtoisesti lataat valinnaisia tekoäly- tai TTS-mallitiedostoja, sovellus lähettää HTTPS-pyyntöjä seuraaville kolmannen osapuolen palvelimille. Nämä palvelimet saattavat asettaa omia evästeitään tai käyttää omia seurantamekanismejaan, jos myöhemmin vierailet niissä selaimella, mutta ne eivät aseta evästeitä laitteellesi sovelluksen kautta.

| Palvelu | Mitä tapahtuu | Heidän evästeet/tietosuojakäytäntönsä |
|---|---|---|
| Hugging Face (`huggingface.co`) | Vain tiedoston lataus — ei evästeitä sovelluksen kautta | [huggingface.co/privacy](https://huggingface.co/privacy) |
| GitHub (`github.com`) | Vain tiedoston lataus — ei evästeitä sovelluksen kautta | [docs.github.com/en/site-policy/privacy-policies](https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement) |
| Apple TTS (varavalinta, iOS) | Käyttöjärjestelmä hoitaa — katso Applen tietosuojakäytäntö | [apple.com/legal/privacy](https://www.apple.com/legal/privacy/) |
| Google TTS (varavalinta, Android) | Käyttöjärjestelmä hoitaa — katso Googlen tietosuojakäytäntö | [policies.google.com/privacy](https://policies.google.com/privacy) |

---

## 6. Kaiken sovelluksen tallennustilan poistaminen

Voit poistaa kaikki sovelluksen tallentamat tiedot milloin tahansa **poistamalla sovelluksen** laitteeltasi. Tämä poistaa pysyvästi kaikki asetustiedostot, mukautetut valokuvat ja ladatut mallitiedostot. Toimenpide vaihtelee hieman alustan mukaan:

**iOS:** Siirry kohtaan Asetukset > Yleiset > iPhone-tallennustila (tai iPad-tallennustila) > Sono > Poista sovellus.

**Android:** Siirry kohtaan Asetukset > Sovellukset > Sono > Poista asennus. Vaihtoehtoisesti voit käyttää kohtaa Asetukset > Sovellukset > Sono > Tallennustila > Tyhjennä tiedot poistaaksesi kaikki tallennetut tiedot poistamatta sovellusta.

Voit myös poistaa yksittäisiä mukautettuja valokuvia milloin tahansa painamalla pitkään symbolikorttia sovelluksessa ja valitsemalla vaihtoehdon mukautetun valokuvan poistamiseksi.

---

## 7. Muutokset tähän käytäntöön

Saatamme päivittää tätä evästekäytäntöä ajoittain. Tämän asiakirjan alussa oleva "Viimeksi päivitetty" -päivämäärä heijastaa viimeisintä tarkistusta. Koska tämä sovellus ei käytä evästeitä ja sen paikallisen tallennuksen käytännöt muuttuvat vain merkittävien sovelluspäivitysten yhteydessä, muutoksia tähän käytäntöön odotetaan tapahtuvan harvoin.

---

## 8. Yhteystiedot

Jos sinulla on kysymyksiä tästä evästekäytännöstä tai sovelluksen paikallisen tallennuksen käytännöistä, ota meihin yhteyttä:

> **Matan Ljubas**
> **[Sähköpostiosoite — täytetään ennen julkaisua]**

---

*Tämä evästekäytäntö koskee ainoastaan Sono-natiivimobiilisovellusta. Se ei koske mitään verkkosivustoa tai verkkopalvelua, joka saattaa liittyä julkaisijaan.*
