export default {
    template: `
    <nav class="aside-nav-bar flex column">
       <a @click="$emit('editMail')" class="compose-btn clean-btn">COMPOSE</a>
       <a @click="$emit('editMail')" class="compose-btn clean-btn">INBOX</a>
       <a @click="$emit('editMail')" class="compose-btn clean-btn">COMPOSE</a>
       <a @click="$emit('editMail')" class="compose-btn clean-btn">SENT</a>
       <a @click="$emit('editMail')" class="compose-btn clean-btn">TRASH</a>
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