import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import DeleteItemButton from 'components/DeleteButton';

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

        {this.props.account && (
          <DeleteItemButton
            type="button"
            name="delete-skill"
            top="0"
            right="1.5%"
            onClick={this.handleEditTitleClick}
          />
        )}
      </SkillItemWrapper>
    );
  }
}

SkillItem.propTypes = {
  account: PropTypes.object
};

export function mapStateToProps(state) {
  return {
    account: state.account
  };
}

export default connect(mapStateToProps, null)(SkillItem);
