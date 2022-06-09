<template>
  <div class="home container">
    <FormBuilder
        ref="formbuilder"
        :form="form"
        :options="options"
        @submit="onSubmit"
    />
  </div>
</template>

<script>
import { FormBuilder } from 'vue-formio';
import CustomForm from '@/fixtures/custom.json';
import CheckMatrix from '@/custom/CheckMatrixLight/components/CheckMatrix.js';
import RandoVue from '@/custom/Rando/components/RandoVue.js';

const originalEditForm = window.Formio.Components.components.textfield.editForm;
const originalEditFormTabs = originalEditForm().components.find(obj => obj.key === 'tabs');

export default {
    components: {
        FormBuilder,
    },
    mounted() {
        console.log({
            editForm: originalEditForm(),
            originalEditFormTabs
        });
        
        window.Formio.Components.components.textfield.editForm = this.editForm;
    },
    data() {
      return {
        form: CustomForm,
        options: {
            namespace: "Custom",
            builder: {
                basic: {
                    components: {
                        checkmatrix: {
                            title: 'Check Matrix',
                            key: 'checkmatrix',
                            icon: 'check-square',
                            schema: CheckMatrix.schema(),
                        },
                        randovue: {
                            title: 'Rando Vue',
                            key: 'randovue',
                            schema: RandoVue.schema(),
                        },
                    }
                }
            }
        },
      };
    },
    computed: {
        editForm() {
            return () => {
                return {
                    components: [
                        {type: 'hidden', key: 'type'},
                        {
                            key: "tabs",
                            type: "tabs",
                            components: originalEditFormTabs.components.filter(comp => {
                                console.log({comp});
                                return comp.key === 'display';
                            })
                        }
                    ]
                }
            }
        }
    },
    methods: {
        onSubmit(payload) {
            console.log({payload})
        }
    }
};
</script>
