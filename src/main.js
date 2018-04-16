import { Entry } from './journal.js';
import './styles.css';

$(document).ready(function() {
  $('#journal').submit(function(event) {
    event.preventDefault();
    var title = $("#title").val();
    var body = $("#body").val();
    var entry = new Entry(title, body);
    entry.wordCount();
    entry.letterCount();
    entry.getTeaser();
    $(".wordCount").text(entry.wordCount());
    $("p").show();
    $("#output").text(entry.letterCount());
    $(".entryOutput").text(entry.getTeaser());
  });
});
