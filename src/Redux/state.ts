type MessageType = {
    id: number,
    message: string
}
type DialogsType = {
    id: number,
    name: string
}
type PostsType = {
    id: number,
    message: string,
    likesCount: number
}
type DialogsPageType = {
    messages: Array<MessageType>,
     dialogs: Array<DialogsType>
 }
type ProfilePageType = {
    posts: Array<PostsType>
}
type RootStateType = {
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
        ]
    }
}
export default state;