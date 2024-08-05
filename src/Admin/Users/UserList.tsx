import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { User } from "../../interface/User";
import Instance from "../../api";
// import { UserContext } from "../../contexts/UserContext";

const UsersList = () => {
	// const { state, handleRemove } = useContext(UserContext);
	// console.log(state.users);
	const [users, setUsers] = useState<User[]>([]);

	useEffect(() => {
		(async () => {
			try {
				const { data } = await Instance.get("/auth");
				console.log(data);
				setUsers(data);
			} catch (error) {
				console.error("Error fetching users:", error);
			}
		})();
	}, []);

	const onDelete = async (id: string) => {
		if (window.confirm('Bạn có chắc chắn muốn xóa người dùng này?')) {
			try {
				await Instance.delete(`/users/${id}`);
				setUsers(users.filter(user => user._id !== id));
			} catch (error) {
				console.error("Error deleting user:", error);
			}
		}
	}

	return (
		<div>
			<h1>Danh sách người dùng</h1>
			<Link to="/admin/user-add" className="btn btn-primary">
				Add new user
			</Link>
			<table className="table table-bordered table-striped text-center">
				<thead>
					<tr>
						<th>ID</th>
						<th>First Name</th>
						<th>Last Name</th>
						<th>Email</th>
						<th>Role</th>
						<th>Action</th>
					</tr>
				</thead>
				<tbody>
					{users.map((user: User) => (
						<tr key={user._id}>
							<td>{user._id}</td>
							<td>{user.first_name}</td>
							<td>{user.last_name}</td>
							<td>{user.email}</td>
							<td>{user.role}</td>
							<td>
								<button className="btn btn-danger" onClick={() => onDelete(user._id)}>
									Delete
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default UsersList;
