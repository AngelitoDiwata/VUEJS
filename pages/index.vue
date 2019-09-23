<template>
  <div class="container">
    <center><img id="imgMain" src="https://miro.medium.com/max/600/1*Z3QcBB__mvWCqood2fbiBQ.png"></center>
    <br>
    <p><center>Calculator</center></p>
    <br>
    <br>
    <div id="displayInputs">
       <div class="input-field col s26">
          <input ref="resultScreen"  id="numInput" type="number" class="validate" :value="currentValue" @input="setValue">
        </div>
        <a id="delBtn" @click="delNumber" class="btn-floating btn-large waves-effect waves-light blue"><i class="material-icons">keyboard_arrow_left</i></a>
    </div>
      <numKeys />
  </div>
</template>

<script>

import numKeys from '../components/numKeys'
export default {
  components: {
    numKeys
  },
  methods: {
      setValue(){
           this.$store.commit('setNewVal', this.$refs.resultScreen.value);
      },

      delNumber(){
          let currentNum = this.$refs.resultScreen.value;
          let deletedNumVal = currentNum.slice(0, -1);
          this.$store.commit('setNewVal', deletedNumVal);
      }
  },
    computed: {
        currentValue: function(){
         return this.$store.getters.getResultValue
        }
    },
}
</script>

<style scoped>

.container{
  padding: 100px;
    margin: 0 auto;
    width: 500px;
    height: auto;
}

#imgMain{
  height: 80px;
  width: 200px;
}

#displayInputs{
  display: grid;
  grid-template-areas: 'input delbtn';
  grid-template-columns: 85% 20%;
  width: 100%;
  margin: 0 auto;
}

#numInput{
  grid-area: input;
}

#delBtn{
  text-align: center;
  grid-area: delbtn;
}


</style>
