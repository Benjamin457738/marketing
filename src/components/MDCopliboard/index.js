import React, { useState } from "react";
import "./style/style.css";
import { Icon, Snackbar, Button } from "@mui/material";
import { green } from "@mui/material/colors";

const Clipboard = () => {
    const [text, setText] = useState("Copy your url!");
    const [openSnackbar, setOpenSnackbar] = useState(false);

    const handleCopyClick = async () => {
        try {
            await window.navigator.clipboard.writeText(text);
            setOpenSnackbar(true); // Show Snackbar on successful copy
        } catch (err) {
            console.error("Unable to copy to clipboard.", err);
            setOpenSnackbar(true); // You might want to set a different state to indicate failure
        }
    };

    const handleCloseSnackbar = () => {
        setOpenSnackbar(false);
    };

    return (
        <div className="App">
            <input
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button onClick={handleCopyClick}>
                <Icon>copy</Icon>
            </button>

            <Snackbar
                open={openSnackbar}
                autoHideDuration={3000}
                onClose={handleCloseSnackbar}
                message="Copied to clipboard!" // You can customize the message here based on success or failure
                action={
                    <Button color="inherit" onClick={handleCloseSnackbar}>
                        <Icon>close</Icon>
                    </Button>
                }
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }} // Set the position here
                ContentProps={{
                    sx: {
                        backgroundColor: 'limegreen', // Change this to your desired color
                        color: 'white', // Change text color if needed
                        // You could add more styles here
                    },
                }}
            />
        </div>
    );
};

export default Clipboard;