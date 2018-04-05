import React from 'react';
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
    this.props.editButtonClick();
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
        />

        <EditTitleButton
          type="button"
          name="edit-title"
          top="0"
          right="1.5%"
          onClick={this.handleEditTitleClick}
          backgroundColor={COLORS.astral}
        />
      </TitleWrapper>
    );
  }
}

export default SectionTitle;
