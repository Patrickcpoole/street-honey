import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { client, submissionsUploader } from "../lib/client";
import { AiFillDelete, AiOutlineCloudUpload } from "react-icons/ai";
import { Image, SubmissionsTyping, SanityImageAssetDocument } from "../typings";
import { useForm, SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";

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
	const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [instagramHandle, setInstagramHandle] = useState('');
    const [notes, setNotes] = useState('');

		const validateEmail = (email:string) => {
			const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
			return emailRegex.test(email);
	};

	const handleSubmit = (event:any) => {
		console.log('submitting')
			event.preventDefault();

			if (!firstName.trim() || !lastName.trim() || !email.trim() || !instagramHandle.trim()) {
					toast.error("Please fill in all fields.");
					return;
			}

			if (!validateEmail(email)) {
					toast.error("Invalid email address.");
					return;
			}

			toast.success("Form input saved!");
			setToggleForm(false)
			// ... [rest of your submission logic]
	};


	return (
		<>
			  <form onSubmit={handleSubmit}>
				<div className="mt-4 flex flex-row">
					<div className="mx-4  w-1/2 mr-6">
					<input
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="w-full shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="firstname"
                    type="text"
                    placeholder="First Name"
                />
					</div>
					<div className="mx-4 w-1/2 ml-6">
					<input
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="w-full shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="firstname"
                    type="text"
                    placeholder="Last Name"
                />
					</div>
				</div>
				<div className="mx-4 my-4">
				<input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="firstname"
                    type="text"
                    placeholder="Email"
                />
				</div>
				<div className="mx-4 my-4">
				<input
                    value={instagramHandle}
                    onChange={(e) => setInstagramHandle(e.target.value)}
                    className="w-full shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="firstname"
                    type="text"
                    placeholder="@instagram_handle"
                />
				</div>
			
				<div className="mx-4 my-4">
				<input
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="firstname"
                    type="text"
                    placeholder="Notes"
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
							{/* <input
								{...register("image", { required: true })}
								type="file"
								name="image"
								onChange={uploadImage}
								className="hidden"
							/> */}
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
						<Button className='event-button' type="submit" style={{backgroundColor: '#1985f1', marginRight: '1.5%'}}>Sign Up</Button>
						<Button className='event-button' onClick={() => setToggleForm(false)} style={{backgroundColor: '#ed5e68', marginLeft: '1.5%'}}>Cancel</Button>
					</div>
				)}
			</form>
		</>
	);
}

export default Form;
