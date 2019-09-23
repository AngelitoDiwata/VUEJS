<template>
    <div id="wrapper">
       <div class="numContainer">
        <a id="btn7" class="waves-effect waves-light blue btn" @click="btn('btn7')">7</a>
        <a id="btn8" class="waves-effect waves-light blue btn" @click="btn('btn8')">8</a>
        <a id="btn9" class="waves-effect waves-light blue btn" @click="btn('btn9')">9</a><br><br>
        <a id="btn4" class="waves-effect waves-light blue btn" @click="btn('btn4')">4</a>
        <a id="btn5" class="waves-effect waves-light blue btn" @click="btn('btn5')">5</a>
        <a id="btn6" class="waves-effect waves-light blue btn" @click="btn('btn6')">6</a><br><br>
        <a id="btn1" class="waves-effect waves-light blue btn" @click="btn('btn1')">1</a>
        <a id="btn2" class="waves-effect waves-light blue btn" @click="btn('btn2')">2</a>
        <a id="btn3" class="waves-effect waves-light blue btn" @click="btn('btn3')">3</a><br><br>
        <a id="btn0" class="waves-effect waves-light blue btn" @click="btn('btn0')">0</a>
         <a id="btnadd" class="btn-floating btn-large waves-effect waves-light red"  @click="btn('addition')"><i class="material-icons">add</i></a>
         <a id="btnsub" class="btn-floating btn-large waves-effect waves-light red"  @click="btn('subtraction')"><i class="material-icons">remove</i></a>
         <a id="btnmul" class="btn-floating btn-large waves-effect waves-light red"  @click="btn('multiplication')"><i class="material-icons">clear</i></a>
         <a id="btndiv" class="btn-floating btn-large waves-effect waves-light red"  @click="btn('division')"><i class="material-icons">/</i></a>
          <a id="btnE" class="btn-floating btn-large waves-effect waves-light red"  @click="btn('btnE')"><i class="material-icons">=</i></a>
        </div>
    </div>
</template>

<script>
export default {
  name: "numKeys",
  methods: {
    btn(btnNo) {
      this.$store.dispatch(btnNo);
    }
  }
};
</script>

<style scoped>
.numContainer {
  margin: 0 auto;
  width: 70%;
  height: 220px;
  display: grid;
  grid-template-areas:
    "btn7 btn8 btn9 btnadd"
    "btn4 btn5 btn6 btnsub"
    "btn1 btn2 btn3 btnmul"
    "btn0 btnE btnE btndiv";
  grid-template-rows: 25% 25% 25% 25%;
  grid-template-columns: 25% 25% 25% 25%;
  grid-gap: 10px;
}

#btn1 {
  grid-area: btn1;
  height: 100%;
  width: 100%;
}
#btn2 {
  grid-area: btn2;
  height: 100%;
  width: 100%;
}
#btn3 {
  grid-area: btn3;
  height: 100%;
  width: 100%;
}
#btn4 {
  grid-area: btn4;
  height: 100%;
  width: 100%;
}
#btn5 {
  grid-area: btn5;
  height: 100%;
  width: 100%;
}
#btn6 {
  grid-area: btn6;
  height: 100%;
  width: 100%;
}
#btn7 {
  grid-area: btn7;
  height: 100%;
  width: 100%;
}
#btn8 {
  grid-area: btn8;
  height: 100%;
  width: 100%;
}
#btn9 {
  grid-area: btn9;
  height: 100%;
  width: 100%;
}
#btn0 {
  grid-area: btn0;
  height: 100%;
  width: 100%;
}
#btnadd {
  grid-area: btnadd;
  height: 100%;
  width: 100%;
}

#btnsub {
  grid-area: btnsub;
  height: 100%;
  width: 100%;
}

#btnmul {
  grid-area: btnmul;
  height: 100%;
  width: 100%;
}

#btndiv {
  grid-area: btndiv;
  height: 100%;
  width: 100%;
}
#btnE {
  grid-area: btnE;
  border-radius: 5%;
  height: 100%;
  width: 100%;
}
</style>