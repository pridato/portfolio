import { dataText } from './globales.ts';

document.addEventListener('DOMContentLoaded', function(event) {
  
  function typeWriter(text, i, fnCallback) {
    if (i < text.length) {
      document.querySelector("h1").innerHTML = text.substring(0, i + 1) + '<span class="cursor" aria-hidden="true"></span>';

      setTimeout(function() {
        typeWriter(text, i + 1, fnCallback);
      }, 100);
    } else if (typeof fnCallback === 'function') {
      setTimeout(fnCallback, 700);
    }
  }

  function StartTextAnimation(i) {
    if (i >= dataText.length) {
      i = 0;
    }
    if (i < dataText.length) {
      typeWriter(dataText[i], 0, function() {
        StartTextAnimation(i + 1);
      });
    }
  }

  StartTextAnimation(0);
});
