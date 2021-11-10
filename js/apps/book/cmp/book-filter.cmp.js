export default {
    template: `
        <div class="book-filter flex align-center">
            <button class="btn" @click="filter">Filter</button>
            <label>Filter By:</label>
            <input class="filter-title"  v-model="filterBy.title" type="text" placeholder="Title...">
            <input  v-model.number="filterBy.fromPrice" type="number" placeholder="From Price...">
            <input @keyup="resetToPrice"  v-model.number="filterBy.toPrice" type="number" placeholder="To Price...">
        </div>
    `,
    data() {
        return {
            filterBy: {
                title: '',
                fromPrice: 0,
                toPrice: Infinity
            }
        };
    },
    methods: {
        filter() {
            this.$emit('filtered', {...this.filterBy });

        },
        resetToPrice() {
            if (!this.filterBy.toPrice) this.filterBy.toPrice = Infinity
        }
    }
}