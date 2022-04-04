<template>
  <div class="home container">
    <FormBuilder 
        v-if="fetched" 
        :form="form"
        :options="options"
        @change="schemaChange"
        ref="formbuilder"
    />
  </div>
</template>

<script>
import { FormBuilder } from 'vue-formio';

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
        options: {},
      };
    },
    computed: {
      formUrl() {
        return `https://xzjoppmhtprdmuv.form.io/form/${this.formId}`;
      },
    },
    methods: {
        schemaChange(schema) {
            // console.log({schema})
        },
    },
};
</script>
