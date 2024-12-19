import React, { useState } from "react";

export default function FormSplitBill({ selectedFriend, onUpdateBalance }) {
  const [amount, setAmount] = useState("");
  const [myBill, setMyBill] = useState("");
  const [whoPay, setWhoPay] = useState("user");
  const friendBill = amount ? amount - myBill : "";

  function handleSubmit(e) {
    e.preventDefault();
    let updateBalance = 0;
    if (whoPay === "user") {
      updateBalance = Number(friendBill);
    } else {
      updateBalance = -Number(myBill);
    }

    if (updateBalance !== 0) {
      onUpdateBalance(updateBalance);
    }
  }
  return (
    <form action="" className="form-split-bill" onSubmit={handleSubmit}>
      <h2>Patungan bareng {selectedFriend.name}</h2>
      <label htmlFor="">Total Biaya</label>
      <input
        type="text"
        value={amount}
        onChange={(e) =>
          setAmount(Number(e.target.value) > 0 ? e.target.value : "")
        }
      />

      <label htmlFor="">Tagihan Kamu</label>
      <input
        type="text"
        value={myBill}
        onChange={(e) =>
          setMyBill(
            Number(e.target.value) > 0 &&
              Number(e.target.value) < Number(amount)
              ? e.target.value
              : ""
          )
        }
      />

      <label htmlFor="">Tagihan {selectedFriend.name}</label>
      <input type="text" disabled value={friendBill} />

      <label htmlFor="">Ditalangin sama</label>
      <select
        name=""
        id=""
        value={whoPay}
        onChange={(e) => setWhoPay(e.target.value)}
      >
        <option value="user">Kamu</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>

      <button className="button">Tambah</button>
    </form>
  );
}
