import { useState } from "react";
import FormAddFriend from "./components/FormAddFriend";
import FormSplitBill from "./components/FormSplitBill";
import FriendList from "./components/FriendList";

const initialFriends = [
  {
    id: 118836,
    name: "Budi",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sukma",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Parjo",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

function App() {
  const [friends, setFriends] = useState(initialFriends);
  const [showAddFriend, setShow] = useState(false);
  const [selectedFriend, setSelected] = useState(null);

  function handleShowAddFriend() {
    setShow((showAddFriend) => !showAddFriend);
    setSelected(null);
  }

  function handleAddFriend(newFriend) {
    setFriends((friends) => [...friends, newFriend]);
    setShow(false);
  }

  function handleSelectedFriend(friend) {
    setSelected((selected) => (selected?.id === friend.id ? null : friend));
    setShow(false);
  }

  function handleUpdateBalance(balance) {
    setFriends((friends) =>
      friends.map((friend) =>
        friend.id === selectedFriend.id
          ? { ...friend, balance: friend.balance + balance }
          : friend
      )
    );
    setSelected(null);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendList
          friends={friends}
          onSelected={handleSelectedFriend}
          selectedFriend={selectedFriend}
        />
        {showAddFriend && <FormAddFriend onAddFriend={handleAddFriend} />}
        <button className="button" onClick={handleShowAddFriend}>
          {showAddFriend ? "Tutup" : "Tambah Teman"}
        </button>
      </div>
      {selectedFriend && (
        <FormSplitBill
          selectedFriend={selectedFriend}
          onUpdateBalance={handleUpdateBalance}
          key={selectedFriend.id}
        />
      )}
    </div>
  );
}

export default App;
