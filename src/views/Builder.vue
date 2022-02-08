<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <FormBuilder v-if="fetched" v-bind:form="form" ref="formbuilder" />
    <button class="btn btn-primary btn-md" @click="updateForm">Update</button>
  </div>
</template>

<script>
// import { Component, Vue } from 'vue-property-decorator';
import { FormBuilder } from 'vue-formio';
import { Formio } from 'formiojs';
import module from './../modules/module.js';

export default {
    components: {
        FormBuilder,
    },
    created() {
      fetch(this.formUrl)
        .then((res) => res.json())
        .then((res) => {
            this.form = res;
            this.fetched = true;
        });
    },
    data() {
      return {
        fetched: false,
        formId: '616dcb57b35ff10faecbc790',
        form: {},
      };
    },
    computed: {
      formUrl() {
        return `https://xzjoppmhtprdmuv.form.io/form/${this.formId}`;
      },
    },
    methods: {
        updateForm() {
            fetch(this.formUrl, {
                method: 'PUT',
                headers: {
                  'Content-type': 'application/json; charset=UTF-8' // Indicates the content
                },
                body: JSON.stringify(this.form),
            })
                .then((res) => res.json())
                .then((form) => {
                    console.log({form});
                    this.fetched = false;
                    this.form = form;
                    this.fetched = true;
                })
                .catch((e) => console.log(e));
        },
    },
};

// @Component({
//   components: {
//     FormBuilder,
//   },
//   data: () => {
//     return {
//       formId: '616dcb57b35ff10faecbc790',
//       form: {},
//     };
//   },
// })
// export default class Home extends Vue {}
</script>
