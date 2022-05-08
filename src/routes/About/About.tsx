import './About.scss';
import {AboutForm} from "../../components/AboutForm/AboutForm";
import OpenAboutIcon from '../../assets/icons/icon-opening-about.svg';
import CloseAboutIcon from '../../assets/icons/icon-closing-about.svg';
export const About = () => {
    const paragraphs = [
        `I am the vocalist of Li’ed- a Progressive Symphonic metal band. In my final project, I decided to create a visual interpretation to our upcoming concept album- DYBBUK.`,
        `A Dybbuk, in the jewish folkolore, is a disembodied human spirit that, because of former sins, wanders restlessly until it finds a haven in the body of a living person `,
        `The story takes place in an ancient Jewish community. A lost girl commits suicide. Due to that, she's banned from entering the afterlife. Her soul wanders upon land, eger to find another living person by using its body as a host. She possesses another girl, and the possesed one twitches in pain, drawing the intention of the Jewish community that eventually calls to the “Baal Shem”, a rabbi, to perform an exorcism. Alone and dehumanized, the second girl kills herself out of shame, which brings our story to the beginning-\nan endless cycle of misery and tragedy.`,
        `In this project you can experience the story by listening to a short piece from each song, and watching its mini-clip.`
    ]


    return <>
        <div className="about-container">
            <div className="title">
                <img src={OpenAboutIcon} className="icon" alt={'opening-icon'}/>
                <div className="content">About</div>
                <img src={CloseAboutIcon} className="icon" alt={'closing-icon'}/>
            </div>
            {paragraphs.map((paragraph, idx) => <p key={idx} className={'description'}>{paragraph}</p> )}
            <div className="spacer"/>
            <AboutForm className="form"/>
        </div>
    </>
}
