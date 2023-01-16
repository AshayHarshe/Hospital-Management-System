import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.scss']
})
export class BillingComponent implements OnInit {
  modalRef?: BsModalRef;
  constructor(private modalService: BsModalService) {}

  ngOnInit(): void {
  }



  openBillingModal(billingtemplate: TemplateRef<any>, index:any ) {

    if(index !='null'){
      this.BillingName = this.BillingData[index].name;
      this.BillingDate = this.BillingData[index].date;
      this.BillingMethod = this.BillingData[index].method;
      this.BillingAmount = this.BillingData[index].amount;
  
      this.selectedBillingIndex = index;
    }


    this.modalRef = this.modalService.show(billingtemplate);
  }

  BillingData:any = [
    {
      name: "Mr. Daniel",
      date: "2022-02-02",
      method: "Mobile payments",
      amount: "930100"
    },
    {
      name: "Mr. Alex",
      date: "2022-08-28",
      method: "Credit cards",
      amount: "377300"
    },
  ]

    BillingName = "";
    BillingDate = "";
    BillingMethod = "";
    BillingAmount = "";

    selectedBillingIndex = "";

    submitBilling(){
      let Billing = {
        name: this.BillingName,
        date: this.BillingDate,
        method: this.BillingMethod,
        amount: this.BillingAmount,
      }

      console.log('this.BillingData',this.BillingData);
      this.BillingData.push(Billing);

      this.BillingName = "";
      this.BillingDate = "";
      this.BillingMethod = "";
      this.BillingAmount = "";

      this.modalRef?.hide();
    }

    DeleteBilling(i:any){
      this.BillingData.splice(i,1);
    }

    editBilling(){
      this.BillingData[this.selectedBillingIndex].name = this.BillingName;
      this.BillingData[this.selectedBillingIndex].date = this.BillingDate;
      this.BillingData[this.selectedBillingIndex].method = this.BillingMethod;
      this.BillingData[this.selectedBillingIndex].amount = this.BillingAmount;
    
      this.BillingName = "";
      this.BillingDate = "";
      this.BillingMethod = "";
      this.BillingAmount = "";
    
    
      this.modalRef?.hide();
    }

    billingClose(){
      this.BillingName = "";
      this.BillingDate = "";
      this.BillingMethod = "";
      this.BillingAmount = "";
    
      this.modalRef?.hide();
    }

    resetBilling(){
      this.BillingName = "";
      this.BillingDate = "";
      this.BillingMethod = "";
      this.BillingAmount = "";
    }


}
