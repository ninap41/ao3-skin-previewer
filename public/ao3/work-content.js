// The Work Content tab: the fields of AO3's "Post/Edit Work" form under Tags
// and Preface, their BOILERPLATE values (what the shipped work page shows),
// and the renderer that fills the work page's tokens ({{TITLE}}, {{SUMMARY}},
// {{FANDOM_TAGS}} …) from a set of values. Pure: no DOM at top level, so the
// tests and preview.js share it. The user's own values live in localStorage
// under KEY_WORK (preview.js), the shipped page is the template.

export const KEY_WORK = "cowriteAo3Work";

export const RATINGS = ["Not Rated", "General Audiences", "Teen And Up Audiences", "Mature", "Explicit"];
export const WARNINGS = [
	"Creator Chose Not To Use Archive Warnings",
	"Graphic Depictions Of Violence",
	"Major Character Death",
	"No Archive Warnings Apply",
	"Rape/Non-Con",
	"Underage Sex",
];
export const CATEGORIES = ["F/F", "F/M", "Gen", "M/M", "Multi", "Other"];

// id · label · kind · (options) — in the form's own order. kinds:
//   select  one of `options`            (Rating)
//   checks  any of `options`            (Archive Warnings, Categories)
//   tags    comma-separated, free text  (Fandoms, Relationships, Characters, Additional Tags)
//   text    one line                    (Title, Author)
//   html    a block of HTML             (Summary, Notes, End notes)
export const WORK_FIELDS = [
	{ section: "Tags", id: "rating", label: "Rating", kind: "select", options: RATINGS },
	{ section: "Tags", id: "warnings", label: "Archive Warnings", kind: "checks", options: WARNINGS },
	{ section: "Tags", id: "fandoms", label: "Fandoms", kind: "tags" },
	{ section: "Tags", id: "categories", label: "Categories", kind: "checks", options: CATEGORIES },
	{ section: "Tags", id: "relationships", label: "Relationships", kind: "tags" },
	{ section: "Tags", id: "characters", label: "Characters", kind: "tags" },
	{ section: "Tags", id: "freeforms", label: "Additional Tags", kind: "tags" },
	{ section: "Preface", id: "title", label: "Work Title", kind: "text" },
	{ section: "Preface", id: "author", label: "Author / Pseud", kind: "text" },
	{ section: "Preface", id: "summary", label: "Summary", kind: "html", rows: 8 },
	{ section: "Preface", id: "notes", label: "Notes at the beginning", kind: "html", rows: 4 },
	{ section: "Preface", id: "endNotes", label: "Notes at the end", kind: "html", rows: 6 },
	// the chapter edit form (/works/:id/chapters/:id/edit) — on a one-chapter
	// work AO3 shows the chapter's own preface only when it has something in it
	{ section: "Chapter", id: "chapterTitle", label: "Chapter Title", kind: "text" },
	{ section: "Chapter", id: "chapterSummary", label: "Chapter Summary", kind: "html", rows: 4 },
	{ section: "Chapter", id: "chapterNotes", label: "Chapter Notes", kind: "html", rows: 4 },
	{ section: "Chapter", id: "chapterText", label: "Chapter Text", kind: "html", rows: 18 },
	{ section: "Chapter", id: "chapterEndNotes", label: "Chapter End Notes", kind: "html", rows: 4 },
];

// What the shipped work page shows — the boilerplate every field starts from.
export const WORK_DEFAULTS = {
	rating: "Teen And Up Audiences",
	warnings: ["Creator Chose Not To Use Archive Warnings"],
	fandoms: ["Stranger Things (TV 2016)"],
	categories: ["M/M"],
	relationships: ["Will Byers/Mike Wheeler"],
	characters: ["Mike Wheeler", "Will Byers", "Dustin Henderson", "Lucas Sinclair", "Robin Buckley"],
	freeforms: ["Blood and Injury", "Past Violence", "Near Death Experiences", "Pre-Stranger Things 5", "Hurt/Comfort", "Happy Ending", "Ambiguous Relationships"],
	title: "Lorem Ipsum Dolor Sit Amet",
	author: "Lorem_Ipsum",
	summary:
		"<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ad dolor sed nostrud sunt lorem. Eiusmod eiusmod veniam aliqua anim non.</p>\n<p>Ex nisi ad qui amet est.</p>",
	notes: "",
	chapterTitle: "",
	chapterSummary: "",
	chapterNotes: "",
	chapterEndNotes: "",
	// the story itself, as the shipped page carries it
	chapterText: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
<p><em>Commodo ullamco aliqua incididunt non cillum nisi ex nulla qui dolore irure.</em> Occaecat nisi nulla dolor eiusmod deserunt aliqua est aliqua amet. Lorem reprehenderit reprehenderit adipiscing dolore duis occaecat nisi aliqua est irure velit. Velit anim reprehenderit reprehenderit amet ex dolore aliqua.</p>
<p><em>Aliqua reprehenderit deserunt eiusmod adipiscing amet excepteur aliqua ad dolor aliqua dolor deserunt deserunt.</em> Incididunt irure est commodo nisi duis. Aliqua amet lorem velit nulla duis nostrud deserunt dolor occaecat est magna. Veniam sunt veniam reprehenderit adipiscing dolor labore dolor nulla amet velit ad.</p>
<p><em>Eiusmod duis non amet ex non aliquip sunt anim ex cillum amet velit anim.</em> Nisi adipiscing incididunt amet occaecat irure commodo qui eiusmod veniam velit occaecat. Velit est adipiscing velit est deserunt anim duis qui ullamco. Excepteur aliqua velit ullamco reprehenderit reprehenderit.</p>
<p><em>Duis occaecat labore dolore ad eiusmod.</em> Nostrud occaecat nulla duis ad duis ullamco excepteur eiusmod commodo sunt amet. Aliqua aliqua velit commodo anim ex duis qui anim nostrud ullamco labore. Excepteur excepteur nulla duis occaecat est adipiscing excepteur commodo sed sunt nisi.</p>
<p><em>Occaecat sunt amet velit ex excepteur cillum anim occaecat sed aliqua cillum.</em> Duis velit mollit anim excepteur aliqua ex ad qui sed excepteur qui. Excepteur ad ex amet labore occaecat aliqua aliqua lorem anim incididunt adipiscing eiusmod labore. Qui nisi ex non deserunt ullamco ex non sunt labore ad deserunt commodo sed.</p>
<p><em>Ex anim labore eiusmod labore incididunt ullamco nulla irure cillum.</em> Duis ad cillum lorem ex occaecat velit dolor adipiscing ullamco. Nisi sunt velit commodo cillum est ullamco anim velit dolore lorem ex. Reprehenderit adipiscing sunt ex eiusmod excepteur.</p>
<p><em>Irure amet velit cillum duis sed sunt occaecat.</em> Duis sunt eiusmod labore anim est commodo dolor anim sunt. Reprehenderit labore nisi nisi anim nisi. Commodo lorem ex ad labore veniam incididunt ad est ullamco velit velit.</p>
<p><em>Sunt eiusmod reprehenderit dolore non ad ex amet dolore nisi.</em> Irure nostrud excepteur anim dolor labore veniam adipiscing deserunt irure labore amet anim deserunt. Dolore sed dolor occaecat duis non dolor nulla eiusmod deserunt amet duis. Sed velit deserunt aliqua occaecat nisi ullamco labore amet cillum non aliqua nisi nulla.</p>
<p><em>Sunt dolore deserunt sunt dolore incididunt irure duis excepteur sed ex sunt.</em> Nulla dolore sunt irure nulla non qui sit adipiscing ad ad reprehenderit. Incididunt ad duis veniam adipiscing sunt labore labore dolor cillum. Non sunt sunt amet nostrud adipiscing cillum labore non adipiscing sunt deserunt.</p>
<p><em>Irure veniam excepteur deserunt ullamco est labore nulla.</em> Incididunt aliqua ex excepteur non commodo veniam aliqua cillum aliqua adipiscing nulla. Labore lorem ex sunt elit commodo. Est dolor labore reprehenderit excepteur ad ullamco amet adipiscing excepteur deserunt cillum.</p>
<p><em>Commodo eiusmod nulla non irure aliqua non qui excepteur nulla lorem labore.</em> Nostrud est ullamco cillum reprehenderit cillum. Sunt adipiscing non ullamco veniam reprehenderit ad amet sed eiusmod incididunt commodo ad sed. Anim dolor est commodo reprehenderit nisi deserunt labore adipiscing irure nostrud non.</p>
<p><em>Dolor ullamco duis ad adipiscing dolor.</em> Excepteur excepteur eiusmod ex dolor eiusmod eiusmod excepteur qui aliqua labore sunt lorem cillum. Irure nulla veniam lorem dolor labore. Incididunt ad cillum aliqua dolor lorem amet ex occaecat veniam.</p>
<p><em>Dolore ex dolor deserunt sunt excepteur lorem aliqua.</em> Cillum est amet aliqua ad adipiscing nostrud nostrud duis nulla incididunt cillum labore sint. Ullamco occaecat nisi duis ullamco duis. Qui adipiscing ad sed est excepteur adipiscing reprehenderit.</p>
<p><em>Ad sunt labore anim veniam veniam ad ad qui duis est commodo.</em> Excepteur est adipiscing deserunt nulla nostrud. Ex sed dolor anim nostrud qui. Commodo qui non veniam aliqua incididunt est excepteur sed eiusmod adipiscing adipiscing non ullamco.</p>
<p><em>Anim nulla incididunt cillum est non reprehenderit sed sunt nulla.</em> Dolore excepteur anim amet deserunt veniam. Est aliqua nulla duis eiusmod commodo. Amet ex ad excepteur commodo excepteur ullamco nulla et dolor nulla non reprehenderit excepteur.</p>
<p><em>Ad lorem ex velit lorem nisi ad lorem veniam duis dolor excepteur.</em> Adipiscing nulla duis ex nisi dolore. Incididunt lorem ex cillum ad ex lorem adipiscing. Qui cillum ex eiusmod incididunt veniam nisi ex nulla incididunt.</p>
<p><em>Lorem deserunt ullamco cillum ex sunt ullamco amet irure sed lorem nulla velit dolor.</em> Reprehenderit commodo anim ad ullamco dolor incididunt excepteur adipiscing ex. Ex dolore aliqua ex cillum ullamco nostrud sunt nostrud velit. Amet nisi dolore nulla eiusmod irure anim cillum commodo incididunt nostrud incididunt eiusmod veniam.</p>
<p><em>Ut eiusmod duis dolore eiusmod velit lorem veniam excepteur anim nisi adipiscing.</em> Velit sed sunt anim est dolor nisi veniam ad commodo. Reprehenderit nostrud duis est nisi sed qui commodo occaecat eiusmod. Veniam sunt amet sunt commodo sed ullamco est.</p>
<p><em>Velit adipiscing non excepteur sunt ad.</em> Eiusmod reprehenderit ullamco lorem anim deserunt duis ullamco. Labore irure velit excepteur labore est veniam adipiscing. Nostrud eiusmod eiusmod nulla labore nostrud.</p>
<p><em>Reprehenderit labore anim sunt anim lorem.</em> Incididunt excepteur ullamco dolore reprehenderit qui duis velit ad sed ullamco sunt. Est ex velit duis veniam reprehenderit nulla ex nulla ad duis incididunt amet est. Adipiscing dolore excepteur labore sed commodo labore aliqua.</p>
<p><em>Adipiscing adipiscing velit labore incididunt eiusmod.</em> Incididunt est nostrud nisi veniam adipiscing est nulla. Eiusmod reprehenderit non occaecat excepteur excepteur occaecat ex velit aliqua occaecat amet. Lorem amet ex occaecat qui dolore lorem ullamco nulla irure.</p>
<p><em>Dolore ex velit nostrud aliqua nulla.</em> Nulla ullamco cillum sed duis reprehenderit reprehenderit est. Excepteur ullamco amet ex ullamco sunt ullamco ad nulla nisi. Sunt deserunt incididunt incididunt irure non cillum occaecat qui est incididunt adipiscing.</p>
<p><em>Dolore ullamco incididunt lorem labore reprehenderit duis excepteur veniam ex.</em> Sunt commodo deserunt adipiscing dolore eiusmod dolor ea qui sed cillum duis. Incididunt non commodo anim qui nulla. Aliqua incididunt amet dolore nisi sed non occaecat adipiscing dolor.</p>
<p><em>Est veniam lorem aliqua qui nulla.</em> Incididunt qui labore deserunt lorem amet dolore irure. Lorem commodo commodo reprehenderit ad duis adipiscing qui dolor ullamco ex adipiscing. Ex eiusmod commodo dolore deserunt labore dolore non occaecat qui.</p>
<p><em>Duis velit sunt nulla sunt ad deserunt ullamco deserunt commodo qui est.</em> Ullamco dolore deserunt lorem aliqua incididunt ullamco dolor amet excepteur nisi deserunt excepteur amet. Fugiat occaecat amet cillum nulla est qui irure. Duis nostrud veniam est non adipiscing.</p>
<p><em>Commodo qui incididunt adipiscing sint dolor aliqua adipiscing velit non ex dolore veniam velit.</em> Est est irure non commodo nisi cillum commodo nostrud veniam anim ullamco sed amet. Nostrud irure occaecat duis anim non eiusmod nulla sunt nulla qui ex nisi cillum. Veniam nisi ullamco qui commodo incididunt sunt qui.</p>
<p><em>Reprehenderit veniam non excepteur sunt ad adipiscing eiusmod.</em> Est labore deserunt velit ad magna. Cillum lorem commodo velit deserunt anim adipiscing labore non ex est nulla. Deserunt anim non veniam velit culpa sed labore adipiscing amet.</p>
<p><em>Labore non est labore eiusmod dolor sunt veniam.</em> Aliqua qui commodo cillum amet commodo amet aliqua cillum labore eiusmod qui ad nulla. Eiusmod est sunt est adipiscing duis. Qui excepteur lorem amet sed irure amet sed nulla ex.</p>
<p><em>Sed nostrud ullamco nostrud nisi dolor nostrud amet.</em> Aliqua dolore incididunt occaecat aliqua lorem nulla dolor. Excepteur excepteur commodo velit irure deserunt. Deserunt qui veniam nulla est ad amet amet.</p>
<p><em>Veniam non eiusmod qui eiusmod deserunt occaecat lorem.</em> Sed incididunt ullamco lorem irure reprehenderit. Ad dolor ullamco sed incididunt ad anim velit. Veniam anim adipiscing reprehenderit eiusmod veniam excepteur amet dolor est.</p>
<p><em>Amet adipiscing deserunt velit labore duis.</em> Cillum nisi cillum ex veniam cillum occaecat sed. Dolor labore commodo qui eiusmod ad. Anim nulla sunt non ullamco cillum nulla amet.</p>
<p><em>Incididunt adipiscing lorem lorem dolor qui velit sed.</em> Excepteur dolore lorem sed irure deserunt irure incididunt. Aliqua incididunt nulla occaecat velit qui ex deserunt deserunt commodo dolor ex. Excepteur excepteur irure nulla ex dolor non sunt excepteur ullamco.</p>
<p><em>Sunt aliqua cillum adipiscing ad ad dolor deserunt dolore est.</em> Duis aliqua sed sunt nisi qui lorem eiusmod amet ex. Sed commodo cillum duis excepteur non. Ex adipiscing qui ex lorem adipiscing nostrud ullamco occaecat adipiscing sed reprehenderit veniam sed.</p>
<p><em>Excepteur cillum duis aliqua reprehenderit anim labore aliqua ex dolor est dolore.</em> Dolor dolor labore velit excepteur cupidatat veniam deserunt non nisi ullamco dolor. Aliqua lorem incididunt ex occaecat anim ad sunt ex dolore. Ex veniam dolor velit ad adipiscing non labore.</p>
<p><em>Sed irure nostrud dolor velit sed eiusmod eiusmod sed ex.</em> Nisi nulla anim qui sunt eiusmod sunt sed irure lorem velit sed labore aliqua. Est dolor ex qui labore veniam nisi non adipiscing labore duis nostrud anim amet. Sunt eiusmod nulla excepteur adipiscing incididunt ad ad.</p>
<p><em>Incididunt est adipiscing adipiscing nisi ullamco commodo aliqua sunt eiusmod excepteur ad adipiscing est.</em> Occaecat amet qui qui labore est ullamco ex excepteur qui reprehenderit nisi. Nostrud deserunt nostrud anim dolor cillum lorem nostrud anim labore cillum nostrud eiusmod lorem. Dolore sunt labore deserunt ex sunt dolor ullamco commodo nostrud reprehenderit duis veniam excepteur.</p>
<p><em>Excepteur dolor duis amet labore deserunt ex amet nulla duis cillum occaecat.</em> Est ex dolore eiusmod irure commodo. Lorem sunt excepteur dolore lorem nostrud. Amet ad lorem ad anim reprehenderit amet lorem incididunt excepteur adipiscing ex ullamco est.</p>
<p><em>Ullamco veniam amet duis aliqua nulla.</em> Labore nisi anim ex incididunt qui velit irure occaecat cillum labore reprehenderit. Nisi qui irure aliqua nisi occaecat cillum commodo. Reprehenderit nostrud sed deserunt qui qui aliqua amet.</p>
<p><em>Irure amet qui sed incididunt ullamco.</em> Ex incididunt sed sunt reprehenderit lorem. Excepteur commodo duis non nisi velit velit nostrud irure sunt dolore aliqua ex qui. Dolor sed excepteur duis labore deserunt nulla nisi lorem reprehenderit qui est anim cillum.</p>
<p><em>Lorem aliqua ullamco ad sed occaecat dolore occaecat incididunt nostrud dolore adipiscing.</em> Lorem reprehenderit nulla ullamco sunt est ad ex dolor reprehenderit incididunt labore. Eiusmod lorem eiusmod nulla sunt reprehenderit non deserunt ad irure deserunt nostrud aliqua qui. Ex cillum velit ad labore qui velit veniam excepteur reprehenderit nulla sed reprehenderit occaecat.</p>
<p><em>Reprehenderit sed lorem sunt nisi eiusmod eiusmod ipsum.</em> Cillum cillum ad adipiscing ad dolor irure ullamco cillum aliqua. Veniam ex deserunt ex eiusmod eiusmod irure ad qui veniam. Commodo occaecat amet irure anim irure duis lorem.</p>
<p><em>Dolor irure irure nulla incididunt duis dolore lorem ex cillum dolor anim.</em> Velit dolor ullamco reprehenderit lorem duis est nostrud lorem reprehenderit duis nostrud. Cillum deserunt irure reprehenderit non excepteur nulla anim amet veniam nulla irure ad eiusmod. Ullamco velit dolor dolore incididunt commodo.</p>
<p><em>Irure commodo dolor labore nostrud incididunt.</em> Dolor reprehenderit irure qui deserunt aliqua. Qui ullamco velit qui nulla sunt sunt ullamco eiusmod nisi non qui ullamco adipiscing. Excepteur irure duis duis adipiscing nostrud labore dolor lorem cillum commodo velit adipiscing velit.</p>
<p><em>Dolore cillum nisi veniam veniam eiusmod amet commodo ex deserunt occaecat excepteur incididunt velit.</em> Amet excepteur aliqua ex adipiscing excepteur dolor lorem deserunt qui dolor duis. Irure qui velit amet nisi non sed adipiscing occaecat deserunt. Eiusmod sunt lorem incididunt ullamco ad commodo cillum.</p>
<p><em>Aliqua reprehenderit eiusmod nisi velit amet.</em> Eiusmod reprehenderit ullamco sunt ullamco nostrud anim aliqua ad non. Adipiscing dolor lorem labore ad duis reprehenderit amet. Velit excepteur commodo ullamco nisi reprehenderit velit qui excepteur nostrud veniam lorem dolore est.</p>
<p>Dolore adipiscing aliqua adipiscing sed anim nostrud duis. <em>Est nisi ullamco ad est amet.</em> Irure eiusmod incididunt excepteur nostrud lorem anim dolor ullamco aliqua labore aliqua anim adipiscing. Cillum lorem occaecat duis nulla ullamco nostrud commodo veniam labore commodo ex.</p>
<p><em>Dolor labore occaecat reprehenderit non occaecat anim dolore irure commodo.</em> Nulla anim incididunt dolore sunt nisi sunt incididunt nostrud sed. Ullamco irure dolor excepteur duis nisi sed deserunt amet sed cillum ullamco anim irure. Velit labore sed nostrud amet reprehenderit commodo irure.</p>
<p><em>Nostrud duis commodo adipiscing duis dolore occaecat est sunt deserunt ullamco excepteur aliqua ullamco.</em> Irure duis non adipiscing nostrud incididunt incididunt ad dolor nostrud. Ad sunt aliqua deserunt est aliqua dolore ad non occaecat non adipiscing. Ex dolore amet reprehenderit nulla duis.</p>
<p><em>Incididunt ex irure ex veniam incididunt nisi eiusmod excepteur nostrud.</em> Excepteur dolor non sed nulla anim cillum aliqua dolore qui veniam eiusmod. Sed commodo reprehenderit duis lorem incididunt incididunt eiusmod. Nulla ad nulla labore incididunt reprehenderit sunt aliqua dolore dolore.</p>
<p><em>Eiusmod ex duis est nisi non nostrud non aliqua sunt.</em> Lorem veniam nisi qui anim commodo dolore incididunt incididunt amet sunt ullamco velit ullamco. Incididunt est ex anim sed deserunt occaecat non dolore labore. Amet ad ex est sed incididunt sunt dolor reprehenderit ex.</p>
<p><em>Labore nulla ullamco occaecat duis excepteur.</em> Est nisi ullamco deserunt aliqua amet incididunt nisi excepteur sunt commodo deserunt. Anim irure nulla excepteur amet eiusmod dolor veniam amet amet voluptate cillum adipiscing aliqua. Nostrud cillum excepteur lorem non labore dolore commodo ad excepteur.</p>
<p><em>Adipiscing deserunt nisi adipiscing cillum velit irure sunt cillum non amet commodo.</em> Dolore reprehenderit nostrud duis non ullamco est labore aliqua anim velit anim labore nisi. Aliqua adipiscing anim reprehenderit amet irure sunt occaecat eiusmod excepteur qui labore ullamco sunt. Ullamco irure veniam amet est ullamco adipiscing occaecat adipiscing lorem ad deserunt.</p>
<p><em>Cillum nisi incididunt incididunt amet velit sunt nisi anim irure veniam dolore ad cillum.</em> Aliqua aliqua amet ullamco non eiusmod veniam ex. Irure reprehenderit dolore irure ad nisi amet dolore occaecat cillum lorem anim duis qui. Velit cillum dolore commodo reprehenderit est deserunt duis deserunt duis.</p>
<p><em>Amet ex nisi nulla incididunt ad non dolor lorem nostrud.</em> Excepteur deserunt dolor non anim velit nisi non commodo sunt non duis velit reprehenderit. Sed nisi sunt deserunt excepteur dolore sunt ullamco. Commodo occaecat duis irure veniam nostrud anim eiusmod occaecat dolore.</p>
<p><em>Cillum nostrud nulla nulla ullamco non duis adipiscing labore dolore dolore qui.</em> Amet cillum nulla adipiscing sed ullamco labore lorem ex velit. Nisi labore nostrud anim sunt eiusmod nisi dolor eiusmod non reprehenderit ullamco qui occaecat. Occaecat veniam occaecat commodo non est velit labore velit ex.</p>
<p><em>Excepteur qui nostrud amet occaecat deserunt labore irure occaecat cillum nulla sed veniam ex.</em> Est cillum dolor ad velit labore dolore ullamco. Nisi ullamco adipiscing veniam labore aliqua est incididunt nisi eiusmod est nisi. Qui nisi reprehenderit irure occaecat incididunt velit ex cillum veniam nisi cillum commodo aliqua.</p>
<p><em>Nulla veniam sunt non deserunt cillum.</em> Aliqua occaecat incididunt sunt sunt excepteur veniam est. Nostrud deserunt dolor amet est sed. Qui qui deserunt duis dolore duis.</p>
<p><em>Qui ad nisi non lorem anim ex occaecat sunt anim.</em> Ullamco irure sed sed anim veniam. Labore sed nostrud est veniam excepteur. Aliqua dolore velit reprehenderit dolor occaecat qui occaecat.</p>
<p><em>Nulla aliqua nisi veniam nostrud duis.</em> Dolore dolore eiusmod lorem ullamco nostrud est velit occaecat sunt excepteur sed amet excepteur. Ad anim est anim anim lorem labore nostrud anim sed. Irure cillum commodo anim est nostrud dolor sunt occaecat non ullamco eiusmod ex non.</p>
<p><em>Reprehenderit dolore est qui aliqua ex.</em> Aliqua commodo non ad qui qui. Nostrud anim deserunt id commodo sunt ex commodo sunt occaecat. Nulla occaecat aliqua commodo sed excepteur adipiscing labore.</p>
<p><em>Aliqua veniam velit est dolore sunt sunt qui dolore nostrud nostrud veniam veniam ad.</em> Incididunt nostrud lorem eiusmod excepteur est velit commodo sunt eiusmod nisi velit qui incididunt. Est sed aliqua non qui adipiscing eiusmod excepteur. Eiusmod irure ullamco commodo incididunt ex dolore ad incididunt velit duis aliqua commodo aliqua.</p>
<p><em>Reprehenderit reprehenderit aliqua occaecat nostrud nostrud amet lorem adipiscing aliqua.</em> Deserunt aliqua dolore cillum labore occaecat. Deserunt deserunt irure nisi commodo nulla incididunt ad. Dolor amet duis aliqua labore sunt.</p>
<p><em>Nulla nostrud dolore nostrud ad nulla ullamco nulla.</em> Sed dolor anim excepteur dolore deserunt qui velit labore aliqua. Sed labore anim dolore sunt ex labore dolore ullamco ad. Nostrud cillum occaecat adipiscing aliqua veniam.</p>
<p><em>Amet aliqua sunt qui ullamco lorem.</em> Lorem deserunt labore dolore ullamco adipiscing adipiscing veniam nisi ex voluptate commodo. Dolor veniam veniam nisi dolore adipiscing nulla veniam anim incididunt. Sed velit irure est sunt lorem reprehenderit nostrud veniam ad.</p>
<p><em>Nisi deserunt ullamco lorem nulla sed velit commodo incididunt duis velit nisi.</em> Ullamco adipiscing veniam amet dolor dolore sed commodo excepteur non nostrud irure. Ullamco adipiscing incididunt irure excepteur ex sed sunt. Sunt lorem veniam occaecat sunt ad.</p>
<p><em>Aliqua nostrud incididunt ea lorem reprehenderit.</em> Occaecat lorem est nisi excepteur sed aliqua amet incididunt incididunt eiusmod qui. Labore ex velit duis reprehenderit velit nulla cillum eiusmod ullamco. Nisi nostrud deserunt ad lorem deserunt eiusmod adipiscing commodo veniam.</p>
<p><em>Occaecat reprehenderit excepteur amet cillum lorem irure nulla ullamco ullamco duis amet.</em> Veniam adipiscing veniam ex amet veniam. Nulla ullamco aliqua dolor anim qui labore anim labore nisi. Adipiscing non deserunt eiusmod est velit occaecat nisi non amet cillum dolor ullamco aliqua.</p>
<p><em>Irure sed excepteur nulla occaecat cillum ad commodo eiusmod duis.</em> Lorem ex veniam excepteur nisi sed commodo incididunt deserunt non non velit nisi duis. Nulla amet ad commodo nostrud cillum occaecat lorem est occaecat velit amet excepteur lorem. Cillum qui lorem irure deserunt incididunt.</p>
<p><em>Velit amet nostrud velit labore irure sed reprehenderit ad occaecat.</em> Excepteur occaecat velit cillum cillum est. Labore duis deserunt qui sunt aliqua sed ad amet veniam sed ex nisi aliqua. Nostrud amet duis lorem dolor est reprehenderit.</p>
<p><em>Excepteur anim est ad nostrud labore ex eiusmod eiusmod nisi amet ullamco.</em> Amet commodo occaecat qui commodo dolore occaecat sed excepteur cillum. Nisi dolore occaecat occaecat amet qui veniam nisi. Lorem dolore reprehenderit amet aliqua irure.</p>
<p><em>Ex ullamco aliqua nisi aliqua ex commodo deserunt reprehenderit dolor.</em> Excepteur duis eiusmod ex commodo ullamco nisi nostrud velit nulla aliqua veniam. Nisi sunt est lorem lorem incididunt adipiscing non eiusmod eiusmod aliqua velit sed aliqua. Anim sunt adipiscing velit reprehenderit dolor occaecat ullamco.</p>
<p><em>Sed velit ex lorem aliqua incididunt sed occaecat commodo excepteur.</em> Nulla aliqua velit labore nulla et lorem ullamco. Sed velit amet lorem veniam non reprehenderit ex. Ex amet nostrud aliqua ex nostrud sed ex incididunt cillum ex ex.</p>
<p><em>Deserunt duis aliqua labore ad ad velit nulla.</em> Nisi duis dolor sed ex cillum nisi incididunt. Irure nisi sed lorem commodo lorem qui velit. Eiusmod lorem dolore occaecat aliqua ex deserunt qui commodo commodo.</p>
<p><em>Adipiscing dolor veniam cillum cillum irure.</em> Commodo adipiscing irure qui cillum velit excepteur est sunt sed anim labore. Commodo sunt ex veniam reprehenderit nulla sunt non est dolore. Qui occaecat lorem mollit nisi anim labore dolor occaecat incididunt.</p>
<p><em>Aliqua occaecat nulla sunt excepteur sunt lorem anim ex qui aliqua est.</em> Nisi dolore duis ad sed ullamco eiusmod ullamco veniam deserunt non veniam adipiscing occaecat. Occaecat deserunt sed velit aliqua labore non excepteur. Eiusmod est irure ex velit velit.</p>
<p><em>Commodo labore ullamco amet lorem eiusmod dolore adipiscing velit lorem.</em> Ex excepteur eiusmod excepteur commodo occaecat veniam ex duis dolore ex occaecat. Amet nostrud lorem veniam reprehenderit cillum est ullamco irure anim incididunt ullamco sed nisi. Nulla occaecat sed ullamco dolore occaecat.</p>
<p><em>Eiusmod est incididunt sed cillum deserunt lorem duis aliqua ad ex ullamco.</em> Anim dolor duis non non velit non anim. Eiusmod cillum ullamco cillum ex deserunt nisi sunt excepteur adipiscing nisi commodo qui est. Est incididunt irure est est ex deserunt commodo aliqua ad qui sed aliqua reprehenderit.</p>
<p><em>Ad labore excepteur reprehenderit cillum veniam eiusmod incididunt occaecat duis velit amet aliqua adipiscing.</em> Labore amet est veniam commodo anim. Ad eiusmod ex excepteur lorem velit qui reprehenderit. Duis ex ad nulla lorem ullamco.</p>
<p><em>Ex qui est labore nostrud sed ullamco deserunt eiusmod non veniam nisi amet qui.</em> Ex ad sunt deserunt nulla deserunt. Deserunt duis eiusmod nulla sunt adipiscing commodo nostrud irure nostrud duis labore. Qui cillum lorem non deserunt incididunt.</p>
<p><em>Sed excepteur dolore dolor irure anim irure labore lorem sunt.</em> Aliqua labore eiusmod est non irure dolore eiusmod nulla lorem nulla deserunt excepteur anim. Aliqua non occaecat ad nulla nostrud deserunt dolor. Velit qui nisi sed dolore non ex dolore.</p>
<p><em>Qui eiusmod ullamco dolore deserunt qui.</em> Dolore labore amet sunt reprehenderit lorem. Qui veniam non ullamco qui dolore labore adipiscing. Eiusmod dolor velit qui dolor est non incididunt qui est adipiscing ex anim aliqua.</p>
<p><em>Velit dolor veniam deserunt veniam nulla adipiscing eiusmod occaecat eiusmod non amet.</em> Dolore qui velit ex labore adipiscing veniam excepteur reprehenderit sunt. Occaecat lorem reprehenderit reprehenderit eiusmod sed dolore cillum est commodo. Labore nostrud sed sunt anim occaecat.</p>
<p><em>Sunt deserunt ullamco dolor velit dolor amet aliqua dolore incididunt.</em> Lorem occaecat dolore qui lorem anim ullamco reprehenderit non nostrud commodo reprehenderit nisi deserunt. Duis aliqua duis lorem ex excepteur velit dolor incididunt adipiscing. Ex eiusmod commodo excepteur qui velit ad qui deserunt veniam nostrud excepteur.</p>
<p><em>Reprehenderit aliqua irure amet veniam non excepteur aliqua.</em> Nostrud qui veniam sed labore eiusmod nulla anim labore veniam sunt anim. Adipiscing velit anim sed amet dolor incididunt veniam amet qui. Dolore ad dolor labore est excepteur incididunt anim cillum nisi.</p>
<p><em>Deserunt nulla deserunt deserunt dolor nulla adipiscing est dolor ex ad amet.</em> Ad deserunt dolor qui lorem adipiscing duis dolore labore est sed amet incididunt sed. Aliqua est ullamco deserunt dolor anim irure dolore cillum est nisi adipiscing. Cillum lorem labore nisi incididunt veniam aliqua incididunt occaecat qui.</p>
<p><em>Eiusmod incididunt aliqua veniam veniam aliqua.</em> Labore irure veniam ad nostrud dolor nisi labore. Duis nulla occaecat non duis aliqua cillum ullamco. Non velit nisi duis incididunt sunt qui non incididunt sunt.</p>
<p><em>Veniam qui sed sunt est reprehenderit.</em> Nisi est ex excepteur qui qui. Deserunt commodo reprehenderit reprehenderit aliqua sed irure nulla qui dolor. Dolor aliqua cillum cillum anim nostrud velit labore ex deserunt.</p>
<p>Deserunt reprehenderit aliqua lorem commodo sed. Nisi dolore sed nulla incididunt qui. Velit est incididunt qui dolor est sunt velit irure dolor est occaecat eiusmod aliqua. Veniam velit anim occaecat irure ullamco.</p>
<p><em>Sed commodo reprehenderit nisi ex nulla sed velit.</em> Est labore reprehenderit sed irure aliqua amet lorem aliqua qui nisi cillum ad occaecat. Ad veniam est duis incididunt adipiscing. Labore labore excepteur aliqua labore incididunt sed nulla ex ex velit irure occaecat sed.</p>
<p><em>Duis reprehenderit duis ex nostrud qui nulla commodo.</em> Velit aliqua aliqua veniam non cillum excepteur anim non nulla. Velit duis nostrud incididunt qui ad pariatur irure qui labore. Sunt lorem excepteur dolor labore nulla ullamco commodo.</p>
<p><em>Reprehenderit qui excepteur ullamco labore amet nostrud sed adipiscing nulla nisi ex qui irure.</em> Adipiscing ad duis veniam duis excepteur incididunt veniam nisi duis cillum deserunt. Velit est dolore dolor ex ex. Nostrud reprehenderit dolore anim commodo incididunt sed excepteur.</p>
<p><em>Sed sed incididunt dolore ad nostrud.</em> Cillum irure duis aliqua deserunt velit anim adipiscing adipiscing sed aliqua ullamco. Duis qui occaecat velit lorem anim deserunt non aliqua ullamco sed commodo. Excepteur amet occaecat duis aliqua nostrud.</p>
<p><em>Sed irure est velit veniam deserunt sunt lorem nulla lorem.</em> Anim duis ullamco nulla dolor excepteur est adipiscing dolore ex qui cillum ullamco ullamco. Ullamco dolor anim cillum dolore non aliqua ad lorem deserunt reprehenderit duis anim reprehenderit. Veniam incididunt occaecat anim ullamco incididunt.</p>
<p><em>Ad aliqua dolore ullamco dolore irure.</em> Duis lorem occaecat qui qui dolore anim lorem ullamco aliqua. Dolor sed dolor sunt labore nostrud. Nostrud veniam amet nisi sed anim qui aliqua aliqua reprehenderit adipiscing commodo est nulla.</p>
<p><em>Qui commodo aliqua sed amet est dolor cillum aliqua adipiscing reprehenderit dolor.</em> Est ad non ex non cillum dolore occaecat eiusmod dolor adipiscing reprehenderit ullamco labore. Nostrud occaecat occaecat nostrud ullamco labore. Nulla nostrud reprehenderit duis qui nisi commodo qui excepteur ullamco ullamco sunt lorem dolore.</p>
<p><em>Ad labore labore sunt dolore ullamco dolor labore commodo sunt.</em> Sunt ad aliqua non reprehenderit incididunt ex eiusmod velit incididunt nisi irure. Ex nisi lorem labore irure occaecat reprehenderit sed occaecat deserunt aliqua irure nulla lorem. Veniam irure velit eiusmod incididunt incididunt ad ex ad lorem velit ad.</p>
<p><em>Duis nisi ullamco labore anim veniam lorem aliqua.</em> Lorem ad dolore adipiscing nulla veniam dolore adipiscing adipiscing est. Nulla sunt amet est deserunt lorem. Aliqua cillum est irure amet adipiscing velit aliqua est nostrud nisi velit adipiscing velit.</p>
<p><em>Eiusmod non deserunt id ad adipiscing qui amet nulla nostrud.</em> Incididunt est irure occaecat non anim. Voluptate commodo sed reprehenderit est dolor deserunt ullamco nisi ex nisi irure dolore occaecat. Nostrud sunt irure commodo eiusmod anim deserunt reprehenderit ad non nulla est.</p>
<p><em>Anim ex amet ad non sed adipiscing ullamco labore non incididunt excepteur.</em> Reprehenderit reprehenderit ad incididunt excepteur amet adipiscing commodo qui dolor. Irure labore sed occaecat ex ullamco. Nisi ad lorem sed eiusmod ullamco.</p>
<p><em>Ad sunt labore occaecat excepteur dolore amet occaecat lorem incididunt.</em> Incididunt nostrud adipiscing excepteur amet anim. Excepteur nostrud dolore commodo est adipiscing labore velit excepteur irure. Excepteur dolore deserunt occaecat amet non dolore sed nulla anim.</p>
<p><em>Nulla incididunt nostrud deserunt est adipiscing lorem lorem duis sed cillum dolor.</em> Non ex est reprehenderit deserunt velit adipiscing sed irure non. Commodo cillum nulla adipiscing velit eiusmod anim ullamco amet anim. Ex deserunt aliqua anim occaecat aliqua.</p>
<p><em>Anim lorem sunt duis nulla aliqua amet aliqua lorem nulla est ullamco lorem sed.</em> Est sunt irure occaecat dolor ullamco aliqua anim excepteur lorem reprehenderit occaecat. Cillum deserunt nostrud occaecat dolor dolore ex occaecat duis deserunt. Aliqua incididunt occaecat adipiscing dolor cillum.</p>
<p><em>Veniam nisi qui occaecat velit veniam lorem ullamco adipiscing velit ad dolor anim incididunt.</em> Sunt adipiscing non est nostrud aliqua nulla est labore ad nostrud cillum. Velit aliqua irure ad cillum ullamco sunt adipiscing excepteur aliqua reprehenderit duis. Dolore qui est nostrud qui excepteur anim aliqua ad incididunt ad eiusmod velit ullamco.</p>
<p><em>Commodo anim amet aliqua eiusmod occaecat.</em> Anim deserunt ad ad cupidatat labore excepteur duis. Sed velit est adipiscing non cillum ullamco est dolor est deserunt deserunt. Est duis est reprehenderit ad lorem sunt non sed aliqua anim dolor.</p>
<p><em>Excepteur dolor duis est nostrud irure nulla amet sunt.</em> Commodo cillum reprehenderit qui eiusmod non incididunt nulla ex ex. Non sed labore ex aliqua veniam adipiscing labore occaecat irure nulla labore sunt dolor. Commodo anim cillum anim duis adipiscing ullamco eiusmod sed ad nulla deserunt irure excepteur.</p>
<p><em>Nostrud sed nulla qui nostrud est occaecat irure irure eiusmod.</em> Irure veniam adipiscing excepteur veniam nostrud. Anim ex anim ullamco amet reprehenderit eiusmod commodo excepteur lorem irure ullamco. Nulla dolore et anim labore veniam.</p>
<p><em>Eiusmod adipiscing ullamco sed cillum velit nostrud sed cillum deserunt nostrud sunt eiusmod dolore.</em> Velit non cillum deserunt ullamco ullamco cillum ullamco lorem commodo duis ad ullamco incididunt. Excepteur deserunt dolore sunt qui ullamco ex cillum ullamco velit commodo sunt lorem reprehenderit. Reprehenderit labore est velit veniam deserunt deserunt non.</p>
<p><em>Reprehenderit irure deserunt nostrud occaecat excepteur incididunt dolor occaecat est veniam sunt.</em> Occaecat anim sed sunt cillum ex nisi incididunt duis excepteur occaecat est. Nostrud veniam velit reprehenderit ullamco cillum. Commodo deserunt occaecat nulla irure sunt.</p>
<p><em>Nisi aliqua nulla eiusmod adipiscing duis amet occaecat adipiscing sed.</em> Nulla dolor deserunt anim ad velit. Labore nostrud incididunt est occaecat aliqua. Incididunt veniam qui irure est occaecat veniam anim dolore anim veniam nulla.</p>
<p><em>Reprehenderit reprehenderit dolore ex non qui.</em> Non incididunt est adipiscing dolor incididunt dolor deserunt dolore amet dolore qui. Nostrud cillum reprehenderit dolor dolore nulla anim ad labore occaecat commodo aliqua amet duis. Reprehenderit cillum velit lorem qui deserunt nulla dolore ex nulla.</p>
<p><em>Commodo adipiscing sunt lorem qui est dolor incididunt ad excepteur nostrud aliqua reprehenderit duis.</em> Ad non ex eiusmod anim velit lorem occaecat adipiscing ex. Reprehenderit irure sed eiusmod cillum ullamco reprehenderit duis occaecat adipiscing. Sed incididunt amet lorem sunt incididunt.</p>
<p><em>Eiusmod dolore labore velit occaecat ullamco sed occaecat.</em> Qui anim reprehenderit dolore veniam lorem labore cillum est irure. Incididunt ex sed est amet veniam. Adipiscing occaecat ullamco sunt reprehenderit deserunt eiusmod sed amet labore dolor velit.</p>
<p><em>Sunt ad occaecat non velit irure.</em> Ad sunt nulla excepteur incididunt veniam est reprehenderit dolor lorem anim ad dolore velit. Nisi velit velit qui irure cillum nisi adipiscing duis duis. Reprehenderit est adipiscing reprehenderit sed dolor.</p>
<p><em>Anim irure ex eiusmod velit incididunt est commodo irure cillum irure reprehenderit nostrud nostrud.</em> Cillum veniam irure anim amet dolor. Velit duis anim ad deserunt incididunt anim lorem veniam incididunt veniam nostrud sed minim. Duis nostrud lorem irure aliqua eiusmod irure ad cillum lorem est labore.</p>
<p><em>Dolor incididunt nulla est adipiscing sunt.</em> Excepteur occaecat adipiscing reprehenderit excepteur amet irure nostrud non ex. Adipiscing aliqua sunt anim velit velit dolor ullamco ex est. Veniam duis sed non nisi adipiscing.</p>
<p><em>Lorem eiusmod amet labore reprehenderit labore sunt nisi est anim.</em> Qui deserunt cillum nostrud duis occaecat cillum velit dolore qui. Irure est ad lorem commodo sed commodo incididunt. Adipiscing cillum duis est duis nulla excepteur non lorem excepteur.</p>
<p><em>Dolore duis qui qui dolore incididunt incididunt incididunt incididunt reprehenderit adipiscing eiusmod.</em> Sed nisi ex nisi labore deserunt irure est sunt reprehenderit. Reprehenderit cillum dolore veniam excepteur deserunt ullamco ullamco cillum amet eiusmod velit. Non deserunt cillum reprehenderit amet duis adipiscing ex nostrud veniam commodo labore nostrud labore.</p>
<p><em>Sunt qui dolore eiusmod nostrud ullamco.</em> Dolor commodo deserunt dolor incididunt excepteur adipiscing velit. Commodo amet irure ad labore deserunt. Cillum nulla sunt nulla irure duis sunt ad excepteur dolor sunt veniam.</p>
<p><em>Est commodo duis dolor ad nisi.</em> Nulla cillum commodo veniam reprehenderit duis nulla non adipiscing nostrud commodo velit. Duis adipiscing ad dolor lorem irure duis reprehenderit est duis veniam duis. Anim aliqua eiusmod duis anim deserunt incididunt deserunt nulla commodo.</p>
<p><em>Amet aliqua reprehenderit est nisi irure lorem duis qui deserunt sunt nulla cillum velit.</em> Est irure anim adipiscing cupidatat eiusmod. Aliqua dolore adipiscing ex qui nostrud. Incididunt non cillum excepteur labore duis adipiscing labore.</p>`,
	endNotes:
		"<p>Incididunt velit eiusmod duis incididunt labore labore deserunt sunt dolor cillum ad. Sed amet est ullamco velit qui dolore do qui aliqua duis ex cillum occaecat.</p><p>Veniam labore velit cillum labore irure velit ex ad dolore.</p>",
};

// ---- values ----
const esc = (s) => String(s ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
export const splitTags = (s) =>
	Array.isArray(s)
		? s.map((t) => String(t).trim()).filter(Boolean)
		: String(s ?? "")
				.split(",")
				.map((t) => t.trim())
				.filter(Boolean);

/** cleanWork(raw) → a full, typed set of values (unknown keys dropped, bad values → default) */
export function cleanWork(raw) {
	const v = raw && typeof raw === "object" ? raw : {};
	const out = {};
	for (const f of WORK_FIELDS) {
		const d = WORK_DEFAULTS[f.id];
		const x = v[f.id];
		if (f.kind === "select") out[f.id] = f.options.includes(x) ? x : d;
		else if (f.kind === "checks") out[f.id] = Array.isArray(x) ? x.filter((o) => f.options.includes(o)) : d;
		else if (f.kind === "tags") out[f.id] = x == null ? d : splitTags(x);
		else out[f.id] = x == null ? d : String(x);
	}
	return out;
}
export const sameWork = (a, b) => JSON.stringify(cleanWork(a)) === JSON.stringify(cleanWork(b));

// ---- the page ----
// AO3's own markup for each part; a tag is a link, a list of them is <li>s
// inside the page's existing <ul class="commas">.
const tagHref = (t) => "/tags/" + encodeURIComponent(t.replace(/\//g, "*s*")) + "/works";
export const tagListHtml = (tags) => splitTags(tags).map((t) => `<li><a class="tag" href="${esc(tagHref(t))}">${esc(t)}</a></li>`).join("");
export const summaryHtml = (html) => (String(html ?? "").trim() ? `<div class="summary module">\n\t\t\t<h3 class="heading">Summary:</h3>\n\t\t\t\t<blockquote class="userstuff">\n\t\t\t\t\t${html}\n\t\t\t\t</blockquote>\n\t\t</div>` : "");
export function notesHtml(notes, endNotes) {
	const has = String(notes ?? "").trim(), hasEnd = String(endNotes ?? "").trim();
	if (!has && !hasEnd) return "";
	const body = has ? `\t<blockquote class="userstuff">${notes}</blockquote>\n` : "";
	const jump = hasEnd ? `\t<p class="jump">\n\t\t\t(See the end of the work for ${has ? "more " : ""}<a href="#work_endnotes">notes</a>.)\n\t</p>\n` : "";
	return `<div class="notes module">\n<h3 class="heading">Notes:</h3>\n${body}${jump}</div>`;
}
export const endNotesHtml = (html) => (String(html ?? "").trim() ? `<div id="work_endnotes" class="end notes module">\n<h3 class="heading">Notes:</h3>\n<blockquote class="userstuff">${html}</blockquote>\n</div>` : "");

// the chapter's own preface/afterword (chapters-show markup), only when filled
export function chapterPrefaceHtml(v) {
	const title = String(v.chapterTitle ?? "").trim(), sum = String(v.chapterSummary ?? "").trim(), notes = String(v.chapterNotes ?? "").trim();
	if (!title && !sum && !notes) return "";
	let h = '<div class="chapter preface group">\n';
	h += `<h3 class="title">${title ? esc(title) : "Chapter 1"}</h3>\n`;
	if (sum) h += `<div id="summary" class="summary module">\n<h3 class="heading">Summary:</h3>\n<blockquote class="userstuff">${v.chapterSummary}</blockquote>\n</div>\n`;
	if (notes) h += `<div id="notes" class="notes module">\n<h3 class="heading">Notes:</h3>\n<blockquote class="userstuff">${v.chapterNotes}</blockquote>\n</div>\n`;
	return h + "</div>\n";
}
export const chapterEndNotesHtml = (html) => (String(html ?? "").trim() ? `<div class="chapter preface group">\n<div id="chapter_1_endnotes" class="end notes module">\n<h3 class="heading">Notes:</h3>\n<blockquote class="userstuff">${html}</blockquote>\n</div>\n</div>` : "");

/** The tokens the work page carries, and what each becomes */
export function workTokens(values) {
	const v = cleanWork(values);
	return {
		RATING_TAGS: tagListHtml([v.rating]),
		WARNING_TAGS: tagListHtml(v.warnings.length ? v.warnings : ["No Archive Warnings Apply"]),
		CATEGORY_TAGS: tagListHtml(v.categories),
		FANDOM_TAGS: tagListHtml(v.fandoms),
		RELATIONSHIP_TAGS: tagListHtml(v.relationships),
		CHARACTER_TAGS: tagListHtml(v.characters),
		FREEFORM_TAGS: tagListHtml(v.freeforms),
		TITLE: esc(v.title),
		AUTHOR: esc(v.author),
		AUTHOR_URL: encodeURIComponent(v.author),
		SUMMARY: summaryHtml(v.summary),
		NOTES: notesHtml(v.notes, v.endNotes),
		END_NOTES: endNotesHtml(v.endNotes),
		CHAPTER_PREFACE: chapterPrefaceHtml(v),
		CHAPTER_TEXT: v.chapterText,
		CHAPTER_END_NOTES: chapterEndNotesHtml(v.chapterEndNotes),
	};
}
export const TOKEN_RE = /\{\{([A-Z_]+)\}\}/g;
/** renderWork(template, values) → the page with every token filled (an unknown token is left as-is) */
export function renderWork(template, values) {
	const t = workTokens(values);
	return String(template ?? "").replace(TOKEN_RE, (m, k) => (k in t ? t[k] : m));
}

// ---- the form ----
const idFor = (f) => "apWork_" + f.id;
export function workFormHtml(values) {
	const v = cleanWork(values);
	let section = "";
	const rows = WORK_FIELDS.map((f) => {
		const head = f.section !== section ? `<h4 class="ap-work-sec">${esc((section = f.section))}</h4>` : "";
		let control;
		if (f.kind === "select") control = `<select id="${idFor(f)}" name="${f.id}">${f.options.map((o) => `<option value="${esc(o)}"${o === v[f.id] ? " selected" : ""}>${esc(o)}</option>`).join("")}</select>`;
		else if (f.kind === "checks") control = `<div class="ap-work-checks">${f.options.map((o, i) => `<label><input type="checkbox" name="${f.id}" value="${esc(o)}" id="${idFor(f)}_${i}"${v[f.id].includes(o) ? " checked" : ""} /> ${esc(o)}</label>`).join("")}</div>`;
		else if (f.kind === "tags") control = `<input type="text" id="${idFor(f)}" name="${f.id}" value="${esc(v[f.id].join(", "))}" placeholder="comma-separated" />`;
		// an html field: a hidden textarea holds the value (readWorkForm reads it)
		// and preview.js mounts a CodeMirror HTML editor in the host beside it
		else if (f.kind === "html") control = `<textarea id="${idFor(f)}" name="${f.id}" rows="${f.rows || 4}" spellcheck="false" hidden>${esc(v[f.id])}</textarea><div class="ap-work-code" data-field="${f.id}" data-rows="${f.rows || 4}"></div>`;
		else control = `<input type="text" id="${idFor(f)}" name="${f.id}" value="${esc(v[f.id])}" />`;
		return `${head}<div class="ap-work-row" data-kind="${f.kind}" data-field="${f.id}"><label for="${idFor(f)}${f.kind === "checks" ? "_0" : ""}">${esc(f.label)}<span class="ap-work-issues" data-for="${f.id}" hidden></span></label>${control}<div class="ap-work-warn" data-for="${f.id}" hidden></div></div>`;
	});
	return rows.join("");
}
/** readWorkForm(root) → the values the form holds now */
export function readWorkForm(root) {
	const out = {};
	for (const f of WORK_FIELDS) {
		if (f.kind === "checks") out[f.id] = Array.from(root.querySelectorAll(`input[name="${f.id}"]:checked`)).map((i) => i.value);
		else {
			const el = root.querySelector(`[name="${f.id}"]`);
			out[f.id] = el ? el.value : WORK_DEFAULTS[f.id];
		}
	}
	return cleanWork(out);
}
