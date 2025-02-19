import { Header } from "./components/Header";
import { Navbar } from "./components/Navbar";
import { Landing } from "./components/Landing";

export function App() {
  return (
		<div id="container">
			<Header />
			<div id="containerbody">
				<Navbar />
				<div id="containercontent">
					<Landing />
				</div>
			</div>
		</div>
	)
}


