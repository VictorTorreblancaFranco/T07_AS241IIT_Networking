import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-matcar',
  standalone: true,
  imports: [CommonModule],  // <--- agregar CommonModule aquí
  templateUrl: './matcar.component.html',
  styleUrls: ['./matcar.component.scss'],
})
export class MatcarComponent {
  @Input() city!: string;
  @Input() image!: string;
  @Input() details!: string[];
}
