<template>
    <div id="wrapper">
       <div class="input-field col s26">
          <input placeholder="Placeholder" id="first_name" type="text" class="validate">
          <label for="first_name">First Name</label>
        </div>

       <div class="numContainer">
        <a id="btn7" class="waves-effect waves-light blue btn">7</a>
        <a id="btn8" class="waves-effect waves-light blue btn">8</a>
        <a id="btn9" class="waves-effect waves-light blue btn">9</a><br><br>
        <a id="btn4" class="waves-effect waves-light blue btn">4</a>
        <a id="btn5" class="waves-effect waves-light blue btn">5</a>
        <a id="btn6" class="waves-effect waves-light blue btn">6</a><br><br>
        <a id="btn1" class="waves-effect waves-light blue btn">1</a>
        <a id="btn2" class="waves-effect waves-light blue btn">2</a>
        <a id="btn3" class="waves-effect waves-light blue btn">3</a><br><br>
        <a id="btn0" class="waves-effect waves-light blue btn">0</a>
         <a id="btnadd" class="btn-floating btn-large waves-effect waves-light red"><i class="material-icons">add</i></a>
         <a id="btnsub" class="btn-floating btn-large waves-effect waves-light red"><i class="material-icons">remove</i></a>
         <a id="btnmul" class="btn-floating btn-large waves-effect waves-light red"><i class="material-icons">clear</i></a>
         <a id="btndiv" class="btn-floating btn-large waves-effect waves-light red"><i class="material-icons">/</i></a>
          <a id="btnE" class="btn-floating btn-large waves-effect waves-light red"><i class="material-icons">=</i></a>
        </div>
    </div>
</template>

<script>

export default {
    name: 'numKeys',
}

</script>

<style scoped>

#wrapper{
    margin: 0 auto;
    width: 50%;
    height: auto;
}

.numContainer{
    margin: 0 auto;
    width: 100%;
    height: 300px;
    display: grid;
    grid-template-areas: 'btn7 btn8 btn9 btnadd'
                         'btn4 btn5 btn6 btnsub'
                         'btn1 btn2 btn3 btnmul'
                         'btn0 btnE btnE btndiv';
    grid-template-rows: 25% 25% 25% 25%;
    grid-template-columns: 25% 25% 25% 25%;  
    grid-gap: 10px;
}

#btn1{
  grid-area: btn1;
  height: 100%;
  width: 100%;
}
#btn2{
  grid-area: btn2;
    height: 100%;
  width: 100%;
}
#btn3{
  grid-area: btn3;
    height: 100%;
  width: 100%;
}
#btn4{
  grid-area: btn4;
    height: 100%;
  width: 100%;
}
#btn5{
  grid-area: btn5;
    height: 100%;
  width: 100%;
}
#btn6{
  grid-area: btn6;
    height: 100%;
  width: 100%;
}
#btn7{
  grid-area: btn7;
    height: 100%;
  width: 100%;
}
#btn8{
  grid-area: btn8;
    height: 100%;
  width: 100%;
}
#btn9{
  grid-area: btn9;
    height: 100%;
  width: 100%;
}
#btn0{
   grid-area: btn0; 
     height: 100%;
  width: 100%;  
}
#btnadd{
   grid-area: btnadd; 
     height: 100%;
  width: 100%;  
}

#btnsub{
   grid-area: btnsub; 
     height: 100%;
  width: 100%;  
}

#btnmul{
   grid-area: btnmul; 
     height: 100%;
  width: 100%;  
}

#btndiv{
   grid-area: btndiv; 
     height: 100%;
  width: 100%;  
}
#btnE{
   grid-area: btnE; 
   border-radius: 5%;
     height: 100%;
  width: 100%;  
}




</style>