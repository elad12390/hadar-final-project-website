import './About.scss';
import {AboutForm} from "../../components/AboutForm/AboutForm";
import OpenAboutIcon from '../../assets/icons/icon-opening-about.svg';
import CloseAboutIcon from '../../assets/icons/icon-closing-about.svg';
import {Language, LanguageSelector} from "../../components/LanguageSelector/LanguageSelector";
import {useMemo, useState} from "react";
import {useWindowSize} from "../../utils/hooks/useWindowSize";

export const About = () => {
    const [language, setLanguage] = useState(Language.ENGLISH);


    const englishParagraphs = [
        `I am the vocalist of Li’ed- a Progressive Symphonic metal band. In my final project, I decided to create a visual interpretation to our upcoming concept album- DYBBUK.`,
        `A Dybbuk, in the jewish folkolore, is a disembodied human spirit that, because of former sins, wanders restlessly until it finds a haven in the body of a living person `,
        `The story takes place in an ancient Jewish community. A lost girl commits suicide. Due to that, she's banned from entering the afterlife. Her soul wanders upon land, eger to find another living person by using its body as a host. She possesses another girl, and the possesed one twitches in pain, drawing the intention of the Jewish community that eventually calls to the “Baal Shem”, a rabbi, to perform an exorcism. Alone and dehumanized, the second girl kills herself out of shame, which brings our story to the beginning-\nan endless cycle of misery and tragedy.`,
        `In this project you can experience the story by listening to a short piece from each song, and watching its mini-clip.`
    ]

    const hebrewParagraphs = [
        'אני סולנית בלהקת ״לי׳ד״, להקה בז׳אנר המטאל מתחום הפרוגרסיב- סימופני. בפרויקט הגמר שלי בחרתי לייצר פרשנות ויזואלית לאלבום הקונספט החדש שלנו שעתיד לצאת לאור בקרוב - ״דיבוק״.',
        'דיבוק בפולקלור היהודי הוא תופעה בה רוחו של נפטר חודרת אל גופו של אדם חי ומשתלטת עליו. רוחו של הנפטר מבקשת כביכול מקלט בגופו של החי על מנת להשלים משימה כלשהי או בשל חטא שבוצע.',
        'הסיפור באלבום שלנו אפוא מתרחש בקהילה יהודית עתיקה. נערה אבודה נוטלת את חיה, ומפני שבחרה לעשות כן היא מנועה מלהגיע למנוחת עולמים. רוחה נודדת על פני האדמה, תרה אחר גוף חי על מנת להשתלט עליו כדיבוק. היא נכנסת אל נערה בודדה, וגופה מתעוות בכאב. התנהגותה החריגה מושכת את תשומת ליבם של הקהילה היהודית שקוראת ל״בעל שם״, רבי, שעורך תהליך של גירוש. לאחר הגירוש בדידותה מחריפה, מה שגורם גם לה ליטול את חיה- וכך למעשה הסיפור מתחיל מחדש ונוצר מעגל אינסופי של ייאוש, אובדן וטרגדיה.',
        'בפרויקט אתם מוזמנים לחוות את האלבום על ידי האזנה לקטע קצר מכל שיר וצפייה במיני קליפ שמלווה אותו.'
    ]


    const paragraphs = language === Language.ENGLISH ? englishParagraphs : hebrewParagraphs;

    const windowSize = useWindowSize();

    const minWindowSize = useMemo(() => Math.min(windowSize.width as number, windowSize.height as number), [windowSize.width, windowSize.height]);

    const isSmallerCircle = minWindowSize <  1000;

    const size = isSmallerCircle ? 200 : 300;
    const formSpacing = isSmallerCircle ? 2 : 5;

    return <span className="about">
        <div className={"about-container " + (isSmallerCircle ? 'smaller' : '')}>
            <div className="title">
                <img src={OpenAboutIcon} className="icon" alt={'opening-icon'}/>
                <div className="content">About</div>
                <img src={CloseAboutIcon} className="icon" alt={'closing-icon'}/>
            </div>
            <LanguageSelector language={language} onClick={setLanguage}/>
            {paragraphs.map((paragraph, idx) => <p style={{margin: 1, direction: language === Language.ENGLISH ? 'ltr' : 'rtl'}} key={idx} className={'description'}>{paragraph}</p> )}
            <div className="spacer"/>
        </div>
        <AboutForm
            style={{
                left: language === Language.ENGLISH ? `${formSpacing}%` : `calc(100% - ${size + 50}px - ${formSpacing}%)`,
            }}
            language={language}
            className="form"
            size={size}
            isSmaller={isSmallerCircle}
        />
    </span>
}
