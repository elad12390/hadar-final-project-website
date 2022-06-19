import './About.scss';
import {AboutForm} from "../../components/AboutForm/AboutForm";
import OpenAboutIcon from '../../assets/icons/icon-opening-about.svg';
import {Language} from "../../components/LanguageSelector/LanguageSelector";
import {useEffect, useMemo} from "react";
import {useWindowSize} from "../../utils/hooks/useWindowSize";
import FormImg from '../../assets/images/form-img.png';
import {useIsDesktop} from "../../utils/hooks/useIsDesktop";

export const About = () => {
    const title = `I Am the vocalist of Li’ed - \nA Progressive Symphonic Metal band.
I created a visual interpretation to our upcoming album - Dybbuk.`

    const subtitle = `A Dybbuk is a disembodied human spirit in the jewish folklore that, because of former sins, wanders restlessly until it finds a body of a living person to possess.\n\n`

    const subsubtitle = `
The story takes place in an ancient Jewish community. 
A lonly girl commits suicide. Due to that, she's banned from entering the afterlife. Her soul wanders upon land, untill She possesses another girl. The host girl twitches in pain, drawing the intention of the Jewish community that eventually calls to the “Baal Shem”, a rabbi, to perform an exorcism. Alone and dehumanized, the host girl kills herself out of shame, which brings our story to the beginning  -  an endless sycle of misery and tragedy. `

    // fix weird bug when scrolling doesn't work.
    useEffect(() => {
        const listener = (e: any) => {
            e.preventDefault();
            const about = document.querySelector('.about');
            if (!about) return;
            about.scrollTop += e.deltaY;
        }
        document.addEventListener('wheel', listener, {passive: false})
        return () => document.removeEventListener('wheel', listener)
    }, [])

    const isDesktop = useIsDesktop();

    const windowSize = useWindowSize();

    const minWindowSize = useMemo(() => Math.min(windowSize.width as number, windowSize.height as number), [windowSize.width, windowSize.height]);

    const isSmallerCircle = minWindowSize <  900 || (windowSize.width ?? 0) < 1700;

    const size = isDesktop ? 500 : 300;
    return <div className={`about ${isDesktop ? '' : 'mobile'}`}>
        <div className={"about-container " + (isSmallerCircle ? 'smaller' : '')}>
            <div className={'title-container'}>
                <div className="title">
                    <div className={'title-first-letter'}>{title[0]}</div>
                    <div className={'title-content'}>{title.slice(2)}</div>
                </div>
            </div>
            <div className={'subtitle-container'}>
                <div className={'arrow'}>
                    <img src={OpenAboutIcon} className="icon" alt={'opening-icon'}/>
                </div>
                <div className={'text'}>
                    <p className={'subtitle'}>{subtitle}</p>
                    <p className={'subsubtitle'}>{subsubtitle}</p>
                </div>
            </div>
            <div className={'form-and-photo'}>
                <AboutForm
                    language={Language.ENGLISH}
                    className="form"
                    size={size}
                    isSmaller={isSmallerCircle}
                />
                <img src={FormImg} className={'photo'}/>
            </div>

            <div className="spacer"/>
        </div>
    </div>
}
