import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fromJS } from 'immutable';

import SectionTitle from 'containers/SectionTitle';
import SkillItem from 'containers/SkillItem';

import AddCustomSkillSubmit from 'components/ConfirmButton';

import SkillsWrapper from './SkillsWrapper';
import SkillsSection from './SkillsSection';
import AddSkillButton from './AddSkillButton';
import NewSkillsWrapper from './NewSkillsWrapper';
import NewSkillsTitle from './NewSkillsTitle';
import AddCustomSkillForm from './AddCustomSkillForm';
import AddCustomSkillName from './AddCustomSkillName';

export class Skills extends React.PureComponent {
  state = {
    SkillItems: fromJS([
      {
        imageSrc: 'html5_logo.png',
        type: 'SkillItem'
      },
      {
        imageSrc: 'css3_logo.png',
        type: 'SkillItem'
      },
      {
        name: 'пунктуальность',
        type: 'CustomSkill'
      },
      {
        name: 'телепортация',
        type: 'CustomSkill'
      },
      {
        imageSrc: 'js-logo.png',
        type: 'NewSkill'
      },
      {
        imageSrc: 'bootstrap_logo.png',
        description: 'bootstrap 3',
        type: 'NewSkill'
      },
      {
        imageSrc: 'wordpress_logo.png',
        description: 'WordPress',
        type: 'NewSkill'
      },
      {
        imageSrc: 'less_logo.png',
        type: 'NewSkill'
      },
      {
        imageSrc: 'jquery_logo.jpg',
        type: 'NewSkill'
      },
      {
        imageSrc: 'sublime_text.png',
        description: 'Sublime text 3',
        type: 'NewSkill'
      }
    ]),

    isNewSkillsOpen: false
  };

  handleAddSkillsClick = () => {
    this.setState({ isNewSkillsOpen: !this.state.isNewSkillsOpen });
  };

  handleAddNewSkill = index => {
    this.setState(prevState => ({
      SkillItems: prevState.SkillItems.setIn([index, 'type'], 'SkillItem')
    }));
  };

  handleAddCustomSkill = e => {
    e.preventDefault();

    this.setState(prevState => ({
      SkillItems: prevState.SkillItems.push(
        fromJS({ name: this.skillname.value, type: 'CustomSkill' })
      )
    }));
  };

  handleDeleteSkillItem = index => {
    this.state.SkillItems.get(index).get('type') !== 'CustomSkill'
      ? this.setState(prevState => ({
          SkillItems: prevState.SkillItems.setIn([index, 'type'], 'NewSkill')
        }))
      : this.setState(prevState => ({
          SkillItems: prevState.SkillItems.delete(index)
        }));
  };

  render() {
    return (
      <SkillsWrapper>
        <SectionTitle
          defaultTitleValue="Профессиональные навыки"
          titleName="skills-title"
        />

        <SkillsSection>
          {this.state.SkillItems.map(
            (item, index) =>
              item.get('type') !== 'NewSkill' && (
                <SkillItem
                  key={index}
                  imageSrc={item.get('imageSrc')}
                  deleteSkillItem={this.handleDeleteSkillItem}
                  description={item.get('description')}
                  customName={item.get('name')}
                  itemIndex={index}
                  type={item.get('type')}
                />
              )
          )}

          {this.props.account && (
            <AddSkillButton
              type="button"
              name="add-skill"
              onClick={this.handleAddSkillsClick}
              rotated={this.state.isNewSkillsOpen}
            />
          )}
        </SkillsSection>

        {this.props.account &&
          this.state.isNewSkillsOpen && (
            <NewSkillsWrapper>
              <NewSkillsTitle>Выберите навык из списка:</NewSkillsTitle>
              {this.state.SkillItems.map(
                (item, index) =>
                  item.get('type') === 'NewSkill' && (
                    <SkillItem
                      key={index}
                      imageSrc={item.get('imageSrc')}
                      addNewSkill={this.handleAddNewSkill}
                      description={item.get('description')}
                      itemIndex={index}
                      type={item.get('type')}
                    />
                  )
              )}

              <AddCustomSkillForm onSubmit={this.handleAddCustomSkill}>
                <NewSkillsTitle>или добавьте свой:</NewSkillsTitle>
                <AddCustomSkillName
                  type="text"
                  name="add-custom-skill"
                  placeholder="введите название навыка"
                  innerRef={s => (this.skillname = s)}
                />
                <AddCustomSkillSubmit
                  type="submit"
                  name="custom-skill-submit"
                  onClick={this.handleAddCustomSkill}
                >
                  добавить
                </AddCustomSkillSubmit>
              </AddCustomSkillForm>
            </NewSkillsWrapper>
          )}
      </SkillsWrapper>
    );
  }
}

Skills.propTypes = {
  account: PropTypes.object
};

export function mapStateToProps(state) {
  return {
    account: state.account
  };
}

export default connect(mapStateToProps, null)(Skills);
