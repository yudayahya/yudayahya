import React from 'react';
import { SiVisualstudiocode, SiPostman, SiGit } from 'react-icons/si';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './ToolsStyles';

const Tools = () =>  (
  <Section id="tool">
    <SectionDivider />
    <SectionTitle main>Tools</SectionTitle>
    <SectionText>
      Tools i've use on working.
    </SectionText>
    <List>
      <ListItem>
        <SiVisualstudiocode size="5rem" style={{marginBottom:'20px'}}/>
        <ListContainer>
          <ListTitle>VS Code</ListTitle>
        </ListContainer>
      </ListItem>
      <ListItem>
        <SiPostman size="5rem" style={{marginBottom:'20px'}}/>
        <ListContainer>
          <ListTitle>Postman</ListTitle>
        </ListContainer>
      </ListItem>
      <ListItem>
        <SiGit size="5rem" style={{marginBottom:'20px'}}/>
        <ListContainer>
          <ListTitle>Git</ListTitle>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Tools;
