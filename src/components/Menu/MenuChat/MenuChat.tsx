import { FC } from "react";
import { IMenuChat } from "../../../interfaces/IMenu";
import MenuChatItem from "./MenuChatItem";

interface MenuChatProps {
  menuChats: IMenuChat[];
}

const MenuChat: FC<MenuChatProps> = ({ menuChats }) => {
  return (
    <>
      {menuChats.map((chat) => (
        <MenuChatItem key={chat.id} chat={chat} />
      ))}
    </>
  );
};

export default MenuChat;
