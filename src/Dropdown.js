import React, {useState} from "react";
import styled from "styled-components";

document.querySelector(".date-list");


const Content = styled.div`
    width: 10%;
    margin-left: 15%;
    border: 1px solid black;
    background-color: royalblue;
    background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    padding: 12px 16px;
    z-index: 1;
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 20%;
    margin-left: 40%;
`;

const ListItem = styled.li`
    border-bottom: 1px solid black;
    background-color: royalblue;
    width: 80%;
    list-style-type: none;
    margin-right: 25%;
    margin-bottom: 5px;
    padding-bottom: 5px;
`;


const Button = styled.button`
    border-radius: 15%;
    background-color: slategray;


`;

const Ul = styled.ul`
    background-color: royalblue;
    width: 100%;
    margin-right: 20%;
`;

const Dropdown = (props) => {
    const [open, setOpen] = useState(false);
    const toggle = () => setOpen(!open);
    console.log(props);
    return (
        <Container className="dropdown-container">
            <div className="dropdown-header" tabIndex={0} role="button" onClick={() => toggle(!open)}>
                <div className="dropdown-header_title">
                    <p className="dropdown-title">Select a date</p>
                </div>
                <div className="dropdown-action">
                    <p>{open ? "Close" : "Open"}</p>
                </div>
                </div>
                <Content className="date-list" className={open ? "open-dates" : "closed-dates"}>
                    <Ul>
                        {props.dates.map(date => {
                            return (
                                <ListItem key={date}>{date}
                                <Button onClick={() => {
                                    props.setDate({date})
                                }}>Select</Button>
                                </ListItem>
                                
                                )
                            })}
                    </Ul>
                 </Content>

        </Container>
    )

}

export default Dropdown;