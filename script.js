
$(document).ready(function() {
    console.log("jQuery is ready!");

    $("h1").css("color", "steelblue");
    $("#headline").text("Future Web Developer");
    $(".intro").css("font-weight", "bold");

    $("#light").click(function() {
        $("body").removeClass("dark");
        $("h1").css("color", "steelblue");
    });

    $("#dark").click(function() {
        $("body").addClass("dark");
        $("h1").css("color", "white");
    });

    $("#hide").click(function() {
        $("#status").hide();
    });

    $("#show").click(function() {
        $("#status").show();
    });

    $("#toggle").click(function() {
        $("#status").toggle();
    });

    $("#fadeIn").click(function() {
        $(".gallery img").fadeIn();
    });

    $("#fadeOut").click(function() {
        $(".gallery img").fadeOut();
    });

    $("#fadeToggle").click(function() {
        $(".gallery img").fadeToggle();
    });

    $(".slide-title").click(function() {
        let panel = $(this).next(".panel");

        if (this.id === "subjectHeading") {
            panel.slideToggle();
        } else if (panel.is(":visible")) {
            panel.slideUp();
        } else {
            panel.slideDown();
        }
    });

    $("#addSkill").click(function() {
        let skill = $("#newSkill").val().trim();

        if (skill !== "") {
            $("#skills").append($("<li>").text(skill));
            $("#newSkill").val("");
        }
    });

    $("#prependSkill").click(function() {
        let skill = $("#newSkill").val().trim();

        if (skill !== "") {
            $("#skills").prepend($("<li>").text(skill));
            $("#newSkill").val("");
        }
    });

    $("#removeSkill").click(function() {
        $("#skills li").last().remove();
    });

    $("#changeLink").click(function() {
        $("#social").attr("href", "https://www.linkedin.com");
        $("#social").text("LinkedIn");
    });

    $("#contact").submit(function(event) {
        event.preventDefault();
    });

    $("#name, #email").on("input", function() {
        $("#live").text(
            "Name: " + $("#name").val() +
            " | Email: " + $("#email").val()
        );
    });

    let expanded = false;

    $("#animateSkills").click(function() {
        $(".bar").each(function() {
            let width = expanded ? "0%" : $(this).attr("data-width") + "%";

            $(this).animate({
                width: width
            }, 500);
        });

        expanded = !expanded;
    });
});
