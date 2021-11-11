import { utilService } from '../../../services/util-service.js';
import { storageService } from '../../../services/async-storage-service.js';

const NOTES_KEY = 'note'
const gNotes = [{
        id: utilService.makeId(),
        settings: {
            noteType: 'image',
            pinned: false,
            marked: true,
            editMode: false,
        },
        styles: {
            backgroundColor: '#ffffff',
        },
        data: {
            src: 'https://yesno.wtf/assets/yes/6-304e564038051dab8a5aa43156cdc20d.gif'
        },
    },
    {
        id: utilService.makeId(),
        settings: {
            noteType: 'text',
            pinned: false,
            marked: false,
            editMode: false,
        },
        styles: {
            backgroundColor: '#ffffff',
        },
        data: {
            text: 'How many programmers does it take to screw in a light bulb? None, it\'s a hardware problem.'
        },
    },
    {
        id: utilService.makeId(),
        settings: {
            noteType: 'image',
            pinned: false,
            marked: true,
            editMode: false,
        },
        styles: {
            backgroundColor: '#ffff88',
        },
        data: {
            src: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Solar_sys8.jpg'
        },
    },
    {
        id: utilService.makeId(),
        settings: {
            noteType: 'text',
            pinned: false,
            marked: false,
            editMode: false,
        },
        styles: {
            backgroundColor: '#ffffff',
        },
        data: {
            text: 'What is a programmer\'s favorite hangout place? Foo bar...'
        },
    },
    {
        id: utilService.makeId(),
        settings: {
            noteType: 'video',
            pinned: false,
            marked: false,
            editMode: false,
        },
        styles: {
            backgroundColor: '#ffffff',
        },
        data: {
            src: 'https://clips.vorwaerts-gmbh.de/VfE_html5.mp4'
        },
    },
    {
        id: utilService.makeId(),
        settings: {
            noteType: 'text',
            pinned: false,
            marked: false,
            editMode: false,
        },
        styles: {
            backgroundColor: '#ffffff',
        },
        data: {
            text: 'Definition, Algorithm: Word used by programmers when they do not want to explain what they did.'
        },
    },
    {
        id: utilService.makeId(),
        settings: {
            noteType: 'image',
            pinned: false,
            marked: true,
            editMode: false,
        },
        styles: {
            backgroundColor: '#ffffff',
        },
        data: {
            src: 'https://placehold.it/400x300?text=Image'
        },
    },
    {
        id: utilService.makeId(),
        settings: {
            noteType: 'text',
            pinned: false,
            marked: false,
            editMode: false,
        },
        styles: {
            backgroundColor: '#ffffff',
        },
        data: {
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
    },
    {
        id: utilService.makeId(),
        settings: {
            noteType: 'text',
            pinned: false,
            marked: false,
            editMode: false,
        },
        styles: {
            backgroundColor: '#ffcc88',
        },
        data: {
            text: 'What is the object-oriented way to become wealthy? Inheritance...'
        },
    },
    {
        id: utilService.makeId(),
        settings: {
            noteType: 'video',
            pinned: false,
            marked: false,
            editMode: false,
        },
        styles: {
            backgroundColor: '#ffffff',
        },
        data: {
            src: 'http://techslides.com/demos/sample-videos/small.mp4'
        },
    },
    {
        id: utilService.makeId(),
        settings: {
            noteType: 'text',
            pinned: false,
            marked: false,
            editMode: false,
        },
        styles: {
            backgroundColor: '#ffff88',
        },
        data: {
            text: 'Real programmers count from 0.'
        },
    },
    {
        id: utilService.makeId(),
        settings: {
            noteType: 'audio',
            pinned: false,
            marked: false,
            editMode: false,
        },
        styles: {
            backgroundColor: '#dddddd',
        },
        data: {
            src: 'https://cld2099web.audiovideoweb.com/va90web25003/companions/Foundations%20of%20Rock/13.01.mp3'
        },
    },
    {
        id: utilService.makeId(),
        settings: {
            noteType: 'image',
            pinned: false,
            marked: true,
            editMode: false,
        },
        styles: {
            backgroundColor: '#ffffff',
        },
        data: {
            src: 'https://yesno.wtf/assets/yes/2-5df1b403f2654fa77559af1bf2332d7a.gif'
        },
    },
    {
        id: utilService.makeId(),
        settings: {
            noteType: 'text',
            pinned: false,
            marked: false,
            editMode: false,
        },
        styles: {
            backgroundColor: '#ffffff',
        },
        data: {
            text: 'QA Engineer walks into a bar. Orders a beer. Orders 0 beers. Orders 999999999 beers. Orders a lizard. Orders -1 beers. Orders a sfdeljknesv.'
        },
    },
    {
        id: utilService.makeId(),
        settings: {
            noteType: 'text',
            pinned: false,
            marked: false,
            editMode: false,
        },
        styles: {
            backgroundColor: '#ffffff',
        },
        data: {
            text: 'A SQL query goes into a bar, walks to tables and asks: "Can I join you?"'
        },
    },
    {
        id: utilService.makeId(),
        settings: {
            noteType: 'list',
            pinned: false,
            marked: true,
            editMode: false,
        },
        styles: {
            backgroundColor: '#ccff99',
        },
        data: {
            list: [
                { text: 'eat()', completed: false },
                { text: 'sleep()', completed: true },
                { text: 'code()', completed: false },
                { text: 'repeat()', completed: false },
            ]
        },
    },
    {
        id: utilService.makeId(),
        settings: {
            noteType: 'text',
            pinned: false,
            marked: false,
            editMode: false,
        },
        styles: {
            backgroundColor: '#ffffff',
        },
        data: {
            text: 'There are only 10 types of people in the world: Those that understand binary and those that don\'t.'
        },
    },
    {
        id: utilService.makeId(),
        settings: {
            noteType: 'image',
            pinned: false,
            marked: true,
            editMode: false,
        },
        styles: {
            backgroundColor: '#ddbbff',
        },
        data: {
            src: 'https://images.unsplash.com/photo-1488998427799-e3362cec87c3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e8b82dbd7fe9677e9218686a427ea6d7&auto=format&fit=crop&w=1350&q=80'
        },
    },
    {
        id: utilService.makeId(),
        settings: {
            noteType: 'text',
            pinned: false,
            marked: false,
            editMode: false,
        },
        styles: {
            backgroundColor: '#ffffff',
        },
        data: {
            text: 'Programming is like sex, one mistake and you have to support it for the rest of your life.'
        },
    },
];

_createNotes()

function _createNotes() {
    let notes = utilService.loadFromStorage(NOTES_KEY);
    if (!notes || !notes.length) {
        notes = gNotes;
        utilService.saveToStorage(NOTES_KEY, notes);
    }
    console.log(notes);
    return notes;
}

function remove(noteId) {
    // return Promise.reject('Big balagan!')
    return storageService.remove(NOTES_KEY, noteId);
}

function save(note) {
    if (note.id) return storageService.put(NOTES_KEY, note);
    else return storageService.post(NOTES_KEY, note);
}

function getById(noteId) {
    return storageService.get(NOTES_KEY, noteId);
}

export const notesService = {
    gNotes,
    query,
    getById,
    save,
    remove,

}

function query() {
    return storageService.query(NOTES_KEY);

}