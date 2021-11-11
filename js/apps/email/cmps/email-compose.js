import { utilService } from '../../../services/util-service.js';
import { emailService } from "../services/email-service.js";

export default {
    template: `
        <section class="email-compose" >
            <div class="email-compose-title flex space-between">
            <h2>New Message</h2>
            <button @click="$emit('composing')">x</button>
            </div>
            <form>
                <input v-model="NewEmail.to" class="email-compose-send-to" placeholder="Send to"/>
                <input v-model="NewEmail.subject" class="email-compose-subject" placeholder="Subject"/>
                <textarea v-model="NewEmail.body" class="email-compose-body" ></textarea>
            </form>
            <button @click="saveEmail" class="email-compose-send btn">Send</button>
        </section>
    `,
    data() {
        return {
           NewEmail : {
               body: '',
               to: '',
               sender: 'Me',
               subject: '',
               id: utilService.makeId(),
               sentAt: Date.now(),
               isRead: true,
               isStarred: false      


           }

        }

    },
    created() {

    },
    methods: {
        saveEmail() {
            console.log('saved');
            emailService.save(this.NewEmail)
        },


    },
    watch: {
       

    },

}