import React from 'react';

import SectionTitle from 'containers/SectionTitle';
import Title from 'containers/SectionTitle';

import PortfolioWrapper from './PortfolioWrapper';
import Image from './Image';
import PortfolioItem from './PortfolioItem';
import DescriptionText from './DescriptionText';
import Description from './Description';
import DemonstrationLink from './DemonstrationLink';

export class Portfolio extends React.PureComponent {
  state = {
    defaultResumeTextValue:
      "Адаптирован под любые размеры экранов, а также под большинство современных браузеров. Является примером 'резиновой' верстки и разработан на основе HTML5, CSS3, JavaScript, с применением JQuery, препроцессора LESS и элементов Bootstrap 3.",
    defaultBootstrapTextValue:
      'Полностью адаптивная, кроссбраузерная страница сайта для размещения портфолио с минималистичным дизайном. Разработана на основе Bootstrap 3.',
    defaultBusinessTextValue:
      'Готовая и полностью настраиваемая WordPress-тема для сайта компании. Фиксированная страница на основе чистых HTML5 и CSS3, адаптированных под популярную CMS.',
    isResumeNotEditable: true,
    isBootstrapNotEditable: true,
    isBusinessNotEditable: true
  };

  handleEditResumeClick = () => {
    this.setState({ isResumeNotEditable: !this.state.isResumeNotEditable });
  };

  handleEditBootstrapClick = () => {
    this.setState({
      isBootstrapNotEditable: !this.state.isBootstrapNotEditable
    });
  };

  handleEditBusinessClick = () => {
    this.setState({ isBusinessNotEditable: !this.state.isBusinessNotEditable });
  };

  handleTextAreaBlur = e => {
    if (e.target.value === '') e.target.value = e.target.defaultValue;
    this.setState({
      isResumeNotEditable: true,
      isBootstrapNotEditable: true,
      isBusinessNotEditable: true
    });
  };

  render() {
    return (
      <PortfolioWrapper>
        <SectionTitle
          defaultTitleValue="Портфолио"
          titleName="portfolio-title"
          maxLengthValue={50}
        />

        <PortfolioItem>
          <a
            href="http://roboquasar.pe.hu/"
            aria-label="roboquasar project link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src="resume_screen.png" alt="resume screen" />
          </a>
          <Description>
            <Title
              defaultTitleValue="Персональный сайт"
              name="portfolio-item-title"
              editButtonClick={this.handleEditResumeClick}
              isSubtitle
              buttonTop="-15px"
              buttonRight="-15px"
            />
            <DescriptionText
              descriptionHeight="120px"
              name="resume-item-description"
              defaultValue={this.state.defaultResumeTextValue}
              innerRef={r => {
                this.resumeText = r;
              }}
              disabled={this.state.isResumeNotEditable}
              onBlur={this.handleTextAreaBlur}
            />

            <DemonstrationLink
              href="http://roboquasar.pe.hu/"
              aria-label="roboquasar project link"
              target="_blank"
              rel="noopener noreferrer"
            >
              просмотр
            </DemonstrationLink>
          </Description>
        </PortfolioItem>

        <PortfolioItem>
          <a
            href="/portfolio/bootstrap/index.html"
            aria-label="bootstrap project link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src="bootstrap.png" alt="bootstrap screen" />
          </a>
          <Description>
            <Title
              defaultTitleValue="Сайт-портфолио"
              name="bootstrap-item-title"
              editButtonClick={this.handleEditBootstrapClick}
              isSubtitle
              buttonTop="-15px"
              buttonRight="-15px"
            />
            <DescriptionText
              name="bootstrap-item-description"
              defaultValue={this.state.defaultBootstrapTextValue}
              innerRef={b => {
                this.bootstrapText = b;
              }}
              disabled={this.state.isBootstrapNotEditable}
              onBlur={this.handleTextAreaBlur}
            />
            <DemonstrationLink
              href="/portfolio/bootstrap/index.html"
              aria-label="bootstrap project link"
              target="_blank"
              rel="noopener noreferrer"
            >
              просмотр
            </DemonstrationLink>
          </Description>
        </PortfolioItem>

        <PortfolioItem>
          <a
            href="http://robocollapse.pe.hu/"
            aria-label="robocollapse project link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src="busin-sol_screen.png" alt="company screen" />
          </a>
          <Description>
            <Title
              defaultTitleValue="Главная страница бизнес сайта"
              name="busin-sol-item-title"
              editButtonClick={this.handleEditBusinessClick}
              isSubtitle
              buttonTop="-15px"
              buttonRight="-15px"
            />
            <DescriptionText
              name="business-item-description"
              defaultValue={this.state.defaultBusinessTextValue}
              innerRef={b => {
                this.businessText = b;
              }}
              disabled={this.state.isBusinessNotEditable}
              onBlur={this.handleTextAreaBlur}
            />

            <DemonstrationLink
              href="http://robocollapse.pe.hu/"
              aria-label="robocollapse project link"
              target="_blank"
              rel="noopener noreferrer"
            >
              просмотр
            </DemonstrationLink>
          </Description>
        </PortfolioItem>
      </PortfolioWrapper>
    );
  }
}

export default Portfolio;
