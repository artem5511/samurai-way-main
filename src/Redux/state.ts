

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

// export let updateNewPostText = (newText: string)=> {
//     state.profilePage.newPostText = newText;
//     renderTree();
// }

export type StoreType = {
    _state:  RootStateType,
    updateNewPostText: (newText: string) => void,
    addPost: (postMessage: string) => void,
    _renderTree: () => void,
    subscribe: (callback: () => void) => void,
    getState: () => RootStateType
}

const store: StoreType = {
    _state: {
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
    },
    updateNewPostText(newText: string) {
        this._state.profilePage.newPostText = newText;
        this._renderTree();
    },
    addPost () {
        debugger;
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this.updateNewPostText('')
        this._renderTree();
    },
    _renderTree () {
        console.log('state')
    },
    subscribe (callback: () => void) {
        this._renderTree = callback;
    },
    getState () {
        return this._state;
    }
}

// export const subscribe = () => {
//     renderTree = observer;
// }

export default store;