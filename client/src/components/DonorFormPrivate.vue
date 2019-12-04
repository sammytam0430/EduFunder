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
                v-model = "$v.donorPrivate.donorName.$model"
                placeholder = ""
                :state="$v.donorPrivate.donorName.$dirty ? !$v.donorPrivate.donorName.$error : null"
                aria-describedby="donorNameFeedback"
            ></b-form-input>
            <b-form-invalid-feedback id="donorNameFeedback">
                Warning: Donor name cannot be empty
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
                v-model = "$v.donorPrivate.linkedinProfile.$model"
                placeholder = ""
                :state="$v.donorPrivate.linkedinProfile.$dirty ? !$v.donorPrivate.linkedinProfile.$anyError : null"
                aria-describedby="linkedinProfileFeedback"
            ></b-form-input>
            <b-form-invalid-feedback id="linkedinProfileFeedback">
                Warning: Linkedin Profile needs to be in url
            </b-form-invalid-feedback>
        </b-form-group>
        <b-form-group
            id = "contactPrivate"
            label = "Contact: "
            label-for = "contactInputPrivate"
            label-cols-lg = "3"
        >
            <b-form-input
                id = "contactInputPrivate"
                v-model = "$v.donorPrivate.contact.$model"
                placeholder = "e.g. 6041234567"
                :state="$v.donorPrivate.contact.$dirty ? !$v.donorPrivate.contact.$anyError : null"
                aria-describedby="contactFeedback"
            ></b-form-input>
            <b-form-invalid-feedback id="contactFeedback">
                Warning: Invalid contact
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
                v-model = "$v.donorPrivate.address.$model"
                placeholder = ""
                :state="$v.donorPrivate.address.$dirty ? !$v.donorPrivate.address.$error : null"
                aria-describedby="addressFeedback"
            ></b-form-input>
            <b-form-invalid-feedback id="addressFeedback">
                Warning: Address cannot be empty
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
                v-model = "$v.donorPrivate.country.$model"
                placeholder = ""
                :state="$v.donorPrivate.country.$dirty ? !$v.donorPrivate.country.$error : null"
                aria-describedby="countryFeedback"
            ></b-form-input>
            <b-form-invalid-feedback id="countryFeedback">
                Warning: Country cannot be empty or with numbers
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
                v-model = "$v.donorPrivate.email.$model"
                placeholder = ""
                :state="$v.donorPrivate.email.$dirty ? !$v.donorPrivate.email.$anyError : null"
                aria-describedby="emailFeedback"
            ></b-form-input>
            <b-form-invalid-feedback id="emailFeedback">
                Warning: Invalid email
            </b-form-invalid-feedback>
        </b-form-group>
        <b-row>
          <b-col ></b-col>
          <b-col ></b-col>
          <b-col ><b-button class = "w-100" type="submit" variant="primary">Finish</b-button></b-col>
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
         donorPrivate: {
            donorName: '',
            country: '',
            linkedinProfile: '',
            contact: '',
            address: '',
            email: ''
         }
      }
    },
    validations: {
        donorPrivate: {
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
        }
    },
    methods: {
        onSubmit() {
            this.$v.donorPrivate.$touch();
            if (this.$v.donorPrivate.$anyError) {
                this.$bvToast.toast("Please make sure you enter all inputs", {
                    title: "Notification",
                    toaster: "b-toaster-bottom-right",
                    autoHideDelay: 5000,
                    appendToast: true
                });
            } else {
                this.$bvToast.toast("Profile created successfully", {
                    title: "Notification",
                    toaster: "b-toaster-bottom-right",
                    autoHideDelay: 5000,
                    appendToast: true
                    });
                this.$router.push("campaignGallery");
            }
        }
    }
}
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');
</style>