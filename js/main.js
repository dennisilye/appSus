import bookApp from './apps/book/pages/book-app.js';
import notesApp from './apps/notes/pages/notes-app.js';
import emailApp from './apps/email/pages/email-app.js';
import appHeader from './cmps/app-header.cmp.js';
import { router } from './routes.js';
// import appFooter from './cmps/app-footer.cmp.js';

const options = {
    el: '#app',
    router,
    template: `
        <section>
            
            <app-header></app-header>
            <router-view />
            
        </section>
    `,
    components: {
        bookApp,
        notesApp,
        emailApp,
        appHeader,

    }
};

new Vue(options);