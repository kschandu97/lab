import { Component } from "@angular/core";
@Component({
    selector:'add-emp',
    templateUrl:'app.add.html'
})
 export class AddEmployeeComponent{
    empId:number;
    empName:string;
    empSalary:number;
    empId2:number;
    empName2:string;
    empSalary2:number;
    empId3:number;

     empall:any[] = [
         {empId:1001,empName:"chandu",empSalary:10000},
         {empId:1002,empName:"chan",empSalary:11000},
         {empId:1003,empName:"siva",empSalary:12000},

     ];
     
  
   
    

    addEmployee():any{
        this.empall.push({empId:this.empId,empName:this.empName,empSalary:this.empSalary})
        console.log("Employee Added...."+this.empall);
    }
    deleteEmployee(data:number):any{
       this.empall.splice(data,1);
    }
    updateEmployee():any{
        for(let data of this.empall){
            if(data.empId==this.empId3){
                data.empId=this.empId2;
                data.empName=this.empName2;
                data.empSalary=this.empSalary2;
                alert("Row Updated")
            }
        }
    }


    updateEmployee2(data:number):any{
        this.empId3=this.empall[data].empId;
        this.empId2=this.empall[data].empId;
        this.empName2=this.empall[data].empName;
        this.empSalary2=this.empall[data].empSalary;
    }   
}