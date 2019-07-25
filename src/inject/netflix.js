// Listen for a toggle message
chrome.runtime.onMessage.addListener((val) => {
	// document.getElementById("spoilerspecs").disabled = val
	spoilerspecs.disabled = !val
	console.log("changed specs to", val)
})

// Create spoiler specs style
const spoilerspecs = document.createElement("style");
spoilerspecs.innerHTML = `
.nfp-episode-preview .thumbnail-image,
.nfp-episode-preview .synopsis,
.player-loading-background-image,
.episodeSynopsis {
	opacity: 0 !important;
}
.episodeArt {
	background-image: none !important;
}`;

// Init on or off
document.getElementsByTagName("head")[0].appendChild(spoilerspecs);
chrome.storage.sync.get("SpoilerSpecsOn", ({SpoilerSpecsOn}) => {
	spoilerspecs.disabled = !SpoilerSpecsOn
})