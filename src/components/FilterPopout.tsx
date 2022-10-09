import Checkbox from "./Checkbox"

interface Props {
    filter: HospitalFilter,
    onFilterChange: (filter: HospitalFilter) => void
}

export default ({ filter, onFilterChange }: Props) => {
    return <>
        <Checkbox checked={filter.hasICU} onChange={(val) => {
            filter.hasICU = val
            onFilterChange(filter)
        }} name="Has ICU"/>
        <Checkbox checked={filter.hasAvaiableSurgeries} onChange={(val) => {
            filter.hasAvaiableSurgeries = val
            onFilterChange(filter)
        }} name="Has Avaiable Surgeries" />

        <div>Attends to</div>
        <Checkbox checked={filter.targetAudience.children} onChange={(val) => {
            filter.targetAudience.children = val
            onFilterChange(filter)
        }} name="Children" />
        <Checkbox checked={filter.targetAudience.adults} onChange={(val) => {
            filter.targetAudience.adults = val
            onFilterChange(filter)
        }} name="Adults" />
        <Checkbox checked={filter.targetAudience.seniors} onChange={(val) => {
            filter.targetAudience.seniors = val
            onFilterChange(filter)
        }} name="Seniors" />

        <div>Attends to urgency type of</div>
        <Checkbox checked={filter.urgencyAttendance.emergency} onChange={(val) => {
            filter.urgencyAttendance.emergency = val
            onFilterChange(filter)
        }} name="Emergency" />
        <Checkbox checked={filter.urgencyAttendance.veryUrgent} onChange={(val) => {
            filter.urgencyAttendance.veryUrgent = val
            onFilterChange(filter)
        }} name="Very urgent" />
        <Checkbox checked={filter.urgencyAttendance.urgent} onChange={(val) => {
            filter.urgencyAttendance.urgent = val
            onFilterChange(filter)
        }} name="Urgent" />
        <Checkbox checked={filter.urgencyAttendance.littleUrgent} onChange={(val) => {
            filter.urgencyAttendance.littleUrgent = val
            onFilterChange(filter)
        }} name="Not much urgent" />
        <Checkbox checked={filter.urgencyAttendance.notUrgent} onChange={(val) => {
            filter.urgencyAttendance.notUrgent = val
            onFilterChange(filter)
        }} name="Not urgent at all" />

        <div>Has equipaments</div>
        <Checkbox checked={filter.equipaments.anesthesiaMachine} onChange={(val) => {
            filter.equipaments.anesthesiaMachine = val
            onFilterChange(filter)
        }} name="Anesthesia Machine" />
        <Checkbox checked={filter.equipaments.breathing} onChange={(val) => {
            filter.equipaments.breathing = val
            onFilterChange(filter)
        }} name="Breathing" />
        <Checkbox checked={filter.equipaments.defibrillators} onChange={(val) => {
            filter.equipaments.defibrillators = val
            onFilterChange(filter)
        }} name="Defibrillators" />

        <div>Has doctor</div>
        <Checkbox checked={filter.doctors.dentist} onChange={(val) => {
            filter.doctors.dentist = val
            onFilterChange(filter)
        }} name="Dentist" />
        <Checkbox checked={filter.doctors.dermatologist} onChange={(val) => {
            filter.doctors.dermatologist = val
            onFilterChange(filter)
        }} name="Dermatologist" />
        <Checkbox checked={filter.doctors.gynecologist} onChange={(val) => {
            filter.doctors.gynecologist = val
            onFilterChange(filter)
        }} name="Gynecologist" />
        <Checkbox checked={filter.doctors.infectologist} onChange={(val) => {
            filter.doctors.infectologist = val
            onFilterChange(filter)
        }} name="Infectologist" />
        <Checkbox checked={filter.doctors.neurologist} onChange={(val) => {
            filter.doctors.neurologist = val
            onFilterChange(filter)
        }} name="Neurologist" />
        <Checkbox checked={filter.doctors.ophthalmologist} onChange={(val) => {
            filter.doctors.ophthalmologist = val
            onFilterChange(filter)
        }} name="Ophthalmologist" />
        <Checkbox checked={filter.doctors.oncologist} onChange={(val) => {
            filter.doctors.oncologist = val
            onFilterChange(filter)
        }} name="Oncologist" />
        <Checkbox checked={filter.doctors.orthopedist} onChange={(val) => {
            filter.doctors.orthopedist = val
            onFilterChange(filter)
        }} name="Orthopedist" />
        <Checkbox checked={filter.doctors.psychiatrist} onChange={(val) => {
            filter.doctors.psychiatrist = val
            onFilterChange(filter)
        }} name="Psychiatrist" />
        <Checkbox checked={filter.doctors.radiologist} onChange={(val) => {
            filter.doctors.radiologist = val
            onFilterChange(filter)
        }} name="Radiologist" />
    </>
}