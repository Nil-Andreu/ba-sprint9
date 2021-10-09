We have the following architecture:
- PrincipalPage: decides whether to send the user to the following pages:
    a. DetailStarships: can see mainly which are the starships in Star Wars
    In this page you can look to:
        - FilmsSubDetail: where those starships appear in the fils
        - PilotsSubDetail: which pilots have those starships
    b. DetailActors: which are the actors in star wars
        - FilmSubDetail: same as before
        - StarshipSubDetail: which are the starships that have those actors
    Note the Sub detail, meaning that are the detail subjected to something.
- LoginPage: when the user is not authenticated

I have developed this architecture, to ensure the escalability (as filmsubsdetail is the same file in both pages).
