import React from "react";
import Friend from "./Friend";

export default function FriendList({ friends, onSelected, selectedFriend }) {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend friend={friend} key={friend.id} onSelected={onSelected} selectedFriend={selectedFriend}/>
      ))}
    </ul>
  );
}
