<template>
    <b-form @submit.stop.prevent="onSave">

        <b-form-group
            id = "companyNameCorporate"
            label = "Company Name: "
            label-for = "companyNameInputCorporate"
            label-cols-lg = "3"
        >
            <b-form-input
                id = "companyNameInputCorporate"
                v-model = "$v.companyName.$model"
                placeholder = ""
                :state="$v.companyName.$dirty ? !$v.companyName.$error : null"
                aria-describedby="companyNameFeedback"
            ></b-form-input>
            <b-form-invalid-feedback id="companyNameFeedback">
                Company name cannot be empty
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
                v-model = "$v.website.$model"
                placeholder = ""
                :state="$v.website.$dirty ? !$v.website.$anyError : null"
                aria-describedby="websiteFeedback"
            ></b-form-input>
            <b-form-invalid-feedback id="companyNameFeedback">
                Website need to be an url
            </b-form-invalid-feedback>
        </b-form-group>

        <!-- <b-form-group
            id = "input-ProfilePic-corporate"
            label = "Profile Image: "
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
            id = "contactCorporate"
            label = "Contact: "
            label-for = "contactInputCorporate"
            label-cols-lg = "3"
        >
            <b-form-input
                id = "contactInputCorporate"
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
            id = "addressCorporate"
            label = "Address: "
            label-for = "addressInputCorporate"
            label-cols-lg = "3"
        >
            <b-form-input
                id = "addressInputCorporate"
                v-model = "$v.address.$model"
                placeholder = ""
                :state="$v.address.$dirty ? !$v.address.$error : null"
                aria-describedby="addressFeedback"
            ></b-form-input>
            <b-form-invalid-feedback id="addressFeedback">
                Address cannot be empty
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
                v-model = "$v.country.$model"
                placeholder = ""
                :state="$v.country.$dirty ? !$v.country.$error : null"
                aria-describedby="countryFeedback"
            ></b-form-input>
            <b-form-invalid-feedback id="countryFeedback">
                Country cannot be empty
            </b-form-invalid-feedback>
        </b-form-group>

        <b-form-group
            id = "sizeCorporate"
            label = "Size of Company: "
            label-for = "sizeInputCorporate"
            label-cols-lg = "3"
        >
            <b-form-input
                id = "sizeInputCorporate"
                v-model = "$v.size.$model"
                placeholder = ""
                :state="$v.country.$dirty ? !$v.country.$error : null"
                aria-describedby="sizeFeedback"
            ></b-form-input>
            <b-form-invalid-feedback id="sizeFeedback">
                Size of the company cannot be empty
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
import { required, minLength, maxLength, url, numeric } from 'vuelidate/lib/validators'


export default {
    mixins: [validationMixin],
    data() {
        return {
            companyName: '',
            country: '',
            website: '',
            contact: '',
            address: '',
            size: ''     
        }
    },
    validations: {
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
            required
        },
        size: {
            required
        }
    },
    methods: {
        onSave() {
            this.$v.$touch();
            if (this.$v.$anyError) {
            return
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