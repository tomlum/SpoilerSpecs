// Listen for a toggle message
chrome.runtime.onMessage.addListener((val) => {
	// document.getElementById("spoilerspecs").disabled = val
	spoilerspecs.disabled = !val
	console.log("changed specs to", val)
})

// Create spoiler specs style
const spoilerspecs = document.createElement("style");
spoilerspecs.innerHTML = `
.end-card__thumbnail-container,
.end-card__metadata-area-description,
.GenericTileContent__details,
.Masthead__description
{
	display: none !important;
}
.GenericTileThumbnail__image-container
{
	opacity: 0;
}`;

// Init on or off
document.getElementsByTagName("head")[0].appendChild(spoilerspecs);
chrome.storage.sync.get("SpoilerSpecsOn", ({SpoilerSpecsOn}) => {
	spoilerspecs.disabled = !SpoilerSpecsOn
})