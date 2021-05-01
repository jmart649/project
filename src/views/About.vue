<template>
  <header style="width: 99.5%; margin: auto; outline-style: outset; outline-color: black; padding: 40px" class="text-center bold text-6xl bg-blue-700 text-black top-80">
    MARTINEZ PEWEE LEAGUE
  </header>
    <body style="width: 75%; margin: auto;" class="bg-blue-700">
      <div style="width: 75%; margin: auto;" class="bg-blue-700">
        <h1 class="text-center text-4xl font-bold" >ABOUT MARTINEZ PEWEE LEAGUE:</h1>
        <p class="text-center italic bg-red-600">Since 2012, Our Summer League has been keeping
          our Rio Grande Valley children active by participating in Football, Basketball, and Baseball.
          <br>
          <br>
          We encourage all children between the ages of 10-13 to join our summer league and learn the
          importance of team work while also learning how to play in their favorite sports.  Every summer
          we have over 250 participants who join our summer league.
        </p>
      </div>
      <div style="width: 75%; margin: auto;" class="bg-blue-700">
        <h1 class="text-center text-4xl font-bold" >OUR MISSION:</h1>
        <p class="text-center italic bg-red-600">Our mission goal is to keep our children active during the Summer
          .  Not only will your children stay active in our summer league, but they will learn important
          values such as dicipline, respect, commitment, and team work.
        </p>
      </div>
      <div style="width: 75%; margin: auto;" class="bg-blue-700">
        <h2 class="text-center text-4xl font-bold">ADDRESS:</h2>
        <p class="text-center italic bg-red-600">
          1000 S. Ware Road
          <br>McAllen, Texas 78504
        </p>
      </div>
      <div style="width: 75%; margin: auto;" class="bg-blue-700">
        <br>
      </div>
        <div style="width: 100%; margin: auto;" class="justify-items-center place-items-center bg-blue-700">
            <table class="center bg-red-600" style="width:50%">
            <caption class="font-bold bg-red-600" >Contact Our Staff</caption>
            <tr class="bg-red-600" >
                <th>Position</th>
                <th>Name</th>
                <th>Phone#</th>
                <th>email</th>
            </tr>
            <tr class="bg-red-600">
                <td>Sports Director</td>
                <td>Jesse Martinez</td>
                <td>9565551234</td>
                <td>martinez.jesse84@yahoo.com</td>
            </tr>
            <tr class="bg-red-600">
                <td>Football HC</td>
                <td>Rogelio Gonzalez</td>
                <td>9565552324</td>
                <td>Roy_Gonzalez@fake.com</td>
            </tr>
            <tr class="bg-red-600">
                <td>Basketball HC</td>
                <td>Elias Garcia</td>
                <td>9565552938</td>
                <td>elias_Garcia@fake.com</td>
            </tr>
            <tr class="bg-red-600">
                <td>Baseball HC</td>
                <td>Kevin Segovia</td>
                <td>9565552873</td>
                <td>Kev_Segovia@fake.com</td>
            </tr>
            </table>
        </div>
        <br>
    <div style="width: 100%; margin: auto;" class="bg-blue-700 row">
      <div class="column">
        <img src="../assets/football.jpg" alt="football" style="width:100%">
      </div>
      <div class="column">
        <img src="../assets/baseball.jpg" alt="baseball" style="width:100%">
      </div>
      <div class="column">
        <img src="../assets/basketball2.jpg" alt="basketball" style="width:100%">
      </div>
    </div>
    <br>
    <div class="contact-form">
      <h1 class="text-3xl font-bold text-center">CONTACT US</h1>
      <form id="contact-form" method="post" action="mailto:martinez.jesse84@yahoo.com">
        <input name="name" type="text" class="form-control" placeholder="Your Name" required>
        <br>
        <input name="email" type="email" class="form-control" placeholder="Your Email" required>
        <br>
          <textarea name="message" class="form-control" placeholder="Message" row="4" required></textarea>
          <br>
          <input type="submit" class="form-control submit" value="    SEND">
      </form>
    </div>
  </body>
</template>

<style>

table, th, td {
  border: 1px solid black;
  border-collapse: collapse;
}
th, td {
  padding: 5px;
  text-align: left;
}
.center {
  margin-left: auto;
  margin-right: auto;
}
.column {
  float: left;
  width: 33.33%;
  padding: 5px;
}
.form-control{
  width: 100%;
  background: whitesmoke;
  border: thick;
  outline: thick;
  border: 1px solid;
}
form .submit{
  border-color: black;
  background: lightgray;
  width: 20%;
  margin-left: 40%;
  margin-right: 40%;
  text-align: center;
  font-size: 20px;
}

form .submit:hover{
  background-color: dimgray;
  cursor: pointer;
}
.contact-form{
  background-color: red;
  width: 50%;
  margin-left: 25%;
  margin-right: 25%;
  padding: 5px;
}

</style>