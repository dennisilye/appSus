import notesPreview from './notes-preview.js';



export default {
    props: ['notes'],
    template: `
        <ul class="note-list">
            <li v-for="note in notes" :key="note.id" class="note-preview-container flex column align-center space-evenly" >
                <notes-preview :note="note" @click.native="log" />
                <div class="actions">
                    <!-- <button @click="remove(book.id)" >X</button> -->
                    <!-- <router-link class="details" :to="'/book/'+book.id" >Details</router-link> -->
                    
                </div>
            </li>
        </ul>
    `,
    methods: {
        // remove(bookId) {
        //     this.$emit('remove', bookId);
        // },
        select(note) {
            this.$emit('selected', note);
        },
        log() {
            console.log('Logging.....');
        }
    },
    components: {
        notesPreview
    }
};