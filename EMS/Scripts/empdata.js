let employee = function(id, name, address){
    this.empId = id;
    this.empName = name;
    this.empAddress = address;
}  

let empManager = function(){
    this.empData = []; 
    
    this.addEmployee = function(emp){
        this.empData.push(emp);
        
    }

    this.deleteEmployee = function(id){
        let emp = this.empData.find(function(e){
            return e.empId == id
        });
        let in = this.empData.indexOf(emp);
        this.empData.splice(in, 1);
        alert("Employee deleted successfully");        
    }

    this.findEmployee = function(id){
        let emp = this.empData.find(function (e) {
            return e.empId == id
        });
        if(emp == null)
            throw `Employee with ID ${id} not found in the database`;
        return emp;
    }
    this.updateEmployee = function(emp){
        for (let i = 0; i < this.empData.length; i++) {
            let element = this.empData[i];
            if(element.empId == emp.empId){
                element.empName = emp.empName;
                element.empAddress = emp.empAddress;
                return;
            }
        }
        throw "Opps !!  Employee not found";        
    }
    this.getAll = function(){
        return this.empData;
    }
}
