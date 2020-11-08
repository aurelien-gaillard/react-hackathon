# Hackathon React - Coding Bootcamp Praha

The final result is hosted [HERE](https://musing-ride-b6b9a1.netlify.app/).
Website realized in pair coding from 09h to 16h during Hackathon of Coding Bootcamp Praha.

## Assignment

Create an application that will fetch the top 5 flights from Prague to Valencia (Spain) departing the next day.

Use REST API documented here: https://docs.kiwi.com/#flights

### `Milestone 1`

- When the application is displayed, call REST API to fetch flights
- show some loading indicator that request for available flights is being made
- You should always display at least time of departure and arrival in local time, name of the origin and departure & price for the flight

### `Milestone 2`

- Enable user to select a destination from a dropdown with "Valencia", "Barcelona", "Madrid", "Milano" and "Athens" as possible options
- Enable user to select an origin (place of the departure) from a dropdown with "Prague", "Berlin", "Warsaw" and "Pardubice" as possible options
- show info that there are no flights available if no flights are found on the selected route.

### `Milestone 3`

- add checkbox "direct flights only" - if a user of the application check it, then search only for direct flights
- show number of stopovers in the results - e.g. flying to Valencia from Prague with a stopover in Frankfurt means 1 stopover, direct flight to Valencia from Prague has 0 stopovers.

### `Milestone 4`

- Enable user to fetch more than 5 flight - add pagination
- don't show "show more" button, if there are no more results

### `Milestone 5`

- Enable to search for the flight to any destination by adding a search field.
- Note you might need to fetch location first: https://docs.kiwi.com/#locations
