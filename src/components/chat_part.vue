<template>
    <div class="col-8  ">
           <div class="card border border-start border-0">
           
               <nav class="navbar border-bottom" style="height: 68px;" >
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
       <p style="font-size:large;"> block user</p> 
        <h5 style="color: #717171;font-size:17px;"><small>You are going to block this user , are you sure?</small></h5>  
 
       </div>
       <div class="modal-body" style="justify-content: center;">
         <button type="button" class="btn btn-" data-bs-dismiss="modal" style="background-color: #959595;color: #fff; margin-left: 30px; margin-right: 30px; justify-items: left;">Close</button>
         <button type="button" class="btn " style="background-color: #575CD4;color: #fff;margin-left: 40px; margin-right: 25px; ">Yes</button>

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
        <i class="bi bi-trash" style="color: #FF0000;size: 50px;"></i>
       <p style="font-size: larger;"> delete conversation</p> 
        <h5 style="font-size:17px;"><small>Once you sure to delete this conversation , you will not be able to undo this action</small></h5>  
 
       </div>
       <div class="modal-body" style="justify-content: center;">
         <button type="button" class="btn btn-" data-bs-dismiss="modal" style="background-color: #959595;color: #fff; margin-left: 40px; margin-right: 40px; justify-items: left;">Close</button>
         <button type="button" class="btn " style="background-color: #575CD4;color: #fff;margin-left: 40px; margin-right: 25px; ">Yes</button>

    </div>
  </div>
</div>  
</div>       
     
<button class="btn border-0  " style="margin-left:0.1px;"> <i class="bi bi-telephone"></i> </button>
    
         <button class="btn border-0  " style="margin-left:0.1px;"> <i class="bi bi-camera-video"></i></button>
        
         <button class="btn  border-0 " style="margin-left:0.1px;"><i class="bi bi-list"></i></button>
         
       </div>
    </div>
 
   </nav> 
 

    <div class="row">
     <div class="col-8 gap-end-0">
     <div><img src="@/assets/Andrew Johnson.svg" class=" ms-4 mb-2">
   <span style="color:#98A4AE ;margin-left: 10px;"><small> Andrew, 2 hours ago</small></span>
   <div class="alert p-1 mt-1" style="text-align: center; 
   width: 350px ; 
   height: 40px; 
   background-color:#EFF4FA ;
   border:#EFF4FA ;
   justify-self: start;
   margin-left: 75px;">If I don’t like something, I’ll stay away from it.</div>
 <div>
   <span style="margin-left: 405px; color:#98A4AE ;"><small> 2 hours ago</small></span>
     <div class="alert alert-primary p-1 mt-2" style="text-align: center;
      width: 350px ;
       height: 40px;
        background-color:#ECFDFD;
        border: #ECFDFD; 
        margin-left: 405px;
        justify-self:end;">If I don’t like something, I’ll stay away from it.</div>
  </div>
  <div><img src="@/assets/Andrew Johnson.svg" class="mt-1 ms-4 mb-2">
   <span style="color:#98A4AE ;margin-left: 10px;"><small> Andrew, 2 hours ago</small></span>
   <div class="alert p-1" 
   style="text-align: center; 
   width: 300px ; 
   height: 40px;
   background-color:#EFF4FA ;
   border:#EFF4FA ;
    margin-left: 75px;">I want more detailed information from it.</div>
   <div>
     <span style="margin-left: 405px;
    
     color:#98A4AE ;"><small>  2 hours ago</small></span>
     <div class="alert  p-1 ms-5 me-1" style="text-align: center; width: 350px ; height: 40px; background-color:#ECFDFD;border: #ECFDFD; margin-left:20px  ;justify-self:end;">If I don’t like something, I’ll stay away from it.</div>
  </div>
     <div class="alert p-1 " style="text-align: center; width: 400px ; height: 40px; background-color:#ECFDFD;border: #ECFDFD;margin-left:40px ;justify-self:end;">They got there early, and they got really good seats.</div>
   </div>  
 
   <div><img src="@/assets/Andrew Johnson.svg" class="mt-1 ms-4 mb-2">
    <span style="color:#98A4AE ; margin-left: 10px;"><small> Andrew, 2 hours ago</small></span>
     <div class=" p-1 me-1" style="text-align: center; width:200px; height:90px; margin-bottom: 80px;margin-left: 30px;"><img src="@/assets/loly.svg" width="200px" height="90px" >
 </div>
<hr>
  <div class="col border border-0">
 <div class="input-group">
  <i id="basic-addon1" class="bi bi-emoji-smile me-1" style="justify-self: center;"></i>
  <input type="text" class="form-control border-0  " placeholder="Type a Message" aria-label="Message" aria-describedby="basic-addon1" style="color: #98A4AE;">

   <button  class="btn  border-0 "><i class="bi bi-image"></i></button>
   <button class=" btn border-0 "> <i class="bi bi-paperclip"> </i></button>

 
   <div> 
    <div>
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
    </div>
      </div>
    </div>

    


 
 
 
     <div class=" gap-3 d-flex  col-4 border border-start border-0">
      <div class="container justify-content-between">
     <div><p>Media (36)</p></div>
     <div>
      <img src="@/assets/imeg1.svg" class=" float-start m-1" width="64px" height="55px" alt="...">
     <img src="@/assets/img2.svg" class=" float-center m-1" width="64px" height="55px" alt="...">
     <img src="@/assets/img3.svg" class=" float-end m-1" width="64px" height="55px" alt="..."> 
      </div>
      <div>
 
    <img src="@/assets/img4.svg"  class=" float-start m-1" width="64px" height="55px" alt="...">
     <img src="@/assets/imeg1.svg" class=" float-center m-1" width="64px" height="55px" alt="...">
     <img src="@/assets/img2.svg" class=" float-end m-1" width="64px" height="55px" alt="..."> 
 
      </div >
        <p style="margin-top:25px;margin-bottom: 20px;">Files <span style="color: #959595;">(36)</span></p>
   <!-- <div class="justify-content-start col-4 flex-column mb-3 float-start"> -->
         <li class="list-group-item d-flex">
          <img src="@/assets/service-taskpdf.svg" width="48px" height="44px" class="mb-3 "> 
          <div style="text-align: start;">
           service-task.pdf <br><span> <small>2 MB   2 Dec 2022</small> </span></div>
        </li>
         <li class="list-group-item d-flex"><img src="@/assets/home.svg" width="48px" height="44px" class="mb-4 "> 
          <div style="text-align: start;">
           homepage-design.fig <br><span> <small>2 MB   2 Dec 2022</small> </span></div>
          </li>
         <li class="list-group-item d-flex"><img src="@/assets/crome.svg" width="48px" height="44px" class="mb-4 "> 
          <div style="text-align: start;"> about-us.html <br><span> <small>2 MB   2 Dec 2022</small> </span></div>
        </li>
         <li class="list-group-item d-flex"><img src="@/assets/work-projectzip.svg" width="48px" height="44px" class="mb-4 ">
           <div style="text-align: start;"> work-project.zip <br><span> <small>2 MB   2 Dec 2022</small> </span></div>
          </li>
         <li class="list-group-item d-flex"><img src="@/assets/customjs.svg" width="48px" height="44px" class="mb-4 "> 
          <div style="text-align: start;"> service-task.pdf <br><span> <small>2 MB   2 Dec 2022</small> </span></div>
        </li>
   <!-- </div> -->       
     </div>
       </div>
          </div>
          </div>
            </div>
          
           
         
        
 </template>