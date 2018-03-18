$('.nav-link').click(function(e)
{
    e.preventDefault();
    var section = $(this).attr("target");

    console.log(section);

    document.getElementById(section).scrollIntoView({ behavior: 'smooth' });
    document.getElementById(section).window.scrollBy(0, -10);

    return false;
});
