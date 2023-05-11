// import { Injectable } from "@angular/core";
// import { Link } from "../models/link.model";
// import { Skill } from "../models/skill.model";
// import { Profile } from "../models/profile.model";
// import { AngularFirestore } from "@angular/fire/firestore";
// import { environment } from "../../../environments/environment";
// import { basicModel } from "../models/constantModel";

// @Injectable({
//   providedIn: "root",
// })
// export class FirebaseService {
//   constructor(private firestore: AngularFirestore) {}

//   getProfile() {
//     return this.firestore
//       .collection("profile", (ref) => ref.where("state", "==", true))
//       .snapshotChanges();
//   }

//   getSkills() {
//     return this.firestore
//       .collection("skills", (ref) => ref.where("state", "==", true))
//       .snapshotChanges();
//   }

//   getAllLinks(): Link[] {
//     let links: Link[];

//     this.firestore
//       .collection("links", (ref) => ref.where("state", "==", true))
//       .snapshotChanges()
//       .subscribe((all) => {
//         all.forEach((data: any) => {
//           links.push({
//             id: data.payload.doc.id,
//             name: data.payload.doc.data().name,
//             state: data.payload.doc.data().state,
//             icon_1: data.payload.doc.data().icon_1,
//             icon_2: data.payload.doc.data().icon_2,
//             url: data.payload.doc.data().url,
//           });
//         });
//       });

//     return links;
//   }

//   cargarDatosInicialesProfile() {
//     let profile = environment.ConstantModel.profile;
//     if (profile) {
//       this.addProfile(profile);
//     }
//   }

//   cargarDatosInicialesSkills() {
//     let skills = environment.ConstantModel.skills;

//     if (skills) {
//       skills.forEach((skill: Skill) => {
//         this.addSkill(skill);
//       });
//     }
//   }

//   async addProfile(data: Profile) {
//     return await this.firestore.collection("profile").add(data);
//   }

//   async addSkill(data: Skill) {
//     return await this.firestore.collection("skills").add(data);
//   }
// }
