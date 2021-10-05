import React from 'react';
import { DiCodeigniter, DiYii } from 'react-icons/di';
import { IoLogoVue } from 'react-icons/io5';
import { FaLaravel, FaNodeJs, FaReact } from 'react-icons/fa';
import { GrMysql } from 'react-icons/gr';
import { SiDjango, SiPostgresql, SiMongodb, SiNextDotJs } from 'react-icons/si';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="skill">
    <SectionDivider />
    <SectionTitle main>Skills</SectionTitle>
    <SectionText>
      Batman would be jealous.
    </SectionText>
    <List>
      <ListItem>
        <GrMysql size="5rem"/>
        <ListContainer>
          <ListTitle>MySQL</ListTitle>
          <ListParagraph>
            Experience with <br />
            MySQL Database
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <SiPostgresql size="5rem"/>
        <ListContainer>
          <ListTitle>PostgreSQL</ListTitle>
          <ListParagraph>
            Experience with <br />
            PostgreSQL Database
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <SiMongodb size="5rem"/>
        <ListContainer>
          <ListTitle>MongoDB</ListTitle>
          <ListParagraph>
            Experience with <br />
            MongoDB Database
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <FaLaravel size="5rem"/>
        <ListContainer>
          <ListTitle>Laravel</ListTitle>
          <ListParagraph>
            Experience with <br />
            Laravel PHP Framework
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiCodeigniter size="5rem"/>
        <ListContainer>
          <ListTitle>Codeigniter</ListTitle>
          <ListParagraph>
            Experience with <br />
            Codeigniter PHP Framework
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiYii size="5rem"/>
        <ListContainer>
          <ListTitle>Yii</ListTitle>
          <ListParagraph>
            Experience with <br />
            Yii PHP Framework
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <SiDjango size="5rem"/>
        <ListContainer>
          <ListTitle>Django</ListTitle>
          <ListParagraph>
            Experience with <br />
            Django Python Framework
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <FaNodeJs size="5rem"/>
        <ListContainer>
          <ListTitle>Express</ListTitle>
          <ListParagraph>
            Experience with <br />
            Express Node.js Framework
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <IoLogoVue size="5rem"/>
        <ListContainer>
          <ListTitle>Vue.js</ListTitle>
          <ListParagraph>
            Experience with <br />
            Vue Javascript Framework
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <FaReact size="5rem"/>
        <ListContainer>
          <ListTitle>React.js</ListTitle>
          <ListParagraph>
            Experience with <br />
            React Javascript Framework
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <SiNextDotJs size="5rem"/>
        <ListContainer>
          <ListTitle>Next.js</ListTitle>
          <ListParagraph>
            Experience with <br />
            Next Javascript Framework
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
