export default {
    props: ['email'],
    template: `
        <section :class="{read: email.isRead}" class="email-preview flex space-between">
            <div @click.stop="starClicked" class="stared rating__star far fa-star"><span></span></div>
            <span class="mail-sender">{{email.sender}}</span>
            <div>
                <span class="mail-subject">{{email.subject}}</span>
            </div>
            <div class="mail-body flex space-between">
                    <div class="mail-body flex space-between">
                    <span class="">{{showEmailBody}}</span>
                    <span>{{email.sentAt}}</span>
                    </div>
                
            </div>  
            <!-- <img :src="book.thumbnail"/>
            <h3>{{currencyToShow}}{{book.listPrice.amount}} </h3>  -->
        </section>
    `,

    computed: {
        showEmailBody() {
            const emailBody = this.email.body;
            if (emailBody.length > 50) return emailBody.substring(0, 40) + '...'
            else return emailBody
        },
        
        // showEmailDate() {
        //     const date = this.email.sentAt;
        //     console.log(typeof date);
        //     return

        // }
        showIsEmailRead() {

        }

    },
    methods: {
        starClicked(){
            console.log('star clicked');
        },

    }
}