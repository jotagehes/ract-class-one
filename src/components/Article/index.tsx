import React from 'react';
import * as S from './styles';

const Article = () => {
  return (
    <S.ArticleContainer>
      <S.Title>Explorando Hogwarts</S.Title>
      <S.Topic>
        <S.TopicTitle>História</S.TopicTitle>
        <S.TopicContent>
          Hogwarts School of Witchcraft and Wizardry, abreviada Hogwarts, é uma escola de magia para bruxos e bruxas de onze a dezessete anos de idade.
        </S.TopicContent>
      </S.Topic>
      <S.Topic>
        <S.TopicTitle>Casas</S.TopicTitle>
        <S.TopicContent>
          Hogwarts tem quatro casas: Grifinória, Sonserina, Corvinal e Lufa-Lufa. Cada casa tem suas próprias características e tradições.
        </S.TopicContent>
      </S.Topic>
      <S.Topic>
        <S.TopicTitle>Salas Comuns</S.TopicTitle>
        <S.TopicContent>
          Cada casa tem sua própria sala comum, um espaço onde os alunos podem relaxar, estudar e interagir com seus colegas de casa.
        </S.TopicContent>
      </S.Topic>
      <S.Topic>
        <S.TopicTitle>Professores</S.TopicTitle>
        <S.TopicContent>
          Hogwarts tem uma equipe dedicada de professores que ensinam uma variedade de disciplinas mágicas, incluindo Poções, Transfiguração, Defesa Contra as Artes das Trevas, e muitas outras.
        </S.TopicContent>
      </S.Topic>
    </S.ArticleContainer>
  );
};

export default Article;
