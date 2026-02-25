# Polityka plików cookie — Sono AAC Communicator

**Ostatnia aktualizacja: 23 lutego 2026**

---

## 1. Czym są pliki cookie?

Pliki cookie to małe pliki tekstowe umieszczane na urządzeniu przez stronę internetową lub usługę opartą na przeglądarce w celu przechowywania informacji między sesjami. Są to technologia przeglądarki internetowej i nie stanowią inherentnej części natywnych aplikacji mobilnych.

---

## 2. Czy ta Aplikacja używa plików cookie?

**Przeważnie nie.** Sono jest natywną aplikacją mobilną. Podczas normalnego użytkowania — przeglądania symboli, budowania zdań, odtwarzania głosu lub korzystania z funkcji zdań AI — nie są używane żadne pliki cookie, sesje internetowe ani pamięć przeglądarki.

Aplikacja zawiera wbudowany komponent WebView używany **wyłącznie** do wyświetlania dokumentów prawnych (niniejszej Polityki plików cookie, Polityki prywatności oraz Regulaminu), gdy zdecydujesz się je wyświetlić z ekranu powitalnego Aplikacji. W zależności od sposobu hostowania tych dokumentów, dany WebView może lub nie może przesyłać pliki cookie na Twoje urządzenie (zob. Sekcja 4).

Podczas normalnego korzystania z Aplikacji nie są używane żadne śledzące pliki cookie, analityczne pliki cookie ani reklamowe pliki cookie.

---

## 3. Lokalne przechowywanie używane przez Aplikację

Chociaż Aplikacja nie używa plików cookie podczas normalnego działania, przechowuje niewielką liczbę wartości preferencji na Twoim urządzeniu za pomocą wewnętrznej usługi pamięci podręcznej Aplikacji. Są one funkcjonalnie niezbędne do działania Aplikacji i nie śledzą Cię między aplikacjami ani urządzeniami.

Następujące dane są przechowywane lokalnie na Twoim urządzeniu:

| Element przechowywania | Cel | Format | Trwałe na dysku |
|---|---|---|---|
| `gsaCache.db` | Magazyn preferencji Aplikacji — przechowuje wyświetlaną nazwę, płeć, przełącznik AI, wybór głosu TTS oraz indeks niestandardowych zdjęć symboli | Baza danych Sembast klucz-wartość | Tak |
| Pliki niestandardowych zdjęć | Osobiste zdjęcia przypisane przez opiekuna do symboli | Pliki obrazów | Tak |
| Historia wiadomości | Niedawno wypowiedziane zdania (tylko bieżąca sesja) | Tylko w pamięci | **Nie** |
| Model językowy AI | Plik LLM na urządzeniu (jeśli pobrany) | Binarny GGUF | Tak |
| Modele głosów TTS | Pliki offline syntezy mowy (jeśli pobrane) | Model binarny | Tak |

Wszystkie te elementy są przechowywane w prywatnym izolowanym katalogu Aplikacji na Twoim urządzeniu. Nie są dostępne dla innych aplikacji i nie są przesyłane przez Aplikację na żaden serwer.

Ponieważ preferencje Aplikacji są przechowywane jako funkcjonalne pliki cookie w bazie danych `gsaCache.db`, podlegają mechanizmowi zgody na pliki cookie Aplikacji. W przypadku cofnięcia zgody na funkcjonalne pliki cookie Aplikacja wyczyści bazę danych preferencji przy następnym potwierdzeniu zgody.

---

## 4. Wbudowany WebView do wyświetlania dokumentów prawnych

Aplikacja zawiera wbudowany komponent WebView (obsługiwany przez `webview_flutter`) używany **wyłącznie** do wyświetlania dokumentów prawnych — niniejszej Polityki plików cookie, Polityki prywatności oraz Regulaminu. Ten WebView jest otwierany tylko wtedy, gdy celowo naciśniesz link do dokumentu prawnego na ekranie powitalnym Aplikacji.

**Jeśli dokumenty prawne są hostowane pod zdalnym adresem URL:** Serwer dostarczający te dokumenty może ustawiać pliki cookie lub stosować inne mechanizmy śledzenia w WebView, w taki sam sposób jak każda strona internetowa odwiedzana w przeglądarce. W takim przypadku mają zastosowanie praktyki prywatności i dotyczące plików cookie danej usługi hostingowej — a nie niniejsza polityka.

**Jeśli dokumenty prawne są serwowane z lokalnych zasobów Aplikacji:** Nie jest wysyłane żadne zewnętrzne żądanie sieciowe i nie są ustawiane ani odbierane żadne pliki cookie.

Żaden inny komponent WebView, wbudowana przeglądarka ani treści internetowe stron trzecich nie są ładowane podczas żadnej innej części normalnego działania Aplikacji.

---

## 5. Usługi stron trzecich i ich własne przechowywanie

Gdy dobrowolnie pobierasz opcjonalne pliki modeli AI lub TTS, Aplikacja wysyła żądania HTTPS do następujących serwerów stron trzecich. Serwery te mogą ustawiać własne pliki cookie lub używać własnych mechanizmów śledzenia, jeśli odwiedzisz je następnie w przeglądarce, ale nie ustawiają plików cookie na Twoim urządzeniu za pośrednictwem Aplikacji.

| Usługa | Co się dzieje | Ich polityka plików cookie/prywatności |
|---|---|---|
| Hugging Face (`huggingface.co`) | Tylko pobieranie pliku — przez Aplikację nie są ustawiane żadne pliki cookie | [huggingface.co/privacy](https://huggingface.co/privacy) |
| GitHub (`github.com`) | Tylko pobieranie pliku — przez Aplikację nie są ustawiane żadne pliki cookie | [docs.github.com/en/site-policy/privacy-policies](https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement) |
| Apple TTS (rezerwowe, iOS) | Obsługiwane przez system operacyjny — zob. politykę prywatności Apple | [apple.com/legal/privacy](https://www.apple.com/legal/privacy/) |
| Google TTS (rezerwowe, Android) | Obsługiwane przez system operacyjny — zob. politykę prywatności Google | [policies.google.com/privacy](https://policies.google.com/privacy) |

---

## 6. Usuwanie wszystkich danych Aplikacji

Możesz w dowolnym momencie usunąć wszystkie dane przechowywane przez Aplikację **odinstalowując Aplikację** ze swojego urządzenia. Spowoduje to trwałe usunięcie wszystkich plików preferencji, niestandardowych zdjęć i pobranych plików modeli. Proces ten różni się nieznacznie w zależności od platformy:

**iOS:** Przejdź do Ustawienia > Ogólne > Pamięć iPhone'a (lub iPada) > Sono > Usuń aplikację.

**Android:** Przejdź do Ustawienia > Aplikacje > Sono > Odinstaluj. Alternatywnie użyj Ustawienia > Aplikacje > Sono > Pamięć > Wyczyść dane, aby usunąć wszystkie przechowywane dane bez odinstalowywania Aplikacji.

Możesz również w dowolnym momencie usunąć poszczególne niestandardowe zdjęcia, długo naciskając kartę symbolu w Aplikacji i wybierając opcję usunięcia niestandardowego zdjęcia.

---

## 7. Zmiany niniejszej polityki

Niniejszą Politykę plików cookie możemy od czasu do czasu aktualizować. Data „Ostatniej aktualizacji" u góry tego dokumentu odzwierciedla najnowszą wersję. Ponieważ ta Aplikacja nie używa plików cookie, a jej praktyki lokalnego przechowywania zmieniają się tylko przy znaczących aktualizacjach Aplikacji, zmiany niniejszej polityki oczekiwane są rzadko.

---

## 8. Kontakt

Jeśli masz jakiekolwiek pytania dotyczące niniejszej Polityki plików cookie lub praktyk lokalnego przechowywania Aplikacji, skontaktuj się z nami pod adresem:

> **[Nazwa wydawcy]**
> **lj.matan@gmail.com**

---

*Niniejsza Polityka plików cookie ma zastosowanie wyłącznie do natywnej aplikacji mobilnej Sono. Nie ma zastosowania do żadnej strony internetowej ani usługi opartej na przeglądarce, która może być powiązana z wydawcą.*
