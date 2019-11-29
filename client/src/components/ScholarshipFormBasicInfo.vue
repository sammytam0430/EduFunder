<template>
    <b-container>
        <div class="text-center mb-4">
            <h4>What are some information of your scholarship?</h4>
        </div>
        <b-form-group
            id = "labelPrivatePublicScholarship"
            label = "Is it public or private? "
            label-for = "radioPrivatePublicScholarship">
                    
            <b-form-radio-group id="radioPrivatePublicScholarship" v-model="basicInfo.visibility" name="radio-sub-component">
                <b-row class = "text-center">
                    <b-col sm="6">
                            <b-form-radio value="Public">Public</b-form-radio>
                    </b-col>
                    <b-col sm="6">
                        <b-form-radio value="Private">Private</b-form-radio>
                    </b-col>
                </b-row>
            </b-form-radio-group>
        </b-form-group>

        <b-form-group
            id = "labelNameScholarship"
            label = "What is the name of your scholarship? "
            label-for = "inputNameSchoarship"
            class = "my-3">

            <b-form-input
                id = "inputNameSchoarship"
                v-model = "$v.basicInfo.name.$model"
                placeholder = ""
                :state="$v.basicInfo.name.$dirty ? !$v.basicInfo.name.$error : null"
                aria-describedby="nameFeedback"
            ></b-form-input>
            <b-form-invalid-feedback id="nameFeedback">
                Warning: Scholarship name cannot be empty
            </b-form-invalid-feedback>
        </b-form-group>
        
        <b-row class = "mb-2">
            <b-col lg="6" sm="12">
                <b-form-group
                    id = "labelAmountScholarship"
                    label = "How much will the scholarship be worth?"
                    label-for = "inputAmountScholarship"
                >
                    <b-input-group prepend="$">
                        <b-form-input
                            id = "inputAmountScholarship"
                            v-model = "$v.basicInfo.amount.$model"
                            class="text-right"
                            placeholder = "0.00"
                            :state="$v.basicInfo.amount.$dirty ? !$v.basicInfo.amount.$anyError : null"
                            aria-describedby="amountFeedback"
                        ></b-form-input>
                        
                        <b-form-invalid-feedback id="amountFeedback">
                            Warning: Scholarship amount cannot be less than 500.00 and it cannot be too large
                        </b-form-invalid-feedback>
                        </b-input-group>
                </b-form-group>
            </b-col>
            <b-col lg="6" sm="12">
                <b-form-group
                    id = "labelRecipientsScholarship"
                    label = "How many scholarships would you like to give?"
                    label-for = "inputRecipientsScholarship"
                >
                    <b-form-input
                        id = "inputRecipientsScholarship"
                        v-model = "$v.basicInfo.recipient.$model"
                        placeholder = ""
                        :state="$v.basicInfo.recipient.$dirty ? !$v.basicInfo.recipient.$anyError : null"
                        aria-describedby="recipientFeedback"
                    ></b-form-input>
                    <b-form-invalid-feedback id="recipientFeedback">
                        Warning: Scholarship recipient need to be at least 1 and cannot be more than 100 people
                    </b-form-invalid-feedback>
                </b-form-group>
            </b-col>
        </b-row>
            
        <b-form-group
            id = "labelDateScholarship"
            label = "When will you accept applications?"
            label-for = ""
            >
            <b-row class = "mb-1">
                <b-col lg="4" md="12">
                    <b-form-group
                        id = "StartScholarship"
                        label = "From"
                        label-for = "selectStartScholarship"
                        >
                        <b-form-input type = "date" 
                            v-model = "$v.basicInfo.dateStart.$model"
                            :state="$v.basicInfo.dateStart.$dirty ? (!$v.basicInfo.dateStart.$error) && (compareDate(basicInfo.dateStart, basicInfo.dateEnd)) : null"
                            aria-describedby="dateStartFeedback"
                        ></b-form-input>  
                        <b-form-invalid-feedback id="dateStartFeedback">
                            Invalid Date (Warning: Start date cannot be later than end date and it cannot be empty)
                        </b-form-invalid-feedback>
                    </b-form-group>
                </b-col>
                <b-col lg="4" md="12">
                    <b-form-group
                        id = "labelEndScholarship"
                        label = "To"
                        label-for = "selectEndScholarship"
                        >
                        <b-form-input type = "date" 
                            v-model = "$v.basicInfo.dateEnd.$model"
                            :state="$v.basicInfo.dateEnd.$dirty ? (!$v.basicInfo.dateEnd.$error) && (compareDate(basicInfo.dateStart, basicInfo.dateEnd)) : null"
                            aria-describedby="dateEndFeedback"
                        ></b-form-input>  
                        <b-form-invalid-feedback id="dateEndFeedback">
                            Invalid Date (Warning: End date cannot be earlier than start date and it cannot be empty)
                        </b-form-invalid-feedback>
                    </b-form-group>
                </b-col>
                <b-col lg="4" md="12">
                    <b-form-group
                            id = "labelAwardScholarship"
                            label = "And Award on"
                            label-for = "selectAwardScholarship"
                            >
                        <b-form-input type = "date" 
                            v-model = "$v.basicInfo.dateAward.$model"
                            :state="$v.basicInfo.dateAward.$dirty ? (!$v.basicInfo.dateAward.$error) && (compareDate(basicInfo.dateEnd, basicInfo.dateAward)) : null"
                            aria-describedby="dateAwardFeedback"
                            ></b-form-input>
                            <b-form-invalid-feedback id="dateAwardFeedback">
                                Invalid Date (Warning: Award date cannot be earlier than end date and it cannot be empty)
                            </b-form-invalid-feedback>
                    </b-form-group>
                </b-col>
            </b-row>
        </b-form-group>
        

        <b-form-group
            id = "labelAdditionSubmissionScholarship"
            label = "Additional submission? "
            label-for = "checkboxAdditionSubmissionScholarship"
            class = "mb-4"
        >
            <b-form-checkbox-group id="checkboxAdditionSubmissionScholarship" v-model="basicInfo.addSubmission" name="additionalSubmission">
                <b-row class = "text-center">
                    <b-col lg="3" md="6" sm="6">
                        <b-form-checkbox value="Transcript">Transcript</b-form-checkbox>
                    </b-col>
                    <b-col lg="3" md="6" sm="6">
                        <b-form-checkbox value="Essay">Essay</b-form-checkbox>
                    </b-col>
                    <b-col lg="3" md="6" sm="6">
                        <b-form-checkbox value="Video">Video</b-form-checkbox>
                    </b-col>
                    <b-col lg="3" md="6" sm="6">
                        <b-form-checkbox value="Photo">Photo</b-form-checkbox>
                    </b-col>
                </b-row>
            </b-form-checkbox-group>
        </b-form-group>
    </b-container>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, between, integer, decimal } from 'vuelidate/lib/validators'

export default {
    mixins: [validationMixin],
    data() {
      return {
          basicInfo: {
            name: '',
            amount:'',
            recipient: '',
            visibility: 'Public',
            addSubmission: [],
            dateStart: '',
            dateEnd: '',
            dateAward: ''
          }
              
      }
    },
    validations: {
        basicInfo: {
             name: {
                required
            },
            amount: {
                required,
                decimal,
                between: between(500.00, 999999999.99)
            },
            recipient: {
                required,
                integer,
                between: between(1, 100)
            },
            dateStart: {
                required
            },
            dateEnd: {
                required
            },
            dateAward: {
                required
            }
        }
    },
    methods: {
        validate() {
            this.$v.basicInfo.$touch();
            var isValid = !this.$v.basicInfo.$invalid;
            if(this.basicInfo.addSubmission.length < 1) {
                this.basicInfo.addSubmission = ['None'];
            } else {
                if (this.basicInfo.addSubmission[0] == "None" && this.basicInfo.addSubmission.length > 1) {
                    this.basicInfo.addSubmission.splice(0, 1);
                }
            }
            this.$emit('returnData', this.$data, isValid);
            return isValid;
        },
        compareDate(d1, d2) {
            if(d1 != '' && d2 != ''){
                var date1 = new Date(d1);
                var date2 = new Date(d2);
                return date1.getTime() < date2.getTime();
            }
            return true;      
        }
    }
  }
</script>