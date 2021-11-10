// import { eventBus } from '../services/event-bus-service.js';

export default {
    template: `
        <section class="about-page app-main">
            <h3 ref="header">About us...</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima id ab vitae, numquam eum ipsum ex veritatis itaque repudiandae esse totam impedit consectetur labore, incidunt delectus odit ratione distinctio nihil sint, blanditiis ut corporis alias voluptatem quisquam. Recusandae laboriosam vero quaerat fugiat vitae veritatis quod nulla, necessitatibus velit quo a commodi tenetur nesciunt dolorum hic, porro dolor quasi temporibus autem dolorem. Autem et odit, totam possimus dolore nam, libero nobis sed cumque, magni maiores quisquam odio tempora omnis. Sunt nihil architecto id dolorum perspiciatis cum autem quisquam, laudantium vel deserunt ipsa recusandae nemo alias illum nobis voluptas. Ab, veniam non!</p>
        </section>
    `,
    methods: {
        callBus() {
            // eventBus.$emit('puk');
            // eventBus.$emit('puk2');
        }
    },
    created() {
        console.log('Created');
    },
    // mounted(){
    //     console.log('Mounted');
    //     console.log(this.$refs.header);
    // }
}