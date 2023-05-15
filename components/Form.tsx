import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { client, submissionsUploader } from "../lib/client";
import { AiFillDelete, AiOutlineCloudUpload } from "react-icons/ai";
import { Image, SubmissionsTyping, SanityImageAssetDocument } from "../typings";
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
	setToggleForm: Function;
};

function Form({ title, setToggleForm}: Props) {
	const [imagesAssets, setImagesAssets] = useState<Image | null>(null);
	const [wrongTypeOfImage, setWrongTypeOfImage] = useState(false);
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm<Inputs>();

	const onSubmit: SubmitHandler<Inputs> = (data) => {
		if (imagesAssets !== null && imagesAssets !== undefined) {
			console.log("form data submitted", imagesAssets);
			const sanityImageStructure = {
				_type: "image",
				asset: {
					_type: "reference",
					_ref: imagesAssets._id,
				},
			};
			const submission: SubmissionsTyping = {
				_type: "submissions",
				firstName: data.firstName,
				lastName: data.lastName,
				email: data.email,
				instagramHandle: data.instagramHandle,
				notes: data.notes,
				image: sanityImageStructure,
			};
			console.log("submission", submission);
			submissionsUploader(submission); // Pass the submission directly without array wrapping
		} else {
			console.log("Error");
		}
	};

	const uploadImage: React.ChangeEventHandler<HTMLInputElement> = (e) => {
		const selectedImage = e.target.files && e.target.files[0];
	
		if (selectedImage) {
			console.log("selected image", selectedImage);
	
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
					.then((document: SanityImageAssetDocument | null) => {
						if (document) {
							console.log("about to fire", document);
	
							const image: Image = {
								_type: "image",
								_id: document._id,
								asset: {
									_ref: document._id,
									_type: "reference",
								},
							};
	
							setImagesAssets(image);
						} else {
							console.log("Upload failed: Document is null");
						}
					})
					.catch((error) => {
						console.log("Upload failed:", error.message);
					});
			} else {
				console.log("upload failed");
				setWrongTypeOfImage(true);
			}
		} else {
			console.log("No image selected");
		}
	};

	return (
		<>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className="mt-4 flex flex-row">
					<div className="mx-4  w-1/2 mr-6">
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
					<div className="mx-4 w-1/2 ml-6">
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

				<div className="mx-4 ">
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
				<div className="mx-4 ">
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
				<div className="mx-4 ">
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
				{title === 'submissions' ? (
				<div>
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
				</div>
				): (
					// return fragment if not submissions
				<></>
				)
				}
				{title === "submissions" ? (
					<div className="event-form-button-container">
						<Button className='event-button' style={{backgroundColor: '#1985f1'}} type="submit">Submit</Button>
					</div>
				) : (
					<div className="event-form-button-container">
						<Button className='event-button' style={{backgroundColor: '#1985f1', marginRight: '1.5%'}}>Sign Up</Button>
						<Button className='event-button' onClick={() => setToggleForm(false)} style={{backgroundColor: '#ed5e68', marginLeft: '1.5%'}}>Cancel</Button>
					</div>
				)}
			</form>
		</>
	);
}

export default Form;
