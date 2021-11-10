import bookApp from './apps/book/pages/book-app.js';
import homePage from './pages/home-page.cmp.js';
import aboutPage from './pages/about-page.js';
import bookDetails from './apps/book/pages/book-details.js';
import bookAdd from './apps/book/pages/book-add.js';
import emailApp from './apps/email/pages/email-app.js';
import notesApp from './apps/notes/pages/notes-app.js';


const routes = [{
        path: '/',
        component: homePage
    },
    {
        path: '/about',
        component: aboutPage
    },
    {
        path: '/book',
        component: bookApp
    },
    {
        path: '/book/addbooks',
        component: bookAdd
    },
    {
        path: '/book/:bookId',
        component: bookDetails
    },
    {
        path: '/email',
        component: emailApp
    },
    {
        path: '/notes',
        component: notesApp
    },
];

export const router = new VueRouter({ routes });