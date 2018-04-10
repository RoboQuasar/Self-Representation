import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import DeleteItemButton from 'components/DeleteButton';

import SkillItemWrapper from './SkillItemWrapper';
import Image from './Image';
import SkillItemFigure from './SkillItemFigure';
import Description from './Description';
import CustomSkill from './CustomSkill';

export class SkillItem extends React.PureComponent {
  handleDeleteItemClick = () => {
    this.props.deleteSkillItem(this.props.itemIndex);
  };

  handleAddNewSkill = () => {
    this.props.type === 'NewSkill' &&
      this.props.addNewSkill(this.props.itemIndex);
  };

  render() {
    return (
      <SkillItemWrapper>
        <SkillItemFigure
          clickable={this.props.type === 'NewSkill'}
          onClick={this.handleAddNewSkill}
        >
          {this.props.imageSrc && <Image src={this.props.imageSrc} />}

          {this.props.description && (
            <Description>{this.props.description}</Description>
          )}

          {this.props.type === 'CustomSkill' && (
            <CustomSkill>{this.props.customName}</CustomSkill>
          )}
        </SkillItemFigure>

        {this.props.account &&
          this.props.type !== 'NewSkill' && (
            <DeleteItemButton
              type="button"
              name="delete-skill"
              top="0"
              right="1.5%"
              onClick={this.handleDeleteItemClick}
            />
          )}
      </SkillItemWrapper>
    );
  }
}

SkillItem.propTypes = {
  account: PropTypes.object,
  type: PropTypes.string
};

export function mapStateToProps(state) {
  return {
    account: state.account
  };
}

export default connect(mapStateToProps, null)(SkillItem);
