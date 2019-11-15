<template>
    <b-form @save="onSave" @cancel="onCancel">
        <b-form-group
            id = "input-Name-private"
            label = "Donor Name: "
            label-for = "input-Name-private"
            label-cols-lg = "3"
        >
            <b-form-input
                id = "input-Name-private"
                v-model = "name"
                required
                placeholder = ""
            ></b-form-input>
        </b-form-group>

        <b-form-group 
            id = "input-Country"
            label = "Country: "
            label-for = "input-Country-private"
            label-cols-lg = "3"
        >
            <b-form-input
                id = "input-Country-private"
                v-model = "country"
                required
                placeholder = ""
            ></b-form-input>
        </b-form-group>

        <b-form-group
            id = "input-LinkedinProfile"
            label = "Linkedin Profile: "
            label-for = "input-LinkedinProfile-private"
            label-cols-lg = "3"
        >
            <b-form-input
                id = "input-LinkedinProfile-private"
                v-model = "linkedinProfile"
                placeholder = ""
            ></b-form-input>
        </b-form-group>

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
        </b-form-group>

        <b-form-group
            id = "input-Contact"
            label = "Contact: "
            label-for = "input-Contact-private"
            label-cols-lg = "3"
        >
            <b-form-input
                id = "input-Contact-private"
                v-model = "contact"
                placeholder = ""
            ></b-form-input>
        </b-form-group>

        <b-form-group
            id = "input-Address"
            label = "Address: "
            label-for = "input-Address-private"
            label-cols-lg = "3"
        >
            <b-form-input
                id = "input-Address-private"
                v-model = "address"
                placeholder = ""
            ></b-form-input>
        </b-form-group>

        <b-form-group
            id = "input-Email"
            label = "Email: "
            label-for = "input-Email-private"
            label-cols-lg = "3 "
        >
            <b-form-input
                id = "input-Email-private"
                v-model = "email"
                placeholder = ""
                type = "email"
            ></b-form-input>
        </b-form-group>
        <b-row>
          <b-col ></b-col>
          <b-col ></b-col>
          <b-col ><b-button class = "w-100" type="save" variant="primary">Save</b-button></b-col>
          <b-col ><b-button class = "w-100"  type="cancel" variant="danger">Cancel</b-button></b-col>
        </b-row>
    </b-form>
</template>

<script>
export default {
    data() {
      return {
        name: '',
        country: '',
        linkedinProfile: '',
        contact: '',
        address: '',
        email: ''
      }
    },
    methods: {
        onSubmit() {

        },
        onReset() {
            
        }
    }
}
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');
</style>