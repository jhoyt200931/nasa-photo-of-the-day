import React, {useState} from "react";

document.querySelector(".date-list");


const Dropdown = (props) => {
    const [open, setOpen] = useState(false);
    const toggle = () => setOpen(!open);
    console.log(props);
    return (
        <div className="dropdown-container">
            <div className="dropdown-header" tabIndex={0} role="button" onClick={() => toggle(!open)}>
                <div className="dropdown-header_title">
                    <p className="dropdown-title">Select a date</p>
                </div>
                <div className="dropdown-action">
                    <p>{open ? "Close" : "Open"}</p>
                </div>
                </div>
                <div className="date-list" className={open ? "open-dates" : "closed-dates"}>
                    <ul>
                        {props.dates.map(date => {
                            return (
                                <li key={date}>{date}
                                <button onClick={() => {
                                    props.setDate({date})
                                }}>Select</button>
                                </li>
                                
                                )
                            })}
                    </ul>
                 </div>

        </div>
    )

}

export default Dropdown;