# Aircraft Scheduling App Elijah Lutay

- Assumption: the ability to reassign the aeroplane to a new identification flight
- Assumption: not persisting state
- Assumption: not dealing with dates (only one day)
- Assumption: There is an inconsistency in the description, saying that the airplanes cannot 'teleport 'without the flight. However, all aircraft are based in 'EGKK', but there are no operating flights from 'EGKK'. (as seen in API example). I am going to make an assumption that you first get a flight by its identification, and then filter by destination and time constraints.
- Assumption: clicking on new aircraft clears rotation for a new aircraft
- Assumption: only show flights that are permitted to use

## Launch:
- `yarn`
- `yarn dev`
