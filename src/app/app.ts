import { Component, signal } from '@angular/core';
import { ProductoLista } from './components/producto-lista/producto-lista';

@Component({
  selector: 'app-root',
  imports: [ProductoLista],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular_spring_front');
}
