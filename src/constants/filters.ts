export default {
    hasICU: true,
    hasAvaiableSurgeries: true,

    targetAudience: {
        children: false,
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
        dermatologist: false,
        gynecologist: false,
        infectologist: false,
        neurologist: false,
        ophthalmologist: false,
        oncologist: false,
        orthopedist: false,
        psychiatrist: false,
        radiologist: false
    }
} as HospitalFilter