import Checkbox from "./Checkbox"
import './FilterPopout.css';

interface Props {
    filter: HospitalFilter,
    onFilterChange: (filter: HospitalFilter) => void
}

const FilterPopout = ({ filter, onFilterChange }: Props) => {
    return <div className="popout">
        <Checkbox checked={filter.hasICU} onChange={(val) => {
            filter.hasICU = val
            onFilterChange(filter)
        }} name="UTI Disponível" />
        <Checkbox checked={filter.hasAvaiableSurgeries} onChange={(val) => {
            filter.hasAvaiableSurgeries = val
            onFilterChange(filter)
        }} name="Salas de cirurgias disponíveis" />

        <div className="title">Público-alvos</div>
        <div className="content">
            <Checkbox checked={filter.targetAudience.children} onChange={(val) => {
                filter.targetAudience.children = val
                onFilterChange(filter)
            }} name="Crianças" />
            <Checkbox checked={filter.targetAudience.adults} onChange={(val) => {
                filter.targetAudience.adults = val
                onFilterChange(filter)
            }} name="Adultos" />
            <Checkbox checked={filter.targetAudience.seniors} onChange={(val) => {
                filter.targetAudience.seniors = val
                onFilterChange(filter)
            }} name="Idosos" />
        </div>

        <div className="title">Tipos de urgência</div>
        <div className="content">
            <Checkbox checked={filter.urgencyAttendance.emergency} onChange={(val) => {
                filter.urgencyAttendance.emergency = val
                onFilterChange(filter)
            }} name="Emergência" />
            <Checkbox checked={filter.urgencyAttendance.veryUrgent} onChange={(val) => {
                filter.urgencyAttendance.veryUrgent = val
                onFilterChange(filter)
            }} name="Muito urgente" />
            <Checkbox checked={filter.urgencyAttendance.urgent} onChange={(val) => {
                filter.urgencyAttendance.urgent = val
                onFilterChange(filter)
            }} name="Urgente" />
            <Checkbox checked={filter.urgencyAttendance.littleUrgent} onChange={(val) => {
                filter.urgencyAttendance.littleUrgent = val
                onFilterChange(filter)
            }} name="Pouco urgente" />
            <Checkbox checked={filter.urgencyAttendance.notUrgent} onChange={(val) => {
                filter.urgencyAttendance.notUrgent = val
                onFilterChange(filter)
            }} name="Não urgente" />
        </div>

        <div className="title">Equipamentos</div>
        <div className="content">
            <Checkbox checked={filter.equipaments.anesthesiaMachine} onChange={(val) => {
                filter.equipaments.anesthesiaMachine = val
                onFilterChange(filter)
            }} name="Anestesia" />
            <Checkbox checked={filter.equipaments.defibrillators} onChange={(val) => {
                filter.equipaments.defibrillators = val
                onFilterChange(filter)
            }} name="Desfribiladores" />
            <Checkbox checked={filter.equipaments.breathing} onChange={(val) => {
                filter.equipaments.breathing = val
                onFilterChange(filter)
            }} name="Respirador" />
        </div>

        <div className="title">Doutor</div>
        <div className="content">
            <Checkbox checked={filter.doctors.dentist} onChange={(val) => {
                filter.doctors.dentist = val
                onFilterChange(filter)
            }} name="Dentista" />
            <Checkbox checked={filter.doctors.dermatologist} onChange={(val) => {
                filter.doctors.dermatologist = val
                onFilterChange(filter)
            }} name="Dermatologista" />
            <Checkbox checked={filter.doctors.gynecologist} onChange={(val) => {
                filter.doctors.gynecologist = val
                onFilterChange(filter)
            }} name="Ginecologista" />
            <Checkbox checked={filter.doctors.infectologist} onChange={(val) => {
                filter.doctors.infectologist = val
                onFilterChange(filter)
            }} name="Infectologista" />
            <Checkbox checked={filter.doctors.neurologist} onChange={(val) => {
                filter.doctors.neurologist = val
                onFilterChange(filter)
            }} name="Neurologista" />
            <Checkbox checked={filter.doctors.ophthalmologist} onChange={(val) => {
                filter.doctors.ophthalmologist = val
                onFilterChange(filter)
            }} name="Oftamologista" />
            <Checkbox checked={filter.doctors.oncologist} onChange={(val) => {
                filter.doctors.oncologist = val
                onFilterChange(filter)
            }} name="Oncologista" />
            <Checkbox checked={filter.doctors.orthopedist} onChange={(val) => {
                filter.doctors.orthopedist = val
                onFilterChange(filter)
            }} name="Ortopedista" />
            <Checkbox checked={filter.doctors.psychiatrist} onChange={(val) => {
                filter.doctors.psychiatrist = val
                onFilterChange(filter)
            }} name="Psiquiatra" />
            <Checkbox checked={filter.doctors.radiologist} onChange={(val) => {
                filter.doctors.radiologist = val
                onFilterChange(filter)
            }} name="Radiologista" />
        </div>
    </div>
}

export default FilterPopout