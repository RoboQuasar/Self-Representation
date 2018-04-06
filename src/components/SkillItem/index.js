import React from 'react';

import SkillItemWrapper from './SkillItemWrapper';
import Image from './Image';
import SkillItemFigure from './SkillItemFigure';
import Description from './Description';

export class SkillItem extends React.PureComponent {
  render() {
    return (
      <SkillItemWrapper>
        <SkillItemFigure>
          <Image src={this.props.imageSrc} />

          {this.props.description && (
            <Description>{this.props.description}</Description>
          )}
        </SkillItemFigure>
      </SkillItemWrapper>
    );
  }
}

export default SkillItem;
