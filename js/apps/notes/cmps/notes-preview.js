export default {
    props: ['note'],
    template: `
        <div class="notes-preview">
            <h2 class="note-title">{{note.type}}</h2>
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