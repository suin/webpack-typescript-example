/// <reference path="../../typings/tsd.d.ts" />
"use strict";

var $: JQueryStatic = require("jquery");
var formTemplate: string = require("../templates/login-form.jade")();
var message: string = require("./message.ts");
require("style!../stylesheets/login-form.css");

$(() => {
  $("title").text(message);
  $("<h1>").text(message).appendTo("body");
  $(formTemplate).appendTo("body");
  $("#user-login-form").on("submit", (e) => {
    e.preventDefault();
    var username = $("#user-login-form [name=username]").val();
    //var password = $("#user-login-form [name=password]").val();*/
    console.log(username); // これはUglifyによって取り除かれる
    alert("Welcome, " + username + "!");

    // 下のコメントを解除すると、tslintの警告が出るのを試せる。
    /*
    var unusedVariable = 123; // ルール: 使ってない変数は放置しちゃだめ
    var snake_case_variable = "aaa"; // ルール: ハイフン区切りの変数はだめ
    var name = 'alice'; // ルール: 文字列はシングルクォーテーションであること
    console.log(snake_case_variable, name);
    //*/
  });
});
