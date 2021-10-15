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
          path: "./audio/isa9.mp3",
          title: "Hazrat Turkaman",
          countryOfOrigin: "North India",
          attributes: [],
        },
        {
          path: "./audio/isa10.mp3",
          title: "Raga Khamaj (beginning)",
          countryOfOrigin: "India",
          attributes: [],
        },
        {
          path: "./audio/isa11.mp3",
          title: "Raga Khamaj (conclusion)",
          countryOfOrigin: "India",
          attributes: [],
        },
        {
          path: "./audio/isa12.mp3",
          title: "Excerpt from Raga Shadvidha Margini",
          countryOfOrigin: "South India",
          attributes: [],
        },
        {
          path: "./audio/isa13.mp3",
          title: "Ninnadanela by Tyagaraja (excerpt)",
          countryOfOrigin: "South India",
          attributes: [],
        },
        {
          path: "./audio/isa14.mp3",
          title: "Nat Sharif",
          countryOfOrigin: "Pakistan",
          attributes: [],
        },
        {
          path: "./audio/isa15.mp3",
          title:
            "Excerpt from Chor Poreche Babur Bagane [A thief fell upon the master's garden]",
          countryOfOrigin: "Bengal",
          attributes: [],
        },
        {
          path: "./audio/isa16.mp3",
          title: "Dil Cheez Kya Hai [What is a Heart?]",
          countryOfOrigin: "India",
          attributes: [],
        },
        {
          path: "./audio/isa17.mp3",
          title: "Oregon",
          countryOfOrigin: "USA",
          attributes: [],
        },
        {
          path: "./audio/la1.mp3",
          title: "El Choclo [Lit. The Ear of Corn, Eng. version Kiss of Fire]",
          countryOfOrigin: "Argentina",
          attributes: [],
        },
        {
          path: "./audio/la2.mp3",
          title: "Llegada [Arrival]",
          countryOfOrigin: "Parguay",
          attributes: [],
        },
        {
          path: "./audio/la3.mp3",
          title: "Siquisiri",
          countryOfOrigin: "Mexico",
          attributes: [],
        },
        {
          path: "./audio/la4.mp3",
          title: "Baile",
          countryOfOrigin: "Mexico",
          attributes: [],
        },
        {
          path: "./audio/la5.mp3",
          title: "Eleggua",
          countryOfOrigin: "Cuba",
          attributes: [],
        },
        {
          path: "./audio/la6.mp3",
          title: "Veinte Años",
          countryOfOrigin: "Cuba",
          attributes: [],
        },
        {
          path: "./audio/la7.mp3",
          title: "Tumba y bongó",
          countryOfOrigin: "Cuba",
          attributes: [],
        },
        {
          path: "./audio/la8.mp3",
          title: "Amazônia",
          countryOfOrigin: "Brazil",
          attributes: [],
        },
        {
          path: "./audio/la9.mp3",
          title: "Ritmo",
          countryOfOrigin: "Brazil",
          attributes: [],
        },
        {
          path: "./audio/la10.mp3",
          title: "Ponta de Lança Africano (Umbabarauma)",
          countryOfOrigin: "Brazil",
          attributes: [],
        },
        {
          path: "./audio/la11.mp3",
          title: "Morena, Morena [The Dark Woman]",
          countryOfOrigin: "Brazil",
          attributes: [],
        },
        {
          path: "./audio/la12.mp3",
          title: "Excerpt from Palomita torkasita",
          countryOfOrigin: "Peru",
          attributes: [],
        },
        {
          path: "./audio/la13.mp3",
          title: "Yawar mallcu",
          countryOfOrigin: "Bolivia",
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
          path: "./audio/c2.mp3",
          title: "Kao shan liu shui [High Mountains and Flowing Water]",
          countryOfOrigin: "China",
          attributes: [],
        },
        {
          path: "./audio/c3.mp3",
          title: "Shi mian mai fu [Ambush from Ten Sides]",
          countryOfOrigin: "China",
          attributes: [],
        },
        {
          path: "./audio/c4.mp3",
          title:
            "Excerpt from Yang-kuan san tieh [Three repetitions at Yang-kuan]",
          countryOfOrigin: "China",
          attributes: [],
        },
        {
          path: "./audio/c5.mp3",
          title:
            "Excerpt from Lao sen saqo tien [Old Monk Sweeping the Buddhist Temple]",
          countryOfOrigin: "China",
          attributes: [],
        },
        {
          path: "./audio/c6.mp3",
          title: "Excerpt from Beyond the Great Wall",
          countryOfOrigin: "China",
          attributes: [],
        },
        {
          path: "./audio/c7.mp3",
          title: "Ping sha lo yen [Wild Geese Descending onto the Sandbank]",
          countryOfOrigin: "China",
          attributes: [],
        },
        {
          path: "./audio/c9.mp3",
          title: "An Island in the Sea",
          countryOfOrigin: "China",
          attributes: [],
        },
        {
          path: "./audio/c10.mp3",
          title: "A Stroll in New Town",
          countryOfOrigin: "China",
          attributes: [],
        },
        {
          path: "./audio/j1.mp3",
          title: "Daiwa gaku by Jin Nyodo (1891-1966)",
          countryOfOrigin: "Japan",
          attributes: [],
        },
        {
          path: "./audio/j2.mp3",
          title: "Excerpt from Ise-Dai Kagura [Grand Festival of Ise]",
          countryOfOrigin: "Japan",
          attributes: [],
        },
        {
          path: "./audio/j5.mp3",
          title: "Etenraku, Nokorigaku Sanben",
          countryOfOrigin: "Japan",
          attributes: [],
        },
        {
          path: "./audio/j6.mp3",
          title:
            "Yatsuhashi Kengyo (1614-1685): Rokudan no shirabe [Study in Six Sections]",
          countryOfOrigin: "Japan",
          attributes: [],
        },
        {
          path: "./audio/j7.mp3",
          title: "Azuma Jishi [The Lion Dance of Jishi]",
          countryOfOrigin: "Japan",
          attributes: [],
        },
        {
          path: "./audio/j9.mp3",
          title: "Excerpt from Mitsu men komori [The Three Masks of Komori]",
          countryOfOrigin: "Japan",
          attributes: [],
        },
        {
          path: "./audio/i2.mp3",
          title: "Pangkur",
          countryOfOrigin: "Indonesia",
          attributes: [],
        },
        {
          path: "./audio/i8.mp3",
          title: "Excerpt from Pangkur (pelog)",
          countryOfOrigin: "Indonesia",
          attributes: [],
        },
        {
          path: "./audio/i9.mp3",
          title: "Excerpt from Srimpi Sangapati",
          countryOfOrigin: "Indonesia",
          attributes: [],
        },
        {
          path: "./audio/i10.mp3",
          title: "Excerpt from Danaraja",
          countryOfOrigin: "Indonesia",
          attributes: [],
        },
        {
          path: "./audio/i11.mp3",
          title: "Gending Pengalang Bebarongan",
          countryOfOrigin: "Indonesia",
          attributes: [],
        },
        {
          path: "./audio/i13.mp3",
          title: "Purana -- Hujan Mas [Golden Rain]",
          countryOfOrigin: "Indonesia",
          attributes: [],
        },
        {
          path: "./audio/i14.mp3",
          title: "Excerpt from Baris",
          countryOfOrigin: "Indonesia",
          attributes: [],
        },
        {
          path: "./audio/i15.mp3",
          title: "Sekar Sungsang",
          countryOfOrigin: "Indonesia",
          attributes: [],
        },
        {
          path: "./audio/i16.mp3",
          title: "Kecak excerpt",
          countryOfOrigin: "Indonesia",
          attributes: [],
        },
        {
          path: "./audio/i17.mp3",
          title: "Gending Sekar Gadung",
          countryOfOrigin: "Indonesia",
          attributes: [],
        },
        {
          path: "./audio/i18.mp3",
          title: "Threnody for Carlos Chávez",
          countryOfOrigin: "Indonesia",
          attributes: [],
        },
      ],
    },
  ],
};

export default Database;
