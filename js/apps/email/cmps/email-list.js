import emailPreview from './email-preview.js';



export default {
    props: ['emails'],
    template: `
        <ul class="email-list">
            <li v-for="email in emails" :key="email.id" class="email-preview-container flex column align-center space-evenly" >
                <email-preview :email="email" @click.native="log" />
                <div class="actions">
                    <!-- <button @click="remove(book.id)" >X</button> -->
                    <!-- <router-link class="details" :to="'/book/'+book.id" >Details</router-link> -->
                    
                </div>
            </li>
        </ul>
    `,
    methods: {
        // remove(bookId) {
        //     this.$emit('remove', bookId);
        // },
        select(email) {
            this.$emit('selected', book);
        },
        log() {
            console.log('Logging.....');
        }
    },
    components:{
        emailPreview
    }
};