import appNav from "./app-nav.js"
export default {
    template: `
        <header class="app-header flex space-between align-center">
            <div class="logo flex align-center">
            <router-link to="/" active-class="active-link" exact>AppSuss</router-link> 
                
                <img class="main-logo" src="img/logoGif.gif" alt="">
            </div>
            
            <!-- <nav class="main-nav flex align-center">
                
                <router-link to="/book">Books</router-link> 
                <router-link to="/email">Email</router-link>
                <router-link to="/notes">Notes</router-link>
                <router-link to="/about">About</router-link>
            </nav> -->
            <app-nav />
        </header>
    `,
    components: {
        appNav,
    },
}