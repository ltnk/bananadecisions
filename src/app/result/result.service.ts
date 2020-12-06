import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ResultService {
  randomNumber: number;
  result;

  results = [
    {
      id: 1,
      title: 'Oui',
      description: `Mais je ne suis qu'une banane, je ne sais pas s'il est très judicieux de m'écouter...`,
      img: '../../assets/smiley/wink.png',
    },
    {
      id: 2,
      title: 'Non',
      description: `Pourquoi tu demandes ? Tu sais au fond de toi que c'est non !`,
      img: '../../assets/smiley/laugh.png',
    },
    {
      id: 3,
      title: 'Peut-être',
      description: `Honnêtement, je ne sais pas, j'hésite...`,
      img: '../../assets/smiley/sad.png',
    },
    {
      id: 4,
      title: 'Tu me poses une colle !',
      description: `Désolé je ne peux pas t'aider sur ce coup là !`,
      img: '../../assets/smiley/sad.png',
    },
    {
      id: 5,
      title: '...',
      description: `Il y a des moments dans la vie où il faut grandir un peu et savoir décider 
      seul de ce qui est bon pour soi, je pense que tu es dans l'un de ces moments !`,
      img: '../../assets/smiley/smile.png',
    },
    {
      id: 6,
      title: `On a qu'une vie !`,
      description: `Tu peux décider de la gâcher ou d'en prendre soin ...`,
      img: '../../assets/smiley/cool.png',
    },
    {
      id: 7,
      title: 'Il faut voir...',
      description: 'Repense à ce que tu as mangé ce midi avant de décider !',
      img: '../../assets/smiley/wink.png',
    },
    {
      id: 8,
      title: 'Je ne sais pas ...',
      description: `Demande à ta famille ou à tes amis, ils pourront peut-être t'aider ! 
      Si personne n'est dispo, ben ... redemande moi, je serai peut-être plus inspiré !`,
      img: '../../assets/smiley/wink.png',
    },
    {
      id: 9,
      title: 'Euuuuuuhhhhhhh',
      description: `Vous êtes bien sur le répondeur de la banane magique, 
      elle est actuellement indisponible, ne laissez pas de message, c'est une banane !`,
      img: '../../assets/smiley/wink.png',
    },
    {
      id: 10,
      title: 'Oui !',
      description: `La France a bien gagné la coupe du monde en 1998 ! Attends, je crois que je me suis trompé de question...`,
      img: '../../assets/smiley/cool.png',
    },
    {
      id: 11,
      title: 'Non !',
      description: `Non, non, non et re-non ! T'es cabourd ou quoi ?!`,
      img: '../../assets/smiley/sad.png',
    },
    {
      id: 12,
      title: 'Si tu dis "Chocolatine" ...',
      description:
        '... La réponse est "oui", sinon ben je sais pas, il faut dire "Chocolatine" !',
      img: '../../assets/smiley/smile.png',
    },
    {
      id: 13,
      title: 'Si tu habites au Canada ...',
      description: `La réponse est : peut-être, si tu habites ailleurs la réponse est : "Comme tu le sens".`,
      img: '../../assets/smiley/smile.png',
    },
    {
      id: 14,
      title: `Il n'y a pas de choix, il y a des rencontres.`,
      description: `En fait, je ne sais pas alors je pose là cette citation de Anne Barratin 
      extrait de "Les pensées in oeuvres posthumes" (1920), tu en fais ce que tu veux !`,
      img: '../../assets/smiley/cool.png',
    },
    {
      id: 15,
      title: `Où l'obligation naît meurt le choix.`,
      description: `C'est une citation de Hervé Bazin extrait de "Cri de la chouette (1971)", tu me remercieras plus tard...`,
      img: '../../assets/smiley/smile.png',
    },
    {
      id: 16,
      title: 'Je pense que oui !',
      description: `"You have to do what you have to do, you know !" (Oui je suis bilingue un jour sur 23 !)`,
      img: '../../assets/smiley/laugh.png',
    },
    {
      id: 17,
      title: 'Tu es déjà allé en Australie ?',
      description: `Si oui, tu dois réfléchir plus longuement, on ne fait pas de choix à la légère !`,
      img: '../../assets/smiley/laugh.png',
    },
    {
      id: 18,
      title: `Le seul mauvais choix est l'absence de choix.`,
      description: `C'est Amélie Nothomb qui l'a dit ! (Métaphysique des tubes - 2000). Pour répondre à ta question : je ne sais pas !`,
      img: '../../assets/smiley/wink.png',
    },
    {
      id: 19,
      title: `Sur ce coup là, c'est sûr, je dis non !`,
      description: `Mais...`,
      img: '../../assets/smiley/cool.png',
    },
    {
      id: 20,
      title: 'Oui !!!!',
      description: `C'est mon amie la pastèque qui a décidé ! Mais c'est une pastèque !!`,
      img: '../../assets/smiley/laugh.png',
    },
  ];
  constructor() { }



}
