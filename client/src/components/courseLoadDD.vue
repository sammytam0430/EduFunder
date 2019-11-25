<template>
    <b-row class="my-4 text-right">
            <b-col sm="4">
                    <label><code>Course Load: </code></label>
            </b-col>
            <b-col sm="3">
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
                {value:"Full-Time", text:"Full-Time"},
                {value:"Part-Time", text:"Part-Time"},
            ]
        }
    }
};
</script>