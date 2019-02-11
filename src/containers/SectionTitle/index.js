import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { COLORS } from 'styles';

import EditTitleButton from 'components/EditButton';

import TitleInput from './TitleInput';
import TitleWrapper from './TitleWrapper';

export class SectionTitle extends React.PureComponent {
  state = {
    isTitleNotEditable: true
  };

  handleEditTitleClick = () => {
    this.setState({ isTitleNotEditable: false }, () => this.title.focus());
    this.props.editButtonClick && this.props.editButtonClick();
  };

  handleInputBlur = e => {
    if (e.target.value === '') e.target.value = e.target.defaultValue;
    this.setState({ isTitleNotEditable: true });
  };

  render() {
    return (
      <TitleWrapper>
        <TitleInput
          type="text"
          defaultValue={this.props.defaultTitleValue}
          name={this.props.titleName}
          maxLength={this.props.maxLengthValue || '30'}
          innerRef={t => {
            this.title = t;
          }}
          disabled={this.state.isTitleNotEditable}
          onBlur={this.handleInputBlur}
          isSubTitle={this.props.subTitle}
        />

        {this.props.auth.isLogin && (
          <EditTitleButton
            type="button"
            name="edit-title"
            top={this.props.buttonTop || '0'}
            right={this.props.buttonRight || '1.5%'}
            onClick={this.handleEditTitleClick}
            backgroundColor={COLORS.astral}
          />
        )}
      </TitleWrapper>
    );
  }
}

SectionTitle.propTypes = {
  auth: PropTypes.shape({
    isLogin: PropTypes.bool
  })
};

SectionTitle.defaultProps = {
  auth: {}
};

export function mapStateToProps(state) {
  return {
    auth: state.auth
  };
}

export default connect(
  mapStateToProps,
  null
)(SectionTitle);
