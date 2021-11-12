// import { bookService } from "../../../services/book-service.js";
import { emailService } from "../services/email-service.js";
import emailList from "../cmps/email-list.js"
import emailNavbar from "../cmps/email-navbar.js"
import emailCompose from '../cmps/email-compose.js';
import emailDetails from "./email-details.js";
import emailFilter from "../cmps/email-filter.js";
import emailTrash from "./email-trash.js";

export default {
    template: `
        <section >
            <email-filter @filtered="setFilter"/>
        <section class="email-app flex">
            <email-navbar @composing="composing"></email-navbar>
            <email-details v-if="selectedEmail"  :email="selectedEmail" class="email-main-container" />
            <!-- <email-trash v-if="isInTrash"   @selected="selectEmail" :emails="trash"  class="email-main-container" /> -->
            <email-list  @move-to-trash="MoveToTrash"  @selected="selectEmail" :emails="emailsToShow"  class="email-main-container" />
            <email-compose @composing="composing" v-if="isComposing"></email-compose>
            
        </section>
            
        </section>
    `,
    data() {
        return {
            emails: [],
            isComposing: false,
            selectedEmail: null,
            filterBy: null,
            trash: [],
            isInTrash: false


        };
    },
    created() {
        this.emails = emailService.query()
            .then(emails => this.emails = emails)


    },
    methods: {
        MoveToTrash(deletedEmail) {
            const emailIdx = this.emails.findIndex(email => deletedEmail.id === email.id)
            this.trash.unshift(deletedEmail)
            this.emails.splice(emailIdx, 1)
        },
        composing() {
            console.log('composing');
            this.isComposing = !this.isComposing
        },
        selectEmail(email) {
            this.selectedEmail = email;
            this.$router.push(`email/${email.id}`);
        },
        setFilter(filterBy) {
            this.filterBy = filterBy;
            console.log(this.filterBy);
        }



    },
    computed: {
        emailsToShow() {
            if (!this.filterBy) return this.emails;
            const { text, readOptions } = this.filterBy
            const searchStr = text.toLowerCase();
            console.log(text);
            let emailsToShow = this.emails.filter(email => {
                return email.body.toLowerCase().includes(searchStr) ||
                    email.subject.toLowerCase().includes(searchStr) ||
                    email.sender.toLowerCase().includes(searchStr)
            });
            return emailsToShow;



        }
    },
    components: {
        emailList,
        emailNavbar,
        emailCompose,
        emailDetails,
        emailFilter,
        emailTrash
       

    }
};