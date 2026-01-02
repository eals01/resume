import {
  astroIcon,
  awsIcon,
  azureIcon,
  dotNetIcon,
  firebaseIcon,
  gitIcon,
  kotlinIcon,
  nodeJsIcon,
  postgresIcon,
  pythonIcon,
  reactIcon,
  socketIoIcon,
  threeJsIcon,
  typeScriptIcon,
} from './assets/icons';

export const data = {
  name: 'Erlend André Lie Størkson',
  website: 'github.com/eals01',
  email: 'erlendstrk01@gmail.com',
  phone: '+47 481 47 118',
  pitch: {
    no: 'Jeg elsker å lage ting! Jeg fullfører masteren min i 2026 og har fått litt erfaring gjennom jobber og hobbyprosjekter. Nå har jeg veldig lyst til å finne et sted der jeg kan bruke det jeg har lært til å skape kule ting med hyggelige folk.',
    en: "I love buildings things! I'm finishing my master's thesis in 2026 and have gained some experience through jobs and hobby projects. Now I really want to find a place where I can use what I've learned to create cool things with good people.",
  },
  education: {
    title: {
      no: 'Utdanning',
      en: 'Education',
    },
    entries: [
      {
        title: {
          no: 'Informatikk, master',
          en: 'Informatics, MSc',
        },
        institution: {
          no: 'Universitetet i Oslo',
          en: 'University of Oslo',
        },
        date: {
          no: 'aug 23 - nåværende',
          en: 'aug 23 - current',
        },
        location: 'Oslo',
      },
      {
        title: {
          no: 'Informatikk, bachelor (forts.)',
          en: 'Informatics, BSc (cont.)',
        },
        institution: {
          no: 'Universitetet i Oslo',
          en: 'University of Oslo',
        },
        date: {
          no: 'aug 22 - jun 23',
          en: 'aug 22 - jun 23',
        },
        location: 'Oslo',
      },
      {
        title: {
          no: 'Informatikk, bachelor',
          en: 'Informatics, BSc',
        },
        institution: {
          no: 'Norges teknisk-naturvitenskapelige universitet',
          en: 'Norwegian University of Science and Technology',
        },
        date: {
          no: 'aug 20 - jun 22',
          en: 'aug 20 - jun 22',
        },
        location: 'Trondheim',
      },
    ],
  },
  workExperience: {
    title: {
      no: 'Arbeidserfaring',
      en: 'Work experience',
    },
    entries: [
      {
        title: {
          no: 'Utvikler, sommerjobb',
          en: 'Developer, summer intern',
        },
        institution: {
          no: 'Variant',
          en: 'Variant',
        },
        date: {
          no: 'jun 25 - aug 25',
          en: 'jun 25 - aug 25',
        },
        location: 'Oslo',
        description: {
          no: 'Tverrfaglig prosjekt med designstudenter. Makeover av innovasjonsplattformen til kunden vår, Multiconsult. React, .NET og Azure',
          en: 'Inter-disciplinary project with design students. Makover of our client Multiconsult\'s innovation platform. React, .NET and Azure',
        },
      },
      {
        title: {
          no: 'Utvikler, deltid',
          en: 'Developer, part-time',
        },
        institution: {
          no: 'Gjensidige',
          en: 'Gjensidige'
        },
        date: {
          no: 'aug 23 - sep 24',
          en: 'aug 23 - sep 24'
        },
        location: 'Oslo',
        description: {
            no: 'Tverrfaglig prosjekt med design- og markedsføringsstudenter. React og Gjensidiges CMS',
            en: 'Inter-disciplinary project with design- and marketing students. React and Gjensidige\'s CMS'
          }
      },
      {
        title: {
          no: 'Utvikler, sommerjobb',
          en: 'Developer, summer intern',
        },
        institution: {
          no: 'Kahoot!',
          en: 'Kahoot!',
        },
        date: {
          no: 'jun 23 - jul 23',
          en: 'jun 23 - jul 23'
        },
        location: 'Oslo',
        description: {
          no: 'Gjorde livet enklere for designere i Kahoot ved å lage en app for å lage og administrere Kahoot-temaer. Java/Spring, React og Postgres',
          en: 'Made life easier for Kahoot designers by creating a CRUD app for creating and managing Kahoot themes. Java/Spring, React and Postgres'
        },
      },
      {
        title: {
          no: 'Utvikler, deltid',
          en: 'Developer, part-time',
        },
        institution: {
          no: 'Universitetet i Oslo',
          en: 'University of Oslo',
        },
        date: {
          no: 'apr 23 - okt 24',
          en: 'apr 23 - oct 24'
        },
        location: 'Oslo',
        description: {
          no: 'Driftet og videreutviklet e-læringsplattformen Adapt sammen med 2 medstudenter. AWS, Kotlin, React og GraphQL',
          en: 'Maintained and further developed an e-learning platform with 2 fellow students. AWS, Kotlin, React and GraphQL'
        },
      },
      {
        title: {
          no: 'Utvikler, sommerjobb',
          en: 'Developer, summer intern',
        },
        institution: {
          no: 'Komplett',
          en: 'Komplett',
        },
        date: {
          no: 'jun 22 - aug 22',
          en: 'jun 22 - aug 22'
        },
        location: 'Sandefjord',
        description: {
          no: 'Eksperimenterte med å introdusere kunder til nye og spennende produkter som i en TikTok-feed. React og .NET',
          en: 'Experimented with introducing customers to new and exciting products through a TikTok-like feed. React and .NET'
        },
      },
      {
        title: {
          no: 'Privatlærer',
          en: 'Private teacher'
        },
        institution: {
          no: 'Learnist',
          en: 'Learnist'
        },
        date: {
          no: 'okt 21 - apr 22',
          en: 'oct 21 - apr 22'
        },
        location: 'Trondheim',
        description: {
          no: 'Planla og holdt undervisning for barn og ungdom i blokk-programmering og Python. Ga meg gleden av å spre programmeringsgnisten videre!',
          en: 'Planned and held lectures for children and youth in block programming and Python. Gave me the pleasure of spreading the joy of creating through programming'
        },
      },
    ],
  },
  otherExperience: {
    title: {
      no: 'Annen erfaring',
      en: 'Other experience'
    },
    entries: [
      {
        title: {
          no: 'Læringsassistent',
          en: 'Teaching assistant'
        },
        description: {
          no: 'Var Læringsassistent i TDT4100 - Objektorientert programmering, og IN5320 - Platformutvikling. Veiledet medstudenter i prosjektarbeid og mot eksamen i Java og React.',
          en: 'I was a TA in TDT4100 - Object-oriented programming and IN5320 - Development in platform ecosystems. Guided fellow students in project work and towards exams in Java and React.'
        },
      },
      {
        title: {
          no: 'Masteroppgave',
          en: 'Master\'s thesis',
        },
        description: {
          no: 'Skriver masteren min om hvordan nye informatikkstudenter bruker generativ KI, og hva det har å si for læringen deres. Forskning viser at de som allerede sliter faller lenger bak med KI, og målet mitt er å hjelpe dem å snu om på dette.',
          en: 'Currently writing my thesis about how new CS students use generative AI, and how it impacts their learning. Research shows that already struggling students fall further behind with AI, and my goal is to help them turn this around.'
        },
      },
      {
        title: {
          no: 'Hobbyprosjekter',
          en: 'Hobby projects'
        },
        description: {
          no: 'Jeg elsker webutvikling og liker å gjenskape brettspill som Monopol og UNO i sanntid i 3D. For tiden lager jeg også verktøy for å visualisere fremgang og data blant kompisene mine i dataspillet League of Legends',
          en: 'I love web development, and I like to re-create board games like Monopoly and UNO in real-time and 3D. Right now I\'m creating data visualization tools for me and my friends in the video game League of Legends.'
        },
      },
      {
        title: {
          no: 'Verv',
          en: 'Volunteer work'
        },
        description: {
          no: 'Arrangerte sosiale sammenkomster for studenter, barn og ungdom gjennom linjeforeningen min på NTNU. Mest nevneverdig TrøndeLAN med 300 deltagere i 2021. Del av ledelsen og opptakskomiteen i interessegruppen Casual Gaming.',
          en: 'Helped arrange social gatherings for students, kids and youth through my student association at NTNU. Most noteworthy TrøndeLAN with 300 participants in 2021. Part of the management and admission committe.'
        },
      },
    ],
  },
  skills: {
    title: {
      no: 'Ferdigheter',
      en: 'Skills'
    },
    entries: [
      {
        icon: reactIcon,
        name: 'React',
      },
      {
        icon: typeScriptIcon,
        name: 'TypeScript',
      },
      {
        icon: astroIcon,
        name: 'Astro',
      },
      {
        icon: nodeJsIcon,
        name: 'Node.js',
      },
      {
        icon: pythonIcon,
        name: 'Python',
      },
      {
        icon: kotlinIcon,
        name: 'Kotlin',
      },
      {
        icon: awsIcon,
        name: 'AWS',
      },
      {
        icon: azureIcon,
        name: 'Azure',
      },
      {
        icon: dotNetIcon,
        name: '.NET',
      },
      {
        icon: gitIcon,
        name: 'Git',
      },
      {
        icon: postgresIcon,
        name: 'Postgres',
      },
      {
        icon: firebaseIcon,
        name: 'Firebase',
      },
      {
        icon: socketIoIcon,
        name: 'Socket.IO',
      },
      {
        icon: threeJsIcon,
        name: 'THREE.js',
      },
    ],
  },
};
