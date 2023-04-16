import "../style/RequestBlock.master.style.css"
import { useEffect, useState } from "react";

function RequestBlock(): JSX.Element {
    const options = [
        {
            label: "Apple",
            value: "apple",
        },
        {
            label: "Mango",
            value: "mango",
        },
        {
            label: "Banana",
            value: "banana",
        },
        {
            label: "Pineapple",
            value: "pineapple",
        },
    ];

    

    return (
        <div className="requestBlock">
            <div className="reqInputBlock">
                <select>
                    {options.map((option) => (
                        <option value={option.value}>{option.label}</option>
                    ))}
                </select>
            </div>
        </div>
    )
}
export default RequestBlock