class Deal {
  #payments;
  #sum;
  constructor(sum) {
    this.#payments = [];
    this.#sum = sum;
  }
  AddPayment(type) {
    var p;
    switch (type) {
      case "מזומן":
        p = new Payment();
        break;
      case "אשראי":
        p = new Credit();
        break;
      case "חברת סליקה":
        p = new ClearingCompany();
        break;
      default:
        console.log("error");
        break;
    }
    this.#payments.push(p);
    this.#sum = p.Payment(this.#sum);
  }
  RemovePayment = (id) => {
    var index = this.#payments.indexOf(p => p.id == id);
    this.#sum = this.#payments[index].Refund(this.#sum);
    this.payments = this.#payments.splice(index, 1);
  };
  Update=(id)=>{
    var index = this.#payments.indexOf(p => p.id == id);
    this.#payments[index].UpdateP(this);
}
}

class Payment {
  _id;
  _date;
  _sum;
  _description;
  _status ;
  _pMethod;
  _userDetails;
  constructor(id, date, sum, description, status, pMethod, userDetails) {
    this._id = id;
    this._date = date;
    this._sum = sum;
    this._description = description;
    this._status = status;
    this._pMethod = pMethod;
    this._userDetails = userDetails;
  }

  Payment = (sum) => {
    console.log("cash");
    return sum - this._sum;
  };
  Refund=(sum)=> {
    return (sum += this._sum);
  }
  UpdateP=(payment)=> {

  }
}

class Credit extends Payment {
  constructor(cvv, num, validity) {
    this.#cvv = cvv;
    this.#num = num;
    this.#validity = validity;
  }

  Payment = (sum) => {
    console.log("credit");
    return sum - this._sum;
  };
  Refund=(sum)=> {
    return (sum + this._sum);
  }
  UpdateP=(payment)=> {
   //כאן יציג דף עדכון מתאים לכל תשלום 
  }
}
class ClearingCompany extends Payment {
  constructor(idP) {
    this.#idP = idP;
  }

  Payment = (sum) => {
    console.log("clearingCompany");
    return sum - this._sum;
  };
  Refund=(sum)=> {
    return (sum + this._sum);
  }
  UpdateP=(payment)=> {

}
}
