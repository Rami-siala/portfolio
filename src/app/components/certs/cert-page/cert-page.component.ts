import { Component, signal, computed } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Certification } from '../../../models/certification.model';
import { CERTIFICATIONS } from '../../../data/certifications.data';
import { CANDIDATE_PROFILE } from '../../../data/candidate-profile.data';

@Component({
  selector: 'app-cert-page',
  imports: [RouterLink],
  templateUrl: './cert-page.component.html',
  styleUrl: './cert-page.component.scss'
})
export class CertPageComponent {
  profile = CANDIDATE_PROFILE;
  cert = signal<Certification | null>(null);
  imageZoomed = signal(false);

  adjacentCerts = computed(() => {
    const current = this.cert();
    if (!current) return { prev: null, next: null };
    const idx = CERTIFICATIONS.findIndex(c => c.data.slug === current.data.slug);
    return {
      prev: idx > 0 ? CERTIFICATIONS[idx - 1] : null,
      next: idx < CERTIFICATIONS.length - 1 ? CERTIFICATIONS[idx + 1] : null,
    };
  });

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      const slug = params['slug'];
      const found = CERTIFICATIONS.find(c => c.data.slug === slug);
      this.cert.set(found ?? null);
      this.imageZoomed.set(false);
    });
  }

  toggleZoom() {
    this.imageZoomed.update(v => !v);
  }
}
