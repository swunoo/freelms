import chat_icon from "../assets/images/icons/chat_gray.png";


export default ChatPanel;

function ChatPanel () {
    return (
        <div className="bg-neutral-800 flex justify-center items-center gap-3 text-neutral-500 md:flex hidden">
            <img src={chat_icon} alt="Chat Icon"/>
            <p>Chat (Coming Soon)</p>
        </div>
    );
}