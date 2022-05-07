import {CSSProperties} from "react";
import './AboutForm.scss';
import {Button, Input, TextField} from "@mui/material";

export interface IAboutFormProps {
    style?: CSSProperties;
    className?: string;
}

export const AboutForm = (props: IAboutFormProps) => {
    return <form
        style={props.style}
        className={`about-form-container ${props.className}`}>
        <label>Get notified when the album will come out:</label>
        <input placeholder="Whats your mail, metalhead?"/>
        <Button
            variant="contained"
            className="submit">{'Submit'}</Button>
    </form>
}
