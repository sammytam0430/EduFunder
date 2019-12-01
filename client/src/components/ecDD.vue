<template>
    <b-row class="my-4 text-right">
            <b-col sm="4">
                    <label><code>Extra-Curricular Activities: </code></label>
            </b-col>
            <b-col sm="3">
                <div>
                    <b-form-select :options="EC"
                    v-model="$v.ecValue.$model"
                    :state="$v.ecValue.$dirty ? !$v.ecValue.$error : null" ></b-form-select>
                </div>
            </b-col>
    </b-row>
</template>
<script>

import { validationMixin } from 'vuelidate'
import { required} from 'vuelidate/lib/validators'

export default{
    mixins: [validationMixin],
    data(){
        return{
        ecValue: null,
        EC:[
          {value: 'Agricultural Development', text: 'Agricultural Development'},
          {value: 'Archery', text: 'Archery'},    
          {value: 'Badminton', text: 'Badminton'},
          {value: 'Christian Ministry', text: 'Christian Ministry'},
          {value: 'Cycling', text: 'Cycling'},
          {value: 'Alpine Sking', text: 'Alpine Sking'},
          {value: 'Basketball', text: 'Basketball'},
          {value: 'Boxing', text: 'Boxing'},
          {value: 'Canoeing', text: 'Canoeing'},
          {value: 'Debate', text: 'Debate'},
          {value: 'Diving', text: 'Diving'},
          {value: 'Dancing', text: 'Dancing'},
          {value: 'Drama', text: 'Drama'},
          {value: 'Environmental Activism', text: 'Environmental Activism'},
          {value: 'Equesterian', text: 'Equesterian'},
          {value: 'Fencing', text: 'Fencing'},
          {value: 'Figure Skating', text: 'Figure Skating'},
          {value: 'Football', text: 'Football'},
          {value: 'Golf', text: 'Golf'},
          {value: 'Gymnastics', text: 'Gymnastics'},
          {value: 'Hockey', text: 'Hockey'},
          {value: 'Judo', text: 'Judo'},
          {value: 'Karate', text: 'Karate'},
          {value: 'Kayaking', text: 'Kayaking'},
          {value: 'Lacrosse', text: 'Lacrosse'},
          {value: 'Leadership', text: 'Leadership'},
          {value: 'Luge', text: 'Luge'},
          {value: 'Music', text: 'Music'},
          {value: 'Performance', text: 'Performance'},
          {value: 'Photography', text: 'Photography'},
          {value: 'Sking', text: 'Sking'},
          {value: 'Sailing', text: 'Sailing'},
          {value: 'Shooting', text: 'Shooting'},
          {value: 'Soccer', text: 'Soccer'},
          {value: 'Softball', text: 'Softball'},
          {value: 'Tennis', text: 'Tennis'},
          {value: 'Volunteer', text: 'Volunteer'},
          {value: 'Rowing', text: 'Rowing'},
          {value: 'Swimming', text: 'Swimming'},
          {value: 'Volleyball', text: 'Volleyball'},
          {value: 'Volunteer', text: 'Volunteer'},
          {value: 'WeightLifting', text: 'WeightLifting'},
          {value: 'Wrestling', text: 'Wrestling'}
        ]
        }
    },
    validations:{
        ecValue:{
            required
        }
    },
    methods:{
        check(){
            this.$v.ecValue.$touch();
            return !this.$v.ecValue.$invalid;
        },
        getEC(){
            return this.ecValue;
        }
    }
}
</script>