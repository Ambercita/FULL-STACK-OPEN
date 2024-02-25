# Sequence diagram for adding a new note in SPA

```mermaid
sequenceDiagram
    participant user
    participant browser
    participant server

    user ->> browser: Writes a note and clicks save

    browser ->> browser: The note is added to the list of notes

    browser->>user: The new note is now visible on the page

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    Note right of browser: the payload of the request is a json with {"content": [text of the note],"date": [timestamp]}
    activate server

    server->>browser: 201 created success response
```
