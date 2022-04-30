import {SongSection} from "../models/general-models";

import synagogueImage from './images/synagogue.png';
import onTheEdgeImage from './images/on-the-edge.png';
import lookThroughWindowImage from './images/look-through-window.png';
import goingToCliffImage from './images/going-to-cliff.png';
import eyeImage from './images/eye.png';

import embracedVideo from './videos/webm/embraced.webm';
import foesVideo from './videos/webm/foes.webm';
import rainVideo from './videos/webm/rain.webm';
import gerushVideo from './videos/webm/Gerush.webm';
import voidVideo from './videos/webm/void.webm';
import skinVideo from './videos/webm/skin.webm';
import posessedVideo from './videos/webm/posessed.webm';
import maroonedVideo from './videos/webm/marooned.webm';
import outcastVideo from './videos/webm/outcast.webm';

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
        videoUrl: embracedVideo
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
        videoUrl: skinVideo
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
        videoUrl: rainVideo
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
        videoUrl: maroonedVideo
    },
    {
        id: 4,
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
        title: '5.foes',
        videoUrl: foesVideo
    },
    {
        id: 5,
        image: synagogueImage,
        description: '',
        lyrics: 'Instrumental',
        title: '6.possessed',
        videoUrl: posessedVideo
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
        videoUrl: outcastVideo
    },
    {
        id: 7,
        image: synagogueImage,
        description: '',
        lyrics: 'צא צא צא',
        title: '8.gerush',
        videoUrl: gerushVideo
    },


    {
        id: 8,
        image: synagogueImage,
        description: '',
        lyrics: 'Instrumental',
        title: '9.void',
        videoUrl: voidVideo
    }
];
