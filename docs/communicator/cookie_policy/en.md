# Cookie Policy — Sono AAC Communicator

**Last updated: 23 February 2026**

---

## 1. What Are Cookies?

Cookies are small text files placed on a device by a website or web-based service to store information between sessions. They are a web browser technology and are not inherently part of native mobile applications.

---

## 2. Does This App Use Cookies?

**Mostly no.** Sono is a native mobile application. During normal use — browsing symbols, building sentences, playing voice output, or using the AI sentence feature — no cookies, web sessions, or browser storage are used.

The App includes an embedded WebView component used **only** to display legal documents (this Cookie Policy, the Privacy Policy, and the Terms and Conditions) when you choose to view them from the App's welcome screen. Depending on how those documents are hosted, that WebView may or may not transmit cookies to your device (see Section 4).

There are no tracking cookies, analytics cookies, or advertising cookies used at any point during normal operation of the App.

---

## 3. Local Storage Used by the App

Although the App does not use cookies during normal operation, it does store a small number of preference values on your device using the App's internal cache service. These are functionally necessary for the App to operate and do not track you across applications or devices.

The following data is stored locally on your device:

| Storage Item | Purpose | Format | Persisted to Disk |
|---|---|---|---|
| `gsaCache.db` | App preference store — holds display name, gender, AI toggle, TTS voice selection, and the custom symbol photo index | Sembast key-value database | Yes |
| Custom photo files | Personal photos assigned to symbols by the caretaker | Image files | Yes |
| Message history | Recently spoken sentences (current session only) | In-memory only | **No** |
| AI language model | The on-device LLM file (if downloaded) | GGUF binary | Yes |
| TTS voice models | Offline voice synthesis files (if downloaded) | Model binary | Yes |

All of these items are stored in the App's private sandboxed directory on your device. They are not accessible to other applications and are not transmitted to any server by the App.

Because app preferences are stored as functional cookies in the `gsaCache.db` database, they are subject to the App's cookie consent mechanism. If functional cookie consent is revoked, the App will clear the preference database on the next consent acknowledgement.

---

## 4. Embedded WebView for Legal Document Display

The App includes an embedded WebView component (powered by `webview_flutter`) used **exclusively** to display legal documents — this Cookie Policy, the Privacy Policy, and the Terms and Conditions. This WebView is opened only when you deliberately tap a legal document link on the App's welcome screen.

**If the legal documents are hosted at a remote URL:** The server delivering those documents may set cookies or use other tracking mechanisms in the WebView, in the same way as any website visited in a browser. In that case, the privacy and cookie practices of that hosting service apply — not this policy.

**If the legal documents are served from local App assets:** No external network request is made, and no cookies are set or received.

No other WebView component, embedded browser, or third-party web content is loaded during any other part of the App's normal operation.

---

## 5. Third-Party Services and Their Own Storage

When you voluntarily download optional AI or TTS model files, the App makes HTTPS requests to the following third-party servers. These servers may set their own cookies or use their own tracking mechanisms if you subsequently visit them in a browser, but they do not set cookies on your device through the App itself.

| Service | What Happens | Their Cookie/Privacy Policy |
|---|---|---|
| Hugging Face (`huggingface.co`) | File download only — no cookies set via the App | [huggingface.co/privacy](https://huggingface.co/privacy) |
| GitHub (`github.com`) | File download only — no cookies set via the App | [docs.github.com/en/site-policy/privacy-policies](https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement) |
| Apple TTS (fallback, iOS) | Handled by the OS — see Apple's privacy policy | [apple.com/legal/privacy](https://www.apple.com/legal/privacy/) |
| Google TTS (fallback, Android) | Handled by the OS — see Google's privacy policy | [policies.google.com/privacy](https://policies.google.com/privacy) |

---

## 6. Removing All App Storage

You can remove all data stored by the App at any time by **uninstalling the App** from your device. This will permanently delete all preference files, custom photos, and downloaded model files. The process varies slightly by platform:

**iOS:** Go to Settings > General > iPhone Storage (or iPad Storage) > Sono > Delete App.

**Android:** Go to Settings > Apps > Sono > Uninstall. Alternatively, use Settings > Apps > Sono > Storage > Clear Data to remove all stored data without uninstalling the App.

You can also remove individual custom photos at any time by long-pressing a symbol card in the App and selecting the option to remove the custom photo.

---

## 7. Changes to This Policy

We may update this Cookie Policy from time to time. The "Last updated" date at the top of this document reflects the most recent revision. Because this App does not use cookies and its local storage practices change only with significant App updates, changes to this policy are expected to be infrequent.

---

## 8. Contact

If you have any questions about this Cookie Policy or the App's local storage practices, contact us at:

> **Matan Ljubas**
> **lj.matan@gmail.com**

---

*This Cookie Policy applies to the Sono native mobile app only. It does not apply to any website or web-based service that may be associated with the publisher.*
