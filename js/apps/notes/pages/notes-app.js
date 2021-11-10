// import { bookService } from "../../../services/book-service.js";
import { notesService } from "../services/notes-service.js";
import notesList from "../cmps/notes-list.js";

export default {
    template: `
        <section class="note-app">
            <!-- <book-filter @filtered="setFilter" /> -->
            <h1>notes app</h1>
            
            <!-- <router-link to="/addbooks">Add a Book</router-link>       -->
            <notes-list :notes="notes"  class="" />
            <!-- <book-details v-if="selectedBook" :book="selectedBook" @close="closeDetails"/> -->
            
            
        </section>
    `,
    data() {
        return {
            notes: [{
                id: "n101",
                type: "note-txt",
                isPinned: true,
                info: {
                    txt: "Fullstack Me Baby!"
                }
            }],
            selectedNote: null, // ==> change to selectedNote
            filterBy: null

        };
    },
    created() {
        // this.notes = notesService.query()
        //     .then(books => this.books = books)
        // this.notes = notesService.note;
        // console.log(this.notes);

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
        // bookList,
        // bookFilter,
        // bookDetails,
        // bookDescription

    }
};