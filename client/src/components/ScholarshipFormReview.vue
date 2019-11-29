<template>
    <div>
        <div class="text-center mb-4">
            <h4>Scholarship info Review</h4>
        </div>
        <b-container id="basicinfo" class="borderInfo p-3 mb-3">
            <h5>About this scholarship</h5>
            <b-row class="px-4">
                <b-col md="6" sm="12" class="text-right"> Name: </b-col>
                <b-col md="6" sm="12"> {{formData.scholarshipName}} </b-col>
            </b-row>
            <b-row class="px-4">
                <b-col md="6" sm="12" class="text-right"> Amount:  </b-col>
                <b-col md="6" sm="12"> $ {{formData.scholarshipAmount}} </b-col>
            </b-row>
            <b-row class="px-4">
                <b-col md="6" sm="12" class="text-right"> Recipient: </b-col>
                <b-col md="6" sm="12" v-if="parseInt(formData.scholarshipRecipient) < 2"> {{formData.scholarshipRecipient}} student</b-col>
                <b-col md="6" sm="12" v-else> {{formData.scholarshipRecipient}} students</b-col> 
            </b-row>
            <b-row class="px-4">
                <b-col md="6" sm="12" class="text-right"> Additional submission: </b-col>
                <b-col md="6" sm="12" v-html="getOutput(this.formData.scholarshipAddSubmission)"></b-col>
            </b-row>
            <b-row class="px-4">
                <b-col md="6" sm="12" class="text-right"> Application open: </b-col>
                <b-col md="6" sm="12" >{{formData.scholarshipDateStart}} </b-col>
            </b-row>
            <b-row class="px-4">
                <b-col md="6" sm="12" class="text-right"> Application close: </b-col>
                <b-col md="6" sm="12" >{{formData.scholarshipDateEnd}} </b-col>
            </b-row>
            <b-row class="px-4">
                <b-col md="6" sm="12" class="text-right"> Application award: </b-col>
                <b-col md="6" sm="12" >{{formData.scholarshipDateAward}} </b-col>
            </b-row>
        </b-container>
        <b-container id="studReq"  class="borderInfo p-3 mb-3">
            <h5>Student Criteria</h5>
            <p v-if="getSelectedCriteria() != 'None'" class="px-3">The criteria you have specified are: <span v-html="getSelectedCriteria()" class="fontBold"></span>, check the data below:</p>
            <p v-else class="px-3" >You did not specify any criteria, therefore they are all set by default as:</p>
             <b-row class="px-4">
                <b-col md="6" sm="12" class="text-right"> Age: </b-col>
                <b-col md="6" sm="12"> From {{formData.age.selectedAge[0]}} to {{formData.age.selectedAge[1]}}</b-col>
            </b-row>
            <b-row class="px-4">
                <b-col md="6" sm="12" class="text-right"> Province:  </b-col>
                <b-col md="6" sm="12" v-html="getOutput(formData.province.selectedProvince)"> </b-col>
            </b-row>
            <b-row class="px-4">
                <b-col md="6" sm="12" class="text-right"> Gender: </b-col>
                <b-col md="6" sm="12"> {{formData.gender.selectedGender}}</b-col>
            </b-row>
            <b-row class="px-4">
                <b-col md="6" sm="12" class="text-right"> Level of School: </b-col>
                <b-col md="6" sm="12" v-html="getOutput(formData.schoolLevel.selectedSchoolLevel)"> </b-col>
            </b-row>
            <b-row class="px-4">
                <b-col md="6" sm="12" class="text-right"> Field of Study: </b-col>
                <b-col md="6" sm="12" v-html="getOutput(formData.studyFields.selectedStudyFields)"> </b-col>
            </b-row>
            <b-row class="px-4">
                <b-col md="6" sm="12" class="text-right"> School of Study: </b-col>
                <b-col md="6" sm="12" v-html="getOutput(formData.studySchools.selectedStudySchools)"> </b-col>
            </b-row>
            <b-row class="px-4">
                <b-col md="6" sm="12" class="text-right"> Year of Study: </b-col>
                <b-col md="6" sm="12" v-if="formData.studyYear.selectedStudyYear != 'Did not specify'" v-html="getSutdyYear(formData.studyYear.selectedStudyYear)"> </b-col>
                <b-col md="6" sm="12" v-else> {{formData.studyYear.selectedStudyYear}}</b-col>

            </b-row>
            <b-row class="px-4">
                <b-col md="6" sm="12" class="text-right"> Course Load: </b-col>
                <b-col md="6" sm="12"> {{formData.courseLoad.selectedCourseLoad}}</b-col>
            </b-row>
            <b-row class="px-4">
                <b-col md="6" sm="12" class="text-right"> Financial Need: </b-col>
                <b-col md="6" sm="12" v-html="getFinancial(formData.financialNeed.selectedFinancialNeed)"></b-col>
            </b-row>
            <b-row class="px-4">
                <b-col md="6" sm="12" class="text-right"> Citizentship: </b-col>
                <b-col md="6" sm="12" v-html="getOutput(formData.citizenship.selectedCitizenship)"> </b-col>
            </b-row>
            <b-row class="px-4">
                <b-col md="6" sm="12" class="text-right"> Activities: </b-col>
                <b-col md="6" sm="12" v-html="getOutput(formData.activities.selectedActivities)"> </b-col>
            </b-row>
        </b-container>
        <div class=" p-3"> 
            <p v-if="formData.scholarshipVisibility == 'Public'" class="noteFontColor">NOTE: This is a public scholarship, every student will receive a notification of this scholarship</p>
            <p v-else class="noteFontColor">NOTE: This is a private scholarship, an auto invitation email will be send to the students that meet the of this scholarship.</p>
        </div>
        <div class="mb-4">
            <b-form-checkbox v-model="comfirm" @change="$v.comfirm.$touch()"
                :state="!$v.comfirm.$invalid"
                aria-describedby="toComfirm">           
                Please comfirm that the infomation above is correct
            </b-form-checkbox>
            <b-form-invalid-feedback :state="$v.comfirm.$dirty && !$v.comfirm.$error">
                Please check the checkbox before you sumbit the form
            </b-form-invalid-feedback>
        </div>
    </div>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { sameAs } from 'vuelidate/lib/validators'

export default {
    mixins: [validationMixin],
    props: {
        formData: Object
    },
    data() {
      return {  
          comfirm: false
      }
    },
    validations: {
        comfirm: {
                sameAs: sameAs( () => true )
            }
    }, 
    methods: {
        getSelectedCriteria() {
            var keyArray = Object.keys(this.formData.selectedCriteria);
            var selectedC = [];
            for (var i = 0; i < keyArray.length; i++) {
                if (this.formData.selectedCriteria[keyArray[i]].selected == true) {
                    selectedC.push(this.formData.selectedCriteria[keyArray[i]].criteriaTitle);
                }
            }
            if(selectedC.length < 1) {
                return "None";
            }
            var output = '';
            for (var j = 0; j < (selectedC.length - 1); j++) {
                output += selectedC[j] + ", ";
            }
            output += selectedC[selectedC.length - 1];
            return output;
            
        },
        getOutput(dataArray) {
            var output = '';
            for (var i = 0; i < (dataArray.length - 1); i++) {
                output += " " + dataArray[i] + ",";
            }
            output += " " + dataArray[dataArray.length - 1];
            return output;
        },
        getSutdyYear(yearInt) {
            return "Year " + parseInt(yearInt) + " or above";
        },
        getFinancial(data) {
            if(data == "Yes") {
                return "Only students who have Financial need can apply";
            } else {
                return "Any student can apply";
            }
        },
        comfirmed() {
            return this.comfirm;
        }     
    }
}
</script>

<style scoped>
.borderInfo {
    background: #FDFDFD;
    box-shadow: 2px 3px #EEEEEE;
}

.noteFontColor {
    color: #ff0000;
}

.fontBold {
    font-weight: bold
}
</style>