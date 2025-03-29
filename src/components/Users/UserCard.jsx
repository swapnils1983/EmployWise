const UserCard = ({ user, onEdit, onDelete }) => {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
            <div className="p-4">
                <div className="flex items-center mb-4">
                    <img
                        src={user.avatar}
                        alt={`${user.first_name} ${user.last_name}`}
                        className="w-16 h-16 rounded-full mr-4"
                    />
                    <div>
                        <h2 className="font-bold text-lg">{user.first_name} {user.last_name}</h2>
                        <p className="text-gray-600">{user.email}</p>
                    </div>
                </div>
                <div className="flex justify-end space-x-2">
                    <button
                        onClick={onEdit}
                        className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
                    >
                        Edit
                    </button>
                    <button
                        onClick={onDelete}
                        className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
};

export default UserCard;