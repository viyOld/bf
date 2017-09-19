// let menuMain = [
// “Register”,
// “Statistics”,
// “Schedule”,
// “Task”,
// “Add”,
// “Copy”,
// “Edit”,
// “Delete”,
// “Run Now”,
// “Group”,
// “Add”,
// “Edit”,
// “Delete”,
// “Copy”,
// “Show”,
// “Source”,
// “New”,
// “Edit”,
// “Delete”,
// “Copy”,
// “Storage”,
// “New”,
// “Edit”,
// “Delete”,
// “Copy”,
// “Configuration”,
// “Export”,
// “Import”,
// “Users”,
// “Views”,
// “Start option”,
// “Language”,
// “Help”,
// “Home page”,
// “Manuals”,
// “Report a problem”,
// “About”
// ];


function createMainMenu() {
		let id = "mainMenu";
  		let elem = document.getElementById(id);
  		let item = '';
  		let leftPart = '';
  		let row = '';

    // <nav class="navbar navbar-expand-lg navbar-light bg-light">
    //     <a class="navbar-brand" href="#">
    //     <img src="./img/clock_tower.ico" width="30" height="30" alt="">
    //     BF
    //     </a>
    //     <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    //         <span class="navbar-toggler-icon"></span>
    //     </button>
    //     <div class="collapse navbar-collapse" id="navbarSupportedContent">
    //         <ul class="navbar-nav mr-auto">
    //             <li class="nav-item active">
    //                 <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
    //             </li>
    //             <li class="nav-item">
    //                 <a class="nav-link" href="#">Link</a>
    //             </li>
    //             <li class="nav-item">
    //                 <a class="nav-link disabled" href="#">Disabled</a>
    //             </li>
    //         </ul>
    //         <form class="form-inline my-2 my-lg-0">
    //             <input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search">
    //             <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    //         </form>
    //     </div>
    // </nav>

    row = row + '<img src="./img/clock_tower.ico" width="30" style="margin-right:10px;" height="30" alt="">' + 'BF';
    row = '<a class="navbar-brand" href="#">' + row + '</a>';
    row = row + '<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">';
    row = row + '<span class="navbar-toggler-icon"></span>';
    row = row + '</button>';
    row = row + '<div class="collapse navbar-collapse" id="navbarSupportedContent">';
    for (i = 0; i < 7; i++) {
    	item = item + '<li class="nav-item">';
    	item = item + '<a class="nav-link" href="#">';
    	item = item + 'Menu' + i;
    	item = item + '</a>';
    	item = item + '</li>';
    }
    item = '<ul class="navbar-nav mr-auto">' + item + '</ul>';
    // Left Part - Search
    leftPart = leftPart + '<input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search">';
    leftPart = leftPart + '<button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>';
    leftPart = '<form class="form-inline my-2 my-lg-0">' + leftPart + '</form>';
    
    row = row + item + leftPart;
    row = row + '</div>';

    //row = '<nav class="navbar navbar-expand-lg navbar-light fixed-top bg-light">' + row + '</nav>';
    row = '<nav class="navbar navbar-expand-lg navbar-dark  bg-dark">' + row + '</nav>';
    elem.innerHTML = row;
}

createMainMenu();

