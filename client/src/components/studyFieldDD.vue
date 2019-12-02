<template>
    <b-row class="my-4 text-right">
            <b-col sm="4">
                    <label><code>Field of Study(*): </code></label>
            </b-col>
            <b-col sm="4">
                <div>
                    <b-form-select :options="studyField"></b-form-select>
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
            {value: "Uncategorized", text: 'Uncategorized'},
            {value: "Accounting & Finance", text: 'Accounting & Finance'},
            {value: "Aeronatuical & Manufacturing Engineering", text: 'Aeronatuical & Manufacturing Engineering'},
            {value: "Agriculture & Forestry", text: 'Agriculture & Forestry'},
            {value: "American Studies", text: 'American Studies'},
            {value: "Anatomy & Physiology", text: 'Anatomy & Physiology'},
            {value: "Anthropology", text: 'Anthropology'},
            {value: "Archaeology", text: 'Archaeology'},
            {value: "Architecture", text: 'Architecture'},
            {value: "Art & Design", text: 'Art & Design'},
            {value: "Aural & Oral Sciences", text: 'Aural & Oral Sciences'},            
            {value: "Behaviour Intervantion", text: 'Behaviour Intervantion'},
            {value: "Biological Sciences", text: 'Biological Sciences'},
            {value: "Building", text: 'Building'},
            {value: "Business & Management Studies", text: 'Business & Management Studies'},
            {value: "Career & Employment Preparation", text: 'Career & Employment Preparation'},
            {value: "Carpentry", text: 'Carpentry'},
            {value: "Celtic Studies", text: 'Celtic Studies'},
            {value: "Chemical Engineering", text: 'Chemical Engineering'},
            {value: "Chemistry", text: 'Chemistry'},
            {value: "Child & Youth Services", text: 'Child & Youth Services'},
            {value: "Civil Engineering", text: 'Civil Engineering'},
            {value: "Classics & Ancient History", text: 'Classics & Ancient History'},
            {value: "Commerce & Business", text: 'Commerce & Business'},
            {value: "Communication & Media Studies", text: 'Communication & Media Studies'},
            {value: "Community Health Worker", text: 'Community Health Worker'},
            {value: "Complementary Medicine", text: 'Complementary Medicine'},
            {value: "Computer Science", text: 'Computer Science'},
            {value: "Counselling", text: 'Counselling'},
            {value: "Creative Writing", text: 'Creative Writing'},
            {value: "Criminology", text: 'Criminology'},
            {value: "Culinary Arts", text: 'Culinary Arts'},
            {value: "Dental Assistance", text: 'Dental Assistance'},
            {value: "Dentistry", text: 'Dentistry'},
            {value: "Digital Arts", text: 'Digital Arts'},
            {value: "Drama, Dance & Cinematics", text: 'Drama, Dance & Cinematics'},
            {value: "E-commerce", text: 'E-commerce'},
            {value: "Early Childhood Education", text: 'Early Childhood Education'},
            {value: "East & South Asian Studies", text: 'East & South Asian Studies'},
            {value: "Economics", text: 'Economics'},
            {value: "Education", text: 'Education'},
            {value: "Elctrical &Electronic Engineering", text: 'Elctrical &Electronic Engineering'},
            {value: "English", text: 'English'},
            {value: "Fashion", text: 'Fashion'},
            {value: "Film Making", text: 'Film Making'},
            {value: "Food Science", text: 'Food Science'},
            {value: "Forensic Science", text: 'Forensic Science'},
            {value: "French", text: 'French'},
            {value: "General Engineering", text: 'General Engineering'},
            {value: "Geography & Environmental Sciences", text: 'Geography & Environmental Sciences'},
            {value: "Geology", text: 'Geology'},
            {value: "German", text: 'German'},
            {value: "Health Care", text: 'Health Care'},
            {value: "History", text: 'History'}
            ]
        }
    }
};
</script>