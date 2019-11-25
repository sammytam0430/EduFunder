<template>
  <b-container>
    <b-button @click="activitiesSelected()" value="activities" :variant="checked"> Activities </b-button>
    <b-modal id="studReqActivitiesModal" ref="modelActivities" title="Activities"  
      @ok="returnData" @close="closeModal" @cancel="closeModal">
        <p>Select perferred activities:</p>
        <b-input-group size="sm" class="mb-4">
            <b-form-select v-model="activity" :options="activitiesOption" ></b-form-select>
            <b-input-group-append>
                <b-button @click="addField">Add</b-button>
            </b-input-group-append>
        </b-input-group>
        <div class="mt-3">
            Added Activities: <br>
            <ul>
                <li v-for="activity in activities" :key="activity">{{activity}} 
                  <!-- <b-button @click="deleteField(field)"></b-button> -->
                  </li>
            </ul>
        </div>
        
        <importanceSlider />
    </b-modal>
  </b-container>
</template>

<script>
  import importanceSlider from "@/components/ImportanceSlider.vue"
  export default {
    name: 'studentReqModalActivities',
    components: {
      importanceSlider
      },
    props: {
    },
    data() {
      return {
        checked: "secondary",
        selected: false,
        activity: '',
        activities: [],
        importance: 0,
        activitiesOption:[
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
    watch: {},
    methods: {
      activitiesSelected() {
        this.selected = !this.selected;
        if (this.selected) {
          this.$bvModal.show('studReqActivitiesModal');
          this.checked="primary";
        } else {
          this.$parent.activities.selectedActivities = ['Any'];
          this.$parent.selectedCriteria.activities = false;
          this.checked="secondary";
        }
      },
      returnData(bvModalEvt) {
        bvModalEvt.preventDefault()
          
        this.$parent.activities.selectedActivities = this.activities;
        this.$parent.activities.importance = this.importance;
        this.$parent.selectedCriteria.activities = true;
        this.activities = [];

        this.$nextTick(()=>{
          this.$bvModal.hide('studReqActivitiesModal');
        })
      },
      closeModal(bvModalEvt) {
          bvModalEvt.preventDefault();
          this.activitiesSelected();

          this.$nextTick(()=>{
          this.$bvModal.hide('studReqActivitiesModal');
        })
      },
      getGenderImportance(value) {
        this.importance = value;
      },
      addField() {
          this.activities.push(this.activity);
      }
      // deleteField(index) {
      //     this.acitivities.splice(index, 1);
      // }
    }
  };
</script>

