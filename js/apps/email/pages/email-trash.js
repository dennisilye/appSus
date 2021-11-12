export default {
    props: ['email'],
    template: `
        <section :class="{read: email.isRead}" class="email-preview flex space-between">
        <email-navbar @composing="composing"></email-navbar>
        <button @click.stop="emitMoveEmailToTrash(email)" class="email-delete">X</button>
            <div @click.stop="starClicked(email)" :class="{isStarred: email.isStarred}"  class="stared rating__star far fa-star"><span></span></div>
            <span class="mail-sender">{{email.sender}}</span>
            <div>
                <span class="mail-subject">{{email.subject}}</span>
            </div>
            <div class="mail-body flex space-between">
                    <div class="mail-body flex space-between">
                    <span class="">{{showEmailBody}}</span>
                    <span>{{getDate(email.sentAt)}}</span>
                    </div>
                
            </div>  
        </section>
    `,
    data() {
        return {

        }
    },

    computed: {
        showEmailBody() {
            const emailBody = this.email.body;
            if (emailBody.length > 50) return emailBody.substring(0, 40) + '...'
            else return emailBody
        },
 

    },
    methods: {
        starClicked(email) {
            email.isStarred = !email.isStarred
        },
        emitMoveEmailToTrash(email) {
            this.$emit('move-to-trash', email)
        },
        getDate(timestamp) {
            const date = new Date(timestamp);
            const month = this.getMonth(date.getUTCMonth() + 1); //months from 1-12
            const day = date.getUTCDate();
            const year = date.getUTCFullYear();
            const modfiedDate =
                year < 2021 ? year + ' ' + month + ' ' + day : month + ' ' + day;
            return modfiedDate;
        },
        getMonth(month) {
            switch (month) {
                case 1:
                    return 'Jan';
                case 2:
                    return 'Feb';
                case 3:
                    return 'Mar';
                case 4:
                    return 'Apr';
                case 5:
                    return 'May';
                case 6:
                    return 'Jun';
                case 7:
                    return 'Jul';
                case 8:
                    return 'Aug';
                case 9:
                    return 'Sep';
                case 10:
                    return 'Oct';
                case 11:
                    return 'Nov';
                case 12:
                    return 'Dec';
            }
        }

    }
}