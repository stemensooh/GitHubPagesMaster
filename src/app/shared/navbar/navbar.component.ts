import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, NavigationStart } from '@angular/router';
import { Location, PopStateEvent } from '@angular/common';
import { ConstantModel } from '../../core/constantModel';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
    public isCollapsed = true;
    private lastPoppedUrl: string;
    private yScrollStack: number[] = [];
    url_twiter: string;
    url_github: string;
    url_facebook: string;
    url_instagram: string;
    url_imagen_fondo: string;
    url_linklin: string;

    constructor(public location: Location, private router: Router) {
        this.url_twiter = ConstantModel.url_twiter;
        this.url_github = ConstantModel.url_github;
        this.url_facebook = ConstantModel.url_facebook;
        this.url_instagram = ConstantModel.url_instagram;
        this.url_linklin = ConstantModel.url_linklin;
    }

    ngOnInit() {
        this.router.events.subscribe((event) => {
            this.isCollapsed = true;
            if (event instanceof NavigationStart) {
                if (event.url !== this.lastPoppedUrl) {
                    this.yScrollStack.push(window.scrollY);
                }
            } else if (event instanceof NavigationEnd) {
                if (event.url === this.lastPoppedUrl) {
                    this.lastPoppedUrl = undefined;
                    window.scrollTo(0, this.yScrollStack.pop());
                } else {
                    window.scrollTo(0, 0);
                }
            }
        });
        this.location.subscribe((ev: PopStateEvent) => {
            this.lastPoppedUrl = ev.url;
        });
    }
}
