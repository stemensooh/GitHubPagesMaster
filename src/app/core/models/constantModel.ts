import { Profile } from './profile.model';
import { Link } from './link.model';
import { Skill } from './skill.model';

export class BasicModel {
    profile: Profile;
    links: Link[];
    skills: Skill[];
}


export const basicModel: BasicModel = {
    profile: {
        profesion: '',
        id: '',
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
    ],
    links: [
        {
            icon_1: 'fa fa-github',
            icon_2: 'fa fa-github',
            id: '',
            name: 'Github',
            state: true,
            url: 'https://github.com/stemensooh'
        },
        {
            icon_1: 'fa fa-twitter-square',
            icon_2: 'fa fa-twitter',
            id: 'https://twitter.com/bolo_bolivar',
            name: 'Twitter',
            state: true,
            url: ''
        },
        {
            icon_1: 'fa fa-instagram',
            icon_2: 'fa fa-instagram',
            id: '',
            name: 'Instagram',
            state: true,
            url: 'https://www.instagram.com/stemen_sooh/'
        },
        {
            icon_1: 'fa fa-linkedin-square',
            icon_2: 'fa fa-facebook-square',
            id: 'https://www.facebook.com/bolivar.cardenas.509',
            name: 'Facebook',
            state: true,
            url: ''
        },
        {
            icon_1: 'fa fa-linkedin-square',
            icon_2: 'fa fa-linkedin',
            id: '',
            name: 'LinkedIn',
            state: true,
            url: 'https://www.linkedin.com/in/bolivar-cardenas-perez-10a316199/'
        }
    ],
}

