import {useReducer, useState} from 'react';
import defaultFilters from "./constants/filters"
import hospitals from './constants/hospitals';
import filterHospitals from './utils/filter';
import './App.css';
import {MdFilterAlt} from "react-icons/md"
import FilterPopout from './components/FilterPopout';

function App() {
    const [filter, setFilter] = useState(defaultFilters)
    const [, forceUpdate] = useReducer(c => !c, true)

    return <>
        <div>hospitalurgency.com <MdFilterAlt /></div>
        <FilterPopout filter={filter} onFilterChange={(newFilter) => {
            setFilter(newFilter)
            forceUpdate()
            // console.log(filter)
        }} />
        <HospitalList hospitalList={filterHospitals(hospitals, filter)} />
    </>;
}

function HospitalList({ hospitalList }: {hospitalList: Hospital[]}) {
    return <>
        {hospitalList.map((hospital) => <a href={`https://www.google.com/maps/dir/?api=1&destination=${hospital.coords[0]}%2C${hospital.coords[1]}`}>{hospital.name}</a>)}
    </>
}

export default App;
