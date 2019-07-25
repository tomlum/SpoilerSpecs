// Listen for a toggle message
chrome.runtime.onMessage.addListener((val) => {
	// document.getElementById("spoilerspecs").disabled = val
	spoilerspecs.disabled = !val
	console.log("changed specs to", val)
})

// Create spoiler specs style
const spoilerspecs = document.createElement("style");
spoilerspecs.innerHTML = `
.js-node-episode-container img,
.js-node-episode-container div div[data-automation-id],
.dv-dp-node-synopsis
{
	display: none !important;
}
.nextUpCard img
{
	opacity: 0 !important;
}
`;

// Init on or off
document.getElementsByTagName("head")[0].appendChild(spoilerspecs);
chrome.storage.sync.get("SpoilerSpecsOn", ({SpoilerSpecsOn}) => {
	spoilerspecs.disabled = !SpoilerSpecsOn
})