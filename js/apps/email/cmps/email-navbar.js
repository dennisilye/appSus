export default {
    template: `
    <nav class="aside-nav-bar flex column">
       <a @click="$emit('composing')" class="compose-btn clean-btn">COMPOSE</a>
       <a  class="compose-btn clean-btn">INBOX</a>
       <a  class="compose-btn clean-btn">SENT</a>
       <a to="/email/trash"  class="compose-btn clean-btn">TRASH</a>
</nav>
        
    `,
    data() {
        return {
            unreadCount: null,
            path: null
        }
    },
    methods: {


    },
    computed: {


    },
    created() {

    }
}