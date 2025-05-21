import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  // <--- importar CommonModule
import { MatcarComponent } from '../../shared/components/matcar/matcar.component';

@Component({
  selector: 'app-destinations',
  standalone: true,
  imports: [CommonModule, MatcarComponent], // <--- importar CommonModule y MatcarComponent
  templateUrl: './destinations.component.html',
  styleUrls: ['./destinations.component.scss'],
})
export class DestinationsComponent {
  title = 'Descubre destinos estratégicos para tu próximo viaje de negocios';
  subtitle = 'Conoce los lugares donde los negocios y las oportunidades globales se encuentran. TravelNet te lleva más allá del turismo convencional.';

  destinations = [
    {
      city: 'Cancún, México',
      image: 'images/destinations/cancun.jpg',
      details: [
        'Viaje de Incentivo Corporativo',
        'Julio - Agosto 2025',
        'Eventos de networking y reuniones estratégicas',
      ],
    },
    {
      city: 'Barcelona, España',
      image: 'images/destinations/barcelona.jpg',
      details: [
        'Congreso Internacional y Networking',
        'Septiembre 2025',
        'Eventos corporativos, ferias tecnológicas y reuniones con líderes de industria',
      ],
    },
    {
      city: 'Lima, Perú',
      image: 'images/destinations/lima.jpg',
      details: [
        'Foro Empresarial',
        'Octubre 2025',
        'Rondas de negocios internacionales, conferencias regionales y networking ejecutivo con empresas de Sudamérica',
      ],
    },
    {
      city: 'Bogotá, Colombia',
      image: 'images/destinations/colombia.jpg',
      details: [
        'Cumbre de Negocios y Conectividad LATAM',
        'Noviembre 2025',
        'Networking con cámaras de comercio, eventos empresariales y visitas a centros de innovación',
      ],
    },
    {
      city: 'Miami, Estados Unidos',
      image: 'images/destinations/miami.jpg',
      details: [
        'Feria Internacional de Negocios',
        'Diciembre 2025',
        'Oportunidades de inversión y alianzas estratégicas en el mercado norteamericano',
      ],
    },
    {
      city: 'Tokio, Japón',
      image: 'images/destinations/tokio.jpg',
      details: [
        'Expo Tecnológica y de Innovación',
        'Enero 2026',
        'Presentaciones de tecnología emergente y networking con líderes asiáticos',
      ],
    },
    {
      city: 'Sídney, Australia',
      image: 'images/destinations/sidney.jpg',
      details: [
        'Conferencia Internacional de Sustentabilidad',
        'Febrero 2026',
        'Networking con empresas líderes en sostenibilidad y responsabilidad social',
      ],
    },
    {
      city: 'Ciudad de México, México',
      image: 'images/destinations/cdmx.jpg',
      details: [
        'Foro Empresarial Latinoamericano',
        'Marzo 2026',
        'Encuentros con empresarios de toda Latinoamérica y desarrollo de negocios regionales',
      ],
    },
  ];
}
