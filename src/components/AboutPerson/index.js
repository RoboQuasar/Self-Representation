import React from 'react';

import SectionTitle from 'containers/SectionTitle';

import AboutPersonWrapper from './AboutPersonWrapper';
import TextArea from './TextArea';

export class AboutPerson extends React.PureComponent {
  state = {
    isTextAreaNotEditable: true,
    defaultTextAreaValue:
      'В феврале 2017-го года получил высшее образование в НИЯУ МИФИ. При этом сейчас уже имею 1,5 года трудового стажа работы программистом в НИИСИ РАН. А также моим хобби и основным увлечением уже на протяжении 2-х лет является Веб-разработка, в особенности направление Front-end. Как личность же, я активный, энергичный и постоянно стремлюсь к развитию!'
  };

  handleEditButtonClick = () => {
    this.setState({ isTextAreaNotEditable: false });
  };

  handleTextAreaBlur = e => {
    if (e.target.value === '') e.target.value = e.target.defaultValue;
    this.setState({ isTextAreaNotEditable: true });
  };

  render() {
    return (
      <AboutPersonWrapper>
        <SectionTitle
          defaultTitleValue="О себе"
          titleName="about-title"
          editButtonClick={this.handleEditButtonClick}
        />

        <TextArea
          name="about-person-text"
          defaultValue={this.state.defaultTextAreaValue}
          innerRef={t => {
            this.textArea = t;
          }}
          disabled={this.state.isTextAreaNotEditable}
          onBlur={this.handleTextAreaBlur}
        />
      </AboutPersonWrapper>
    );
  }
}

export default AboutPerson;
