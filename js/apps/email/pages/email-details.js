import { emailService } from "../services/email-service.js";
import emailNavbar from "../cmps/email-navbar.js";

export default {
    template: `
        <section v-if="email"   class="email-main-container flex justify-center">
            <email-navbar></email-navbar>
            <section class="email-details">
            <h1>Sender: {{email.sender}}</h1>
            <h2>Subjet: {{email.subject}}</h2>
            <p>{{email.body}}</p>
            <h4>{{email.sentAt}}</h4>
            </section>
            <!-- <section v-else class="loader app-main">
            <h2>Loading...</h2>
            </section> -->
        </section>
    `,
    data() {
        return {
            email: null,
            // nextBookId: null,
            // prevBookId: null,
        }
    },
    created() {
        const { emailId } = this.$route.params;
        emailService.getById(emailId)
            .then(email => this.email = email);
        console.log(emailId);
        


    },
    computed: {
   

    },
    watch: {
        // '$route.params.bookId': {
        //     handler() {
        //         const { bookId } = this.$route.params;
        //         bookService.getById(bookId)
        //             .then(book => this.book = book);
        //         bookService.getNextBookId(bookId)
        //             .then(bookId => this.nextBookId = bookId);

        //     },
        //     immediate: true
        // }
    },
    components: {
        emailNavbar
     

    }
}