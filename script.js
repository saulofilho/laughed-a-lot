$(document).ready(function () {
    $('#mais1').on('click', function () {
        $('<span>rsrs</span>').appendTo('#box1');
    });
    $('#menos1').on('click', function () {
        $('#box1').find('span').last().remove();
    });

    $('#mais2').on('click', function () {
        $('<span>haha</span>').appendTo('#box2');
    });
    $('#menos2').on('click', function () {
        $('#box2').find('span').last().remove();
    });

    $('#mais3').on('click', function () {
        $('<span>hehe</span>').appendTo('#box3');
    });
    $('#menos3').on('click', function () {
        $('#box3').find('span').last().remove();
    });

    $('#mais4').on('click', function () {
        $('<span>hihi</span>').appendTo('#box4');
    });
    $('#menos4').on('click', function () {
        $('#box4').find('span').last().remove();
    });

    $('#mais5').on('click', function () {
        $('<span>kkkkk</span>').appendTo('#box5');
    });
    $('#menos5').on('click', function () {
        $('#box5').find('span').last().remove();
    });

    $('#mais6').on('click', function () {
        $('<span>jaja</span>').appendTo('#box6');
    });
    $('#menos6').on('click', function () {
        $('#box6').find('span').last().remove();
    });
    $('.js-tilt').tilt({
        scale: 1.5,
    })
});

function copyClip (containerid) {
    var textarea = document.createElement('textarea')
    textarea.id = 'temp_element'
    document.body.appendChild(textarea)
    textarea.value = document.getElementById(containerid).innerText
    var selector = document.querySelector('#temp_element')
    selector.select()
    document.execCommand('copy')
    document.body.removeChild(textarea)
  };

function up1 () {
    document.getElementById('box1').style.textTransform = 'uppercase';
};
function up2 () {
    document.getElementById('box2').style.textTransform = 'uppercase';
};
function up3 () {
    document.getElementById('box3').style.textTransform = 'uppercase';
};
function up4 () {
    document.getElementById('box4').style.textTransform = 'uppercase';
};
function up5 () {
    document.getElementById('box5').style.textTransform = 'uppercase';
};
function up6 () {
    document.getElementById('box6').style.textTransform = 'uppercase';
};

function low1 () {
    document.getElementById('box1').style.textTransform = 'lowercase';
};
function low2 () {
    document.getElementById('box2').style.textTransform = 'lowercase';
};
function low3 () {
    document.getElementById('box3').style.textTransform = 'lowercase';
};
function low4 () {
    document.getElementById('box4').style.textTransform = 'lowercase';
};
function low5 () {
    document.getElementById('box5').style.textTransform = 'lowercase';
};
function low6 () {
    document.getElementById('box6').style.textTransform = 'lowercase';
};