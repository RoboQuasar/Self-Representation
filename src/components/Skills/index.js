import React from 'react';

import SectionTitle from 'containers/SectionTitle';
import SkillItem from 'containers/SkillItem';

import SkillsWrapper from './SkillsWrapper';
import SkillsSection from './SkillsSection';

export class Skills extends React.PureComponent {
  render() {
    return (
      <SkillsWrapper>
        <SectionTitle
          defaultTitleValue="Профессиональные навыки"
          titleName="skills-title"
        />

        <SkillsSection>
          <SkillItem imageSrc="html5_logo.png" />

          <SkillItem imageSrc="css3_logo.png" />

          <SkillItem imageSrc="js-logo.png" />

          <SkillItem imageSrc="bootstrap_logo.png" description="bootstrap 3" />

          <SkillItem imageSrc="wordpress_logo.png" description="WordPress" />

          <SkillItem imageSrc="less_logo.png" />

          <SkillItem imageSrc="jquery_logo.jpg" />

          <SkillItem imageSrc="sublime_text.png" description="Sublime text 3" />
        </SkillsSection>
      </SkillsWrapper>
    );
  }
}

export default Skills;
