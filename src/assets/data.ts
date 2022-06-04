import {SongSection} from "../models/general-models";

import synagogueImage from './images/synagogue.png';
import onTheEdgeImage from './images/on-the-edge.png';
import lookThroughWindowImage from './images/look-through-window.png';
import goingToCliffImage from './images/going-to-cliff.png';
import eyeImage from './images/eye.png';
import raw from 'raw.macro';
import SrtParser from 'srt-parser-2';
import testVideo from './test/test.mp4';

const parser = new SrtParser();

const Embraced = raw('./subtitles/embraced.srt');
const Foes = raw('./subtitles/foes.srt');
const Gerush = raw('./subtitles/gerush.srt');
const Marooned = raw('./subtitles/marooned.srt');
const Outcast = raw('./subtitles/outcast.srt');
const Rain = raw('./subtitles/rain.srt');
const Skin = raw('./subtitles/skin.srt');

export const songSections: SongSection[] = [
    {
        id: 0,
        image: eyeImage,
        description: '',
        lyrics: 'Come here, step close\n' +
            'into the dark \n' +
            'to the mist within\n' +
            'hold me,embrace me\n' +
            'now that i’m sinking',
        title: '1.embraced',
        videoUrl: 'https://drive.google.com/uc?id=1i52EEsufYHdrjbUsO3MscwddBJhTsTgO',
        subtitles: parser.fromSrt(Embraced)
    },
    {
        id: 1,
        image: goingToCliffImage,
        description: '',
        lyrics: 'No hope have I found in old beliefs\n' +
            'No faith has entered beneath my skin \n' +
            'My clear mind has forsaken me\n' +
            'My eyes are deluding me',
        title: '2.skin',
        videoUrl: 'https://drive.google.com/uc?id=1VvUuLepUpAyXZWcFUjPxKAA79qWQt_6C',
        subtitles: parser.fromSrt(Skin)
    },
    {
        id: 2,
        image: lookThroughWindowImage,
        description: '',
        lyrics: 'Defiled one\n' +
            'No tomb shall you have\n' +
            'No eulogy shall you receive\n' +
            'No tears will be shed for you\n' +
            '\n' +
            'Not to the Garden of Eden\n' +
            'Nor to Gehenom, shall you pass\n' +
            'Your damned soul shall wander\n' +
            'between This World\n' +
            'and the World to Come',
        title: '3.rain',
        videoUrl: 'https://drive.google.com/uc?id=1XkGOUnBW5X65_jtu-j95ws1_e4qseFgp',
        subtitles: parser.fromSrt(Rain)
    },
    {
        id: 3,
        image: onTheEdgeImage,
        description: '',
        lyrics: 'A Black Rose amongst the flowers\n' +
            'A child denied, unwanted\n' +
            'Marooned in the ocean \n' +
            'Left to wither in the garden\n',
        title: '4.marooned',
        videoUrl: 'https://drive.google.com/uc?id=1s_s8BJg3LH_k3vdeBZSthKPfppGQRMjZ',
        subtitles: parser.fromSrt(Marooned)
    },
    {
        id: 4,
        image: synagogueImage,
        description: '',
        lyrics: 'Instrumental',
        title: '5.possessed',
        videoUrl: 'https://drive.google.com/uc?id=1COPL2r35PfMYXaqOABKp7jpeuUkjumUQ',
    },
    {
        id: 5,
        image: synagogueImage,
        description: '',
        lyrics: 'My hand, it moves,\n' +
            'Not at my command\n' +
            'As if it has a will I do not understand\n' +
            ' \n' +
            'My legs, slow down!\n' +
            'I don’t know where I’m bound\n' +
            'Where are you taking me?\n' +
            'I beg to turn around',
        title: '6.foes',
        videoUrl: 'https://drive.google.com/uc?id=1KPaJMBHtnptJtS_-AE_ap3t7IsTM4lKs',
        subtitles: parser.fromSrt(Foes)
},
    {
        id: 6,
        image: synagogueImage,
        description: '',
        lyrics: 'It’s taking over her\n' +
            'This spirit from beyond\n' +
            'Let us restrain her\n' +
            'Let us cage her, save our world\n' +
            '\n' +
            'Call the Baal Shem to pure her soul\n' +
            'An exorcism will protect us all\n' +
            '\n' +
            'Cleanse our town from this illness\n' +
            'Wipe her sins in the rain\n' +
            'There is no need for finesse\n' +
            'We don’t mind her pain',
        title: '7.outcast',
        videoUrl: 'https://drive.google.com/uc?id=10H1nzwcuXfEQlGtwHDmwMqlO54Qshd20',
        subtitles: parser.fromSrt(Outcast)
    },
    {
        id: 7,
        image: synagogueImage,
        description: '',
        lyrics: 'צא צא צא',
        title: '8.gerush',
        videoUrl: 'https://drive.google.com/uc?id=1efJJ-SbJ7_Y0PyXv0MoKtsr_Hi-2K-c3',
        subtitles: parser.fromSrt(Gerush)
    },
    {
        id: 8,
        image: synagogueImage,
        description: '',
        lyrics: 'Instrumental',
        title: '9.void',
        videoUrl: 'https://drive.google.com/uc?id=1aGRfld3Woa3zdwU9DujExm4S9iZ-7K8u',

    },
    // {
    //     id: 9,
    //     image: '',
    //     description: '',
    //     lyrics: '',
    //     title: 'Test',
    //     videoUrl: testVideo,
    //     subtitles: (() => {
    //         const srt = raw('./test/test.srt');
    //         console.log({srt})
    //         return parser.fromSrt(srt);
    //     })()
    // }
];
