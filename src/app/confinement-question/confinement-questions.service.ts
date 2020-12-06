import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfinementQuestionsService {
  result: string;
  constructor() { }

  actualQuestion: string;
  questions = [
    {
      id: 0,
      title: `Est-ce que je dois faire un calin à cette personne que je ne connais pas devant moi ? `,
      img: '../../assets/confinement/hug.png',
      response: `Non ! Tu peux avoir le virus en toi et ne pas avoir de symptomes visibles ! 
      Les porteurs asymptomatiques sont aussi responsables des transmissions de la maladie !`
    },
    {
      id: 1,
      title: `Est-ce que je dois lécher la barre de métro ?`,
      img: '../../assets/confinement/subway.png',
      response: `Mais oui ! Quelle bonne idée ! Plus sérieusement, le virus peut survivre entre 2h et 12h selon les surfaces. Alors dans le doute, dès que tu as touché quelque chose qu'une autre personne a touché avant toi : tu te laves les mains !`
    },
    {
      id: 2,
      title: `Est-ce que je suis protégé parce que je suis jeune et en bonne santé ?`,
      img: '../../assets/confinement/young.png',
      response: `Non ! Tu peux attraper le virus et être gravement malade même si tu es jeune. Si les stats montrent qu'il y a moins de risque de mourir parce que tu es jeune, penses aussi que tu peux contaminer des personnes plus âgées et/ou plus fragiles que toi.`
    },
    {
      id: 3,
      title: `Le gouverment dit : "Restez chez vous !", dois-je les écouter ?`,
      img: '../../assets/confinement/home.png',
      response: `Oui, oui et ... OUI !`
    },
  ];

  getResult() {
    return this.result;
  }
}
