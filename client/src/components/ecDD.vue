<template>
    <b-row class="my-4 text-right">
            <b-col sm="4">
                    <label><code>Extra-Curricular Activities: </code></label>
            </b-col>
            <b-col sm="3">
                <div>
                    <b-form-select v-model="selected" :options="EC"></b-form-select>
                </div>
            </b-col>
    </b-row>
</template>
<script>
export default{
    name: "studyFieldDD",
    data(){
        return{
        EC:[
          {value: 'a', text: 'Agricultural Development'},
          {value: 'c', text: 'Archery'},    
          {value: 'e', text: 'Badminton'},
          {value: 'g', text: 'Christian Ministry'},
          {value: 'j', text: 'Cycling'},
          {value: 'b', text: 'Alpine Sking'},
          {value: 'd', text: 'Basketball'},
          {value: 'f', text: 'Boxing'},
          {value: 'h', text: 'Canoeing'},
          {value: 'k', text: 'Debate'},
          {value: 'n', text: 'Diving'},
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
    }
}
</script>