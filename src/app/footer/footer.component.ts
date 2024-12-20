import { Component } from '@angular/core';
import { faWhatsapp, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.css'],
    standalone: false
})
export class FooterComponent {
  faWhatsapp = faWhatsapp;
  faInstagram = faInstagram;
  faEnvelope = faEnvelope;
  anoAtual = new Date().getFullYear();
}
