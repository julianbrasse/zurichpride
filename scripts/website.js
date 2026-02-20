let styleCSS = `
:root {
	--main-font: "Ubuntu Sans", ui-sans-serif, system-ui, sans-serif;
	--mono-font: "Ubuntu Sans Mono", ui-monospace, monospace;

	--blue: #13c;
	--red: #c13;
	--yellow: #fc0;

	--black: #000;
	--white: #fff;
	--transparent: #0000;
	--grey: #f0f0f0;
	--black-alpha: #0003;
	--white-alpha: #fffa;

	--primary: var(--red);
	--secondary: var(--blue);
	--content: var(--black);
	--background: var(--white-alpha);
	--accent: var(--yellow);

	--shadow: 0px 0px 1vh var(--black-alpha);

	overscroll-behavior: none;
	user-select: none;
	touch-action: pan-y;
}

@media (prefers-color-scheme: dark) {
	:root {
	}
}

body {
	margin: env(safe-area-inset-top) env(safe-area-inset-right) env(safe-area-inset-bottom) env(safe-area-inset-left);
	font-family: var(--main-font);
	font-size: 1.5vh;
	color: var(--content);
	background: var(--grey);
	accent-color: var(--accent);
}

* {
	margin: unset;
	padding: unset;
	box-sizing: border-box;
	scrollbar-width: none;
	border: unset;
	outline: unset;
	appearance: unset;
	text-decoration: unset;
	font-size: inherit;
	font-family: inherit;
	color: inherit;
	background: none;
}

main {
	padding: 4vh 40vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 4vh;
}

header {
	padding: 2vh 40vh;
	position: sticky;
	top: 0;
	backdrop-filter: blur(10px);
	display: flex;
	justify-content: space-between;
	background: var(--white-alpha);
	box-shadow: var(--shadow);
}

footer {
	padding: 2vh 40vh;
	display: flex;
	justify-content: center;
	background: var(--black-alpha);
}

nav {
	display: flex;
	gap: 2vh;
	align-items: center;
	font-size: 2vh;
}

section {
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 1.5vh;
}

div {
	display: flex;
}

h1 {
	font-size: 3.5vh;
}

h2 {
	font-size: 3.25vh;
}

h3 {
	font-size: 3vh;
}

h4 {
	font-size: 2.5vh;
}

h5 {
	font-size: 2vh;
}

h6 {
	font-size: 1.5vh;
}

p {
}

img {
	width: 100%;
}

iframe {
	width: 100%;
	aspect-ratio: 16/9;
}

.logo {
	display: flex;
	align-items: center;

	& img {
		height: 3.5vh;
		margin-right: 1vh;
	}

	& h1:first-of-type {
		font-weight: normal;
	}
}

.button {
	display: inline-flex;
	padding: 1vh;
	border-radius: 1vh 0.5vh;
	color: var(--white);
	background: var(--primary);
}

.box {
	padding: 4vh;
	flex-direction: column;
	align-items: baseline;
	box-shadow: var(--shadow);
	background: var(--background);
	border-radius: 2vh;
}

.hero {
	position: relative;
	height: 60vh;
	z-index: -2;

	&::before {
		content: "";
		position: absolute;
		width: 100%;
		height: 100%;
		background: #0009;
		z-index: -1;
	}

	& h1 {
		font-size: 6vh;
		color: var(--white);
	}
}
`
let errorHTML = `
<h2>Error</h2>
`

let indexHTML = `
<main>
<section>
<div>
<img src="content/2026/theme_graphic.png">
<section class="box">
<h2>Zurich Pride Demonstration 2026</h2>
<h4>Save the date!<br>Samstag, 20. Juni</h4>
<a class="button">Jetzt Spenden</a>
</section>
</div>
</section>
<section>
<img src="content/brand/pride.svg">
</section>
<section class="box">
<h2>Die Zurich Pride findet 2026 ohne Festival statt</h2>
<p>Das Festival der Zurich Pride wird dieses Jahr nicht stattfinden. Wir nutzen freigewordene Zeit für eine strategische Neuausrichtung und kehren nächstes Jahr mit frischer Energie und neuen Ideen zurück. Die Demonstration ist von diesem Entscheid nicht betroffen. Unser herzlicher Dank gilt unseren Unterstützer:innen und Partner:innen, die die Zurich Pride in den vergangenen Jahren mitgetragen haben und uns hoffentlich verbunden bleiben. Wir sehen uns am 20. Juni zur Demo! Zusammen stehen wir laut und bunt für unsere Rechte ein!</p>
<a class="button" href="https://zurichpridefestival.ch/wp-content/uploads/2026/02/Medienmitteilung_Zurich_Pride_Absage_Festival.pdf">Medienmitteilung</a>
</section>
<section class="box">
<h2>Jede Spende Hilft</h2>
<p>Website content goes here.</p>
</section>
<section class="box">
<h2>Event Movie 2024</h2>
<iframe src="https://www.youtube.com/embed/qPCD6xRrEts" title="YouTube video player" frameborder="0"></iframe>
</section>
<section>
<h2>Sponsors</h2>
<a href="https://belonging.google/">
<div class="box">
<img src="content/sponsors/google.svg">
</div>
</a>
</section>
</main>
`

let demonstrationHTML = `
<section class="hero" style="background: url('https://zurichpridefestival.ch/wp-content/uploads/2024/01/ZurichPride23_MichalDrozd-166-scaled.jpg');">
<h1>Demonstration</h1>
</section>
<main>
<section class="box">
<h2>Die Zurich Pride findet 2026 ohne Festival statt</h2>
<p>Das Festival der Zurich Pride wird dieses Jahr nicht stattfinden. Wir nutzen freigewordene Zeit für eine strategische Neuausrichtung und kehren nächstes Jahr mit frischer Energie und neuen Ideen zurück. Die Demonstration ist von diesem Entscheid nicht betroffen. Unser herzlicher Dank gilt unseren Unterstützer:innen und Partner:innen, die die Zurich Pride in den vergangenen Jahren mitgetragen haben und uns hoffentlich verbunden bleiben. Wir sehen uns am 20. Juni zur Demo! Zusammen stehen wir laut und bunt für unsere Rechte ein!</p>
<a class="button" href="https://zurichpridefestival.ch/wp-content/uploads/2026/02/Medienmitteilung_Zurich_Pride_Absage_Festival.pdf">Medienmitteilung</a>
</section>
</main>
`

let festivalHTML = `
<main>
<section class="box">
<h2>Die Zurich Pride findet 2026 ohne Festival statt</h2>
<p>Manchmal braucht es eine Pause. Es braucht Zeit, um sich auf das Wichtigste zu besinnen und frische Energie zu tanken, um dann mit wieder gewonnener Kraft und frischen Ideen zurückzukehren. 2026 wird die Zurich Pride deshalb ohne Festival stattfinden. Wir legen den Fokus stattdessen noch mehr auf die Demonstration, welche dieses Jahr unter dem Motto: ‹Protect Trans Youth – Zugang schafft Zukunft› steht. Der politische Höhepunkt der Zurich Pride werde am 20. Juni stattfinden, ebenso wie mindestens eine Party.</p>
<p>Die Pause nutzen Vorstand und OK zur strategischen Neuausrichtung. Am Ende hätten die angeschlagenen Finanzen des Vereins, Altlasten aus den Vorjahren, schwierige Rahmenbedingungen und fehlende Ressourcen, um als ehrenamtlich tätiger Vorstand gleichzeitig ein Festival zu planen und eine strategische Neuausrichtung aufzugleisen, den Ausschlag gegeben.</p>
<p>Hinzu kommen veränderte externe Rahmenbedingungen. Die aktuelle wirtschaftliche und politische Unsicherheit wirkt sich auch auf das Engagement von Unternehmen aus. Einige Organisationen überprüfen derzeit ihre Ausgaben, insbesondere im Bereich Diversität und Inklusion. Diese Entwicklung betrifft mehrere gemeinnützige Akteur:innen und ist leider kein Einzelfall. Parallel dazu steigen Fixkosten und Anforderungen an Sicherheit und Infrastruktur kontinuierlich.</p>
<p>Die frei gewordene Zeit neben der Organisation der Demonstration werden der Vorstand und das OK der Zurich Pride nun nutzen, um frische Energie zu tanken und die neue Strategie auszuarbeiten, um dann 2027 mit neuen Ideen wieder ein Festival zu organisieren.</p>
<a class="button" href="https://zurichpridefestival.ch/wp-content/uploads/2026/02/Medienmitteilung_Zurich_Pride_Absage_Festival.pdf">Medienmitteilung</a>
</section>
</main>
`

let kalenderHTML = `
<main>
<section class="box">
<h2>Kalender</h2>
<p>Text</p>
</section>
</main>
`

let communityHTML = `
<main>
<section class="box">
<h2>Unsere Community</h2>
<p>Text</p>
</section>
</main>
`

let vereinHTML = `
<main>
<section class="box">
<h2>Unsere Werte</h2>
<p>Text</p>
</section>
</main>
`

let kontaktHTML = `
<main>
<section class="box">
<h2>Kontakt</h2>
<p>Text</p>
</section>
</main>
`

let footerHTML = `
<p>© Verein Zurich Pride Festival 2026</p>
`

let headerHTML = `
<a class="logo" href="index.html">
<img src="content/brand/favicon_black.svg">
<h1>zurıch</h1>
<h1>prıde</h1>
</a>
<nav>
<a href="?demonstration">Demonstration</a>
<a href="?festival">Festival</a>
<a href="?kalender">Kalender</a>
<a href="?community">Community</a>
<a href="?verein">Verein</a>
<a href="?kontakt" class="button">Kontakt</a>
</nav>
`

let bodyHTML = `
<header>${headerHTML}</header>
${indexHTML}
<footer>${footerHTML}</footer>
`

let headHTML = `
<title>Zürich Pride</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Ubuntu+Sans+Mono:ital,wght@0,400..700;1,400..700&family=Ubuntu+Sans:ital,wght@0,100..800;1,100..800&display=swap" rel="stylesheet">
<style>${styleCSS}</style>
`

function loadPage() {
	const parameters = new URLSearchParams(window.location.search);

	if (parameters.has('demonstration')) {
		bodyHTML = `
			<header>${headerHTML}</header>
			${demonstrationHTML}
			<footer>${footerHTML}</footer>
		`
	} else if (parameters.has('festival')) {
		bodyHTML = `
			<header>${headerHTML}</header>
			${festivalHTML}
			<footer>${footerHTML}</footer>
		`
	} else if (parameters.has('kalender')) {
		bodyHTML = `
			<header>${headerHTML}</header>
			${kalenderHTML}
			<footer>${footerHTML}</footer>
		`
	} else if (parameters.has('community')) {
		bodyHTML = `
			<header>${headerHTML}</header>
			${communityHTML}
			<footer>${footerHTML}</footer>
		`
	} else if (parameters.has('verein')) {
		bodyHTML = `
			<header>${headerHTML}</header>
			${vereinHTML}
			<footer>${footerHTML}</footer>
		`
	} else if (parameters.has('kontakt')) {
		bodyHTML = `
			<header>${headerHTML}</header>
			${kontaktHTML}
			<footer>${footerHTML}</footer>
		`
	} else {
		bodyHTML = `
			<header>${headerHTML}</header>
			${errorHTML}
			<footer>${footerHTML}</footer>
		`
	}

	document.body.innerHTML = bodyHTML;
	document.head.insertAdjacentHTML(`beforeend`, headHTML);
}


loadPage();
