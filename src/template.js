//TO DO: Create the team profile: generateTeamMembers
// generateEngineer = engineer, generateIntern = intern, generateManager = manager
// return each employee as a card and then module export the team from generateTeamMembers and return html

generateTeamMembers = teamMembers => {
//generate a card for each type of employee
generateEngineer = engineer => {
    return 
    <div class="card">
        <h1 class="card-title">${engineer.getName()}</h1>
        <h2 class="card-title">${engineer.getRole()}</h2>
        <div class="card-body">
            <ul>
                <li>ID #: ${engineer.getID}</li>
                <li>Email: ${engineer.getEmail}</li>
                <li>Github: ${engineer.getGithub}</li>
            </ul>
        </div>
    </div>
    ;
};





};