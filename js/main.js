import bookApp from './pages/book-app.js';
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
         appHeader
     
    }
};

new Vue(options);

