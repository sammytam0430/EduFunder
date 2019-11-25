<template>
    <b-form @submit.stop.prevent="onSubmit">
        <b-form-group
            id = "donarNamePrivate"
            label = "Donor Name: "
            label-for = "donarNameInputPrivate"
            label-cols-lg = "3"
        >
            <b-form-input
                id = "donarNameInputPrivate"
                v-model = "$v.donorName.$model"
                placeholder = ""
                :state="$v.donorName.$dirty ? !$v.donorName.$error : null"
                aria-describedby="donorNameFeedback"
            ></b-form-input>
            <b-form-invalid-feedback id="donorNameFeedback">
                Donor name cannot be empty
            </b-form-invalid-feedback>
        </b-form-group>

        <b-form-group
            id = "linkedinProfilePrivate"
            label = "Linkedin Profile: "
            label-for = "linkedinProfileInputPrivate"
            label-cols-lg = "3"
        >
            <b-form-input
                id = "linkedinProfileInputPrivate"
                v-model = "$v.linkedinProfile.$model"
                placeholder = ""
                :state="$v.linkedinProfile.$dirty ? !$v.linkedinProfile.$anyError : null"
                aria-describedby="linkedinProfileFeedback"
            ></b-form-input>
            <b-form-invalid-feedback id="linkedinProfileFeedback">
                Linkedin Profile needs to be in url
            </b-form-invalid-feedback>
        </b-form-group>
<!-- 
        <b-form-group
            id = "input-ProfilePic"
            label = "Profile Image: "
            label-for = ""
            label-cols-lg = "3"
        >
            <b-form-file
              v-model="file"
              placeholder="Choose a file or drop it here..."
              drop-placeholder="Drop file here..."
            ></b-form-file>
        </b-form-group>

        <b-form-group
            id = "input-DriveLicense"
            label = "Driver License: "
            label-for = ""
            label-cols-lg = "3"
        >
           <b-form-file
              v-model="file"
              placeholder="Choose a file or drop it here..."
              drop-placeholder="Drop file here..."
            ></b-form-file>
        </b-form-group> -->

        <b-form-group
            id = "contactPrivate"
            label = "Contact: "
            label-for = "contactInputPrivate"
            label-cols-lg = "3"
        >
            <b-form-input
                id = "contactInputPrivate"
                v-model = "$v.contact.$model"
                placeholder = "e.g. 6041234567"
                :state="$v.contact.$dirty ? !$v.contact.$anyError : null"
                aria-describedby="contactFeedback"
            ></b-form-input>
            <b-form-invalid-feedback id="contactFeedback">
                Invalid contact
            </b-form-invalid-feedback>
        </b-form-group>

        <b-form-group
            id = "addressPrivate"
            label = "Address: "
            label-for = "addressInputPrivate"
            label-cols-lg = "3"
        >
            <b-form-input
                id = "addressInputPrivate"
                v-model = "$v.address.$model"
                placeholder = ""
                :state="$v.address.$dirty ? !$v.address.$error : null"
                aria-describedby="addressFeedback"
            ></b-form-input>
            <b-form-invalid-feedback id="addressFeedback">
                address cannot be empty
            </b-form-invalid-feedback>
        </b-form-group>

        <b-form-group 
            id = "coutryPrivate"
            label = "Country: "
            label-for = "coutryInputPrivate"
            label-cols-lg = "3"
        >
            <b-form-input
                id = "coutryInputPrivate"
                v-model = "$v.country.$model"
                placeholder = ""
                :state="$v.country.$dirty ? !$v.country.$error : null"
                aria-describedby="countryFeedback"
            ></b-form-input>
            <b-form-invalid-feedback id="countryFeedback">
                Country cannot be empty or with numbers
            </b-form-invalid-feedback>
        </b-form-group>

        <b-form-group
            id = "emailPrivate"
            label = "Email: "
            label-for = "emailInputPrivate"
            label-cols-lg = "3 "
        >
            <b-form-input
                id = "emailInputPrivate"
                v-model = "$v.email.$model"
                placeholder = ""
                :state="$v.email.$dirty ? !$v.email.$anyError : null"
                aria-describedby="emailFeedback"
            ></b-form-input>
            <b-form-invalid-feedback id="emailFeedback">
                Invalid email
            </b-form-invalid-feedback>
        </b-form-group>
        <b-row>
          <b-col ></b-col>
          <b-col ></b-col>
          <b-col ><b-button class = "w-100" type="submit" variant="primary">Save</b-button></b-col>
          <!-- <b-col ><b-button class = "w-100"  type="cancel" variant="danger">Cancel</b-button></b-col> -->
        </b-row>
    </b-form>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, minLength, maxLength, url, numeric, email, alpha } from 'vuelidate/lib/validators'

export default {
    mixins: [validationMixin],
    data() {
      return {
          donorName: '',
          country: '',
          linkedinProfile: '',
          contact: '',
          address: '',
          email: ''
      }
    },
    validations: {
        donorName: {
            required
        },
        contact: {
            required,
            numeric,	
            minLength: minLength(10),
            maxLength: maxLength(10)
        },
        linkedinProfile: {
            required,
            url
        },
        address: {
            required
        },
        country: {
            required,
            alpha
        },
        email: {
            required,
            email
        }
    },
    methods: {
        onSubmit() {
            this.$v.$touch();
            if (this.$v.$anyError) {
            return
            }
        }
        // ,
        // onReset() {
            
        // }
    }
}
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');
</style>