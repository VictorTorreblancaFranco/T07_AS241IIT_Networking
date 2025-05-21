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
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
      details: [
        'Viaje de Incentivo Corporativo',
        'Julio - Agosto 2025',
        'Eventos de networking y reuniones estratégicas',
      ],
    },
    {
      city: 'Barcelona, España',
      image: 'https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=400&q=80',
      details: [
        'Congreso Internacional y Networking',
        'Septiembre 2025',
        'Eventos corporativos, ferias tecnológicas y reuniones con líderes de industria',
      ],
    },
    {
      city: 'Lima, Perú',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=400&q=80',
      details: [
        'Foro Empresarial',
        'Octubre 2025',
        'Rondas de negocios internacionales, conferencias regionales y networking ejecutivo con empresas de Sudamérica',
      ],
    },
    {
      city: 'Bogotá, Colombia',
      image: 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=400&q=80',
      details: [
        'Cumbre de Negocios y Conectividad LATAM',
        'Noviembre 2025',
        'Networking con cámaras de comercio, eventos empresariales y visitas a centros de innovación',
      ],
    },
    {
      city: 'Miami, Estados Unidos',
      image: 'https://images.unsplash.com/photo-1494522200383-0e03ccf41c91?auto=format&fit=crop&w=400&q=80',
      details: [
        'Feria Internacional de Negocios',
        'Diciembre 2025',
        'Oportunidades de inversión y alianzas estratégicas en el mercado norteamericano',
      ],
    },
    {
      city: 'Tokio, Japón',
      image: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=400&q=80',
      details: [
        'Expo Tecnológica y de Innovación',
        'Enero 2026',
        'Presentaciones de tecnología emergente y networking con líderes asiáticos',
      ],
    },
    {
      city: 'Sídney, Australia',
      image: 'https://images.unsplash.com/photo-1504609813449-665a3b58a99b?auto=format&fit=crop&w=400&q=80',
      details: [
        'Conferencia Internacional de Sustentabilidad',
        'Febrero 2026',
        'Networking con empresas líderes en sostenibilidad y responsabilidad social',
      ],
    },
    {
      city: 'Ciudad de México, México',
      image: 'https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?auto=format&fit=crop&w=400&q=80',
      details: [
        'Foro Empresarial Latinoamericano',
        'Marzo 2026',
        'Encuentros con empresarios de toda Latinoamérica y desarrollo de negocios regionales',
      ],
    },
  ];
}
