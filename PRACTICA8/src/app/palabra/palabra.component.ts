import { Component } from '@angular/core';
import { PalabraService } from '../services/palabra.service';
import { IPalabras } from '../interfaces/IPalabra';

@Component({
  selector: 'app-palabra',
  templateUrl: './palabra.component.html',
  styleUrls: ['./palabra.component.css']
})
export class PalabraComponent {
  dataPalabras: IPalabras = { sum: 0, Palabras: [] };
  title: string = 'Palabras';

  constructor(
    private palabraService: PalabraService
  ) {

  }

  ngOnInit() {
    this.palabraService.getAllData()
      .subscribe(data => {
        this.dataPalabras = data;
      })
  }

  submitData(value: any) {
    let body = {
      palabra: value.palabra,
      deletreo: value.deletreo
    }
    this.palabraService.postData(body)
      .subscribe(response => {
        console.log(response)
      })
  }
}
