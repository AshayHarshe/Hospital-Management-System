import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.scss']
})
export class DoctorsComponent implements OnInit {
  // modalRef: any;
  // modalService: any;

  // constructor() { }

  modalRef?: BsModalRef;
  constructor(private modalService: BsModalService) {}

  ngOnInit(): void {
  }


  openDoctorModal(Doctortemplate: TemplateRef<any>, index:any ) {

    if(index !='null'){
      this.doctorName = this.DoctorData[index].name;
      this.doctorExperties = this.DoctorData[index].experties;
      this.doctorMobile = this.DoctorData[index].mobile;
      this.doctorExperience = this.DoctorData[index].experience;
  
      this.selectedDoctorIndex = index;
    }


    this.modalRef = this.modalService.show(Doctortemplate);
  }

  DoctorData:any = [
    {
      name: "Dr. JOHN",
      experties: "Robotic Surgeon",
      mobile: "111",
      experience: "14"
    },
    {
      name: "Dr. Monk",
      experties: "Neurosurgery",
      mobile: "222",
      experience: "20"
    },
  ]

    doctorName = "";
    doctorExperties = "";
    doctorMobile = "";
    doctorExperience = "";

    selectedDoctorIndex = "";

    submitDoctor(){
      let doctor = {
        name: this.doctorName,
        experties: this.doctorExperties,
        mobile: this.doctorMobile,
        experience: this.doctorExperience,
      }

      console.log('this.DoctorData',this.DoctorData);
      this.DoctorData.push(doctor);

      this.doctorName = "";
      this.doctorExperties = "";
      this.doctorMobile = "";
      this.doctorExperience = "";

      this.modalRef?.hide();
    }

    DeleteDoctor(i:any){
      this.DoctorData.splice(i,1);
    }

    editDoctor(){
      this.DoctorData[this.selectedDoctorIndex].name = this.doctorName;
      this.DoctorData[this.selectedDoctorIndex].experties = this.doctorExperties;
      this.DoctorData[this.selectedDoctorIndex].mobile = this.doctorMobile;
      this.DoctorData[this.selectedDoctorIndex].experience = this.doctorExperience;
    
      this.doctorName = "";
      this.doctorExperties = "";
      this.doctorMobile = "";
      this.doctorExperience = "";
    
    
      this.modalRef?.hide();
    }

    doctorClose(){
      this.doctorName = "";
      this.doctorExperties = "";
      this.doctorMobile = "";
      this.doctorExperience = "";
    
      this.modalRef?.hide();
    }

    resetDoctor(){
      this.doctorName = "";
      this.doctorExperties = "";
      this.doctorMobile = "";
      this.doctorExperience = "";
    }
    



}
