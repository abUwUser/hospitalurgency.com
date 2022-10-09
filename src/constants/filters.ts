export default {
    hasICU: false,
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
} as HospitalFilter