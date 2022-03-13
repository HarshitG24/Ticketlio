const moviesData = [
  {
    posterUrl:
      "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/interstellar2_480x.progressive.jpg?v=1585846823",
    title: "Interstellar",
    description:
      "In Earth's future, a global crop blight and second Dust Bowl are slowly rendering the planet uninhabitable. Professor Brand (Michael Caine), a brilliant NASA physicist, is working on plans to save mankind by transporting Earth's population to a new home via a wormhole. But first, Brand must send former NASA pilot Cooper (Matthew McConaughey) and a team of researchers through the wormhole and across the galaxy to find out which of three planets could be mankind's new home.",
    showTimings: [
      "10:30 AM",
      "10:45 AM",
      "11:30 AM",
      "12:45 PM",
      "01:30 PM",
      "01:45 PM",
      "02:00 PM",
      "02:20 PM",
      "03:30 PM",
      "07:45 PM",
    ],
    theatre: "PVR",
    remainingTickets: "10",
    city: "San Francisco",
  },
  {
    posterUrl:
      "https://m.media-amazon.com/images/M/MV5BMTQ1MjQwMTE5OF5BMl5BanBnXkFtZTgwNjk3MTcyMDE@._V1_.jpg",
    title: "Frozen",
    description:
      "When their kingdom becomes trapped in perpetual winter, fearless Anna (Kristen Bell) joins forces with mountaineer Kristoff (Jonathan Groff) and his reindeer sidekick to find Anna's sister, Snow Queen Elsa (Idina Menzel), and break her icy spell. Although their epic journey leads them to encounters with mystical trolls, a comedic snowman (Josh Gad), harsh conditions, and magic at every turn, Anna and Kristoff bravely push onward in a race to save their kingdom from winter's cold grip.",
    showTimings: [
      "11:30 AM",
      "11:45 AM",
      "12:30 PM",
      "12:45 PM",
      "01:30 PM",
      "01:45 PM",
      "02:10 PM",
      "05:35 PM",
      "08:30 PM",
      "10:00 PM",
    ],
    theatre: "PVR",
    remainingTickets: "12",
    city: "Boston",
  },
  {
    posterUrl:
      "https://m.media-amazon.com/images/M/MV5BMTQ5NjQ0NDI3NF5BMl5BanBnXkFtZTcwNDI0MjEzMw@@._V1_.jpg",
    title: "Pursuit of the happyness",
    description:
      "Life is a struggle for single father Chris Gardner (Will Smith). Evicted from their apartment, he and his young son (Jaden Christopher Syre Smith) find themselves alone with no place to go. Even though Chris eventually lands a job as an intern at a prestigious brokerage firm, the position pays no money. The pair must live in shelters and endure many hardships, but Chris refuses to give in to despair as he struggles to create a better life for himself and his son.",
    showTimings: [
      "11:30 AM",
      "11:45 AM",
      "12:30 PM",
      "12:45 PM",
      "01:30 PM",
      "01:45 PM",
      "02:10 PM",
      "05:35 PM",
      "08:30 PM",
      "10:00 PM",
    ],
    theatre: "IBIS",
    remainingTickets: "12",
    city: "Boston",
  },
  {
    posterUrl:
      "https://lumiere-a.akamaihd.net/v1/images/p_walle_19753_69f7ff00.jpeg",
    title: "Walle",
    description:
      "WALL-E, short for Waste Allocation Load Lifter Earth-class, is the last robot left on Earth. He spends his days tidying up the planet, one piece of garbage at a time. But during 700 years, WALL-E has developed a personality, and he's more than a little lonely. Then he spots EVE (Elissa Knight), a sleek and shapely probe sent back to Earth on a scanning mission. Smitten WALL-E embarks on his greatest adventure yet when he follows EVE across the galaxy.",
    showTimings: [
      "11:30 AM",
      "11:45 AM",
      "12:30 PM",
      "12:45 PM",
      "01:30 PM",
      "01:45 PM",
      "02:10 PM",
      "05:35 PM",
      "08:30 PM",
      "10:00 PM",
    ],
    theatre: "INOX",
    remainingTickets: "12",
    city: "Boston",
  },
];

const sportsData = [
  {
    sportCategory: "Football",
    sportMatchesData: [
      {
        matchName: "Man City vs Sporting",
        matchTime: "12:00 PM onwards",
        seatsLeft: "176",
        matchDay: "March 9, 2022",
        location: "San Francisco",
        imageUrl:
          "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/soccer-night-video-match-template-design-d3776b1ef4a2b7abb011d1d8e7f56d38_screen.jpg?ts=1599553534",
      },
      {
        matchName: "Real Madrid vs PSG",
        matchTime: "11:45 AM onwards",
        seatsLeft: "300",
        matchDay: "March 21, 2022",
        location: "Boston",
        imageUrl:
          "https://img.pikbest.com/01/43/22/61tpIkbEsTVEI.jpg-1.jpg!bw700",
      },
      {
        matchName: "Barcelona vs Galatasaray",
        matchTime: "18:00 PM onwards",
        seatsLeft: "786",
        matchDay: "April 12, 2022",
        location: "San Francisco",
        imageUrl:
          "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/soccer-game-poster-template-48162aedb0b6cfcd112d3bd44ad3453b_screen.jpg?ts=1636972116",
      },
    ],
  },
  {
    sportCategory: "Rugby",
    sportMatchesData: [
      {
        matchName: "Team A vs Team B",
        matchTime: "13:00 PM onwards",
        seatsLeft: "234",
        matchDay: "May 24, 2022",
        location: "San Francisco",
        imageUrl:
          "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/rugby-game-match-tournament-poster-template-b997c16547fd1c00524a36a724b0917f_screen.jpg?ts=1636974292",
      },
      {
        matchName: "Rebels vs Chasels",
        matchTime: "10:00 AM onwards",
        seatsLeft: "10",
        matchDay: "March 10, 2022",
        location: "San Francisco",
        imageUrl:
          "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/rugby-game-poster-template-9d12fe171aae4fc9451912439ce7c6d2_screen.jpg?ts=1636979489",
      },
      {
        matchName: "Wales vs France",
        matchTime: "16:00 PM onwards",
        seatsLeft: "99",
        matchDay: "June 12, 2022",
        location: "Los Angeles",
        imageUrl:
          "https://st.depositphotos.com/1000195/2770/v/950/depositphotos_27707405-stock-illustration-american-football-and-rugby-game.jpg",
      },
    ],
  },
  {
    sportCategory: "Ping Pong",
    sportMatchesData: [
      {
        matchName: "Brozek vs Rejent",
        matchTime: "18:00 PM onwards",
        seatsLeft: "123",
        matchDay: "July 24, 2022",
        location: "Boston",
        imageUrl:
          "https://atholreccentre.files.wordpress.com/2013/03/ping-pong-poster.png",
      },
      {
        matchName: "Hejda vs Puk",
        matchTime: "09:00 AM onwards",
        seatsLeft: "400",
        matchDay: "June 12, 2022",
        location: "Seattle",
        imageUrl:
          "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/table-tennis-tournament-flyer-design-template-2d6f868076d69749fc9bde486f30073c_screen.jpg?ts=1636992596",
      },
      {
        matchName: "Marat vs Fiklik",
        matchTime: "20:00 PM onwards",
        seatsLeft: "298",
        matchDay: "April 12, 2022",
        location: "Atlanta",
        imageUrl:
          "https://fitpong.ca/sites/default/files/April_23_TABLETENNIS.jpg",
      },
    ],
  },
];

const hackathonData = [
  {
    title: "Pubmatic Hackathon",
    description:
      "A hackathon is a design sprint-like event, in which often computer programmers and others involved in software development, including graphic designers, interface designers, product managers, project managers, domain experts, and others collaborate intensively on software projects.",
    duration: "2 Days",
    date: "March 15, 2022 to March 16, 2022",
    location: "San Francisco",
    posterUrl:
      "https://mir-s3-cdn-cf.behance.net/project_modules/fs/f35ee593213265.5e5f0394bc88b.jpg",
  },
  {
    title: "NYUAD Hackathon",
    description:
      "We are excited to announce the 10th annual NYUAD Hackathon for Social Good which will focus on one of the most promising technologies of our time, Quantum Computing (QC). We will form cross-disciplinary global teams building solutions to challenging problems we are facing today using Quantum Computing technologies.",
    duration: "6 Days",
    date: "April 21, 2022 to March 26, 2022",
    location: "Boston",
    posterUrl: "https://pbs.twimg.com/media/EVqzx6bX0AAKGmj.jpg",
  },
  {
    title: "Code Hackathon",
    description:
      "A hackathon is a design sprint-like event, in which often computer programmers and others involved in software development, including graphic designers, interface designers, product managers, project managers, domain experts, and others collaborate intensively on software projects.",
    duration: "1 Day",
    date: "May 5, 2022 to May 6, 2022",
    location: "Atlanta",
    posterUrl:
      "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/code-hackathon-event-poster-design-template-d7c8ddfd12e11fd2b9c6b70241626091_screen.jpg?ts=1567076214",
  },
];

const options = [
  {
    value: "1",
    imageText: "Customer Support",
  },
  {
    value: "2",
    imageText: "Subscribe Us",
  },
  {
    value: "3",
    imageText: "Cancellation Policy",
  },
];

const linkData = [
  {
    title: "Partnerships",
    options: ["Websites", "Social Media", "Branding"],
  },
  {
    title: "About Us",
    options: ["Our Projects", "Careers"],
  },
  {
    title: "Legal",
    options: ["Terms & Conditions", "Privacy Policy", "Terms of Use"],
  },
  {
    title: "Careers",
    options: ["Developer", "Marketing"],
  },
];

const theatres = ["PVR", "INOX", "IBIS"];

const cities = [
  'Please select a city',
  'San Francisco',
  'Boston',
  'Seattle',
  'New York',
  'Atlanta'
]

export {moviesData, sportsData, hackathonData, options, linkData, theatres, cities};