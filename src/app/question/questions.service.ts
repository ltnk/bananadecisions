import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class QuestionsService {
  actualQuestion: string;
  questions = [
    {
      id: 10,
      title: `Est-ce que j'ai fait le bon choix ?`,
      img: '../../assets/choices.png',
    },
    {
      id: 1,
      title: `Est-ce que je dois manger ce gâteau ? `,
      img: '../../assets/cake.png',
    },
    {
      id: 2,
      title: `Est-ce que j'y vais ?`,
      img: '../../assets/footprint.png',
    },
    {
      id: 3,
      title: `Dois-je faire confiance à cette personne ?`,
      img: '../../assets/trust.png',
    },
    {
      id: 4,
      title: `Je dis oui ou non ?`,
      img: '../../assets/decision.png',
    },
    {
      id: 5,
      title: `Est-ce que je dois attendre encore un peu ?`,
      img: '../../assets/wait.png',
    },
    {
      id: 6,
      title: `Est-ce que je dois le faire ?`,
      img: '../../assets/build.png',
    },
    {
      id: 7,
      title: `Dois-je l'acheter ?`,
      img: '../../assets/buy.png',
    },
    {
      id: 8,
      title: `Dois-je le garder ?`,
      img: '../../assets/keep.png',
    },
    {
      id: 9,
      title: `Dois-je le jeter ?`,
      img: '../../assets/trash.png',
    },

  ];

  constructor() { }
}
