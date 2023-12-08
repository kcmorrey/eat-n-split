import { useState } from 'react';
import Button from './Button';

export default function FormSplitBill({ friend, onSplitBill }) {
	const [bill, setBill] = useState('');
	const [yourExpense, setYourExpense] = useState('');
	const friendExpense = bill ? bill - yourExpense : '';
	const [payer, setPayer] = useState('user');

	function handleSubmit(e) {
		e.preventDefault();

		if (!bill || !yourExpense) return;
		onSplitBill(payer === 'user' ? friendExpense : -yourExpense);
	}

	return (
		<form className="form-split-bill" onSubmit={handleSubmit}>
			<h2>Split a bill with {friend.name}</h2>
			<label>💰 Bill Value</label>
			<input type="text" value={bill} onChange={(e) => setBill(+e.target.value)} />

			<label>🤷 Your Expense</label>
			<input type="text" value={yourExpense} onChange={(e) => setYourExpense(+e.target.value > bill ? '' : +e.target.value)} />

			<label>💃 {friend.name}'s Expense</label>
			<input type="text" disabled value={friendExpense} />

			<label>🤑 Who is paying the bill?</label>
			<select value={payer} onChange={(e) => setPayer(e.target.value)}>
				<option value="user">You</option>
				<option value="friend">{friend.name}</option>
			</select>

			<Button>Split Bill</Button>
		</form>
	);
}
