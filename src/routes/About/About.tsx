import './About.scss';
import {AboutForm} from "../../components/AboutForm/AboutForm";
import OpenAboutIcon from '../../assets/icons/icon-opening-about.svg';
import CloseAboutIcon from '../../assets/icons/icon-closing-about.svg';
export const About = () => {
    return <>
        <div className="about-container">
            <div className="title">
                <img src={OpenAboutIcon} className="icon"></img>
                <div className="content">About</div>
                <img src={CloseAboutIcon} className="icon"></img>
            </div>
            <p className="description">I am the vocalist of Li’ed- a Progressive Symphonic metal band. In my final project i decided to create a visual in tepetation to our upcoming concept album- DYBBUK.</p>
            <p className="description">The story takes insperation from blah blah blah blah blah blah blah blah blah blah blah blah</p>
            <p className="description">כאן כתוב בעברית על האלבום איזה יופי  !</p>
            <div className="spacer"></div>
            <AboutForm className="form"/>
        </div>
    </>
}