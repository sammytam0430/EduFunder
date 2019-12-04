<template>
    <b-form @submit.stop.prevent="onSave">

         <b-form-group
            id = "donarNameCorporate"
            label = "Donor Name: "
            label-for = "donarNameInputCorporate"
            label-cols-lg = "3"
        >
            <b-form-input
                id = "donarNameInputCorporate"
                v-model = "$v.donorCorporate.donorName.$model"
                placeholder = ""
                :state="$v.donorCorporate.donorName.$dirty ? !$v.donorCorporate.donorName.$error : null"
                aria-describedby="donorNameFeedback"
            ></b-form-input>
            <b-form-invalid-feedback id="donorNameFeedback">
                Warning: Donor name cannot be empty
            </b-form-invalid-feedback>
        </b-form-group>

        <b-form-group
            id = "companyNameCorporate"
            label = "Company Name: "
            label-for = "companyNameInputCorporate"
            label-cols-lg = "3"
        >
            <b-form-input
                id = "companyNameInputCorporate"
                v-model = "$v.donorCorporate.companyName.$model"
                placeholder = ""
                :state="$v.donorCorporate.companyName.$dirty ? !$v.donorCorporate.companyName.$error : null"
                aria-describedby="companyNameFeedback"
            ></b-form-input>
            <b-form-invalid-feedback id="companyNameFeedback">
                Warning: Company name cannot be empty
            </b-form-invalid-feedback>
        </b-form-group>

        <b-form-group
            id = "websiteCorporate"
            label = "Website: "
            label-for = "websiteInputCorporate"
            label-cols-lg = "3"
        >
            <b-form-input
                id = "websiteInputCorporate"
                v-model = "$v.donorCorporate.website.$model"
                placeholder = ""
                :state="$v.donorCorporate.website.$dirty ? !$v.donorCorporate.website.$anyError : null"
                aria-describedby="websiteFeedback"
            ></b-form-input>
            <b-form-invalid-feedback id="companyNameFeedback">
                Warning: Website need to be an url
            </b-form-invalid-feedback>
        </b-form-group>
        <b-form-group
            id = "contactCorporate"
            label = "Contact: "
            label-for = "contactInputCorporate"
            label-cols-lg = "3"
        >
            <b-form-input
                id = "contactInputCorporate"
                v-model = "$v.donorCorporate.contact.$model"
                placeholder = "e.g. 6041234567"
                :state="$v.donorCorporate.contact.$dirty ? !$v.donorCorporate.contact.$anyError : null"
                aria-describedby="contactFeedback"
            ></b-form-input>
            <b-form-invalid-feedback id="contactFeedback">
                Warning: Invalid contact
            </b-form-invalid-feedback>
        </b-form-group>

        <b-form-group
            id = "addressCorporate"
            label = "Address: "
            label-for = "addressInputCorporate"
            label-cols-lg = "3"
        >
            <b-form-input
                id = "addressInputCorporate"
                v-model = "$v.donorCorporate.address.$model"
                placeholder = ""
                :state="$v.donorCorporate.address.$dirty ? !$v.donorCorporate.address.$error : null"
                aria-describedby="addressFeedback"
            ></b-form-input>
            <b-form-invalid-feedback id="addressFeedback">
                Warning: Address cannot be empty
            </b-form-invalid-feedback>
        </b-form-group>

        <b-form-group 
            id = "coutryCorporate"
            label = "Country: "
            label-for = "coutryInputCorporate"
            label-cols-lg = "3"
        >
            <b-form-input
                id = "coutryInputCorporate"
                v-model = "$v.donorCorporate.country.$model"
                placeholder = ""
                :state="$v.donorCorporate.country.$dirty ? !$v.donorCorporate.country.$error : null"
                aria-describedby="countryFeedback"
            ></b-form-input>
            <b-form-invalid-feedback id="countryFeedback">
                Warning: Country cannot be empty or with numbers
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
import { required, minLength, maxLength, url, numeric, alpha } from 'vuelidate/lib/validators'


export default {
    mixins: [validationMixin],
    data() {
        return {
            donorCorporate : {
                donorName: '',
                companyName: '',
                country: '',
                website: '',
                contact: '',
                address: ''
            }
        }
    },
    validations: {
        donorCorporate : {
            donorName: {
                required
            },
            companyName: {
                required
            },
            contact: {
                required,
                numeric,	
                minLength: minLength(10),
                maxLength: maxLength(10)
            },
            website: {
                required,
                url
            },
            address: {
                required
            },
            country: {
                required,
                alpha
            }
        }
        
    },
    methods: {
        onSave() {
            this.$v.donorCorporate.$touch();
            if (this.$v.donorCorporate.$anyError) {
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
        },
        onCancel() {
            
        }
    }
}
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');
</style>