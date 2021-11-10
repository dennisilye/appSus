import emailPreview from './email-preview.js';



export default {
    props: ['emails'],
    template: `
        <ul class="email-main-container clean-list justify-center">
        <li class="email-header flex">
          <!-- <span class="email-headere-del">Del</span> -->
          <span class="email-header-star">Star</span>
          <span class="email-header-name">Name</span>
          <span class="email-header-send">Send</span>
          <span class="email-header-subject">Subject</span>
          <span class="email-header-date">Date</span>
          <!-- <span class="email-title-date">Date</span> -->
        </li>
            <li v-for="email in emails" :key="email.id" class="" >
                <email-preview :email="email" @click.native="log" />
                <!-- <div class="actions"> -->
                    <!-- <button @click="remove(book.id)" >X</button> -->
                    <!-- <router-link class="details" :to="'/book/'+book.id" >Details</router-link> -->
                    
                <!-- </div> -->
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