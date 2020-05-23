import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/filter';
import { ConstantModel, ConocimientoModel } from './core/constantModel';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    
    public isCollapsed = true;
    private lastPoppedUrl: string;
    private yScrollStack: number[] = [];
    
    fecha: Date = new Date();
    anio: number = this.fecha.getFullYear() - 1997;
    url_imagen_fondo = ConstantModel.url_imagen_fondo;
    url_imagen_perfil = ConstantModel.url_imagen_perfil;
    page = 2;
    page1 = 3;

    test: Date = new Date();

    url_twiter: string;
    url_github: string;
    url_facebook: string;
    url_instagram: string;
    url_linklin: string;

    conocimientos: ConocimientoModel[] = new Array();
    constructor() {
        this.url_twiter = ConstantModel.url_twiter;
        this.url_github = ConstantModel.url_github;
        this.url_facebook = ConstantModel.url_facebook;
        this.url_instagram = ConstantModel.url_instagram;
        this.url_linklin = ConstantModel.url_linklin;

        ConstantModel.data.forEach(element => {
            const data: ConocimientoModel = new ConocimientoModel();
            data.descripcion = element.descripcion;
            data.valor = element.valor;
            data.imagen = element.imagen;
            if (element.valor > 0 && element.valor <= 20) { data.tipo = 'danger'; }
            if (element.valor > 20 && element.valor <= 40) { data.tipo = 'warning'; }
            if (element.valor > 40 && element.valor <= 60) { data.tipo = 'primary'; }
            if (element.valor > 60 && element.valor <= 80) { data.tipo = 'info'; }
            if (element.valor > 80 && element.valor <= 100) { data.tipo = 'success'; }
            this.conocimientos.push(data);
        });
    }

    ngOnInit() {}
}
