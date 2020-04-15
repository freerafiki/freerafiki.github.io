/*!
  * Venessia4Working Javascripts
  * Copyright 2020 
  * Licensed under MIT 
  */
	
	/* Open a window visualizing a help message on how to make the correct search.
		In the window a button to close it should be available, calling closeHelpWindow().
		The actual happening is just making the element with id "helpwindow" visible.
	*/
	function showHelpWindow() {
		document.getElementById("helpwindow").style.display = "block";
	}

	/* Close the window visualizing a help message on how to make the correct search.
		The actual happening is just making the element with id "helpwindow" invisible.
	*/
	function closeHelpWindow() {
		document.getElementById("helpwindow").style.display = "none";
	}