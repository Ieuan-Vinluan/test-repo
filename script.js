if (screen.width < 800) {
	document.querySelector(".gay").innerHTML = "Gay<br>Ships";
	document.querySelector(".lesbian").innerHTML = "Lesbian<br>Ships";
	document.querySelector(".straight").innerHTML = "Straight<br>Ships";
}

var typeShip = 0;
var retainB = false;
var retainG = false;
var boys2022 = [
	[
	"Alteza, Gabriel P. (9 - Beryllium)",
	"Alvarez, Vaugh Axxel C. (9 - Beryllium)",
	"Angeles, Linus Adrian P. (9 - Beryllium)",
	"Antonio, John Aldrin B. (9 - Beryllium)",
	"Austria, Juan Carlos F. (9 - Beryllium)",
	"Baluyot, Vyn Rhed G. (9 - Beryllium)",
	"Batugal, Niko Rae F. (9 - Beryllium)",
	"Cabalu, Joshua Ryan A. (9 - Beryllium)",
	"De Luna, BJ P. (9 - Beryllium)",
	"Dumago, Ezekiel Eduard D. (9 - Beryllium)",
	"Escareal, Jose Rafael A. (9 - Beryllium)",
	"Fontanilla, Louis Marco M. (9 - Beryllium)",
	"Gullon, Deric Miguel C. (9 - Beryllium)",
	"Lozada, Jose Miguel C. (9 - Beryllium)",
	"Paguia, Neil Nubert L. (9 - Beryllium)",
	"Palma, Gabriel Drew S. (9 - Beryllium)",
	"Potot, Aivan Jossua A. (9 - Beryllium)",
	"Rodriguez, Czedrick T. (9 - Beryllium)",
	"Sanchez, Jacob Daniel B. (9 - Beryllium)",
	"Tangonan, Darwin James J. (9 - Beryllium)"
	],
	[
	"Agoot, Elisha Gabriel B. (9 - Cesium)",
	"Amper, Kirk Exequiel O. (9 - Cesium)",
	"Baldonado, Selwyn Matthew F. (9 - Cesium)",
	"Buaron, Gabriel Drew Angelo R. (9 - Cesium)",
	"Cabral, Franco Mari B. (9 - Cesium)",
	"Castillo, Ehren A. (9 - Cesium)",
	"Coralde, Lejand Errol S. (9 - Cesium)",
	"Donila, Michael Diomel G. (9 - Cesium)",
	"Durana, Ian James U. (9 - Cesium)",
	"Fernando, Josemaria Louis D. (9 - Cesium)",
	"Fulgueras, John Troy M. (9 - Cesium)",
	"Gelacio, Ron Angelo A. (9 - Cesium)",
	"Mencias, David Dylan H. (9 - Cesium)",
	"Mundo, Proscoro Ervin II M. (9 - Cesium)",
	"Ramos, Kyle Louis B. (9 - Cesium)",
	"Recio, Enrique D. (9 - Cesium)",
	"Takaki, Daichi Q. (9 - Cesium)",
	"Tan, Ron Lian Nikolaus G. (9 - Cesium)",
	"Torres, Paolo Miguel C. (9 - Cesium)",
	"Trompeta, Seth Marchen S. (9 - Cesium)"
	],
	[
	"Avendaño, Alwynson Jean C. (9 - Lithium)",
	"Belino, Martin Rey G. (9 - Lithium)",
	"Bonzon, Jude Miguel E. (9 - Lithium)",
	"Cardenas, Justin Cyril J. (9 - Lithium)",
	"Dela Cruz, Angelo B. (9 - Lithium)",
	"Delos Santos, Jose Renzo R. (9 - Lithium)",
	"Dimayuga, John Nicholas O. (9 - Lithium)",
	"Embornal, Robert Ydan A. (9 - Lithium)",
	"Gabayno, Mykel Anthon M. (9 - Lithium)",
	"Gonzales, Boris Robert Ynyr E. (9 - Lithium)",
	"Ines, Alano Louis N. (9 - Lithium)",
	"Labro, Vince Allen Chan (9 - Lithium)",
	"Manzano, Jan Gabriel N. (9 - Lithium)",
	"Mejilla, James Elijah G. (9 - Lithium)",
	"Miranda, Frank Lloyd B. (9 - Lithium)",
	"Monsalve, Aaron Zuel A. (9 - Lithium)",
	"Palomar, Wesley Gavin G. (9 - Lithium)",
	"Ruiz, Noeljann S. (9 - Lithium)",
	"Samonte, Jeus Gabriel Nicolo G. (9 - Lithium)",
	"Segarra, Jerald Benjamin T. (9 - Lithium)"
	],
	[
	"Abrigo, Jedd Sebastian R. (9 - Magnesium)",
	"Amor, Sean Merlin (9 - Magnesium)",
	"Batuhinay, Brandon Drexler M. (9 - Magnesium)",
	"Baylon, Charles Christian P. (9 - Magnesium)",
	"Biñas, James Tyrone M. (9 - Magnesium)",
	"De Castro, Anzeldrei Cleo P. (9 - Magnesium)",
	"Doronila, Paolo Andres G. (9 - Magnesium)",
	"Mayo, Jose Raymundo II Y. (9 - Magnesium)",
	"Palitog, Jose Miguel G. (9 - Magnesium)",
	"Prudencio, Jose Romeo M. (9 - Magnesium)",
	"Redoblado, Luis Samuel L. (9 - Magnesium)",
	"Regala, Jose Carlos A. (9 - Magnesium)",
	"Saavedra, Eoghaine Czeriel L. (9 - Magnesium)",
	"Salacup, Timothy Bernardo U. (9 - Magnesium)",
	"Santos, Amos Matthew O. (9 - Magnesium)",
	"Senoja, Jon Owen E. (9 - Magnesium)",
	"Tongko, Renato Jr. T. (9 - Magnesium)",
	"Turno, Antonino Spartacus V. (9 - Magnesium)",
	"Velasco, Godfrey Dewayne F. (9 - Magnesium)",
	"..." 
	],
	[
	"Aquino, Liam Nathaniel Z. (9 - Potassium)",
	"Bermudez, Dominic Lawrence R. (9 - Potassium)",
	"Butial, Joaquin Antonio I. (9 - Potassium)",
	"Carani, Tom Lander M. (9 - Potassium)",
	"Castillo, Ramces C. (9 - Potassium)",
	"Duran, Julian Raymund T. (9 - Potassium)",
	"Elveña,ustine Charles A. (9 - Potassium)",
	"Garcia, Carmelo Josef F. (9 - Potassium)",
	"Jacob, Zach Dominic D. (9 - Potassium)",
	"Lim, Hadriel Luke C. (9 - Potassium)",
	"Madelo, Clester Joseph R. (9 - Potassium)",
	"Matias, Sebastian Gabriel C. (9 - Potassium)",
	"Montalbo, Dayvee Christian C. (9 - Potassium)",
	"Narvasa, Jose Oliver F. (9 - Potassium)",
	"Ong, Mark Gabrielle B. (9 - Potassium)",
	"Pangilinan, Joshua Miguel A. (9 - Potassium)",
	"Ramos, Gabriel C. (9 - Potassium)",
	"Seda, Jopeth Bryan B. (9 - Potassium)",
	"Tee, Gabriel A. (9 - Potassium)",
	"Tenorio, Simon Miguel V. (9 - Potassium)"
	],
	[
	"Acenas, Shaun Marvin S. (9 - Rubidium)",
	"Ainza, Ricardo IV D. (9 - Rubidium)",
	"Aragon, Enrique Miguel M. (9 - Rubidium)",
	"Bermudez, Carl Xander R. (9 - Rubidium)",
	"Bulawin, Nicol Vincent G. (9 - Rubidium)",
	"De Leon, Lourd John T. (9 - Rubidium)",
	"Florin, Djumyrr Isaac A. (9 - Rubidium)",
	"Hernandez, Donn Justin E. (9 - Rubidium)",
	"Herrera, Iñaki Rafael M. (9 - Rubidium)",
	"Lizares, Roque Martin M. (9 - Rubidium)",
	"Lloren, Allen Kerby P. (9 - Rubidium)",
	"Malagar, Juan Antonio Miguel M. (9 - Rubidium)",
	"Manalad, Alperth Jhon D. (9 - Rubidium)",
	"Martinez, Enrico Rolando G. (9 - Rubidium)",
	"Pilapil, Juan Carlos C. (9 - Rubidium)",
	"Rarela, Ryen Timothy E. (9 - Rubidium)",
	"Religioso, Johannes Ruben IV I. (9 - Rubidium)",
	"Robles, Darryl Angelo F. (9 - Rubidium)",
	"Roxas, Jethro Asahel (9 - Rubidium)",
	"Suba, Jose Mariano M. (9 - Rubidium)"
	],
	[
	"Acyatan, Clyde Ambroz S. (9 - Sodium)",
	"Ante, Lorenzo Manuel A. (9 - Sodium)",
	"Aquino, Christian G. (9 - Sodium)",
	"Austria, Ethan Joshua F. (9 - Sodium)",
	"Calixtro, Kurt Ivan E. (9 - Sodium)",
	"Cea, Lorenz Isaak L. (9 - Sodium)",
	"Estrada, Jayvy Raleigh B. (9 - Sodium)",
	"Fernandez, John Nathan T. (9 - Sodium)",
	"Guinto, Joash Lan D. (9 - Sodium)",
	"Lapat, Zachary Zoe C. (9 - Sodium)",
	"Lati, Cyril Reignelle L. (9 - Sodium)",
	"Mañalac, Jason Gabriel P. (9 - Sodium)",
	"Ruiz, Martin John Lenard S. (9 - Sodium)",
	"Santos, Eldon Hubert L. (9 - Sodium)",
	"Saringo, Lance Dylan R. (9 - Sodium)",
	"Tilacas, Charles Q. (9 - Sodium)",
	"Trinidad, Kevin D.R. (9 - Sodium)",
	"Vega, Viay Salvador R. (9 - Sodium)",
	"Velasco, Jose Nicolas M. (9 - Sodium)",
	"Zuñiga, Patrick D. (9 - Sodium)"
	],
	[
	"Abella, Wisdom S. (9 - Strontium)",
	"Anico, Laudemer Andrei C. (9 - Strontium)",
	"Asalan, Boo G. (9 - Strontium)",
	"Carambas, Gabriel Cheo M. (9 - Strontium)",
	"De Jesus, Neil Dominic P. (9 - Strontium)",
	"Deang, Augustin Laurence Timothy U. (9 - Strontium)",
	"Flores, Leoj Eigram (9 - Strontium)",
	"Go, Walter S. (9 - Strontium)",
	"Ilagan, Gerard Elmer D.O. (9 - Strontium)",
	"Khan, Lucas Sebastian F. (9 - Strontium)",
	"Laviste, Christian Francis S. (9 - Strontium)",
	"Loquias, Jake Keifer B. (9 - Strontium)",
	"Maca, Lee Justine V. (9 - Strontium)",
	"Mendoza, Seychel Garnet C. (9 - Strontium)",
	"Orpilla, Uriel Nathan D. (9 - Strontium)",
	"Porciuncula, Chris Jason (9 - Strontium)",
	"Prado, Allen E. (9 - Strontium)",
	"Quintin, Jan Cedrick J. (9 - Strontium)",
	"Taguicana, Denzel James A. (9 - Strontium)",
	"Tan, Frederick Ivan Michael T. (9 - Strontium)"
	]
];
var girls2022 = [
	[
	"Aquino, Sarah Michelle A. (9 - Beryllium)",
	"Candelaria, Arwen Marian K. (9 - Beryllium)",
	"Ilagan, Andrea Kristel K, (9 - Beryllium)",
	"Kiunisala, Kyla M. (9 - Beryllium)",
	"Orig, Dana Gabrielle S. (9 - Beryllium)",
	"Ponferrada, Francine Guia C. (9 - Beryllium)",
	"Sales, Miah Abbielle R. (9 - Beryllium)",
	"Soriano, Maria Sancia Angelica H. (9 - Beryllium)",
	"Ugaban, Gian Karla M. (9 - Beryllium)",
	"Villanueva, Julianna G. (9 - Beryllium)",
	"...",
	"...",
	"...",
	"..."
	],
	[
	"Acurantes, Alandra Jolijn Isabel P. (9 - Cesium)",
	"Bautista, Jillian Triana G. (9 - Cesium)",
	"Cruz, Alexis A. (9 - Cesium)",
	"Daquigan, Bianca Ysabelle S. (9 - Cesium)",
	"Delfin, Aneko A. (9 - Cesium)",
	"Escano, Isabella Marie G. (9 - Cesium)",
	"Mamaat, Mary Angeline P. (9 - Cesium)",
	"Marqueses, Ma. Maxine Ezekiel C. (9 - Cesium)",
	"Perez, Nancy Cristina Mikaela N. (9 - Cesium)",
	"Razon, Elisha Juliana B. (9 - Cesium)",
	"...",
	"...",
	"...",
	"..."
	],
	[
	"Araña, Natalia C. (9 - Lithium)",
	"Bustamante, Toni Althea F. (9 - Lithium)",
	"Chan, Mikylla Arielle Clarisse P. (9 - Lithium)",
	"Ching, Trisha Ferbry C. (9 - Lithium)",
	"Fabricante, Francine Oren T. (9 - Lithium)",
	"Mejorada, Raiza Jazmin D. (9 - Lithium)",
	"Pascual, Patricia Anne D. (9 - Lithium)",
	"Reyes, Alyanna Coleen C. (9 - Lithium)",
	"Rillera, Angela Marie T. (9 - Lithium)",
	"Tabagan, Katrina Angela F. (9 - Lithium)",
	"...",
	"...",
	"...",
	"..."
	],
	[
	"Gonzales, Hariette Eve O. (9 - Magnesium)",
	"Guinto, Veronica Marielle T. (9 - Magnesium)",
	"Macapanpan, Ann Marel Q. (9 - Magnesium)",
	"Malaya, Jana Ariana K. (9 - Magnesium)",
	"Montales, Celine Amanda R. (9 - Magnesium)",
	"Nono, Katriona Kristin Natania U. (9 - Magnesium)",
	"Perez, Amanda Sophia C. (9 - Magnesium)",
	"Quiambao, Francesca M. (9 - Magnesium)",
	"Serafica, Katrina Isabelle B. (9 - Magnesium)",
	"Torres, Angela Louise F. (9 - Magnesium)",
	"Villanueva, Marcelle Annea M. (9 - Magnesium)",
	"...",
	"...",
	"..."
	],
	[
	"Balcos, Kaira S.M. (9 - Potassium)",
	"Blanche, Erin Nicole P. (9 - Potassium)",
	"Carmen, Franzene P. (9 - Potassium)",
	"Cortez, Coleene Romuel Y. (9 - Potassium)",
	"Divinagracia, Anna Kristina M. (9 - Potassium)",
	"Lopez, Ella Sofia O. (9 - Potassium)",
	"Manalo, Sophia Andrea T. (9 - Potassium)",
	"Rapanut, Laura Juliana (9 - Potassium)",
	"Reyes, Angela Felicia Marie M. (9 - Potassium)",
	"Tapalla, Francine Andrea (9 - Potassium)",
	"...",
	"...",
	"...",
	"..."
	],
	[
	"Arcadio, Jodi Marcia D. (9 - Rubidium)",
	"Cheng, Bianca Patricia A. (9 - Rubidium)",
	"Claridad, Maria Isabella Francesca S. (9 - Rubidium)",
	"Cruz, Bianca Ysabelle Y. (9 - Rubidium)",
	"Gelogo, Andrey Clarice G. (9 - Rubidium)",
	"Langcauon, Yonah C. (9 - Rubidium)",
	"Maestre, Jan Elaine P. (9 - Rubidium)",
	"Maralit, Anne Maricar T. (9 - Rubidium)",
	"Pardo, Sophia Rafaelle G. (9 - Rubidium)",
	"Sy, Louise Elyanna A. (9 - Rubidium)",
	"...",
	"...",
	"...",
	"..."
	],
			[
			"Albitos, Victoria B. (9 - Sodium)",
			"Bangsil, Roxanne D. (9 - Sodium)",
			"Billena, Kate Angela S. (9 - Sodium)",
			"Foronda, Raven Glorianne H. (9 - Sodium)",
			"Medina, Harket R. (9 - Sodium)",
			"Resultay, Ma. Aezil Emmanuelle D. (9 - Sodium)",
			"Siapco, Murielena Monique C. (9 - Sodium)",
			"Sta. Maria, Daphne Denice A. (9 - Sodium)",
			"Valimento, Gwen Lianna D. (9 - Sodium)",
			"Villanueva, Schealana Aundee R. (9 - Sodium)",
			"...",
			"...",
			"...",
			"...",
			"..."
			],
			[
			"Albalate, Adeleine Marie C. (9 - Strontium)",
			"Bejarin, Riana D. (9 - Strontium)",
			"De las Llagas, Sophia Isabel A. (9 - Strontium)",
			"Emata, Renaissance Y. (9 - Strontium)",
			"Erestain, Riehla Carolein A. (9 - Strontium)",
			"Gutierrez, Jersey Isabel D. (9 - Strontium)",
			"Justo, Samantha Louise R. (9 - Strontium)",
			"Lomibao, Isabela Gabrielle P. (9 - Strontium)",
			"Marquez, Aaliyah Felice L. (9 - Strontium)",
			"Samontina, Rea Sophia D. (9 - Strontium)",
			"...",
			"...",
			"...",
			"..."
			]
];
var boys2021 = [
			[
			"Ayeras, Rod Anthony B. (10 - Charm)",
			"Bautista, Clarence Lei B. (10 - Charm)",
			"Cadiz, Rafael Roberto Eduardo T. (10 - Charm)",
			"Ceballos, Kurt Gabriel M. (10 - Charm)",
			"Cervantes, Klarence Tomas R. (10 - Charm)",
			"Dasalla, Anton Gabrielle O. (10 - Charm)",
			"Fadri, Vincent Paul C. (10 - Charm)",
			"Guerrero, Stephen Joseph II B. (10 - Charm)",
			"Hechanova, Isaac L. (10 - Charm)",
			"Loro, James Zander F. (10 - Charm)",
			"Mejilla, Eduard James G. (10 - Charm)",
			"Pangan, Lorenzo Gerard A. (10 - Charm)",
			"Refina, Guillermo Andres C. (10 - Charm)",
			"Santiago, Philip Anthon L. (10 - Charm)",
			"Tan, Harvey Francois B. (10 - Charm)",
			"Thor, Chen Adrien Z. (10 - Charm)",
			"Valdecantos, Sam Rivkah Reinery F. (10 - Charm)",
			"...",
			"...",
			"..."
			],
			[
			"Alipio, Tom Kiersten Q. (10 - Electron)",
			"Crepa, John Cedric B. (10 - Electron)",
			"Cunanan, Julce Ivan E. (10 - Electron)",
			"Dagdag, Eldon C. (10 - Electron)",
			"Deodores, Ryan Christopher B. (10 - Electron)",
			"Gagalac, Alex Nathaniel B. (10 - Electron)",
			"Garcia, Vicente Iñigo O. (10 - Electron)",
			"Odevilas, Rev Benedict S. (10 - Electron)",
			"Pumarada, Francis G. (10 - Electron)",
			"Rosales, John Paul L. (10 - Electron)",
			"Silverio, Andrei Mikael R. (10 - Electron)",
			"Sudaria, Role Victor T. (10 - Electron)",
			"Sy, Star Neptune R. (10 - Electron)",
			"Tatad, Venz Martin T. (10 - Electron)",
			"Tongson, Angelo Karl Luis R. (10 - Electron)",
			"Villegas, Nathanael Johann A. (10 - Electron)",
			"...",
			"...",
			"...",
			"..."
			],
			[
			"Abedejos, Jose Francois M. (10 - Gluon)",
			"Arceo, Lourence John L. (10 - Gluon)",
			"Banguilan, Karl Andrei F. (10 - Gluon)",
			"Bolado, Jose Antonio S. (10 - Gluon)",
			"Cabida, Bemas John D. (10 - Gluon)",
			"Chua, Harvey Shawn A. (10 - Gluon)",
			"Diaz, Griffin Ali M. (10 - Gluon)",
			"Ee, Christian James S. (10 - Gluon)",
			"Gamboa, Rafael Tadeo A. (10 - Gluon)",
			"Guico, Franz Christian T. (10 - Gluon)",
			"Landayan, Juan Miguel L. (10 - Gluon)",
			"Pascua, Francis Matthew B. (10 - Gluon)",
			"Ramos, Vaughn Dylan D. (10 - Gluon)",
			"Santos, Poch R. (10 - Gluon)",
			"Senatin, Christopher Luis M. (10 - Gluon)",
			"Tecson, Curt Lawrence P. (10 - Gluon)",
			"Tiongson, Santiago Ramon V. (10 - Gluon)",
			"...",
			"...",
			"..."
			],
			[
			"Achapero, John Jr. C. (10 - Graviton)",
			"Ang, Wilford Matthew L. (10 - Graviton)",
			"Calungsod, Dhaniel D. (10 - Graviton)",
			"Catli, Bob Christopher J. (10 - Graviton)",
			"Crisologo, Joaquin Iñigo N. (10 - Graviton)",
			"De Guzman, Kaeran Edlix F. (10 - Graviton)",
			"Ercia, Victor Louis A. (10 - Graviton)",
			"Flores, Bojo F. (10 - Graviton)",
			"Guinto, Laurence Michael T. (10 - Graviton)",
			"Manlapad, Epson L. (10 - Graviton)",
			"Marual, Altheoxander M. (10 - Graviton)",
			"Rahon, Raymond Sandalphon M. (10 - Graviton)",
			"Soriano, Prince D. (10 - Graviton)",
			"Tagle, Ardy Emmanuel P. (10 - Graviton)",
			"Untalan, Harry Patrick H. (10 - Graviton)",
			"Vallesteros, Nikolas Adonar M. (10 - Graviton)",
			"Velasco, Francis Vernon C. (10 - Graviton)",
			"...",
			"...",
			"..."
			],
			[
			"Adriano, Angelo C. (10 - Muon)",
			"Arellano, Andrei Clyde C. (10 - Muon)",
			"Balaong, John Lloyd P. (10 - Muon)",
			"Banzon, Raizen Angelo A. (10 - Muon)",
			"Cabana, Terrence Patrick E. (10 - Muon)",
			"Chua, Jorel Solomon C. (10 - Muon)",
			"Cristobal, Martin Nicholas C. (10 - Muon)",
			"Dela Cerna, Jarod Joseph P. (10 - Muon)",
			"Dela Cruz, Clarence Alver V. (10 - Muon)",
			"Guanzon, Adrian John L. (10 - Muon)",
			"Irlandez, Rexian L. (10 - Muon)",
			"Marquez, Andrei Gabriel R. (10 - Muon)",
			"Mercado, Rico Daniel M. (10 - Muon)",
			"Naval, Paulo Niño Gonzalo C. (10 - Muon)",
			"Pascua, Vicente Cornelio P. (10 - Muon)",
			"Sibug, Tristan Josh E. (10 - Muon)",
			"Tamayo, Lyle Wenzel P. (10 - Muon)",
			"...",
			"...",
			"..."
			],
			[
			"Aguimbag, Shannon Mark Danielle R. (10 - Photon)",
			"Antonio, Joaquin Angelo S. (10 - Photon)",
			"Armonio, Nathan Aston D. (10 - Photon)",
			"Artiaga, Josef Emil A. (10 - Photon)",
			"Bicomong, Anthony P. (10 - Photon)",
			"Candelaria, Caleb Johann F. (10 - Photon)",
			"De Leon, Ayn Nicolo Arbus A. (10 - Photon)",
			"Dela Merced, Michael Gabriel (10 - Photon)",
			"Dofitas, Matthew L. (10 - Photon)",
			"Estrella, Jan Apollo D. (10 - Photon)",
			"Macaraig, Manuel Carlo D. (10 - Photon)",
			"Nerecina, Kean Seth Antonio V. (10 - Photon)",
			"Pangilinan, Stephen Rome E. (10 - Photon)",
			"Santos, Cyd Nicolas A. (10 - Photon)",
			"Sy, Ezeckiel Lorenzo A. (10 - Photon)",
			"Yu, Aaron Joseph R. (10 - Photon)",
			"...",
			"...",
			"...",
			"..."
			],
			[
			"Abad, Jose Lorenzo P. (10 - Tau)",
			"Arenas, Guillaume Keifer U. (10 - Tau)",
			"Babaran, Abdiel Rovic T. (10 - Tau)",
			"Bacaay, Shawn Spencer O. (10 - Tau)",
			"Bagsic, Albriz Moore C. (10 - Tau)",
			"Doca, Jeem Chester B. (10 - Tau)",
			"Dusdus, Angelo G. (10 - Tau)",
			"Janobas, John David L. (10 - Tau)",
			"Limbaga, Raul Joshua D. (10 - Tau)",
			"Loste, Alvaro Joseph W. (10 - Tau)",
			"Maningas, Neil Vincent E. (10 - Tau)",
			"Moreno, Joshua R. (10 - Tau)",
			"Oliveros, Sean Louis R. (10 - Tau)",
			"Palacio, Paolo Anzis B.  (10 - Tau)",
			"Pura, Neil Bryan D. (10 - Tau)",
			"Santos, Julian Emil G. (10 - Tau)",
			"Telosa, Francis Gabriel A. (10 - Tau)",
			"...",
			"...",
			"..."
			],
			[
			"Antipuesto, Eurico E. (10 - Truth)",
			"Bansil, Jeremy James V. (10 - Truth)",
			"Eduarte, Alessandro Gabriel D. (10 - Truth)",
			"Estacio, Damien Marius M. (10 - Truth)",
			"Felix, Endaniel Aldrix J. (10 - Truth)",
			"Gaviola, John Rex A. (10 - Truth)",
			"Jizmundo, Rodil Jim E. (10 - Truth)",
			"Laurenio, Juanito Alecz S. (10 - Truth)",
			"Linsangan, Paolo Gabriel B. (10 - Truth)",
			"Matriano, Gian Roejel M. (10 - Truth)",
			"Miraña, Jewel Ruther E. (10 - Truth)",
			"Natividad, Xavier C. (10 - Truth)",
			"Oliver, Lean Paolo V. (10 - Truth)",
			"Pardo, Gabriel Niā'o Lorenzo G. (10 - Truth)",
			"Rosales, Colin Beiel A. (10 - Truth)",
			"Tejada, Kevin V. (10 - Truth)",
			"Zabala, Cary Jonathan (10 - Truth)",
			"...",
			"...",
			"..."
			]
];
var girls2021 = [
			[
			"Constantino, Jemimah Marie S. (10 - Charm)",
			"Fuentes, Riana Jasmin C. (10 - Charm)",
			"Ibarra, Christina Andrea P. (10 - Charm)",
			"Labagnov, Zaira Ysabel G. (10 - Charm)",
			"Lachica, Abigail Samantha M. (10 - Charm)",
			"Libay, Alexis Sabina M. (10 - Charm)",
			"Narag, Kristin Angela T. (10 - Charm)",
			"Nepomuceno, Trixcy Joyce Y. (10 - Charm)",
			"Ragudo, Jan Hazel S. (10 - Charm)",
			"Rodriguez, Jhanea Cefrie S. (10 - Charm)",
			"Sanchez, Laetitia C. (10 - Charm)",
			"Serdone, Miah Rose M. (10 - Charm)",
			"Valmadrid, Kyra Ysobel B. (10 - Charm)",
			"..."
			],
			[
			"Aguilar, Denisse Riza T. (10 - Electron)",
			"Cabaluna, Yzabelle Fay Samantha C. (10 - Electron)",
			"Cada, Katrina Nadine Q. (10 - Electron)",
			"Candelaria, Kimberly Anne P. (10 - Electron)",
			"Carles, Zulieka Ariel D. (10 - Electron)",
			"Gales, Jana Martina A. (10 - Electron)",
			"Laurena, Maria Frances Therese V. (10 - Electron)",
			"Licardo, Mary Liv Faylinn Q. (10 - Electron)",
			"Mabeza, Niena Sodia J. (10 - Electron)",
			"Mallari, Maxine Camille O. (10 - Electron)",
			"Ngabit, Nicole Grace M. (10 - Electron)",
			"Olmillo, Rosette S. (10 - Electron)",
			"Valdez, Nina Marguerite B. (10 - Electron)",
			"..."
			],
			[
			"Agra, Cyna Jeanelle C. (10 - Gluon)",
			"Camomot, Keesha Marie R. (10 - Gluon)",
			"Capito, Patricia Faith E. (10 - Gluon)",
			"Gamulo, Yani Suzette B. (10 - Gluon)",
			"Garcia, Vionne Beatrice G. (10 - Gluon)",
			"Go, Allison Maxinne C. (10 - Gluon)",
			"Goce, Nicole Clarisse V. (10 - Gluon)",
			"Goyena, Laia R. (10 - Gluon)",
			"Imperial, Mary Jewel Anne H. (10 - Gluon)",
			"Lising, Jan Noelle A. (10 - Gluon)",
			"Marabe, Dona Beatrix B. (10 - Gluon)",
			"Tagle, Ernestina Polin N. (10 - Gluon)",
			"...",
			"..."
			],
			[
			"Agasin, Denise Nicole A. (10 - Graviton)",
			"Baroy, Cathleen Betinna M. (10 - Graviton)",
			"Carpio, Samantha Nicole P. (10 - Graviton)",
			"Castillo, Vien Margarette M. (10 - Graviton)",
			"Cruz, Jelzie Klare P. (10 - Graviton)",
			"Decena, Elmira Maria Isabel O. (10 - Graviton)",
			"Ginco, Sarah Beatrice M. (10 - Graviton)",
			"Medina, Sophia Marion (10 - Graviton)",
			"Piedad, Pauline Lyra B. (10 - Graviton)",
			"Portosa, Roxene Kaye C. (10 - Graviton)",
			"Roca, Annica Cyrene C. (10 - Graviton)",
			"Taloma, Zairah G. (10 - Graviton)",
			"Torrevillas, Mikaela Juliana L. (10 - Graviton)",
			"..."
			],
			[
			"Aragon, Eanna Janina D. (10 - Muon)",
			"Balanon, Bethena Clarisse M. (10 - Muon)",
			"Cabrera, Andrea Marie H. (10 - Muon)",
			"Coloma, Mary Alexandria D.A. (10 - Muon)",
			"Cruz, Jowillen Shekinah P. (10 - Muon)",
			"David, Toni Claire S. (10 - Muon)",
			"Domingo, Ann Margareth C. (10 - Muon)",
			"Franco, Beatriz Gianina A. (10 - Muon)",
			"Lajo, Arianna Sophia L. (10 - Muon)",
			"Portacio, Anne Margaret M. (10 - Muon)",
			"Regala, Eliana L. (10 - Muon)",
			"Tee, Katrina A. (10 - Muon)",
			"Tulio, Alyza Raine A. (10 - Muon)",
			"..."
			],
			[
			"Amatorio, Phoebe Emmanuelle S. (10 - Photon)",
			"Bukuhan, Gwyneth Ross M. (10 - Photon)",
			"Granada, Cassandra Antoinette S. (10 - Photon)",
			"Jaramillo, Hannah Mae B. (10 - Photon)",
			"Macatangay, Maria Isabel P. (10 - Photon)",
			"Martinez, Mai Angel Nicole R. (10 - Photon)",
			"Navasero, Niall Ymric S. (10 - Photon)",
			"Pascasio, Caitlin Ruth A. (10 - Photon)",
			"Redoble, Almira Princess N. (10 - Photon)",
			"Sesdoyro, Katharin R. (10 - Photon)",
			"Signey, Lovely Morning B. (10 - Photon)",
			"So, Bianca Celine P. (10 - Photon)",
			"Tayag, Mabelle T. (10 - Photon)",
			"Ureta, Therese C. (10 - Photon)"
			],
			[
			"Chua, Bernadette Therese P. (10 - Tau)",
			"Del Rosario, Angelica Vince L. (10 - Tau)",
			"Liwanag, Janine Phoebe P. (10 - Tau)",
			"Munar, Lysandra Delle D. (10 - Tau)",
			"Nemeño, Elisha Naomi P. (10 - Tau)",
			"Obcemea, Julianne Kate G. (10 - Tau)",
			"Patague, Omrei E. (10 - Tau)",
			"Salazar, Chiel E. (10 - Tau)",
			"Sanchez, Danielle Francesca Marie T. (10 - Tau)",
			"Seva, Alexandra Rafaelle S. (10 - Tau)",
			"Trinidad, Dominique S. (10 - Tau)",
			"Vega, Sofia Mikaela O. (10 - Tau)",
			"Yap, Kamillah Maraiah A. (10 - Tau)",
			"..."
			],
			[
			"Buenaventura, Julia Ysobel S. (10 - Truth)",
			"Bueno, Joeimarie Carmela B. (10 - Truth)",
			"Bueser, Keonah Gabriella G. (10 - Truth)",
			"De la Cruz, Diana Mae D. (10 - Truth)",
			"Gonzales, Erica Jasmine T. (10 - Truth)",
			"Laurito, Clarissa Beatriz P. (10 - Truth)",
			"Madrideo, Aedelveis C. (10 - Truth)",
			"San Mateo, Michelle P. (10 - Truth)",
			"Savellano, Danielle Aira E. (10 - Truth)",
			"Simpas, Therese Danielle T. (10 - Truth)",
			"Tapat, Chriselle Therese M. (10 - Truth)",
			"...",
			"...",
			"..."
			]
];
var boys2023 = [
			[
			"Acuña, Lance Aelred P. (8 - Adelfa)",
			"Atega, Zane Franiel Alistair O. (8 - Adelfa)",
			"Baluyot, Allex Nicoleson L. (8 - Adelfa)",
			"Cortez, Johann Gabriel G. (8 - Adelfa)",
			"Dapadap, Kenneth G. (8 - Adelfa)",
			"David, Malks Mogen M. (8 - Adelfa)",
			"Ducusin, Andrei Karl F. (8 - Adelfa)",
			"Larisma, Xyrus T. (8 - Adelfa)",
			"Nabur, Joshua Jireh P. (8 - Adelfa)",
			"Naorbe, Neil Francis N. (8 - Adelfa)",
			"Nudo, Brenan Kirt I. (8 - Adelfa)",
			"Olegario, Vito Pablo F. (8 - Adelfa)",
			"Padron, Serge Hero Nicolai M. (8 - Adelfa)",
			"Pascual, Marcus Joaquim D. (8 - Adelfa)",
			"Paulo, Lian Nicoli M. (8 - Adelfa)",
			"Peña, Jansenn Reign B. (8 - Adelfa)",
			"Real, Michael Jeffrey D. (8 - Adelfa)",
			"Sales, Francis Raphael Q. (8 - Adelfa)",
			"Saring, Dhenz Wraisley L. (8 - Adelfa)",
			"Torres, Alejandro Luis P. (8 - Adelfa)"
			],
			[
			"Azañes, Gabriel Kristoffer T. (8 - Camia)",
			"Cereno, Jude Melvin Y. (8 - Camia)",
			"Dalida, Raphael Dylan T. (8 - Camia)",
			"Dollison, Hedelito III M. (8 - Camia)",
			"Dungca, Lorenz Paulo R. (8 - Camia)",
			"Impas, Jann Jemuel H. (8 - Camia)",
			"Leopando, Dan Kleysher M. (8 - Camia)",
			"Mendoza, Marco Gerard P. (8 - Camia)",
			"Nalica, Marius Angelo D.P. (8 - Camia)",
			"Prado, Alex Jr. D.R. (8 - Camia)",
			"Quintanilla, Aldrik Job D.T. (8 - Camia)",
			"Sabas, John Gabriel Froi A. (8 - Camia)",
			"San Juan, Carl Vincent V. (8 - Camia)",
			"Santos, Rafael Jose Y. (8 - Camia)",
			"Soriano, Teofilo Rojan D.R. (8 - Camia)",
			"Taburnal, Luke John S. (8 - Camia)",
			"Villano, Io S. (8 - Camia)",
			"Vinluan, Anton Marie G. (8 - Camia)",
			"..."
			],
			[
			"Cabizares, Ronn Matthew D. (8 - Champaca)",
			"Callejo, Nathan Van Paulo I. (8 - Champaca)",
			"Cruz, Francis Anthony V. (8 - Champaca)",
			"Fernando, Sidney Lance C. (8 - Champaca)",
			"Liceralde, Marco Raphael S. (8 - Champaca)",
			"Lim, Manuelle Christian C. (8 - Champaca)",
			"Mejos, Hugh Ruzzle E. (8 - Champaca)",
			"Nuqui, Emilio Francisco Z. (8 - Champaca)",
			"Ognita, Daniel Dean P. (8 - Champaca)",
			"Paragas, Glenn Carlo M. (8 - Champaca)",
			"Pialago, Zachary Theoden M. (8 - Champaca)",
			"Reyes, Jaden Coen D.C. (8 - Champaca)",
			"Salvaleon, Andrei Richmond T. (8 - Champaca)",
			"Samson, Azzael Gabrielle C. (8 - Champaca)",
			"Silanga, Zachary Jonathan B. (8 - Champaca)",
			"Solis, Franz Chili M. (8 - Champaca)",
			"Sy, Ethan Lorenz C. (8 - Champaca)",
			"Trocino, Job D. (8 - Champaca)",
			"Valencia, Raphael Stephen N. (8 - Champaca)",
			"..."
			],
			[
			"Aban, Allan Joseph P. (8 - Dahlia)",
			"Abaya, Andrei Miguel T. (8 - Dahlia)",
			"Atienza, Persus T. (8 - Dahlia)",
			"Belisario, David Patrick S. (8 - Dahlia)",
			"Galorpo, Jose Antonio M. (8 - Dahlia)",
			"Gavino, Aaron Joseph P. (8 - Dahlia)",
			"Guerra, Earvin Alexar M. (8 - Dahlia)",
			"Lagrimas, Antoine Francis M. (8 - Dahlia)",
			"Lopez, Caesar Jr. P. (8 - Dahlia)",
			"Magsino, John Vennedict H. (8 - Dahlia)",
			"Montiero, Mark Justine A. (8 - Dahlia)",
			"Naval, Anton Jorel M. (8 - Dahlia)",
			"Ortiz, Celver Zitro H. (8 - Dahlia)",
			"Payar, Raphael Benedict S. (8 - Dahlia)",
			"Portugez, Paulo Angelo C. (8 - Dahlia)",
			"Samson, Ken Michiko H. (8 - Dahlia)",
			"Songco, Andrew Zachary H. (8 - Dahlia)",
			"Ubanos, Filbert Joseph A. (8 - Dahlia)",
			"Viloria, Joshua James E. (8 - Dahlia)",
			"..."
			],
			[
			"Angeles, Juan Miguel Q. (8 - Ilang-Ilang)",
			"Beloy, Matthew P. (8 - Ilang-Ilang)",
			"Bondoc, Peale Nathan P. (8 - Ilang-Ilang)",
			"Carlos, Jerd Mark M. (8 - Ilang-Ilang)",
			"Casas, Corvin Rhys A. (8 - Ilang-Ilang)",
			"Coralde, Adrian Paul R. (8 - Ilang-Ilang)",
			"Cortez, Sonny Oliver C. (8 - Ilang-Ilang)",
			"Dalisay, Francis Alexander B. (8 - Ilang-Ilang)",
			"Duran, Elijah Iñigo C. (8 - Ilang-Ilang)",
			"Jagorin, Kristian Aaron C. (8 - Ilang-Ilang)",
			"Molina, Louis Angelo L. (8 - Ilang-Ilang)",
			"Palma, Jaime Rafael C. (8 - Ilang-Ilang)",
			"Quetulio, Airon Apolinar B. (8 - Ilang-Ilang)",
			"Sucaldito, Elian James S. (8 - Ilang-Ilang)",
			"Tapat, Chris Matthew M. (8 - Ilang-Ilang)",
			"Tardecilla, Dirk Erwin D.C. (8 - Ilang-Ilang)",
			"Valbuena, Jose Ruiz C. (8 - Ilang-Ilang)",
			"Valencia, Troy Joseph L. (8 - Ilang-Ilang)",
			"Valmonte, Gabriel M. (8 - Ilang-Ilang)",
			"..."
			],
			[
			"Abulog, Jiro Thomas L. (8 - Jasmin)",
			"Agacoli, Lucas Miguel V. (8 - Jasmin)",
			"Antipolo, Gabriel S. (8 - Jasmin)",
			"Aquino, Vaughn Iggie R. (8 - Jasmin)",
			"Arambulo, Carlos Emilio C. (8 - Jasmin)",
			"Bolando, Amiel Angelo T. (8 - Jasmin)",
			"Dalumpines, Carl D. (8 - Jasmin)",
			"Dizon, Ahrdy Rhysz V. (8 - Jasmin)",
			"Estrella, Jerome Gabriel Kenneth I. (8 - Jasmin)",
			"Ganzon, Mikhail Donavan A. (8 - Jasmin)",
			"Ko, James Paolo C. (8 - Jasmin)",
			"Pulumbarit, Gervy Ramon S. (8 - Jasmin)",
			"Ronda, Jabez Mari G. (8 - Jasmin)",
			"Tabaloc, Gianni Francis D.C. (8 - Jasmin)",
			"Toma Cruz, Lei Dojoan S. (8 - Jasmin)",
			"Torres, Marcus Kyle P. (8 - Jasmin)",
			"Valbuena, Allen Benedict S. (8 - Jasmin)",
			"Vitterbo, Kurt Cameron O. (8 - Jasmin)",
			"...",
			"..."
			],
			[
			"Alcala, Gabrian D. (8 - Rosal)",
			"Calinawan, Jephthah C. (8 - Rosal)",
			"Cornejo, Mathias M. (8 - Rosal)",
			"Damaso, Niño Johannes L. (8 - Rosal)",
			"Delos Santos, Jan Lawrence R. (8 - Rosal)",
			"Fan, Gabrielli Anjelo P. (8 - Rosal)",
			"Mata, Emmanuel Riene C.  (8 - Rosal)",
			"Mingaracal, Dion Luis M. (8 - Rosal)",
			"Napoles, Andrei Gerard C. (8 - Rosal)",
			"Paguio, Aaron Moses L. (8 - Rosal)",
			"Palitog, Jose Marco G. (8 - Rosal)",
			"Protasio, Elijah Gabriel P. (8 - Rosal)",
			"Quintanilla, Alistair Jon D.T. (8 - Rosal)",
			"Rahon, Karl Jacob P. (8 - Rosal)",
			"Salazar, Carlos Miguel Angelo S. (8 - Rosal)",
			"Sese, Von Dominik D. (8 - Rosal)",
			"Tiu, James Ian V. (8 - Rosal)",
			"Tulio, Eimer Justin A. (8 - Rosal)",
			"Vela, Zio C. (8 - Rosal)",
			"Vergara, Gian Paolo S. (8 - Rosal)"
			],
			[
			"Arnaldo, Hanz Isaac V. (8 - Sampaguita)",
			"Asiado, Jansen Hart A. (8 - Sampaguita)",
			"Balanga, Christian Daniel E. (8 - Sampaguita)",
			"Bautista, Andrew Nicolas Y. (8 - Sampaguita)",
			"Cuadro, Jonathan Gabriel T. (8 - Sampaguita)",
			"De Vera, Renz Dominic V. (8 - Sampaguita)",
			"Del Rosario, Jose O'Neil F. (8 - Sampaguita)",
			"Ilagan, Janssen Joseph O. (8 - Sampaguita)",
			"Maristela, Vic Exequiel M. (8 - Sampaguita)",
			"Martin, Eron Jasper R. (8 - Sampaguita)",
			"Necasio, Paul Timothy R. (8 - Sampaguita)",
			"Nucup, Zachary Josh P. (8 - Sampaguita)",
			"Ong, Matthew Clayton G. (8 - Sampaguita)",
			"Reyes, Sebastien Lucian T. (8 - Sampaguita)",
			"Rosales, John Vincent L. (8 - Sampaguita)",
			"Salanga, Vaness Judel M. (8 - Sampaguita)",
			"Saluta, James Ryan C. (8 - Sampaguita)",
			"Santelices, John Patrick B. (8 - Sampaguita)",
			"Zara, Gabriel Matthew A. (8 - Sampaguita)",
			"..."
			]
];
var girls2023 = [
			[
			"Calupaz, Margarita V. (8 - Adelfa)",
			"Casupang, Kirsten Chantal J. (8 - Adelfa)",
			"Cheng, Cellin Louise P. (8 - Adelfa)",
			"Chua, Kaitlynne Maree A. (8 - Adelfa)",
			"De Ramos, Cayla Mirielle L. (8 - Adelfa)",
			"Esguerra, Jamie Marielle D.C. (8 - Adelfa)",
			"Hechanova, Sarah L. (8 - Adelfa)",
			"Martinez, Julia Mari M. (8 - Adelfa)",
			"Moraleta, Riana Lorraine B. (8 - Adelfa)",
			"Tumanan, Aviem Mavin F. (8 - Adelfa)",
			"...",
			"...",
			"...",
			"..."
			],
			[
			"Bulatao, Ella Margaret G. (8 - Camia)",
			"Cauilan, Lei Mirabelle Z. (8 - Camia)",
			"Fulgar, Jade Ianne T. (8 - Camia)",
			"Guarin, Roleen Y. (8 - Camia)",
			"Labicane, Blesher Radine A. (8 - Camia)",
			"Lazaro, Benjeouelle A. (8 - Camia)",
			"Lim, Juliana Marie A. (8 - Camia)",
			"Malaya, Keona Rae M. (8 - Camia)",
			"Moraca, Phoebe Renee P. (8 - Camia)",
			"Nolasco, Jamiah Rose G. (8 - Camia)",
			"Pak, Mi Jung Y. (8 - Camia)",
			"...",
			"...",
			"..."
			],
			[
			"Ayala, Alizha Josephine Marvi D. (8 - Champaca)",
			"Bartolay, Maria Katrina L. (8 - Champaca)",
			"Castillo, Fiona Jane A. (8 - Champaca)",
			"Gayapa, Juliana Clarenne S. (8 - Champaca)",
			"Hollero, Francesca R. (8 - Champaca)",
			"Mariño, Z'narah Ysabelle T. (8 - Champaca)",
			"Miras, Patricia Grace P. (8 - Champaca)",
			"Musa, Gallen S. (8 - Champaca)",
			"Orquillas, Oasis Seth G. (8 - Champaca)",
			"Padilla, Juliana Elizabeth J. (8 - Champaca)",
			"Pangan, Margaret Aaliyah A. (8 - Champaca)",
			"...",
			"...",
			"..."
			],
			[
			"Ang, Rysa Antonette H. (8 - Dahlia)",
			"Belda, Audrey Jezreel B. (8 - Dahlia)",
			"Bonifacio, Anika Bettina S. (8 - Dahlia)",
			"Carreon, Karol Michelle T. (8 - Dahlia)",
			"Catolico, Racquel Alyssa F. (8 - Dahlia)",
			"Larisca, Mary Grace L. (8 - Dahlia)",
			"Lo, Ainsley Myles B. (8 - Dahlia)",
			"Mauricio, Joanne Marie D. (8 - Dahlia)",
			"Pascual, Gabrielle Alyssa C. (8 - Dahlia)",
			"Serate, Katherine Anne T. (8 - Dahlia)",
			"Talabucon, Phomela Ashley Mari O. (8 - Dahlia)",
			"...",
			"...",
			"..."
			],
			[
			"Abat, Kizaiah M. (8 - Ilang-Ilang)",
			"Africa, Kristyanna Angela C. (8 - Ilang-Ilang)",
			"Calubaquib, Kiersten Gene M. (8 - Ilang-Ilang)",
			"Celestino, Laura Mae P. (8 - Ilang-Ilang)",
			"Damian, Jeannel E. (8 - Ilang-Ilang)",
			"Esguerra, Katrina Gabrielle M. (8 - Ilang-Ilang)",
			"Galinato, Eriene D. (8 - Ilang-Ilang)",
			"Hernandez, Lyneth Anne C. (8 - Ilang-Ilang)",
			"Masangya, Ransel G. (8 - Ilang-Ilang)",
			"Matriano, Sherine Y. (8 - Ilang-Ilang)",
			"Santos, Rain Alexi Q. (8 - Ilang-Ilang)",
			"...",
			"...",
			"..."
			],
			[
			"Fabregas, Mary Lorraine H. (8 - Jasmin)",
			"Garcia, Samantha Sofia P. (8 - Jasmin)",
			"Jamisola, Clareese C. (8 - Jasmin)",
			"Jardin, Anela Maree I. (8 - Jasmin)",
			"Lee, Francesca Rain L. (8 - Jasmin)",
			"Leonen, Katrina Angela L. (8 - Jasmin)",
			"Manansala, Hannah Gabrielle T. (8 - Jasmin)",
			"Odiaman, Zelene R. (8 - Jasmin)",
			"Paloma, Jashley Kate C. (8 - Jasmin)",
			"Ramos, Mykaella Jhoy C. (8 - Jasmin)",
			"Sevilla, Naadame Hayyel S. (8 - Jasmin)",
			"...",
			"...",
			"..."
			],
			[
			"Abella, Vyan Ethel Marie D. (8 - Rosal)",
			"Bacomo, Hannah Denise B. (8 - Rosal)",
			"Bautista, Neomi I. (8 - Rosal)",
			"Beldia, India P. (8 - Rosal)",
			"Chua, Hanielle Jermayn E. (8 - Rosal)",
			"De Leon, Franzesca Eriel D. (8 - Rosal)",
			"Ercia, Vivien Leila A. (8 - Rosal)",
			"Oribiana, Joelle Carmela N. (8 - Rosal)",
			"Toribio, Mira Juliana B. (8 - Rosal)",
			"Viñas, Melyza Jane E. (8 - Rosal)",
			"...",
			"...",
			"...",
			"..."
			],
			[
			"Bermudez, Mikaela Victoria F. (8 - Sampaguita)",
			"Carrillo, Lara Reanna O. (8 - Sampaguita)",
			"Consebido, Carlyne C. (8 - Sampaguita)",
			"David, Ayla Marie Megan M. (8 - Sampaguita)",
			"De Guzman, Daniella Sophia T. (8 - Sampaguita)",
			"Eliseo, Marielle Assumpta M. (8 - Sampaguita)",
			"Mabborang, Chanelle Louize I. (8 - Sampaguita)",
			"Manansala, Ianne Paul Angela F. (8 - Sampaguita)",
			"Ofilada, Riana Therese C. (8 - Sampaguita)",
			"Santos, Jen Ranielle S.D. (8 - Sampaguita)",
			"Solis, Mariella Cecilia F. (8 - Sampaguita)",
			"...",
			"...",
			"..."
			]
];
var boys2024 = [
			[
			"Abaya, Alessandro Lorenzo A. (7 - Diamond)",
			"Abello, Johann Gerik N. (7 - Diamond)",
			"Bautista, Ivan Marwin L. (7 - Diamond)",
			"Baylon, Ferdinand Andrei A. (7 - Diamond)",
			"Choi, Ashlie Winky B. (7 - Diamond)",
			"Dela Cruz, John Daniel R. (7 - Diamond)",
			"Disu, Sean Vin David T. (7 - Diamond)",
			"Eligio, Jared M. (7 - Diamond)",
			"Galanza, Sean Ken M. (7 - Diamond)",
			"Galvez, Matthew Alfredo I. (7 - Diamond)",
			"Lopez, Martin Gabriel M. (7 - Diamond)",
			"Maliwat, Ralph Justin A. (7 - Diamond)",
			"Pineda, Miguel E. (7 - Diamond)",
			"Sanchez, Arkin Julian Celeste (7 - Diamond)",
			"Tabur, Joaquin Aaron S. (7 - Diamond)",
			"Tapia, Leo Everest N. (7 - Diamond)",
			"Tolin, Luch Marcus Mikhail T. (7 - Diamond)",
			"Torreon, Ambrose James G. (7 - Diamond)",
			"Tropicales, Bert Jacob A. (7 - Diamond)",
			"Vibal, Erwyn Aenas Musngi (7 - Diamond)"
			],
			[
			"Abdon, Justice Leira R. (7 - Emerald)",
			"Albano, Aldonso A. (7 - Emerald)",
			"Añonuevo, Yannis D.L. (7 - Emerald)",
			"De Guzman, Mark Ruwen A. (7 - Emerald)",
			"Dela Fuente, Jence Enrico P. (7 - Emerald)",
			"Estioco, John Shane M. (7 - Emerald)",
			"Figueras, Justin Edward G. (7 - Emerald)",
			"Gungon, Sean Nyers A. (7 - Emerald)",
			"Ibo, John Gabriel P. (7 - Emerald)",
			"Magpantay, Davis Nicholo A. (7 - Emerald)",
			"Magpantay, Sean O. (7 - Emerald)",
			"Mamril, Christian Gemichunel C. (7 - Emerald)",
			"Mendoza, Martin Christiann M. (7 - Emerald)",
			"Natividad, Manuel Edric D.T. (7 - Emerald)",
			"Norcio, Ethan Anilov T. (7 - Emerald)",
			"Pamerol, Rojiver Luke T. (7 - Emerald)",
			"Ramirez, Zeri Marc Igy B. (7 - Emerald)",
			"Santos, Jullian Martin L. (7 - Emerald)",
			"Villarin, Renzel M. (7 - Emerald)",
			"Yap, Reuven Zane D.J. (7 - Emerald)"
			],
			[
			"Andal, Timothy Lawrence G. (7 - Garnet)",
			"Buensuceso, Joshua G. (7 - Garnet)",
			"Bueser, Karl Gabriel G. (7 - Garnet)",
			"Bustamante, Matthew Francis L. (7 - Garnet)",
			"Canullas, Angelo Adn D. (7 - Garnet)",
			"Celestino, Kenaz Reuel J. (7 - Garnet)",
			"Chua, Harold Scott A. (7 - Garnet)",
			"Clamor, Thomas Uriel S. (7 - Garnet)",
			"Cuales, Miguel Ivan A. (7 - Garnet)",
			"Dizon, John Florence A. (7 - Garnet)",
			"Lee, Lance Ethan N. (7 - Garnet)",
			"Lopez, Vinci Andre S. (7 - Garnet)",
			"Lozada, Luc G. (7 - Garnet)",
			"Malambut, Aryan Jibril P. (7 - Garnet)",
			"Mendoza, Genesis Haylan C. (7 - Garnet)",
			"Ocania, Aris Matthew C. (7 - Garnet)",
			"Pimentel, Carlos Mateo S. (7 - Garnet)",
			"Sta. Rosa, Eero Janmarco L. (7 - Garnet)",
			"Villamonte, Juan Carlos N. (7 - Garnet)",
			"Yap, Heinrich Elbert E. (7 - Garnet)"
			],
			[
			"Abelado, Daniel Carlo B. (7 - Jade)",
			"Ariedo, Aaron Michael M. (7 - Jade)",
			"Cruz, Johan Russell H. (7 - Jade)",
			"De Ocampo, Axel E. (7 - Jade)",
			"Galamay, Wilmarc Samuel M. (7 - Jade)",
			"Gonzales, Jude Bryan M. (7 - Jade)",
			"Ignacio, Jose Lorenzo R. (7 - Jade)",
			"Lim, August Simon C. (7 - Jade)",
			"London, Jarvey Meejel C. (7 - Jade)",
			"Nobora, Awhyn Chjervall K.O. (7 - Jade)",
			"Ocampo, Eron Benito G. (7 - Jade)",
			"Pamaos, Lorenzo Iñigo T. (7 - Jade)",
			"Pineda, Ramon Mizhael C. (7 - Jade)",
			"Recio, Salvador D. (7 - Jade)",
			"Redulla, Marco Matvey O. (7 - Jade)",
			"Rillera, Ramon Enrique T. (7 - Jade)",
			"Rodrigo, Pablo Rafael N. (7 - Jade)",
			"Sayo, Brandon E. (7 - Jade)",
			"Tan, Elden Riguel Cipriano (7 - Jade)",
			"..."
			],
			[
			"Abara, Theodore D.L. (7 - Opal)",
			"Almojuela, Justice Carl Law J. (7 - Opal)",
			"Apoderado, Raphael Daniel P. (7 - Opal)",
			"Balane, Malcolm Ian Kofi M. (7 - Opal)",
			"Fuñe, Karol Josef A. (7 - Opal)",
			"Guerra, Roy Erik Raphael F. (7 - Opal)",
			"Haravata, Mistral Joaquin M. (7 - Opal)",
			"Jacob, Benjamin L. (7 - Opal)",
			"Libatique, Lance C. (7 - Opal)",
			"Lingal, Angelo Gabrielle R. (7 - Opal)",
			"Llanza, Dieux Benisse G. (7 - Opal)",
			"Naoe, Christian Victor I. (7 - Opal)",
			"Navarro, Roy Kevin L. (7 - Opal)",
			"Oronce, Ramiel Gideon F. (7 - Opal)",
			"Pablico, Andrei Nicholas D. (7 - Opal)",
			"Pimentel, Kimi Dominick L. (7 - Opal)",
			"Tan, Harold Franz Jr. B. (7 - Opal)",
			"Tan, Kenneth Samuel O. (7 - Opal)",
			"Urgel, Emilio Gerald (7 - Opal)",
			"..."
			],
			[
			"Andal, Alex Anthony L. (7 - Ruby)",
			"Anoran, Reuben Ryan D.V. (7 - Ruby)",
			"Billedo, Arthur Joshua Galvez (7 - Ruby)",
			"Calo, Dimitri L. (7 - Ruby)",
			"Chua, Stephen Remo S. (7 - Ruby)",
			"Dancel, Johannes Rapahel L. (7 - Ruby)",
			"Distajo, Kirk Ryle G. (7 - Ruby)",
			"Lee, Corel L. (7 - Ruby)",
			"Lim, Gef Eigen S.B. (7 - Ruby)",
			"Maguddayao, Zoriel C. (7 - Ruby)",
			"Mariano, Joshua Miguel D.L. (7 - Ruby)",
			"Pabaya, Enrico Dominic A. (7 - Ruby)",
			"Pantajo, Neo Gabriel L. (7 - Ruby)",
			"Rubico, Mico Xander D.C. (7 - Ruby)",
			"Salvador, Enrico Miguel N. (7 - Ruby)",
			"Sibal, Sean Daniel S. (7 - Ruby)",
			"Tan, Ken Khyzner Isaac L. (7 - Ruby)",
			"Valois, Carl Andrew C. (7 - Ruby)",
			"...",
			"..."
			],
			[
			"Catipay, Arfel Kristoffer B. (7 - Sapphire)",
			"Consul, Jared Cedric B. (7 - Sapphire)",
			"De Guzman, Andrew Gabriel R. (7 - Sapphire)",
			"Delos Reyes, John Eilmer C. (7 - Sapphire)",
			"Estrada, James Reichen B. (7 - Sapphire)",
			"Galorpo, Jose Mari M. (7 - Sapphire)",
			"Gasalatan, Arnold Jr. M. (7 - Sapphire)",
			"Lainez, Von Anthony Mari F. (7 - Sapphire)",
			"Lau, Trevor Ethan S. (7 - Sapphire)",
			"Magnaye, John David F. (7 - Sapphire)",
			"Masangkay, Joshua Hernan D.R. (7 - Sapphire)",
			"Miranda, Josh Henrik V. (7 - Sapphire)",
			"Moren, Kuji Lorenzo M. (7 - Sapphire)",
			"Ordoña, Fel Mir A. (7 - Sapphire)",
			"Salazar, Exekiel R. (7 - Sapphire)",
			"Santos, Jace Benedict S. (7 - Sapphire)",
			"Serna, Luiz Mathew D. (7 - Sapphire)",
			"Shrestha, Rajoj Uriel M. (7 - Sapphire)",
			"Zafra, Jason Angelo T. (7 - Sapphire)",
			"..."
			],
			[
			"Abeleda, Patrick Gabriel L. (7 - Topaz)",
			"Bartolabac, Franco C. (7 - Topaz)",
			"Bernardo, Kent Timothy A. (7 - Topaz)",
			"Bungabong, Reyn Sheree S. (7 - Topaz)",
			"Castillo, Carlos Jose S. (7 - Topaz)",
			"Chiu, Lance Albert C. (7 - Topaz)",
			"Domingo, Adrian Christian E. (7 - Topaz)",
			"Florendo, Jaime Agustin F. (7 - Topaz)",
			"Gabito, Allan Gabriel M. (7 - Topaz)",
			"Gonzales, Marcus Bernard G. (7 - Topaz)",
			"Leal, Justin Gerard G. (7 - Topaz)",
			"Llacuna, Dion James D. (7 - Topaz)",
			"Manaog, Neil Manuel D.C. (7 - Topaz)",
			"Nuqui, Kurt Chester T. (7 - Topaz)",
			"Peña, Brent Cedric L. (7 - Topaz)",
			"Sales, Nathaniel Andrew Q. (7 - Topaz)",
			"Salvador, Kerby Gilan G. (7 - Topaz)",
			"Sarmiento, Yonhance Hayden R. (7 - Topaz)",
			"Simbulan, Julian Migell M. (7 - Topaz)",
			"Tayag, Rych Jared H. (7 - Topaz)"
			]
];
var girls2024 = [
			[
			"Austria, Ysabel Denise F. (7 - Diamond)",
			"Bueno, Bianca Loraine C. (7 - Diamond)",
			"Clemente, Erin L. (7 - Diamond)",
			"Gascon, Ciara Sophia M. (7 - Diamond)",
			"Gonzalez, Bernice M. (7 - Diamond)",
			"Marzan, Kylie Ricka Kristina G. (7 - Diamond)",
			"Mudlong, Michaela Marie R. (7 - Diamond)",
			"Penullar, Kathleen Gabrielle C. (7 - Diamond)",
			"Sansaet, Gia Cerise D.C. (7 - Diamond)",
			"Siazon, Precious Raivel C. (7 - Diamond)",
			"...",
			"...",
			"...",
			"..."
			],
			[
			"Alingod, Lorraine Aisha C. (7 - Emerald)",
			"Allasas, Laureen Ysabelle B. (7 - Emerald)",
			"Ap-Apid, Athena Cleo D.G. (7 - Emerald)",
			"Basas, Sophia Beatriz S. (7 - Emerald)",
			"Daran, Kimberly C. (7 - Emerald)",
			"Dumanig, Dorothy Bellini P. (7 - Emerald)",
			"Fajardo, Lady Alesandra S. (7 - Emerald)",
			"Gabriel, Emille Angelie F. (7 - Emerald)",
			"Longno, Michelle P. (7 - Emerald)",
			"Magcalas, Kelly Raizel R. (7 - Emerald)",
			"...",
			"...",
			"...",
			"..."
			],
			[
			"Algordo, Juliane A. (7 - Garnet)",
			"Delos Reyes, Raine Saiya P. (7 - Garnet)",
			"Domingo, Paula Bettina R. (7 - Garnet)",
			"Fabula, Sofia N. (7 - Garnet)",
			"Gaborni, Sophia Anne V. (7 - Garnet)",
			"Ganancial, Andrea Margarette Y. (7 - Garnet)",
			"Gocatek, Janna Faye Therese V. (7 - Garnet)",
			"Paras, Charmaine Sophia D. (7 - Garnet)",
			"Visitacion, Janna Franchezka Q. (7 - Garnet)",
			"Ylarde, Myka Angelyn S. (7 - Garnet)",
			"...",
			"...",
			"...",
			"..."
			],
			[
			"Cauilan, Geni-Lynn Cristel Q. (7 - Jade)",
			"Celestino, Lily Anne P. (7 - Jade)",
			"Coprada, Arwen Jeanna R. (7 - Jade)",
			"De Castro, Anzelmei Cielo P. (7 - Jade)",
			"Dizon, Mikaela S. (7 - Jade)",
			"Guerrero, Mary Joy O. (7 - Jade)",
			"Herrera, Raya Gabrielle L. (7 - Jade)",
			"Lim, Isabella Victoria Luz D.S. (7 - Jade)",
			"Lim, Ula Beatrix G. (7 - Jade)",
			"Tingin, Hanna Charisse O. (7 - Jade)",
			"Tiu, Beatriz Gabrielle V. (7 - Jade)",
			"...",
			"...",
			"..."
			],
			[
			"Cadano, Eusef Raya B. (7 - Opal)",
			"Cornejo, Mikhael M. (7 - Opal)",
			"Corpuz, Maria Angelina R. (7 - Opal)",
			"De Veyra, Zsaneha Patriz H. (7 - Opal)",
			"Dela Rama, Katrina Isabelle P. (7 - Opal)",
			"Fernandez, Lauren Vada P. (7 - Opal)",
			"Guanzon, Mary Kristielle O. (7 - Opal)",
			"Lim, Angeline Noelle S. (7 - Opal)",
			"Lumibao, Misha Anne R. (7 - Opal)",
			"Mateo, Samantha Antonette A. (7 - Opal)",
			"Panopio, Anika Beatrize S. (7 - Opal)",
			"...",
			"...",
			"..."
			],
			[
			"Aumentado, Szean Amare M. (7 - Ruby)",
			"Avanceña, Noreen Isabelle Avengoza (7 - Ruby)",
			"Caniedo, Bianca Isabel A. (7 - Ruby)",
			"Dela Cruz, Cris Lorraine L. (7 - Ruby)",
			"Delfin, Sachiko A. (7 - Ruby)",
			"Evidente, Ea Sareena P. (7 - Ruby)",
			"Mendinueto, Aliyah Marie M. (7 - Ruby)",
			"Sacramento, Bianca Marie G. (7 - Ruby)",
			"Sales, Julianne Earl R. (7 - Ruby)",
			"Timbreza, Zsarina C. (7 - Ruby)",
			"Tinaan, Althea Grace E. (7 - Ruby)",
			"Tud, Nicci Adrienne B. (7 - Ruby)",
			"...",
			"..."
			],
			[
			"Ang, Mia Wilhelmina C. (7 - Sapphire)",
			"Benoza, Reina Elysse E. (7 - Sapphire)",
			"Diocera, Aliyah Caresse D.C. (7 - Sapphire)",
			"Ebreo, Nicole Kirsten M. (7 - Sapphire)",
			"Enaje, Stephanie Claire S. (7 - Sapphire)",
			"Lim, Mayah Christine C. (7 - Sapphire)",
			"Madrid, Ianne Christa A. (7 - Sapphire)",
			"Peralta, Bianca Abigail M. (7 - Sapphire)",
			"Portugal, Ysabella Anne P. (7 - Sapphire)",
			"San Miguel, Rian Althea D.S. (7 - Sapphire)",
			"Tumaneng, Francesca Stephanie T. (7 - Sapphire)",
			"...",
			"...",
			"..."
			],
			[
			"Anteza, Roanne Frances T. (7 - Topaz)",
			"Barin, Julianne Marie G. (7 - Topaz)",
			"Claveria, Elihanna Angeline L. (7 - Topaz)",
			"Conlu, Ingrid T. (7 - Topaz)",
			"Dela Rosa, Sophia Pauline G. (7 - Topaz)",
			"Dimayacyac, Armea Helena S.G. (7 - Topaz)",
			"Ramirez, Francesca Marie M. (7 - Topaz)",
			"Simangan, Svesda Marie L. (7 - Topaz)",
			"Sulvita, Ruth Abigail S. (7 - Topaz)",
			"Tenorio, Yanna Lorraine D.F. (7 - Topaz)",
			"...",
			"...",
			"...",
			"..."
			]
];
			
var boys = boys2022;
var girls = girls2022;
var undo = [["...", "..."], ["...", "..."], ["...", "..."], ["...", "..."], ["...","..."]];
	
function generateShip(){
	undo[0] = undo[1];
	undo[1] = undo[2];
	undo[2] = undo[3];
	undo[3] = undo[4];
	undo[4] = [document.getElementById("boy").innerHTML, document.getElementById("girl").innerHTML];

    var a, b;
    switch(typeShip){
        case 1:
            a = 20;
            b = 20;
        case 0:
            a = 20; 
            b = 14;
        case -1:
            a = 14;
            b = 14;
    }
		
	if(!retainB){
		do{
			var boy = boys[Math.floor(Math.random()*10000 % 8)][Math.floor(Math.random()*10000 % a)];
	    	document.getElementById("boy").innerHTML = boy;
		}
		while(document.getElementById("boy").innerHTML == "...");
	}
	if(!retainG){
		do{
			var girl = girls[Math.floor(Math.random()*10000 % 8)][Math.floor(Math.random()*10000 % b)];
			document.getElementById("girl").innerHTML = girl;
		}
	    while(document.getElementById("girl").innerHTML == "...");
	}
				
	if(document.getElementById("boy").innerHTML == "Maca, Lee Justine V. (9 - Strontium)" && document.getElementById("girl").innerHTML == "Sta. Maria, Daphne Denice A. (9 - Sodium)"){
		document.getElementById("remarks").innerHTML = CryptoJS.AES.decrypt("U2FsdGVkX1+THUEbmq2mOOr0sk8AzfPhkIbUoaSS8R2j4NjcqO6eSh+Y9jrc6oBj", girls2022[6][5]).toString(CryptoJS.enc.Utf8);
	}
	else{
		if(Math.abs(parseInt(document.getElementById("batchB").innerHTML, 10) - parseInt(document.getElementById("batchG").innerHTML, 10)) > 2){
			document.getElementById("remarks").innerHTML = "WARNING: You are attempting to generate a ship across " + (Math.abs(parseInt(document.getElementById("batchB").innerHTML, 10) - parseInt(document.getElementById("batchG").innerHTML, 10)) + 1).toString() + " batches! This will not end well...";
			document.getElementById("remarks").style = "color:red;";
		}
		else{
			document.getElementById("remarks").innerHTML = "\0";
			document.getElementById("remarks").style = "\0";
		}
	}
};
			
/* Used in original code but I just added the variables a and b to the original generateShip() function instead. Haven't encountered any issues but keeping this just in case.

function generateGayShip(){
	undo[0] = undo[1];
	undo[1] = undo[2];
	undo[2] = undo[3];
	undo[3] = undo[4];
	undo[4] = [document.getElementById("boy").innerHTML, document.getElementById("girl").innerHTML];
				
	if(!retainB){
		do{
			var boy = boys[Math.floor(Math.random()*10000 % 8)][Math.floor(Math.random()*10000 % 20)];
			document.getElementById("boy").innerHTML = boy;
		}
		while(document.getElementById("boy").innerHTML == "...");
	}
	if(!retainG){
		do{
			var girl = girls[Math.floor(Math.random()*10000 % 8)][Math.floor(Math.random()*10000 % 20)];
			document.getElementById("girl").innerHTML = girl;
		}
	    while(document.getElementById("girl").innerHTML == "..." || document.getElementById("girl").innerHTML == document.getElementById("boy").innerHTML);
	}
};
			
function generateLesbianShip(){
	undo[0] = undo[1];
	undo[1] = undo[2];
	undo[2] = undo[3];
	undo[3] = undo[4];
	undo[4] = [document.getElementById("boy").innerHTML, document.getElementById("girl").innerHTML];
				
	if(!retainB){
		do{
			var boy = boys[Math.floor(Math.random()*10000 % 8)][Math.floor(Math.random()*10000 % 14)];
			document.getElementById("boy").innerHTML = boy;
		}
		while(document.getElementById("boy").innerHTML == "...");
	}
	if(!retainG){
		do{
			var girl = girls[Math.floor(Math.random()*10000 % 8)][Math.floor(Math.random()*10000 % 14)];
			document.getElementById("girl").innerHTML = girl;
		}
		while(document.getElementById("girl").innerHTML == "..." || document.getElementById("girl").innerHTML == document.getElementById("boy").innerHTML);
	}
}; */
			
function toGay(){
	typeShip = 1;

	if(retainB){
		retainB = false;
		document.getElementById("lockB").innerHTML = "Lock";
	}
	if(retainG){
		retainG = false;
		document.getElementById("lockG").innerHTML = "Lock";
	}
	undo = [["...", "..."], ["...", "..."], ["...", "..."], ["...", "..."], ["...", "..."]];

	document.getElementsByClassName("left-container")[0].style = "\0";
	document.getElementsByClassName("right-container")[0].style = "background: #000020; border-color: #000080;";
    document.getElementById("boy").innerHTML = "...";
	document.getElementById("girl").innerHTML = "...";

	switch(document.getElementById("batchG").innerHTML){
		case "2022":
			girls = boys2022;
			break;
		case "2021":
			girls = boys2021;
			break;
		case "2024":
			girls = boys2024;
			break;
		case "2023":
			girls = boys2023;
			break;
	}
	switch(document.getElementById("batchB").innerHTML){
		case "2022":
			boys = boys2022;
			break;
		case "2021":
			boys = boys2021;
			break;
		case "2024":
			boys = boys2024;
			break;
		case "2023":
			boys = boys2023;
			break;
	}
};
			
function toStraight(){
	typeShip = 0;

	if(retainB){
		retainB = false;
		document.getElementById("lockB").innerHTML = "Lock";
	}
	if(retainG){
		retainG = false;
		document.getElementById("lockG").innerHTML = "Lock";
	}
	undo = [["...", "..."], ["...", "..."], ["...", "..."], ["...", "..."], ["...", "..."]];

	document.getElementsByClassName("left-container")[0].style = "\0";
	document.getElementsByClassName("right-container")[0].style = "\0";
	document.getElementById("boy").innerHTML = "...";
	document.getElementById("girl").innerHTML = "...";

	switch(document.getElementById("batchG").innerHTML){
		case "2022":
		    girls = girls2022;
			break;
		case "2021":
			girls = girls2021;
			break;
		case "2024":
			girls = girls2024;
			break;
		case "2023":
			girls = girls2023;
			break;
	}
	switch(document.getElementById("batchB").innerHTML){
		case "2022":
		    boys = boys2022;
			break;
		case "2021":
			boys = boys2021;
			break;
	    case "2024":
			boys = boys2024;
			break;
	    case "2023":
			boys = boys2023;
			break;
	}
};
			
function toLesbian(){
	typeShip = -1;

	if(retainB){
		retainB = false;
		document.getElementById("lockB").innerHTML = "Lock";
	}
	if(retainG){
		retainG = false;
		document.getElementById("lockG").innerHTML = "Lock";
	}
	undo = [["...", "..."], ["...", "..."], ["...", "..."], ["...", "..."], ["...", "..."]];

	document.getElementsByClassName("left-container")[0].style = "background: #200000; border-color: #800000";
	document.getElementsByClassName("right-container")[0].style = "\0";
	document.getElementById("boy").innerHTML = "...";
	document.getElementById("girl").innerHTML = "...";

	switch(document.getElementById("batchG").innerHTML){
		case "2022":
	    	girls = girls2022;
			break;
		case "2021":
			girls = girls2021;
			break;
		case "2024":
			girls = girls2024;
			break;
		case "2023":
			girls = girls2023;
			break;
	}
	switch(document.getElementById("batchB").innerHTML){
		case "2022":
			boys = girls2022;
			break;
		case "2021":
			boys = girls2021;
			break;
		case "2024":
			boys = girls2024;
			break;
		case "2023":
			boys = girls2023;
			break;
	}
};
			
function changeBatchB(){
	var currentBatch = document.getElementById("batchB").innerHTML;

	if(retainB){
		retainB = false;
		document.getElementById("lockB").innerHTML = "Lock";
	}
	if(retainG){
		retainG = false;
		document.getElementById("lockG").innerHTML = "Lock";
	}

	undo = [["...", "..."], ["...", "..."], ["...", "..."], ["...", "..."], ["...", "..."]];
				
	if(currentBatch == "2022"){
    	document.getElementById("batchB").style = "background: #000020; border: 4px solid #000080;";
		document.getElementById("batchB").innerHTML = "2021";
		document.getElementById("boy").innerHTML = "...";
		document.getElementById("girl").innerHTML = "...";

	    if(typeShip != -1){
			boys = boys2021;
		}
		else{
			boys = girls2021;
		}
	}
	if(currentBatch == "2021"){
		document.getElementById("batchB").style = "background: #002000; border: 4px solid #008000;";
		document.getElementById("batchB").innerHTML = "2024";
		document.getElementById("boy").innerHTML = "...";
		document.getElementById("girl").innerHTML = "...";
		
        if(typeShip != -1){
			boys = boys2024;
		}
		else{
			boys = girls2024;
		}
	}
	if(currentBatch == "2024"){
		document.getElementById("batchB").style = "background: #202000; border: 4px solid #808000;";
		document.getElementById("batchB").innerHTML = "2023";
		document.getElementById("boy").innerHTML = "...";
		document.getElementById("girl").innerHTML = "...";

		if(typeShip != -1){
			boys = boys2023;
		}
		else{
	    	boys = girls2023;
		}
	}
	if(currentBatch == "2023"){
		document.getElementById("batchB").style = "background: #200000; border: 4px solid #800000;";
		document.getElementById("batchB").innerHTML = "2022";
		document.getElementById("boy").innerHTML = "...";
		document.getElementById("girl").innerHTML = "...";

		if(typeShip != -1){
			boys = boys2022;
		}
		else{
			boys = girls2022;
		}
	}
				
	if(Math.abs(parseInt(document.getElementById("batchB").innerHTML, 10) - parseInt(document.getElementById("batchG").innerHTML, 10)) > 2){
		document.getElementById("remarks").innerHTML = "WARNING: You are attempting to generate a ship across " + (Math.abs(parseInt(document.getElementById("batchB").innerHTML, 10) - parseInt(document.getElementById("batchG").innerHTML, 10)) + 1).toString() + " batches! This will not end well...";
		document.getElementById("remarks").style = "color:red;";
	}
	else{
		document.getElementById("remarks").innerHTML = "\0";
		document.getElementById("remarks").style = "\0";
	}
};
			
function changeBatchG(){
	var currentBatch = document.getElementById("batchG").innerHTML;

	if(retainB){
		retainB = false;
		document.getElementById("lockB").innerHTML = "Lock";
	}
	if(retainG){
		retainG = false;
		document.getElementById("lockG").innerHTML = "Lock";
	}

	undo = [["...", "..."], ["...", "..."], ["...", "..."], ["...", "..."], ["...", "..."]];
				
	if(currentBatch == "2022"){
		document.getElementById("batchG").style = "background: #000020; border: 4px solid #000080;";
		document.getElementById("batchG").innerHTML = "2021";
		document.getElementById("boy").innerHTML = "...";
		document.getElementById("girl").innerHTML = "...";

		if(typeShip != 1){
			girls = girls2021;
		}
		else{
			girls = boys2021;
		}
	}
	if(currentBatch == "2021"){
		document.getElementById("batchG").style = "background: #002000; border: 4px solid #008000;";
		document.getElementById("batchG").innerHTML = "2024";
		document.getElementById("boy").innerHTML = "...";
		document.getElementById("girl").innerHTML = "...";

		if(typeShip != 1){
			girls = girls2024;
		}
		else{
			girls = boys2024;
		}
	}
	if(currentBatch == "2024"){
	    document.getElementById("batchG").style = "background: #202000; border: 4px solid #808000;";
		document.getElementById("batchG").innerHTML = "2023";
		document.getElementById("boy").innerHTML = "...";
		document.getElementById("girl").innerHTML = "...";

		if(typeShip != 1){
			girls = girls2023;
        }
		else{
			girls = boys2023;
		}
	}
	if(currentBatch == "2023"){
		document.getElementById("batchG").style = "background: #200000; border: 4px solid #800000;";
		document.getElementById("batchG").innerHTML = "2022";
		document.getElementById("boy").innerHTML = "...";
		document.getElementById("girl").innerHTML = "...";

		if(typeShip != 1){
			girls = girls2022;
		}
		else{
			girls = boys2022;
		}
	}

	if(Math.abs(parseInt(document.getElementById("batchB").innerHTML, 10) - parseInt(document.getElementById("batchG").innerHTML, 10)) > 2){
		document.getElementById("remarks").innerHTML = "WARNING: You are attempting to generate a ship across " + (Math.abs(parseInt(document.getElementById("batchB").innerHTML, 10) - parseInt(document.getElementById("batchG").innerHTML, 10)) + 1).toString() + " batches! This will not end well...";
		document.getElementById("remarks").style = "color:red;";
	}
	else{
		document.getElementById("remarks").innerHTML = "\0";
		document.getElementById("remarks").style = "\0";
	}
};
			
function undoShip(){
	document.getElementById("boy").innerHTML = undo[4][0];
	document.getElementById("girl").innerHTML = undo[4][1];

	undo[4] = undo[3];
	undo[3] = undo[2];
	undo[2] = undo[1];
	undo[1] = undo[0];
				
	if(document.getElementById("boy").innerHTML == "Maca, Lee Justine V. (9 - Strontium)" && document.getElementById("girl").innerHTML == "Sta. Maria, Daphne Denice A. (9 - Sodium)"){
		document.getElementById("remarks").innerHTML = CryptoJS.AES.decrypt("U2FsdGVkX1+THUEbmq2mOOr0sk8AzfPhkIbUoaSS8R2j4NjcqO6eSh+Y9jrc6oBj", girls2022[6][5]).toString(CryptoJS.enc.Utf8);
	}
	else{
		if(Math.abs(parseInt(document.getElementById("batchB").innerHTML, 10) - parseInt(document.getElementById("batchG").innerHTML, 10)) > 2){
		    document.getElementById("remarks").innerHTML = "WARNING: You are attempting to generate a ship across " + (Math.abs(parseInt(document.getElementById("batchB").innerHTML, 10) - parseInt(document.getElementById("batchG").innerHTML, 10)) + 1).toString() + " batches! This will not end well...";
		    document.getElementById("remarks").style = "color:red;";
        }
	    else{
		    document.getElementById("remarks").innerHTML = "\0";
	        document.getElementById("remarks").style = "\0";
	    }
    }
};
			
function retainBToggle(){
	retainB = !retainB;

	if(retainB){
		document.getElementById("lockB").innerHTML = "Unlock";
	}
	else{
		document.getElementById("lockB").innerHTML = "Lock";
	}
	
}
			
function retainGToggle(){
	retainG = !retainG;

	if(retainG){
		document.getElementById("lockG").innerHTML = "Unlock";
	}
	else{
		document.getElementById("lockG").innerHTML = "Lock";
	}
};