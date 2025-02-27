<template>

  <div class="d-flex">
    <div id="sidebar" class=" d-flex flex-column bg-#fffff pt-3" style="width: 300px;height: 100%;"   >
     <div class="container ">
        <p class="brand"><img src="https://static.vecteezy.com/system/resources/previews/045/921/245/non_2x/tyre-company-logo-design-free-vector.jpg"
     width="55px" height="35px"> <span class="text-black text-aling-center"> Hi Team</span> </p>
      
    <div class="list-group flex-grow-1 overflow-auto p-0 ">
    <a href="#" class="list-group-item list-group-item-action active text-whith border-0 rounded-3" style="background-color: #6318f0;" aria-current="true"><i class="bi bi-house-door"></i> Dashbord </a>
    <a href="#" class="list-group-item list-group-item-action border-0 rounded-3"><i class="bi bi-box"></i> Orders</a>
    <a href="#" class="list-group-item list-group-item-action border-0 rounded-3"> <i class="bi bi-people"></i> Passengers</a>
    <a href="#" class="list-group-item list-group-item-action border-0 rounded-3"> <i class="bi bi-car-front"></i> Captains</a>
    <a href="#" class="list-group-item list-group-item-action border-0 rounded-3"> <i class="bi bi-car-front"></i> Categories</a>
    <hr>
    <a href="#" class="list-group-item list-group-item-action border-0 rounded-3"> <i class="bi bi-card-list"></i>  Settlements  </a>
    <hr>
    <a href="#" class="list-group-item list-group-item-action border-0 rounded-3"> <i class="bi bi-chat-left"></i>  Contact  </a>
    <a href="#" class="list-group-item list-group-item-action border-0 rounded-3"> <i class="bi bi-stars"></i>  Reviews  </a>
    <hr>
    <a href="#" class="list-group-item list-group-item-action border-0 rounded-3" ><i class="bi bi-shield-shaded"></i> Permissions </a>
    <a href="#" class="list-group-item list-group-item-action border-0 rounded-3"><i class="bi bi-translate"></i> Translation</a>
    <a href="#" class="list-group-item list-group-item-action border-0 rounded-3"> <i class="bi bi-film"></i> Education Video </a>
    <a href="#" class="list-group-item list-group-item-action border-0 rounded-3"> <i class="bi bi-gear"></i> settings </a>
    <a href="#" class="list-group-item list-group-item-action border-0 rounded-3"> <i class="bi bi-car-front"></i> Content</a>
    </div>
    </div>
  </div>
  
  
  <div class="flex -grow-1 d-flex flex-column">
    <nav class="navbar border-bottom border-body px-3" style="height: 66px; " >
      <div class="container-fluid justify-conten d-flex" style=" align-items: center;">
        <!-- first part  -->
         <div class="d-flex align-items-center">
          <div class="container-fluid">
  
          
          <button class="btn  border-0 "><i class="bi bi-search"></i></button>
          
          <button class="btn  border-0 "><i class="bi bi-ui-radios-grid"></i></button>
        </div>
      </div>
    
  
      <!--  part two icon -->
      <div>
        <button class="btn  border-0  rounded-5"><i class="bi bi-moon"></i></button>
        
        <button class="btn border-0 rounded-5"><i class="bi bi-bell"></i></button>
  
        <button class="btn  border-0 rounded-5"><img src="@/assets/flag.svg"></button>
  
        <button class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" style="outline: none;">
     <img src="@/assets/mathnav.svg">
  </button>
        <div class="dropdown-center">
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Action two</a></li>
    <li><a class="dropdown-item" href="#">Action three</a></li>
  </ul>
</div>
  </div>

      </div>
  </nav>
  
  <div class=" d-flex" >
  <div class="p-4" style=" background-color: #F4F7FB; width: 100%; height:100%;">
      
    <div class="pt-16 ps-30 pe-30 pb-16 rounded-3 mb-4 d-flex row " style="background-color: #fff; width:1100px ;height:60px ;align-items: center;"> 
      <div class="d-flex">
          <div class="container-fluid">
          <span class="ps-1 " style="font-weight: 650;font-size: 20px;">chat</span>
      </div>
      <div class="d-flex">
        <i class="bi bi-house"></i> / <div class="rounded-3" style="width: 48px;height: 26px;text-align: center;background-color: #DDDBFF;color: #635BFF;align-items: center;">chat</div>
      </div>
    </div>
    </div>
    

    <div class="container rouded-0" >
      <div class="row g-0 d-flex justify-contener-center">
  
        <div class="col-4">
          <div class="card">
            <div class="card-body" style="width: 400px;height: 700px; outline: none;">
              <div class="card-title">
                <li class="list-group-item list-group-item-action d-flex" style="color: #29343D; margin-top: 10px " >
               <img src="@/assets/mathew.svg" style="align-items: center;padding-right: 10px;"> <img src="@/assets/off-line.svg" style="padding-top: 25px;padding-right:10px ;">
               <div style="text-align: start;">  Mathwe Anderson<br>
               <span><small>Marketing Director</small></span>
              </div>
                </li>
                </div>
                <div class="input-group " style="width: 310px;height: 30px;margin-top: 30px;margin-bottom: 60px;">
                  <i class="bi bi-search item-center"></i> 
                        <input type="text" class="form-control" aria-label="Text input" placeholder="Search contacts">
                          </div>

              <p>Recent Chats <i class="bi bi-chevron-down"></i></p> 

          <ul class="list-group list-group-flush">
              <li class="list-group-item list-group-item-action d-flex ms-0" style="background-color:#F6F7F9;color: #29343D; width: 365px; " aria-current="true">
               <img src="@/assets/Michell Flintoff.svg"  style="align-items: center;"><img src="@/assets/online.svg" style="padding-top: 25px;padding-right:10px ;">
                <div style="text-align: start;">  Michell Flintoff<br>
               <span><small>You: Yesterday was great...</small></span>
              </div>
                </li> 
                <li class="list-group-item list-group-item-action  d-flex" style="background-color:#fff;color: #29343D;outline: #29343D;width: 365px; " >
                  <img src="@/assets/Bianca.svg" style="align-items: center;"><img src="@/assets/off-line.svg" style="padding-top: 25px;padding-right:10px ;">
                   <div style="text-align: start;">  Bianca Anderson<br>
               <span><small>Nice looking dress you...</small></span>
              </div>
                </li>
                <li class="list-group-item list-group-item-action d-flex" style="background-color:#fff;color: #29343D;outline: #29343D;width: 365px; " >
               <img src="@/assets/Andrew Johnson.svg" style="align-items: center;"><img src="@/assets/Busy-.svg" style="padding-top: 25px;padding-right:10px ;">
                <div style="text-align: start;">  Andrew Johnson<br>
               <span><small>Sent a photo</small></span>
              </div>
                </li>
                <li class="list-group-item list-group-item-action  d-flex" style="background-color:#fff;color: #29343D;outline: #29343D;width: 365px; ">
               <img src="@/assets/Mark, Stoinus & Rishv.svg" style="align-items: center;"><img src="@/assets/online.svg" style="padding-top: 25px;padding-right:10px ;">
                <div style="text-align: start;">  Mark Strokes<br>
               <span><small>Lorem ispusm text sud...</small></span>
              </div>
                </li>
                <li class="list-group-item list-group-item-action  d-flex" style="background-color:#fff;color: #29343D;outline: #29343D;width: 365px; " >
               <img src="@/assets/Mark.svg" style="align-items: center;"> <img src="@/assets/online.svg" style="padding-top: 25px;padding-right:10px ;">
               <div style="text-align: start;">  Mark, Stoinus & Rishvi..<br>
               <span><small>Lorem ispusm text ...</small></span>
              </div>
                </li>
                <li class="list-group-item list-group-item-action  d-flex" style="background-color:#fff;color: #29343D;outline: #29343D; width: 365px;" >
               <img src="@/assets/Bianca.svg" style="align-items: center;"> <img src="@/assets/off-line.svg" style="padding-top: 25px;padding-right:10px ;">
               <div style="text-align: start;">  Bianca Anderson<br>
               <span><small>Nice looking dress you...</small></span>
              </div>
                </li>
             </ul>
            </div>
          </div>
        </div>
              


        <div class="col-8">
          <div class="card">
            <div class="card-body">
          
              <nav class="navbar border-bottom border-body px-3" style="height: 68px;" >
      <div class="container-fluid justify-conten d-flex align-items-center ">
        <!-- first part  -->
        <div class="d-flex">
          <div class="container-fluid">
           <img src="@/assets/Michell Flintoff.svg" style="align-items: center;" >
          <span class="ps-1">Away</span>
      </div>
    </div>
  
      <!--  part two icon -->
      
        <div>
          
        <button class="btn border-0 ms-1 me-1 " style="color: #635BFF; border: 5px;"><i class="bi bi-ban"></i></button>
  
        <button class="btn border-0 ms-1 me-1" style="color:#FF0000;"><i class="bi bi-trash"></i></button>
  
    
        <button class="btn border-0  " style="margin-left:5px;margin-right: 0.1px;"><i class="bi bi-telephone"></i></button>
  
        <button class="btn border-0  " style="margin-left:0.1 px;"> <i class="bi bi-camera-video"></i></button>
       
        <button class="btn  border-0 " style="margin-left:0.1px;"><i class="bi bi-list"></i></button>
        
      </div>
   </div>
  </nav>


  <div class="container d-flex justify row m-0">
   
    <div class="col-8">
    <div><img src="@/assets/Andrew Johnson.svg" class="mt-1">
  <span><small> Andrew, 2 hours ago</small></span>
  <div class="alert p-1 ms-4 mt-1" style="text-align: center; width: 350px ; height: 40px; background-color:#EFF4FA ;border:#EFF4FA ;justify-self: start;">If I don’t like something, I’ll stay away from it.</div>
<div>
  <span style="margin-left: 344px;"><small> 2 hours ago</small></span>
    <div class="alert alert-primary p-1" style="text-align: center; width: 350px ; height: 40px; background-color:#ECFDFD;border: #ECFDFD; margin-left:40px;justify-self:end;">If I don’t like something, I’ll stay away from it.</div>
 </div>
 <div><img src="@/assets/Andrew Johnson.svg">
  <span>Andrew, 2 hours ago</span>
  <div class="alert p-1 ms-4" style="text-align: center; width: 350px ; height: 40px;background-color:#EFF4FA ;border:#EFF4FA ;">I want more detailed information from it.</div>
  <div>
    <span style="margin-left: 344px;"> 2 hours ago</span>
    <div class="alert  p-1 ms-5 me-1" style="text-align: center; width: 350px ; height: 40px; background-color:#ECFDFD;border: #ECFDFD; margin-left:20px  ;justify-self:end;">If I don’t like something, I’ll stay away from it.</div>
 </div>
    <div class="alert p-1 " style="text-align: center; width: 400px ; height: 40px; background-color:#ECFDFD;border: #ECFDFD;margin-left:40px ;justify-self:end;">They got there early, and they got really good seats.</div>
  </div>  

  <div><img src="@/assets/Andrew Johnson.svg">
    <span class="ps-5">Andrew, 2 hours ago</span>
    <div class="alert p-1 ms-5 me-1" style="text-align: center; width:200px; height:90px;"><img src="@/assets/imeg1.svg" width="200px" height="90px">
</div>
</div>
</div>

<div>
  <div>
    <div class="border-up-1">
  <div class="input-group flex-nowrap">
    <span class="input-group-text"><i class="bi bi-emoji-smile"></i> </span>

  <input type="text" class="form-control border-start-0 border-end-0" placeholder="Type a Message" aria-label="Type a Message" aria-describedby="addon-wrapping"  >
  <button  class="but bg-white  border-0 "><i class="bi bi-image"></i></button>
  <button class="but bg-white border-0 "> <i class="bi bi-paperclip"> </i></button>
  <button class="but bg-white border-0 "><i class="bi bi-mic"></i></button>
</div>
</div>
</div>
</div>
</div>


    <div class="d-flex  col-4">
     <div class="container justify-content-between">
    <div><p>Media (36)</p></div>
    <div>
     <img src="@/assets/imeg1.svg" class=" float-start m-1" width="48px" height="44px" alt="...">
    <img src="@/assets/img2.svg" class=" float-center m-1" width="48px" height="44px" alt="...">
    <img src="@/assets/img3.svg" class=" float-end m-1" width="48px" height="44px" alt="..."> 
     </div>
     <div>

   <img src="@/assets/img4.svg" class=" float-start m-1" width="48px" height="44px"  alt="...">
    <img src="@/assets/imeg1.svg" class=" float-center m-1" width="48px" height="44px" alt="...">
    <img src="@/assets/img2.svg" class=" float-end m-1" width="48px" height="44px" alt="..."> 

     </div>
       <p>Files (36)</p>
  <!-- <div class="justify-content-start col-4 flex-column mb-3 float-start"> -->
        <li class="list-group-item d-flex"><img src="@/assets/service-taskpdf.svg" width="48px" height="44px" class="m-1 "> <div style="text-align: start;">service-task.pdf <br><span> <small>2 MB   2 Dec 2022</small> </span></div></li>
        <li class="list-group-item d-flex"><img src="@/assets/home.svg" width="48px" height="44px" class="m-1 "> <div style="text-align: start;">homepage-design.fig <br><span> <small>2 MB   2 Dec 2022</small> </span></div></li>
        <li class="list-group-item d-flex"><img src="@/assets/crome.svg" width="48px" height="44px" class="m-1 "> <div style="text-align: start;">about-us.html <br><span> <small>2 MB   2 Dec 2022</small> </span></div></li>
        <li class="list-group-item d-flex"><img src="@/assets/work-projectzip.svg" width="48px" height="44px" class="m-1 "> <div style="text-align: start;">work-project.zip <br><span> <small>2 MB   2 Dec 2022</small> </span></div></li>
        <li class="list-group-item d-flex"><img src="@/assets/customjs.svg" width="48px" height="44px" class="m-1 "> <div style="text-align: start;">service-task.pdf <br><span> <small>2 MB   2 Dec 2022</small> </span></div></li>
  <!-- </div> -->       
    </div>
      </div>
         </div>
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
  export default{
      data(){
    return{
  
    }
   },
  methods:{
    status(){
    }
  }
  };
  </script>
  
  <style>
  .card-left {
border: 8px;
  }
  
  </style>
  