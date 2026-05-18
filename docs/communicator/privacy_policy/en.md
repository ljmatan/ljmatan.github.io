---
layout: doc
---

# Privacy Policy — Sono AAC Communicator

**Last updated: 23 February 2026**

---

## 1. Introduction and Identity of the Data Controller

Sono is a picture-symbol communication app designed to help people express themselves using images and spoken words.

**Data Controller:** The entity responsible for the processing of personal data in connection with this app is:

> **Matan Ljubas**
> Contact: **lj.matan@gmail.com**

**EU Representative (where applicable):** If the publisher is established outside the European Economic Area (EEA), an EU representative is required under Article 27 of the General Data Protection Regulation (GDPR). Where required, the EU representative is:

> **[EU representative name and address — to be completed if publisher is outside EEA]**

**The core principle:** Sono is designed to run entirely on your device. It does not collect personal data remotely, does not create user accounts, does not track you, and does not transmit your communication activity to any server.

---

## 2. Information Stored on Your Device

Sono stores a small amount of preference data locally on your device. This data never leaves the device unless you explicitly back up your device using a third-party service (such as iCloud or Google Drive), which is governed by that service's own privacy policy.

| Data | What It Is | Where Stored |
|---|---|---|
| Display name | A name the caretaker sets for the user (e.g. "Alex") | Device file system |
| Gender preference | Visual preference (neutral / male / female) for illustration variants | Device file system |
| AI sentence polishing toggle | Whether the on-device language model is enabled | Device file system |
| Voice selection | The chosen text-to-speech voice | Device file system |
| Custom symbol photos | Photos assigned to communication symbols by the caretaker | Device file system |
| Custom photo index | A local map linking symbol IDs to photo file paths | Device file system |

**Message history** (recently spoken sentences) is kept **in memory only** for the duration of the current app session. It is not written to disk and is permanently lost when the app is closed.

---

## 3. How We Use This Information

The information listed above is used solely to operate the app on your device:

- **Display name** — shown as a greeting on the home screen.
- **Gender preference** — selects gender-appropriate illustration variants.
- **AI toggle** — determines whether the on-device language model enhances spoken sentences.
- **Voice selection** — drives the text-to-speech engine.
- **Custom photos** — displayed on symbol cards instead of the default illustrations.

None of this information is used for analytics, advertising, profiling, or any purpose other than operating the app locally on your device.

---

## 4. Legal Basis for Processing (GDPR)

Where the General Data Protection Regulation (EU) 2016/679 applies, the legal bases under Article 6 GDPR for processing the data described in Section 2 are:

| Data | Legal Basis | Explanation |
|---|---|---|
| Display name, gender preference, AI toggle, voice selection | **Art. 6(1)(b) — Performance of contract** | These preferences are necessary to provide the app's core functionality as configured by the user/caretaker. |
| Custom symbol photos | **Art. 6(1)(a) — Consent** | The caretaker explicitly assigns a photo to a symbol. Consent can be withdrawn at any time by removing the photo via the long-press menu. |

No processing is based on automated profiling, and no processing decisions carry legal or similarly significant effects on any individual (see also Section 13, Right Not to Be Subject to Automated Decision-Making).

---

## 5. On-Device Artificial Intelligence

When the AI sentence polishing feature is enabled, the app uses an on-device large language model (LLM) to make spoken sentences more natural-sounding. This processing happens **entirely on your device**:

- The model (Qwen2.5-0.5B-Instruct, approximately 400 MB) is downloaded once from a public repository (Hugging Face) and stored locally.
- No sentences, symbols, or any other input you type or tap are ever sent to an external server for AI processing.
- If the AI feature is disabled or the model has not been downloaded, the app falls back to a built-in rule-based grammar engine.
- No profiling, automated decision-making, or inferences about any individual are produced by the AI feature.

---

## 6. Text-to-Speech

Sono offers two text-to-speech modes:

**Offline voices (preferred):** The app can download language-specific voice models from a public repository (Sherpa-ONNX / GitHub releases). Once downloaded, all speech synthesis happens entirely on your device with no data transmitted externally.

**Device system voices (fallback):** When an offline voice is not available for the selected language, the app uses your device's built-in text-to-speech service (provided by Apple or Google, depending on your device). These system services are governed by the privacy policies of Apple and Google respectively, and **may transmit spoken text to their servers** to synthesise it. You can avoid this by downloading an offline voice in **Settings > Voice**.

---

## 7. Optional Internet Connections

Sono has no mandatory internet connection. The app operates fully offline after installation.

The only network activity that occurs is when you choose to download optional resources:

- **AI language model** — downloaded from Hugging Face (`huggingface.co`) when you tap "Download Model" in Settings. Approximately 400 MB.
- **Offline voice models** — downloaded from Sherpa-ONNX releases on GitHub (`github.com`) when you select and download a voice in Settings. Model size varies by language.

These downloads transfer only the data inherent to any HTTPS request (your IP address and basic request headers). No personal information, communication content, or usage data is included in these requests. Once downloaded, models operate entirely offline.

---

## 8. Device Permissions

The app requests the following device permissions:

| Permission | Why It Is Requested |
|---|---|
| **Camera** | To take a photo and assign it to a communication symbol. Photos are stored locally only and are never transmitted. |
| **Photo library** | To select an existing photo and assign it to a communication symbol. The selected photo is copied locally only and never transmitted. |

The app does not request access to location, contacts, microphone (for recording), Bluetooth, health data, or any other sensitive permissions beyond those listed above.

---

## 9. Information We Do Not Collect

Sono does not collect, transmit, or store any of the following:

- Communication content (sentences spoken or symbols tapped)
- Usage patterns, session duration, or frequency of use
- Device identifiers, advertising IDs, or fingerprinting data
- Crash reports or diagnostic logs sent to a remote server
- Names, email addresses, or any personal identifiers beyond those entered locally by the caretaker
- Location data of any kind
- Biometric or health-related data

There are no analytics SDKs, no advertising networks, and no third-party tracking libraries integrated into the app.

---

## 10. Third-Party Services

The only third-party services involved with the app are the optional model download sources and device-level platform services:

| Service | Role | Privacy Policy |
|---|---|---|
| Hugging Face (`huggingface.co`) | Hosts the optional AI language model file | [huggingface.co/privacy](https://huggingface.co/privacy) |
| GitHub (`github.com`) | Hosts optional offline voice model archives | [docs.github.com/en/site-policy/privacy-policies](https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement) |
| Apple TTS (iOS, fallback) | Device text-to-speech when no offline voice is installed | [apple.com/legal/privacy](https://www.apple.com/legal/privacy/) |
| Google TTS (Android, fallback) | Device text-to-speech when no offline voice is installed | [policies.google.com/privacy](https://policies.google.com/privacy) |

The app has no relationship with advertising networks, analytics providers, or data brokers.

---

## 11. International Data Transfers

The app itself does not transfer personal data internationally. However, when you voluntarily download AI or TTS model files, those requests are sent to servers operated by Hugging Face and GitHub, which are based in the United States.

These downloads do not contain personal data beyond the standard information in any HTTPS request (IP address, request headers). No communication content, user preferences, or identifying information about any individual is transmitted.

Where GDPR applies, transfers of personal data to the United States rely on:
- The EU–US Data Privacy Framework (where the recipient is certified), or
- Standard Contractual Clauses (SCCs) as adopted by the European Commission, or
- The fact that no personal data within the meaning of GDPR is transmitted in the relevant requests, rendering Chapter V GDPR inapplicable to those transfers.

For the processing carried out by Apple TTS and Google TTS (where used as fallback), please refer to Apple's and Google's respective privacy policies and their published transfer mechanisms.

---

## 12. Children's Privacy

Sono is designed to support people of all ages who benefit from picture-symbol communication, including children.

Because the app collects no personal data remotely and operates entirely on-device, it presents a minimal privacy risk for all users, including children.

**EU/EEA — Age of Digital Consent (GDPR Article 8):** In the European Union and European Economic Area, the age at which a person can consent to data processing related to digital services varies by member state (between 13 and 16 years). Where the app is used by a child below the applicable age of digital consent, the consent of the holder of parental responsibility is required for any data processing. For this app, the only processing requiring consent is the assignment of custom photos (see Section 4). Parents and guardians are encouraged to review and configure these settings.

If you choose to download an AI or TTS model, those downloads occur over an encrypted HTTPS connection. Parents and guardians who wish to prevent any internet access by the app can do so by restricting internet access at the device or router level — the app will continue to function fully using previously downloaded models.

---

## 13. Your Rights Under GDPR

If you are located in the European Economic Area, the United Kingdom, or another jurisdiction with equivalent data protection legislation, you have the following rights regarding personal data processed in connection with this app. Because virtually all data is stored locally on your device and you control it directly, most rights can be exercised by you at any time through the app itself.

| Right | How to Exercise It |
|---|---|
| **Right of access (Art. 15)** | All stored data is on your device. You can view the display name and settings directly in Caretaker Settings. Custom photos are visible on the symbol board. |
| **Right to rectification (Art. 16)** | Change any stored information directly in Caretaker Settings at any time. |
| **Right to erasure / "right to be forgotten" (Art. 17)** | Delete individual custom photos via the symbol's long-press menu. Delete all app data by uninstalling the app. |
| **Right to restriction of processing (Art. 18)** | Disable specific features (e.g. turn off the AI toggle, remove a custom photo) to restrict the associated processing. |
| **Right to data portability (Art. 20)** | App data is stored in standard formats (plain text, JSON, common image formats) in the app's sandboxed directory. On supported platforms, you can access this via device backup tools. |
| **Right to object (Art. 21)** | You may object to processing based on legitimate interests at any time by contacting us (see Section 18). Where processing is based on consent, see the right to withdraw consent below. |
| **Right to withdraw consent (Art. 7(3))** | Where processing is based on consent (custom photos), you can withdraw consent at any time by removing the photo. Withdrawal does not affect the lawfulness of processing prior to withdrawal. |
| **Right not to be subject to automated decision-making (Art. 22)** | The app does not carry out automated decision-making or profiling that produces legal or similarly significant effects on individuals. |

To exercise rights that cannot be addressed directly within the app, or to raise a concern about our data practices, contact us using the details in Section 18.

---

## 14. Data Retention and Deletion

**Session data (message history):** Cleared automatically each time the app closes. Not persisted to disk.

**Preference data (name, gender, toggle, voice selection):** Retained on the device until the caretaker changes the setting manually, or until the app is uninstalled.

**Custom photos:** Retained on the device until individually removed via the symbol's long-press menu, or until the app is uninstalled.

**AI and TTS model files:** Retained on the device until deleted via Settings, or until the app is uninstalled.

**To delete all app data:** Uninstalling the app from your device removes all locally stored files, including all preferences, custom photos, and downloaded model files.

We do not retain any of this information on our own servers, as none of it is ever transmitted to us.

---

## 15. Data Security

All data stored by the app resides in the app's private sandboxed container on your device, which is protected by your operating system's built-in security mechanisms (file-system encryption, process isolation, app sandboxing). The app does not implement encryption layers beyond what the operating system provides.

Because no personal data is transmitted to our infrastructure, there is no server-side data held by us that could be subject to a breach on our end. In the unlikely event we become aware of a security vulnerability in the app that affects personal data, we will notify affected users through an app update and, where required by law, notify the relevant supervisory authority within 72 hours of becoming aware (GDPR Article 33).

---

## 16. Caretaker Settings Access

Settings (including the ability to change the user's name, voice, and custom photos) are accessible via a hidden gesture — four taps within two seconds on the sentence area. This mechanism is intended as a simple barrier to accidental changes, not as a strong access control system. If you require strict access control, we recommend using your device's guided access or screen time features to restrict in-app navigation.

---

## 17. Changes to This Policy

We may update this privacy policy from time to time to reflect changes in the app or in applicable law. When we do, the "Last updated" date at the top of this document will change. Where changes are material, we will notify you through an in-app notice or an app update.

Continued use of the app after a change is published constitutes acceptance of the updated policy, unless your continued use is on the basis of a right that requires a fresh consent, in which case we will seek that consent explicitly.

---

## 18. Contact, Data Protection Officer, and Supervisory Authority

**Contact for data protection enquiries:**

> **Matan Ljubas**
> **[Address]**
> **lj.matan@gmail.com**

**Data Protection Officer (DPO):** If a Data Protection Officer has been designated, their contact details are:

> **[DPO name and contact details — or state "No DPO appointed" if not applicable]**

**Right to lodge a complaint:** If you believe that the processing of your personal data infringes GDPR or applicable national data protection law, you have the right to lodge a complaint with the supervisory authority in the EU member state of your habitual residence, place of work, or of the alleged infringement. A list of EU supervisory authorities is available at [edpb.europa.eu/about-edpb/about-edpb/members_en](https://www.edpb.europa.eu/about-edpb/about-edpb/members_en). You also retain the right to seek a judicial remedy.

---

*This privacy policy applies to the Sono app. It does not apply to any third-party services linked or referenced herein, which have their own privacy policies and their own data controller responsibilities.*
