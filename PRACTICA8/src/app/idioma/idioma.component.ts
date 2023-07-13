import { Component } from '@angular/core';
import { IdiomaService } from '../services/idioma.service';
import { IIdiomas } from '../interfaces/IIdioma';

@Component({
  selector: 'app-idioma',
  templateUrl: './idioma.component.html',
  styleUrls: ['./idioma.component.css']
})
export class IdiomaComponent {
  dataIdiomas: IIdiomas = { sum: 0, idiomas: [] };
  title: string = 'Idiomas';

  constructor(
    private idiomasService: IdiomaService
  ) {

  }

  ngOnInit() {
    this.idiomasService.getAllData()
      .subscribe(data => {
        this.dataIdiomas = data;
      })
  }

  submitData(value: any) {
    let body = {
      descripcion: value.descripcion
    }
    this.idiomasService.postData(body)
      .subscribe(response => {
        console.log(response)
      })
  }
}
