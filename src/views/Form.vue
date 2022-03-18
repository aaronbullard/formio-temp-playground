<template>
  <div class="home container">
    <Form 
        :form="src"
        :submission="submission"
        @foobar="submit"
    />
  </div>
</template>

<script>
import { Form } from 'vue-formio';
import ClientForm from '@/fixtures/clientForm.json';

/**
 * Files and signature store as base64
 * Base64 -> PDF = https://base64.online/decoders/decode-base64-to-pdf
 */

export default {
    name: 'FormPage',
    components: {
        Form,
    },
    data() {
        return {
            src: 'https://xzjoppmhtprdmuv.form.io/test',
            fixture: ClientForm,
            submission: {
                data: {
                    firstName: 'Aaron',
                    lastName: 'Bullard',
                },
            },
        };
    },
    methods: {
        submit(payload) {
            console.log(payload);
        },
    },
};
</script>
