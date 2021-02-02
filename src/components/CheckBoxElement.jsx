import React from "react";
const CheckBoxElement = ({name}) => {
    return (
    <React.Fragment>
        <input type="checkbox" name={name} id={name}  onChange={(event)=>{
            console.log(event.target.checked);
        }}/>
        <label htmlFor={name} className="ml-2 text-capitalize"
        style={MenuColor}>
           {name}
        </label>
        <br />
    </React.Fragment>);
};
const MenuColor = {
    color: 'rgb(226, 80, 31)',
    fontWeight: 'bold'
}
export default CheckBoxElement;