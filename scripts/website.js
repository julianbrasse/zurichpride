import { supabase } from "https://julianbrasse.github.io/zurichpride/scripts/supabase.js";

let styleCSS;
let styleHTML;
let headHTML;
let bodyHTML;
let headerHTML;
let footerHTML
let indexHTML;
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
		headHTML = elements.headHTML;
		headerHTML = elements.headerHTML;
		footerHTML = elements.footerHTML;
		indexHTML = elements.indexHTML;
		demonstrationHTML = elements.demonstrationHTML;
		festivalHTML = elements.festivalHTML;
		kalenderHTML = elements.kalenderHTML;
		communityHTML = elements.communityHTML;
		vereinHTML = elements.vereinHTML;
		kontaktHTML = elements.kontaktHTML;

		styleCSS = elements.styleCSS;
		styleHTML = `<style>${styleCSS}</style>
	}
}


async function loadPage() {
	const parameters = new URLSearchParams(window.location.search);
	await getElements();

	let contentHTML = indexHTML;
	if (parameters.has('demonstration')) { contentHTML = demonstrationHTML; }
	else if (parameters.has('festival')) { contentHTML = festivalHTML; }
	else if (parameters.has('kalender')) { contentHTML = kalenderHTML; }
	else if (parameters.has('community')) { contentHTML = communityHTML; }
	else if (parameters.has('verein')) { contentHTML = vereinHTML; }
	else if (parameters.has('kontakt')) { contentHTML = kontaktHTML; }

	bodyHTML = `
		<header>${headerHTML}</header>
		${contentHTML}
		<footer>${footerHTML}</footer>
	`

	document.body.innerHTML = bodyHTML;
	document.head.insertAdjacentHTML(`beforeend`, headHTML);
	document.head.insertAdjacentHTML(`beforeend`, styleHTML);
}

loadPage();