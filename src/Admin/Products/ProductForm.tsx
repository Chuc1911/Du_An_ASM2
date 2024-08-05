import {  useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
// import { ProductContext } from "../../contexts/ProductContext";
// import { Category } from "../../interface/Category";
import { Iproduct } from "../../interface/Iproduct";
import Instance from "../../api";
import productSchema from "../../utils/productSchema";
import ImageUploader from "../../pages/ImageUploader";

const ProductForm = () => {
	const navigate = useNavigate();
	const { id } = useParams();
	// const [categories, setCategories] = useState([] as Category[]);
	// const [cateSelected, setCateSelected] = useState({} as Category);
	// const { handleProduct } = useContext(ProductContext);
	const {
		handleSubmit,
		formState: { errors },
		reset,
		register,
		setValue,
	} = useForm<Iproduct>({
		resolver: zodResolver(productSchema),
	});

	const [productImage, setProductImage] = useState<string>("");

	const handleImageChange = (newImage: string) => {
		setProductImage(newImage);
	};
    
	useEffect(() => {
		if (id) {
			(async () => {
				const { data } = await Instance.get(`/products/${id}`);
				reset(data);
				setProductImage(data.image_url);
				setValue("title", data.title);
				setValue("price", data.price.$numberDecimal);
				setValue("description", data.description);
				setValue("Category_id", data.Category_id);
				// const categoryRes = await Instance.get(`/categories/${data.Category_id}`);
				// setCateSelected(categoryRes.data);
			})();
		}
	}, [id, reset, setValue]);



	const EditProduct = async (product: Iproduct) => {
		try {
			const { data } = await Instance.put(`/products/${id}`, { ...product });
			console.log(data);
			alert('Sửa thành công');
			navigate('/admin/products');
		} catch (error) {
			console.error(error);
		}
	};
	const AddProduct = async (product: Iproduct) => {
		try {
			const { data } = await Instance.post(`/products`, { ...product });
			console.log(data);
			alert('Thêm thành công');
			navigate('/admin/products');
		} catch (error) {
			console.error(error);
		}
	};

	const onSubmit = async (product: Iproduct) => {
		try {
			const updatedProduct = { ...product, thumbnail: productImage };
			id ? EditProduct(updatedProduct) : AddProduct(updatedProduct)
		} catch (error) {
			console.error(error);
		}
	};

	// useEffect(() => {
	// 	(async () => {
	// 		const { data } = await Instance.get("/category");
	// 		setCategories(data);
	// 		console.log(data);
	// 	})();
	// }, []);

	return (
		<div>
			<form onSubmit={handleSubmit(onSubmit)}>
				<h1>{id ? "Edit" : "Add"} product</h1>
				<div className="mb-3">
					<label htmlFor="title" className="form-label">
						Title
					</label>
					<input type="text" className="form-control" id="title" {...register("title", { required: true })} />
					{errors.title?.message && <p className="text-danger">{errors.title?.message}</p>}
				</div>
				<div className="mb-3">
					<label htmlFor="price" className="form-label">
						Price
					</label>
					<input
						type="number"
						className="form-control"
						id="price"
						{...register("price", { required: true, valueAsNumber: true })}
					/>
					{errors.price?.message && <p className="text-danger">{errors.price?.message}</p>}
				</div>
				<div className="mb-3">
					<label htmlFor="description" className="form-label">
						Description
					</label>
					<input type="text" className="form-control" id="description" {...register("description")} />
					{errors.description?.message && <p className="text-danger">{errors.description?.message}</p>}
				</div>

				{/* <div className="mb-3">
					<label htmlFor="category" className="form-label">
						Category
					</label>
					<select id="category" className="form-control" {...register("Category_id")}>
						{categories.map((category) =>
							cateSelected.Category_id == category.Category_id ? (
								<option key={category.Category_id} value={category.Category_id} selected>
									{category.category_name}
								</option>
							) : (
								<option key={category.Category_id} value={category.Category_id}>
									{category.category_name}
								</option>
							)
						)}
					</select>
				</div> */}

				<div className="mb-3">
					<ImageUploader initialImage={productImage} onImageChange={handleImageChange} />
				</div>

				{productImage && <img src={productImage} alt="Product Thumbnail" />}

				<div className="mb-3">
					<button className="btn w-100" type="submit" style={{ backgroundColor: 'black', color: 'white' }}>
						{id ? "Edit" : "Add"} product
					</button>
				</div>
			</form>
		</div>
	);
};

export default ProductForm;
