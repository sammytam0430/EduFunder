<template>
  <form-wizard>
    <h5 id="content-1-title" slot="title">Set up your student profile!</h5>
    <!--Basic Information -->

    <div class="content-1">
      <tab-content title="Basic information">
        <b-container fluid>
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
            </b-form-group>-->
          </div>
          <b-row class="my-4 text-right" v-for="type in types" :key="type">
            <b-col sm="1">
              <label :for="`type-${type}`">
                <code>{{ type }}</code>:
              </label>
            </b-col>

            <b-col sm="3">
              <b-form-input
                :id="`type-${type}`"
                :type="type"
                v-model="$v.form.name.$model"
                :state="$v.form.name.$dirty ? !$v.form.name.$error : null"
                aria-describedby="input-1-live-feedback"
              ></b-form-input>

              <b-form-invalid-feedback
                id="input-1-live-feedback"
              >This is a required field and must be at least 3 characters.</b-form-invalid-feedback>
            </b-col>
          </b-row>
          <b-row class="my-2 text-right">
            <b-col sm="1">
              <label>
                <code>Birthday:</code>
              </label>
            </b-col>
            <b-col sm="3">
              <b-form-input id="type-date" type="date"></b-form-input>
            </b-col>
          </b-row>
          <b-row class="gender">
            <b-col sm="0">
              <label>
                <code>Gender:</code>
              </label>
            </b-col>
            <b-col sm="2">
              <b-form-group label class="radio">
                <b-form-radio-group :options="gender" name="radio-inline"></b-form-radio-group>
              </b-form-group>
            </b-col>
          </b-row>
          <b-row class="my-2 text-right">
            <b-col sm="1">
              <label>
                <code>Current Location:</code>
              </label>
            </b-col>
            <b-col class="address" sm="3">
              <b-form-input placeholder="City"></b-form-input>
              <b-form-input id="address" placeholder="Country"></b-form-input>
              <b-form-input id="address" placeholder="Postal/Zip code"></b-form-input>
            </b-col>
          </b-row>
          <b-row class="my-4">
            <b-col sm="2">
              <label>
                <code>Coutnry of Citizenship:</code>
              </label>
            </b-col>
            <b-col sm="2">
              <b-form-input
                id="Country"
                placeholder="Country"
                v-b-tooltip.hover
                title="Tooltip directive content"
                required
              ></b-form-input>
            </b-col>
          </b-row>
          <b-row class="my-4">
            <b-col sm="2">
              <label>
                <code>Langue Fluency:</code>
              </label>
            </b-col>
            <b-col sm="2">
              <b-form-input id="Language" placeholder="Language"></b-form-input>
            </b-col>
          </b-row>
        </b-container>
        <div>
          <b-form-checkbox
            id="checkbox-1"
            v-model="status"
            name="checkbox-1"
            value="accepted"
            unchecked-value="not_accepted"
          >
            I accept the terms and use
            <div>
              State:
              <strong>{{ status }}</strong>
            </div>
          </b-form-checkbox>
        </div>
      </tab-content>
    </div>
    <!--Basic Information -->

    <!--Current Education -->
    <tab-content title="Current Education">
      <div class="content-2">
        <div class="legend1">Highschool Education</div>
        <b-row class="my-4 text-right">
          <b-col sm="0">
            <label>
              <code>Current/Graduated High School</code>
            </label>
          </b-col>
          <b-col sm="3">
            <div class="options">
              <b-form-input></b-form-input>
            </div>
          </b-col>
        </b-row>
        <b-row class="my-4 text-right">
          <b-col sm="2">
            <label>
              <code>Graduation Date</code>
            </label>
          </b-col>
          <monthYearDD />
        </b-row>

        <b-row class="my-4 text-right">
          <b-col sm="2">
            <label>
              <code>Academic Average</code>
            </label>
          </b-col>
          <averageDD />
        </b-row>
        <div class="legend1">Post-Secondary eduation</div>
        <b-row class="my-4">
          <b-col sm="0">
            <label>
              <code>Current/Graduated University</code>
            </label>
          </b-col>
          <b-col sm="3">
            <div class="options">
              <b-form-input></b-form-input>
            </div>
          </b-col>
        </b-row>
        <b-row class="my-4 text-right">
          <b-col sm="2">
            <label>
              <code>Graduation Date</code>
            </label>
          </b-col>
          <monthYearDD />
        </b-row>
        <b-row class="my-4 text-right">
          <b-col sm="2">
            <label>
              <code>Academic Average:</code>
            </label>
          </b-col>
          <averageDD />
        </b-row>
      </div>
    </tab-content>
    <!--Current Education -->

    <!--Educational Interest -->
    <tab-content title="Educational Interest">
      <div class="content-3">
        <div class="legend1" style="margin-bottom:2%">Educational Interest</div>
        <b-row class="my-4 text-right">
          <b-col sm="2">
            <label>
              <code>School(s) of Interest:</code>
            </label>
          </b-col>
          <b-col sm="3">
            <div class="options">
              <b-form-input v-model="selected" :options="options"></b-form-input>
            </div>
          </b-col>
        </b-row>

        <b-row>
          <b-form-group label style="margin-left:17%">
            <b-form-radio-group v-model="selected" :options="schoolPref" name="radio-inline"></b-form-radio-group>
          </b-form-group>
        </b-row>

        <b-row class="my-4 text-right">
          <b-col sm="2">
            <label>
              <code>Field(s) of study interest:</code>
            </label>
          </b-col>
          <b-col sm="3">
            <div class="options">
              <b-form-input v-model="selected" :options="options" type="school"></b-form-input>
            </div>
          </b-col>
        </b-row>

        <b-row class="my-4">
          <b-col sm="2"></b-col>
          <b-col sm="3">
            <div class="options">
              <b-form-input v-model="selected" :options="options"></b-form-input>
            </div>
          </b-col>
        </b-row>

        <b-row>
          <b-form-group label style="margin-left:17%">
            <b-form-radio-group v-model="selected" :options="fieldPref" name="radio-inline"></b-form-radio-group>
          </b-form-group>
        </b-row>

        <b-row class="my-4 text-right">
          <b-col sm="2">
            <label>
              <code>Degree Level of interest:</code>
            </label>
          </b-col>
          <b-col md="2">
            <div class="degreeLevel" style="width:120%">
              <b-form-select v-model="selected" :options="degreeLevel"></b-form-select>
            </div>
          </b-col>
        </b-row>

        <b-row class="my-4 text-right">
          <b-col sm="2">
            <label>
              <code>Starting Date:</code>
            </label>
          </b-col>
          <div style="padding-left:1%;">
            <monthYearDD />
          </div>
        </b-row>

        <b-row class="text-right">
          <b-col sm="2">
            <label>
              <code>Location interest:</code>
            </label>
          </b-col>
          <b-col sm="2">
            <b-form-input id="Country" placeholder="Country"></b-form-input>
          </b-col>
        </b-row>
      </div>
    </tab-content>

    <!--Educational Interest -->

    <!-- Scholarship Profile -->

    <tab-content title="Scholarship Profile">
      <div class="content-4">
        <b-row class="text-right my-3">
          <b-col sm="2">
            <label>
              <code>Choose Academic Average:</code>
            </label>
          </b-col>
          <averageDD />
        </b-row>
        <b-row class="text-right my-3">
          <b-col sm="2">
            <label>
              <code>Heritage:</code>
            </label>
          </b-col>
          <b-col sm="2">
            <b-form-input id="Country" placeholder="American,African"></b-form-input>
          </b-col>
        </b-row>
        <div v-scroll="handleScroll" class="box">
          <div class="EC">
            <div class="legend2">Extra-curricular Activities</div>
            <div style="float:left;">
              <b-form-group label>
                <b-form-checkbox-group v-model="selected" :options="EC" name="flavour-1a" stacked></b-form-checkbox-group>
              </b-form-group>
            </div>
            <div style="margin-left:25%">
              <b-form-group label>
                <b-form-checkbox-group v-model="selected" :options="EC2" name="flavour-1a" stacked></b-form-checkbox-group>
              </b-form-group>
            </div>
          </div>
        </div>
      </div>

      <div>
        <b-form @submit.stop.prevent="onSubmit">
          <b-form-group id="example-input-group-1" label="Name" label-for="example-input-1">
            <b-form-input
              id="example-input-1"
              name="example-input-1"
              v-model="$v.form.name.$model"
              :state="$v.form.name.$dirty ? !$v.form.name.$error : null"
              aria-describedby="input-1-live-feedback"
            ></b-form-input>

            <b-form-invalid-feedback
              id="input-1-live-feedback"
            >This is a required field and must be at least 3 characters.</b-form-invalid-feedback>
          </b-form-group>

          <b-form-group id="example-input-group-2" label="Food" label-for="example-input-2">
            <b-form-select
              id="example-input-2"
              name="example-input-2"
              v-model="$v.form.food.$model"
              :options="foods"
              :state="$v.form.food.$dirty ? !$v.form.food.$error : null"
              aria-describedby="input-2-live-feedback"
            ></b-form-select>

            <b-form-invalid-feedback id="input-2-live-feedback">This is a required field.</b-form-invalid-feedback>
          </b-form-group>

          <b-button type="submit" variant="primary" :disabled="$v.form.$invalid">Submit</b-button>
        </b-form>
      </div>
    </tab-content>
    <!-- Scholarship Profile -->
  </form-wizard>
</template>


<script>
import { FormWizard, TabContent } from "vue-form-wizard";
import "vue-form-wizard/dist/vue-form-wizard.min.css";
import { validationMixin } from "vuelidate";
import { required, minLength } from "vuelidate/lib/validators";
import monthYearDD from "@/components/monthYearDD.vue";
import averageDD from "@/components/averageDD.vue";

export default {
  mixins: [validationMixin],
  data() {
    return {
      foods: ["apple", "orange"],
      form: {
        name: null,
        food: null
      },
      status: "not accepted",
      EC: [
        { value: "a", text: "Agricultural Development" },
        { value: "c", text: "Archery" },
        { value: "e", text: "Badminton" },
        { value: "g", text: "Christian Ministry" },

        { value: "j", text: "Cycling" }
      ],
      EC2: [
        { value: "b", text: "Alpine Sking" },
        { value: "d", text: "Basketball" },
        { value: "f", text: "Boxing" },
        { value: "h", text: "Canoeing" },
        { value: "k", text: "Debate" },
        { value: "n", text: "Diving" }
      ],
      types: ["First Name", "Last Name", "Email"],
      selected: [],
      options: [
        { value: null, text: "Please select an option" },
        { value: "a", text: "Student" },
        { value: "b", text: "Mature Student" },
        { value: "c", text: "Parent of a student" }
      ],
      gender: [{ value: "a", text: "Male" }, { value: "b", text: "Female" }],
      schoolPref: [
        { value: "A", text: "Not Decided" },
        { value: "B", text: "I do not see school of my interest" }
      ],
      fieldPref: [{ value: "A", text: "Not Decided" }],
      degreeLevel: [
        { value: null, text: "Diploma" },
        { value: null, text: "Degree" },
        { value: null, text: "Master" }
      ],
      validations: {
        selected: {
          required
        },
        form: ["selected"]
      }
    };
  },
  validations: {
    form: {
      food: {
        required
      },
      name: {
        required,
        minLength: minLength(3)
      }
    }
  },
  //component code
  components: {
    FormWizard,
    TabContent,
    monthYearDD,
    averageDD
  },
  methods: {
    validate() {
      this.$v.form.$touch();
      var isValid = !this.$v.form.$invalid;
      this.$emit("on-validate", this.$data, isValid);
      return isValid;
    },
    onSubmit() {
      this.$v.form.$touch();
      if (this.$v.form.$anyError) {
        return;
      }

      // Form submit logic
    }
  }
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css?family=Montserrat&display=swap");
@import url("https://fonts.googleapis.com/css?family=Source+Sans+Pro&display=swap");

#content-1-title {
  font-family: "Montserrat", sans-serif;
  font-size: 24pt;
  text-align: center;
  margin-top: 2%;
  margin-bottom: 2%;
  color: black;
}
.content-1 {
  width: 95%;
  margin-left: 31%;
}
.legend {
  width: 7%;
  text-align: center;
  background: #fdfdfd;
  border: 1px solid #ddd;
  padding: 4px;
  margin-top: 0.5%;
  margin-bottom: 2%;
  border-radius: 5px;
  font-weight: bold;
}
.legend1 {
  width: 20%;
  text-align: center;
  background: #f7f7f7;
  border: 1px solid #ddd;
  padding: 4px;
  margin-left: 12%;
  margin-top: 0.5%;
  margin-bottom: 2%;
  border-radius: 5px;
  font-weight: bold;
}
.legend2 {
  width: 20%;
  text-align: center;
  background: #f7f7f7;
  border: 1px solid #ddd;
  padding: 4px;
  margin-top: 0.5%;
  margin-bottom: 2%;
  margin-left: 10%;
  border-radius: 5px;
  font-weight: bold;
}
.content-2 {
  width: 95%;
  margin-left: 31%;
}
#address {
  margin-top: 4%;
}
.gender {
  padding-left: 3.5%;
  padding-top: 1%;
}
.radio {
  padding-left: 8%;
}
.months {
  width: 120%;
}
.content-3 {
  width: 95%;
  margin-left: 28%;
}
.content-4 {
  width: 95%;
  padding-left: 20%;
}
</style>