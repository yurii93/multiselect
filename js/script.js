$( document ).ready(function() {
    var arr = {};
    $('.option').on('click', function () {

        var cell = $(this).attr('array-id');
        var value = $(this).html();

        if($(this).hasClass('selected')) {
            delete arr[cell];
            $(this).removeClass('selected');
        } else {
            arr[cell] = value;
            $(this).addClass('selected');
        }

        if(Object.keys(arr).length != 0) {
            console.log(arr);
            $('.btn').css('display','inline-block');
        } else {
            $('.btn').css('display','none');
        }
    });

    $('.btn').on('click', function () {
        if(Object.keys(arr).length != 0) {
            $.ajax({
                url: 'back.php',
                type: 'POST',
                data: arr,
                success: function (data) {
                    $('.data').html(data);
					setTimeout("$('.data p').fadeOut(2000);", 7000);
                }
            });
        }
    });
});