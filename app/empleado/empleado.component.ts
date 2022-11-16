import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  //template:"<p>Aquí iría un empleado</p>",
  styleUrls: ['./empleado.component.css']
  //tyleUrls: ["p{background-color: red;}"]
})
export class EmpleadoComponent implements OnInit {

  nombre = "Juan";
  apellido = "Díaz";
  edad=18;
  empresa="Píldoras Informáticas";
  
  constructor() { }

  ngOnInit(): void {
  }

}
