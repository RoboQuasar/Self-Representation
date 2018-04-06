import React from 'react';

import SectionTitle from 'containers/SectionTitle';

import SkillsWrapper from './SkillsWrapper';
import Image from './Image';
import SkillItem from './SkillItem';
import Description from './Description';

export class Skills extends React.PureComponent {
  render() {
    return (
      <SkillsWrapper>
        <SectionTitle
          defaultTitleValue="Профессиональные навыки"
          titleName="skills-title"
        />

        <SkillItem>
          <Image src="html5_logo.png" />
        </SkillItem>

        <SkillItem>
          <Image src="css3_logo.png" />
        </SkillItem>

        <SkillItem>
          <Image src="js-logo.png" />
        </SkillItem>

        <SkillItem>
          <Image src="bootstrap_logo.png" />
          <Description>bootstrap 3</Description>
        </SkillItem>

        <SkillItem>
          <Image src="wordpress_logo.png" />
          <Description>WordPress</Description>
        </SkillItem>

        <SkillItem>
          <Image src="less_logo.png" />
        </SkillItem>

        <SkillItem>
          <Image src="jquery_logo.jpg" />
        </SkillItem>

        <SkillItem>
          <Image src="sublime_text.png" />
          <Description>Sublime text 3</Description>
        </SkillItem>
      </SkillsWrapper>
    );
  }
}

export default Skills;
