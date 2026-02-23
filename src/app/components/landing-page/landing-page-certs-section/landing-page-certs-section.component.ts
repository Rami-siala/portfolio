import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CERTIFICATIONS } from '../../../data/certifications.data';

@Component({
  selector: 'app-landing-page-certs-section',
  imports: [RouterLink],
  templateUrl: './landing-page-certs-section.component.html',
  styleUrl: './landing-page-certs-section.component.scss'
})
export class LandingPageCertsSectionComponent {
  certs = CERTIFICATIONS;
}
