import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormularioModalComponent } from './formulario-modal/formulario-modal.component';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {

  constructor(private modalService:  NgbModal) { }

  ngOnInit(): void {

    this.abrirModal();

  }


  abrirModal(){


   
//quiero mostrar un modal
    this.modalService.open(FormularioModalComponent,{ backdrop: 'static',
    keyboard: false});

    //this.modalService.dismissAll();

    /*indica que cuando el modal se cierra haga la funcion de mas abajo */
   
  }

 

}
