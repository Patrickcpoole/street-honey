import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { client, submissionsUploader } from "../lib/client";
import { AiFillDelete, AiOutlineCloudUpload } from "react-icons/ai";
import { Image } from "../typings";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
	firstName: string;
	lastName: string;
	email: string;
	instagramHandle: string;
	notes: string;
	image: Image;
};

type Props = {
	title: string;
};

function Form({ title }: Props) {
	const [imagesAssets, setImagesAssets] = useState(null);
	const [wrongTypeOfImage, setWrongTypeOfImage] = useState(false);
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm<Inputs>();

	const onSubmit: SubmitHandler<Inputs> = (data) => {
		if (imagesAssets !== null) {
			console.log("form data submitted", imagesAssets);
			const sanityImageStructure = {
				_type: "image",
				asset: {
					_type: "reference",
					_ref: imagesAssets?._id,
				},
			};
			const submissions = [
				{
					create: {
						_type: "submissions",
						firstName: data.firstName,
						lastName: data.lastName,
						email: data.email,
						instagramHandle: data.instagramHandle,
						notes: data.notes,
						image: sanityImageStructure,
					},
				},
			];
      console.log('submissions', submissions)
			submissionsUploader(submissions);
		} else {
			console.log("Error");
		}
	};

	const uploadImage = (e: { target: { files: any[] } }) => {
		const selectedImage = e.target.files[0];
    console.log('selected image', selectedImage)
		//to input an image to the upload field
		if (
			selectedImage.type === "image/png" ||
			selectedImage.type === "image/svg" ||
			selectedImage.type === "image/jpeg" ||
			selectedImage.type === "image/gif" ||
			selectedImage.type === "image/tiff"
		) {
			setWrongTypeOfImage(false);
			client.assets
				.upload("image", selectedImage, {
					contentType: selectedImage.type,
					filename: selectedImage.name,
				})
				.then((document) => {
          console.log('about to fire', document)
					setImagesAssets(document);
				})
				.catch((error) => {
					console.log("Upload failed:", error.message);
				});
		} else {
      console.log('upload failed')
			setWrongTypeofImage(true);
		}
	};

	return (
		<>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className="m-4 flex flex-row">
					<div className="mb-4 w-1/2 mr-6">
						<label className="block text-gray-700 text-sm font-bold mb-2 ">
							First Name
						</label>
						<input
							{...register("firstName", { required: true })}
							className="w-full shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
							id="firstname"
							type="text"
							placeholder="First Name"
						/>
					</div>
					<div className="mb-4 w-1/2 ml-6">
						<label className=" block text-gray-700 text-sm font-bold mb-2">
							Last Name
						</label>
						<input
							{...register("lastName", { required: true })}
							className=" w-full shadow appearance-none border rounded py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
							id="lastname"
							type="text"
							placeholder="Last Name"
						/>
					</div>
				</div>

				<div className="m-4 ">
					<label className=" block text-gray-700 text-sm font-bold mb-2">
						Email
					</label>
					<input
						{...register("email", { required: true })}
						className=" w-full shadow appearance-none border rounded py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
						id="email"
						type="text"
						placeholder="example@gmail.com"
					/>
				</div>
				<div className="m-4 ">
					<label className=" block text-gray-700 text-sm font-bold mb-2">
						Instagram Handle
					</label>
					<input
						{...register("instagramHandle", { required: true })}
						className=" w-full shadow appearance-none border rounded py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
						id="instagram"
						type="text"
						placeholder="@portra_pat"
					/>
				</div>
				<div className="m-4 ">
					<label className=" block text-gray-700 text-sm font-bold mb-2">
						Notes
					</label>
					<input
						{...register("notes")}
						className=" w-full shadow appearance-none border rounded py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
						id="notes"
						type="text"
						placeholder="notes"
					/>
				</div>
				{/* <TextField
            id="email"
            label="Email"
            placeholder="Email"
    
            fullWidth
          />
          </div>
          <div className="m-4">
          <TextField
            id="instagram"
            label="Instagram Handle"
            placeholder="Notes"
            multiline
            fullWidth
          />
      <TextField
            id="note"
            label="Notes"
            placeholder="Notes"
            multiline
            fullWidth
          /> */}
				{!imagesAssets ? (
					<label>
						<div className="flex flex-col items-center justify-center h-full">
							<div className="flex flex-col justify-center items-center">
								<p className="font-bold text-2xl">
									<AiOutlineCloudUpload />
								</p>
								<p className="text-lg">Click to upload</p>
							</div>
						</div>
						<input
							{...register("image", { required: true })}
							type="file"
							name="image"
							onChange={uploadImage}
							className="hidden"
						/>
					</label>
				) : (
					<div className="relative h-full">
						{/* <img
							src={imagesAssets?.url}
							alt="uploaded_image"
							className="h-full w-full"
						/> */}
						<button
							type="button"
							className="absolute bottom-3 right-3 p-3 rounded-full bg-white text-xl cursor-pointer outline-none hover:shadow-md transition-all duration-500 ease-in-out"
							onClick={() => setImagesAssets(null)}
						>
							<AiFillDelete />
						</button>
					</div>
				)}

				{title === "submissions" ? (
					<div className="flex items-center justify-between">
						<Button type="submit">Submit</Button>
					</div>
				) : (
					<div className="flex items-center justify-between">
						<Button>Sign Up</Button>
						<Button>Cancel</Button>
					</div>
				)}
			</form>
		</>
	);
}

export default Form;
