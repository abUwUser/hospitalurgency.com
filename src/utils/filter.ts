import filters from "../constants/filters"

export default (hospitalList: Hospital[], searchFor: HospitalFilter = filters) => {
    const filteredHospitalList = hospitalList.filter(hospital => {
        let ret = true
        for (const [aKey, aVal] of Object.entries(searchFor)) {
            if (ret === false) break
            if (aVal === false) continue
            else if (typeof aVal === "object") {
                for (const [bKey, bVal] of Object.entries(aVal)) {
                    if(bVal === false) continue
                    //@ts-ignore
                    if (bVal !== hospital[aKey][bKey]) {
                        ret = false
                        break
                    }
                }
            }
            //@ts-ignore
            else if (aVal !== hospital[aKey]) {
                ret = false
                break
            }
        }
        return ret
    })
    return filteredHospitalList
}