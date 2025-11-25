import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Logo, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Marine",
  lastName: "Rapin",
  name: `Marine Rapin`,
  role: "Alternante Data Engineer",
  avatar: "/images/avatar.jpg",
  email: "example@gmail.com",
  location: "Europe/Paris", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["Français", "Anglais"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/Malice776",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/marine-rapin-105095150/",
  },
  // {
  //   name: "Threads",
  //   icon: "threads",
  //   link: "https://www.threads.com/@once_ui",
  // },
  // {
  //   name: "Email",
  //   icon: "email",
  //   link: `mailto:${person.email}`,
  // },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio qui montre mon travail`,
  headline: <>Mon portfolio !</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Dernier article
        </Text>
        <Line background="brand-alpha-strong" vert height="20" />
      </Row>
    ),
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
      Bienvenue dans mon portfolio : un espace où se rencontrent mes projets scolaires et mes explorations personnelles.  
      {/* <Logo
        dark
        icon="/trademarks/wordmark-dark.svg"
        style={{ display: "inline-flex", top: "0.25em", marginLeft: "-0.25em" }}
      /> */}
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "A propos",
  title: `A propos – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
  description: (
    <>
      Je suis passionné par l'IA et la data.<br />
      J'adore analyser, comprendre et exploiter les données. Mon objectif est de donner du sens aux données et de développer des Site qui font vraiment la différence.
    </>
  ),

  },
  work: {
    display: true, // set to false to hide this section
    title: "Experience professionelle",
    experiences: [
      {
        company: "AXA IM part of BNP",
        timeframe: "2024 - Present",
        role: "Alternante Data Engineer",
        achievements: [
          <>
            je travaille sur la gestion et la migration des bases de données vers de nouveaux systèmes, en assurant la qualité et la sécurité des données tout au long du processus.
          </>,
          <>
            Je développe et automatise des scripts pour Windows en utilisant des language tels que PowerShell, STL, Batch et AWK, ce qui permet d’optimiser les flux de travail et d’améliorer l’efficacité des opérations de données.
          </>,
        ],
        images: [
          // // optional: leave the array empty if you don't want to display images
          // {
          //   src: "/images/projects/project-01/cover-01.jpg",
          //   alt: "Once UI Project",
          //   width: 16,
          //   height: 9,
          // },
        ],
      },
      {
        company: "Mega International",
        timeframe: "juin - aout 2023",
        role: "Stagiaire Solutions Engineer",
        achievements: [
          <>
            Participation aux projets techniques et fonctionnels, incluant le développement de sites intranet et la gestion des données sur la plateforme Mega Hopex.
          </>,
          <>
            Réalisation également de traductions de documentation technique du français vers l’anglais et inversement.
          </>,
        ],
        images: [],
      },

      {
        company: "Centre de recherceh saint-Antoine",
        timeframe: "Octobre 2023",
        role: "Stagiaire Médiatrice scientifique",
        achievements: [
          <>
            Participation à la Fête de la Science en contribuant à la création et à l’animation d’un stand de médiation scientifique sur le thème de la santé.
          </>,
          <>
            Sensibilisation du grand public aux avancées scientifiques et technologiques dans le domaine de la santé à travers des activités interactives et éducatives.
          </>,
          <>
            Accompagnement d’une classe de ST2S pour visite de découverte du centre de recherche.
          </>,
        ],
        images: [],
      },

      // {
      //   company: "Leclerc",
      //   timeframe: "été 2022 & été 2024",
      //   role: "Hote de caisse",
      //   achievements: [
      //     <>
      //        Gestion d'une caisse, participation au rayonnage et hote de caisse automatique.
      //     </>,

      //   ],
      //   images: [],
      // },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Etudes",
    institutions: [
      {
        name: "Ipssi",
        description: <>Mastère en Big Data, Data et IA.</>,
      },
      {
        name: "Sorbonne sciences",
        description: <>Licence en informatique, mineur communication et médiation scientifique.</>,
      },
      {
        name: "Lycée Martin Luther King",
        description: <>Baccalalauréat (STI2D) Sciences technologies et de l'industrie du développement durable Mention Bien, major de classe.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Compétences Techniques",
    skills: [
      {
        title: "Gestion de bases de données : SQL, NoSQL, MongoDB, PostgreSQL",
        description: (
          <>Conception, gestion et optimisation de bases de données relationnelles et NoSQL, notamment MongoDB et PostgreSQL, pour assurer la qualité, la performance et la sécurité des données.</>
        ),
        tags: [
          {
            name: "STL",
            icon: "STL",
          },
          {
            name: "MongoDB",
            icon: "MongoDB",
          },
          {
            name: "PostgreSQL",
            icon: "PostgreSQL",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          // {
          //   src: "/images/projects/project-01/cover-02.jpg",
          //   alt: "Project image",
          //   width: 16,
          //   height: 9,
          // },
          // {
          //   src: "/images/projects/project-01/cover-03.jpg",
          //   alt: "Project image",
          //   width: 16,
          //   height: 9,
          // },
        ],
      },
      {
        title: "Création de site WEBs",
        description: (
          <>Développement de sites web modernes et interactifs en utilisant HTML5, CSS3, JavaScript et des frameworks tels que React, Next.js, Django</>
        ),
        tags: [
          {
            name: "JavaScript",
            icon: "javascript",
          },
          {
            name: "Next.js",
            icon: "nextjs",
          },
          {
            name: "HTML.js",
            icon: "HTML",
          },
          {
            name: "CSS.js",
            icon: "CSS",
          },
          {
            name: "Django",
            icon: "Django",
          },
          {
            name: "React",
            icon: "React",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [

        ],
      },  
      {
        title: "Intelligence Artificielle et Machine Learning",
        description: (
          <>Conception et déploiement de modèles d’intelligence artificielle et de machine learning, incluant les réseaux de neurones et les modèles de type LLM, pour analyser et exploiter les données de manière avancée.</>
        ),
        tags: [
              { name: "IA", icon: "ai" },
              { name: "Machine Learning", icon: "machine-learning" },
              { name: "Deep Learning", icon: "deep-learning" },
              { name: "LLM", icon: "llm" },
              { name: "TensorFlow", icon: "tensorflow" },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
        ],
      },  
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projets - ${person.name}`,
  description: `tout les projet realisé par ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Collection de photos – ${person.name}`,
  description: `collection de photos des projet de ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
