<template>
<b-container fluid >
    <div class="legend">Basic info</div>
    <div>
    <!-- <b-form @submit.stop.prevent="onSubmit">
      <b-form-group id="example-input-group-1" label="Name" label-for="example-input-1">
        <b-form-input
          id="example-input-1"
          name="example-input-1"
          v-model="$v.form.name.$model"
          :state="$v.form.name.$dirty ? !$v.form.name.$error : null"
          aria-describedby="input-1-live-feedback"
        ></b-form-input>

        <b-form-invalid-feedback id="input-1-live-feedback">
          This is a required field and must be at least 3 characters.
        </b-form-invalid-feedback>
      </b-form-group> -->
    </div>
    <b-row class="my-4 text-right" v-for="type in types" :key="type">

      <b-col sm="1">
        <label :for="`type-${type}`"> <code>{{ type }}</code>:</label>
      </b-col>

      <b-col sm="3">
        <b-form-input :id="`type-${type}`" :type="type"
        v-model="$v.form.name.$model"
          :state="$v.form.name.$dirty ? !$v.form.name.$error : null"
          aria-describedby="input-1-live-feedback"></b-form-input>

          <b-form-invalid-feedback id="input-1-live-feedback">
          This is a required field and must be at least 3 characters.
        </b-form-invalid-feedback>
      </b-col>
    </b-row>
    <b-row class="my-2 text-right">
      <b-col sm="1">
        <label><code>Birthday:</code></label>
      </b-col>
      <b-col sm="3">
        
        <b-form-input id=type-date type="date"></b-form-input>
      </b-col>
    </b-row>
    <b-row class="gender">
      <b-col sm="0">
        <label><code>Gender:</code></label>
      </b-col>
      <b-col sm="2">
        <b-form-group label="" class="radio">
        <b-form-radio-group
        :options="gender"
        name="radio-inline"
        ></b-form-radio-group>
    </b-form-group>
      </b-col>
    </b-row>
    <b-row class="my-2 text-right">
      <b-col sm="1">
        
        <label><code>Current Location: </code></label>
      </b-col>
      <b-col class="address" sm="3">
        <b-form-input placeholder="City"></b-form-input>
        <b-form-input id=address placeholder="Country"></b-form-input>
        <b-form-input id=address placeholder="Postal/Zip code"></b-form-input>
      </b-col>
    </b-row>
    <b-row class="my-4">
      <b-col sm="2">
        <label><code>Coutnry of Citizenship: </code></label>
      </b-col>
      <b-col sm="2">
        <b-form-input id=Country placeholder="Country" v-b-tooltip.hover title="Tooltip directive content" required></b-form-input>
      </b-col>
    </b-row>
    <b-row class="my-4">
      <b-col sm="2">
        <label><code>Langue Fluency: </code></label>
      </b-col>
      <b-col sm="2">
        <b-form-input id=Language placeholder="Language"></b-form-input>
      </b-col>
    </b-row>
    <div>
      
    <b-form-checkbox
      id="checkbox-1"
      v-model="status"
      name="checkbox-1"
      value="accepted"
      unchecked-value="not_accepted"
    >
      I accept the terms and use<div>State: <strong>{{ status }}</strong></div>
    </b-form-checkbox>
    </div>
    </b-container>
</template>

<script>
import 'vue-form-wizard/dist/vue-form-wizard.min.css'
import {FormWizard, TabContent} from 'vue-form-wizard'
import { validationMixin } from 'vuelidate'
import { required,email} from 'vuelidate/lib/validators'

export default{
 mixins: [validationMixin],
 data() {
    return {
      firstName: '',
      lastName: '',
      email: ''
    }
  },
  validations: {
    firstName: {
      required
    },
    lastName: {
      required
    },
    email: {
      required,
      email
    },
    form: ['firstName', 'lastName', 'email']
  },
  methods: {
    validate() {
      this.$v.form.$touch();
      var isValid = !this.$v.form.$invalid
      this.$emit('on-validate', this.$data, isValid)
      return isValid
    }
  }
}
</script>