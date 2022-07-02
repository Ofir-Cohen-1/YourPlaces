import React from "react";
import UsersList from "../Components/UsersList";

const Users = () => {
  const COUNTRY = [
    {
      id: "ul",
      country: "Baharin",
      body: "Each country may has different types of folks musics. From town to town, village by village this can be changed. Different music instrument or different style of folk music maybe used. Please help us to improve the FolkCloud and send us some folk songs from your country. You can upload folk songs by clicking on 'Post a Song' on the top. Also if you can write an article about folk music of India, we can put your article on folkcloud with your name.",
      songsList: [
        {
          songName: "SUme name",
          songArtist: "Um Kultum",
          songPath:
            "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
          like: 12,
          dislike: 3,
        },
        {
          songName: "SUme name2",
          songArtist: "Um Kultum33",
          songPath:
            "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
          like: 12,
          dislike: 3,
        },
      ],
    },
  ];

//   const country1 = {
//     title: "Baharin",
//     body: "Each country may has different types of folks musics. From town to town, village by village this can be changed. Different music instrument or different style of folk music maybe used. Please help us to improve the FolkCloud and send us some folk songs from your country. You can upload folk songs by clicking on 'Post a Song' on the top. Also if you can write an article about folk music of India, we can put your article on folkcloud with your name.",
//     songsList: [
//       {
//         songName: "SUme name",
//         songArtist: "Um Kultum",
//         songPath:
//           "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
//         like: 12,
//         dislike: 3,
//       },
//       {
//         songName: "SUme name2",
//         songArtist: "Um Kultum33",
//         songPath:
//           "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
//         like: 12,
//         dislike: 3,
//       },
//     ],
//   };
//   const country2 = {
//     title: "בחריין",
//     body: "תיאור על המדינה",
//     songsList: [
//       {
//         songName: "SUme name",
//         songArtist: "Um Kultum",
//         songPath:
//           "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
//         like: 12,
//         dislike: 3,
//       },
//     ],
//   };

  return <UsersList items={COUNTRY} />;
};

export default Users;
