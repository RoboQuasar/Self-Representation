import React from 'react';

import SectionTitle from 'containers/SectionTitle';

import AboutPersonWrapper from './AboutPersonWrapper';
import TextArea from './TextArea';
import AboutPersonText from './AboutPersonText';

export class AboutPerson extends React.PureComponent {
  state = {
    isTextAreaNotEditable: true,
    aboutPersonValue: `Всем привет! Я активный и увлечённый front-end разработчик.
      Болею перфекционизмом, верю в своё чувство прекрасного :)
      Люблю интересные и сложные задачи от который кипит мозг!`
  };

  handleEditButtonClick = () => {
    this.setState({ isTextAreaNotEditable: false });
  };

  handleAboutPersonValueChange = e => {
    this.setState({ aboutPersonValue: e.target.value });
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

        {this.state.isTextAreaNotEditable && (
          <AboutPersonText>{this.state.aboutPersonValue}</AboutPersonText>
        )}

        {!this.state.isTextAreaNotEditable && (
          <TextArea
            name="about-person-text"
            value={this.state.aboutPersonValue}
            onChange={this.handleAboutPersonValueChange}
            onBlur={this.handleTextAreaBlur}
          />
        )}
      </AboutPersonWrapper>
    );
  }
}

export default AboutPerson;
