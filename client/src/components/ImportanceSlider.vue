<template>
    <b-container>
        <p>How important is it? {{importance}} <br>
        &nbsp;<span id ="hint">(0 - Nice to have, 5 - Need to have)</span></p>
        <b-row>
          <b-col cols="2" class="px-0 text-center fontSlider">Nice to have</b-col>
          <b-col cols="8">
            <vue-slider id="importance" v-model="importance" 
            :min="0" :max="5" :height="5" ref="slider"
            :marks="true" :hide-label="true">
            </vue-slider>
          </b-col>
          <b-col cols="2" class="px-0 text-center fontSlider">Need to have</b-col>
        </b-row>
      </b-container>
</template>

<script>
  export default {
    components: {
      },
    props: {
    },
    data() {
      return {
        importance: 2
      };
    },
    watch: {
    },
    methods: {
      getImportance() {
        return this.importance;
      }
    }
  };
</script>

<style scoped>
.fontSlider {
    font-size: 9pt;
  }
</style>