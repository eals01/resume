type data = {
  no: {
    education: {
      title: string
      university: string
      date: string
      location: string
      bulletPoints: string[]
    }[]
    workExperience: {
      title: string
      company: string
      date: string
      location: string
      bulletPoints: string[]
      readMore?: string
    }[]
    skills: string[]
    otherExperience: {
      title: string
      description: string
      readMore?: string
    }[]
  }
  en: {
    education: {
      title: string
      university: string
      date: string
      location: string
      bulletPoints: string[]
    }[]
    workExperience: {
      title: string
      company: string
      date: string
      location: string
      bulletPoints: string[]
      readMore?: string
    }[]
    skills: string[]
    otherExperience: {
      title: string
      description: string
      readMore?: string
    }[]
  }
}

export const data: data = {
  no: {
    education: [
      {
        title: 'Informatikk, master',
        university: 'Universitetet i Oslo',
        date: 'aug 23 - nåværende',
        location: 'Oslo',
        bulletPoints: ['Fordypning innen programvareutvikling']
      },
      {
        title: 'Informatikk, bachelor (forts.)',
        university: 'Universitetet i Oslo',
        date: 'aug 22 - jun 23',
        location: 'Oslo',
        bulletPoints: [
          'Fokus på fundamentale temaer innen datateknologi',
          'Fordypning innen testing av programvare'
        ]
      },
      {
        title: 'Informatikk, bachelor',
        university: 'Norges teknisk-naturvitenskapelige universitet',
        date: 'aug 20 - jun 22',
        location: 'Trondheim',
        bulletPoints: ['Fokus på programvareutvikling og moderne teknologier']
      }
    ],
    workExperience: [
      {
        title: 'Utvikler sommer-internship',
        company: 'Variant',
        date: 'jun 24 - aug 24',
        location: 'Oslo',
        bulletPoints: ['Får gleden av å tilbringe sommeren 2024 hos Variant!']
      },
      {
        title: 'Utvikler internship',
        company: 'Gjensidige',
        date: 'aug 23 - nåværende',
        location: 'Oslo',
        bulletPoints: [
          'Deltidsstilling stilling på teknologiavdelingen til Gjensidige',
          'Tverrfaglig prosjekt med interns fra flere avdelinger'
        ]
      },
      {
        title: 'Utvikler sommer-internship',
        company: 'Kahoot!',
        date: 'jun 23 - jul 23',
        location: 'Oslo',
        bulletPoints: [
          'Gjorde livet enklere for designere ved å utvikle en CRUD-applikasjon som effektiviserte administrering av Kahoot-temaer',
          'Java/Spring, React, Postgres'
        ]
      },
      {
        title: 'Vitenskapelig assistent',
        company: 'Universitetet i Oslo',
        date: 'aug 23 - nåværende',
        location: 'Oslo',
        bulletPoints: [
          'Deltidsstilling som utvikler på Adapt-plattformen, en e-læringsplattform som øker læringsutbytte hos medisinstudenter',
          'React, Kotlin, AWS'
        ],
        readMore:
          'https://www.capraconsulting.no/dette-har-vi-gjort/cardiolearn'
      },
      {
        title: 'Utvikler sommer-internship',
        company: 'Komplett Group',
        date: 'jun 22 - aug 22',
        location: 'Sandefjord',
        bulletPoints: [
          'Utvikler av Discover-siden, et eksperiment for å oppdage nye og spennende produkter hos Komplett',
          '.NET, React'
        ],
        readMore:
          'https://developer.komplett.no/blog/2022-08-22-komplett-discover-sommerprosjekt-hos-komplett/'
      },
      {
        title: 'Læringsassistent',
        company: 'Norges teknisk-naturvitenskapelige universitet',
        date: 'jan 22 - jun 22',
        location: 'Trondheim',
        bulletPoints: [
          'TDT4100 - Objektorientert programmering',
          'Veiledet 15 studenter i prosjektarbeid og mot eksamen i Java'
        ]
      },
      {
        title: 'Privatlærer',
        company: 'Learnist',
        date: 'okt 21 - apr 22',
        location: 'Trondheim',
        bulletPoints: [
          'Planla og holdt undervisning for barn og ungdom i blokk-programmering og Python',
          'Ga meg gleden av å spre programmeringsgnisten videre'
        ]
      }
    ],
    skills: [
      'HTML/CSS/JS',
      'React',
      'TypeScript',
      'Socket.IO',
      'THREE.js',
      'Styled-components',
      'Java',
      'Kotlin',
      'C',
      'Git',
      'JIRA',
      'CI/CD',
      'AWS'
    ],
    otherExperience: [
      {
        title: 'Hobbyprosjekter',
        description:
          'Jeg elsker webutvikling og fordyper meg for tiden i WebSockets (Socket.IO) og WebGL (THREE.js) for å gjenskape brettspill som Monopol og UNO',
        readMore: 'https://github.com/eals01/millionairy-old'
      },
      {
        title: 'Online linjeforening',
        description:
          'Jeg arrangerte sosiale sammenkomster for studenter, barn og ungdom gjennom linjeforeningen min på NTNU. Mest nevneverdig TrøndeLAN med 300 deltakere i 2021. Del av ledelsen og opptakskomiteen'
      }
    ]
  },
  en: {
    education: [
      {
        title: 'MSc computer science',
        university: 'University of Oslo',
        date: 'aug 23 - present',
        location: 'Oslo',
        bulletPoints: ['Specialization in software development']
      },
      {
        title: 'BSc computer science (cont.)',
        university: 'University of oslo',
        date: 'aug 22 - jun 23',
        location: 'Oslo',
        bulletPoints: [
          'Focus on fundamental subjects within computer science',
          'Specialization in software testing'
        ]
      },
      {
        title: 'BSc computer science',
        university: 'Norwegian University of Science and Technology',
        date: 'aug 20 - jun 22',
        location: 'Trondheim',
        bulletPoints: ['Focus on software development and modern technologies']
      }
    ],
    workExperience: [
      {
        title: 'Developer summer intern',
        company: 'Variant',
        date: 'jun 24 - aug 24',
        location: 'Oslo',
        bulletPoints: [
          'Having the pleasure of spending the summer of 2024 at Variant!'
        ]
      },
      {
        title: 'Developer intern',
        company: 'Gjensidige',
        date: 'aug 23 - present',
        location: 'Oslo',
        bulletPoints: [
          'Part-time position at one of the leading insurance companies in the Nordics',
          'Interdisciplinary project with interns from several departments'
        ]
      },
      {
        title: 'Developer summer intern',
        company: 'Kahoot!',
        date: 'jun 23 - jul 23',
        location: 'Oslo',
        bulletPoints: [
          'Improved quality of life for designers by developing a CRUD-application for administrating Kahoot-themes',
          'Java/Spring, React, Postgres'
        ]
      },
      {
        title: 'Scientific assistant',
        company: 'University of Oslo',
        date: 'aug 23 - present',
        location: 'Oslo',
        bulletPoints: [
          'Part-time position as a developer on the Adapt-platform, an e-learning platform that improves learning for medical students ',
          'React, Kotlin, AWS'
        ],
        readMore:
          'https://www.capraconsulting.no/dette-har-vi-gjort/cardiolearn'
      },
      {
        title: 'Developer summer intern',
        company: 'Komplett Group',
        date: 'jun 22 - aug 22',
        location: 'Sandefjord',
        bulletPoints: [
          'Leading e-commerce platform in the nordics',
          'Developer of the Discover-page, an experiment for discovering new and exciting products at Komplett',
          '.NET, React'
        ],
        readMore:
          'https://developer.komplett.no/blog/2022-08-22-komplett-discover-sommerprosjekt-hos-komplett/'
      },
      {
        title: 'Teaching assistant',
        company: 'Norwegian University of Science and Technology',
        date: 'jan 22 - jun 22',
        location: 'Trondheim',
        bulletPoints: [
          'TDT4100 - Object-oriented programming',
          'Guided 15 students in project work and towards an exam in Java'
        ]
      },
      {
        title: 'Private teacher',
        company: 'Learnist',
        date: 'oct 21 - apr 22',
        location: 'Trondheim',
        bulletPoints: [
          'Planned and held lectures for children and youth in block programming and Python',
          'Gave me the pleasure of spreading the joy of programming to future generations'
        ]
      }
    ],
    skills: [
      'HTML/CSS/JS',
      'React',
      'TypeScript',
      'Socket.IO',
      'THREE.js',
      'Styled-components',
      'Java',
      'Kotlin',
      'C',
      'Git',
      'JIRA',
      'CI/CD',
      'AWS'
    ],
    otherExperience: [
      {
        title: 'Hobby projects',
        description:
          'I love web development. Most recently I have been diving into Websockets and recreated games like Monopoly and UNO',
        readMore: 'https://github.com/eals01/millionairy-old'
      },
      {
        title: 'Online student association',
        description:
          'I arranged social gatherings for students, children and youth through my volunteer position at my student association at NTNU. Most notably TrøndeLAN with 300 participants in 2021. Part of the management and admission committee'
      }
    ]
  }
}
