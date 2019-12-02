<template>
    <b-row class="my-4 text-right">
            <b-col sm="4">
                    <label><code>Fiancial Need: </code></label>
            </b-col>
            <b-col sm="3">
                <div>
                    <b-form-select 
                    v-model="$v.financialNeedValue.$model"
                    :state="$v.financialNeedValue.$dirty ? !$v.financialNeedValue.$error : null" 
                    :options="financialNeed"></b-form-select>
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
        financialNeedValue: null,
        financialNeed:[
                {value:"Yes", text:"Yes"},
                {value:"No", text:"No"},
            ]
        }
    },
    validations:{
        financialNeedValue:{
            required
        }
    },
    methods:{
        check(){
            this.$v.financialNeedValue.$touch();
            return !this.$v.financialNeedValue.$invalid;
        },
        getFinancialNeed(){
            return this.financialNeedValue;
        }
    }
};
</script>