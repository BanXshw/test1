<template>
    <div class="col-8">
           <div class="card">
             <div class="card-body">
           
               <nav class="navbar border-bottom border-body px-3" style="height: 68px;" >
       <div class="container-fluid justify-conten d-flex align-items-center ">
         <!-- first part  -->
         <div class="d-flex">
           <div class="container-fluid">
            <img src="@/assets/Michell Flintoff.svg" style="align-items: center;" ><img src="@/assets/online.svg">
           <span class="ps-1">Away</span>
       </div>
     </div>
   
       <!--  part two icon -->
       
         <div>
 
     
         <!-- Button trigger modal -->
 <button type="button" class="btn  border-0 ms-1 me-1" data-bs-toggle="modal" data-bs-target="#exampleModal" style="color: #635BFF; border: 5px;">
   <i class="bi bi-ban"></i>
    
 </button>
 
 <!-- Modal -->
 <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
   <div class="modal-dialog">
     <div class="modal-content">

        <div class="modal-body">
         <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
       </div>
       <div class="modal-body" style="justify-items:center; background-color:#fff;">
         <i class="bi bi-ban" style="width: 59px;height: 54px;"></i>
       <p style="font-size: medium;"> block user</p> 
        <h5>you are going to block this user , are you sure?</h5>  
 
       </div>
       <div class="modal-body" style="justify-content: center;">
         <button type="button" class="btn btn-" data-bs-dismiss="modal" style="background-color: #959595;color: #fff;">Close</button>
         <button type="button" class="btn " style="background-color: #575CD4;color: #fff;">Yes</button>

     </div>
   </div>  
 </div> 
 </div> 
   
 <!-- Button trigger modal -->
<button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
  <i class="bi bi-trash" style="color: #FF0000;"></i>
</button>

<!-- Modal -->
<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-body">
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body" style="justify-items:center; background-color:#fff;">
        <i class="bi bi-trash" style="color: #FF0000;"></i>
       <p style="font-size: medium;"> delete conversation</p> 
        <h5>once you sure to delete this conversation , you will not be able to undo this action</h5>  
 
       </div>
       <div class="modal-body" style="justify-content: center;">
         <button type="button" class="btn btn-" data-bs-dismiss="modal" style="background-color: #959595;color: #fff;">Close</button>
         <button type="button" class="btn " style="background-color: #575CD4;color: #fff;">Yes</button>
    </div>
  </div>
</div>  
</div>       
     
<button class="btn border-0  " style="margin-left:0.1 px;"> <i class="bi bi-telephone"></i> </button>
    
         <button class="btn border-0  " style="margin-left:0.1 px;"> <i class="bi bi-camera-video"></i></button>
        
         <button class="btn  border-0 " style="margin-left:0.1px;"><i class="bi bi-list"></i></button>
         
       </div>
    </div>
 
   </nav> 
 
 <div class="container d-flex row m-0">
    
     <div class="col-8">
     <div><img src="@/assets/Andrew Johnson.svg" class="mt-1">
   <span><small> Andrew, 2 hours ago</small></span>
   <div class="alert p-1 ms-4 mt-1" style="text-align: center; width: 350px ; height: 40px; background-color:#EFF4FA ;border:#EFF4FA ;justify-self: start;">If I don’t like something, I’ll stay away from it.</div>
 <div>
   <span style="margin-left: 344px;"><small> 2 hours ago</small></span>
     <div class="alert alert-primary p-1" style="text-align: center; width: 350px ; height: 40px; background-color:#ECFDFD;border: #ECFDFD; margin-left:40px;justify-self:end;">If I don’t like something, I’ll stay away from it.</div>
  </div>
  <div><img src="@/assets/Andrew Johnson.svg">
   <span><small> Andrew, 2 hours ago</small></span>
   <div class="alert p-1 ms-4" style="text-align: center; width: 350px ; height: 40px;background-color:#EFF4FA ;border:#EFF4FA ;">I want more detailed information from it.</div>
   <div>
     <span style="margin-left: 344px;"><small>  2 hours ago</small></span>
     <div class="alert  p-1 ms-5 me-1" style="text-align: center; width: 350px ; height: 40px; background-color:#ECFDFD;border: #ECFDFD; margin-left:20px  ;justify-self:end;">If I don’t like something, I’ll stay away from it.</div>
  </div>
     <div class="alert p-1 " style="text-align: center; width: 400px ; height: 40px; background-color:#ECFDFD;border: #ECFDFD;margin-left:40px ;justify-self:end;">They got there early, and they got really good seats.</div>
   </div>  
 
   <div><img src="@/assets/Andrew Johnson.svg">
    <span><small> Andrew, 2 hours ago</small></span>
     <div class="alert p-1 ms-5 me-1 " style="text-align: center; width:200px; height:90px;"><img src="@/assets/imeg1.svg" width="200px" height="90px">
 </div>
<hr>
 <div class="input-group ">
  <i id="basic-addon1" class="bi bi-emoji-smile me-1" style="justify-self: center;"></i>
  <input type="text" class="form-control border-0  " placeholder="Type a Message" aria-label="Message" aria-describedby="basic-addon1">

   <button  class="btn  border-0 "><i class="bi bi-image"></i></button>
   <button class=" btn border-0 "> <i class="bi bi-paperclip"> </i></button>
 

   <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
  <i class="bi bi-mic"></i>
</button>

<!-- Modal -->
<div class="modal fade" id="Backdrop" data-bs-backdrop data-bs-keyboard="false" tabindex="-1" aria-labelledby="BackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-body">
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body" style="justify-items:center; background-color:#fff;">
        <i class="bi bi-unlock"></i>
       <p style="font-size: medium;">  unlock user</p> 
        <h5>you are going to unblock this user , are you sure?</h5>  
 
       </div>
       <div class="modal-body" style="justify-content: center;">
         <button type="button" class="btn btn-" data-bs-dismiss="modal" style="background-color: #959595;color: #fff;">Close</button>
         <button type="button" class="btn " style="background-color: #575CD4;color: #fff;">Yes</button>
    </div>
  </div>
</div>
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
 </template>