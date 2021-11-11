export default {
    props: ['note'],
    template: `
        <div class="note-preview">
            <h2 class="book-title">{{note.type}}</h2>
            <span>asd</span>
            <button @click="remove(note.id)" >X</button>
            <!-- <img :src="book.thumbnail"/>
            <h3>{{currencyToShow}}{{book.listPrice.amount}} </h3>  -->
        </div>
    `,
    methods: {
        remove(noteId) {
            this.$emit('remove', noteId);
        },

    },
    computed: {
        // currencyToShow () {
        //     if (this.book.listPrice.currencyCode === 'ILS') return '₪'
        //     else if (this.book.listPrice.currencyCode === 'EUR') return '€'
        //     else return '$'

        // }
    }
}