




/*
     FILE ARCHIVED ON 0:14:47 Oct 7, 2013 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 16:49:45 Mar 5, 2014.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
	// ---------------------------
	//     Global Variables
	// ---------------------------
	
	//							Topic/Genre Combination      	  Topic/Audience
	//									Strength
	//	Name					Act	 Adv  RPG  Sim  Str  Cas       Y    E    M
	var topics = [ 
		["Airplane", 			1.0, 0.6, 0.8, 1.0, 1.0, 1.0,     1.0, 1.0, 1.0],
		["Aliens",				1.0, 0.8, 1.0, 0.6, 0.9, 0.7,     0.6, 1.0, 1.0],
		["Alternate History", 	1.0, 0.8, 1.0, 0.6, 0.9, 0.6,     0.6, 1.0, 1.0],
		["Business", 			0.6, 0.8, 0.8, 1.0, 1.0, 0.6,     0.7, 1.0, 1.0],
		["City", 				0.7, 0.6, 0.7, 1.0, 1.0, 0.7,     1.0, 1.0, 1.0],
		["Comedy", 				0.6, 1.0, 0.8, 0.6, 0.6, 1.0,     1.0, 1.0, 1.0],
		["Cyberpunk", 			1.0, 0.8, 1.0, 0.8, 0.7, 0.6,     0.6, 1.0, 1.0],
		["Dance", 				0.7, 0.6, 0.6, 1.0, 0.6, 1.0,     0.6, 1.0, 1.0],
		["Detective", 			0.6, 1.0, 1.0, 0.8, 0.6, 0.9,     1.0, 1.0, 1.0],
		["Dungeon", 			1.0, 0.8, 1.0, 1.0, 1.0, 0.6,     0.8, 1.0, 1.0],
		["Evolution", 			0.7, 0.6, 0.6, 1.0, 1.0, 0.6,     1.0, 1.0, 1.0],
		["Fantasy", 			1.0, 1.0, 1.0, 0.8, 1.0, 0.6,     1.0, 1.0, 1.0],
		["Fashion", 			0.6, 0.8, 1.0, 1.0, 0.6, 1.0,     1.0, 1.0, 1.0],
		["GameDev", 			0.6, 0.7, 0.6, 1.0, 0.6, 0.8,     0.8, 1.0, 1.0],
		["Government", 			0.6, 0.6, 0.6, 1.0, 1.0, 0.7,     0.6, 1.0, 1.0],
		["Hacking", 			0.7, 0.8, 0.7, 1.0, 1.0, 0.6,     0.7, 1.0, 1.0],
		["History", 			0.8, 0.8, 0.8, 1.0, 1.0, 0.9,     0.9, 1.0, 1.0],
		["Horror", 				1.0, 0.8, 0.8, 0.6, 0.7, 0.8,     0.6, 1.0, 1.0],
		["Hospital", 			0.6, 0.6, 0.8, 1.0, 0.8, 0.7,     0.6, 1.0, 1.0],
		["Hunting", 			1.0, 0.9, 0.9, 1.0, 0.7, 0.9,     1.0, 1.0, 1.0],
		["Law", 				0.6, 1.0, 0.9, 0.9, 0.9, 0.6,     0.8, 1.0, 1.0],
		["Life", 				0.6, 1.0, 0.9, 1.0, 0.6, 0.8,     1.0, 1.0, 1.0],
		["Martial Arts", 		1.0, 0.8, 1.0, 1.0, 0.7, 1.0,     1.0, 1.0, 1.0],
		["Medieval", 			1.0, 1.0, 1.0, 0.8, 1.0, 0.7,     1.0, 1.0, 1.0],
		["Military", 			1.0, 0.6, 0.8, 1.0, 1.0, 0.6,     0.7, 1.0, 1.0],
		["Movies", 				0.6, 0.8, 0.6, 1.0, 0.6, 1.0,     1.0, 1.0, 1.0],
		["Music", 				1.0, 0.9, 0.6, 1.0, 0.6, 1.0,     1.0, 1.0, 1.0],
		["Mystery", 			0.6, 1.0, 1.0, 0.8, 0.6, 0.8,     1.0, 1.0, 1.0],
		["Ninja", 				1.0, 0.8, 0.8, 0.6, 0.8, 0.9,     1.0, 1.0, 1.0],
		["Pirate", 				0.8, 1.0, 0.8, 0.8, 0.7, 0.8,     1.0, 1.0, 1.0],
		["Post Apocalyptic", 	1.0, 0.8, 1.0, 0.6, 0.9, 0.6,     0.6, 1.0, 1.0],
		["Prison", 				1.0, 1.0, 0.8, 1.0, 0.8, 0.6,     0.6, 1.0, 1.0],
		["Racing", 				0.9, 0.6, 0.8, 1.0, 0.7, 1.0,     1.0, 1.0, 1.0],
		["Romance", 			0.6, 1.0, 0.8, 0.8, 0.6, 0.9,     0.8, 1.0, 1.0],
		["Rhythm",				1.0, 0.7, 0.7, 1.0, 0.6, 1.0,     1.0, 1.0, 1.0],
		["Sci-Fi", 				1.0, 1.0, 1.0, 1.0, 1.0, 0.8,     1.0, 1.0, 1.0],
		["School", 				0.8, 1.0, 1.0, 1.0, 1.0, 0.8,     1.0, 1.0, 1.0],
		["Space", 				1.0, 0.8, 0.6, 1.0, 1.0, 0.7,     1.0, 1.0, 1.0],
		["Sports", 				1.0, 0.6, 0.6, 1.0, 0.7, 1.0,     1.0, 1.0, 1.0],
		["Spy", 				1.0, 1.0, 1.0, 0.8, 0.7, 0.8,     1.0, 1.0, 1.0],
		["Startups",			0.6, 0.8, 0.7, 1.0, 0.8, 0.6,     0.6, 1.0, 1.0],
		["Superheroes", 		1.0, 0.6, 0.9, 0.6, 0.6, 0.7,     1.0, 1.0, 1.0],
		["Surgery", 			0.8, 0.7, 0.6, 1.0, 0.7, 0.6,     0.8, 1.0, 1.0],
		["TimeTravel", 			1.0, 1.0, 0.6, 0.6, 0.6, 0.6,     1.0, 1.0, 1.0],
		["Transport", 			0.6, 0.6, 0.6, 1.0, 1.0, 0.6,     1.0, 1.0, 1.0],
		["UFO", 				1.0, 0.8, 0.6, 0.8, 1.0, 0.8,     1.0, 1.0, 1.0],
		["Vampire", 			1.0, 0.8, 1.0, 0.6, 0.6, 0.7,     0.6, 1.0, 1.0],
		["Virtual Pet", 		0.6, 0.8, 0.6, 1.0, 0.9, 1.0,     1.0, 0.8, 0.7],
		["Vocabulary", 			0.6, 0.6, 0.6, 1.0, 1.0, 1.0,     0.7, 1.0, 1.0],
		["Werewolf", 			1.0, 0.8, 1.0, 0.6, 0.6, 0.7,     0.6, 1.0, 1.0],
		["WildWest", 			0.9, 0.7, 1.0, 0.6, 0.6, 0.7,     0.6, 1.0, 1.0] 
	];
	
	//								Platform/Genre Combination				Platform/Audience
	//										Strength												Tech
	//	Name				Act		Adv		RPG  	Sim  	Str  	Cas		 Y		 E		 M		Level
	var platforms = [			
		["PC",              1.00,	1.00,	1.00,	1.00,	1.00,	0.60,   1.0,	1.15,	1.3,	0],
		["Govodore 64",     1.00,	1.00,	1.00,	1.00,	1.00,	1.00,   1.0,	1.0,	1.0,	1],
		["TES",             1.00,	0.95,	0.96,	0.94,	0.94,	0.96,   1.0,	0.8,	0.6,	2],
		["Master V",        1.00,	0.95,	0.96,	0.94,	0.94,	0.96,   1.0,	0.8,	0.6,	2],
		["Gameling",        1.00,	0.97,	1.01,	0.94,	0.94,	1.00,   1.0,	0.7,	0.6,	2],
		["Vena Gear",       1.00,	0.97,	1.01,	0.94,	0.94,	0.97,   1.0,	0.75,	0.6,	3],
		["Vena Oasis",      1.00,	0.97,	1.01,	0.94,	0.9,	0.9,    0.9,	1.0,	0.9,	3],
		["Super TES",       1.00,	0.95,	0.96,	0.97,	0.97,	0.98,   1.0,	0.8,	0.6,	3],
		["PlaySystem",      1.05,	0.935,	1.07,	0.94,	0.94,	0.95,   1.0,	0.85,	0.75,	3],
		["TES 64",          1.00,	0.95,	0.96,	0.95,	0.95,	0.97,   1.0,	0.8,	0.7,	3],
		["DreamVast",       1.00,	1.04,	0.96,	0.95,	0.95,	0.94,   1.0,	0.75,	0.8,	4],
		["PlaySystem 2",    1.00,	0.935,	1.07,	0.94,	0.94,	1.02,   1.0,	0.9,	0.85,	4],
		["mBox",            1.07,	1.015,	0.98,	0.93,	0.93,	0.93,   1.0,	0.9,	0.85,	4],
		["Game Sphere",     1.00,	0.95,	0.96,	0.95,	0.95,	0.98,   1.0,	0.8,	0.6,	3],
		["GS",              0.96,	0.98,	1.02,	1.04,	1.04,	1.04,   1.0,	0.7,	0.6,	3],
		["PPS",             1.03,	0.97,	1.06,	0.95,	0.95,	0.96,   1.0,	0.7,	0.8,	4],
		["mBox 360",        1.015,	0.98,	1.00,	0.92,	0.92,	1.04,   1.0,	1.3,	1.2,	4],
		["Nuu",             0.98,	0.92,	0.95,	1.09,	0.95,	1.09,   1.0,	0.9,	0.85,	4],
		["PlaySystem 3",    1.00,	0.98,	1.00,	0.92,	0.92,	0.98,   1.0,	1.3,	1.2,	5],
		["grPhone",         0.96,	0.98,	1.02,	1.04,	1.04,	1.04,   1.0,	0.7,	0.6,	4],
		["grPad",           0.96,	0.98,	1.02,	1.04,	1.04,	1.04,   1.0,	0.7,	0.6,	4],
		["mPad",            0.985,	0.985,	0.96,	1.08,	1.00,	1.05,   1.0,	1.0,	0.1,	4],
		["Wuu",             0.98,	0.92,	0.95,	1.05,	0.96,	1.00,   1.0,	0.9,	0.85,	5],
		["mBox Next",       1.015,	0.98,	1.00,	0.92,	0.93,	1.02,  	1.0,	1.3,	1.2,	6],
		["PlaySystem 4",    1.00,	0.98,	1.00,	0.92,	0.92,	0.98,  	1.0,	1.3,	1.2,	6],
		["Custom Console",  1.015,	0.98,	1.00,	0.92,	0.93,	1.02,   1.0,	1.3,	1.2,    0] 
	];
	
	//								Development Focus
	//						Act		Adv		RPG  	Sim  	Str  	Cas
	var developmentFocus = [
		["Engine",			1.0,	0.7,	0.7,	0.9,	0.9,	0.6],	// Engine
		["Gameplay",		0.9,	0.8,	0.9,	1.0,	1.0,	1.0],	// Gameplay
		["Story/Quests",	0.7,	1.0,	1.0,	0.8,	0.8,	0.7],	// Story/Quests
		["Dialogues",		0.6,	1.0,	1.0,	0.7,	0.7,	0.7],	// Dialogues
		["Level Design",	0.9,	0.8,	0.9,	0.9,	1.0,	1.0],	// Level Design
		["AI",				1.0,	0.7,	0.8,	1.0,	0.9,	0.6],	// AI
		["World Design",	0.8,	1.0,	1.0,	0.8,	0.8,	0.7],	// World Design
		["Graphic",			1.0,	0.9,	0.9,	1.0,	1.0,	1.0],	// Graphic
		["Sound",			0.9,	0.8,	0.8,	0.9,	0.9,	0.9]	// Sound
	];
	
	var techDesignRatio = [	1.8,	0.4,	0.6,	1.6,	1.6,	0.5];
	
	var genres = ["Action", "Adventure", "RPG", "Simulation", "Strategy", "Casual", "None"];
	var audiences = ["Young", "Everyone", "Mature"];
	var gameSizes = ["Small", "Medium", "Large", "AAA"];
	var years = ["0-6", "7-22", "23+"];
	
	//				Misc Multipliers for calculating 
	//				scores for different games sizes
	//							M1		M2	Optimal Team Size
	var sizeConstants = [
								[1,		1,		1],	// Small
								[2,		1.2,	3],	// Medium
								[3,		1.4,	5],	// Large
								[6,		1.6,	6]	// AAA
	];
	
	// ALL ELEMENTS
		// divs
	var calcDiv, notesDiv, slidersDiv, 
		// old games table
		oldGamesTable, oldGamesDiv, oldGamesHeaderDiv, oldGamesTableDiv, 
		calcfs, 
		// selectors
		platformSelector, topicSelector, gameSizeSelector, audienceSelector, 
		genre1Selector, genre2Selector, yearSelector, trendSelector, 
		// check boxes
		inGarageBox, lt100kFansBox, isMMOBox, newEmployeeBox, isSequelBox, isExpansionBox,
		// input boxes
		designInput, techInput, bugInput, 
		// buttons
		nextGameButton, saveGamesButton, loadGamesButton,
		// info labels score and review
		gameScoreLabel, reviewScoreLabel, targetGameScoreLabel,
		// info labels tech/design etc.
		actualTDRatioLabel, targetTDRatioLabel, qualityLabel, salesModifierLabel,
		platformGenreLabel, topicAudienceLabel, topicGenreLabel, 
		// slider parts
		sliderTracks, sliderTab; 
		
	// previous games information
	var prevTopic = -1, prevGenre1 = -1, prevGenre2 = -1, targetGameScore = 20, 
		newTopScoreSet = false, gameNumber = 1, gameScore = 0, topScore = 0, numTopScores = 0, sameAsLast = false,
		oldGames = [];
	
	// slider div size
	var sliderDivWidth = 32;
	var sliderDivHeight = 16;
		
	// ---------------------------
	//   Set up calculator
	// ---------------------------
		
	$(document).ready(function() {
		// This is the div the calculator will be placed in
		calcDiv = document.getElementById("GameDevCalculator");
		
		// CREATE FIELDSET
		calcfs = $(document.createElement('fieldset')).attr({'id' : 'calcFieldset'}).appendTo(calcDiv);
		$(document.createElement('h2')).text('Game Dev Tycoon Calculator').appendTo(calcfs);
		
		// CREATE DIVS AND TABLES FOR ELEMENTS
		// div for check boxes
		var checkboxDiv = $(document.createElement('div')).attr({'id' : 'checkboxDiv'}).appendTo(calcfs);
		var checkboxTable = $(document.createElement('table')).attr({'id' : 'checkboxTable'}).appendTo(checkboxDiv);
		
		// div for select boxes
		var selectboxDiv = $(document.createElement('div')).attr({'id' : 'selectboxDiv'}).appendTo(calcfs);
		var selectboxTable = $(document.createElement('table')).attr({'id' : 'selectboxTable'}).appendTo(selectboxDiv);
		
		// sliders container
		sliderDiv = $('<div></div>').attr({'id' : 'sliderDiv'}).appendTo(calcfs).hover(function(){addToNotes('sliders')}, clearNotes);
		
		// div for information
		var infoDiv = $(document.createElement('div')).attr({'id' : 'infoDiv'}).appendTo(calcfs);
		var infoTable = $(document.createElement('table')).attr({'id' : 'infoTable'}).appendTo(infoDiv);
		
		// div for input boxes
		var inputboxDiv = $(document.createElement('div')).attr({'id' : 'inputboxDiv'}).appendTo(calcfs);
		var inputboxTable = $(document.createElement('table')).attr({'id' : 'inputboxTable'}).appendTo(inputboxDiv);
		
		// div for displaying notes
		notesDiv = $(document.createElement('div')).attr({'id' : 'notesDiv'}).appendTo(calcfs).hover(function(){addToNotes('app info')}, clearNotes);
		
		// div for load, save, next game buttons
		var buttonsDiv = $(document.createElement('div')).attr({'id' : 'buttonsDiv'}).appendTo(calcfs);
		var buttonsTable = $(document.createElement('table')).attr({'id' : 'buttonsTable'}).appendTo(buttonsDiv);
		
		$(document.createElement('div')).css({clear: 'both'}).appendTo(calcDiv);
		
		// CREATE SELECTORS AND OTHER INPUT FIELDS, LABELS, AND ADD THEM TO RELEVANT TABLES
		
		platformSelector = $(document.createElement('select')).attr({'id': 'platformselect'}).change(populateFields).keyup(populateFields);
		topicSelector = $(document.createElement('select')).change(populateFields).keyup(populateFields);
		genre1Selector = $(document.createElement('select')).change(populateFields).keyup(populateFields);
		genre2Selector = $(document.createElement('select')).change(populateFields).keyup(populateFields);
		audienceSelector = $(document.createElement('select')).change(populateFields).keyup(populateFields);
		gameSizeSelector = $(document.createElement('select')).change(populateFields).keyup(populateFields);
		yearSelector = $(document.createElement('select')).change(populateFields).keyup(populateFields);
		trendSelector = $(document.createElement('select')).change(populateFields).keyup(populateFields);
		
		// add selectors to table
		$('<tr></tr>')
				.append($('<td></td>').append($('<label></label>').html('Platform')).css({'text-align': 'right'}))
				.append($('<td></td>').append(platformSelector).css({width: '160px'}))
				.append($('<td></td>').append($('<label></label>').html('Genre 1')).css({'text-align': 'right'}).hover(function(){addToNotes('genre')}, clearNotes))
				.append($('<td></td>').append(genre1Selector.css({width: '180px'})).hover(function(){addToNotes('genre')}, clearNotes))
				.appendTo(selectboxTable);
		$('<tr></tr>')
				.append($('<td></td>').append($('<label></label>').html('Topic')).css({'text-align': 'right'}))
				.append($('<td></td>').append(topicSelector))
				.append($('<td></td>').append($('<label></label>').html('Genre 2')).css({'text-align': 'right'}).hover(function(){addToNotes('genre')}, clearNotes))
				.append($('<td></td>').append(genre2Selector.css({width: '180px'})).hover(function(){addToNotes('genre')}, clearNotes))
				.appendTo(selectboxTable);
		$('<tr></tr>')
				.append($('<td></td>').append($('<label></label>').html('Audience')).css({'text-align': 'right'}).hover(function(){addToNotes('audience')}, clearNotes))
				.append($('<td></td>').append(audienceSelector).hover(function(){addToNotes('audience')}, clearNotes))
				.append($('<td></td>').append($('<label></label>').html('Game Size')).css({'text-align': 'right'}).hover(function(){addToNotes('game size')}, clearNotes))
				.append($('<td></td>').append(gameSizeSelector).hover(function(){addToNotes('game size')}, clearNotes))
				.appendTo(selectboxTable);
		$('<tr></tr>')
				.append($('<td></td>').append($('<label></label>').html('Year')).css({'text-align': 'right'}).hover(function(){addToNotes('year')}, clearNotes))
				.append($('<td></td>').append(yearSelector).hover(function(){addToNotes('year')}, clearNotes))
				.append($('<td></td>').append($('<label></label>').html('Trend')).css({'text-align': 'right'}))
				.append($('<td></td>').append(trendSelector))
				.appendTo(selectboxTable);
		
		// Checkbox asking if still in Garage
		inGarageBox = $(document.createElement('input')).attr({'type': 'checkbox', 'checked':'true'}).change(populateFields);
		
		// Checkbox asking if less than 100k fans
		lt100kFansBox = $(document.createElement('input')).attr({'type': 'checkbox', 'checked':'true'}).change(populateFields);
		
		// Checkbox asking if game is a sequel
		isSequelBox = $(document.createElement('input')).attr('type', 'checkbox').change(populateFields);
		
		// Checkbox asking if game is an expansion
		isExpansionBox = $(document.createElement('input')).attr('type', 'checkbox').change(populateFields);
		
		// Checkbox asking if this game is an MMO
		isMMOBox = $(document.createElement('input')).attr('type', 'checkbox').change(populateFields);
		
		// Checkbox asking if this game has a new employee working on it
		newEmployeeBox = $(document.createElement('input')).attr('type', 'checkbox').change(populateFields);
		
		// Add checkboxes to table
		$('<tr></tr>').append(inGarageBox).append($('<label></label>').html('In Garage')).appendTo(checkboxTable).hover(function(){addToNotes('in garage')}, clearNotes);
		$('<tr></tr>').append(lt100kFansBox).append($('<label></label>').html('< 100k Fans')).appendTo(checkboxTable).hover(function(){addToNotes('100k fans')}, clearNotes);
		$('<tr></tr>').append(isSequelBox).append($('<label></label>').html('Sequel')).appendTo(checkboxTable).hover(function(){addToNotes('sequel')}, clearNotes);
		$('<tr></tr>').append(isExpansionBox).append($('<label></label>').html('Expansion')).appendTo(checkboxTable).hover(function(){addToNotes('expansion')}, clearNotes);
		$('<tr></tr>').append(isMMOBox).append($('<label></label>').html('MMO')).appendTo(checkboxTable).hover(function(){addToNotes('mmo')}, clearNotes);
		$('<tr></tr>').append(newEmployeeBox).append($('<label></label>').html('New Employee')).appendTo(checkboxTable).hover(function(){addToNotes('new employee')}, clearNotes);
		
		// Input box for amount of design points
		designInput = $(document.createElement('input')).attr({type: 'text', size: '6', maxlength: '6'});
		$(designInput).keyup(populateFields);
		
		// Input box for amount of tech points
		techInput = $(document.createElement('input')).attr({type: 'text', size: '6', maxlength: '6'});
		$(techInput).keyup(populateFields);
		
		// Input box for amount of bug points
		bugInput = $(document.createElement('input')).attr({type: 'text', size: '6', maxlength: '6'});
		$(bugInput).keyup(populateFields);
		
		gameScoreLabel = $(document.createElement('label'));
		reviewScoreLabel = $(document.createElement('label'));
		targetGameScoreLabel = $(document.createElement('label'));
		
		// add input boxes to table
		$('<tr></tr>')
				.append($('<td></td>').append($('<label></label>').html('Tech')).css({'text-align': 'right', 'font-weight': 'bold', color: 'blue'}))
				.append($('<td></td>').append(techInput).css({width: '70px', }))
				.append($('<td></td>').append($('<label></label>').html('Target Score')).css({'text-align': 'right'}))
				.append($('<td></td>').append(targetGameScoreLabel).css({width: '70px', 'font-weight': 'bold'}))
				.appendTo(inputboxTable);
		$('<tr></tr>')
				.append($('<td></td>').append($('<label></label>').html('Design')).css({'text-align': 'right', 'font-weight': 'bold', color: 'orange'}))
				.append($('<td></td>').append(designInput))
				.append($('<td></td>').append($('<label></label>').html('Game Score')).css({'text-align': 'right'}))
				.append($('<td></td>').append(gameScoreLabel).css({'font-weight': 'bold'}))
				.appendTo(inputboxTable);
		$('<tr></tr>')
				.append($('<td></td>').append($('<label></label>').html('Bugs')).css({'text-align': 'right', 'font-weight': 'bold', color: 'red'}))
				.append($('<td></td>').append(bugInput))
				.append($('<td></td>').append($('<label></label>').html('Review Score')).css({'text-align': 'right'}))
				.append($('<td></td>').append(reviewScoreLabel).css({'font-weight': 'bold'}))
				.appendTo(inputboxTable);
		
		// Info labels
		
		targetTDRatioLabel = $(document.createElement('label'));
		actualTDRatioLabel = $(document.createElement('label'));
		qualityLabel = $(document.createElement('label'));
		salesModifierLabel = $(document.createElement('label'));
		platformGenreLabel = $(document.createElement('label'));
		topicAudienceLabel = $(document.createElement('label'));
		topicGenreLabel  = $(document.createElement('label'));
		
		$('<tr></tr>')
				.append($('<td></td>').append($('<label></label>').html('Optimal T/D Ratio')).hover(function(){addToNotes('optimalTD')}, clearNotes))
				.append($('<td></td>').append(targetTDRatioLabel).css({width: '40px', 'font-weight': 'bold'}).hover(function(){addToNotes('actualTD')}, clearNotes))
				.append($('<td></td>').append($('<label></label>').html('Platform / Genre')).hover(function(){addToNotes('platform genre')}, clearNotes))
				.append($('<td></td>').append(platformGenreLabel.css({'font-weight': 'bold'})).hover(function(){addToNotes('platform genre')}, clearNotes))
				.appendTo(infoTable);
		$('<tr></tr>')
				.append($('<td></td>').append($('<label></label>').html('Actual T/D Ratio')).hover(function(){addToNotes('actualTD')}, clearNotes))
				.append($('<td></td>').append(actualTDRatioLabel.css({'font-weight': 'bold'})).hover(function(){addToNotes('actualTD')}, clearNotes))
				.append($('<td></td>').append($('<label></label>').html('Topic / Audience')).hover(function(){addToNotes('topic audience')}, clearNotes))
				.append($('<td></td>').append(topicAudienceLabel.css({'font-weight': 'bold'})).hover(function(){addToNotes('topic audience')}, clearNotes))
				.appendTo(infoTable);
		$('<tr></tr>')
				.append($('<td></td>').append($('<label></label>').html('Game Quality')).hover(function(){addToNotes('quality')}, clearNotes))
				.append($('<td></td>').append(qualityLabel.css({'font-weight': 'bold'})).hover(function(){addToNotes('quality')}, clearNotes))
				.append($('<td></td>').append($('<label></label>').html('Topic / Genre')).hover(function(){addToNotes('topic genre')}, clearNotes))
				.append($('<td></td>').append(topicGenreLabel.css({'font-weight': 'bold'})).hover(function(){addToNotes('topic genre')}, clearNotes))
				.appendTo(infoTable);
		$('<tr></tr>')
				.append($('<td></td>').append($('<label></label>').html('Sales Modifier')).hover(function(){addToNotes('salesmod')}, clearNotes))
				.append($('<td></td>').append(salesModifierLabel.css({'font-weight': 'bold'})).hover(function(){addToNotes('salesmod')}, clearNotes))
				.appendTo(infoTable);
		
		// next game button
		nextGameButton = $(document.createElement('input'))
							.attr({type: 'submit', value: 'Next Game', id: 'nextGameButton'})
							.bind('click', gameFinished);
		// save game button
		saveGamesButton = $(document.createElement('input'))
							.attr({type: 'submit', value: 'Save', id: 'saveGamesButton'})
							.bind('click', saveOldGames);
		// load game button
		loadGamesButton = $(document.createElement('input'))
							.attr({type: 'submit', value: 'Load', id: 'loadGamesButton'})
							.bind('click', loadOldGames);
		// save game button
		clearLastButton = $(document.createElement('input'))
							.attr({type: 'submit', value: 'Clear Last', id: 'clearLastButton'})
							.bind('click', clearLastOldGame);
		// load game button
		clearAllButton = $(document.createElement('input'))
							.attr({type: 'submit', value: 'Clear All', id: 'clearAllButton'})
							.bind('click', clearAllOldGames);
							
		// put buttons in table
		$('<tr></tr>')
				.append($('<td></td>').append($(saveGamesButton)).hover(function(){addToNotes('save old games')}, clearNotes))
				.append($('<td></td>').append($(clearLastButton)).hover(function(){addToNotes('clear last old game')}, clearNotes))
				.append($('<td></td>').append($(nextGameButton)).attr({rowspan: '2'}))
				.appendTo(buttonsTable);
		$('<tr></tr>')
				.append($('<td></td>').append($(loadGamesButton)).hover(function(){addToNotes('load old games')}, clearNotes))
				.append($('<td></td>').append($(clearAllButton)).hover(function(){addToNotes('clear all old games')}, clearNotes))
				.appendTo(buttonsTable);
							
		// Sliders
		sliderTracks = new Array(9);
		for (var i = 0; i < 9; i++) {
			sliderTracks[i] = new Array(4); 
			
			for (var j = 0; j < 4; j++){
				sliderTracks[i][j] = $('<div></div>')
				.css({
					'position': 'relative',
					'left': i*sliderDivWidth+3, 
					'top': 9-(i*sliderDivHeight*5)})
				.addClass('sliderTrack')
				.addClass('emptySliderTrack')
				.hover(function() {addToNotes('sliders')}, clearNotes)
				.appendTo(sliderDiv);
			}
		}
		sliderTabs = new Array(9);
		for (var i = 0; i < 9; i++) {
			sliderTabs[i] = $('<div></div>')
				.css({
					'position': 'relative',
					'left': i*sliderDivWidth})
				.addClass('sliderTab')
				.hover(function() {addToNotes('sliders')}, clearNotes)
				.appendTo(sliderDiv);
		}
	
		
		// INITIALISE OLD GAMES TABLE
		oldGamesDiv = $(document.createElement('div')).appendTo(calcDiv); 
		oldGamesHeaderDiv = $(document.createElement('div')).attr({'id': 'oldGamesDivHeader'}).appendTo(oldGamesDiv);
		oldGamesTableDiv = $(document.createElement('div')).attr({'id': 'oldGamesDiv'}).appendTo(oldGamesDiv);
		
		oldGamesTable = $('<table></table>').attr({'id':'oldGamesTable'}).appendTo(oldGamesTableDiv);
		
		$('<table></table>').attr({'id':'oldGamesTableHeader'})
			.append($('<tr></tr>')
				.append($('<td></td>').append($('<label></label>').html('No.')).css('width', '35px'))
				.append($('<td></td>').append($('<label></label>').html('Platform')).css('width', '95px'))
				.append($('<td></td>').append($('<label></label>').html('Topic')).css('width', '90px'))
				.append($('<td></td>').append($('<label></label>').html('Genre')).css('width', '80px'))
				.append($('<td></td>').append($('<label></label>').html('Audience')).css('width', '70px'))
				.append($('<td></td>').append($('<label></label>').html('Game Size')).css('width', '60px'))
				.append($('<td></td>').append($('<label></label>').html('Year')).css('width', '35px'))
				.append($('<td></td>').append($('<label></label>').html('Tech')).css('width', '60px'))
				.append($('<td></td>').append($('<label></label>').html('Design')).css('width', '60px'))
				.append($('<td></td>').append($('<label></label>').html('Bugs')).css('width', '60px'))
				.append($('<td></td>').append($('<label></label>').html('Game Score')).css('width', '80px'))
				.append($('<td></td>').append($('<label></label>').html('Review Score')).css('width', '55px')))
				.appendTo(oldGamesHeaderDiv);
		
		populateFields();
		
	});
	
	// -----------------------------
	//   updateGameAndReviewScore
	// -----------------------------
	
	function updateGameAndReviewScore() {
		// get design and tech from input boxes
		var design = parseInt($(designInput).val());
		var tech   = parseInt($(techInput).val());
		var selTopic  = parseInt($(topicSelector).val());
		var selGenre1 = parseInt($(genre1Selector).val());
		var selGenre2 = parseInt($(genre2Selector).val());
		
		if (isNaN(design)) design = 0;
		if (isNaN(tech))   tech = 0;
		
		// DESIGN AND TECH FACTOR
		// m = (Design + Tech) / (2 * Multiplier 2)
		var m = (design + tech) / (sizeConstants[$(gameSizeSelector).val()][1] * 2);
		
		// QUALITY FACTOR
		var q = 1;
		// get optimal ratio
		var r = techDesignRatio[selGenre1];
		if (selGenre2!=6) r = (r * 2 / 3) + (techDesignRatio[selGenre2] / 3);
		var tdr = (tech / design).toFixed(1);
		
		targetTDRatioLabel.html(r.toFixed(1));
		
		if (design + tech >= 30 && design != 0) {
			
			if (tdr > 10) actualTDRatioLabel.html(">10");
			else actualTDRatioLabel.html(tdr);
			
			var t = (design * r - tech) / Math.max(design, tech);
			
			if (t <= 0.25 && t >= -0.25) {
				q += 0.1;
				actualTDRatioLabel.css({color: 'green'});
			}
			else if (t >  0.5  || t <  -0.5)  {
				q -= 0.1;
				actualTDRatioLabel.css({color: 'red'});
			}
			else actualTDRatioLabel.css({color: 'Orange'});
		}
		else actualTDRatioLabel.html(" - ").css({color: 'black'});
		
		// GOING TO ASSUME OPTIMAL SLIDER POSITION WAS MADE
		q += 0.2;
		
		// If this game has the same topic/genre/genre2 combination, -0.4 penalty
		if (selTopic==prevTopic && selGenre1==prevGenre1 && selGenre2==prevGenre2 && !isSequelBox.is(':checked') && !isExpansionBox.is(':checked')) {
			q -= 0.4;
			sameAsLast = true;
		}
		else sameAsLast = false;
		
		// if the game is a sequel on a newer engine
		// NOT A SEQUEL/EXPANSION WITHIN 40 WEEKS (-0.4)
		// NOT A SEQUEL ON THE SAME ENGINE (-0.1)
		if (isSequelBox.is(':checked')) {
			q += 0.2;
		}
		
		// if the game is an MMO and the Topic/Genre/Genre2 combination is <1 then 0.15 is deduced from q
		if (($(isMMOBox).is(':checked')) && (topics[selTopic][selGenre1 + 1] < 1 || (selGenre2 != 6 && topics[selTopic][selGenre2 + 1] < 1))) {
			q -= 0.15;
		}
		
		qualityLabel.html(q.toFixed(1));
		
		// PLATFORM/GENRE COMBINATION VALUE
		var platGenreVal = platforms[parseInt($(platformSelector).val())][selGenre1 + 1];
		if (selGenre2 != 6) platGenreVal = (platGenreVal * 2 / 3) + (platforms[parseInt($(platformSelector).val())][selGenre2 + 1] / 3);

		setBadOkGoodText(platformGenreLabel, platGenreVal);
		
		// TOPIC/AUDIENCE COMBINATION VALUE
		var topicAudienceVal = topics[$(topicSelector).val()][parseInt($(audienceSelector).val()) + 7];
		
		// BUG RATIO CALCULATION
		
		var numOfBugs = $(bugInput).val();
		var bugRatio = 1;
		
		if (numOfBugs > 0) {
			bugRatio = (numOfBugs * 100) / (tech + design);
			bugRatio = Math.min(bugRatio, 100);
			bugRatio = 1 - (0.8 * bugRatio / 100);
		}
		
		// TREND FACTOR
			
		var trendFactor = ($(trendSelector).val() == 1) ? 1.2 : 1;
		
		// strange combo trend
		if ($(trendSelector).val() == 2) 
		{
			trendFactor = 1.4;
			
			var v = topics[selTopic][selGenre1 + 1];
			if (selGenre2 != 6)
			{
				v = (v * 2 / 3) + (topics[selTopic][selGenre2+1] / 3);
			}
			if (v == 1)   trendFactor = 0.85;
			if (v == 0.9) trendFactor = 1.1;
			if (v == 0.8) trendFactor = 1.2;
			
			setBadOkGoodText(topicGenreLabel, trendFactor - 0.3);
		}	
		else setBadOkGoodText(topicGenreLabel, topics[selTopic][selGenre1 + 1]);	
		
		// CALCULATE FINAL SCORE
		gameScore = m * q * platGenreVal * topicAudienceVal * bugRatio * trendFactor;
		gameScoreLabel.html(Math.round(gameScore));
		
		// ------------------------------------
		// CALCULATE REVIEW SCORE	
				
		// calculate technical expertise
		var technicalExpertise = 10;
		if ($(gameSizeSelector).val() == 0 && !$(inGarageBox).is(':checked')) technicalExpertise = 9;
		if ($(gameSizeSelector).val() == 1 && $(lt100kFansBox).is(':checked')) technicalExpertise = 9;
		// large game
		if ($(gameSizeSelector).val() == 2) 
		{
			// going to assume engine tech level > 2D v4 or 3D v3
			var k = 3 - platforms[$(platformSelector).val()][10];
			if ($(platformSelector).val() == 0 || $(platformSelector).val() == 25) k = 0;
			if (k < 0) k = 0;
			technicalExpertise = 10 - k;
		}
		// AAA game
		if ($(gameSizeSelector).val() == 3)
		{
			// going to assume engine tech level > 3D v5
			var k = 5 - platforms[$(platformSelector).val()][10];
			if ($(platformSelector).val() == 0 || $(platformSelector).val() == 25) k = 0;
			if (k < 0) k = 0;
			if (k > 3) k = 3;
			// <---------------- NEED TO IMPLEMENT NUM EXPERTS FOR AAA GAMES
			// m = 3 - num experts in fields >=0.9
			var m = 0;				
			
			 technicalExpertise = 10 - k - (0.6 * m);
		}
		
		// calculate first review score
		var reviewScore = 10 * gameScore / targetGameScore;
		if (reviewScore > 10) reviewScore = 10;
		else if (reviewScore < 1) reviewScore = 1;
		
		reviewScore = reviewScore * technicalExpertise / 10;
		
		// first 2 game scores get nerfed, 3rd gets an automatic 10
		if (numTopScores < 3) {
			if (numTopScores == 2 && reviewScore >= 9) {
				newTopScoreSet = true;
				$(reviewScoreLabel).html("10.00");
			}
			else if (reviewScore == 10) {
				newTopScoreSet = true;
				$(reviewScoreLabel).html("8.75");
			}
			else if (reviewScore >= 9) {
				newTopScoreSet = true;
				$(reviewScoreLabel).html((reviewScore - 1.15).toFixed(2));
			}
			else if (reviewScore > 8.5) {
				newTopScoreSet = false;
				$(reviewScoreLabel).html((reviewScore - 0.5).toFixed(2));
			}
			else {
				newTopScoreSet = false;
				$(reviewScoreLabel).html(reviewScore.toFixed(2));
			}
		}	
		// new employee or low quality	
		else if (reviewScore >= 9)
		{
			newTopScoreSet = true;
			
			if (q < 1.1 || $(newEmployeeBox).is(':checked')) $(reviewScoreLabel).html("8.85");
			
			else $(reviewScoreLabel).html(reviewScore.toFixed(2));
		}
		else
		{	
			newTopScoreSet = false;	
				
			$(reviewScoreLabel).html(reviewScore.toFixed(2));
		}
		clearNotes();
	}
	
	// -----------------------
	//     draw sliders
	// -----------------------
	
	function drawSliders() {
		for (var i = 0; i < 9; i++) {
			var x = developmentFocus[i][parseInt($(genre1Selector).val())+1];
			if ($(genre2Selector).val() != 6) 
				x = (x * 2 / 3) + (developmentFocus[i][parseInt($(genre2Selector).val())+1] / 3);
			
			x = (x >= 0.9) ? 4 : (x < 0.8) ? 0 : 2;
			
			sliderTabs[i].css({'top': -638-(i*sliderDivHeight)-(x * 20)});
			
			var c = (i%3==0) ? 'redSliderTrack' : (i%3==1) ? 'greenSliderTrack' : 'blueSliderTrack';
			
			for (var j = 0; j < 4; j++) {
				$(sliderTracks[i][j]).removeClass('emptySliderTrack').removeClass(c);
				
				if (4-x > j) $(sliderTracks[i][j]).addClass('emptySliderTrack');
				else $(sliderTracks[i][j]).addClass(c);
			}
		}
	}
			
	// ----------------------
	//     populateFields
	// ----------------------
	
	function populateFields() {
		
		// Platform Selector
		var sel = $(platformSelector).val();
		platformSelector.empty();
		for (var i=0; i<platforms.length; i++) $(platformSelector).append(new Option(platforms[i][0], i));
		$(platformSelector).val(sel);
		
		// topic selector
		sel = $(topicSelector).val();
		topicSelector.empty();
		for (var i=0; i<topics.length; i++) $(topicSelector).append(new Option(topics[i][0], i));
		$(topicSelector).val(sel);
		
		// genre1 selector
		sel = $(genre1Selector).val();
		genre1Selector.empty();
		for (var i=0; i<genres.length - 1; i++) {
			$(genre1Selector).append(new Option(genres[i] + 
					" ("+getBadOkGoodText(platforms[$(platformSelector).val()][i+1]) + "|" + 
					getBadOkGoodText(topics[$(topicSelector).val()][i+1]) + ")", i));
		}
		$(genre1Selector).val(sel);
		
		//genre2 selector
		sel = $(genre2Selector).val();
		genre2Selector.empty();
		for (var i=0; i<genres.length - 1; i++)
			if (i != $(genre1Selector).val())
				$(genre2Selector).append(new Option(genres[i] + 
						" ("+getBadOkGoodText(platforms[$(platformSelector).val()][i+1]) + "|" + 
						getBadOkGoodText(topics[$(topicSelector).val()][i+1]) + ")", i));
		$(genre2Selector).append(new Option("None", 6));
		
		if (sel==undefined) sel = 6;		
		$(genre2Selector).val(sel);
		
		// audience selector
		sel = $(audienceSelector).val();
		audienceSelector.empty();
		$(audienceSelector).append(new Option("Young    (" + getBadOkGoodText(topics[$(topicSelector).val()][7]) + ")", 0));
		$(audienceSelector).append(new Option("Everyone (" + getBadOkGoodText(topics[$(topicSelector).val()][8]) + ")", 1));
		$(audienceSelector).append(new Option("Mature   (" + getBadOkGoodText(topics[$(topicSelector).val()][9]) + ")", 2));
		if (sel==undefined) sel = 1;
		$(audienceSelector).val(sel);
		
		// game size selector
		sel = $(gameSizeSelector).val();
		gameSizeSelector.empty();
		$(gameSizeSelector).append(new Option("Small", 0));
		$(gameSizeSelector).append(new Option("Medium", 1));
		$(gameSizeSelector).append(new Option("Large", 2));
		$(gameSizeSelector).append(new Option("AAA", 3));
		$(gameSizeSelector).val(sel);
		
		// year selector
		sel = $(yearSelector).val();
		yearSelector.empty();
		$(yearSelector).append(new Option("0-6", 0));
		$(yearSelector).append(new Option("7-22", 1));
		$(yearSelector).append(new Option("23+", 2));
		$(yearSelector).val(sel);
		
		// trend selector
		sel = $(trendSelector).val();
		trendSelector.empty();
		$(trendSelector).append(new Option("Not On Trend", 0));
		$(trendSelector).append(new Option("On Trend", 1));
		$(trendSelector).append(new Option("Strange Combo", 2));
		$(trendSelector).val(sel);
		
		salesModifierLabel.html(platforms[$(platformSelector).val()][parseInt(audienceSelector.val())+7].toFixed(2));
		targetGameScoreLabel.html(Math.round(targetGameScore));
		
		setBadOkGoodText(topicAudienceLabel, topics[$(topicSelector).val()][parseInt($(audienceSelector).val())+7]);
		
		updateGameAndReviewScore();
		drawSliders();
	}
	
	// ----------------------
	//    gameFinished
	// ----------------------
	
	function gameFinished() {			
		// update target game score if needed
		if (newTopScoreSet) {
			// calc top score delta
			if (topScore == 0) {
				topScoreDelta = gameScore - 20;
				if (topScoreDelta < 2) topScoreDelta = 2;
			}
			else {
				topScoreDelta = gameScore - topScore;
				if (topScoreDelta < 0.1 * targetGameScore)
					topScoreDelta = 0.1 * targetGameScore;
					
				if (!$(inGarageBox).is(':checked') && topScoreDelta > 0.2 * topScore)
					topScoreDelta = 0.2 * topScore;
			}
				
			var Y = 1.15;
			if ($(yearSelector).val() == 1) Y = 1.2;
			else if ($(yearSelector).val() == 2) Y = 1.1;
			
			topScore = gameScore;
			
			targetGameScore = topScore + topScoreDelta * Y;
		}
		// ADD NEW LINE TO TABLE
		$('<tr></tr>')
				.append($('<td></td>').append($('<label></label>').html(gameNumber)).css('width', '35px'))
				.append($('<td></td>').append($('<label></label>').html(platforms[$(platformSelector).val()][0])).css('width', '95px'))
				.append($('<td></td>').append($('<label></label>').html(topics[$(topicSelector).val()][0])).css('width', '90px'))
				.append($('<td></td>').append($('<label></label>').html(genres[$(genre1Selector).val()] + '<br />' + genres[$(genre2Selector).val()])).css('width', '80px'))
				.append($('<td></td>').append($('<label></label>').html(audiences[$(audienceSelector).val()])).css('width', '70px'))
				.append($('<td></td>').append($('<label></label>').html(gameSizes[$(gameSizeSelector).val()])).css('width', '60px'))
				.append($('<td></td>').append($('<label></label>').html(years[$(yearSelector).val()])).css('width', '35px'))
				.append($('<td></td>').append($('<label></label>').html($(techInput).val())).css('width', '60px'))
				.append($('<td></td>').append($('<label></label>').html($(designInput).val())).css('width', '60px'))
				.append($('<td></td>').append($('<label></label>').html($(bugInput).val())).css('width', '60px'))
				.append($('<td></td>').append($('<label></label>').html($(gameScoreLabel).html())).css('width', '80px'))
				.append($('<td></td>').append($('<label></label>').html($(reviewScoreLabel).html())).css('width', '55px'))
				.prependTo(oldGamesTable);
		
		if (newTopScoreSet) numTopScores++;
		
		prevGenre1 = genre1Selector.val();
		prevGenre2 = genre2Selector.val();
		prevTopic = topicSelector.val();
		
		// append game to array of old games
		oldGames.push({
			"gameNumber":	gameNumber,
			"platform": 	$(platformSelector).val(), 
			"topic":		$(topicSelector).val(),
			"genre1":		$(genre1Selector).val(),
			"genre2":		$(genre2Selector).val(),
			"audience":		$(audienceSelector).val(),
			"gameSize":		$(gameSizeSelector).val(),
			"years":		$(yearSelector).val(),
			"techInput":	$(techInput).val(),
			"designInput":	$(designInput).val(),
			"bugInput":		$(bugInput).val(),
			"gameScore":	$(gameScoreLabel).html(),
			"reviewScore":	$(reviewScoreLabel).html(),
			"topScore": 	topScore,
			"numTopScores": numTopScores,
			"targetScore":	targetGameScore	
		});
				
		gameNumber++;
		
		populateFields();
	}
	
	// Save all the old games as a cookie
	function saveOldGames() {
		if (oldGames.length == 0) return;
		$.removeCookie("oldGames");
		var data = [];
		for (var i = 0; i < 8 && i < oldGames.length; i++) data.unshift(oldGames[oldGames.length-i-1]);
		
		$.cookie("oldGames", JSON.stringify(data), {expires: 45});
	}
	
	// load old games from cookie 
	function loadOldGames() {
		if ($.cookie("oldGames") == undefined) return;
		clearAllOldGames();
		
		oldGames = JSON.parse($.cookie("oldGames"));
		
		for (var i = 0; i < oldGames.length; i++) {
			$('<tr></tr>')
				.append($('<td></td>').append($('<label></label>').html(oldGames[i].gameNumber)).css('width', '35px'))
				.append($('<td></td>').append($('<label></label>').html(platforms[oldGames[i].platform][0])).css('width', '95px'))
				.append($('<td></td>').append($('<label></label>').html(topics[oldGames[i].topic][0])).css('width', '90px'))
				.append($('<td></td>').append($('<label></label>').html(genres[oldGames[i].genre1] + '<br />' + genres[oldGames[i].genre2])).css('width', '80px'))
				.append($('<td></td>').append($('<label></label>').html(audiences[oldGames[i].audience])).css('width', '70px'))
				.append($('<td></td>').append($('<label></label>').html(gameSizes[oldGames[i].gameSize])).css('width', '60px'))
				.append($('<td></td>').append($('<label></label>').html(years[oldGames[i].years])).css('width', '35px'))
				.append($('<td></td>').append($('<label></label>').html(oldGames[i].techInput)).css('width', '60px'))
				.append($('<td></td>').append($('<label></label>').html(oldGames[i].designInput)).css('width', '60px'))
				.append($('<td></td>').append($('<label></label>').html(oldGames[i].bugInput)).css('width', '60px'))
				.append($('<td></td>').append($('<label></label>').html(oldGames[i].gameScore)).css('width', '80px'))
				.append($('<td></td>').append($('<label></label>').html(oldGames[i].reviewScore)).css('width', '55px'))
				.prependTo(oldGamesTable);
		}
		
		gameNumber = oldGames[oldGames.length-1].gameNumber + 1;
		prevTopic = oldGames[oldGames.length-1].topic;
		prevGenre1 = oldGames[oldGames.length-1].genre1;
		prevGenre2 = oldGames[oldGames.length-1].genre2;
		topScore = oldGames[oldGames.length-1].topScore;
		numTopScores = oldGames[oldGames.length-1].numTopScores;
		targetGameScore = oldGames[oldGames.length-1].targetScore;
		
		// set the year
		$(yearSelector).val(oldGames[oldGames.length-1].years);
		
		populateFields();
	}
	
	function clearLastOldGame() {
		if (oldGames.length == 0) return;
		if (oldGames.length == 1) {
			clearAllOldGames();
			return;
		}
		
		$('#oldGamesTable tr:first').remove();
		oldGames.pop();
		
		gameNumber--;
		prevTopic = oldGames[oldGames.length-1].topic;
		prevGenre1 = oldGames[oldGames.length-1].genre1;
		prevGenre2 = oldGames[oldGames.length-1].genre2;
		topScore = oldGames[oldGames.length-1].topScore;
		numTopScores = oldGames[oldGames.length-1].numTopScores;
		targetGameScore = oldGames[oldGames.length-1].targetScore;
		
		populateFields();
	}
	
	function clearAllOldGames() {
		$('#oldGamesTable tr').remove();
		oldGames = []; prevTopic = -1; prevGenre1 = -1; prevGenre2 = -1; 
		targetGameScore = 20; gameNumber = 1; topScore = 0; numTopScores = 0;
		populateFields();
	}
	
	// 
	function getBadOkGoodText(val) {
		if (val >= 1) return "Good";
		else if (val > 0.6) return "OK";
		else return "Bad";
	}
	
	// 
	function setBadOkGoodText(label, val) {
		if (val >= 1) label.html("Good").css({color: 'green'});
		else if (val > 0.6) label.html("OK").css({color: 'orange'});
		else label.html("Bad").css({color: 'red'});
	}
	
	// Add text to the notes panel
	function addToNotes(s) {
		$(notesDiv).empty();
		
		switch(s)
		{
			case 'app info':
				notesDiv.append($('<p style="font-weight: bold">Game Dev Tycoon Calculator</p>' +
					'<p>Made by <a href="/web/20131007001447/http://www.cosmicwebsites.co.uk" target="_blank">Cosmic Websites</a>.</p>' +
					'<p>For more info on how to use this app go to <a href="/web/20131007001447/http://gamedevtycoon.wikia.com/wiki/Success_Guide" target="_blank">' +
					'the wiki</a>. Full credit for discovering the formulas used here goes to them.</p>'));
				break;
				
			case 'in garage':
				notesDiv.append($('<p style="font-weight: bold">In Garage</p>' +
					'<p>Uncheck this when you leave the garage / basement.</p>'));
				break;
			case '100k fans':
				notesDiv.append($('<p style="font-weight: bold">Less Than 100k Fans</p>' +
					'<p>Uncheck this when you get more than 100,000 fans (The game will tell you when this happens).</p>'));
				break;
			case 'sequel':
				notesDiv.append($('<p style="font-weight: bold">Sequel</p>' +
					'<p>You will get punished if you release a sequel within 40 weeks of the original. ' +
					'Only release a sequel on a system more powerful than the original.</p>'));
				break;
			case 'expansion':
				notesDiv.append($('<p style="font-weight: bold">Expansion</p>' +
					'<p>You will get punished if you release an expansion within 40 weeks of the previous.</p>'));
				break;
			case 'mmo':
				notesDiv.append($('<p style="font-weight: bold">MMO</p>' +
					'<p>Check this when making an MMO (Not an expansion).</p>'));
				break;
			case 'new employee':
				notesDiv.append($('<p style="font-weight: bold">New Employee</p>' +
					'<p>Check this is a new employee is working on this game. If the employee isn\'t at full capacity during ' +
					'this game (i.e. needs a vacation before the end), check this for the next game as well.</p>'));
				break;
				
			case 'audience':
				notesDiv.append($('<p style="font-weight: bold">Audience</p>' +
					'<p>Topic / Audience factor is displayed in brackets.</p>' +
					'<p>Leave this on \'Everyone\' until you research Target Audience.</p>'));
				break;
			case 'genre':
				notesDiv.append($('<p style="font-weight: bold">Genre</p>' +
					'<p>Platform / Genre factor and Topic / Genre factor is displayed in brackets.</p>'));
				break;
			case 'game size':
				notesDiv.append($('<p style="font-weight: bold">Game Size</p>' +
					'<p>Large games : Assumes at least 2D v4 or 3D v3 engine graphics and nothing lower.</p>' +
					'<p>AAA Games : Assumes at least 3D v5 engine graphics, no 2D graphics and 3 experts in high importance fields.</p>'));
				break;
			case 'year':
				notesDiv.append($('<p style="font-weight: bold">Year</p>' +
					'<p>The in-game year, which can be seen at the top right of the screen.</p>'));
				break;
				
			case 'optimalTD':
				notesDiv.append($('<p style="font-weight: bold">Optimal Tech / Design Ratio</p>' +
					'<p>Depends on Genre 1 and Genre 2.</p>'));
				break;
			case 'actualTD':
				notesDiv.append($('<p style="font-weight: bold">Actual Tech / Design Ratio</p>' +
					'<p>Directly affects game quality factor. Has no effect until Tech + Design >= 30.</p>'));
				break;
			case 'quality':
				notesDiv.append($('<p style="font-weight: bold">Game Quality Factor</p>' +
					'<p>Affected by Tech / Design ratio, slider positions (this app assumes you selected optimal positions) ' +
					'and is reduced if this game has the same Topic/Genre/Genre combination as your last game.</p>'));
				break;
			case 'salesmod':
				notesDiv.append($('<p style="font-weight: bold">Sales Modifier</p>' +
					'<p>Affected by Platform / Audience combination. Affects number of units sold.</p>'));
				break;
			case 'platform genre':
				notesDiv.append($('<p style="font-weight: bold">Platform / Genre Factor</p>' +
					'<p>Directly affects Game Score.</p>'));
				break;
			case 'topic audience':
				notesDiv.append($('<p style="font-weight: bold">Topic / Audience Factor</p>' +
					'<p>Directly affects Game Score.</p>'));
				break;
			case 'topic genre':
				notesDiv.append($('<p style="font-weight: bold">Topic / Genre Factor</p>' +
					'<p>Affects bubble generation. <br />During a strange trend, almost all multi-genre games will get a ' +
					'good rating. Otherwise, just try out different Topic / Genre 1 combinations.</p>'));
				break;
				
			case 'sliders':
				notesDiv.append($('<p style="font-weight: bold">Sliders</p>' +
					'<p>Slider positions affect Game Quality. Placing sliders in these positions will give the maximum bonus. ' +
					'This app assumes that you used these positions.</p>'));
				break;
				
			case 'clear last old game':
				notesDiv.append($('<p style="font-weight: bold">Clear Last Game</p>' +
					'<p>Delete the last game in the game list.</p>'));
				break;
			case 'clear all old games':
				notesDiv.append($('<p style="font-weight: bold">Clear All Games</p>' +
					'<p>Delete all the games in the game list.</p>'));
				break;
			case 'save old games':
				notesDiv.append($('<p style="font-weight: bold">Save Games List</p>' +
					'<p>Stores the last 8 games in your games list on your computer as a cookie.</p>'));
				break;
			case 'load old games':
				notesDiv.append($('<p style="font-weight: bold">Load Games List</p>' +
					'<p>Load the last games list saved to your computer.</p>'));
				break;
		}
	}
	
	// Add text to the notes panel
	function clearNotes() {
		$(notesDiv).empty();
		if (sameAsLast) notesDiv.append($('<p>Warning: game is identical to previous.</p>'));
	}
