import {SongSection} from "../models/general-models";

import raw from 'raw.macro';
import SrtParser from 'srt-parser-2';

const parser = new SrtParser();

const Embraced = raw('./subtitles/embraced.srt');
const Foes = raw('./subtitles/foes.srt');
const Gerush = raw('./subtitles/gerush.srt');
const Marooned = raw('./subtitles/marooned.srt');
const Outcast = raw('./subtitles/outcast.srt');
const Rain = raw('./subtitles/rain.srt');
const Skin = raw('./subtitles/skin.srt');

const bucketURL = `https://dybbuk.s3.eu-central-1.amazonaws.com`;

export const songSections: SongSection[] = [
    {
        id: 0,
        description: '',
        lyrics: 'Come here, step close\n' +
            'into the dark \n' +
            'to the mist within\n' +
            'hold me,embrace me\n' +
            'now that i’m sinking',
        title: '1.embraced',
        videoUrl: `${bucketURL}/Embraced.m4v`,
        subtitles: parser.fromSrt(Embraced)
    },
    {
        id: 1,
        description: '',
        lyrics: 'No hope have I found in old beliefs\n' +
            'No faith has entered beneath my skin \n' +
            'My clear mind has forsaken me\n' +
            'My eyes are deluding me',
        title: '2.skin',
        videoUrl: `${bucketURL}/Skin.m4v`,
        subtitles: parser.fromSrt(Skin)
    },
    {
        id: 2,
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
        videoUrl: `${bucketURL}/Rain.m4v`,
        subtitles: parser.fromSrt(Rain)
    },
    {
        id: 3,
        description: '',
        lyrics: 'A Black Rose amongst the flowers\n' +
            'A child denied, unwanted\n' +
            'Marooned in the ocean \n' +
            'Left to wither in the garden\n',
        title: '4.marooned',
        videoUrl: `${bucketURL}/Marooned.m4v`,
        subtitles: parser.fromSrt(Marooned)
    },
    {
        id: 4,
        description: '',
        lyrics: 'Instrumental',
        title: '5.possessed',
        videoUrl: `${bucketURL}/Posessed.m4v`,
    },
    {
        id: 5,
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
        videoUrl: `${bucketURL}/Foes.m4v`,
        subtitles: parser.fromSrt(Foes)
},
    {
        id: 6,
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
        videoUrl: `${bucketURL}/Outcast.m4v`,
        subtitles: parser.fromSrt(Outcast)
    },
    {
        id: 7,
        description: '',
        lyrics: 'צא צא צא',
        title: '8.gerush',
        videoUrl: `${bucketURL}/Gerush.m4v`,
        subtitles: parser.fromSrt(Gerush)
    },
    {
        id: 8,
        description: '',
        lyrics: 'Instrumental',
        title: '9.void',
        videoUrl: `${bucketURL}/Void.m4v`,

    },
];
