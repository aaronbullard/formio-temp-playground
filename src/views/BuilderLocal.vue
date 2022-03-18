<template>
  <div class="home container">
    <img alt="Vue logo" src="../assets/logo.png">
    <FormBuilder
        ref="formbuilder"
        :form="form"
        :options="options"
    />
    <button class="btn btn-primary" @click="pageSwap">Swap Pages</button>
  </div>
</template>

<script>
import { FormBuilder } from 'vue-formio';
import ClientForm from '@/fixtures/clientForm.json';

export default {
    components: {
        FormBuilder,
    },
    data() {
      return {
        form: ClientForm,
        options: {
            tags: ['one'],
            noDefaultSubmitButton: true,
            editForm: this.editForm,
            // builder: {
            //     customBasic: {
            //         title: 'Basic Components',
            //         default: true,
            //         weight: 0,
            //         components: {
            //             input: true
            //         }
            //     }
            // }
        }
      };
    },
    methods: {
        pageSwap() {
            // console.log("pageSwap");
            const form = {...this.form};
            const components = [...this.form.components];
            form.components[0] = components[1];
            form.components[1] = components[0];
            this.form = form;
        },
        update(payload) {
            console.log({update: payload});
        },
    },
    computed: {
        editForm() {
            return () => {
                return {
                    components: this.form.components
                }
            }
        }
    }
};
</script>
