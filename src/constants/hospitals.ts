export default [
    {
        name: "Hospital 1",
        type: "private",
        coords: [-15.730069, -47.868752],
        eta: 18000000,
        peopleWaiting: 22,
        attendancePerHour: 44,

        hasICU: false,
        hasAvaiableSurgeries: true,

        targetAudience: {
            children: true,
            adults: true,
            seniors: true,
        },

        urgencyAttendance: {
            emergency: true,
            veryUrgent: true,
            urgent: true,
            littleUrgent: true,
            notUrgent: true
        },

        equipaments: {
            defibrillators: true,
            anesthesiaMachine: true,
            breathing: true
        },

        doctors: {
            dentist: false,
            dermatologist: true,
            gynecologist: true,
            infectologist: true,
            neurologist: true,
            ophthalmologist: true,
            oncologist: true,
            orthopedist: true,
            psychiatrist: true,
            radiologist: true
        }
    },
    {
        name: "Hospital 2",
        type: "public",
        coords: [-15.758458, -47.940946],
        eta: 27000000,
        peopleWaiting: 31,
        attendancePerHour: 29,

        hasICU: true,
        hasAvaiableSurgeries: false,

        targetAudience: {
            children: true,
            adults: true,
            seniors: true,
        },

        urgencyAttendance: {
            emergency: true,
            veryUrgent: true,
            urgent: true,
            littleUrgent: true,
            notUrgent: true
        },

        equipaments: {
            defibrillators: true,
            anesthesiaMachine: true,
            breathing: true
        },

        doctors: {
            dentist: false,
            dermatologist: true,
            gynecologist: true,
            infectologist: true,
            neurologist: true,
            ophthalmologist: true,
            oncologist: true,
            orthopedist: true,
            psychiatrist: true,
            radiologist: true
        }
    }
] as unknown as Hospital[]