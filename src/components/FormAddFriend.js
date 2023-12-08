import { useState } from 'react';
import Button from './Button';

export default function FormAddFriend({ onAddFriend }) {
	const defaultImage = 'https://i.pravatar.cc/48';
	const [name, setName] = useState('');
	const [image, setImage] = useState(defaultImage);

	function handleSubmit(e) {
		e.preventDefault();

		if (!name || !image) return;

		const id = crypto.randomUUID();

		const newFriend = {
			name,
			image: `${image}?=${id}`,
			balance: 0,
			id,
		};

		onAddFriend(newFriend);
		setName('');
		setImage(defaultImage);
	}

	return (
		<form className="form-add-friend" onSubmit={handleSubmit}>
			<label>👯‍♀️Friend Name</label>
			<input type="text" value={name} onChange={(e) => setName(e.target.value)} />

			<label>🎆Image Url</label>
			<input type="text" value={image} onChange={(e) => setImage(e.target.value)} />

			<Button>Add</Button>
		</form>
	);
}
