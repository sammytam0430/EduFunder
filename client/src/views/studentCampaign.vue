<template>
    <form-wizard>
        <h5 id="content-1-title" slot="title">
            Creat your campaign!
        </h5>
    <!--Biography-->
    <tab-content title="Tell us about yourself"> 
        <div class="content-1">
        <b-row>
            <b-col sm="2" class="text-right">
             <label><code>My Campaign Title:</code></label>
            </b-col>
            <b-col sm="6">
                <b-form-input></b-form-input>
            </b-col>
        </b-row>
        <b-row>
        <b-container fluid>
            <b-row class="my-3">
            <b-col sm="2" class="text-right">
            <label for="textarea-auto-height"><code>Education Benefit:</code> </label>
            </b-col>
                <b-col sm="6">
                    <b-form-textarea
                    id="textarea-auto-height"
                    placeholder="How my education will help me make a difference"
                    rows="4"
                    max-rows="4"
                    ></b-form-textarea>
                </b-col>
            </b-row>

            <b-row class="my-3">
            <b-col sm="2" class="text-right">
                <label for="textarea-auto-height"><code>Biography:</code> </label>
            </b-col>
                <b-col sm="6">
                    <b-form-textarea
                    id="textarea-auto-height"
                    placeholder="Write a short description of your biography!"
                    rows="4"
                    max-rows="4"
                    ></b-form-textarea>
            </b-col>
            </b-row>

            <b-row class="my-3">
            <b-col sm="2" class="text-right">
            <label for="textarea-auto-height"><code>Goal in Life:</code> </label>
            </b-col>
                <b-col sm="6">
                    <b-form-textarea
                    id="textarea-auto-height"
                    placeholder="Describe your goals"
                    rows="4"
                    max-rows="4"
                    ></b-form-textarea>
                </b-col>
            </b-row>
                
        </b-container>
        </b-row>
        </div>
    </tab-content>
    
    <!--Status information-->
    <tab-content title="Status">
        <div class="content-2">    
        <!-- test-->

        <studyFieldDD/>

        <b-row>
            <b-col sm="4" class="text-right">
                <label><code>Post-Secondary Choice:</code></label>
            </b-col>
            <b-col sm="4">
                <b-form-input></b-form-input>
            </b-col>
        </b-row>
        <div class="selectBoxes">
        
        <b-row>
        
        <b-form-group>  
            <b-form-radio-group id="radio-group-2" v-model="selected" name="radio-sub-component">
                
                <label><code>Post-Secondary Status:  </code></label>
                <b-form-radio value="first">Enrolled</b-form-radio>
                <b-form-radio value="second">Applying</b-form-radio>
                
        </b-form-radio-group>
        </b-form-group>
        </b-row>
        </div>
        
        <b-row class="my-3">
            <b-col sm="4" class="text-right">
                <label><code>Top 3 Academic Achievement:</code></label>
            </b-col>
            <b-col sm="4">
                <b-form-input placeholder="E.g honor rolls "></b-form-input>
            </b-col>
        </b-row>
        <b-row class="my-2">
            <b-col sm="4"></b-col>
            <b-col sm="4">
                <b-form-input></b-form-input>
            </b-col>
        </b-row>
        <b-row class="my-2">
            <b-col sm="4"></b-col>
            <b-col sm="4">
                <b-form-input></b-form-input>
            </b-col>
        </b-row>

        <b-row class="my-3">
            <b-col sm="4" class="text-right">
                <label><code>Top 3 Ways to help others:</code></label>
            </b-col>
            <b-col sm="4">
                <b-form-input placeholder="E.g volunteer"></b-form-input>
            </b-col>
        </b-row>
        <b-row class="my-3">
            <b-col sm="4"></b-col>
            <b-col sm="4">
                <b-form-input></b-form-input>
            </b-col>
        </b-row>
        <b-row class="my-3">
            <b-col sm="4"></b-col>
            <b-col sm="4">
                <b-form-input></b-form-input>
            </b-col>
        </b-row>

        <b-row class="my-3">
            <b-col sm="4" class="text-right">
                <label><code>Top 3 Interest/Hobbies</code></label>
            </b-col>
            <b-col sm="4">
                <b-form-input placeholder="E.g playing piano"></b-form-input>
            </b-col>
        </b-row>
        <b-row class="my-3">
            <b-col sm="4"></b-col>
            <b-col sm="4">
                <b-form-input></b-form-input>
            </b-col>
        </b-row>
        <b-row class="my-3">
            <b-col sm="4"></b-col>
            <b-col sm="4">
                <b-form-input></b-form-input>
            </b-col>
        </b-row>
        
        <div class="selectBoxes">
            <b-form-group>
                <b-form-checkbox-group
                id="checkbox-group-1"
                v-model="selected"
                :options="options"
                name="flavour-1"
                ></b-form-checkbox-group>
        </b-form-group>
        <label><code>3 Ways I'm saving for school: </code></label>
        <b-form-group>
            <b-form-checkbox-group id="checkbox-group-2" name="flavour-2" stacked>
                <b-form-checkbox value="orange">Student Loan</b-form-checkbox>
                <b-form-checkbox value="apple">Scholarship & Grants</b-form-checkbox>
                <b-form-checkbox value="pineapple">Parents</b-form-checkbox>
                <b-form-checkbox value="grape">part-time work</b-form-checkbox>
                <b-form-checkbox value="grapes">others</b-form-checkbox>
            </b-form-checkbox-group>
        </b-form-group>
        </div>

        <b-row class="my-4">
            <b-col sm="4" class="text-right">
                <label><code>Cost of my Education:</code></label>
            </b-col>
            <b-col sm="4">
                <b-form-input placeholder="E.g $28000"></b-form-input>
            </b-col>
        </b-row>
        <div class="selectBoxes">
        <label><code>Donation will help me with: </code></label>
        <b-form-group>
            <b-form-checkbox-group label="Donation will help me with" id="checkbox-group-2" v-model="selected" name="flavour-2" stacked>
                <b-form-checkbox value="orange">Tuition</b-form-checkbox>
                <b-form-checkbox value="apple">Room & Board</b-form-checkbox>
                <b-form-checkbox value="pineapple">Book & Supploes</b-form-checkbox>
                <b-form-checkbox value="grape">Transportation</b-form-checkbox>
            </b-form-checkbox-group>
        </b-form-group>
        </div>
        </div>
    </tab-content>
    
    <!--Set your campaign!-->
    <tab-content title="Set your campaign!">
        <div class="content-3">
        <b-row class="my-4">
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
        </b-row>

        <b-row class="my-4">
            <b-col cols="4" class="text-right">
                <label><code>Campaign Video:</code></label>
            </b-col>
            <b-col>
             <b-col sm="5">
                <b-form-input placeholder="https://"></b-form-input>
             </b-col>
            </b-col>
        </b-row>

        <b-row class="my-4">
            <b-col cols="4" class="text-right">
                <label><code>Funding Goal:</code></label>
            </b-col>
            <b-col>
             <b-col sm="5">
                <b-form-input></b-form-input>
             </b-col>
            </b-col>
        </b-row>

        <b-row class="my-4">
        <b-col cols="4" class="text-right">
            <label><code>When will the campaign end?</code></label>
        </b-col>
        <b-col cols="4">
            <div class="inputFix">
                <b-form-select v-model="selected" :options="endMethod"></b-form-select>
            </div>
        </b-col>
        </b-row>

        <b-row class="my-4">
            <b-col cols="4" class="text-right">
                <label><code>Current School:</code></label>
            </b-col>
            <b-col>
             <b-col sm="5">
                <b-form-input></b-form-input>
             </b-col>
            </b-col>
        </b-row>

        <b-row class="my-4">
            <b-col cols="4" class="text-right">
                <label><code>Current Location:</code></label>
            </b-col>
            <b-col>
             <b-col sm="5">
                <b-form-input></b-form-input>
             </b-col>
            </b-col>
        </b-row>

        <b-row class="my-4">
        <b-col cols="4" class="text-right">
            <label><code>Country</code></label>
        </b-col>
        <b-col cols="4">
            <div class="inputFix">
                <b-form-select v-model="selected" :options="country"></b-form-select>
            </div>
        </b-col>
        </b-row>
        </div>
    </tab-content>
    
    </form-wizard>
</template>

<script>
import {FormWizard, TabContent} from 'vue-form-wizard'
import 'vue-form-wizard/dist/vue-form-wizard.min.css'
import studyFieldDD from "@/components/studyFieldDD.vue";

export default{
    data(){
        return{
            selected: null,
            endMethod:[
                {value:null, text:"Target Goal"},
                {value:'a', text:"Target Date"},
                {value:'b', text:"Target Date & Goal"},
                {value:'c', text:"Campaign will not end"},
            ],
            country:[
                {value:null, text:"Choose an Option"},
                {value:'ab', text:"Canada"},
                {value:'bd', text:"United States"},
            ]
        }
    },
    components: {
    FormWizard,
    TabContent,
    studyFieldDD
    }
}
</script>
<style scoped>
    .inputFix{
        margin-left:3%;
        margin-right:17%;
    }
    .content-1{
        padding-left:25%;
    }
    .selectBoxes{
        padding-left:34%;
    }
    .content-3{
        padding-left:10%;
    }
</style>