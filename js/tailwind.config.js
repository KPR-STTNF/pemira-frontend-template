tailwind.config = {
	theme: {
		extend: {
			colors: {
				main: '#6096B4',
				primary: '#93BFCF',
				secondary: '#363062',
				card: '#BDCDD6',
				background: '#EEE9DA',
			},
			spacing: {
				
			},
		},
	},
	daisyui: {
		themes: false, //['light'],
	},
};
module.exports = {
	//...
	plugins: [require("daisyui")],
  }