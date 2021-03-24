import React from "react"


export default function SelectSkin({ skin, setSkin }) {
    return (
        <span>
            <select value={skin} onChange={(event) => setSkin(event.target.value)}>
                <option value={null}>Foglio di carta</option>
                <option value={"rygblue"}>Blu reale</option>
            </select>
        </span>
    )
}
