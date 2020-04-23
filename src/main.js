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
        $('.showShibe').html(`<p>Enjoy this picture of a Shiba Inu!</p><img height ="500px" alt = "doggo" src = "https://cdn.shibe.online/shibes/${response}.jpg">`);
      } else {
        $('.showShibe').html(`Apologies there was an error to diplay Shibe`);
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
        $('.showShibe').html(`<p>Enjoy this picture of a cat!</p><img height ="500px" alt = "catto" src = "https://cdn.shibe.online/cats/${response}.jpg">`);
      } else {
        $('.showShibe').html(`Apologies there was an error to diplay Cat`);
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
        $('.showShibe').html(`<p>Enjoy this picture of a bird!</p><img height="500px" alt = "birddo" src = "https://cdn.shibe.online/birds/${response}.jpg">`);
      }else {
      $('.showShibe').html(`Apologies there was an error to diplay Bird`);
      }
    }
  });
});
