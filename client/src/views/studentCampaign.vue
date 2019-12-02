<template>
    <form-wizard @on-complete="validate3">
        <h5 id="content-1-title" slot="title">
            Creat your campaign!
        </h5>
    <!--Biography-->
    <!-- :before-change="()=>validate()" -->
<<<<<<< HEAD
    <tab-content title="Tell us about yourself"> 
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
=======
    <tab-content title="Tell us about yourself" :before-change="()=>validate()"> 
        <studentCampaignTab1 ref='tab-content-1' @getTab1='getData'/>
>>>>>>> c4f3d83c524761f5abcfaff578433093659826a7
    </tab-content>

    <!--Status information-->
<<<<<<< HEAD
    <!-- :before-change="()=>validate()" -->
    <tab-content title="Status">
      <div class="content-2">
        <!-- test-->
 
        <div class="selectBoxes">
            <b-row>
                <b-col cols="4" class="text-right">    
                    <label><code>Post-Secondary Status:  </code></label>
                </b-col>    
                <b-col cols="4">
                    <b-form-group>  
                        <b-form-radio-group id="radio-group-2" v-model="selected" name="radio-sub-component">
                            <b-form-radio v-for="option in options" :key="option.id">{{option.id}}</b-form-radio>
                            <!-- <b-form-radio value="first">Enrolled</b-form-radio>
                            <b-form-radio value="second">Applying</b-form-radio> -->
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
                    <b-form-checkbox-group stacked>
                        <b-form-checkbox v-for="support in donations" :key="support.id" :value="support.id">{{support.id}}</b-form-checkbox>
                    </b-form-checkbox-group>
                </b-form-group>
            </b-col>
        </b-row>        
        </div>
=======
    <!-- :before-change="()=>validate2()" -->
    <tab-content title="Status" :before-change="()=>validate2()">
        <studentCampaignTab2 ref="tab-content-2" @getTab2='getData'/>
>>>>>>> c4f3d83c524761f5abcfaff578433093659826a7
    </tab-content>

    <!--Set your campaign!-->
    <tab-content title="Set your campaign!">
<<<<<<< HEAD
      <div class="content-3">
        <b-row class="my-4">
          <b-col cols="4" class="text-right">
            <label>
              <code>My Profile Picture:</code>
            </label>
          </b-col>

          <b-col cols="4">
            <div class="inputFix">
              <b-form-file
                v-model="file"
                placeholder="Choose a file or drop it here..."
                drop-placeholder="Drop file here..."
              ></b-form-file>
            </div>
          </b-col>
        </b-row>

        <b-row class="my-4">
          <b-col cols="4" class="text-right">
            <label>
              <code>My Campaign Image:</code>
            </label>
          </b-col>
          <b-col cols="4">
            <div class="inputFix">
              <b-form-file
                v-model="file"
                placeholder="Choose a file or drop it here..."
                drop-placeholder="Drop file here..."
              ></b-form-file>
            </div>
          </b-col>
        </b-row>

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
        <b-col cols="4">
            <div class="inputFix">
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
=======
        <studentCampaignTab3 ref="tab-content-3" @getTab3='getData'/>
>>>>>>> c4f3d83c524761f5abcfaff578433093659826a7
    </tab-content>
  </form-wizard>
</template>

<script>
import {FormWizard, TabContent} from 'vue-form-wizard'
import 'vue-form-wizard/dist/vue-form-wizard.min.css'
import 'animate.css/animate.min.css'
import { validationMixin } from 'vuelidate'
import { required, alpha, maxLength, numeric} from 'vuelidate/lib/validators'
import studentCampaignTab1 from "@/components/studentCampaignTab1.vue"
import studentCampaignTab2 from "@/components/studentCampaignTab2.vue"
import studentCampaignTab3 from "@/components/studentCampaignTab3.vue"


export default{
    mixins: [validationMixin],
    data(){
        return{
            formData: null,
        }
    },
    components: {
    FormWizard,
    TabContent,
    studentCampaignTab1,
    studentCampaignTab2,
    studentCampaignTab3
    },
    methods:{
      getData(tabContent, isValid){
         if(isValid){
           console.log("hello world");
           this.formData = Object.assign({}, this.formData, tabContent);
         } 
      },
      validate() {
        return this.$refs['tab-content-1'].check();
      },
      validate2(){
          return this.$refs['tab-content-2'].check();
      },
      validate3(){
        console.log("hello World");
        if (this.$refs['tab-content-3'].check()){
            this.$refs['tab-content-3'].check();
            alert("hello World");
        } else {
        alert("error alert");
        }
      }
    }
}
</script>
<style scoped>
    .inputFix{
        margin-left:3%;
        margin-right:17%;
    }
    .content-2{
        padding-left:10%;
    }
    .content-3{
        padding-left:10%;
    }
    .wizard-tab-content {
        display: flex;
    }
    .wizard-tab-container {
    display: block;
    animation: fadeInRight 0.3s;
    }
    
</style>