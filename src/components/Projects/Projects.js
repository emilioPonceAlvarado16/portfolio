import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionProjects,SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const Projects = () => (
  <SectionProjects id="projects">
    <SectionDivider />
    <SectionTitle main>Projects</SectionTitle>
    <GridContainer>
      {projects.map((p, i) => {
        return (
          <BlogCard key={i}>
            <Img src={p.image} />

            <HeaderThree title={p.title}>{p.title}</HeaderThree>
            <Hr />

            <CardInfo className="card-info">{p.description}</CardInfo>
            <div>
              <TitleContent>Tech Stack</TitleContent>
              <Hr />
              <TagList>
                {p.tags.map((t, i) => {
                  return <Tag key={i}>{t}</Tag>;
                })}
              </TagList>
            </div>
            <UtilityList>
              <ExternalLinks onClick={()=>window.open(p.visit)} >Live Preview</ExternalLinks>
              <ExternalLinks onClick={()=>window.open(p.source)} >Source Code</ExternalLinks>
            </UtilityList>
          </BlogCard>
        );
      })}
    </GridContainer>
  </SectionProjects>
);

export default Projects;