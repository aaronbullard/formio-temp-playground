<template>
  <div class="home container">
    <Form 
        ref="form"
        :form="form"
        :options="options"
        :submission="submission"
        @foobar="submit"
    />
  </div>
</template>

<script>
import { Form } from 'vue-formio';
import ClientForm from '@/fixtures/clientForm.json';
import CustomForm from '@/fixtures/custom.json';
import Counter from '@/components/Counter';

/**
 * Files and signature store as base64
 * Base64 -> PDF = https://base64.online/decoders/decode-base64-to-pdf
 */

export default {
    name: 'FormPage',
    components: {
        Form,
        Counter
    },
    mounted() {
        // const spinners = this.$refs.form.$el.querySelectorAll('div[ref="fileProcessingLoader"]');
        // console.log({spinners});
        // spinners.forEach(spinner => spinner.style.display = 'none');
    },
    data() {
        return {
            remote: 'https://xzjoppmhtprdmuv.form.io/test',
            submission: {
                data: {
                    firstName: 'Aaron',
                    lastName: 'Bullard',
                    birthday: '05/23/1977',
                    textArea1: 'Hi there area',
                    textField: 'Hi there field'
                },
            },
            options: {
                namespace: 'formio',
                readOnly: true,
                viewAsHtml: false
            }
        };
    },
    computed: {
        form() {
            return ClientForm;
        }
    },
    methods: {
        submit(payload) {
            console.log({payload});
        },
    },
};
</script>
