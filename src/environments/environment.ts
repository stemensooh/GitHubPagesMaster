// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  url_imagen_fondo : './assets/img/personal/fondo-pantalla.jpg',
  url_imagen_perfil : './assets/img/personal/perfil.jpg',
  production: false,
  defaultauth: '', //firebase
  firebaseConfig: {
    apiKey: "AIzaSyCyI4fb220UvAIOxMaaWZbhLMsHQNcQ02U",
    authDomain: "blog-app-stemensooh.firebaseapp.com",
    projectId: "blog-app-stemensooh",
    storageBucket: "blog-app-stemensooh.appspot.com",
    messagingSenderId: "876679081121",
    appId: "1:876679081121:web:782a577c6a78831f8814e0"
  },
  ConstantModel: {
    profile: {
      id: '',
      profesion: 'Computer Systems Engineer',
      description: '<p>I am simply a FullStack developer but also a Computer Systems Engineer, graduated from Milagro State University. I learned a lot about software development and still am.</p><p>I am passionate about learning new technologies. Some of my qualities are: Actodidact, Adaptability, Communication</p>',
      image: './assets/img/personal/perfil.jpg',
      name: 'Bolívar Cárdenas',
      state: true,
      year: 1997,
      url_linklin : 'https://www.linkedin.com/in/bolivar-cardenas-perez-10a316199/',
      url_twiter : 'https://twitter.com/bolo_bolivar',
      url_github : 'https://github.com/stemensooh',
      url_facebook : 'https://www.facebook.com/bolivar.cardenas.509',
      url_instagram : 'https://www.instagram.com/stemen_sooh/',
    },
    skills: [
      {
          id: '',
          name: 'Python',
          percent: 85,
          type: '',
          image: './assets/img/img-tecnologia/python.png',
          state: true
      },
      {
          id: '',
          name: 'PHP',
          percent: 85,
          type: '',
          image: './assets/img/img-tecnologia/php.png',
          state: true
      },
      {
          id: '',
          name: 'SQL Server',
          percent: 85,
          type: '',
          image: './assets/img/img-tecnologia/sqlServer.png',
          state: true
      },
      {
          id: '',
          name: 'MySQL',
          percent: 85,
          type: '',
          image: './assets/img/img-tecnologia/mySql.png',
          state: true
      },
      {
          id: '',
          name: 'Angular',
          percent: 70,
          type: '',
          image: './assets/img/img-tecnologia/angular.png',
          state: true
      },
      {
          id: '',
          name: 'C# .Net',
          percent:  60,
          type: '',
          image: './assets/img/img-tecnologia/cSharp.png',
          state: true
      },
      {
          id: '',
          name: 'Visual Basic .Net',
          percent: 60,
          type: '',
          image: './assets/img/img-tecnologia/vb.png',
          state: true
      },
      {
          id: '',
          name: 'Django',
          percent: 60,
          type: '',
          image: './assets/img/img-tecnologia/django.jpg',
          state: true
      },
      {
          id: '',
          name: 'ASP.NET',
          percent: 55,
          type: '',
          image: './assets/img/img-tecnologia/aspNet.png',
          state: true
      },
      {
          id: '',
          name: 'ASP.NET Core',
          percent: 45,
          type: '',
          image: './assets/img/img-tecnologia/netCore.png',
          state: true
      },
      {
          id: '',
          name: 'Laravel',
          percent: 20,
          type: '',
          image: './assets/img/img-tecnologia/laravel.png',
          state: true
      }
  ]
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
