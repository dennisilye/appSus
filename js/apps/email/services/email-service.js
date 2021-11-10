

// import { utilService } from '../../../services/util-service.js';
// import { storageService } from '../../../async-storage-service.js';

const EMAIL_KEY = 'email'
const email = {
    id: 'e101',
    subject: 'Miss you!',
    body: 'Would love to catch up sometimes',
    isRead: false,
    sentAt: 1551133930594,
    to: 'momo@momo.com'
}

export const emailService = {
    email,
    query

}

function query() {
    return storageService.query(EMAIL_KEY);
    return email
}







