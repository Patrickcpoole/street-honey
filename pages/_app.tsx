import "../styles/globals.css";
import { useEffect } from "react";
import { Layout } from "../components";
import type { AppProps } from "next/app";
import { StateContext } from "../context/StateContext";
import { Toaster } from "react-hot-toast";


export default function App({ Component, pageProps }: AppProps) {
	useEffect(() => {
    const use = async () => {
      (await import('tw-elements')).default;
    };
    use();
  }, []);

	return (
		<StateContext>
			<Layout>
        <Toaster />
				<Component {...pageProps} />
			</Layout>
		</StateContext>
	);
}
