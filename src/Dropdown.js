import React, {useState} from "react";
import styled from "styled-components";

document.querySelector(".date-list");



const Container = styled.div`
display: flex;

flex-direction: column;
justify-content: center;
width: 20%;
margin-left: 40%;

`;
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

const ListItem = styled.li`
    border-bottom: 1px solid black;
    
    width: 80%;
    list-style-type: none;
    margin-bottom: 5px;
    padding-bottom: 5px;
`;


const Button = styled.button`
    border-radius: 15%;
    background-color: slategray;
    
`;

const Ul = styled.ul`
    width: 100%;
    box-sizing: border-box;
    margin-right: 10%;
    text-align: center;
    
`;

const Click = styled.div`
    font-size: 1.3em;
    font-weight: bold;
`;


const Dropdown = (props) => {
    const [open, setOpen] = useState(false);
    const toggle = () => setOpen(!open);
    const dates = ["2020-07-28", "2020-07-27", "2020-07-26", "2020-07-25", "2020-07-24"];
    return (
        <Container className="dropdown-container">
            <div className="dropdown-header" tabIndex={0} role="button" onClick={() => toggle(!open)}>
                <Click className="dropdown-header_title">
                    <p className="dropdown-title">Select a date</p>
                </Click>
                <Click className="dropdown-action">
                    <p>{open ? "Close" : "Open"}</p>
                </Click>
                </div>
                <Content className="date-list" className={open ? "open-dates" : "closed-dates"}>
                    <Ul>
                        {dates.map(date => {
                            return (
                                <ListItem key={date}>{date}
                                <Button onClick={() => {
                                     props.setDate(date)
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