# iFit Privacy Policy

Last updated: 2026-08-31

This document is an English project draft. Replace the bracketed fields before publication, especially the controller identity, address, contact e-mail and any retention periods marked with `[insert ...]`.

### 1. Who we are

iFit is a web application for gym, studio and appointment booking. It lets
visitors browse schedules, lets members book and cancel classes or appointments,
and lets authorised staff manage users, rosters, attendance, availability,
messages and booking settings.

The controller of personal data processed through iFit is:

- Controller: `[operator legal name]`
- Registered address: `[operator registered address]`
- Privacy contact: `[privacy contact e-mail]`
- General support contact: `[support e-mail or phone]`

The controller decides why and how personal data is processed in the iFit
service. The software provider, hosting providers, e-mail providers and other IT
providers act as processors or independent controllers depending on the service
they provide.

### 2. Personal data we process

Depending on how you use iFit, we may process the following personal data:

- Account data: name, e-mail address, phone number, user identifier, role
  (member, trainer or administrator), account creation date and account status.
- Authentication data: password hashes, session tokens, password-reset codes,
  access tokens, share-link tokens and check-in tokens. Plain-text passwords are
  used only when submitted or issued and should not be stored by the service.
- Booking data: classes or appointments viewed, booked or cancelled, waitlist
  position, booking status, attendance status, no-shows, late cancellations,
  standing reservations and class-pack credit balance.
- Staff and administrator data: trainer assignments, trainer availability,
  location and service management data, administrative actions and exports.
- Inquiry and message data: registration requests, contact details submitted in
  those requests, Help and FAQ messages sent by members, and related timestamps.
- Communication data: transactional e-mails such as welcome credentials,
  password-reset codes, booking confirmations, reminders, calendar invites and
  administrator-sent service messages.
- Technical and security data: IP address or proxy-forwarded client address,
  request metadata, rate-limit counters, device or browser identifiers generated
  by the shared app framework, local cache entries, error records and security
  logs.
- Public schedule data: class title, description, location, trainer names,
  start time, duration, capacity and availability. This data is not usually
  personal data except where it identifies a trainer, staff member or other
  person.

iFit does not intentionally collect medical records, diagnostic information or
other special-category health data. Please do not include sensitive health,
injury, disability, religious, biometric or other special-category information in
free-text messages unless it is necessary for your request. If you provide such
information voluntarily, the controller will handle it only as needed to respond
to you, manage safety or comply with legal duties.

The current iFit implementation does not include in-app payment processing,
advertising tracking or marketing analytics.

### 3. How we collect data

We collect data when:

- an administrator creates, edits or deletes an account;
- a visitor submits a registration inquiry;
- a member signs in, requests a password reset, books, cancels, joins a waitlist,
  checks in or sends a Help and FAQ message;
- a trainer or administrator manages schedules, services, locations,
  availability, rosters, attendance, credits, messages or maintenance tools;
- the app stores essential session and consent information on the user's device;
- the server receives requests and records technical or security events.

If iFit is embedded in another website, that website may collect additional data
under its own privacy policy. This Privacy Policy covers the iFit application and
its API, not unrelated content on the embedding website.

### 4. Purposes and legal bases

We process personal data for the following purposes:

| Purpose | Examples | Legal basis |
| --- | --- | --- |
| Providing the iFit service | Creating accounts, signing in, showing schedule availability, booking and cancelling classes or appointments, managing waitlists, attendance and credits | Performance of a contract or steps before a contract |
| Handling inquiries and support | Registration inquiries, Help and FAQ messages, replies to members | Steps before a contract, performance of a contract and legitimate interests |
| Club operations | Rosters, attendance records, trainer assignments, availability, member management, exports and internal administration | Performance of a contract and legitimate interests |
| Service communications | Welcome credentials, password resets, booking confirmations, reminders, service messages and calendar invites | Performance of a contract and legitimate interests |
| Security and abuse prevention | Authentication, session management, rate limiting, access control, fraud prevention, debugging and security logs | Legitimate interests and legal obligations where applicable |
| Legal and regulatory compliance | Responding to lawful requests, record keeping, dispute handling and enforcing rights | Legal obligations and legitimate interests |
| Optional cookies or marketing | Optional functionality storage, analytics or promotional communications if enabled in the future | Consent, unless another lawful basis applies |

Where we rely on legitimate interests, those interests are to operate, secure and
improve the service, prevent abuse, support club administration, communicate
about bookings and protect users, staff and the controller. You may object to
processing based on legitimate interests as described in section 11.

### 5. Sharing personal data

We share personal data only where needed for the service, legal compliance or
rights protection. Recipients may include:

- authorised employees, trainers, administrators and contractors of the
  controller;
- the software and IT teams maintaining iFit and the shared Generic Shop App
  framework;
- hosting, database, reverse proxy, CDN, tunnel, backup and security providers;
- e-mail and SMTP providers used to send password resets, confirmations,
  reminders and service messages;
- professional advišers such as legal, accounting or audit providers;
- public authorities, courts or regulators when legally required;
- third-party services specifically enabled by the controller for a deployment.

Administrators may export user lists, rosters, attendance or maintenance
snapshots. The controller is responsible for protecting any exported files after
download.

We do not sell personal data.

### 6. International transfers

Where personal data is transferred outside the European Economic Area, the
controller will use an appropriate transfer mechanism, such as an adequacy
decision, standard contractual clauses or another safeguard permitted by data
protection law. The exact processors and transfer mechanisms should be recorded
by the controller before publication.

### 7. Retention

We keep personal data only for as long as reasonably necessary for the purposes
described above, unless a longer period is required by law or needed for legal
claims. The controller should complete the concrete periods below before
publication:

- Account data: while the account is active and for `[insert period]` after
  closure or deletion, unless longer retention is required.
- Booking, attendance, waitlist and credit records: for `[insert period]` after
  the relevant class, appointment or membership period.
- Registration inquiries and Help and FAQ messages: until handled and for
  `[insert period]` afterwards.
- Session records: server-side login sessions are designed to expire within
  7 days from creation or refresh. Local session cache remains on the device
  until sign-out, cache reset or browser data deletion, but expired or revoked
  tokens should not grant access.
- Password-reset codes: designed to expire after 30 minutes and to be consumed
  or replaced when used.
- Security logs, rate-limit data, backups and maintenance exports: for
  `[insert period]`, unless needed longer for investigation or legal reasons.
- Cookies and similar local storage: as described in the Cookie Notice.

When data is no longer needed, it is deleted, anonymised or isolated from routine
use where deletion is not immediately possible, for example in backups.

### 8. Security

We use technical and organisational measures appropriate to the risk, including
role-based access, session tokens, hashed passwords, expiry for reset and share
tokens, rate limiting for sensitive public flows, HTTPS for public deployments,
restricted administrator functions and database maintenance controls.

No online service can be guaranteed to be completely secure. You are responsible
for keeping your login details confidential and for signing out on shared
devices.

### 9. Cookies and local storage

iFit uses cookies and similar browser storage to remember consent choices, keep
members signed in, support security and store limited app preferences. Analytics
and marketing cookies are not enabled in the current iFit implementation. See
the [Cookie Notice](cookie-notice-en.md) for details.

### 10. Automated decisions

iFit automatically applies operational booking rules such as capacity limits,
waitlist order, cancellation windows, credit deduction and check-in validation.
These rules are used to provide the booking service and do not involve profiling
or decisions intended to produce legal or similarly significant effects within
the meaning of data protection law. You may contact the controller if you believe
an automated rule has affected your account incorrectly.

### 11. Your rights

Subject to legal conditions and exceptions, you may have the right to:

- be informed about processing of your personal data;
- access your personal data;
- correct inaccurate or incomplete data;
- request deletion of your data;
- restrict processing of your data;
- receive data you provided in a portable format;
- object to processing based on legitimate interests or direct marketing;
- withdraw consent where processing is based on consent;
- lodge a complaint with a supervisory authority.

In Croatia, the supervisory authority is the Croatian Personal Data Protection
Agency (AZOP). You may also contact the supervisory authority in your country of
residence, work or alleged infringement.

To exercise your rights, contact `[privacy contact e-mail]`. We may need to
verify your identity before acting on a request.

### 12. Children and minors

iFit is intended for gym and studio members who are allowed to use the service
under the controller's membership rules. Minors may use iFit only with the
approval of a parent or legal guardian and the controller. If you believe a minor
has provided personal data without proper approval, contact `[privacy contact
e-mail]`.

### 13. Changes

The controller may update this Privacy Policy when the service, law or processing
practices change. The latest version should be made available in the app or on
the controller's website.
