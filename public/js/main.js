const logout_button = $("#logout_button");

console.log(logout_button);

logout_button.click((event) => {
    event.preventDefault();
    console.log("here");
})