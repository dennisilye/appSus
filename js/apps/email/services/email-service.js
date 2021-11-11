

import { utilService } from '../../../services/util-service.js';
import { storageService } from '../../../services/async-storage-service.js';

const EMAIL_KEY = 'email'
const gEmails = [
    {
        "id": "fZxUFx4sAC",
        "sender": "iCloud",
        "subject": "Your iCloud storage is full?",
        "body": "Hello Sir, Your iCloud storage is full. Because you have exceeded your storage plan, your documents, contacts, and device data are no longer backing up to iCloud and your photos and videos are not uploading to iCloud Photos. iCloud Drive and iCloud-enabled apps are not updating across your devices.",
        "categories": [
            "inbox"
        ],
        "to": "you",
        "isRead": true,
        "sentAt": 1636530653662,
        "isStarred": false
    },
    {
        "id": "Q1yDRxgmpx",
        "sender": "Google Cloud",
        "subject": "Your Google Cloud ",
        "body": "Hello Google Cloud Customer, We are sending this message to let you know about the following updates to the Google Cloud platform",
        "categories": [
            "inbox"
        ],
        "to": "you",
        "isRead": true,
        "sentAt": 1636530653662,
        "isStarred": false
    },
    {
        "id": "X8m2ywAgax",
        "sender": "Yaron Biton",
        "subject": "Light Path",
        "body": "A little bit of money (bought some sold others) A little bit of a soul (a lot of foolish things)",
        "categories": [
            "inbox"
        ],
        "to": "you",
        "isRead": false,
        "sentAt": 1636530653662,
        "isStarred": false
    },
    {
        "id": "aPKZ9n5yO3",
        "sender": "Guy Zohar",
        "subject": "Team leader message",
        "body": "I know that the whole world knows me But only one thing escapes my mind",
        "categories": [
            "inbox"
        ],
        "to": "you",
        "isRead": false,
        "sentAt": 1636530653662,
        "isStarred": false
    },
    {
        "id": "GcAwgITT9p",
        "sender": "Bill Gates",
        "subject": "DropBox",
        "body": "Hi everyone, DO NOT forget to leave git folder out of my amazing and clean DropBox",
        "categories": [
            "inbox",
            "starred"
        ],
        "to": "you",
        "isRead": false,
        "sentAt": 1636530653662,
        "isStarred": true
    },
    {
        "id": "svzZJysieM",
        "sender": "Elon Musk",
        "subject": "Want a job",
        "body": "I got my eyes on ya And I know that your future holds no keys",
        "categories": [
            "inbox"
        ],
        "to": "you",
        "isRead": false,
        "sentAt": 1636530653662,
        "isStarred": false
    },
    {
        "id": "jQA0qmmvPQ",
        "sender": "Elon Musk",
        "subject": "Want a job",
        "body": "I got my eyes on ya And I know that your future holds no keys",
        "categories": [
            "inbox",
            "starred"
        ],
        "to": "you",
        "isRead": true,
        "sentAt": 1636530653662,
        "isStarred": true
    },
    {
        "id": "B4Lqxx5rpS",
        "sender": "iCloud",
        "subject": "Your iCloud storage is full?",
        "body": "Hello Sir, Your iCloud storage is full. Because you have exceeded your storage plan, your documents, contacts, and device data are no longer backing up to iCloud and your photos and videos are not uploading to iCloud Photos. iCloud Drive and iCloud-enabled apps are not updating across your devices.",
        "categories": [
            "inbox"
        ],
        "to": "you",
        "isRead": true,
        "sentAt": 1636530653662,
        "isStarred": false
    },
    {
        "id": "xUZdcaOM4N",
        "sender": "Google Cloud",
        "subject": "Your iCloud storage is full?",
        "body": "Hello Google Cloud Customer, We are sending this message to let you know about the following updates to the Google Cloud platform",
        "categories": [
            "inbox"
        ],
        "to": "you",
        "isRead": false,
        "sentAt": 1636530653662,
        "isStarred": false
    },
    {
        "id": "ovfK6VHehS",
        "sender": "Bill Gates",
        "subject": "DropBox",
        "body": "Hi everyone, DO NOT forget to leave git folder out of my amazing and clean DropBox",
        "categories": [
            "inbox"
        ],
        "to": "you",
        "isRead": false,
        "sentAt": 1636530653662,
        "isStarred": false
    },
    {
        "id": "YXLhpHaw2t",
        "sender": "Amazon",
        "subject": "Shopping Listc",
        "body": "Hello guys, please do not forget to upload everything to dropBox (except of git), and also upload everything to GitHub pages!",
        "categories": [
            "inbox"
        ],
        "to": "you",
        "isRead": true,
        "sentAt": 1636530653662,
        "isStarred": false
    },
    {
        "id": "MybHhsJdRY",
        "sender": "NetFlix",
        "subject": "DropBox",
        "body": "Hi everyone, DO NOT forget to leave git folder out of my amazing and clean DropBox",
        "categories": [
            "inbox"
        ],
        "to": "you",
        "isRead": false,
        "sentAt": 1636530653662,
        "isStarred": false
    },
    {
        "id": "ha3Ibx2MEo",
        "sender": "Me",
        "subject": "HELLP",
        "body": "Hello my friend, how are you we goi",
        "categories": [
            "drafts"
        ],
        "to": "Donald Trump",
        "isRead": false,
        "sentAt": 1636530653662,
        "isStarred": false
    },
    {
        "id": "XKmRnAtxRa",
        "sender": "Unknown",
        "subject": "DropBox",
        "body": "Hi everyone, DO NOT forget to leave git folder out of my amazing and clean DropBox",
        "categories": [
            "inbox",
            "archived"
        ],
        "to": "you",
        "isRead": false,
        "sentAt": 1636530653662,
        "isStarred": false
    },
    {
        "id": "4884zYtXg8",
        "sender": "Me",
        "subject": "GO",
        "body": "One time when we were on the plane, when we were in new york in the middle of a trip",
        "categories": [
            "inbox",
            "archived"
        ],
        "to": "No one",
        "isRead": false,
        "sentAt": 1636530653662,
        "isStarred": false
    }
]
_createEmails()
export const emailService = {
    gEmails,
    query,
    save

}


function query() {
    return storageService.query(EMAIL_KEY);

}


function remove(emailId) {
    // return Promise.reject('Big balagan!')
    return storageService.remove(EMAIL_KEY, emailId);
}

function save(email) {
    if (email.id) return storageService.put(EMAIL_KEY, email);
    else return storageService.post(EMAIL_KEY, email);
}

function getById(emailId) {
    return storageService.get(EMAIL_KEY, emailId);
}

function _createEmails() {
    let emails = utilService.loadFromStorage(EMAIL_KEY);
    if (!emails || !emails.length) {
        emails = gEmails;
        utilService.saveToStorage(EMAIL_KEY, emails);
    }
    console.log(emails);
    return emails;
}

function getNextBookId(emailId) {
    return query()
        .then(emails => {
            const idx = emails.findIndex(email => email.id === emailId);
            return (idx === emails.length - 1) ? emails[0].id : emails[idx + 1].id;
        });


}




