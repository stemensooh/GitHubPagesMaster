
let datos = [
    {
        descripcion: "Python",
        valor: 85,
        tipo: '',
        imagen: './assets/img/img-tecnologia/python.png'
    },
    {
        descripcion: "PHP",
        valor: 85,
        tipo: '',
        imagen: './assets/img/img-tecnologia/php.png'
    },
    {
        descripcion: "SQL Server",
        valor: 85,
        tipo: '',
        imagen: './assets/img/img-tecnologia/sqlServer.png'
    },
    {
        descripcion: "MySQL",
        valor: 85,
        tipo: '',
        imagen: './assets/img/img-tecnologia/mySql.png'
    },
    {
        descripcion: "Angular",
        valor: 70,
        tipo: '',
        imagen: './assets/img/img-tecnologia/angular.png'
    },
    {
        descripcion: "C# .Net",
        valor:  60,
        tipo: '',
        imagen: './assets/img/img-tecnologia/cSharp.png'
    },
    {
        descripcion: "Visual Basic .Net",
        valor: 60,
        tipo: '',
        imagen: './assets/img/img-tecnologia/vb.png'
    },
    {
        descripcion: "Django",
        valor: 60,
        tipo: '',
        imagen: './assets/img/img-tecnologia/django.jpg'
    },
    {
        descripcion: "ASP.NET",
        valor: 55,
        tipo: '',
        imagen: './assets/img/img-tecnologia/aspNet.png'
    },
    {
        descripcion: "ASP.NET Core",
        valor: 45,
        tipo: '',
        imagen: './assets/img/img-tecnologia/netCore.png'
    },
    {
        descripcion: "Laravel",
        valor: 20,
        tipo: '',
        imagen: './assets/img/img-tecnologia/laravel.png'
    }
];

export const ConstantModel = {
    url_linklin : "https://www.linkedin.com/in/bolivar-cardenas-perez-10a316199/",
    url_twiter : "https://twitter.com/bolo_bolivar",
    url_github : "https://github.com/stemensooh",
    url_facebook : "https://www.facebook.com/bolivar.cardenas.509",
    url_instagram : "https://www.instagram.com/stemen_sooh/",
    url_imagen_fondo : "./assets/img/personal/fondo-pantalla.jpg",
    url_imagen_perfil : "./assets/img/personal/perfil.jpg",
    data : datos
}

export class ConocimientoModel{
    descripcion: string;
    valor: number;
    tipo: string;
    imagen: string;
} 
