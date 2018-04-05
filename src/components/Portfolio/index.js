import React from 'react';

import SectionTitle from 'components/SectionTitle';

import PortfolioWrapper from './PortfolioWrapper';
import Image from './Image';
import PortfolioItem from './PortfolioItem';
import Title from './Title';
import DescriptionText from './DescriptionText';
import Description from './Description';
import DemonstrationLink from './DemonstrationLink';

export class Portfolio extends React.PureComponent {
  render() {
    return (
      <PortfolioWrapper>
        <SectionTitle
          defaultTitleValue="Портфолио"
          titleName="portfolio-title"
          maxLengthValue="50"
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
              type="text"
              value="Персональный сайт"
              name="portfolio-item-title"
            />
            <DescriptionText
              descriptionHeight="120px"
              name="portfolio-item-description"
              value="Адаптирован под любые размеры экранов, а также под большинство современных браузеров. Является примером 'резиновой' верстки и разработан на основе HTML5, CSS3, JavaScript, с применением JQuery, препроцессора LESS и элементов Bootstrap 3."
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
              type="text"
              value="Сайт-портфолио"
              name="portfolio-item-title"
            />
            <DescriptionText
              name="portfolio-item-description"
              value="Полностью адаптивная, кроссбраузерная страница сайта для размещения портфолио с минималистичным дизайном. Разработана на основе Bootstrap 3."
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
              type="text"
              value="Главная страница бизнес сайта"
              name="portfolio-item-title"
            />
            <DescriptionText
              name="portfolio-item-description"
              value="Готовая и полностью настраиваемая WordPress-тема для сайта компании. Фиксированная страница на основе чистых HTML5 и CSS3, адаптированных под популярную CMS."
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
