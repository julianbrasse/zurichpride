import { supabase } from "https://julianbrasse.github.io/zurichpride/scripts/supabase.js";

let pageMetadata;
let pageContent;

let styleMetadata;
let headerContent;
let footerContent;
let indexContent;
let indexMetadata;

let demonstrationHTML;
let festivalHTML;
let kalenderHTML;
let communityHTML;
let vereinHTML;
let kontaktHTML;

async function getElements() {
	const { data, error } = await supabase
	.from('elements')
	.select('name, production');

	if (error) {
		console.error(error);
	} else {
		let elements = Object.fromEntries(data.map(row => [row.name, row.production]));
		styleMetadata = elements.style_metadata;
		headerContent = elements.header_content;
		footerContent = elements.footer_content;
		indexContent = elements.index_content;
		indexMetadata = elements.index_metadata;

		demonstrationHTML = elements.demonstrationHTML;
		festivalHTML = elements.festivalHTML;
		kalenderHTML = elements.kalenderHTML;
		communityHTML = elements.communityHTML;
		vereinHTML = elements.vereinHTML;
		kontaktHTML = elements.kontaktHTML;
	}
}

async function loadPage() {
	const parameters = new URLSearchParams(window.location.search);
	await getElements();

	let pageMetadata = indexMetadata;
	let pageContent = indexContent;
	if (parameters.has('demonstration')) { pageContent = demonstrationHTML; }
	else if (parameters.has('festival')) { pageContent = festivalHTML; }
	else if (parameters.has('kalender')) { pageContent = kalenderHTML; }
	else if (parameters.has('community')) { pageContent = communityHTML; }
	else if (parameters.has('verein')) { pageContent = vereinHTML; }
	else if (parameters.has('kontakt')) { pageContent = kontaktHTML; }

	let headContent = `
		${pageMetadata}
		${styleMetadata}
	`
	let bodyContent = `
		${headerContent}
		${pageContent}
		${footerContent}
	`

	document.head.insertAdjacentHTML(`beforeend`, headContent);
	document.body.insertAdjacentHTML(`beforeend`, bodyContent);
}

loadPage();