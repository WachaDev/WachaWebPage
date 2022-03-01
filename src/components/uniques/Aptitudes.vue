<template>
 <div id="aptitudes" class="section">
   <div id="aptitudes-container">
     <div id="skilled">
       <div class="aptitude-container">
         <div class="icon-container">
           <i class="fas fa-lightbulb"></i>
         </div>
         <div class="subtitle-container">
           <h3 class="subtitle">Skilled</h3>
         </div>
         <div class="paragraph-container">
           <p class="paragraph">
             Lorem ipsum dolor sit amet, consectetur adipisicing elit.
             Cumque optio sapiente earum aperiam voluptas sed quo sit?
             Ex, expedita cupiditate.
           </p>
         </div>
       </div>
     </div>

     <div id="responsable">
       <div class="aptitude-container">
         <div class="icon-container">
           <i class="fas fa-calendar-check"></i>
         </div>
         <div class="subtitle-container">
           <h3 class="subtitle">Responsable</h3>
         </div>
         <div class="paragraph-container">
           <p class="paragraph">
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
             earum laborum consequatur perspiciatis officiis tempore
             atque a, eius.
           </p>
         </div>
       </div>
     </div>

     <div id="passionate">
       <div class="aptitude-container">
         <div class="icon-container">
           <i class="fas fa-fire"></i>
         </div>
         <div class="subtitle-container">
           <h3 class="subtitle">Passionate</h3>
         </div>
         <div class="paragraph-container">
           <p class="paragraph">
             Lorem ipsum, dolor sit amet consectetur adipisicing elit.
             Fugiat dolores nam ullam officiis maiores perferendis ab
             repellat asperiores, incidunt a.
           </p>
         </div>
       </div>
     </div>
   </div>
 </div>
</template>

<style scoped>
#aptitudes-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 29px;
  text-align: center;
  margin-top: 5%;
  margin-left: 5%;
  margin-left: 5%;
  margin-bottom: 5%;
  color: #fff;
  font-weight: bold;
}

.aptitude-container {
  background: #a51212;
  padding: 0.5rem;
  border: 5px solid #ffff;
  box-shadow: rgba(0, 0, 0, 0.7) 0px 5px 15px;
}

.aptitude-container:hover {
  background: #ffff;
  color: #a51212;
  border-color: #a51212;
}

.subtitle-container {
  margin-bottom: 10px;
}

.subtitle {
  font-size: 1.5rem;
  font-family: "Fugaz One";
}

.paragraph-container {
  margin-left: 4rem;
  margin-right: 4rem;
}

.icon-container {
  margin-bottom: 0.5rem;
}

#aptitudes i {
  font-size: 1.5rem;
}
</style>