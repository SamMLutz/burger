$(".devour-button").on("click", function(event){
    event.preventDefault();
    // console.log("button clicked")
    // console.log(event.target)
    // console.log($(this).data("id"))
    var burgerId = $(this).data("id");
    console.log("burger id = " + burgerId);
    $.ajax({
      method: "PUT",
      url: "/burgers/" + burgerId
    }).then(function(data) {
      // refresh the page
      location.reload();
    });
    
})

console.log("frontend is running")