export default [
    {
        name: "Hospital 1",
        icon: "https://www.colegioweb.com.br/wp-content/uploads/2016/10/Dia-do-Hospital-1.jpg",
        type: "private",
        coords: [-15.730069, -47.868752],
        eta: 1.8e+6,
        peopleWaiting: 22,
        attendancePerHour: 44,

        hasICU: true,
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
        icon: "https://thumbs.dreamstime.com/b/edif%C3%ADcio-do-hospital-59693686.jpg",
        type: "public",
        coords: [-15.758458, -47.940946],
        eta: 2.7e+6,
        peopleWaiting: 31,
        attendancePerHour: 29,

        hasICU: true,
        hasAvaiableSurgeries: true,

        targetAudience: {
            children: true,
            adults: false,
            seniors: false,
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
            orthopedist: false,
            psychiatrist: false,
            radiologist: true
        }
    }
] as unknown as Hospital[]