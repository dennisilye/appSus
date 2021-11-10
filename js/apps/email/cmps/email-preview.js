export default {
    props: ['email'],
    template: `
        <section class="email-preview flex space-between">
            <div class="stared"><span>*</span></div>
            <div>{{email.to}}</div>
            <div class="mail-body flex space-between">
                <span>{{email.subject}}</span>
                <span>{{email.sentAt}}</span>
            </div>
            <!-- <img :src="book.thumbnail"/>
            <h3>{{currencyToShow}}{{book.listPrice.amount}} </h3>  -->
        </section>
    `,

    computed: {
        // currencyToShow () {
        //     if (this.book.listPrice.currencyCode === 'ILS') return '₪'
        //     else if (this.book.listPrice.currencyCode === 'EUR') return '€'
        //     else return '$'

        // }
    }
}