import Chat from "./chats";
import Logos from "./logos";

const Nav = () => {
  return (
    <aside className="bg-chats max-w-3/4 min-w-72 p-4">
      <Logos />
      <Chat />
    </aside>
  );
};

export default Nav;
