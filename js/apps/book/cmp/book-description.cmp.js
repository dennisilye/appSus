export default {
    props: ['book'],
    template: `
        <section class="book-description">
            <p class="description-paragraph">{{bookDescription}}</p>
            <button class="btn show-more" v-if="book.description.length > 100" @click="toggleShowMore">{{btnText}}</button>
        </section>
 
    `,
    data() {
        return {
            showMore: false,
            btnText: "Show More"

        }
    },
    computed: {
        bookDescription() {
            if (this.book.description.length > 100 && !this.showMore) return this.book.description.substring(0, 100) + '...'
            return (this.book.description);

        },


    },
    methods: {
        toggleShowMore() {
            if (this.btnText === "Show More") this.btnText = "Show Less"
            else this.btnText = "Show More"
            this.showMore = !this.showMore;
        }
    }
}