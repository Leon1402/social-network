let state = {
    profilePage: {
        posts: [
            { like: 10, dislike: 0, text: "Hello" },
            { like: 20, dislike: 1, text: "How are you" },
            { like: 7, dislike: 5, text: "What are you doing" },
            { like: 3, dislike: 2, text: "Do you know de way???" },
        ]
    },
    dialogsPage: {
        dialogs: [
            { name: "Ivan", id: "0" },
            { name: "Semen", id: "1" },
            { name: "Petr", id: "2" },
            { name: "Kirill", id: "3" },
            { name: "Nastya", id: "4" }
        ],
        messages: [
            { message: 'Hello', id: "0" },
            { message: 'How are you', id: "1" },
            { message: '12345', id: "2" },
            { message: 'qwert', id: "3" },
            { message: 'Do you know de way???', id: "4" },
        ],
    }
}

export default state;