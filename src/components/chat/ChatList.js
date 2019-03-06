import React, {Component} from "react"

export default class chatsModule extends Component = {
    buildChatsForm: (chatId) => {
        return `
            <div id="chatsForm">
                <input type="hidden" name="chatId" value="${chatId}"></input>
                Enter your message:</br>
                <textarea rows="4" cols="50" name="chatMessage" id="chat--textInput"></textarea></br>
                <button id="chats--create">Submit</button>
                <button id="chats--cancel">Cancel</button>
            </div>
        `
    },
    buildChatsObject: () => {
        const chatsObject = {}
        chatsObject.text = document.getElementById("chat--textInput").value
        chatsObject.timestamp = parseInt(Date.now())
        chatsObject.userId = parseInt(sessionStorage.getItem('userId'))
        return chatsObject
    },
    buildChatsHTML: (chatObject, username, userId) => {
        const chatTimestamp = timeConverter(chatObject.timestamp)

        let baseHTML = `
            <div class="chats" id="chat--${chatObject.id}">
                <div class="chatTextContent">${chatObject.text}</div>
                <p class="chatSubText">by <span id="${userId}">${username}</span><br/>Posted on ${chatTimestamp}</p>
        `

        if (chatObject.userId === userId) {
            baseHTML += `
                <button id="chats--edit--${chatObject.id}">Edit</button>
            `
        }

        baseHTML += "</div><hr/>"

        return baseHTML
    }
}