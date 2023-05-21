import { Component } from '@angular/core';
import { Tarea } from '../interfaces/Tarea';


@Component({
  selector: 'app-lista-tareas',
  templateUrl: './lista-tareas.component.html',
  styleUrls: ['./lista-tareas.component.css']
})
export class ListaTareasComponent {
    
  caso:String="1"       
  nuevaTarea: string = '';
  bandera:boolean=true;
  tareaSeleccionada: Tarea | null = null;


    tareas:Tarea[]=[ 
    {toDo:"",
    resuelta:false,},
    ]


    agregarTarea() {
    if (this.nuevaTarea.trim()) {
      this.tareas.push({ toDo: this.nuevaTarea, resuelta: false });
      this.nuevaTarea = '';
    }
  }

  borrarTarea(index: number) {
    this.tareas.splice(index, 1);
  }

  seleccionarTarea(tarea: Tarea) {
    this.tareaSeleccionada = tarea;
  }

  guardarTarea() {
    this.tareaSeleccionada = null;
  }

}



