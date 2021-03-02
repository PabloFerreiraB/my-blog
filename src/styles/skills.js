import styled from 'styled-components';
import media from 'styled-media-query';

export const SkillsHeader = styled.h1`
  padding: 2rem 3rem 0;
  margin: 1rem auto;
  line-height: 3.2rem;
  font-family: 'Didact Gothic', sans-serif;
  font-size: 2.8rem;
  font-weight: 600;
  color: var(--postColor);

  ${media.lessThan('large')`
    padding: 0 1rem 1rem;
  `}
`;

export const SkillsSubTitle = styled.h2`
  padding: 2rem 3rem 0.2rem 3rem;
  font-family: 'Didact Gothic', sans-serif;
  font-size: 1.9rem;
  font-weight: 500;
  color: var(--postColor);

  ${media.lessThan('large')`
    padding: 2rem 1rem 1rem;
  `}
`;

export const SkillsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: 1rem 2.5rem 0 2.5rem;

  svg {
    color: #334444;
    width: 40px;
    height: 40px;
  }

  ${media.lessThan('large')`
    margin: 0 1rem 1rem;
  `}
`;

export const SkillsItem = styled.li`
  cursor: pointer;
`;

export const SkillsWrapper = styled.div`
  background: #f4f4f4;
  border: 1px solid var(--borders);
  margin: 10px 0 0 10px;
  width: 65px;
  height: 65px;
  display: flex;
  justify-content: space-evenly;
  border-radius: 50%;
  align-items: center;
`;

export const SkillsLinkIcon = styled.a`
  height: 60px;
  display: flex;
  width: 60px;
  justify-content: center;
  align-items: center;

  .img {
    width: 40px;
    height: 40px;
  }
`;






