<template>
  <div class="home">
    <Form src="https://xzjoppmhtprdmuv.form.io/test" />
  </div>
</template>

<script>
// import { Component, Vue } from 'vue-property-decorator';
import { Form } from 'vue-formio';
import module from './../modules/module.js';

export default {
    components: {
        Form,
    },
    created() {
        window.Formio.registerPlugin({
            priority: 0,
            init(formio) {
                formio.events.onAny(function(event){
                    console.log({event})
                })
            },
            preRequest(request) {
                console.log({request})
            },
            deregister() {
                console.log('deregistered testPlugin')
            }
        }, 'testPlugin');
    }
};
// @Component({
//   components: {
//     Form,
//   },
// })
// export default class Home extends Vue {}
</script>
