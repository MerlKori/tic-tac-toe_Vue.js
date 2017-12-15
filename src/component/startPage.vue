<template>
   <div id="start-page">
       <img src="../../images/logo.png" alt="logo" class="start-page__logo">
       <h2 class="start-page__title">Welcome in the game :)</h2>
       <label for="player1" class="start-page__prompt">first player's name</label>
       <input type="text" name="player-name" id="player_1" class="start-page__entry-field" 
            :value="players.player1"
             @change="players.player1 = $event.target.value"
            >
       <label for="player2" class="start-page__prompt">name of the second player</label>
       <input type="text" name="player-name" id="player_2" class="start-page__entry-field" 
            :value="players.player2"
            @change="players.player2 = $event.target.value"
             >
       <button class="btn-start"
              @click="showMainPage"
       >Start game</button>
   </div> <!-- start-page -->
</template>

<script>
export default {
  data () {
    return {
       players: {
         player1: "Player1",
         player2: "Player2"
       }
    }
  },
  methods: {
     showMainPage() {
       this.$emit('start', this.players);
     }
  }
}
</script>

<style lang="scss">

#start-page{
  color: #034777;

  input,
  label{
    display: block
  }

}

.start-page__logo{
   max-width: 70px;

}

.start-page__title{
   font-size: 25px;
   letter-spacing: .1em;
   @media screen and ( max-width: 440px) {
     font-size: 20px;
     margin-top: 15px;
  }
}

.start-page__prompt{
  font-size: 20px;
  letter-spacing: .05em;
  margin: 10px auto;

  @media screen and ( max-width: 440px) {
    margin: 10px auto 15px;
  }
}

.start-page__entry-field{
   width: 60%;
   height: 30px; 
   margin: 5px auto;
   padding: 0 .5em;
   border: 2px solid #27AAE1;
   border-radius: 13px;
   font-size: 18px;
   color: #034777;
   text-align: center;
   transition: border-color .10s;

    @media screen and ( max-width: 440px) {
     width: 90%;
  }



   &:focus{
     border-color: #00CD89;
    }
}

.btn-start{
   background-color: #034777;
   color: #fff;
   
    @media screen and ( max-width: 440px) {
      margin-top: 25px;
  }


   &:hover{
    background-color: #046AB2;
   }

}

</style>