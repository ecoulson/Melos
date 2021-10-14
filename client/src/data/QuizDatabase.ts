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
      ],
    },
    {
      id: "5de1a472-c1e7-431b-acd0-c650690af1ae",
      name: "Listenting Quiz #2",
      regions: [Region.LatinAmerica, Region.India, Region.SouthAsia],
      files: [],
    },
    {
      id: "2206a5ff-600d-4a83-bca2-8a1ef5c1ecdf",
      name: "Listenting Quiz #3",
      regions: [Region.China, Region.Japan, Region.Indonesia],
      files: [],
    },
  ],
};

export default Database;
