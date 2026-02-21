import { supabase } from "https://julianbrasse.github.io/zurichpride/scripts/supabase.js";

let version = "0.1.4"

let pageMetadata;
let pageContent;

let styleMetadata;
let headerContent;
let footerContent;
let indexContent;
let indexMetadata;
let demonstrationContent;
let demonstrationMetadata;
let festivalContent;
let festivalMetadata;
let kalenderContent;
let kalenderMetadata;
let communityContent;
let communityMetadata;
let vereinContent;
let vereinMetadata;
let kontaktContent;
let kontaktMetadata;

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

		demonstrationContent = elements.demonstration_content;
		demonstrationMetadata = elements.demonstration_metadata;
		festivalContent = elements.festival_content;
		kalenderContent = elements.kalender_content;
		communityContent = elements.community_content;
		vereinContent = elements.verein_content;
		kontaktContent = elements.kontakt_content;
	}
}

async function loadPage() {
	const parameters = new URLSearchParams(window.location.search);
	await getElements();

	pageMetadata = indexMetadata;
	pageContent = indexContent;

	if (parameters.has('demonstration')) {
		pageMetadata = demonstrationMetadata;
		pageContent = demonstrationContent;
	}
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