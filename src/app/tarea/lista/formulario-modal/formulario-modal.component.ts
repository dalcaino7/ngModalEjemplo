import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'app-formulario-modal',
  templateUrl: './formulario-modal.component.html',
  styleUrls: ['./formulario-modal.component.scss']
})
export class FormularioModalComponent implements OnInit {
  registerForm!: FormGroup;

  varCheckPrevired!: boolean;
  varCheckAfc!:boolean;
  varSerie: string='';

/** RECIBE PARAMETROS DEL API **/
  PreviredMensaje: string="Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia commodi enim eligendi eveniet rem inventore deserunt similique voluptate voluptatem saepe nihil recusandae sed, quasi provident labore magnam ut magni in?Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia commodi enim eligendi eveniet rem inventore deserunt similique voluptate voluptatem saepe nihil recusandae sed, quasi provident labore magnam ut magni in?Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia commodi enim eligendi eveniet rem inventore deserunt similique voluptate voluptatem saepe nihil recusandae sed, quasi provident labore magnam ut magni in?";
  AfcMensaje: string="Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia commodi enim eligendi eveniet rem inventore deserunt similique voluptate voluptatem saepe nihil recusandae sed, quasi provident labore magnam ut magni in?Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia commodi enim eligendi eveniet rem inventore deserunt similique voluptate voluptatem saepe nihil recusandae sed, quasi provident labore magnam ut magni in";
  validPrevired: string='true';
  validAfc: string='false';



  constructor(private modalService:  NgbModal, private form_Build: FormBuilder) { }


  ngOnInit(): void { 

    this.validBeneficiary();


    this.registerForm = this.form_Build.group({
    
      checkPrevired: [false],
      textNumDoc: ['', {
        validators: [Validators.required, Validators.minLength(9), Validators.maxLength(10),Validators.pattern(/^[a-zA-Z0-9]*$/)
        ]}],
      checkAfc: [false],

    });
   }
   

   get get_textNumDoc(){
    return this.registerForm.get('textNumDoc');
  }

  validBeneficiary(){

    if (this.validPrevired == 'false' && this.validAfc == 'false') {
      this.modalService.dismissAll();
return;
    } 
    
  }


  submit(){
  /*buena practica de validacion si el formulario es valido si se hubiera presionado boton accidentalmente */
    if(this.registerForm.valid){
      alert('Alguna regla de validación no está correcta');
      return;
    }

    console.log(this.registerForm.value);
  }


  procesar(){
    console.log(this.registerForm.value);
    this.modalService.dismissAll();

    

    this.varCheckPrevired = this.registerForm.get('checkPrevired')?.value;
    this.varCheckAfc = this.registerForm.get('checkAfc')?.value;
    this.varSerie = this.registerForm.get('textNumDoc')?.value;
  

    console.log('varCheckPrevired: ',this.varCheckPrevired);
    console.log('varCheckAfc: ',this.varCheckAfc);
    console.log('varSerie: ',this.varSerie);


  }


  refreshNumDoc(){

    if(this.registerForm.get('checkPrevired')?.value){

        this.registerForm.patchValue({
      
          textNumDoc: ''
        });
    }
    
    
  }

}
