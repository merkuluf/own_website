import images from "./images"

const projects_list = [
	{
		title: 'Cash Converter Bot',
		description: 'Telegram bot that allows you to count how much money do you have, that distributed in different currencies.',
		image_path: images.currency_bot_jpeg,
		visit_link: "https://t.me/convertCashBot",
		github_link: null,
	},
	{
		title: 'Bit Rage VPN Bot',
		description: 'Telegram bot that allows you to buy subscription to private VPN server.',
		image_path: images.bitrage_bot_jpeg,
		visit_link: "https://t.me/bitrageVPNbot",
		github_link: null,
	},
	{
		title: 'Express/React Example',
		description: 'This project contains server and client. Showcase of fullstack application.',
		image_path: images.express_jpg,
		visit_link: null,
		github_link: "https://github.com/merkuluf/fullstack_example",
	},
	{
		title: 'Express/PReact Chat',
		description: 'This project contains server and client. Showcase of fullstack application that uses websockets.',
		image_path: images.preact_webp,
		visit_link: null,
		github_link: "https://github.com/merkuluf/fullstack_websocket_chat",
	},
	{
		title: 'React Native Job Application',
		description: 'Showcase of React Native application. Built following YouTube tutortial.',
		image_path: images.react_native_jpg,
		visit_link: null,
		github_link: "https://github.com/merkuluf/react-native-jobs-app",
	},
	{
		title: 'This website',
		description: 'React code for this website',
		image_path: images.merkuluf_png,
		visit_link: "https://merkuluf.com",
		github_link: "https://github.com/merkuluf/own_website",
	},
]

export default projects_list;