---
title: Nuova iscrizione
permalink: registration
#private: true
---


<div class="form">

<div id="alert"></div>

<input id="name"   type="text"    name="name"    placeholder="Nome e Cognome"/>
<input id="email"  type="text"    name="email"    placeholder="Email"/>
<input id="city"   type="text"    name="city"    placeholder="Da dove vieni?"/>
<input id="mobile" type="text"    name="mobile"    placeholder="Cellulare"  class="medium input"/>
<input id="age"    type="text"    name="age"    placeholder="Età (anni)" class="small input"/>

<!--div class="">
  <p class="small text">Hai intolleranze alimentari?</p>
  <input  id="n-intollerances" class="radio" type="radio" name="selector"/><label for="n-intollerances">No</label>
  <input  id="y-intollerances" type="radio" name="selector"/><label for="y-intollerances">Si</label>
  <input  id="intolerance"     type="text"  name="intolerance"    placeholder=""   />
</div-->

<ul class="radio">
<p class="small text">Hai intolleranze alimentari?</p>
 <li  id="y-intollerances">
   <input id="y-radio" type="radio" name="selector" >
   <label for="f-option">Si</label>
   <div class="check"></div>
   <input  id="intolerance"     type="text"  name="intolerance"    placeholder="Quali?"   disabled/>
 </li>
 <!-- <li> -->
 <!-- </li> -->

 <li  id="n-intollerances">
   <input id="n-radio" type="radio" name="selector" checked>
   <label for="s-option">No</label>
   <div class="check"></div>
   <!-- <div class="check"><div class="inside"></div></div> -->
 </li>

</ul>


<button class="input-btn" id="registration" name="registration">Iscriviti</button>

</div>