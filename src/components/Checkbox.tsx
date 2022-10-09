import React from "react"
import './Checkbox.css';

interface Props {
    name?: string
    checked: boolean
    onChange: (newVal: boolean) => void
} 

const Checkbox = (props: Props) => {
    const [checked, setChecked] = React.useState(props.checked)

    return <div className="checkbox">
        <input type="checkbox"
            defaultChecked={checked}
            onChange={() => {
                setChecked(!checked)
                props.onChange(!checked)
            }}
        />
        {props.name}
    </div>
}

export default Checkbox