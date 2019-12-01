<template>
<div class="content-2">    
        <!-- test-->
 
        <div class="selectBoxes">
            <b-row>
                <b-col cols="4" class="text-right">    
                    <label><code>Post-Secondary Status:  </code></label>
                </b-col>    
                <b-col cols="4">
                    <b-form-group>  
                        <b-form-radio-group 
                            v-model="$v.tab2.postSecondaryStatus.$model" 
                            :state="$v.tab2.postSecondaryStatus.$dirty ? !$v.tab2.postSecondaryStatus.$error : null"
                            aria-describedby="input-1-live-feedback"
                            :options="postSecondarySelect">
                        </b-form-radio-group>
                    </b-form-group>
                </b-col>
            </b-row>
        </div>
        
        <!-- Top 3 Academic Achievement-->
        <b-row class="my-3">
            <b-col sm="4" class="text-right">
                <label><code>Top 3 Academic Achievement:</code></label>
            </b-col>
            <b-col sm="4">
                <b-form-input placeholder="E.g honor rolls"
                v-model="$v.tab2.achievementText.$model" 
                :state="$v.tab2.achievementText.$dirty ? !$v.tab2.achievementText.$error : null"
                aria-describedby="input-1-live-feedback"></b-form-input>
            </b-col>
            <b-form-invalid-feedback id="input-1-live-feedback">
                    Please enter your academic achievement.
            </b-form-invalid-feedback>
        </b-row>
        <b-row class="my-2">
            <b-col sm="4"></b-col>
            <b-col sm="4">
                <b-form-input
                v-model="$v.tab2.achievementText1.$model" 
                :state="$v.tab2.achievementText1.$dirty ? !$v.tab2.achievementText1.$error : null"
                aria-describedby="input-1-live-feedback"></b-form-input>
                <b-form-invalid-feedback id="input-1-live-feedback">
                    Please enter your academic achievement.
            </b-form-invalid-feedback>
            </b-col>
        </b-row>
        <b-row class="my-2">
            <b-col sm="4"></b-col>
            <b-col sm="4">
                <b-form-input v-model="$v.tab2.achievementText2.$model" 
                :state="$v.tab2.achievementText2.$dirty ? !$v.tab2.achievementText2.$error : null"
                aria-describedby="input-1-live-feedback"></b-form-input>
                <b-form-invalid-feedback id="input-1-live-feedback">
                    Please enter your academic achievement.
            </b-form-invalid-feedback>
            </b-col>
        </b-row>

        <!-- Top 3 Volunteer moments-->
        <b-row class="my-3">
            <b-col sm="4" class="text-right">
                <label><code>Top 3 Ways to help others:</code></label>
            </b-col>
            <b-col sm="4">
                <b-form-input v-model="$v.tab2.helpText.$model" 
                :state="$v.tab2.helpText.$dirty ? !$v.tab2.helpText.$error : null"
                aria-describedby="input-1-live-feedback"></b-form-input>
               
                 <b-form-invalid-feedback id="input-1-live-feedback">
                    Please enter how you would help others!
            </b-form-invalid-feedback>
            </b-col>
        </b-row>
        <b-row class="my-3">
            <b-col sm="4"></b-col>
            <b-col sm="4">
                <b-form-input v-model="$v.tab2.helpText1.$model" 
                :state="$v.tab2.helpText1.$dirty ? !$v.tab2.helpText1.$error : null"
                aria-describedby="input-1-live-feedback"></b-form-input>
                <b-form-invalid-feedback id="input-1-live-feedback">
                    Please enter how you would help others!
            </b-form-invalid-feedback>
            </b-col>
        </b-row>
        <b-row class="my-3">
            <b-col sm="4"></b-col>
            <b-col sm="4">
                <b-form-input v-model="$v.tab2.helpText2.$model" 
                :state="$v.tab2.helpText2.$dirty ? !$v.tab2.helpText2.$error : null"
                aria-describedby="input-1-live-feedback"></b-form-input>
                <b-form-invalid-feedback id="input-1-live-feedback">
                    Please enter how you would help others!
            </b-form-invalid-feedback>
            </b-col>
        </b-row>

        <!-- Top 3 Hobbies -->
        <b-row class="my-3">
            <b-col sm="4" class="text-right">
                <label><code>Top 3 Interest/Hobbies</code></label>
            </b-col>
            <b-col sm="4">
                <b-form-input v-model="$v.tab2.hobbyText.$model" 
                :state="$v.tab2.hobbyText.$dirty ? !$v.tab2.hobbyText.$error : null"
                aria-describedby="input-1-live-feedback"></b-form-input>
                <b-form-invalid-feedback id="input-1-live-feedback">
                    Please share your interset or hobbies!
            </b-form-invalid-feedback>
            </b-col>
        </b-row>
        <b-row class="my-3">
            <b-col sm="4"></b-col>
            <b-col sm="4">
                <b-form-input v-model="$v.tab2.hobbyText1.$model" 
                :state="$v.tab2.hobbyText1.$dirty ? !$v.tab2.hobbyText1.$error : null"
                aria-describedby="input-1-live-feedback"></b-form-input>
                <b-form-invalid-feedback id="input-1-live-feedback">
                    Please share your interset or hobbies!
            </b-form-invalid-feedback>
            </b-col>
        </b-row>
        <b-row class="my-3">
            <b-col sm="4"></b-col>
            <b-col sm="4">
                <b-form-input v-model="$v.tab2.hobbyText2.$model" 
                :state="$v.tab2.hobbyText2.$dirty ? !$v.tab2.hobbyText2.$error : null"
                aria-describedby="input-1-live-feedback"></b-form-input>
                <b-form-invalid-feedback id="input-1-live-feedback">
                    Please share your interset or hobbies!
               </b-form-invalid-feedback>
            </b-col>
        </b-row>
        
        <!--3 Ways I'm saving for school-->
        <b-row>
            <b-col class="text-right" cols="4">
                <b-form-group>
                    <b-form-checkbox-group
                    id="checkbox-group-1"
                    ></b-form-checkbox-group>
                </b-form-group>
                <label><code>How I'm saving for school: </code></label>
            </b-col>
            <b-col class="mt-3">
                <b-form-group>
                    <b-form-checkbox-group stacked
                        v-model="$v.tab2.saving.$model" 
                        :state="$v.tab2.saving.$dirty ? !$v.tab2.saving.$error : null">
                        <b-form-checkbox v-for="saving in preparation" :key='saving' :value="saving.id">{{saving.id}}</b-form-checkbox> 
                    </b-form-checkbox-group>
                </b-form-group>
            </b-col>
        </b-row>

        <!-- cost of my education -->
        
        <b-row class="my-4">
            <b-col sm="4" class="text-right">
                <label><code>Cost of my Education($):</code></label>
            </b-col>
            <b-col sm="4">
                <b-form-input placeholder="e.g 28000" v-model="$v.tab2.educationCost.$model" 
                :state="$v.tab2.educationCost.$dirty ? !$v.tab2.educationCost.$error : null"
                aria-describedby="input-1-live-feedback"></b-form-input>
                <b-form-invalid-feedback id="input-1-live-feedback">
                    Please enter approximate cost of your education
                </b-form-invalid-feedback>
            </b-col>
        </b-row>

        <!--Donation support -->

        <b-row>
            <b-col cols="4" class="text-right">
                <label><code>Donation will help me with: </code></label>
            </b-col>
            <b-col>
                <b-form-group>
                    <b-form-checkbox-group stacked
                        v-model="$v.tab2.donationSupport.$model" 
                        :state="$v.tab2.donationSupport.$dirty ? !$v.tab2.donationSupport.$error : null">
                        <b-form-checkbox v-for="support in donations" :key="support.id" :value="support.id">{{support.id}}</b-form-checkbox>
                    </b-form-checkbox-group>
                </b-form-group>
            </b-col>
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
            tab2:{
                postSecondaryStatus:null,
                achievementText: null,
                achievementText1: null,
                achievementText2: null,
                helpText: null,
                helpText1: null,
                helpText2: null,
                hobbyText:null,
                hobbyText1: null,
                hobbyText2: null,
                educationCost: null,
                saving:null,
                donationSupport: null
            },
            postSecondarySelect:[
                {value: 'Enrolled', text:'Enrolled'},
                {value: 'Applied', text:'Applied'}
            ],
            preparation:[
                {id: 'Scholarship & Grants', value:'scholarshipAndGrants'},
                {id: 'Parents', value:'parents'},
                {id: 'Part-Time work', value:'partTimeWork'},
                {id: 'others', value:'others'},
            ],
            donations:[
                {id:'Tuition', value:'tuition'},
                {id:'Room & Board', value:'roomAndBoard'},
                {id:'Book & Supplies', value:'bookAndSupplies'},
                {id:'Transportation', value:'transportation'},
            ]
        }
    },
    validations:{
        tab2:{
            achievementText:{
                required
            },
            achievementText1:{
                required
            },
            achievementText2:{
                required
            },
            helpText:{
                required
            },
            helpText1:{
                required
            },
            helpText2:{
                required
            },
            hobbyText:{
                required,
            },
            hobbyText1:{
                required
            },
            hobbyText2:{
                required
            },
            educationCost:{
                required
            },
            saving:{
                required
            },
            postSecondaryStatus:{
                required
            },
            donationSupport:{
                required
            }
        }
    },
    methods:{
        check(){
            this.$v.tab2.$touch();
            var isValid = !this.$v.tab2.$invalid;
            this.$emit('getTab2',this.tab2, isValid);
            console.log(isValid);
            return isValid;
        }
    }
}


</script>