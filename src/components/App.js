import { useState } from 'react';
import { initialFriends } from '../constants/initialFriends';
import Button from './Button';
import FormAddFriend from './FormAddFriend';
import FormSplitBill from './FormSplitBill';
import FriendsList from './FriendsList';

export default function App() {
	const [showAddFriend, setShowAddFriend] = useState(false);
	const [friends, setFriends] = useState(initialFriends);
	const [selectedFriend, setSelectedFriend] = useState(null);

	function handleShowAddFriend() {
		setShowAddFriend((show) => !show);
	}

	function handleAddFriend(friend) {
		setFriends((friends) => [...friends, friend]);
		setShowAddFriend(false);
	}

	function handleSelectFriend(friend) {
		setSelectedFriend((cur) => (cur?.id === friend.id ? null : friend));
		setShowAddFriend(false);
	}

	function handleSplitBill(value) {
		setFriends((friends) =>
			friends.map((friend) => (friend.id === selectedFriend.id ? { ...friend, balance: friend.balance + value } : friend)),
		);
		setSelectedFriend(null);
	}

	return (
		<div className="app">
			<div className="sidebar">
				<FriendsList friends={friends} selectedFriend={selectedFriend} onSelectFriend={handleSelectFriend} />

				{showAddFriend && <FormAddFriend onAddFriend={handleAddFriend} />}

				<Button onClick={handleShowAddFriend}>{showAddFriend ? 'Close' : 'Add Friend'}</Button>
			</div>

			{selectedFriend && <FormSplitBill friend={selectedFriend} onSplitBill={handleSplitBill} />}
		</div>
	);
}
