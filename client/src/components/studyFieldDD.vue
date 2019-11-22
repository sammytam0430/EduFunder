<template>
    <b-row class="my-4 text-right">
            <b-col sm="4">
                    <label><code>Field of Study(*): </code></label>
            </b-col>
            <b-col sm="4">
                <div>
                    <b-form-select v-model="selected" :options="studyField"></b-form-select>
                </div>
            </b-col>
    </b-row>
</template>
<script>
export default{
    name: "studyFieldDD",
    data(){
        return{
        studyField:[
            {value: "uc", text: 'Uncategorized'},
            {value: "uc", text: 'Accounting & Finance'},
            {value: "uc", text: 'Aeronatuical & Manufacturing Engineering'},
            {value: "uc", text: 'Agriculture & Forestry'},
            {value: "uc", text: 'American Studies'},
            {value: "uc", text: 'Anatomy & Physiology'},
            {value: "uc", text: 'Anthropology'},
            {value: "uc", text: 'Archaeology'},
            {value: "uc", text: 'Architecture'},
            {value: "uc", text: 'Art & Design'},
            {value: "uc", text: 'Aural & Oral Sciences'},            
            {value: "Behaviour Intervantion", text: 'Behaviour Intervantion'},
            {value: "Biological Sciences", text: 'Biological Sciences'},
            {value: "uc", text: 'Building'},
            {value: "uc", text: 'Business & Management Studies'},
            {value: "uc", text: 'Career & Employment Preparation'},
            {value: "uc", text: 'Carpentry'},
            {value: "uc", text: 'Celtic Studies'},
            {value: "uc", text: 'Chemical Engineering'},
            {value: "uc", text: 'Chemistry'},
            {value: "uc", text: 'Child & Youth Services'},
            {value: "uc", text: 'Civil Engineering'},
            {value: "uc", text: 'Classics & Ancient History'},
            {value: "uc", text: 'Commerce & Business'},
            {value: "uc", text: 'Communication & Media Studies'},
            {value: "uc", text: 'Community Health Worker'},
            {value: "uc", text: 'Complementary Medicine'},
            {value: "uc", text: 'Computer Science'},
            {value: "uc", text: 'Counselling'},
            {value: "uc", text: 'Creative Writing'},
            {value: "uc", text: 'Criminology'},
            {value: "uc", text: 'Culinary Arts'},
            {value: "uc", text: 'Dental Assistance'},
            {value: "uc", text: 'Dentistry'},
            {value: "uc", text: 'Digital Arts'},
            {value: "uc", text: 'Drama, Dance & Cinematics'},
            {value: "uc", text: 'E-commerce'},
            {value: "uc", text: 'Early Childhood Education'},
            {value: "uc", text: 'East & South Asian Studies'},
            {value: "uc", text: 'Economics'},
            {value: "uc", text: 'Education'},
            {value: "uc", text: 'Elctrical &Electronic Engineering'},
            {value: "uc", text: 'English'},
            {value: "uc", text: 'Fashion'},
            {value: "uc", text: 'Film Making'},
            {value: "uc", text: 'Food Science'},
            {value: "uc", text: 'Forensic Science'},
            {value: "uc", text: 'French'},
            {value: "uc", text: 'General Engineering'},
            {value: "uc", text: 'Geography & Environmental Sciences'},
            {value: "uc", text: 'Geology'},
            {value: "uc", text: 'German'},
            {value: "uc", text: 'Health Care'},
            {value: "uc", text: 'History'}
            ]
        }
    }
};
</script>