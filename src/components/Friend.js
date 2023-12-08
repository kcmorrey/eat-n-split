import Button from './Button';

export default function Friend({ friend, selectedFriend, onSelectFriend }) {
	const isSelected = selectedFriend?.id === friend.id;

	function handleSelectFriend() {
		onSelectFriend(friend);
	}

	return (
		<li className={isSelected ? 'selected' : ''}>
			<img src={friend.image} alt={friend.name} />
			<h3>{friend.name}</h3>
			{friend.balance < 0 && (
				<p className="red">
					You owe {friend.name} ${Math.abs(friend.balance)}
				</p>
			)}
			{friend.balance > 0 && (
				<p className="green">
					{friend.name} owes you ${Math.abs(friend.balance)}
				</p>
			)}
			{friend.balance === 0 && <p>You and {friend.name} are even</p>}
			<Button onClick={handleSelectFriend}>{selectedFriend?.id === friend.id ? 'Close' : 'Select'}</Button>
		</li>
	);
}
