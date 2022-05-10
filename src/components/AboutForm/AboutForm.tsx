import {CSSProperties, useCallback, useState} from "react";
import './AboutForm.scss';
import {Button} from "@mui/material";
import {Language} from "../LanguageSelector/LanguageSelector";
import axios from 'axios';

export interface IAboutFormProps {
    style?: CSSProperties;
    language: Language;
    className?: string;
}

export const AboutForm = (props: IAboutFormProps) => {
    console.log(props.style);
    const [sentEmail, setSentEmail] = useState(false);
    const [email, setEmail] = useState<string>('');

    const submit = useCallback((event) => {
        event.preventDefault();

        axios.post(`${process.env.REACT_APP_SERVER_URL}/email`, { email }).then((result) => console.log(result));
        // setSentEmail(true);
    }, [email])

    const english = {
        label: 'Want to listen to the full album? we can update you on the release-',
        placeholder: 'E-mail?',
        submit: 'Submit',
        dir: 'ltr',
        thankYou: 'THANK YOU !'
    }

    const hebrew = {
        label: `רוצים לשמוע ראשונים את האלבום המלא? 
נעדכן אתכם כשהוא יצא -`,
        placeholder: 'E-mail?',
        submit: 'שלח',
        dir: 'rtl',
        thankYou: 'תודה !'
    }

    const current = props.language === Language.ENGLISH ? english : hebrew;

    return <form
        style={{...props.style}}
        onSubmit={submit}
        className={`about-form-container ${props.className}`}>
        <div className={`inner-container ${sentEmail ? 'thank-you' :''}`} dir={current.dir}>
            {sentEmail
                ? <>
                    <label className="thank-you">{current.thankYou}</label>
                </> : <>
                    <label>{current.label}</label>
                    <input dir="ltr" placeholder={current.placeholder} type={"email"} onChange={(ev) => setEmail(ev.target.value)}/>
                    <Button
                        variant="outlined"
                        className="submit"
                        type='submit'>{current.submit}</Button>
                </>
            }
        </div>
    </form>
}
