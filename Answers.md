- [x] **Explain the differences between `client-side routing` and `server-side routing`.**

Client-side routing pulls the entire site data down and allows for instantaneous loads between page.
Server-side routing only pulls down data for the page you are going to, this requires a load time between pages.

- [x] **Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers.**

C: POST, R: GET, U: PUT (technically PATCH), D: DELETE

PUT method is intended to replace the entire resource document. E.g. you cannot send partial `{ name: 'New Name' }`
You are meant to send `{ name: 'New Name', age: 32, }`.

Whereas PATCH is intended for partial replacement of the resource document

- [x] **Mention three tools we can use to make AJAX requests.**

Not entirely sure what this question means.. I'm going to assume:

Fetch API, Axios, jQuery (Request, Superagent)