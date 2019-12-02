<template>
    <b-row class="my-4 text-right">
            <b-col sm="4">
                    <label><code>Heritage: </code></label>
            </b-col>
            <b-col sm="3">
                <div>
                    <b-form-select 
                     v-model="$v.heritageValue.$model"
                    :state="$v.heritageValue.$dirty ? !$v.heritageValue.$error : null" 
                    :options="heritages"></b-form-select>
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
        heritageValue: null,
        heritages:[
            { value:"Afghanistan", text:"Afghanistan"},
            { value:"Argentina", text:"Argentina"},
            { value:"Australia", text:"Australia"},
            { value:"Austria", text:"Australia"},
            { value:"Bangledash", text:"Bangledash"},
            { value:"Brazil", text:"Brazil"},
            { value:"Bulgaria", text:"Bulgaria"},
            { value:"Cambodia", text:"Cambodia"},
            { value:"Canada", text:"Canada"},
            { value:"Chilie", text:"Chilie"},
            { value:"China", text:"China"},
            { value:"Colombia", text:"Colombia"},
            { value:"Crotia", text:"Crotia"},
            { value:"Cuba", text:"Cuba"},
            { value:"Denmark", text:"Denmark"},
            { value:"Domnica", text:"Domnica"},
            { value:"Egypt", text:"Egypt"},
            { value:"Ethopia", text:"Ethopia"},
            { value:"Fiji", text:"Fiji"},
            { value:"Finland", text:"Finland"},
            { value:"France", text:"France"},
            { value:"Germany", text:"Germany"},
            { value:"Greece", text:"Greece"},
            { value:"Hungary", text:"Hungary"},
            { value:"Iceland", text:"Iceland"},
            { value:"India", text:"India"},
            { value:"Iran", text:"Iran"},
            { value:"Ireland", text:"Ireland"},
            { value:"Italy", text:"Italy"},
            { value:"Jamican", text:"Jamican"},
            { value:"Japan", text:"Japan"},
            { value:"Republica of Korea", text:"Republica of Korea"},
            { value:"Mexico", text:"Mexico"},
            { value:"New Zealand", text:"New Zealand"},
            { value:"Pakistan", text:"Pakistan"},
            { value:"Peru", text:"Peru"},
            { value:"Philipines", text:"Philipines"},
            { value:"Portugal", text:"Portugal"},
            { value:"South Africa", text:"South Africa"},
            { value:"Spain", text:"Spain"}
        ]
        }
    },
    methods:{
        check(){
            this.$v.heritageValue.$touch();
            return !this.$v.heritageValue.$invalid;
        },
        getHeritage(){
            return this.heritageValue;
        }
    },
    validations:{
        heritageValue:{
            required
        }
    }
}
</script>