window.addEventListener("load", initialize);

function handleToggle() {
	chrome.storage.sync.get("SpoilerSpecsOn", ({ SpoilerSpecsOn }) => {
		const on = !SpoilerSpecsOn;

		// Toggle saved setting
		chrome.storage.sync.set({ SpoilerSpecsOn: on });

		// send message
		chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
			chrome.tabs.sendMessage(tabs[0].id, on);
		});

		// Change icon/popover
		if (on) {
			chrome.browserAction.setIcon({ path: "../../icons/icon128on.png" });
			document
				.getElementById("screen-cover")
				.classList.remove("screen-cover-off");
			document
				.getElementById("slider-button")
				.classList.add("slider-button-off");
		} else {
			chrome.browserAction.setIcon({ path: "../../icons/icon128off.png" });
			document.getElementById("screen-cover").classList.add("screen-cover-off");
			document
				.getElementById("slider-button")
				.classList.remove("slider-button-off");
		}
	});
}

function initialize() {
	const link = document.getElementsByTagName("a")[0];
	link.onclick = function() {
		chrome.tabs.create({ active: true, url: "https://www.TomLum.com" });
	};
	chrome.storage.sync.get("SpoilerSpecsOn", ({ SpoilerSpecsOn }) => {
		let on = true;

		// Init if undefined
		if (SpoilerSpecsOn === undefined) {
			chrome.storage.sync.set({ SpoilerSpecsOn: true });
		} else {
			on = SpoilerSpecsOn;
		}

		// Init icon
		if (on) {
			chrome.browserAction.setIcon({ path: "../../icons/icon128on.png" });
			document
				.getElementById("screen-cover")
				.classList.remove("screen-cover-off");
			document
				.getElementById("slider-button")
				.classList.add("slider-button-off");
		} else {
			chrome.browserAction.setIcon({ path: "../../icons/icon128off.png" });
			document.getElementById("screen-cover").classList.add("screen-cover-off");
			document
				.getElementById("slider-button")
				.classList.remove("slider-button-off");
		}
	});

	// Set listener
	document.getElementById("toggle").addEventListener("click", handleToggle);
}
