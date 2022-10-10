import {useReducer, useState} from 'react';
import defaultFilters from "./constants/filters"
import hospitals from './constants/hospitals';
import filterHospitals from './utils/filter';
import './App.css';
import {MdFilterAlt} from "react-icons/md"
import FilterPopout from './components/FilterPopout';
import HospitalEntry from './components/HospitalEntry';

function App() {
    const [filter, setFilter] = useState(defaultFilters)
    const [popoutVisibility, setPopoutVisibility] = useState(false)
    const [, forceUpdate] = useReducer(c => !c, true)

    return <>
        <div className='header'>
            <div className='title'>hospitalurgency.com</div>
            <MdFilterAlt className='filterIcon' onClick={() => setPopoutVisibility(!popoutVisibility)}/>
        </div>
        {popoutVisibility && <div className='popoutOutliner' onClick={(e) => setPopoutVisibility(false)}>
            <div onClick={e => e.stopPropagation()}>
                <FilterPopout filter={filter} onFilterChange={(newFilter) => {
                    setFilter(newFilter)
                    forceUpdate()
                    // console.log(filter)
                }} />
            </div>
        </div>}
        <HospitalList hospitalList={filterHospitals(hospitals, filter)} />
    </>;
}

function HospitalList({ hospitalList }: {hospitalList: Hospital[]}) {
    return <>
        {hospitalList.map((hospital) => <HospitalEntry hospital={hospital} />)}
    </>
}

export default App;
