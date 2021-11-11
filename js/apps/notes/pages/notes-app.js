// import { bookService } from "../../../services/book-service.js";
import { notesService } from "../services/notes-service.js";
import notesList from "../cmps/notes-list.js";

export default {
    template: `
        <section class="note-app flex">
            <!-- <book-filter @filtered="setFilter" /> -->
            <h1>notes app</h1>
            
            <!-- <router-link to="/addbooks">Add a Book</router-link>       -->
            <notes-list :notes="notes"  class="note-list" />
            <!-- <book-details v-if="selectedBook" :book="selectedBook" @close="closeDetails"/> -->
            
            
        </section>
    `,
    data() {
        return {
            notes: [],
            selectedNote: null,
            filterBy: null
        };
    },
    created() {
        this.notes = notesService.query()
            .then(notes => this.notes = notes)

    },
    methods: {
        // loadNotes() {
        //     notesService.query()
        //         .then(notes => this.notes = notes);
        // },



    },
    computed: {

    },
    components: {
        notesList,
        notesService,
        // bookList,
        // bookFilter,
        // bookDetails,
        // bookDescription

    }
};