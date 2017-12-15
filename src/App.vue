<template>
  <div id="game__wrap">
    <transition name="page-move" mode="out-in">
      <app-start
       v-if="state == 'start'"
       @start="onStartGame"

      ></app-start>

      <app-main
      v-else-if="state == 'main'"
      :player1="player1"
      :player2="player2"
      @onResult="onResult"
      @draw="onDraw"
      ></app-main>

      <app-result
      v-else-if="state == 'result'"
      :winner="winnerPlayer"
      @endGame="onEnd"
      @repeatGame="onRepeat"
      ></app-result>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      state: "start",
      player1: " ",
      player2: " ",
      winnerPlayer: " "

      
    }
  },
  methods: {
     onStartGame(players) {
        this.state = "main";
        this.player1 = players.player1;
        this.player2 = players.player2;
        
     },

     onResult(winner){
        this.winnerPlayer = "player " + winner +  " won !!!";
        this.state = "result";
     },

     onEnd() {
        this.state = "start";
     },
     onRepeat() {
        this.state = "main"; 
     },
     onDraw() {
        this.state = "result";
        this.winnerPlayer = "Draw";
     }

  }
}
</script>

<style lang="scss">
@import url(https://fonts.googleapis.com/css?family=Gochi+Hand|Itim);

* {
  -webkit-box-sizing: border-box;
          box-sizing: border-box; }

html, body, div, span, h1, h2, h3, h4, h5, h6, p, a, img, ul, li, form, label, article, aside, footer, header, nav, section {
  margin: 0;
  padding: 0;
  border: 0; }

article, aside, details, figcaption, figure,
footer, header, hgroup, main, menu, nav, section {
  display: block; }


img {
  width: 100%; }

input,
button {
  border: none;
  outline: none; }


h2,h3{
  word-spacing: .3em;
}


#game__wrap{
  max-width: 400px;
  margin: 150px auto 0;
  font-family: 'Itim' , 'Gochi Hand', cursive;
  text-align: center;

  @media screen and ( max-width: 440px) {
     margin: 30px auto 0;
  }


}

  button{
   width: 140px;
   margin: 20px auto;
   padding: .5em 0;
   font-size: 18px;
   border-radius: 15px;
   cursor: pointer;
   transition: background-color .3s;

    @media screen and ( max-width: 440px) {
         width: 90%;
         margin: 10px auto;
   }
  }


.page-move-enter-active{
  animation: flipInX  .15s linear;

}

.page-move-leave-active{
  animation: flipOutX .15s linear;

}

 @keyframes flipInX {
   from{
      transform: rotateY(90deg);
   }
   to{
     transform: rotateY(0deg);
   }
 }

  @keyframes flipOutX {
   from{
      transform: rotateY(0deg);
   }
   to{
     transform: rotateY(90deg);
   }
 }


</style>
