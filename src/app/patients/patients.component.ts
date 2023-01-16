import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.scss']
})
export class PatientsComponent implements OnInit {
  modalRef?: BsModalRef;
  constructor(private modalService: BsModalService) {}

  ngOnInit(): void {
  }



  openPatientModal(Patienttemplate: TemplateRef<any>, index:any ) {

    if(index !='null'){
      this.patientName = this.PatientData[index].name;
      this.patientAge = this.PatientData[index].age;
      this.patientDiagnosis = this.PatientData[index].diagnosis;
      this.patientDoctor = this.PatientData[index].doctor;
  
      this.selectedPatientIndex = index;
    }


    this.modalRef = this.modalService.show(Patienttemplate);
  }

  PatientData:any = [
    {
      name: "Mr. Oliver",
      age: "30",
      diagnosis: "Heart",
      doctor: "Dr. Edward"
    },
    {
      name: "Mr. Justin",
      age: "24",
      diagnosis: "Brain",
      doctor: "Dr. Harry"
    },
  ]

    patientName = "";
    patientAge = "";
    patientDiagnosis = "";
    patientDoctor = "";

    selectedPatientIndex = "";

    submitPatient(){
      let patient = {
        name: this.patientName,
        age: this.patientAge,
        diagnosis: this.patientDiagnosis,
        doctor: this.patientDoctor,
      }

      console.log('this.PatientData',this.PatientData);
      this.PatientData.push(patient);

      this.patientName = "";
      this.patientAge = "";
      this.patientDiagnosis = "";
      this.patientDoctor = "";

      this.modalRef?.hide();
    }

    DeletePatient(i:any){
      this.PatientData.splice(i,1);
    }

    editPatient(){
      this.PatientData[this.selectedPatientIndex].name = this.patientName;
      this.PatientData[this.selectedPatientIndex].age = this.patientAge;
      this.PatientData[this.selectedPatientIndex].diagnosis = this.patientDiagnosis;
      this.PatientData[this.selectedPatientIndex].doctor = this.patientDoctor;
    
      this.patientName = "";
      this.patientAge = "";
      this.patientDiagnosis = "";
      this.patientDoctor = "";
    
    
      this.modalRef?.hide();
    }

    patientClose(){
      this.patientName = "";
      this.patientAge = "";
      this.patientDiagnosis = "";
      this.patientDoctor = "";
    
      this.modalRef?.hide();
    }

    resetPatient(){
      this.patientName = "";
      this.patientAge = "";
      this.patientDiagnosis = "";
      this.patientDoctor = "";
    }
    

}
