import React from "react";
import { client } from "../lib/client";
import { SideBannerDataTyping } from "../typings";
import SideBanner from "../components/SideBanner";
import Form from "../components/Form";
import Card from "@mui/material/Card";
import { InstagramEmbed } from 'react-social-media-embed';


type Props = {
	sideBannerData: SideBannerDataTyping[];
  title: string;
};

const submissions = ({ sideBannerData }: Props) => (
	<>
		<div className="flex flex-col md:flex-row">
			<SideBanner sideBanner={sideBannerData[2]} />
			<div className="flex flex-col justify-start items-center text-center w-full h-screen overflow-y-auto relative md:w-1/2 px-5">
				<h3
					className="text-4xl my-5"
					style={{ color: "#333" }}
				>
					Submissions
				</h3>
				<p>
					Submit here for a chance to featured on the Street Honey instagram
					page!
				</p>
				<p className="m-5">
					Please note that submitted photos are not uploaded to the website to
					be sold. If you would like to partner with Street Honey and sell your
					prints on our website please reach out to streethoney@gmail.com
				</p>
        <div className="my-5">
        <Card>
					<Form title='submissions' setToggleForm={() => null}/>
				</Card>
        </div>
     
			</div>
		</div>
	</>
);

export const getServerSideProps = async () => {
	const query = '*[_type == "sideBanner"]';
	const sideBannerData = await client.fetch(query);
	console.log("this is products", sideBannerData);

	return {
		props: { sideBannerData },
	};
};

export default submissions;
