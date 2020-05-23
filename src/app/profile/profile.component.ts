import { Component, OnInit } from '@angular/core';
import { ConstantModel, ConocimientoModel } from '../core/constantModel';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})

export class ProfileComponent implements OnInit {
    fecha: Date = new Date();
    anio: number = this.fecha.getFullYear() - 1997;
    url_imagen_fondo = ConstantModel.url_imagen_fondo;
    url_imagen_perfil = ConstantModel.url_imagen_perfil;
    page = 2;
    page1 = 3;

    conocimientos: ConocimientoModel[] = new Array();
    constructor() { 
        ConstantModel.data.forEach(element => {
            let data: ConocimientoModel = new ConocimientoModel();
            data.descripcion = element.descripcion;
            data.valor = element.valor;
            data.imagen = element.imagen;
            if(element.valor > 0 && element.valor <= 20) { data.tipo = 'danger'}
            if(element.valor > 20 && element.valor <= 40) { data.tipo = 'warning'}
            if(element.valor > 40 && element.valor <= 60) { data.tipo = 'primary'}
            if(element.valor > 60 && element.valor <= 80) { data.tipo = 'info'}
            if(element.valor > 80 && element.valor <= 100) { data.tipo = 'success'}
            this.conocimientos.push(data);
        });
    }

    ngOnInit() {}
}
