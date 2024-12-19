import React from "react";

export default function Friend({ friend, onSelected, selectedFriend }) {
  return (
    <div>
      <li className={selectedFriend?.id === friend.id ? "selected" : ""}>
        <img src={friend.image} alt={friend.name} />
        <h3>{friend.name}</h3>
        {friend.balance < 0 && (
          <p className="red">
            Kamu berhutang Rp{Math.abs(friend.balance)} ke {friend.name}
          </p>
        )}

        {friend.balance > 0 && (
          <p className="green">
            {friend.name} berhutang Rp{Math.abs(friend.balance)} ke kamu
          </p>
        )}

        {friend.balance === 0 && <p>Tidak ada hutang.</p>}
        <button className="button" onClick={() => onSelected(friend)}>
          {selectedFriend?.id === friend.id ? "Tutup" : "Pilih"}
        </button>
      </li>
    </div>
  );
}
