import bookApp from './pages/book-app.js';
import homePage from './pages/home-page.cmp.js';
import aboutPage from './pages/about-page.js';
import bookDetails from './pages/book-details.js';
import bookAdd from './pages/book-add.js';



const routes = [
    {
        path: '/',
        component: homePage
    },
    {
        path: '/addbooks',
        component: bookAdd
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
        path: '/book/:bookId',
        component: bookDetails
    },
];

export const router = new VueRouter({ routes });
