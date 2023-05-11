import { Injectable } from "@angular/core";
import { Skill } from "../models/skill.model";
import { Link } from "../models/link.model";
import { Profile } from '../models/profile.model';
import { environment } from '../../../environments/environment';
// import { FirebaseService } from './firebase.service';

@Injectable({
  providedIn: "root",
})
export class ProfileService {
  constructor(
    // private _firebaseService: FirebaseService
    ) {}

  getProfile(): Profile {
    // if(environment.defaultauth === 'firebase'){
    //   let profile: Profile;
    //   this._firebaseService.getProfile().subscribe((all) => {
    //     all.forEach((data: any) => {
    //       //console.log('profile',data);
    //       if (data.payload.doc.id) {
    //         profile = {
    //           id: data.payload.doc.id,
    //           image: data.payload.doc.data().image,
    //           profesion: data.payload.doc.data().profesion,
    //           name: data.payload.doc.data().name,
    //           state: data.payload.doc.data().state,
    //           description: data.payload.doc.data().description,
    //           year: data.payload.doc.data().year,
    //           url_linklin: data.payload.doc.data().url_linklin,
    //           url_twiter: data.payload.doc.data().url_twiter,
    //           url_github: data.payload.doc.data().url_github,
    //           url_facebook: data.payload.doc.data().url_facebook,
    //           url_instagram: data.payload.doc.data().url_instagram,
    //         };
    //       }
    //     });
    //   });

    //   return profile;
    // }else{
    //   return environment.ConstantModel.profile;
    // }

    return environment.ConstantModel.profile;
  }

  getSkills(): Skill[] {
    // if(environment.defaultauth === 'firebase'){
    //   let skills: Skill[] = [];
    //   this._firebaseService.getSkills().subscribe((all) => {
    //     all.forEach((data: any) => {
    //       //console.log('skills', data);
    //       if (data.payload.doc.id) {
    //         skills.push({
    //           id: data.payload.doc.id,
    //           type: data.payload.doc.data().type,
    //           image: data.payload.doc.data().image,
    //           name: data.payload.doc.data().name,
    //           percent: data.payload.doc.data().percent,
    //           state: data.payload.doc.data().state,
    //         });
    //       }
    //     });
    //   });
    //   return skills;
    // }else{
    //   return environment.ConstantModel.skills;
    // }

    return environment.ConstantModel.skills;
  }

  getAllLinks(): Link[] {
    // if(environment.defaultauth === 'firebase'){
    //   return this._firebaseService.getAllLinks();
    // }else{
    //   return null;
    // }
    return null;
  }
}
