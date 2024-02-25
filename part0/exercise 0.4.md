# Sequence diagram for adding a new note

```mermaid
sequenceDiagram
    participant user
    participant browser
    participant server

    user ->> browser: Writes a note and clicks save

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note 
    Note right of browser: the payload of the request is a Form Data with note: [text of the note]
    activate server

    server->>browser: 302 found success response

    browser ->> browser: Does a full refresh of the page

    browser->>user: The new note is now visible on the page
```
