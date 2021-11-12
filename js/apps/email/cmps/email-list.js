import emailPreview from './email-preview.js';




export default {
    props: ['emails'],
    template: `
        <ul class="email-main-container clean-list justify-center">
        <li class="email-header flex">
          <!-- <span class="email-headere-del">Del</span> -->
          <span class="email-header-name">Sender</span>
          <div class="email-subject-container flex space-between">
          <span class="email-header-subject">Subject</span>
          <span class="email-header-date">Date</span>
            </div>
        </li>
            <li v-for="email in emails" :key="email.id" class="" >
                <!-- <router-link to="/email/+email.id" class="router"> -->   
                <email-preview v-on="$listeners"  @click.native="select(email)" :email="email">
                             
                    </email-preview>
            
                
            </li>
        </ul>
    `,
    data () {
        return {
            // email: null,
            
        }
    },
    methods: {
        // remove(bookId) {
        //     this.$emit('remove', bookId);
        // },
        select(email) {
            this.$emit('selected', email);
            
 
        },

    },
    components:{
        emailPreview,
        
    },
    watch : {
        

    }
};