import { Shibe } from './shibe';
import $ from 'jquery';
import './styles.css';

$(document).ready(function() {
  $('#shibeLocation').click(function() {

    (async () => {
      let shibe = new Shibe();
      const response = await shibe.getShibe(location);
      getElements(response);
    })();

    function getElements(response) {
      if (response) {
        $('.showText').text("Enjoy this picture!"); 
        $('.showShibe').html(` <img alt = "doggo" src = "https://cdn.shibe.online/shibes/${response}.jpg">`);
      } else {
        $('.showText').text("Enjoy this picture!"); 
        $('.showShibe').html(`Apologies there was an error`);
      }
    }
  });
});