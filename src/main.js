import { Shibe } from './shibe';
import { Cat } from './shibe';
import { Bird } from './shibe';
import $ from 'jquery';
import './styles.css';

$(document).ready(function() {
  // Shibe
  $('#shibeLocation').click(function() {

    (async () => {
      let shibe = new Shibe();
      const response = await shibe.getShibe();
      getElements(response);
    })();

    function getElements(response) {
      if (response) {
        $('.showText').text("Enjoy this picture!"); 
        $('.showShibe').html(`<img alt = "doggo" src = "https://cdn.shibe.online/shibes/${response}.jpg">`);
      } else {
        $('.showShibeError').html(`Apologies there was an error to diplay Shibe`);
      }
    }
  });

  // Cat
  $('#catLocation').click(function() {

    (async () => {
      let cat = new Cat();
      const response = await cat.getCat();
      getElements(response);
    })();

    function getElements(response) {
      if (response) {
        $('.showText').text("Enjoy this picture!"); 
        $('.showShibe').html(`<img alt = "doggo" src = "https://cdn.shibe.online/shibes/${response}.jpg">`);
      } else {
        $('.showCatError').html(`Apologies there was an error to diplay Cat`);
      }
    }
  });
  // Bird
  $('#birdLocation').click(function() {

    (async () => {
      let bird = new Bird();
      const response = await bird.getBird();
      getElements(response);
    })();

    function getElements(response) {
      if (response) {
        $('.showText').text("Enjoy this picture!"); 
        $('.showShibe').html(`<img alt = "doggo" src = "https://cdn.shibe.online/shibes/${response}.jpg">`);
      }else {
      $('.showBirdError').html(`Apologies there was an error to diplay Bird`);
      }
    }
  });
});
