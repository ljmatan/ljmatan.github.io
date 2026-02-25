# Zásady používání souborů cookie — Sono AAC Communicator

**Poslední aktualizace: 23. února 2026**

---

## 1. Co jsou soubory cookie?

Soubory cookie jsou malé textové soubory, které webová stránka nebo webová služba umístí na zařízení za účelem ukládání informací mezi relacemi. Jde o technologii webového prohlížeče a inherentně nejsou součástí nativních mobilních aplikací.

---

## 2. Používá tato Aplikace soubory cookie?

**Převážně ne.** Sono je nativní mobilní aplikace. Při běžném používání — procházení symbolů, sestavování vět, přehrávání hlasového výstupu nebo používání funkce vět s AI — nejsou používány žádné soubory cookie, webové relace ani úložiště prohlížeče.

Aplikace obsahuje vestavěnou komponentu WebView používanou **výhradně** k zobrazení právních dokumentů (těchto Zásad používání souborů cookie, Zásad ochrany osobních údajů a Obchodních podmínek), pokud se je rozhodnete zobrazit z uvítací obrazovky Aplikace. V závislosti na způsobu hostování těchto dokumentů může tato komponenta WebView na vaše zařízení přenášet soubory cookie, nebo také nemusí (viz část 4).

Sledovací soubory cookie, analytické soubory cookie ani reklamní soubory cookie nejsou při běžném provozu Aplikace používány v žádném okamžiku.

---

## 3. Lokální úložiště používané Aplikací

Ačkoli Aplikace při běžném provozu nepoužívá soubory cookie, ukládá malý počet hodnot preferencí na vašem zařízení prostřednictvím interní služby mezipaměti Aplikace. Ty jsou funkčně nezbytné pro provoz Aplikace a nesledují vás napříč aplikacemi ani zařízeními.

Následující data jsou uložena lokálně na vašem zařízení:

| Položka úložiště | Účel | Formát | Trvalé na disku |
|---|---|---|---|
| `gsaCache.db` | Úložiště preferencí Aplikace — uchovává zobrazované jméno, pohlaví, přepínač AI, výběr hlasu TTS a index vlastních fotografií symbolů | Sembast databáze klíč–hodnota | Ano |
| Soubory vlastních fotografií | Osobní fotografie přiřazené symbolům opatrovníkem | Soubory obrázků | Ano |
| Historie zpráv | Nedávno vyslovené věty (pouze aktuální relace) | Pouze v paměti | **Ne** |
| AI jazykový model | Soubor LLM na zařízení (pokud byl stažen) | GGUF binární | Ano |
| Hlasové modely TTS | Soubory pro offline syntézu řeči (pokud byly staženy) | Binární model | Ano |

Všechny tyto položky jsou uloženy v privátním izolovaném adresáři Aplikace na vašem zařízení. Nejsou přístupné jiným aplikacím a Aplikace je nepřenáší na žádný server.

Protože preference Aplikace jsou ukládány jako funkční soubory cookie v databázi `gsaCache.db`, podléhají mechanismu souhlasu se soubory cookie Aplikace. Pokud je souhlas s funkčními soubory cookie odvolán, Aplikace při dalším potvrzení souhlasu databázi preferencí vymaže.

---

## 4. Vestavěný WebView pro zobrazení právních dokumentů

Aplikace obsahuje vestavěnou komponentu WebView (využívající `webview_flutter`) používanou **výhradně** k zobrazení právních dokumentů — těchto Zásad používání souborů cookie, Zásad ochrany osobních údajů a Obchodních podmínek. Tento WebView se otevírá pouze tehdy, když záměrně klepnete na odkaz právního dokumentu na uvítací obrazovce Aplikace.

**Pokud jsou právní dokumenty hostovány na vzdálené URL adrese:** Server, který tyto dokumenty poskytuje, může v rámci WebView nastavovat soubory cookie nebo používat jiné mechanismy sledování, stejně jako jakákoli webová stránka navštívená v prohlížeči. V takovém případě se uplatňují zásady ochrany osobních údajů a používání souborů cookie dané hostingové služby — nikoli tyto zásady.

**Pokud jsou právní dokumenty poskytovány z lokálních prostředků Aplikace:** Není uskutečňován žádný externí síťový požadavek a žádné soubory cookie nejsou nastavovány ani přijímány.

Žádná jiná komponenta WebView, vestavěný prohlížeč ani webový obsah třetích stran není načítán v žádné jiné části běžného provozu Aplikace.

---

## 5. Služby třetích stran a jejich vlastní úložiště

Když dobrovolně stahujete volitelné soubory AI nebo TTS modelů, Aplikace odesílá požadavky HTTPS na následující servery třetích stran. Tyto servery mohou nastavovat vlastní soubory cookie nebo používat vlastní mechanismy sledování, pokud je následně navštívíte v prohlížeči, ale prostřednictvím Aplikace na vašem zařízení soubory cookie nenastavují.

| Služba | Co se děje | Jejich zásady souborů cookie/ochrany osobních údajů |
|---|---|---|
| Hugging Face (`huggingface.co`) | Pouze stažení souboru — prostřednictvím Aplikace nejsou nastavovány žádné soubory cookie | [huggingface.co/privacy](https://huggingface.co/privacy) |
| GitHub (`github.com`) | Pouze stažení souboru — prostřednictvím Aplikace nejsou nastavovány žádné soubory cookie | [docs.github.com/en/site-policy/privacy-policies](https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement) |
| Apple TTS (záložní, iOS) | Zpracováváno OS — viz zásady ochrany osobních údajů Apple | [apple.com/legal/privacy](https://www.apple.com/legal/privacy/) |
| Google TTS (záložní, Android) | Zpracováváno OS — viz zásady ochrany osobních údajů Google | [policies.google.com/privacy](https://policies.google.com/privacy) |

---

## 6. Odstranění veškerého úložiště Aplikace

Veškerá data uložená Aplikací můžete kdykoli odstranit **odinstalováním Aplikace** z vašeho zařízení. Tím trvale odstraníte veškeré soubory preferencí, vlastní fotografie a stažené soubory modelů. Postup se mírně liší podle platformy:

**iOS:** Přejděte do Nastavení > Obecné > Úložiště iPhonu (nebo iPadu) > Sono > Smazat aplikaci.

**Android:** Přejděte do Nastavení > Aplikace > Sono > Odinstalovat. Alternativně použijte Nastavení > Aplikace > Sono > Úložiště > Vymazat data pro odstranění veškerých uložených dat bez odinstalování Aplikace.

Také můžete kdykoli odstranit jednotlivé vlastní fotografie dlouhým stisknutím kartičky symbolu v Aplikaci a výběrem možnosti pro odstranění vlastní fotografie.

---

## 7. Změny těchto zásad

Tyto Zásady používání souborů cookie můžeme čas od času aktualizovat. Datum „Poslední aktualizace" v horní části tohoto dokumentu odráží nejnovější revizi. Protože tato Aplikace nepoužívá soubory cookie a její postupy lokálního úložiště se mění pouze s významnými aktualizacemi Aplikace, změny těchto zásad se očekávají zřídka.

---

## 8. Kontakt

Máte-li jakékoli dotazy ohledně těchto Zásad používání souborů cookie nebo postupů lokálního úložiště Aplikace, kontaktujte nás na:

> **Matan Ljubas**
> **lj.matan@gmail.com**

---

*Tyto Zásady používání souborů cookie se vztahují pouze na nativní mobilní aplikaci Sono. Nevztahují se na žádnou webovou stránku ani webovou službu, která může být spojena s vydavatelem.*
