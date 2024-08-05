import { Link } from "react-router-dom";
import { Iproduct } from "../../interface/Iproduct";
import Instance from "../../api";
// import { ProductContext } from "../../contexts/ProductContext";

const ProductsList = ({products,setProducts}) => {
	// const { state, handleRemove } = useContext(ProductContext);
	// console.log(state.products);
	
	function OnDelete(id?: number | string) {

		if (window.confirm('bạn có chắc xóa !')) {
			(async () => {
				await Instance.delete(`/products/${id}`)
				setProducts(products.filter(data => data._id !== id))
			})()
		}

	}

	return (
		<div>
			<h1>Hello, admin</h1>
			<Link to="/admin/product-add" className="btn btn-primary">
				Add new product
			</Link>
			<table className="table table-bordered table-striped text-center">
				<thead>
					<tr>
						<th>ID</th>
						<th>Title</th>
						<th>Price</th>
						<th>Description</th>
						<th>Thumbnail</th>
						<th>Action</th>
					</tr>
				</thead>
				<tbody>
					{products.map((p: Iproduct) => (
						<tr key={p._id}>
							<td>{p._id}</td>
							<td>{p.title}</td>
							<td>{p.price && typeof p.price === 'object'
								? p.price.$numberDecimal
								: p.price}</td>
							<td>{p.description || "Dang cap nhat"}</td>
							<td>
								{p.image_url ? (
									<img src={p.image_url} alt={p.title} style={{ width: '100px', height: 'auto' }} />
								) : (
									"Dang cap nhat"
								)}
							</td>

							<td>
								<button className="btn btn-white" onClick={() => OnDelete(p._id!)}>
									Delete
								</button>
								<Link to={`/admin/product-edit/${p._id}`} className="btn btn-warning">
									Edit
								</Link>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default ProductsList;
