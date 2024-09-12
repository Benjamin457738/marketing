import { Input } from "@mui/material";
import MDButton from "components/MDButton";
import React from "react";

const MDUpdate = () => {

    return (
        <>
            <h2 style={{ "text-align": "center" }}>Currently User Matrix : { }</h2><br /><hr /><br />
            <h2 style={{ "text-align": "center" }}>Matrix Update</h2><br />
            <div style={{ "display": "flex", "justifyContent": "center" }}><h3 style={{ "text-align": "center", "color": "black", "width": "150px", "text-align": "right" }}>Matrix II:$</h3><Input value={29.44} style={{ "width": "100px", "padding-left": "10px" }} /><MDButton size="small" variant="outlined" color="success" children="Update" style={{ "margin-left": "5%" }} /></div><br />
            <div style={{ "display": "flex", "justifyContent": "center" }}><h3 style={{ "text-align": "center", "color": "black", "width": "150px", "text-align": "right" }}>Matrix ECN:$</h3><Input value={84.99} style={{ "width": "100px", "padding-left": "10px" }} /><MDButton size="small" variant="outlined" color="success" children="Update" style={{ "margin-left": "5%" }} disabled /></div><br />
            <div style={{ "display": "flex", "justifyContent": "center" }}><h3 style={{ "text-align": "center", "color": "black", "width": "150px", "text-align": "right" }}>Matrix Boost:$</h3><Input value={240.99} style={{ "width": "100px", "padding-left": "10px" }} /><MDButton size="small" variant="outlined" color="success" children="Update" style={{ "margin-left": "5%" }} disabled /></div><br />
            <div style={{ "display": "flex", "justifyContent": "center" }}><h3 style={{ "text-align": "center", "color": "black", "width": "150px", "text-align": "right" }}>Double Matrix:$</h3><Input value={540.99} style={{ "width": "100px", "padding-left": "10px" }} /><MDButton size="small" variant="outlined" color="success" children="Update" style={{ "margin-left": "5%" }} disabled /></div><br />
            <h4 style={{ "text-align": "center", "color": "gray" }}>When users buy 1,000 one of matrices, the price of the matrix increases by $0.5</h4>
        </>
    );
};

export default MDUpdate;