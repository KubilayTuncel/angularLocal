import { Component, OnInit } from '@angular/core';
import { Model } from '../model';
import { TodoItem } from '../todoitem';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {

  constructor() { 
    this.model.items = this.getItemsFromLS()
  }

  inputText: string ="";
  private name:string ="Kubilay"
  //alttaki items list ini biz model icerisine gömdügümüz icin burada yorum satirina aldik.
  //items: TodoItem[] = [
    //bu alttaki 3 satirda ise interface üzerinden olusturdugumuz icin hataya kapali bir yapi olusturmus olduk.
    // {description:"kahvalti", action:"yes"},
    // {description:"spor", action:"yes"},
    // {description:"alisveris", action:"no"}

    // new TodoItem("kahvalti","yes"), burada class olarak todoitem.ts olusturulursa cont üzeriden islem yapiyoruz 
    // new TodoItem("spor","yes"),
    // new TodoItem("alisveris","no"),
    // new TodoItem("karini sev","yes")
  //]

  model= new Model;
  displayAll : boolean = false;
  // addItem(txtIem:any){
  //   console.log("txtItem");
  // }

  addItem(){
    if(this.inputText!="") {
      let data={description:this.inputText,action:false}
      this.model.items.push(data);

      let items = this.getItemsFromLS();
      items.push(data)
      localStorage.setItem("items",JSON.stringify(items))
      this.inputText="";
    }else{
      alert("Lütfen bilgi giriniz.")
    }
   
  }
  getItemsFromLS(){
    let items: TodoItem[] = []
    let value = localStorage.getItem("items")

    if(value != null){
      items = JSON.parse(value);
    }
    return items;
  }

  getName() { return this.model.name; }
  getItems() {
    if (this.displayAll) {
      return this.model.items;
    }
     return this.model.items.filter(item=>item.action==false); }

     displayCount(){
      return this.model.items.filter(i=>i.action).length;
     }

     getBtnClass(){
     return {
        'disabled': this.inputText.length==0,
        'btn-secondary':this.inputText.length==0,
        'btn-primary':this.inputText.length>0
    }
     }

     onActionChanged(item:TodoItem) {
      let items=this.getItemsFromLS();
      localStorage.clear();

      items.forEach(i=>{
        if(i.description==item.description){
          i.action=item.action;
        }
      })
      localStorage.setItem("items",JSON.stringify(items))
     }

}
