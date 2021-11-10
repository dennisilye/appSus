export default {
    template: `
        <header class="app-header flex space-between align-center">
            <div class="logo flex align-center">
                AppSus
                <img class="main-logo" src="img/logoGif.gif" alt="">
            </div>
            
            <nav class="main-nav flex align-center">
                <router-link to="/" active-class="active-link" exact>Home</router-link> 
                <router-link to="/book">Books</router-link> 
                <router-link to="/email">Email</router-link>
                <router-link to="/notes">Notes</router-link>
                <router-link to="/about">About</router-link>
            </nav>
        </header>
    `,
}