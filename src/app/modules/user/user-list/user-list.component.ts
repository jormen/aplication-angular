import { Component, OnInit } from '@angular/core';
import { ICardUser } from '@shared/components/cards/card-user/icard-user.metadata';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

public users: ICardUser[] = [
  {
    id: 1,
    name: 'Juan Gonzalez ',
    age: 34,
    description: 'Desarrollador fullstack',
    avatar: 'https://ideapod.com/wp-content/uploads/2017/08/person-1.jpg',
    work: 'Project manager'
  },
  {
    id: 2,
    name: 'Jose Lopez ',
    age: 44,
    description: 'Desarrollador backend',
    avatar: 'https://st3.depositphotos.com/1007566/14344/v/1600/depositphotos_143445607-stock-illustration-colorful-silhouette-faceless-half-body.jpg'
  },
  {
    id: 3,
    name: 'Sandra Reyes ',
    age: 24,
    description: 'Secretaria',
    avatar: 'https://image.freepik.com/foto-gratis/retrato-medio-cuerpo-femenino-hermoso-aislado-fondo-color-rosa-estudio-joven-mujer-sorprendida-emocional_155003-8606.jpg'
  },
  {
    id: 4,
    name: 'Luis Salazar ',
    age: 57,
    description: 'Desarrollador frontend',
    avatar: 'https://ntrinitarias.com/wp-content/uploads/Capture-28.jpg'
  },
  {
    id: 5,
    name: 'Alicia Restrepo ',
    age: 34,
    description: 'Analista',
    avatar: 'https://st3.depositphotos.com/7358190/15593/v/1600/depositphotos_155935690-stock-illustration-surprised-attractive-plump-brunette-woman.jpg'
  },
  {
    id: 6,
    name: 'Carlos Rodriguez ',
    age: 29,
    description: 'Desarrollador backend',
    avatar: 'https://st2.depositphotos.com/1007566/11541/v/450/depositphotos_115418224-stock-illustration-young-businessman-profile-with-an.jpg'
  },
  {
    id: 7,
    name: 'Sebastian Mendoza ',
    age: 36,
    description: 'Desarrollador backend',
    avatar: 'https://st2.depositphotos.com/1007566/11541/v/450/depositphotos_115418224-stock-illustration-young-businessman-profile-with-an.jpg'
  },
]

  constructor() { }

  ngOnInit(): void {
  }

}
