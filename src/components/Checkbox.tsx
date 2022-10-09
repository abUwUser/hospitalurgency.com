import React from "react"

interface Props {
    name?: string
    checked: boolean
    onChange: (newVal: boolean) => void
}

export default (props: Props) => {
    const [checked, setChecked] = React.useState(props.checked)

    return <label>
        <input type="checkbox"
            defaultChecked={checked}
            onChange={() => {
                setChecked(!checked)
                props.onChange(!checked)
            }}
        />
        {props.name}
    </label>
}