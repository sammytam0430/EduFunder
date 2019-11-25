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
                v-model = "name"
                required
                placeholder = ""
            ></b-form-input>

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
                            v-model = "amount"
                            required
                            type = "number"
                            class="text-right"
                        ></b-form-input>
                    </b-input-group>
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
                        v-model = "recipient"
                        required
                        placeholder = ""
                        type = "number"
                    ></b-form-input>
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
                            label-cols-lg="2"
                            label-cols-sm = "4">
                            <b-form-input type = "date" v-model = "dateStart"></b-form-input>
                        
                    </b-form-group>
                </b-col>
                <b-col>
                    <b-form-group
                            id = "labelEndScholarship"
                            label = "To"
                            label-for = "selectEndScholarship"
                            label-cols-lg="2"
                            label-cols-sm = "4">

                        <b-form-input type = "date" v-model = "dateEnd"></b-form-input>  
                    </b-form-group>
                </b-col>
                <b-col cols="5">
                    <b-form-group
                            id = "labelAwardScholarship"
                            label = "And Award on"
                            label-for = "selectAwardScholarship"
                            label-cols-lg="4"
                            label-cols-sm = "5">
                        <b-form-input type = "date" v-model = "dateAward"></b-form-input>
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
  export default {
    data() {
      return {
        name: '',
        amount:'',
        recipent: '',
        selected: 'Public',
        addSubmission: [],
        dateStart: '',
        dateEnd: '',
        dateAward: ''      
      }
    }
  }
</script>