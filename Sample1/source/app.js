//The whole Message Defenition will be available here, 'msg' is the class here indirectly
import msg from './Message.js';
import $ from 'jquery';

$(function() {
    $('#showbtn').on("click", function() {
        var o = new msg();
        o.show();
    })
})