<template>
   <div id="result-page">
     <img :src='src'  alt="foto-result" class="result-page__img">
   	 <h2 class="winner"> {{winner}}</h2>
   	 <button class="repeat-game"
     @click="repeatGame"
     >Repeat game</button>

   	 <button class="finish-game"
      @click="onFinish"
     >Finish game</button>

   </div>
</template>

<script>
export default {
  props: ['winner' , 'src' ],
  data () {
    return {
      
    }
  }, 
   methods: {
     onFinish() {
        this.$emit('endGame');
     },
     repeatGame() {
        this.$emit('repeatGame');
     }
   }
}
</script>

<style lang="scss" scoped>

.result-page__img{
    max-width: 300px;
}

.winner{
   font-size: 40px;
   color: #034777;
    @media screen and ( max-width: 440px) {
         font-size: 25px;
  }
}

.repeat-game{
	  background-color: #21D064;
    margin: 60px 15px 0;
	  color: #fff;
    @media screen and ( max-width: 440px) {
         margin: 60px auto 0;
   }

	  &:hover{
	  	background-color: #25ED72;
	  }

}

.finish-game{
	  background-color: #A0161F;
    margin: 60px 15px 0 ;
   color: #fff;
   @media screen and ( max-width: 440px) {
         margin: 35px auto;
   }

   &:hover{
    background-color: #D01D29;
   }

}

</style>