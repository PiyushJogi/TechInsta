import { users } from "./users";
export const posts = [
    {
        postimgurl:'https://i.imgur.com/TQ0CqZA.jpeg',
        likes:376,
        caption:'Enjoying React Native',
        username:users[0].user,
        userimage:users[0].image,
        comments:[
            {
               user:'Deepak Singh',
               comment:'Very Interesting post',
            },
            {
                user:'Ajay Kumar',
                comment:'We can achieve it.Keep Working.', 
            }
        ],
    },
    {
        postimgurl:'https://i.imgur.com/xDt7tqS.jpeg',
        likes:376,
        caption:'Enjoying React Native',
        username:users[0].user,
        userimage:users[0].image,
        comments:[
            {
               user:'Deepak Singh',
               comment:'Very Interesting post',
            },
            {
                user:'Ajay Kumar',
                comment:'We can achieve it.Keep Working.', 
            }
        ],
    },
    {
        postimgurl:'https://i.imgur.com/dxjd7FB.jpg',
        likes:376,
        caption:'Enjoying React Native',
        username:users[0].user,
        userimage:users[0].image,
        comments:[
            {
               user:'Deepak Singh',
               comment:'Very Interesting post',
            },
            {
                user:'Ajay Kumar',
                comment:'We can achieve it.Keep Working.', 
            }
        ],
    }
];