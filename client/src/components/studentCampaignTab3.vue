<template>
<div class="content-3">
        <!-- <b-row class="my-4">
        <b-col cols="4" class="text-right">
           <label><code>My Profile Picture:</code></label>
        </b-col>

        <b-col cols="4">
            <div class="inputFix">
        <b-form-file
              v-model="file"
              placeholder="Choose a file or drop it here..."
              drop-placeholder="Drop file here..."
              >
        </b-form-file>
        </div>
        </b-col>
        </b-row>

        <b-row class="my-4">
        <b-col cols="4" class="text-right">
           <label><code>My Campaign Image:</code></label>
        </b-col>
        <b-col cols="4">
            <div class="inputFix">
        <b-form-file
              v-model="file"
              placeholder="Choose a file or drop it here..."
              drop-placeholder="Drop file here..."
              >
        </b-form-file>
        </div>
        </b-col>
        </b-row> -->

        <!-- Funding Goal Amount -->
        <b-row class="my-4">
            <b-col cols="4" class="text-right">
                <label><code>Funding Goal($):</code></label>
            </b-col>
            <b-col>
             <b-col sm="5">
                <b-form-input placeholder="e.g 25000"
                v-model="$v.tab3.fundingGoalAmount.$model" 
                :state="$v.tab3.fundingGoalAmount.$dirty ? !$v.tab3.fundingGoalAmount.$error : null"
                aria-describedby="input-1-live-feedback"></b-form-input>
                <b-form-invalid-feedback id="input-1-live-feedback">
                    Please enter goal amount for your campaign!
                </b-form-invalid-feedback>
             </b-col>
            </b-col>
        </b-row>

        <!-- Funding duration -->

        <b-row class="my-4">
            <b-col cols="4" class="text-right">
                <label><code>Funding Duration(days):</code></label>
            </b-col>
            <b-col>
             <b-col sm="5">
                <b-form-input placeholder="e.g 300"
                v-model="$v.tab3.fundingDuration.$model" 
                :state="$v.tab3.fundingDuration.$dirty ? !$v.tab3.fundingDuration.$error : null"
                aria-describedby="input-1-live-feedback"></b-form-input>
                <b-form-invalid-feedback id="input-1-live-feedback">
                    Please enter duration of your campaign!
                </b-form-invalid-feedback>
             </b-col>
            </b-col>
        </b-row>

        <b-row class="my-4">
        <b-col cols="4" class="text-right">
            <label><code>When will the campaign end?</code></label>
        </b-col>
        <b-col cols="3">
            <div class="inputFix ml-3">
                <b-form-select :options="endMethod"
                v-model="$v.tab3.selectDuration.$model" 
                :state="$v.tab3.selectDuration.$dirty ? !$v.tab3.selectDuration.$error : null"
                aria-describedby="input-1-live-feedback"></b-form-select>
                <b-form-invalid-feedback id="input-1-live-feedback">
                    Please enter duration of your campaign!
                </b-form-invalid-feedback>
            </div>
        </b-col>
        </b-row>
        </div>
</template>
<script>
import { validationMixin } from 'vuelidate'
import { required, numeric} from 'vuelidate/lib/validators'

export default{
    mixins: [validationMixin],
    data(){
        return{
            tab3:{
                fundingGoalAmount: null,
                fundingDuration: null,
                selectDuration: null
            },
            endMethod:[
                {value:null, text:"Target Goal"},
                {value:'Target Date', text:"Target Date"},
                {value:'Target Date & Goal', text:"Target Date & Goal"},
                {value:'Campaign will not end', text:"Campaign will not end"}
            ]
        }
    },
    validations:{
        tab3:{
            fundingGoalAmount:{
                required,
                numeric
            },
            fundingDuration:{
                required,
                numeric
            },
            selectDuration:{
                required
            }
        }
    },
    methods:{
        check(){
            this.$v.tab3.$touch();
            var isValid = !this.$v.tab3.$invalid;
            this.$emit('getTab3',this.tab3, isValid);

            return isValid;
        }
    }
}

</script>