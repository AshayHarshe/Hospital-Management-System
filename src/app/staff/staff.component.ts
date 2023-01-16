import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.scss']
})
export class StaffComponent implements OnInit {
  modalRef?: BsModalRef;
  constructor(private modalService: BsModalService) {}

  ngOnInit(): void {
  }



  openStaffModal(stafftemplate: TemplateRef<any>, index:any ) {

    if(index !='null'){
      this.staffName = this.StaffData[index].name;
      this.staffAge = this.StaffData[index].age;
      this.staffMobile = this.StaffData[index].mobile;
      this.staffDepartment = this.StaffData[index].department;
  
      this.selectedStaffIndex = index;
    }


    this.modalRef = this.modalService.show(stafftemplate);
  }

  StaffData:any = [
    {
      name: "Mr. Daniel",
      age: "21",
      mobile: "333",
      department: "Medicines"
    },
    {
      name: "Mr. Alex",
      age: "19",
      mobile: "444",
      department: "Accounts"
    },
  ]

    staffName = "";
    staffAge = "";
    staffMobile = "";
    staffDepartment = "";

    selectedStaffIndex = "";

    submitStaff(){
      let staff = {
        name: this.staffName,
        age: this.staffAge,
        mobile: this.staffMobile,
        department: this.staffDepartment,
      }

      console.log('this.StaffData',this.StaffData);
      this.StaffData.push(staff);

      this.staffName = "";
      this.staffAge = "";
      this.staffMobile = "";
      this.staffDepartment = "";

      this.modalRef?.hide();
    }

    DeleteStaff(i:any){
      this.StaffData.splice(i,1);
    }

    editStaff(){
      this.StaffData[this.selectedStaffIndex].name = this.staffName;
      this.StaffData[this.selectedStaffIndex].age = this.staffAge;
      this.StaffData[this.selectedStaffIndex].mobile = this.staffMobile;
      this.StaffData[this.selectedStaffIndex].department = this.staffDepartment;
    
      this.staffName = "";
      this.staffAge = "";
      this.staffMobile = "";
      this.staffDepartment = "";
    
    
      this.modalRef?.hide();
    }
    staffClose(){
      this.staffName = "";
      this.staffAge = "";
      this.staffMobile = "";
      this.staffDepartment = "";
    
      this.modalRef?.hide();
    }

    resetStaff(){
      this.staffName = "";
      this.staffAge = "";
      this.staffMobile = "";
      this.staffDepartment = "";
    }

    

}
