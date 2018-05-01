
$(document).ready(function () {
    calcDday(2018, 6, 16);
    $(".call_navi").css("width", $(".wrapper").innerWidth() - 20);
    $(".invitation_main_text").html("하나님의 계획 하심에<br />두 사람이 하나가 되려고 합니다.<br />하나님을 경외하고 주위에 사랑을 나누는<br />행복하고 아름다운 가정이 되겠습니다.<br />오셔서 함께 축복해주시고 기도해주세요.")
})


function calcDday(year, month, date) {
    var d_day = (new Date() - new Date(year, month-1, date)) / (24*60*60*1000);

    if (d_day < 0) {
        d_day = "D" + d_day.toFixed(0);
    } else if (d_day >= 1) {
        d_day = "D+" + d_day.toFixed(0);
    } else {
        d_day = "D-DAY";
    }

    $("#d_day").text(d_day);
}


