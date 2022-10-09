declare interface HospitalFilter {
    hasICU: boolean
    hasAvaiableSurgeries: boolean

    targetAudience: {
        children: boolean
        adults: boolean
        seniors: boolean
    }

    urgencyAttendance: {
        emergency: boolean
        veryUrgent: boolean
        urgent: boolean
        littleUrgent: boolean
        notUrgent: boolean
    }

    equipaments: {
        defibrillators: boolean
        anesthesiaMachine: boolean
        breathing: boolean
    }

    doctors: {
        dentist: boolean
        dermatologist: boolean
        gynecologist: boolean
        infectologist: boolean
        neurologist: boolean
        ophthalmologist: boolean
        oncologist: boolean
        orthopedist: boolean
        psychiatrist: boolean
        radiologist: boolean
    }
}

declare interface Hospital extends HospitalFilter {
    name: string
    type: "public" | "private" | "universitary"
    coords: [x: string, y: string]
    eta: number
    peopleWaiting: number
    attendancePerHour: number
}