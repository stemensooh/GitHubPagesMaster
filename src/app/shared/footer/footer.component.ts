import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConstantModel } from '../../core/constantModel';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
    test: Date = new Date();

    url_twiter: string;
    url_github: string;
    url_facebook: string;
    url_instagram: string;
    url_imagen_fondo: string;
    url_linklin: string;

    constructor(private router: Router) {
        this.url_twiter = ConstantModel.url_twiter;
        this.url_github = ConstantModel.url_github;
        this.url_facebook = ConstantModel.url_facebook;
        this.url_instagram = ConstantModel.url_instagram;
        this.url_linklin = ConstantModel.url_linklin;
    }

    ngOnInit() {

    }
    getPath() {
        return this.router.url;
    }
}
