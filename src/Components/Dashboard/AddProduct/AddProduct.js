/* eslint-disable jsx-a11y/no-redundant-roles */
/* eslint-disable jsx-a11y/aria-role */
/* eslint-disable no-unused-vars */
import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

function AddProduct() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  // const onSubmit = async (data) => {
  //   const img = data.image[0];
  //   const img1 = data.img1[0];
  //   const img2 = data.img2[0];

  //   const form = new FormData();
  //   form.append("productImg", img);
  //   form.append("productImg1", img1);
  //   form.append("productImg2", img2);

  //   const productinfo = {
  //     name: data.name,
  //     oldPrice: data.oldprice,
  //     newPrice: data.newprice,
  //     details: data.description,
  //   };

  //   try {
  //     const { data } = await axios.post("https://api.com.quickinun.com/server/upload", form);
  //     // console.log(data);

  //     if (data?.uploaded) {
  //       const { productImg, productImg1, productImg2 } = data;
  //       const { data: productData } = await axios.post(
  //         "https://api.com.quickinun.com/server/add-product",
  //         { ...productinfo, image: productImg?.[0]?.filename, img1: productImg1?.[0]?.filename, img2: productImg2?.[0]?.filename }
  //       );

  //       productData?.acknowledged
  //         ? toast.success("Product successfully added")
  //         : toast.error("Unable to added product");
  //     } else {
  //       toast.error("Unable to upload image");
  //     }
  //   } catch (err) { }

  //   reset();
  // };


  // const [user] = useAuthState(auth);
  const imageStorageKey = "05d4c3c8e214922ac75f1c1d5c5cb38e";
 
 
  // const {
  //   register,
  //   formState: { errors },
  //   handleSubmit,
  // } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    const image = data.Image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then(result => {
        
        if (result.success) {
          const img = result.data.url;
          const perse={
            name:data.name,
            email:data?.email,
            price:data.price,
            minimumQuantity:data.minimumQuantity,
            maximumQuantity:data.maximumQuantity,
            description:data.description,
            img:img
          }

          // send to database
          // const url=`https://parse-and-co.onrender.com/pareses`
         fetch('http://localhost:5000/pareses', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(perse),
      })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        toast.success('Success',data)}) }
        console.log(result);
       toast.success('Success',data)
      });
  };



  return (
    <div className="mb-10 h-full  w-full  px-4">
      <div className="flex flex-col items-center justify-center">
        <div className="bg-white shadow rounded lg:w-1/3  md:w-1/2 w-full p-10 mt-16">
          <p
            tabIndex={0}
            aria-label="Login to your account"
            className="text-2xl font-extrabold leading-6 mb-7 text-center text-gray-800"
          >
            Add Product
          </p>
          <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="name"
                    placeholder="name"
                    name="name"
                    className="input input-bordered w-full max-w-xs"
                    {...register("name", {
                      required: {
                        value: true,
                        message: "name is required",
                      },
                      pattern: {
                        value: /[A-Za-z]{3}/,
                        message: "your name is not required",
                      },
                    })}
                  />
                  <label className="label">
                    {errors.name?.type === "required" && (
                      <span className="label-text-alt text-red-500">
                        {errors.name.message}
                      </span>
                    )}
                    {errors.name?.type === "pattern" && (
                      <span className="label-text-alt text-red-500">
                        {errors.name.message}
                      </span>
                    )}
                  </label>
                </div>

                <div className="form-control w-full max-w-xs">
                  
                
                  <label className="label">
                    {errors.email?.type === "required" && (
                      <span className="label-text-alt text-red-500">
                        {errors.email.message}
                      </span>
                    )}
                    {errors.email?.type === "pattern" && (
                      <span className="label-text-alt text-red-500">
                        {errors.email.message}
                      </span>
                    )}
                  </label>
                </div>

                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text">Price</span>
                  </label>
                  <input
                    type="number"
                    placeholder="price"
                    name="price"
                    className="input input-bordered w-full max-w-xs"
                    {...register("price", {
                      required: {
                        value: true,
                        message: "price is required",
                      },
                      pattern: {
                        value: /[0-9]/,
                        message: "your price is not required",
                      },
                    })}
                  />
                  <label className="label">
                    {errors.price?.type === "required" && (
                      <span className="label-text-alt text-red-500">
                        {errors.price.message}
                      </span>
                    )}
                    {errors.price?.type === "pattern" && (
                      <span className="label-text-alt text-red-500">
                        {errors.price.message}
                      </span>
                    )}
                  </label>
                </div>

                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text"> Minimum Quantity</span>
                  </label>
                  <input
                    type="number"
                    placeholder="minimumQuantity"
                    name="minimumQuantity"
                    className="input input-bordered w-full max-w-xs"
                    {...register(`minimumQuantity`, {
                      required: {
                        value: true,
                        message: "minimumQuantity is required",
                      },
                      pattern: {
                        value: /[0-9]/,
                        message: "your minimumQuantity is not required",
                      },
                    })}
                  />

                  <label className="label">
                    {errors.minimumQuantity?.type === "required" && (
                      <span className="label-text-alt text-red-500">
                        {errors.minimumQuantity.message}
                      </span>
                    )}
                    {errors.minimumQuantity?.type === "pattern" && (
                      <span className="label-text-alt text-red-500">
                        {errors.minimumQuantity.message}
                      </span>
                    )}
                  </label>
                </div>
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text"> Maximum Quantity</span>
                  </label>
                  <input
                    type="number"
                    placeholder="Maximum Quantity"
                    name="maximumQuantity"
                    className="input input-bordered w-full max-w-xs"
                    {...register(`maximumQuantity`, {
                      required: {
                        value: true,
                        message: "maximumQuantity is required",
                      },
                      pattern: {
                        value: /[0-9]/,
                        message: "your maximumQuantity is not required",
                      },
                    })}
                  />

                  <label className="label">
                    {errors.maximumQuantity?.type === "required" && (
                      <span className="label-text-alt text-red-500">
                        {errors.maximumQuantity.message}
                      </span>
                    )}
                    {errors.maximumQuantity?.type === "pattern" && (
                      <span className="label-text-alt text-red-500">
                        {errors.maximumQuantity.message}
                      </span>
                    )}
                  </label>
                </div>

                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text">Photo</span>
                  </label>
                  <input
                    type="file"
                    placeholder="Image"
                    name="Image"
                    className="input input-bordered w-full max-w-xs"
                    {...register("Image", {
                      required: {
                        value: true,
                        message: "Image is required",
                      },
                      pattern: {
                        value: true,
                        message: "your Image is not required",
                      },
                    })}
                  />
                  <label className="label">
                    {errors.Image?.type === "required" && (
                      <span className="label-text-alt text-red-500">
                        {errors.Image.message}
                      </span>
                    )}
                    {errors.Image?.type === "pattern" && (
                      <span className="label-text-alt text-red-500">
                        {errors.Image.message}
                      </span>
                    )}
                  </label>
                </div>

                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text">Description</span>
                  </label>
                  <textarea
                    type="text"
                    placeholder="description"
                    name="description"
                    className="input input-bordered w-full max-w-xs"
                    {...register("description", {
                      required: {
                        value: true,
                        message: "description is required",
                      },
                      minLength: {
                        value: 30,
                        message: "your description  must be 50 character",
                      },
                    })}
                  />
                  <label className="label">
                    {errors.description?.type === "required" && (
                      <span className="label-text-alt text-red-500">
                        {errors.description.message}
                      </span>
                    )}
                    {errors.description?.type === "minLength" && (
                      <span className="label-text-alt text-red-500">
                        {errors.description.message}
                      </span>
                    )}
                  </label>
                </div>

                <input
                  className="w-full max-w-xs btn"
                  type="submit"
                  value="Submit"
                />
              </form>
        </div>
      </div>
    </div>
  );
}

export default AddProduct;
