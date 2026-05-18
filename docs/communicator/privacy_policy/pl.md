---
layout: doc
---

# Polityka prywatności — Sono AAC Communicator

**Ostatnia aktualizacja: 23 lutego 2026**

---

## 1. Wprowadzenie i tożsamość administratora danych

Sono to aplikacja do komunikacji za pomocą symboli obrazkowych, zaprojektowana po to, aby pomagać osobom wyrażać się za pomocą obrazów i słów mówionych.

**Administrator danych:** Podmiot odpowiedzialny za przetwarzanie danych osobowych w związku z tą aplikacją to:

> **Matan Ljubas**
> Kontakt: **lj.matan@gmail.com**

**Przedstawiciel w UE (w stosownych przypadkach):** Jeżeli wydawca ma siedzibę poza Europejskim Obszarem Gospodarczym (EOG), art. 27 Ogólnego rozporządzenia o ochronie danych (RODO) wymaga wyznaczenia przedstawiciela w UE. Tam gdzie jest to wymagane, przedstawicielem w UE jest:

> **[Nazwa i adres przedstawiciela w UE — uzupełnić, jeśli wydawca spoza EOG]**

**Podstawowa zasada:** Sono jest zaprojektowany tak, aby działać wyłącznie na Twoim urządzeniu. Nie gromadzi danych osobowych zdalnie, nie tworzy kont użytkowników, nie śledzi Cię i nie przesyła Twojej aktywności komunikacyjnej na żaden serwer.

---

## 2. Informacje przechowywane na Twoim urządzeniu

Sono przechowuje lokalnie na Twoim urządzeniu niewielką ilość danych preferencji. Dane te nigdy nie opuszczają urządzenia, chyba że jawnie wykonasz kopię zapasową urządzenia za pomocą usługi zewnętrznej (takiej jak iCloud lub Google Drive), co podlega własnej polityce prywatności tej usługi.

| Dane | Co to jest | Miejsce przechowywania |
|---|---|---|
| Wyświetlana nazwa | Imię ustawiane przez opiekuna dla użytkownika (np. „Alex") | System plików urządzenia |
| Preferencja płci | Preferencja wizualna (neutralna / męska / żeńska) dla wariantów ilustracji | System plików urządzenia |
| Przełącznik polerowania zdań przez AI | Czy model językowy na urządzeniu jest włączony | System plików urządzenia |
| Wybór głosu | Wybrany głos do zamiany tekstu na mowę | System plików urządzenia |
| Niestandardowe zdjęcia symboli | Zdjęcia przypisywane przez opiekuna do symboli komunikacyjnych | System plików urządzenia |
| Indeks niestandardowych zdjęć | Lokalna mapa łącząca identyfikatory symboli ze ścieżkami plików zdjęć | System plików urządzenia |

**Historia wiadomości** (niedawno wypowiedziane zdania) jest przechowywana **wyłącznie w pamięci** przez czas bieżącej sesji aplikacji. Nie jest zapisywana na dysku i zostaje trwale utracona po zamknięciu aplikacji.

---

## 3. W jaki sposób wykorzystujemy te informacje

Wymienione powyżej informacje są wykorzystywane wyłącznie do działania aplikacji na Twoim urządzeniu:

- **Wyświetlana nazwa** — wyświetlana jako powitanie na ekranie głównym.
- **Preferencja płci** — wybór wariantów ilustracji odpowiednich dla płci.
- **Przełącznik AI** — określa, czy model językowy na urządzeniu ulepsza wypowiadane zdania.
- **Wybór głosu** — obsługuje silnik zamiany tekstu na mowę.
- **Niestandardowe zdjęcia** — wyświetlane na kartach symboli zamiast domyślnych ilustracji.

Żadna z tych informacji nie jest wykorzystywana do analityki, reklamy, profilowania ani do żadnego innego celu niż lokalne działanie aplikacji na Twoim urządzeniu.

---

## 4. Podstawa prawna przetwarzania (RODO)

Tam gdzie ma zastosowanie Ogólne rozporządzenie o ochronie danych (UE) 2016/679, podstawami prawnymi na mocy art. 6 RODO dla przetwarzania danych opisanych w Rozdziale 2 są:

| Dane | Podstawa prawna | Wyjaśnienie |
|---|---|---|
| Wyświetlana nazwa, preferencja płci, przełącznik AI, wybór głosu | **Art. 6 ust. 1 lit. b) — Wykonanie umowy** | Te preferencje są niezbędne do zapewnienia podstawowej funkcjonalności aplikacji zgodnie z konfiguracją użytkownika/opiekuna. |
| Niestandardowe zdjęcia symboli | **Art. 6 ust. 1 lit. a) — Zgoda** | Opiekun wyraźnie przypisuje zdjęcie do symbolu. Zgodę można wycofać w dowolnym momencie poprzez usunięcie zdjęcia za pomocą menu długiego naciśnięcia. |

Żadne przetwarzanie nie opiera się na zautomatyzowanym profilowaniu, a żadne decyzje dotyczące przetwarzania nie mają prawnych ani podobnie istotnych skutków dla żadnej osoby (zob. również Rozdział 13, Prawo do niepodlegania zautomatyzowanemu podejmowaniu decyzji).

---

## 5. Sztuczna inteligencja na urządzeniu

Gdy funkcja polerowania zdań przez AI jest włączona, aplikacja używa dużego modelu językowego (LLM) na urządzeniu, aby wypowiadane zdania brzmiały bardziej naturalnie. Przetwarzanie to odbywa się **wyłącznie na Twoim urządzeniu**:

- Model (Qwen2.5-0.5B-Instruct, około 400 MB) jest jednorazowo pobierany z publicznego repozytorium (Hugging Face) i przechowywany lokalnie.
- Żadne zdania, symbole ani żadne inne wprowadzane przez Ciebie dane nie są nigdy wysyłane na zewnętrzny serwer do przetwarzania przez AI.
- Jeśli funkcja AI jest wyłączona lub model nie został pobrany, aplikacja przełącza się na wbudowany silnik gramatyki oparty na regułach.
- Funkcja AI nie produkuje profilowania, zautomatyzowanego podejmowania decyzji ani wniosków dotyczących żadnej osoby.

---

## 6. Zamiana tekstu na mowę

Sono oferuje dwa tryby zamiany tekstu na mowę:

**Głosy offline (preferowane):** Aplikacja może pobierać modele głosów specyficzne dla danego języka z publicznego repozytorium (Sherpa-ONNX / GitHub releases). Po pobraniu cała synteza mowy odbywa się wyłącznie na Twoim urządzeniu bez przesyłania danych do zewnętrznych serwisów.

**Systemowe głosy urządzenia (rezerwowe):** Gdy głos offline nie jest dostępny dla wybranego języka, aplikacja używa wbudowanej usługi zamiany tekstu na mowę Twojego urządzenia (udostępnianej przez Apple lub Google, w zależności od Twojego urządzenia). Te usługi systemowe podlegają politykom prywatności odpowiednio Apple i Google i **mogą przesyłać mówiony tekst na ich serwery** w celu jego syntezy. Możesz tego uniknąć, pobierając głos offline w **Ustawienia > Głos**.

---

## 7. Opcjonalne połączenia internetowe

Sono nie wymaga obowiązkowego połączenia z Internetem. Aplikacja działa w pełni offline po instalacji.

Jedyna aktywność sieciowa, która ma miejsce, następuje gdy zdecydujesz się pobrać opcjonalne zasoby:

- **Model językowy AI** — pobierany z Hugging Face (`huggingface.co`), gdy naciśniesz „Pobierz model" w Ustawieniach. Około 400 MB.
- **Offline modele głosów** — pobierane z Sherpa-ONNX releases na GitHubie (`github.com`), gdy wybierzesz i pobierzesz głos w Ustawieniach. Rozmiar modelu zależy od języka.

Pobierania te przesyłają jedynie dane nieodłącznie towarzyszące każdemu żądaniu HTTPS (Twój adres IP i podstawowe nagłówki żądania). Żadne informacje osobiste, treści komunikacyjne ani dane o użytkowaniu nie są zawarte w tych żądaniach. Po pobraniu modele działają wyłącznie offline.

---

## 8. Uprawnienia urządzenia

Aplikacja żąda następujących uprawnień urządzenia:

| Uprawnienie | Dlaczego jest żądane |
|---|---|
| **Aparat** | Aby zrobić zdjęcie i przypisać je do symbolu komunikacyjnego. Zdjęcia są przechowywane wyłącznie lokalnie i nigdy nie są przesyłane. |
| **Biblioteka zdjęć** | Aby wybrać istniejące zdjęcie i przypisać je do symbolu komunikacyjnego. Wybrane zdjęcie jest kopiowane wyłącznie lokalnie i nigdy nie jest przesyłane. |

Aplikacja nie żąda dostępu do lokalizacji, kontaktów, mikrofonu (do nagrywania), Bluetooth, danych zdrowotnych ani żadnych innych poufnych uprawnień poza wymienionymi powyżej.

---

## 9. Informacje, których nie gromadzimy

Sono nie gromadzi, nie przesyła ani nie przechowuje żadnych z poniższych:

- Treści komunikacyjnych (wypowiedzianych zdań lub naciśniętych symboli)
- Wzorców użytkowania, czasu trwania sesji ani częstotliwości użytkowania
- Identyfikatorów urządzenia, identyfikatorów reklamowych ani danych do tworzenia odcisków palców
- Raportów o awariach ani dzienników diagnostycznych wysyłanych na zdalny serwer
- Imion i nazwisk, adresów e-mail ani żadnych identyfikatorów osobowych poza tymi wprowadzonymi lokalnie przez opiekuna
- Danych o lokalizacji jakiegokolwiek rodzaju
- Danych biometrycznych ani danych dotyczących zdrowia

W aplikacji nie są zintegrowane żadne zestawy SDK do analityki, sieci reklamowe ani biblioteki śledzące stron trzecich.

---

## 10. Usługi stron trzecich

Jedynymi usługami stron trzecich zaangażowanymi w aplikację są opcjonalne źródła pobierania modeli i usługi platformowe na poziomie urządzenia:

| Usługa | Rola | Polityka prywatności |
|---|---|---|
| Hugging Face (`huggingface.co`) | Hostuje opcjonalny plik modelu językowego AI | [huggingface.co/privacy](https://huggingface.co/privacy) |
| GitHub (`github.com`) | Hostuje opcjonalne archiwa offline modeli głosów | [docs.github.com/en/site-policy/privacy-policies](https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement) |
| Apple TTS (iOS, rezerwowe) | Zamiana tekstu na mowę na urządzeniu gdy nie zainstalowano głosu offline | [apple.com/legal/privacy](https://www.apple.com/legal/privacy/) |
| Google TTS (Android, rezerwowe) | Zamiana tekstu na mowę na urządzeniu gdy nie zainstalowano głosu offline | [policies.google.com/privacy](https://policies.google.com/privacy) |

Aplikacja nie ma żadnych powiązań z sieciami reklamowymi, dostawcami analityki ani pośrednikami danych.

---

## 11. Międzynarodowe przekazywanie danych

Sama aplikacja nie przekazuje danych osobowych na poziomie międzynarodowym. Jednak gdy dobrowolnie pobierasz pliki modeli AI lub TTS, żądania te są wysyłane na serwery obsługiwane przez Hugging Face i GitHub, które mają siedzibę w Stanach Zjednoczonych.

Te pobierania nie zawierają danych osobowych poza standardowymi informacjami w każdym żądaniu HTTPS (adres IP, nagłówki żądania). Nie są przesyłane żadne treści komunikacyjne, preferencje użytkownika ani informacje identyfikacyjne dotyczące żadnej osoby.

Tam gdzie ma zastosowanie RODO, przekazywanie danych osobowych do Stanów Zjednoczonych opiera się na:
- Ramach ochrony danych UE–USA (gdzie odbiorca jest certyfikowany), lub
- Standardowych klauzulach umownych (SCC) przyjętych przez Komisję Europejską, lub
- Fakcie, że w odpowiednich żądaniach nie są przesyłane żadne dane osobowe w rozumieniu RODO, co sprawia, że Rozdział V RODO nie ma zastosowania do tych przekazów.

W odniesieniu do przetwarzania prowadzonego przez Apple TTS i Google TTS (gdzie są używane jako rezerwowe), odsyłamy do polityk prywatności Apple i Google oraz ich opublikowanych mechanizmów przekazywania.

---

## 12. Prywatność dzieci

Sono jest zaprojektowany z myślą o wspieraniu osób w każdym wieku, które korzystają z komunikacji za pomocą symboli obrazkowych, w tym dzieci.

Ponieważ aplikacja nie gromadzi danych osobowych zdalnie i działa wyłącznie na urządzeniu, stanowi minimalne zagrożenie dla prywatności wszystkich użytkowników, w tym dzieci.

**UE/EOG — Wiek zgody cyfrowej (art. 8 RODO):** W Unii Europejskiej i Europejskim Obszarze Gospodarczym wiek, w którym osoba może wyrazić zgodę na przetwarzanie danych związanych z usługami cyfrowymi, różni się w poszczególnych państwach członkowskich (od 13 do 16 lat). Jeżeli aplikacja jest używana przez dziecko poniżej właściwego wieku zgody cyfrowej, do jakiegokolwiek przetwarzania danych wymagana jest zgoda osoby sprawującej odpowiedzialność rodzicielską. W przypadku tej aplikacji jedynym przetwarzaniem wymagającym zgody jest przypisanie niestandardowych zdjęć (zob. Rozdział 4). Rodziców i opiekunów zachęca się do przeglądu i skonfigurowania tych ustawień.

Jeśli zdecydujesz się pobrać model AI lub TTS, pobierania te odbywają się przez szyfrowane połączenie HTTPS. Rodzice i opiekunowie, którzy chcą zapobiec jakiemukolwiek dostępowi aplikacji do Internetu, mogą to zrobić poprzez ograniczenie dostępu do Internetu na poziomie urządzenia lub routera — aplikacja będzie nadal w pełni funkcjonować przy użyciu wcześniej pobranych modeli.

---

## 13. Twoje prawa wynikające z RODO

Jeśli przebywasz w Europejskim Obszarze Gospodarczym, Zjednoczonym Królestwie lub innej jurysdykcji z równoważnym prawodawstwem w zakresie ochrony danych, masz następujące prawa w odniesieniu do danych osobowych przetwarzanych w związku z tą aplikacją. Ponieważ praktycznie wszystkie dane są przechowywane lokalnie na Twoim urządzeniu i bezpośrednio przez Ciebie kontrolowane, większość praw możesz wykonywać w dowolnym momencie bezpośrednio przez samą aplikację.

| Prawo | Jak je wykonać |
|---|---|
| **Prawo dostępu (art. 15)** | Wszystkie przechowywane dane znajdują się na Twoim urządzeniu. Wyświetlaną nazwę i ustawienia możesz przeglądać bezpośrednio w Ustawieniach opiekuna. Niestandardowe zdjęcia są widoczne na tablicy symboli. |
| **Prawo do sprostowania (art. 16)** | Zmień wszelkie przechowywane informacje bezpośrednio w Ustawieniach opiekuna w dowolnym momencie. |
| **Prawo do usunięcia / „prawo do bycia zapomnianym" (art. 17)** | Usuń poszczególne niestandardowe zdjęcia za pomocą menu długiego naciśnięcia symbolu. Usuń wszystkie dane aplikacji odinstalowując aplikację. |
| **Prawo do ograniczenia przetwarzania (art. 18)** | Wyłącz określone funkcje (np. wyłącz przełącznik AI, usuń niestandardowe zdjęcie), aby ograniczyć powiązane przetwarzanie. |
| **Prawo do przenoszenia danych (art. 20)** | Dane aplikacji są przechowywane w standardowych formatach (zwykły tekst, JSON, popularne formaty obrazów) w izolowanym katalogu aplikacji. Na obsługiwanych platformach możesz uzyskać do nich dostęp za pomocą narzędzi do tworzenia kopii zapasowych urządzenia. |
| **Prawo do sprzeciwu (art. 21)** | Możesz w dowolnym momencie wnieść sprzeciw wobec przetwarzania opartego na uzasadnionych interesach, kontaktując się z nami (zob. Rozdział 18). Tam gdzie przetwarzanie opiera się na zgodzie, zob. prawo do wycofania zgody poniżej. |
| **Prawo do wycofania zgody (art. 7 ust. 3)** | Tam gdzie przetwarzanie opiera się na zgodzie (niestandardowe zdjęcia), możesz wycofać zgodę w dowolnym momencie poprzez usunięcie zdjęcia. Wycofanie nie wpływa na zgodność z prawem przetwarzania przed wycofaniem. |
| **Prawo do niepodlegania zautomatyzowanemu podejmowaniu decyzji (art. 22)** | Aplikacja nie prowadzi zautomatyzowanego podejmowania decyzji ani profilowania, które wywołuje skutki prawne lub podobnie istotne skutki dla osób. |

W celu wykonania praw, których nie można zrealizować bezpośrednio w aplikacji, lub w celu zgłoszenia obaw dotyczących naszych praktyk w zakresie danych, skontaktuj się z nami, korzystając z danych podanych w Rozdziale 18.

---

## 14. Przechowywanie i usuwanie danych

**Dane sesji (historia wiadomości):** Automatycznie usuwane za każdym razem, gdy aplikacja jest zamykana. Nie są zapisywane na dysku.

**Dane preferencji (nazwa, płeć, przełącznik, wybór głosu):** Przechowywane na urządzeniu do momentu ręcznej zmiany ustawienia przez opiekuna lub odinstalowania aplikacji.

**Niestandardowe zdjęcia:** Przechowywane na urządzeniu do momentu ich indywidualnego usunięcia za pomocą menu długiego naciśnięcia symbolu lub odinstalowania aplikacji.

**Pliki modeli AI i TTS:** Przechowywane na urządzeniu do momentu ich usunięcia w Ustawieniach lub odinstalowania aplikacji.

**Aby usunąć wszystkie dane aplikacji:** Odinstalowanie aplikacji z Twojego urządzenia usuwa wszystkie lokalnie przechowywane pliki, w tym wszystkie preferencje, niestandardowe zdjęcia i pobrane pliki modeli.

Nie przechowujemy żadnych z tych informacji na naszych własnych serwerach, ponieważ żadne z nich nie są nam nigdy przesyłane.

---

## 15. Bezpieczeństwo danych

Wszystkie dane przechowywane przez aplikację znajdują się w prywatnym izolowanym kontenerze aplikacji na Twoim urządzeniu, który jest chroniony przez wbudowane mechanizmy bezpieczeństwa Twojego systemu operacyjnego (szyfrowanie systemu plików, izolacja procesów, piaskownica aplikacji). Aplikacja nie implementuje warstw szyfrowania poza tym, co zapewnia system operacyjny.

Ponieważ żadne dane osobowe nie są przesyłane do naszej infrastruktury, po naszej stronie nie ma żadnych danych na serwerze, które mogłyby być przedmiotem naruszenia. W mało prawdopodobnym przypadku, gdy dowiemy się o luce w zabezpieczeniach aplikacji wpływającej na dane osobowe, poinformujemy o tym dotkniętych użytkowników za pomocą aktualizacji aplikacji, a tam gdzie wymaga tego prawo, powiadomimy właściwy organ nadzorczy w ciągu 72 godzin od powzięcia wiadomości (art. 33 RODO).

---

## 16. Dostęp do ustawień opiekuna

Ustawienia (w tym możliwość zmiany nazwy użytkownika, głosu i niestandardowych zdjęć) są dostępne za pomocą ukrytego gestu — cztery naciśnięcia w ciągu dwóch sekund na obszarze zdania. Ten mechanizm ma na celu stanowić prostą barierę przed przypadkowymi zmianami, a nie silny system kontroli dostępu. Jeśli wymagasz ścisłej kontroli dostępu, zalecamy korzystanie z funkcji dostępu sterowanego lub czasu ekranu na Twoim urządzeniu w celu ograniczenia nawigacji w aplikacji.

---

## 17. Zmiany niniejszej polityki

Niniejszą politykę prywatności możemy od czasu do czasu aktualizować, aby odzwierciedlić zmiany w aplikacji lub w obowiązującym prawie. Gdy to zrobimy, data „Ostatniej aktualizacji" u góry tego dokumentu ulegnie zmianie. Tam gdzie zmiany są istotne, poinformujemy Cię za pomocą powiadomienia w aplikacji lub aktualizacji aplikacji.

Dalsze korzystanie z aplikacji po opublikowaniu zmiany stanowi akceptację zaktualizowanej polityki, chyba że Twoje dalsze korzystanie opiera się na prawie wymagającym nowej zgody, w którym to przypadku zwrócimy się o tę zgodę wprost.

---

## 18. Kontakt, inspektor ochrony danych i organ nadzorczy

**Kontakt w sprawach ochrony danych:**

> **[Nazwa wydawcy]**
> **[Adres]**
> **lj.matan@gmail.com**

**Inspektor ochrony danych (IOD):** Jeżeli wyznaczono Inspektora ochrony danych, jego dane kontaktowe są następujące:

> **[Imię i dane kontaktowe IOD — lub podać „Nie wyznaczono IOD", jeśli nie dotyczy]**

**Prawo do wniesienia skargi:** Jeśli uważasz, że przetwarzanie Twoich danych osobowych narusza RODO lub obowiązujące krajowe przepisy o ochronie danych, masz prawo wnieść skargę do organu nadzorczego w państwie członkowskim UE Twojego zwykłego miejsca zamieszkania, miejsca pracy lub miejsca domniemanego naruszenia. Lista organów nadzorczych UE jest dostępna na stronie [edpb.europa.eu/about-edpb/about-edpb/members_en](https://www.edpb.europa.eu/about-edpb/about-edpb/members_en). Zachowujesz również prawo do ochrony sądowej.

---

*Niniejsza polityka prywatności ma zastosowanie do aplikacji Sono. Nie ma zastosowania do żadnych usług stron trzecich, do których odniesiono się lub które wymieniono w niniejszym dokumencie, a które mają własne polityki prywatności i własne obowiązki administratora danych.*
