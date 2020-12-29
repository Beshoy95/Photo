$(".imgItem").click(function () {
  let imgSrc = $(this).attr("src");
  $("#mainImage").attr("src", imgSrc);
});
