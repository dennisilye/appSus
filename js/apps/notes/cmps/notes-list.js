import notesPreview from './notes-preview.js';



export default {
    props: ['notes'],
    template: `
        <ul class="note-list">
            <li v-for="note in notes" :key="note.id" class="note-list " > <!--class="note-preview-container flex column align-center space-evenly" -->
                <notes-preview :note="note" @click.native="log" />
                <div class="actions">
                    
                    <!-- <router-link class="details" :to="'/book/'+book.id" >Details</router-link> -->
                    
                </div>
            </li>
        </ul>
    `,
    methods: {
        remove(noteId) {
            this.$emit('remove', noteId);
        },
        select(note) {
            this.$emit('selected', note);
        },
        log() {
            console.log('Logging.....1');
        }
    },
    components: {
        notesPreview
    }
};