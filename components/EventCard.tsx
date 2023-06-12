import React, { useState } from "react";
import { EventTyping } from "../typings";
import { urlFor } from "../lib/client";
import moment from "moment";
import Form from "./Form";
import Image from "next/image";

import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

type Props = {
	eventData: EventTyping;
  pastEvent: boolean;
};

const imageStyle = {
	height: "100%",

	boxShadow: "0px 5px 17px rgba(0,0,0,0.3)",
};

function EventCard({ pastEvent, eventData }: Props) {
	const [toggleForm, setToggleForm] = useState<boolean>(false);

	return (
		<>
			<div className="w-90 h-250 my-10 flex flex-col md:flex-row rounded-5 shadow-lg md:w-full">
				<div className="relative flex items-center justify-center bg-cover bg-center rounded-bl-5 rounded-tl-5 md:h-80 md:w-96 bg-red-500">
					<Image
						src={urlFor(eventData.image.asset._ref).url()}
						style={imageStyle}
						alt="Image of the event"
						width={1000}
						height={800}
					/>
				</div>
				<div className="w-full h-250 flex flex-col justify-center items-center text-center text-gray-700 md:mt-0 mt-10">
					<h3 className="text-3xl" style={{ marginBottom: "2.5%" }}>
						{eventData.title}
					</h3>
					<h3 className="text-lg">
						<span className="font-semibold mr-3">When:</span>
						{moment(eventData.dateTime).format("dddd, MMM Do h:mm A")}
					</h3>
					<h3 className="text-lg">
						<span className="font-semibold mr-3">Where:</span>Union Station
					</h3>
					{!pastEvent && (
						<button
							type="button"
							className="event-button mb-5"
							onClick={() => setToggleForm(true)}
						>
							More Info
						</button>
					)}
				</div>
			</div>
			<div>
				<Dialog
					open={toggleForm}
					onClose={() => setToggleForm(false)}
					aria-labelledby="alert-dialog-title"
					aria-describedby="alert-dialog-description"
				>
					<div className="dialog-image-container">
						<Image
							src={urlFor(eventData.image.asset._ref).url()}
							style={imageStyle}
							alt="Image of the event"
							width={1000}
							height={800}
						/>
					</div>
					<div className="dialog-info">
						<DialogTitle id="alert-dialog-title">
							{`${eventData.title} Sign Up `}
						</DialogTitle>
						<DialogContent>
							<p className="form-text">{eventData.longDesc}</p>
							<Form title={eventData.title} setToggleForm={setToggleForm} />
						</DialogContent>
					</div>
				</Dialog>
			</div>
		</>
	);
}

export default EventCard;
