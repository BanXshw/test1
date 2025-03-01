<template>
  <div class="d-flex">
 
 <side_bar/>
 
 <div class="d-flex">
   <div class="flex-grow-1 d-flex flex-column justify-contener-center">
   <nav_bar/>
 
   <div class="d-flex">
     <div class="flex -grow-1 d-flex flex-column justify-contener-center" style=" background-color: #fff; width: 100%; height:900px;">
 
    
 
 
   
   <div class=" d-flex" >
   <div class="p-4" style=" background-color: #F4F7FB; width: 100%; height:900px;">
       <!--  -->
     <div class="pt-16 ps-30 pe-30 pb-16 rounded-3 mb-4 d-flex row justify-content-center " 
     style="background-color: #ffff;
      width:1140px ;
      height:60px ;
      align-items: center;
      margin-left: 12px;"> 
 
       <div class="d-flex align-items-center justify-content-center">
           <div class="container-fluid justify-content-center">
           <span class="ps-1 " style="font-weight: 650;font-size: 20px;">chat</span>
       </div>
       <div class="d-flex">
         <i class="bi bi-house"></i> / <div class="rounded-3" style="width: 48px;height: 26px;text-align: center;background-color: #DDDBFF;color: #635BFF;align-items: center;">chat</div>
       </div>
     </div>
     </div>
     <div class="container rouded-0" >
       <div class="row g-0 d-flex justify-content-center">
 
     <chat_list/>
               
         <chat_part />
       </div>
       </div>
          </div>
           </div>
            </div>
             </div>
              </div>
               </div>      
                </div>
         
       
        
       
     
    
   
   </template>
   
   <script >
   import chat_part from './components/chat_part.vue';
   import chat_list from './components/chat_list.vue';
   import nav_bar from './components/nav_bar.vue';
   import side_bar from'./components/side_bar.vue';
 
   export default{
       data(){
     return{
   
     }
    },
   components:{
     chat_part,
     chat_list,
     nav_bar,
     side_bar,
   }
   };
   </script>
   
   <style>
   .card-left {
 border: 8px;
   }
   
   </style>
   