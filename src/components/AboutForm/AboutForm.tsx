import {CSSProperties, useCallback, useState} from "react";
import './AboutForm.scss';
import {Button} from "@mui/material";
import {Language} from "../LanguageSelector/LanguageSelector";
import axios from 'axios';
import {useIsDesktop} from "../../utils/hooks/useIsDesktop";

export interface IAboutFormProps {
    isSmaller: boolean;
    size: number;
    style?: CSSProperties;
    language: Language;
    className?: string;
}

export const AboutForm = (props: IAboutFormProps) => {
    console.log(props.isSmaller);
    const [sentEmail, setSentEmail] = useState(false);
    const [email, setEmail] = useState<string>('');
    const isDesktop = useIsDesktop();

    const submit = useCallback((event) => {
        event.preventDefault();

        axios.post(`${process.env.REACT_APP_SERVER_URL}/email`, { email }).then((result) => console.log(result));
        // setSentEmail(true);
    }, [email])

    const english = {
        label: 'Want to listen to the full album?',
        secondLabel: `we can update you on the release-`,
        placeholder: 'E-mail?',
        submit: 'Submit',
        dir: 'ltr',
        thankYou: 'THANK YOU !'
    }

    const current = english;

    return <form
        style={{width: props.size, height: props.size, ...props.style}}
        onSubmit={submit}
        className={`about-form-container ${props.className} ` + (props.isSmaller ? 'smaller ' : '') + (isDesktop ? '' : 'mobile ')}>
        <div className={`inner-container ${sentEmail ? 'thank-you' :''}`} dir={current.dir}>
            {sentEmail
                ? <>
                    <label className="thank-you">{current.thankYou}</label>
                </> : <>
                    <div className={'labels'}>
                        <span className={'first-label'}>{current.label}</span>
                        <span className={'second-label'}>{current.secondLabel}</span>
                    </div>
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
