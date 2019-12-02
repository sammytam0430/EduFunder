<template>
<div class="content-1">
        <b-row>
            <b-col sm="4" class="text-right">
             <label><code>My Campaign Title:</code></label>
            </b-col>
            <b-col sm="5">
                <b-form-input
                 v-model="$v.tab1.campaignTitle.$model" 
                :state="$v.tab1.campaignTitle.$dirty ? !$v.tab1.campaignTitle.$error : null"
                aria-describedby="input-1-live-feedback"></b-form-input>
                <b-form-invalid-feedback id="input-1-live-feedback">
                    Please enter a title of your campaign
                    </b-form-invalid-feedback>
            </b-col>
        </b-row>
        <b-row>
        <b-container fluid>
            <b-row class="my-3">
            <b-col sm="4" class="text-right">
            <label for="textarea-auto-height"><code>Description:</code> </label>
            </b-col>
                <b-col sm="5">
                    <b-form-textarea
                    id="textarea-auto-height"
                                        rows="4"
                    max-rows="4"
                    placeholder="Main description about your campaign. Example would look like:  Hi friends and family. I have created an EduFunder to help me pay for school. I am studying ____(area of study) ___ at ____(university/college)___________. My goal is to become a _________________ so that I can help __________________.  "
                     v-model="$v.tab1.DescriptionText.$model" 
                    :state="$v.tab1.DescriptionText.$dirty ? !$v.tab1.DescriptionText.$error : null"
                    aria-describedby="input-1-live-feedback"
                    ></b-form-textarea>
                    <b-form-invalid-feedback id="input-1-live-feedback">
                    Please enter a description of your campaign
                    </b-form-invalid-feedback>
                </b-col>
            </b-row>
            <b-row class="my-3">
            <b-col sm="4" class="text-right">
            <label for="textarea-auto-height"><code>Education Benefit:</code> </label>
            </b-col>
                <b-col sm="5">
                    <b-form-textarea
                    id="textarea-auto-height"
                    placeholder="How my education will help me make a difference"
                    rows="4"
                    max-rows="4"
                    v-model="$v.tab1.educationText.$model" 
                    :state="$v.tab1.educationText.$dirty ? !$v.tab1.educationText.$error : null"
                    aria-describedby="input-1-live-feedback"
                    ></b-form-textarea>
                    <b-form-invalid-feedback id="input-1-live-feedback">
                    Please explain how this campaign can support your education!    
                    </b-form-invalid-feedback>
                </b-col>
            </b-row>

            <b-row class="my-3">
            <b-col cols="4" class="text-right">
                <label for="textarea-auto-height"><code>Biography:</code> </label>
            </b-col>
                <b-col cols="5">
                    <b-form-textarea
                    id="textarea-auto-height"
                    placeholder="Write a short description of your biography!"
                                        rows="4"
                    max-rows="4"
                    v-model="$v.tab1.biographyText.$model" 
                    :state="$v.tab1.biographyText.$dirty ? !$v.tab1.biographyText.$error : null"
                    aria-describedby="input-1-live-feedback"
                    ></b-form-textarea>
                    <b-form-invalid-feedback id="input-1-live-feedback">
                    Please enter a little information about yourself!
                    </b-form-invalid-feedback>
            </b-col>
            </b-row>

            <b-row class="my-3">
            <b-col cols="4" class="text-right">
            <label for="textarea-auto-height"><code>Goal in Life:</code> </label>
            </b-col>
                <b-col cols="5">
                    <b-form-textarea
                    id="textarea-auto-height"
                    placeholder="Describe your goals"
                                        rows="4"
                    max-rows="4"
                    v-model="$v.tab1.goalText.$model" 
                    :state="$v.tab1.goalText.$dirty ? !$v.tab1.goalText.$error : null"
                    aria-describedby="input-1-live-feedback"
                    ></b-form-textarea>
                    <b-form-invalid-feedback id="input-1-live-feedback">
                    Please write about your goals.
                    </b-form-invalid-feedback>
                </b-col>
            </b-row>
                
        </b-container>
        </b-row>
        </div>
</template>
<script>
import { validationMixin } from 'vuelidate'
import { required, alpha, maxLength, numeric} from 'vuelidate/lib/validators'

export default{
    mixins: [validationMixin],
    data(){
        return{
            tab1:{
                DescriptionText: null,
                educationText: null,
                campaignTitle: null,
                biographyText: null,
                goalText: null
            },
        }
    },
    validations:{
        tab1:{
            DescriptionText:{
                required,
                maxLength: maxLength(100)
            },
            educationText:{
                required,
                maxLength: maxLength(250)
            },
            campaignTitle:{
                required
            },
            biographyText:{
                required,
                maxLength: maxLength(250)
            },
            goalText:{
                required,
                maxLength: maxLength(250)
            }
        }
    },
    methods:{
        check(){
            this.$v.tab1.$touch();
            var isValid = !this.$v.tab1.$invalid;
            this.$emit('getTab1',this.tab1, isValid);
            console.log(isValid);
            return isValid;
        }
    }
}
</script>