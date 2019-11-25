<template>
    <b-container>
        <b-form-group
            id = "labelPrivatePublicScholarship"
            label = "Is it public or private? "
            label-for = "radioPrivatePublicScholarship">
                    
            <b-form-radio-group id="radioPrivatePublicScholarship" v-model="selected" name="radio-sub-component">
                <b-row class = "text-center">
                    <b-col>
                            <b-form-radio value="Public">Public</b-form-radio>
                    </b-col>
                    <b-col>
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
                v-model = "$v.name.$model"
                placeholder = ""
                :state="$v.name.$dirty ? !$v.name.$error : null"
                aria-describedby="nameFeedback"
            ></b-form-input>
            <b-form-invalid-feedback id="nameFeedback">
                Scholarship name cannot be empty
            </b-form-invalid-feedback>
        </b-form-group>
        
        <b-row class = "mb-2">
            <b-col>
                <b-form-group
                    id = "labelAmountScholarship"
                    label = "How much will the scholarship be worth?"
                    label-for = "inputAmountScholarship"
                >
                    <b-input-group prepend="$">
                        <b-form-input
                            id = "inputAmountScholarship"
                            v-model = "$v.amount.$model"
                            class="text-right"
                            placeholder = "0.00"
                            :state="$v.amount.$dirty ? !$v.amount.$anyError : null"
                            aria-describedby="amountFeedback"
                        ></b-form-input>
                    </b-input-group>
                    <b-form-invalid-feedback id="amountFeedback">
                        Scholarship amount cannot be 0
                    </b-form-invalid-feedback>
                </b-form-group>
            </b-col>
            <b-col>
                <b-form-group
                    id = "labelRecipientsScholarship"
                    label = "How many scholarships would you like to give?"
                    label-for = "inputRecipientsScholarship"
                >
                    <b-form-input
                        id = "inputRecipientsScholarship"
                        v-model = "$v.recipient.$model"
                        placeholder = ""
                        :state="$v.recipient.$dirty ? !$v.recipient.$anyError : null"
                        aria-describedby="recipientFeedback"
                    ></b-form-input>
                    <b-form-invalid-feedback id="recipientFeedback">
                        Scholarship recipient cannot be 0
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
                <b-col>
                    <b-form-group
                        id = "StartScholarship"
                        label = "From"
                        label-for = "selectStartScholarship"
                        >
                        <b-form-input type = "date" 
                            v-model = "$v.dateStart.$model"
                            :state="$v.dateStart.$dirty ? !$v.dateStart.$error : null"
                            aria-describedby="dateStartFeedback"
                        ></b-form-input>  
                        <b-form-invalid-feedback id="dateStartFeedback">
                            Pleasse select the application start date
                        </b-form-invalid-feedback>
                    </b-form-group>
                </b-col>
                <b-col>
                    <b-form-group
                        id = "labelEndScholarship"
                        label = "To"
                        label-for = "selectEndScholarship"
                        >
                        <b-form-input type = "date" 
                            v-model = "$v.dateEnd.$model"
                            :state="$v.dateEnd.$dirty ? !$v.dateEnd.$error : null"
                            aria-describedby="dateEndFeedback"
                        ></b-form-input>  
                        <b-form-invalid-feedback id="dateEndFeedback">
                            Pleasse select the application end date
                        </b-form-invalid-feedback>
                    </b-form-group>
                </b-col>
                <b-col>
                    <b-form-group
                            id = "labelAwardScholarship"
                            label = "And Award on"
                            label-for = "selectAwardScholarship"
                            >
                        <b-form-input type = "date" 
                            v-model = "$v.dateAward.$model"
                            :state="$v.dateAward.$dirty ? !$v.dateAward.$error : null"
                            aria-describedby="dateAwardFeedback"
                            ></b-form-input>
                            <b-form-invalid-feedback id="dateAwardFeedback">
                                Pleasse select the scholarship award date
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
            <b-form-checkbox-group id="checkboxAdditionSubmissionScholarship" v-model="addSubmission" name="additionalSubmission">
                <b-row class = "text-center">
                    <b-col>
                        <b-form-checkbox value="Transcript">Transcript</b-form-checkbox>
                    </b-col>
                    <b-col>
                        <b-form-checkbox value="Essay">Essay</b-form-checkbox>
                    </b-col>
                    <b-col>
                        <b-form-checkbox value="Video">Video</b-form-checkbox>
                    </b-col>
                    <b-col>
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
        name: '',
        amount:'',
        recipient: '',
        selected: 'Public',
        addSubmission: [],
        dateStart: '',
        dateEnd: '',
        dateAward: ''      
      }
    },
    validations: {
        name: {
            required
        },
        amount: {
            required,
            decimal,
            between: between(0.5, 999999999)
        },
        recipient: {
            required,
            integer,
            between: between(1, 99999)
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
    },
    methods: {
        validate() {
            this.$v.$touch();
            var isValid = !this.$v.$invalid;
            this.$emit('returnData', this.$data, isValid);
            return isValid;
        }
    }
  }
</script>