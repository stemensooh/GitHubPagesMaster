import { AfterViewInit, Component, OnInit } from "@angular/core";
import { Subscription } from "rxjs/Subscription";
import "rxjs/add/operator/filter";
import { ProfileService } from "./core/services/profile.service";
import { Profile } from "./core/models/profile.model";
import { Skill } from "./core/models/skill.model";
import { environment } from "../environments/environment.prod";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit, AfterViewInit {
  public profile: Profile;
  public skills: Skill[] = new Array();
  public isCollapsed = true;

  fecha: Date = new Date();
  anio: number = this.fecha.getFullYear();
  url_imagen_fondo = environment.url_imagen_fondo;

  constructor(private _profileService: ProfileService) {
    this.buildSkill();
  }

ngAfterViewInit(){
    
}

  ngOnInit() {
    this.profile = this._profileService.getProfile();
    ////console.log(this.profile);

    if (!this.profile) {
        this.profile = environment.ConstantModel.profile;
    }
    
    this.anio -= this.profile.year;
  }

  buildSkill(){
    let skillServices = this._profileService.getSkills();

    if (skillServices) {
      //console.log(skillServices);
      skillServices.forEach((element) => {
        const data: Skill = new Skill();
        data.name = element.name;
        data.percent = element.percent;
        data.image = element.image;
        if (element.percent > 0 && element.percent <= 20) {
          data.type = "danger";
        }
        if (element.percent > 20 && element.percent <= 40) {
          data.type = "warning";
        }
        if (element.percent > 40 && element.percent <= 60) {
          data.type = "primary";
        }
        if (element.percent > 60 && element.percent <= 80) {
          data.type = "info";
        }
        if (element.percent > 80 && element.percent <= 100) {
          data.type = "success";
        }
        this.skills.push(data);
      });
    }
  }

}
