<template>
    <b-form @save="onSave" @cancel="onCancel">
        <b-form-group
            id = "input-Sponsor-corporate"
            label = "Corporate Sponsor: "
            label-for = "input-Name-Corporate"
            label-cols-lg = "3"
        >
            <b-form-input
                id = "input-Sponsor-Corporate"
                v-model = "sponsor"
                required
                placeholder = ""
            ></b-form-input>
        </b-form-group>

        <b-form-group
            id = "input-Name-corporate"
            label = "Company Name: "
            label-for = "input-Name-Corporate"
            label-cols-lg = "3"
        >
            <b-form-input
                id = "input-Name-Corporate"
                v-model = "name"
                required
                placeholder = ""
            ></b-form-input>
        </b-form-group>

        <b-form-group 
            id = "input-Country"
            label = "Country: "
            label-for = "input-Country-Corporate"
            label-cols-lg = "3"
        >
            <b-form-input
                id = "input-Country-Corporate"
                v-model = "country"
                required
                placeholder = ""
            ></b-form-input>
        </b-form-group>

        <b-form-group
            id = "input-Website"
            label = "Website: "
            label-for = "input-Website-Corporate"
            label-cols-lg = "3"
        >
            <b-form-input
                id = "input-Website-Corporate"
                v-model = "website"
                placeholder = ""
            ></b-form-input>
        </b-form-group>

        <b-form-group
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
        </b-form-group>

        <b-form-group
            id = "input-Contact"
            label = "Contact: "
            label-for = "input-Contact-Corporate"
            label-cols-lg = "3"
        >
            <b-form-input
                id = "input-Contact-Corporate"
                v-model = "contact"
                placeholder = ""
            ></b-form-input>
        </b-form-group>

        <b-form-group
            id = "input-Address"
            label = "Address: "
            label-for = "input-Address-Corporate"
            label-cols-lg = "3"
        >
            <b-form-input
                id = "input-Address-Corporate"
                v-model = "address"
                placeholder = ""
            ></b-form-input>
        </b-form-group>

        <b-form-group
            id = "input-Size"
            label = "Size of Company: "
            label-for = "input-Size-Corporate"
            label-cols-lg = "3"
        >
            <b-form-input
                id = "input-Size-Corporate"
                v-model = "size"
                placeholder = ""
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
            sponor:'',
            name: '',
            country: '',
            website: '',
            contact: '',
            address: '',
            size: ''     
        }
    },
    methods: {
        onSave() {

        },
        onCancel() {
            
        }
    }
}
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');
</style>