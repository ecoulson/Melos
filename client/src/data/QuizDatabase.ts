import IQuiz from "./IQuiz";
import Region from "./Region";

interface IQuizDatabase {
  quizzes: IQuiz[];
}

const Database: IQuizDatabase = {
  quizzes: [
    {
      id: "27892fba-1611-4700-a1f9-feb83aaaabdc",
      name: "Listenting Quiz #1",
      regions: [
        Region.SubsaharanAfrica,
        Region.MiddleEast,
        Region.EasternEurope,
      ],
      files: [
        {
          path: "./audio/ee8.mp3",
          title: "Sirba Nuntasilor",
          countryOfOrigin: "Romania",
          attributes: [],
        },
        {
          path: "./audio/ee9.mp3",
          title: "Harom Magyar Nepdal",
          countryOfOrigin: "Hungary",
          attributes: [],
        },
        {
          path: "./audio/ee10.mp3",
          title: "Aj ke sostar mange [What is my young life for?]",
          countryOfOrigin: "Hungary",
          attributes: [],
        },
        {
          path: "./audio/ee12.mp3",
          title: "Krivo Horo [Crooked Dance]",
          countryOfOrigin: "Bulgaria",
          attributes: [],
        },
        {
          path: "./audio/ee13.mp3",
          title: "Dilmano, Dilbero",
          countryOfOrigin: "Bulgaria",
          attributes: [],
        },
        {
          path: "./audio/ee14.mp3",
          title: "Polegnala e Todora [Theodora is sleeping]",
          countryOfOrigin: "Bulgaria",
          attributes: [],
        },
        {
          path: "./audio/ee15.mp3",
          title: "Play, Skomoroshek",
          countryOfOrigin: "Russia",
          attributes: [],
        },
        {
          path: "./audio/me12.mp3",
          title: "Aamedat el Karnak [The Pillars at Karnak]",
          countryOfOrigin: "Egypt",
          attributes: [],
        },
        {
          path: "./audio/me13.mp3",
          title: "Waslah in Maqam Huzam",
          countryOfOrigin: "Lebanon",
          attributes: [],
        },
        {
          path: "./audio/me14.mp3",
          title: "Dastgah Mahur",
          countryOfOrigin: "Iran",
          attributes: [],
        },
        {
          path: "./audio/me15.mp3",
          title: "Kayfa Marat [How do hearts own you?]",
          countryOfOrigin: "Egypt",
          attributes: [],
        },
        {
          path: "./audio/me16.mp3",
          title: "Fire Dance",
          countryOfOrigin: "Egypt",
          attributes: [],
        },
        {
          path: "./audio/me17.mp3",
          title: "Fire Dance",
          countryOfOrigin: "Egypt",
          attributes: [],
        },
        {
          path: "./audio/me18.mp3",
          title:
            "Hava Netze Bamachol/El Ginat Egoz/Hora Eylat (Let Us Go to the Dance/To the Garden of Walnut/The Hora of Eylat)",
          countryOfOrigin: "Israel",
          attributes: [],
        },
        {
          path: "./audio/me19.mp3",
          title: "Rumenisher Doyne",
          countryOfOrigin: "USA",
          attributes: [],
        },
        {
          path: "./audio/ssa11.mp3",
          title: "Atsia Suite (Hatsiatsia and Circle Atsia)",
          countryOfOrigin: "Ghana",
          attributes: [],
        },
        {
          path: "./audio/ssa15.mp3",
          title: "Donno drummers",
          countryOfOrigin: "Ghana",
          attributes: [],
        },
        {
          path: "./audio/ssa16.mp3",
          title: "Yundum Nko",
          countryOfOrigin: "Senegal",
          attributes: [],
        },
        {
          path: "./audio/ssa17.mp3",
          title: "	Honey Gathering Song",
          countryOfOrigin: "Democratic Republic Of Congo (Zaire)",
          attributes: [],
        },
        {
          path: "./audio/ssa18.mp3",
          title: "Nhemamusasa",
          countryOfOrigin: "Zimbabwe",
          attributes: [],
        },
        {
          path: "./audio/ssa20.mp3",
          title: "No Buredi [No bread]",
          countryOfOrigin: "Nigeria",
          attributes: [],
        },
      ],
    },
    {
      id: "5de1a472-c1e7-431b-acd0-c650690af1ae",
      name: "Listenting Quiz #2",
      regions: [Region.LatinAmerica, Region.India, Region.SouthAsia],
      files: [
        {
          path: "./audio/isa14.mp3",
          title: "Nat Sharif",
          countryOfOrigin: "Pakistan",
          attributes: [],
        },
      ],
    },
    {
      id: "2206a5ff-600d-4a83-bca2-8a1ef5c1ecdf",
      name: "Listenting Quiz #3",
      regions: [Region.China, Region.Japan, Region.Indonesia],
      files: [
        {
          path: "./audio/c7.mp3",
          title: "Ping sha lo yen [Wild Geese Descending onto the Sandbank]",
          countryOfOrigin: "China",
          attributes: [],
        },
      ],
    },
  ],
};

export default Database;
