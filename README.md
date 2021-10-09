We have the following architecture:
- PrincipalPage: decides whether to send the user to the following pages:
    a. StarshipsPage: can see mainly which are the starships in Star Wars. The principal file component is DetailStarships.jsx
    In this page you can look to:
        - FilmsSubDetail: where those starships appear in the fils
        - PilotsSubDetail: which pilots have those starships
    b. actorsPage: which are the actors in star wars. The principal file component is DetailActors.jsx
        - FilmSubDetail: same as before
        - StarshipSubDetail: which are the starships that have those actors
    Note the Sub detail, meaning that are the detail subjected to something.
- LoginPage: when the user is not authenticated

I have developed this architecture, to ensure the escalability (as filmsubsdetail is the same file in both pages).
