import React from 'react';

import SectionTitle from 'components/SectionTitle';

import AboutPersonWrapper from './AboutPersonWrapper';
import TextArea from './TextArea';

export class AboutPerson extends React.PureComponent {
  render() {
    return (
      <AboutPersonWrapper>
        <SectionTitle>О себе</SectionTitle>
        <TextArea
          name="about-person-text"
          value="В феврале 2017-го года получил высшее образование в НИЯУ МИФИ.
При этом сейчас уже имею 1,5 года трудового стажа работы программистом в НИИСИ РАН.
А также моим хобби и основным увлечением уже на протяжении 2-х лет является Веб-разработка, в особенности направление Front-end.
Как личность же, я активный, энергичный и постоянно стремлюсь к развитию!"
        />
      </AboutPersonWrapper>
    );
  }
}

export default AboutPerson;
