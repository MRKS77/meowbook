const ADD_MESSAGE = "chat/ADD-MESSAGE";
// const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";
// const DELETE_NEW_MESSAGE_TEXT = "DELETE-NEW-MESSAGE-TEXT";

let initialState = {
  messages: [
    { id: 0, user: "from", text: "Hello" },
    { id: 1, user: "to", text: "Heyyy" },
    { id: 2, user: "from", text: "How are you?" },
    { id: 3, user: "from", text: "Where is my pizza?" },
    { id: 4, user: "to", text: "I ate it, sorry" },
    { id: 5, user: "from", text: "You are eating pizzas every kitten time!!!" },
    { id: 6, user: "from", text: "Stop doing that" },
    { id: 7, user: "to", text: "Never" },
  ],
  dialogs: [
    {
      id: 0,
      name: "John",
      avatar: "https://bipbap.ru/wp-content/uploads/2017/08/4-35.jpg",
    },
    {
      id: 1,
      name: "Sophia",
      avatar: "http://hypeava.ru/uploads/posts/2018-04/1523649151_1.jpg",
    },
    {
      id: 2,
      name: "Rick",
      avatar:
        "https://i.pinimg.com/736x/3f/47/b3/3f47b39a801290271ad789d1ecc053cc.jpg",
    },
    {
      id: 3,
      name: "Tanya",
      avatar:
        "https://avatarko.ru/img/kartinka/2/zhivotnye_kot_galstuk_1881.jpg",
    },
    {
      id: 4,
      name: "Mini",
      avatar: "https://meragor.com/files/styles//ava_800_800_wm/1_9.jpg",
    },
    {
      id: 5,
      name: "Bob",
      avatar:
        "https://demotivation.ru/wp-content/uploads/2020/08/unnamed-1.jpg",
    },
    {
      id: 6,
      name: "Louis",
      avatar:
        "https://i1.wp.com/andrey-eltsov.ru/wp-content/uploads/2017/09/SmehAva10.jpg",
    },
    {
      id: 7,
      name: "Nastya",
      avatar: "https://meragor.com/files/styles//ava_800_800_wm/_2_9.jpg",
    },
  ],
  // newMessageText: "",
};

const chatReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      let newMessage = {
        id: state.messages.length,
        user: "to",
        text: action.message,
      };
      return {
        ...state,
        messages: [...state.messages, newMessage]
      };

    // case UPDATE_NEW_MESSAGE_TEXT:
    //   return {
    //     ...state,
    //     newMessageText: action.newMessage,
    //   };

    // case DELETE_NEW_MESSAGE_TEXT:
    //   return {
    //     ...state,
    //     newMessageText: "",
    //   };

    default:
      return state;
  }
};

export const addMessageActionCreator = (message) => ({ type: ADD_MESSAGE, message });
// export const updateNewMessageTextActionCreator = (text) => ({
//   type: UPDATE_NEW_MESSAGE_TEXT,
//   newMessage: text,
// });
// export const deleteNewMessageTextActionCreator = () => ({
//   type: DELETE_NEW_MESSAGE_TEXT,
// });

export default chatReducer;
