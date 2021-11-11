export default {
    props: ['note'],
    template: `
        <div class="book-preview">
            <h2 class="book-title">{{note.type}}</h2>
            <span>asd</span>
            <!-- <img :src="book.thumbnail"/>
            <h3>{{currencyToShow}}{{book.listPrice.amount}} </h3>  -->
        </div>
    `,

    computed: {
        // currencyToShow () {
        //     if (this.book.listPrice.currencyCode === 'ILS') return '₪'
        //     else if (this.book.listPrice.currencyCode === 'EUR') return '€'
        //     else return '$'

        // }
    }
}