<template>
    <header style="width: 99.5%; margin: auto; outline-style: outset; outline-color: black; padding: 40px" class="text-center bold text-6xl bg-blue-700 text-black top-80">
        MARTINEZ PEWEE LEAGUE
    </header>
    <body>

        <h2 class="bg-blue-700 text-center bold underline text-xl">SPORTS INFORMATION</h2>
        
        <div class="row">
          <div class="column" style="background-color:#B22222;">
            <h2 class="text-2xl bold text-center" >FOOTBALL</h2>
            <img src="../assets/tigers1.jpg" alt="football" width="320" class="center">
            <p>Some text..</p>
          </div>
          <div class="column" style="background-color:#174b9e;">
            <h2 class="text-2xl bold text-center" >BASEBALL</h2>
            <img src="../assets/tigers2.jpg" alt="baseball" width="350" class="center">
            <p>Some text..</p>
          </div>
          <div class="column" style="background-color:#B22222;">
            <h2 class="text-2xl bold text-center" >BASKETBALL</h2>
            <img src="../assets/tigers3.jpg" alt="basketball" width="310" class="center">
            <p>Some text..</p>
          </div>
        </div>
        
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