import filter from "./filter"
import hospitals from "../constants/hospitals"

test('checks filtering', () => {
    const filteredHospitals = filter(hospitals)
    console.log(filteredHospitals)
    expect(filteredHospitals).toHaveLength(1)
});