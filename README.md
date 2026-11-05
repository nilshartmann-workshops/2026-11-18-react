# React Workshop

Dieses Repository enthält den Workspace, in dem wir während des Workshops arbeiten und die Übungen machen.

> [!IMPORTANT]
> Bitte führe die Installationsanleitung unbedingt **einige Tage vor** dem Workshop aus, damit wir sicher sind, dass es keine (unlösbaren) technischen Probleme während der Schulung gibt.

## Gist zum Workshop

Alle wichtigen Links zum Workshop, zum Beispiel das Miro-Board, findest du im Gist zum Workshop. Den Link dazu bekommst du von mir.

Während des Workshops veröffentliche ich dort auch die Aufgabenbeschreibungen. Setz dir den Gist am besten als Lesezeichen.

## Technische Voraussetzungen

Für den Workshop brauchst du:

- **einen Editor oder eine IDE**
  - wenn du bei der Arbeit bereits eine IDE verwendest, die JavaScript und TypeScript unterstützt, kannst du diese auch im Workshop verwenden
  - ich würde nicht empfehlen, während der Schulung eine für dich neue IDE auszuprobieren. Nimm lieber die Werkzeuge, die du kennst.
  - bei JetBrains-IDEs (IntelliJ oder WebStorm) achte bitte darauf, dass du eine **Version von mindestens 2025** verwendest. Ältere Versionen haben Probleme mit der TypeScript-Version, die wir im Workshop verwenden.
  - IntelliJ IDEA ohne Ultimate-Abo unterstützt JavaScript und TypeScript erst ab Version 2026.1.
  - in jedem Fall empfehle ich, in der IDE die **KI-Unterstützung auszuschalten** (Copilot, AI Assistant und Ähnliches).
    - bei einer Schulung sind die Vorschläge meistens eher irritierend denn hilfreich
    - außerdem ist der Sinn der Schulung ja gerade, dass wir Code selbst schreiben, um zu lernen, und uns den Code nicht schreiben lassen
- **Node.js (mindestens Version 24.x)**
  - das ist die aktuelle "long-term support" (LTS) Version von Node.js. Du kannst sie hier für alle Betriebssysteme herunterladen: https://nodejs.org/en/download
  - mit `node -v` kannst du die installierte Version prüfen
  - in der Node.js-Installation ist der Node Package Manager (**npm**) enthalten, mit dem wir die Pakete installieren
- **einen Git-Client**
  - damit du das Repository klonen kannst
- **einen Webbrowser**
- **Internetzugang und Berechtigungen**
  - Du musst auf deinem Computer mit npm Pakete installieren können (dürfen)
  - Du musst dieses Git Repository von github.com klonen können (dürfen). Zur Not kannst du es dir dort auch als zip-Datei herunterladen.
  - Du musst auf deinem Computer Node.js ausführen können (dürfen)
  - Wenn du an der Schulung nicht in deiner gewohnten Umgebung teilnimmst, denk dran, zu prüfen, ob es **Einschränkungen bzgl. VPN, Firewall etc.** gibt

> [!CAUTION]
> Wenn es Probleme mit Berechtigungen gibt und du die Werkzeuge oder Pakete nicht installieren darfst, kann ich dir leider nicht helfen. Deswegen stell bitte unbedingt vor der Schulung sicher, dass die Installation bei dir durchläuft 🙏

Die React Developer Tools sind für den Workshop nicht notwendig, können aber hilfreich sein. Links zum Installieren findest du in der React-Dokumentation: https://react.dev/learn/react-developer-tools

## Installation des Workspaces

### Repository-Struktur

Nach dem Klonen des Repositories (s.u.) findest du diese Verzeichnisse:

- `backend`: eine kleine, in Node.js geschriebene Anwendung, die das Backend mit einer REST-API für unsere Anwendung zur Verfügung stellt. Hier machen wir keine Änderungen, wir starten nur das Backend.
- `workspace`: hierin befindet sich unsere React-Anwendung (bzw. der Ausgangspunkt davon). Hier arbeiten wir und machen die Übungen.

Wir arbeiten nur im Verzeichnis `workspace`. Öffne deshalb bitte **nur dieses** Verzeichnis in deiner IDE (**nicht** das _ganze_ Repository). In IntelliJ oder WebStorm geht das mit `File -> Open`.

> [!IMPORTANT]
> Bitte führe die untenstehenden Schritte **vor der Schulung** aus. Gerade fehlende Berechtigungen oder eingeschränkter Internet-Zugang lassen sich während der Schulung meist nicht kurzfristig beheben.

### Schritt 1: Klonen des Repositories

- Bitte dieses Repository von GitHub klonen: https://github.com/nilshartmann-workshops/2026-11-18-react

### Schritt 2: Backend

- Öffne ein Terminal im Wurzelverzeichnis des Repositories und installiere im Verzeichnis `backend` die Pakete:
  - ```bash
    cd backend
    npm install
    ```

### Schritt 3: Frontend

- Wechsle aus `backend` in das Verzeichnis `workspace` und installiere dort die Pakete:
  - ```bash
    cd ../workspace
    npm install
    ```

## Starten der Anwendung (zum Prüfen, ob alles funktioniert)

### Schritt 1: Backend

- Das Backend läuft auf Port **7200**, dieser Port muss bei dir frei sein.
- Öffne ein Terminal im Wurzelverzeichnis des Repositories und starte das Backend im Verzeichnis `backend`:
  - ```bash
    cd backend
    npm start
    ```
- Ruf zum Testen im Browser http://localhost:7200/api/plants auf. Es sollte eine Liste von JSON-Objekten zurückkommen.

### Schritt 2: Frontend

- Das Frontend läuft auf Port **3000**, dieser Port muss bei dir frei sein.
- Lass das Backend weiterlaufen. Öffne ein **zweites** Terminal im Wurzelverzeichnis des Repositories und starte das Frontend im Verzeichnis `workspace`:
  - ```bash
    cd workspace
    npm run dev
    ```
- Öffne http://localhost:3000. Du solltest eine (fast) leere Seite mit "Hello React" sehen.

Du kannst Backend und Frontend jetzt bis zur Schulung wieder beenden 🙂

## Übungen während des Workshops

Im Workshop zeige ich euch jedes Thema direkt bei mir im Editor (Live Coding). Nach jedem Thema macht ihr dann eine Übung, in der Regel genau das gleiche, was ihr vorher bei mir gesehen habt. Die Aufgabenbeschreibung veröffentliche ich nach jedem Thema im Gist zum Workshop.

"Meinen" Code committe und pushe ich nach jedem Thema auf den Branch `live_coding` in diesem Repository.

Um die Übung zu machen, gehst du also so vor:

- Lies die Aufgabenbeschreibung im Gist.
- Mach die Übung in deinem Workspace.
- Sieh dir meine Änderungen im Branch `live_coding` als "Spickzettel" an, wenn du mit einer Übung nicht weiterkommst.

Am besten öffnest du während des Workshops diese Tabs und lässt sie die ganze Zeit offen:

1. Den Gist mit den Aufgabenbeschreibungen
2. Die Commit-Ansicht von `live_coding`, nützlich für genau die Änderungen des letzten Themas: https://github.com/nilshartmann-workshops/2026-11-18-react/commits/live_coding/
3. Die Branch-Ansicht von `live_coding`, nützlich für die Übersicht: https://github.com/nilshartmann-workshops/2026-11-18-react/tree/live_coding

> [!TIP]
> **Wichtig:** Den `live_coding`-Branch brauchst du nicht bei dir lokal auszuchecken. Es ist am einfachsten, wenn du dir den Stand in GitHub ansiehst.

## Bei Fragen und Problemen

Wenn du Fragen oder Probleme bei der Installation hast, kannst du mich gerne kontaktieren. Meine Kontaktdaten findest du hier: https://nilshartmann.net/kontakt

Ich wünsche dir viel Spaß und Erfolg bei unserem Workshop!
