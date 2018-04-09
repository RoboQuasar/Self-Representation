import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { List } from 'immutable';

import SectionTitle from 'containers/SectionTitle';
import SkillItem from 'containers/SkillItem';

import SkillsWrapper from './SkillsWrapper';
import SkillsSection from './SkillsSection';
import AddSkillButton from './AddSkillButton';

export class Skills extends React.PureComponent {
  state = {
    SkillItems: List([
      {
        imageSrc: 'html5_logo.png'
      },
      {
        imageSrc: 'css3_logo.png'
      },
      {
        imageSrc: 'js-logo.png'
      },
      {
        imageSrc: 'bootstrap_logo.png',
        description: 'bootstrap 3'
      },
      {
        imageSrc: 'wordpress_logo.png',
        description: 'WordPress'
      },
      {
        imageSrc: 'less_logo.png'
      },
      {
        imageSrc: 'jquery_logo.jpg'
      },
      {
        imageSrc: 'sublime_text.png',
        description: 'Sublime text 3'
      }
    ])
  };

  handleDeleteSkillItem = index => {
    this.setState({ SkillItems: this.state.SkillItems.delete(index) });
  };

  render() {
    return (
      <SkillsWrapper>
        <SectionTitle
          defaultTitleValue="Профессиональные навыки"
          titleName="skills-title"
        />

        <SkillsSection>
          {this.state.SkillItems.map((item, index) => (
            <SkillItem
              key={index}
              imageSrc={item.imageSrc}
              deleteSkillItem={this.handleDeleteSkillItem}
              description={item.description}
              itemIndex={index}
            />
          ))}

          {this.props.account && (
            <AddSkillButton type="button" name="add-skill" />
          )}
        </SkillsSection>
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
