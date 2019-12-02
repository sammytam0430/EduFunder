<template>
    <b-row class="my-4 text-right">
            <b-col sm="4">
                    <label><code>Course Load: </code></label>
            </b-col>
            <b-col sm="3">
                <div>
                    <b-form-select :options="studyField"
                    v-model="$v.courseLoadValue.$model"
                    :state="$v.courseLoadValue.$dirty ? !$v.courseLoadValue.$error : null" 
                    ></b-form-select>
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
        studyField:[
                {value:"Full-Time", text:"Full-Time"},
                {value:"Part-Time", text:"Part-Time"},
            ]
        }
    },
    validations:{
        courseLoadValue:{
            required
        }
    },
    methods:{
        check(){
            this.$v.courseLoadValue.$touch();
            return !this.$v.courseLoadValue.$invalid;
        },
        getCourseLoad(){
            return this.courseLoadValue;
        }
    }
};
</script>