<template>
<div >
<!-- img-src="https://picsum.photos/300/300/?image=41"
img-alt="Image" 
img-top img-width="150px" 
img-height="250px" -->
  <b-card-group deck v-for="row in formattedCards" :key="row" class="deck-group">
    <b-card class="cards"
            v-for="club in row"
            :key="club"
            >
        <!--Campaign Title-->
        <div class="container">
            <img class="image" src="https://picsum.photos/300/300/?image=41"/>
            <div class="middle">
                <div class="text"><a class="campaign-profile" href="helloworld">View Profile</a></div>
            </div>
        </div>
        <div class="card-content">
        <h4>
            <a class="campaignDetail" href="www.helloworld.com">Title of your campaign goes here</a>
        </h4>
        
        <!--Students name-->
        <h5 id="author">by <span><a class="author-link" href="www.helloworld.com">Jun Jeong</a></span></h5>
        
        <!--Students Location-->
        <p id="address"><img id="location" src="../assets/mapMarker.png">Surrey, BC , V2N 1K5</p>
        
        <!--Biography -->
        <p>Hello My name is Jun and I would like to This may be a new line but could it be </p>

        <hr/>

        <!--Donation Section -->

        <!-- duration of campaign -->
        <!--Progress bar display-->
        <p><b>{{cards.goalDate}} days left</b> until graduation!</p>
        <b-progress height="15px" :max="max">
            <b-progress-bar :value="value">
            </b-progress-bar>
        </b-progress>

        <!--Amount raised -->    
        <p><b>$500 Raised</b> of $7500</p>

        <!--Funding Goal / Amount raised / Days to go -->
        </div>
    </b-card>
  </b-card-group>
</div>
</template>

<script>
    export default{
        data(){
            return{
                value:6,
                max:100,
                cards: [
                    {id:1, goalAmount:'500',goalDate:'300',amountRaised:'200'},
                    {id:2, goalAmount:'200',goalDate:'1300',amountRaised:'50'},
                    {id:3, goalAmount:'100',goalDate:'2300',amountRaised:'10'},
                    {id:4, goalAmount:'100',goalDate:'2300',amountRaised:'10'},
                ]
            }
        },
        computed: {
            formattedCards() {
                return this.cards.reduce((c, n, i) => {
                    if (i % 3 === 0) c.push([]);
                    c[c.length - 1].push(n);
                    return c;
                }, []);
      }
  }
    }
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro&display=swap');

    body{
        font-family: 'Source Sans Pro', sans-serif;
    }
    p{
        font-family: 'Rubik', sans-serif;
        font-weight:400;
        font-size:16px;
        color:black;
        display:inline-block;
        margin:0;
        padding-top:3%;
        width:99%;
    }
    #location{
        padding-top:1%;
        padding-bottom:1%;
    }
    .cards{
        max-width: 20rem;
        min-height: 400px;
        transition: box-shadow .3s;
    }
    .card:hover {
    box-shadow: 0 0 11px rgba(33,33,33,.2); 
    }
    .deck-group{
        padding-left:18%;
        padding-top:5%;
    }
    .campaignDetail{
        color:black;
        text-decoration:none;
        font-size: 24px;
        font-weight: normal;
        line-height: 28px;
        box-shadow: none;
        text-decoration: none;
        letter-spacing: normal;
        text-transform: capitalize;
        font-family: "Source Sans Pro";
    }
    .campaignDetail:link{
        text-decoration-color:#53C0A2;
    }
    .campaignDetail:visited{
        text-decoration-color:none;
    }
    .campaignDetail:hover{
        color:#53C0A2;
        
        text-decoration-color: #53C0A2;
    }
    .campaignDetail:active{
        text-decoration-color:#53C0A2;
    }
    .campaignDetail:focus{
        text-decoration-color:#53C0A2;
    }
    
    #author{
        color: #737373;
        font-size: 16px;
    }
    .author-link{
        color: #737373;
        text-decoration:none;
    }
    .author-link:visited{
        text-decoration-color: none;
    }
    .author-link:hover{
        color:#53C0A2;
    }
    .container {
        position:relative;
        padding:0;
    }

    .image {
    opacity: 1;
    display: block;
    width: 100%;
    height: auto;
    transition: .5s ease;
    backface-visibility: hidden;
    }

    .middle {
    transition: .5s ease;
    opacity: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    text-align: center;
    }

    .container:hover .image {
        color:black;
        opacity: 0.3;
    }

    .container:hover .middle {
        opacity: 1;
    }

    .campaign-profile {
        color: black;
        font-size: 16px;	
        padding: 10px 14px;
        border-radius:5px;
        border-color: black;
        border-style: solid;
        text-decoration: none;
    }
    .card-body{
        padding:0;
    }
    .card-content{
        padding:1.25rem;
    }
</style>