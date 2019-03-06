// import React, { Component } from "react"
// import ChatCard from "./ChatCard"

// export default class ChatList extends Component {
//     render () {

//         return (
//             <React.Fragment>
//                 <div className="newChatButton">
//                     <button type="button"
//                             onClick={() => this.props.history.push("/chats/new")}
//                             className="btn btn-success">
//                         New Chat Message
//                     </button>
//                 </div>
//                 <section className="chats">
//                 {
//                     this.props.chats.map(message =>
//                         <ChatCard key={message.id} message={message}
//                         {...this.props} history={this.props.history} />
//                     )
//                 }
//                 </section>
//             </React.Fragment>
//         )
//     }
// }
