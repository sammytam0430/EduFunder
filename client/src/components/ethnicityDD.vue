<template>
    <b-row class="my-4 text-right">
            <b-col sm="4">
                    <label><code>Ethnicity: </code></label>
            </b-col>
            <b-col sm="3">
                <div>
                    <b-form-select :options="ethnicities"
                        v-model="$v.ethnicityValue.$model"
                        :state="$v.ethnicityValue.$dirty ? !$v.ethnicityValue.$error : null" 
                    ></b-form-select>
                </div>
            </b-col>
    </b-row>
</template>
<script>
import { validationMixin } from 'vuelidate'
import { required} from 'vuelidate/lib/validators'

export default{
    mixins: [validationMixin],
    data(){
        return{
        ethnicityValue: null,
        ethnicities:[
            { value:"African", text:"African"},
            { value:"American", text:"American"},
            { value:"Austrian", text:"Austrian"},
            { value:"Canadian", text:"Canadian"},
            { value:"Chinese", text:"Chinese"},
            { value:"French", text:"French"},
            { value:"English", text:"English"},
            { value:"Indian", text:"Indian"},
            { value:"Filipino", text:"Filipino"},
            { value:"Italian", text:"Italian"},
            { value:"Russian", text:"Russian"},
            { value:"Portuguese", text:"Portuguese"},
            { value:"Spanish", text:"Spanish"},
            { value:"Vietnamese", text:"Vietnamese"},
            { value:"Korean", text:"Korean"},
            { value:"Jewish", text:"Jewish"},
            { value:"Japanese", text:"Japanese"},
            { value:"Colombian", text:"Colombian"},
            { value:"South Asian", text:"South Asian"},
            { value:"South African", text:"South"},

        ]
        }
    },
    validations:{
        ethnicityValue:{
            required
        }
    },
    methods:{
        check(){
            this.$v.ethnicityValue.$touch();
            return !this.$v.ethnicityValue.$invalid;
        },
        getEthnicity(){
            return this.ethnicityValue;
        }
    }
}
</script>