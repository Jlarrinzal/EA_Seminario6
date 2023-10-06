import { Component } from '@angular/core';
import { Villanos } from '../villanos';
import { VillanosService } from '../villanos.service';

@Component({
  selector: 'app-villanos',
  templateUrl: './villanos.component.html',
  styleUrls: ['./villanos.component.css']
})
export class VillanosComponent {
  villanos: Villanos[] = [];

  constructor(private villanosService: VillanosService) { }

  ngOnInit(): void {
    this.getVillanos();
  }

  getVillanos(): void {
    this.villanosService.getVillanos()
    .subscribe(villanos => this.villanos = villanos);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.villanosService.addVillano({ name } as Villanos)
      .subscribe(villano => {
        this.villanos.push(villano);
      });
  }

  delete(villanos: Villanos): void {
    this.villanos = this.villanos.filter(h => h !== villanos);
    this.villanosService.deleteVillano(villanos.id).subscribe();
  }
}
