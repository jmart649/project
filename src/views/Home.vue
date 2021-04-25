<template>
  <header style="width: 99.5%; margin: auto; outline-style: outset; outline-color: black; padding: 40px" class="text-center bold text-6xl bg-blue-700 text-black top-80">
    MARTINEZ PEWEE LEAGUE
  </header>
  <body style="width: 75%; margin: auto;" class="bg-blue-700">

    <div class="bg-red-700">
      <h1 class="text-center text-3xl bold">
        Welcome to the Martinez Peewee League
      </h1>
      <p class="text-center">
        We are the number one little league in the Rio Grande Valley.
        <br>
        <br> Here, we offer boys and girls between the ages of 10-13 a chance to
        participate in sports in the summer so that they can stay active
        while also learning important values.
      </p>
    </div>

    <div>
      <div id="slider" style="width: 75%; margin: auto;">
        <figure>
          <img src="../assets/slide1.jpg" alt="football">
          <img src="../assets/slide6.jpg" alt="baseball">
          <img src="../assets/slide3.jpg" alt="basketball">
          <img src="../assets/slide4.jpg" alt="football">
          <img src="../assets/slide1.jpg" alt="football">
        </figure>
      </div>
    </div>

    <div>
      <h1 class="text-center bold text-3xl">FOLLOW US ON TWITTER</h1>
      <component is="script" src="https://apps.elfsight.com/p/platform.js" defer></component>
      <div class="elfsight-app-18fc6d17-b79a-490a-9256-b060decc751a"></div>
    </div>

    <div>
      <component is="script" src="https://apps.elfsight.com/p/platform.js" defer></component>
      <div class="elfsight-app-7db5e3a6-8d67-4a9a-ac2f-ea966ee5720e"></div>
    </div>
  </body>
</template>

<style>
  #slider {
    overflow: hidden;
  }

  #slider figure{
    position: relative;
    width: 500%;
    margin: 0;
    left: 0;
    animation: 20s slider infinite;
  }
  #slider figure img{
    float: left;
    width: 20%;
  }
  @keyframes slider{
    0% {
      left: 0;
    }
    20% {
      left: 0;
    }
    25% {
      left: -100%;
    }
    45% {
      left: -100%;
    }
    50% {
      left: -200%;
    }
    70% {
      left: -200%;
    }
    75% {
      left: -300%;
    }
    95% {
      left: -300%;
    }
    100% {
      left: -400%;
    }
  }
</style>