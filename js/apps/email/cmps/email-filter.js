export default {
    template: `
        <div class="email-filter flex align-center justify-center">
            <!-- <button class="btn" @click="filter">Filter</button> -->
            <input class="filter-search" @input="filter" v-model="filterBy.text" type="text" placeholder="Search Mail">
            <select v-model="filterBy.readOptions">
            <!-- <option value="Date">Date</option> -->
            <option >All</option>
            <option value="true" >Read</option>
            <option value="false">Unread</option>
            </select>
            <!-- <input  v-model.number="filterBy.fromPrice" type="number" placeholder="From Price...">
            <input @keyup="resetToPrice"  v-model.number="filterBy.toPrice" type="number" placeholder="To Price..."> -->
        </div>
    `,
    data() {
        return {
            filterBy: {
                text: '',
                readOptions: "All",
                all: true,
                unread: false,
             
            }
        };
    },
    methods: {
        filter() {
            this.$emit('filtered', {...this.filterBy });

        },
        // resetToPrice() {
        //     if (!this.filterBy.toPrice) this.filterBy.toPrice = Infinity
        // }
    }
}