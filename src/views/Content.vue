<template>
    <header style="width: 99.5%; margin: auto; outline-style: outset; outline-color: black; padding: 40px" class="text-center bold text-6xl bg-blue-700 text-black top-80">
        MARTINEZ PEWEE LEAGUE
    </header>
    <body style="width: 75%; margin: auto;" class="bg-blue-700">

      <div class="bg-red-600">
        <h1 class="text-center bold text-3xl">Summer League Overview</h1>
        <ul class="text-center">
          <li class="italic">Everyone gets to play: <span>Here in summer sports League there are no try outs and everyone gets to play.</span></li>
          <li class="italic">Cheap Pricing: For just $120, your child can play in any of the sports programs that we offer. </li>
          <li class="italic">Safety is our Priority: We have some of the best medical staff and equipment to keep your children safe.</li>
          <li class="italic">Future Development: By joining our sports program, your child will be prepared to play in their school's programs.</li>
          <li class="italic"></li>
          <li class="italic"></li>
          <li class="italic"></li>
        </ul>
      </div>

      <div class="bg-red-600">
        <h1 class="text-center bold text-3xl">Parents Program</h1>
        <p class="italic text-center">Here at summer sports league, we encourage parents to participate and become part of our staff.
            There are many ways to get involved, you become an assistant coach or referee some of the games.
              There are many benefits to becoming part of our staff to include the following:
        </p>
        <br>
        <ul class="text-center">
          <li class="italic">Discounts: By you becoming part of our staff, you are eligle to get a 20% discount on your child registration package.</li>
          <li class="italic">Family Time: As a member, you get to spend time while teaching your child to play or sports programs. </li>
          <li class="italic">Facilities: As a member, you and your child will be eligle to use our facilities at any time, free of charge.</li>
          <li class="italic"></li>
          <li class="italic"></li>
          <li class="italic"></li>
          <li class="italic"></li>
        </ul>
      </div>

        <h2 class="bg-blue-700 text-center bold underline text-xl">SPORTS SCHEDULE</h2>
        
        <div class="row">
          <div class="column" style="background-color:#B22222; height: max-content;">
            <h2 class="text-2xl bold text-center" >FOOTBALL</h2>
            <img src="../assets/tigers1.jpg" alt="football" width="320" class="center">
            <ul class="text-center">
              <li>Monday and Friday: 4pm - 6pm</li>
              <li>Gameday: Sunday 7:00pm</li>
            </ul>
          </div>
          <div class="column" style="background-color:#174b9e; height: max-content;">
            <h2 class="text-2xl bold text-center" >BASEBALL</h2>
            <img src="../assets/tigers2.jpg" alt="baseball" width="350" class="center">
            <ul class="text-center">
              <li>Tuesday and Thursday: 4pm - 6pm</li>
              <li>Gameday: Sunday 3:30pm</li>
            </ul>
          </div>
          <div class="column" style="background-color:#B22222; height: max-content;">
            <h2 class="text-2xl bold text-center" >BASKETBALL</h2>
            <img src="../assets/tigers3.jpg" alt="basketball" width="310" class="center">
            <ul class="text-center">
              <li>Wedneday and Saturday: 4pm - 6pm</li>
              <li>Gameday: Sunday 12:00pm</li>
            </ul>
          </div>
        </div>
      <br>
      <div style="width: 50%; margin: auto;" class="justify-items-center items-center">
        <component is ="script" src="https://apps.elfsight.com/p/platform.js" defer></component>
        <div class="elfsight-app-8b2ef66c-2457-41e1-84c6-59fbb61b7da2"></div>
      </div>
      <br>
      <br>
        <div class="bg-red-700">
          <h1 class="text-center text-2xl font-bold">Random Quote of the Day:</h1>
          <h1 v-for="bad in quote" :key="bad.quote_id" class="text-center">
            By: {{bad.author}}
            <p class="justify-items-center center-text-align">"{{bad.quote}}"</p>
          </h1>
        </div>
        <br>
        <br>
    </body>
</template>

<style>
* {
  box-sizing: border-box;
}

/* Create three equal columns that floats next to each other */
.column {
  float: left;
  width: 33.33%;
  padding: 10px;
  height: 300px; /* Should be removed. Only for demonstration */
}

/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}

.center {
    display: block;
    margin-left: auto;
    margin-right: auto;
}
</style>

<script setup>
import { onMounted } from 'vue'
import { quote, getQuote } from '../helpers/useQuote'
onMounted(() => {
  getQuote()
})
</script>