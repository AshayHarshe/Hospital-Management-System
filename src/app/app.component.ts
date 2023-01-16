import { Component, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'HospitalManagementCRUD';

  modalRef?: BsModalRef;
  constructor(private modalService: BsModalService) {}



   // * * * * * * * * login form * * * * * * * *


 
  openModal(logintemplate: TemplateRef<any> ) {

    this.modalRef = this.modalService.show(logintemplate);
  }

  loginMail = "";
  loginPassword = "";

  login(){
    console.log('email',this.loginMail);
    console.log('password',this.loginPassword);

    this.loginMail = "";
    this.loginPassword = "";
  }








  // * * * * * * * * Registration form * * * * * * * *







  openRegistrationModal(Registrationtemplate: TemplateRef<any> ) {


    this.modalRef = this.modalService.show(Registrationtemplate);
  }
  
  fullName = "";
  age = "";
  gender = "";
  phone = "";
  address = "";

  signup(){
    console.log('full name',this.fullName);
    console.log('age',this.age);
    console.log('gender',this.gender);
    console.log('phone',this.phone);
    console.log('address',this.address);

    this.fullName = "";
    this.age = "";
    this.gender = "";
    this.phone = "";
    this.address = "";
  }









  // * * * * * * * * * * * * * * * * D O C T O R * * * * * * * * * * * * * * * *








  






  // * * * * * * * * * * * * * * * * P A T I E N T * * * * * * * * * * * * * * * *








  







  // * * * * * * * * * * * * * * * * S T A F F * * * * * * * * * * * * * * * *







  





  // * * * * * * * * * * * * * * * * B I L L I N G * * * * * * * * * * * * * * * *







 




}
