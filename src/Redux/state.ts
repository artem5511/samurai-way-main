import {rerenderEntireTree} from '../render';

export type MessageType = {
    id: number,
    message: string
}
export type DialogsType = {
    id: number,
    name: string
}
export type PostsType = {
    id: number,
    message: string,
    likesCount: number
}
export type DialogsPageType = {
    messages: Array<MessageType>,
    dialogs: Array<DialogsType>
}
export type ProfilePageType = {
    posts: Array<PostsType>
    newPostText: string
}
export type RootStateType = {
    dialogsPage: DialogsPageType,
    profilePage: ProfilePageType
}
let state: RootStateType = {
    dialogsPage: {
        messages: [
            {id: 1, message: 'HI'},
            {id: 2, message: 'How are You?'},
            {id: 3, message: 'Yo Yo'},
            {id: 4, message: 'How is your kamasutra?'},
            {id: 5, message: 'Yo YO YO'},
            {id: 6, message: 'How is the weather?'}
        ],
        dialogs: [
            {id: 1, name: 'Nata'},
            {id: 2, name: 'Vera'},
            {id: 3, name: 'Eva'},
            {id: 4, name: 'Dimych'},
            {id: 5, name: 'Artur'},
            {id: 6, name: 'Roman'}
        ]
    },
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: 7},
            {id: 2, message: 'It my first post', likesCount: 17},
            {id: 2, message: 'WTF?', likesCount: 117}
        ],
        newPostText: 'it kamas'
    }
}

export let addPost = ()=> {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    updateNewPostText('')
    rerenderEntireTree(state);

}
export let updateNewPostText = (newText: string)=> {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}
export default state;