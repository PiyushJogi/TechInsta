import { users } from "./users";
export const posts = [
    {
        postimgurl:'https://i.imgur.com/TQ0CqZA.jpeg',
        likes:45376,
        caption:'Enjoying React Native',
        username:users[0].user,
        userimage:users[0].image,
        comments:[
            {
               user:'Deepak Singh',
               comment:'Very Interesting post',
            },
            {
                user:'Ajay',
                comment:'We can achieve it.Keep Working.', 
            },
            {
                user:'Rajat Kumar Singh',
                comment:'Very educative video for creating mobile apps.Continue this series', 
            }
        ],
    },
    {
        postimgurl:'https://i.imgur.com/xDt7tqS.jpeg',
        likes:183,
        caption:'Building mobile app using React Native. Amazing youtube playlist for creating mobile apps.#React-Native #apps',
        username:users[3].user,
        userimage:users[1].image,
        comments:[
          
        ],
    },
    {
        postimgurl:'https://i.imgur.com/dxjd7FB.jpg',
        likes:2156,
        caption:'Going to Canada.Hurray!',
        username:users[2].user,
        userimage:users[2].image,
        comments:[
            {
               user:'Deepak Singh',
               comment:'Very Interesting post',
            },
        ],
    }
];