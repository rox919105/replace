let store = {
    _state: {

        profilePage : {
            postData : [
                {id: 1, message: 'qweqwe', like: 15},
                {id: 2, message: 'asdasd', like: 21},
                {id: 3, message: 'left', like: 28},
                {id: 4, message: 'all', like: 20},
                {id: 5, message: 'no', like: 11},
            ],
    
            newPostText : 'All Right',  
        },
        
        dialogsPage : {
            personsData : [
                { id: 1, name: 'Andrew' },
                { id: 2, name: 'Nate' },
                { id: 3, name: 'Bot' },
                { id: 4, name: 'Rox' },
                { id: 5, name: 'Bunny' },
                { id: 6, name: 'Pukan' },
                { id: 7, name: 'Pukach' },
                { id: 8, name: 'Puk' },
            ],
    
            messageData : [
                { message: 'hey' },
                { message: 'Allright' },
                { message: 'Eija' },
                { message: 'EEEEE' },
                { message: 'TTTTTTGGGG' },
                { message: 'QQQQQQQQCVBHHG' },
                { message: 'HHHHHHHHHHV' },
                { message: 'HTRTRRRRRRRRRRRD' }
            ],
        },
          
    
    
        testPage : {
            Struct : [
                {id: 1, name: 'Дермiще'},
                {id: 2, name: 'Гiмножек'},
                {id: 3, name: 'Гiмноканал'},
                {id: 4, name: 'Puka'},
                {id: 5, name: 'koko'},
                {id: 6, name: 'Ilalo'},
                {id: 7, name: 'AlaAla'},
              ],
              
                Contacts : [
                {id: 1, adress: 'М. Житомир. вул Жуйка 2 - ', tel: 351254},
                {id: 2, adress: 'М. Житомир. вул Чорновола 17/4 - ', tel: 351254},
                {id: 3, adress: 'М. Житомир. вул ОнА 0 - ', tel: 35123124},
                {id: 4, adress: 'М. Житомир. вул Алала 7 - ', tel: 351254},
                {id: 5, adress: 'М. Житомир. вул Dendragona 1 - ', tel: 351233},
                {id: 6, adress: 'М. Житомир. вул Akra 2 - ', tel: 87351254},
                {id: 7, adress: 'М. Житомир. вул Котовського 93 - ', tel: 308951254}
              ],
        },
      
    },
    getState() {
        return this._state;
    },
    _callSubscriber() {
        console.log('render is not working');
    },
    addPost() {
        debugger
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                like: 0,
            };
            this._state.profilePage.postData.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
    },
    updateNewPostText(newText) {

        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
}


window.store = store;
export default store;