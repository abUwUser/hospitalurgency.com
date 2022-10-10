import "./HospitalEntry.css"
import { useEffect, useState } from "react";
import { IconType } from "react-icons"
import { MdEdit, MdEmojiPeople, MdPerson, MdTimer,  MdDirections } from "react-icons/md"

const HospitalEntry = ({hospital}: {hospital: Hospital}) => {
    const [randomizedTime, setRandomizedTime] = useState(hospital.eta);
    const [randomizedPeopleWaiting, setRandomizedPeopleWaiting] = useState(hospital.peopleWaiting);
    const [randomizedAttendancePerHour, setRandomizedAttendancePerHour] = useState(hospital.attendancePerHour);

    useEffect(() => {
        const addOrSub = (howMuch = 1, round = false) => {
            let random = Math.random() * howMuch
            if (round) random = Math.floor(random)
            if (Math.random() >= 0.5) random = - random
            return random
        }

        let stawp: NodeJS.Timer

        setTimeout(() => {
            stawp = setInterval(() => {
                setRandomizedTime(randomizedTime - addOrSub(500000))
                setRandomizedPeopleWaiting(randomizedPeopleWaiting - addOrSub(3, true))
                setRandomizedAttendancePerHour(randomizedAttendancePerHour - addOrSub(4, true))
            }, 5000);
        }, Math.floor(Math.random() * 2000))

        return () => clearInterval(stawp)
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return <div className="hospitalCard">
        <img className="image" src={hospital.icon} alt={hospital.name}/>
        <div className="content">
            <div className="eta">
                <div className="time">{Math.round(randomizedTime / 60000)} mins.</div>
                aproximados até o término da fila
            </div>
            <div className="info">
                <CardInformation icon={MdEdit} name={hospital.name} />
                <CardInformation icon={MdEmojiPeople} name={translateType(hospital.type)} />
                <CardInformation icon={MdPerson} name={`${randomizedPeopleWaiting} pessoas esperando atendimento`} />
                <CardInformation icon={MdTimer} name={`${randomizedAttendancePerHour} pessoas por hora`} />
            </div>
        </div>
        <div className="directions" onClick={() => window.open(`https://www.google.com/maps/dir/?api=1&destination=${hospital.coords[0]}%2C${hospital.coords[1]}`)}>
            <MdDirections />
            <span>Direções</span>
        </div>
    </div>
}

const CardInformation = ({ name, icon: Icon }: { name: string, icon: IconType }) => {
    return <div className="cardInformation">
        <Icon className="icon"/>
        <div>{name}</div>
    </div>
}

const translateType = (type: string) => {
    switch (type) {
        case "private": return "Privado"
        case "universitary": return "Universitário"
        default: return "Público"
    }
}

export default HospitalEntry