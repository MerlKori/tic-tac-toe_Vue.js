<template>
 <div id="main-page">
 	 <h3 class="main-page__player-name">{{player1}}(O) VS {{player2}}(X)</h3>
 	 <h3 class="main-page__player-progress"> <span>course of the</span> {{playerActive}} </h3>

 	 <table class="main-page__playing-field"
       @click="makeMove"
 	 >
 	 	 <tr class="row">
 	 	 	<td class="cell" data-pos="0"></td>
 	 	 	<td class="cell" data-pos="1"></td>
 	 	 	<td class="cell" data-pos="2"></td>
 	 	 </tr>
 	 	 <tr class="row">
 	 	 	<td class="cell" data-pos="3"></td>
 	 	 	<td class="cell" data-pos="4"></td>
 	 	 	<td class="cell" data-pos="5"></td>
 	 	 </tr>
 	 	 <tr class="row">
 	 	 	<td class="cell" data-pos="6"></td>
 	 	 	<td class="cell" data-pos="7"></td>
 	 	 	<td class="cell" data-pos="8"></td>
 	 	 </tr>
 	 </table>

 	 <button class="restart-game"
    @click="restartGame"
 	 >Restart game</button>
 </div> <!-- playing-field -->		
</template>

<script>
export default {
	 props: ['player1' , 'player2'],
  data () {
    return {
       targetCell: " ",
       cellValue: " ",
       cellPos: " ",
       schtick: " ",
       playerActive: " ",
       randomNum: mtRand(1 , 2),
       winnСombinations: [ 
                           [0, 1, 2],
                           [3, 4, 5],
                           [6, 7, 8],
                           [0, 3, 6],
                           [1, 4, 7],
                           [2, 5, 8],
                           [0, 4, 8],
                           [2, 4, 6]
       ],
       resultMap: {
       	           0: " ",
       	           1: " ",
       	           2: " ",
       	           3: " ",
       	           4: " ",
       	           5: " ",
       	           6: " ",
       	           7: " ",
       	           8: " "
       },
       winner: " ",
       maxMoves: 0
    }
  },
  methods: {
  	makeMove(event){
  		 this.targetCell = event.target;
  		 this.cellValue = this.targetCell.innerHTML;
  		 this.cellPos = this.targetCell.getAttribute("data-pos");
  		 this.maxMoves++;

  		 this.togglePlayer();
  		 

  		 if (this.cellValue === "" && this.playerActive == this.player1) {
  		 	   this.resultMap[this.cellPos] = this.schtick;
  		 	   this.targetCell.innerHTML = this.schtick;
  		 	   this.schtick = "O"
  		 } 
  		 else if( this.cellValue === "" && this.playerActive == this.player2){
  		 	   this.resultMap[this.cellPos] = this.schtick;
  		 	   this.targetCell.innerHTML = this.schtick;
  		 	   this.schtick = "X"
  		 } 

  		 this.testForWin();
  	} ,

  	 togglePlayer() {
  	 	 if (this.playerActive == this.player1) {
           this.playerActive = this.player2;

  	 	 }else{
  	 	 	     this.playerActive = this.player1;
  	 	 }
  	 } ,

  	  testForWin() {
         
        

  	  	  for (let i = 0; i < this.winnСombinations.length; i++) {
  	  	  	      let wc = this.winnСombinations[i];
  	  	  	      let resultMap = this.resultMap;
  	  	  	      let res = resultMap[wc[0]] + resultMap[wc[1]] + resultMap[wc[2]];

  	  	  	      if (res == "XXX") {
  	  	  	      	  this.winner = this.player2;
  	  	  	      	  this.$emit('onResult' , this.winner);
  	  	  	      } else if(res == "OOO"){
  	  	  	      	  this.winner = this.player1;
  	  	  	      	  this.$emit('onResult' , this.winner);
  	  	  	      } else if(this.maxMoves > 8 && res != "OOO" && res != "XXX") {
  		 	            this.$emit('draw');
  		         }
  	  	   }
  	  	 } ,

  	  	 restartGame() {
  	  	 	   let cells = this.$el.querySelectorAll('.cell');
  	  	 	   this.maxMoves = 0;
  	  	 	   
  	  	 	   for (var i = 0; i < cells.length; i++) {
  	  	 	   	     cells[i].innerHTML = "";
  	  	 	   }

  	  	 	   for( let key in	this.resultMap) {
  	  	 	   	  this.resultMap[key]= " ";
  	  	 	   }

  	  	 }
   
  } ,

  mounted: function () {
      if(this.randomNum === 1 ){
      	  this.playerActive = this.player1;
      	  this.schtick = "O"
      } else{
      	   this.playerActive = this.player2;
      	   this.schtick = "X"
      }
  }


}


  function mtRand(min , max) {
	 let diff = max - min;
	 return Math.floor(Math.random() * (diff + 1)) + min; 
}
</script>

<style lang="scss">

.main-page__player-name{
	    font-size: 25px;
	    padding: .5em 0;
	    color: #034777;

      @media screen and ( max-width: 440px) {
         font-size: 20px;
  }
}

.main-page__player-progress{
	    font-size: 30px;
	    padding: 0 0 .5em 0;
	    color: #A0161F;
        @media screen and ( max-width: 440px) {
         font-size: 20px;
  }

	    span{
	    	color: #034777;
	    }
}
 
.main-page__playing-field{
	 width: 80%;
	 margin: 10px auto;
	 border-collapse: collapse;
	 font-family: 'Gochi Hand' ;
}


 .cell{
 	 width: 33.333%;
 	 height: 90px;
 	 border: 6px solid #2C3E50;
 	 font-size: 55px;
 	 cursor: pointer;

 }

 .cell:first-of-type{
 	  border-left-color: transparent;
 	  border-top-color: transparent;
 }

 .cell:nth-of-type(2){
 	  border-top-color: transparent;
 }

  .cell:nth-of-type(3){
 	  border-right-color: transparent;
 	  border-top-color: transparent;
 }

 .row:nth-of-type(3) .cell{
 	  border-bottom-color: transparent;
 }

 .restart-game{
   background-color: #A0161F;
   color: #fff;

   &:hover{
    background-color: #D01D29;
   }

}

</style>