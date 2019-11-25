Vue.use(window.vuelidate.default)
const {
  required,
  minLength,
  email
} = window.validators
Vue.use(VueFormWizard)

Vue.component('step1', {
  template: `<div>
          <div class="form-group" v-bind:class="{ 'has-error': $v.firstName.$error }">
            <label >First name</label>
            <input class="form-control" v-model.trim="firstName" @input="$v.firstName.$touch()">
             <span class="help-block" v-if="$v.firstName.$error && !$v.firstName.required">First name is required</span>
          </div>
          <div class="form-group" v-bind:class="{ 'has-error': $v.lastName.$error }">
            <label>Last name</label>
            <input class="form-control" v-model.trim="lastName" @input="$v.lastName.$touch()">
             <span class="help-block" v-if="$v.lastName.$error && !$v.lastName.required">Last name is required</span>
          </div>
          
          <div class="form-group" v-bind:class="{ 'has-error': $v.email.$error }">
            <label>Email</label>
            <input class="form-control" v-model.trim="email" @input="$v.email.$touch()">
            <span class="help-block" v-if="$v.email.$error && !$v.email.required">Email is required</span>
            <span class="help-block" v-if="$v.email.$error && !$v.email.email">This is not a valid email!</span>
          </div>
        </div>`,
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
})

Vue.component('step2', {
  template: `<div>
          <div class="form-group" v-bind:class="{ 'has-error': $v.country.$error }">
            <label >Country</label>
            <select class="form-control" v-model.trim="country" @input="$v.country.$touch()">
              <option>USA</option>
  					   <option>United Kingdom</option>
  						<option>France</option>
            </select>
             <span class="help-block" v-if="$v.country.$error && !$v.country.required">Country is required</span>
          </div>
          <div class="form-group" v-bind:class="{ 'has-error': $v.city.$error }">
            <label>City</label>
            <input class="form-control" v-model.trim="city" @input="$v.city.$touch()">
             <span class="help-block" v-if="$v.city.$error && !$v.city.required">City is required</span>
          </div>
        </div>`,
  data() {
    return {
      country: '',
      city: ''
    }
  },
  validations: {
    country: {
      required
    },
    city: {
      required
    },
    form: ['country', 'city']
  },
  methods: {
    validate() {
      this.$v.form.$touch();
      var isValid = !this.$v.form.$invalid
      this.$emit('on-validate', this.$data, isValid)
      return isValid
    }
  }
})
new Vue({
  el: '#app',
  data: {
    finalModel: {},
  },
  methods: {
    validateStep(name) {
      var refToValidate = this.$refs[name];
      return refToValidate.validate();
    },
    mergePartialModels(model, isValid){
      if(isValid){
      // merging each step model into the final model
       this.finalModel = Object.assign({},this.finalModel, model)
      }
    }
  }
})
