import styled from 'styled-components'

import { data } from './data'
import portrait from './resources/images/portrait.png'

type ResumeProps = {
  language: 'en' | 'no'
}

export default function Resume({ language }: ResumeProps) {
  return (
    <Container>
      <header>
        <section>
          <h1>erlend andré lie størkson</h1>
          <table>
            <tbody>
              <tr>
                <td>Tlf.</td>
                <td>+47 481 47 118</td>
              </tr>
              <tr>
                <td>{language === 'en' ? 'Email' : 'Epost'}</td>
                <td>erstoer@online.no</td>
              </tr>
              <tr>
                <td>GitHub</td>
                <td>
                  <a href='#'>github.com/eals01</a>
                </td>
              </tr>
              <tr>
                <td>{language === 'en' ? 'Location' : 'Bosted'}</td>
                <td>Oslo</td>
              </tr>
            </tbody>
          </table>
        </section>
        <img src={portrait} alt='Erlend Størkson' />
      </header>
      <Content>
        <section>
          <section>
            <h2>{language === 'en' ? 'education' : 'utdanning'}</h2>
            <hr />
            {data[language].education.map((degree, index) => (
              <article key={`degree-${index}`}>
                <dl>
                  <dd>
                    <h3>{degree.title}</h3>
                    <span>{degree.date}</span>
                  </dd>
                  <dd>
                    <span>{degree.university}</span>
                    <span>{degree.location}</span>
                  </dd>
                </dl>
                <ul>
                  {degree.bulletPoints.map((bulletPoint, bulletPointIndex) => (
                    <li key={`degree-${index}-bulletPoint-${bulletPointIndex}`}>
                      {bulletPoint}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </section>
          <section>
            <h2>{language === 'en' ? 'work experience' : 'arbeidserfaring'}</h2>
            <hr />
            {data[language].workExperience.map((position, index) => (
              <article key={`position-${index}`}>
                <dl>
                  <dd>
                    <h3>{position.title}</h3>
                    <span>{position.date}</span>
                  </dd>
                  <dd>
                    <span>{position.company}</span>
                    <span>{position.location}</span>
                  </dd>
                </dl>
                <ul>
                  {position.bulletPoints.map(
                    (bulletPoint, bulletPointIndex) => (
                      <li
                        key={`position-${index}-bulletPoint-${bulletPointIndex}`}
                      >
                        {bulletPoint}
                      </li>
                    )
                  )}
                </ul>
                {position.readMore && (
                  <a
                    href={position?.readMore}
                    target='_blank'
                    rel='noreferrer'
                    className='readMore'
                  >
                    {language === 'en' ? 'Read more' : 'Les mer'}
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      height='1em'
                      viewBox='0 0 320 512'
                    >
                      <path
                        fill='currentColor'
                        d='M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z'
                      />
                    </svg>
                  </a>
                )}
              </article>
            ))}
          </section>
        </section>
        <aside>
          <section>
            <h2>{language === 'en' ? 'skills' : 'ferdigheter'}</h2>
            <hr />
            <dl className='skills'>
              {data[language].skills.map((skill, key) => (
                <dd key={`skill-${key}`}>{skill}</dd>
              ))}
            </dl>
          </section>
          <section>
            <h2>{language === 'en' ? 'other experience' : 'annen erfaring'}</h2>
            <hr />
            {data[language].otherExperience.map((experience, index) => (
              <article key={`otherExperience-${index}`}>
                <h3>{experience.title}</h3>
                <p>{experience.description}</p>
                {experience.readMore && (
                  <a
                    href={experience?.readMore}
                    target='_blank'
                    rel='noreferrer'
                    className='readMore'
                  >
                    {language === 'en' ? 'Read more' : 'Les mer'}
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      height='1em'
                      viewBox='0 0 320 512'
                    >
                      <path
                        fill='currentColor'
                        d='M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z'
                      />
                    </svg>
                  </a>
                )}
              </article>
            ))}
          </section>
        </aside>
      </Content>
    </Container>
  )
}

const Container = styled.main`
  max-width: 900px;
  height: calc(100vh - 3em);

  margin: auto;
  padding: 1.5em;

  color: ${(props) => props.theme.colors.text};

  h1,
  h2 {
    font-family: Mate SC;
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    height: 9em;

    h1 {
      font-size: 1.6em;
    }

    td {
      padding-right: 1.5em;
    }

    img {
      height: 100%;
      border-radius: 50%;
      background: ${(props) => props.theme.colors.gradient};
    }
  }

  a {
    color: ${(props) => props.theme.colors.text};
  }

  @media (max-width: 570px) {
    header {
      img {
        height: 10em;
        display: none;
      }
    }
  }
`

const Content = styled.section`
  display: flex;
  gap: 1.5em;
  font-size: 0.9em;

  section {
    flex: 3 1 0;
    margin-bottom: 1.5em;
  }

  aside {
    flex: 2 1 0;
  }

  h2 {
    margin-top: 0.5em;
    font-size: 1.3em;
    color: ${(props) => props.theme.colors.textSecondary};
  }

  hr {
    margin-bottom: 0.3em;
  }

  article {
    position: relative;
    padding: 0.75em 0;
    border-bottom: 1px dashed
      ${(props) => props.theme.colors.backgroundSecondary};

    &:nth-child(3) {
      padding-top: 0;
    }

    &:last-child {
      border-bottom: none;
    }

    h3 {
      font-size: 1em;
      font-weight: 500;
    }

    dl > dd {
      display: flex;
      justify-content: space-between;
      font-style: italic;

      &:first-child span {
        text-align: right;
      }

      @media (max-width: 350px) {
        flex-direction: column;

        &:first-child span {
          text-align: left;
        }
      }
    }

    ul {
      padding-left: 1.1em;
    }

    .readMore {
      display: flex;
      align-items: center;

      margin-top: 0.5em;

      color: ${(props) => props.theme.colors.textSecondary};

      svg {
        height: 0.8em;
        margin-left: 0.1em;
        color: ${(props) => props.theme.colors.textSecondary};
      }
    }
  }

  .skills {
    display: flex;
    flex-wrap: wrap;
    gap: 0.3em;

    margin-bottom: 2.5em;

    dd {
      padding: 0.3em 0.35em;
      background: ${(props) => props.theme.colors.backgroundTertiary};
    }
  }

  li,
  p {
    line-height: 1.3em;
  }

  @media (max-width: 650px) {
    flex-direction: column;
  }
`
