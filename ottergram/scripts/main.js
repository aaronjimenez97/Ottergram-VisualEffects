var DETAIL_IMAGE_SELECTOR = '[data-image-role="target"]';
var DETAIL_TITLE_SELECTOR = '[data-image-role="title"]';
var DETAIL_FRAME_SELECTOR = '[data-image-role= "frame"]';
var THUMBNAIL_LINK_SELECTOR = '[data-image-role = "trigger"]';
var HIDDEN_DETAIL_CLASS = 'hidden-detail';
var TINY_EFFECT_CLASS = "is-tiny";
var ESC_KEY = 27;
var LEFT_KEY = 37;
var RIGHT_KEY =39;


function setDetails(imageUrl, titleText){
  'use strict';

  var detailImage = document.querySelector(DETAIL_IMAGE_SELECTOR);
  // detailImage.setAttribute('src', 'img/otter3.jpg');
  detailImage.setAttribute('src', imageUrl);

  var detailImage = document.querySelector(DETAIL_TITLE_SELECTOR);
  //detailImage.textContent = "TUESDAY Night Fever";
  detailImage.textContent = titleText;
}
function imageFromThumb(thumbnail) {
  'use strict';
  return thumbnail.getAttribute('data-image-url');
}
function titleFromThumb(thumbnail){
  'use strict';
  var title = thumbnail.getAttribute('data-image-title');
  console.log(title);
  return title;
  // return thumbnail.getAttribute('data-image-title');
}
function setDetailsFromThumb(thumbnail) {
  'use strict';
  setDetails(imageFromThumb(thumbnail), titleFromThumb(thumbnail));
}
function addThumbClickHandler(thumb) {
    'use strict';
    thumb.addEventListener('click', function(event){
      event.preventDefault();
      setDetailsFromThumb(thumb);
      showDetails();
    });
}
function getThumbnailsArray(){
  'use strict';
  var thumbnails = document.querySelectorAll(THUMBNAIL_LINK_SELECTOR);
  var thumbnailArray = [].slice.call(thumbnails);
  return thumbnailArray;
}
function hideDetails() {
  'use strict';
  document.body.classList.add(HIDDEN_DETAIL_CLASS);
}
function showDetails() {
  'use strict';
  document.body.classList.remove(HIDDEN_DETAIL_CLASS);
  var frame = document.quertySelector(DETAIL_FRAME_SELECTOR);
  frame.classList.add(TINY_EFFECT_CLASS);
  setTimeout(function() {
    frame.classList.remove(TINY_EFFECT_CLASS);
  }, 50);

}
function addKeyPressHandler(){
  'use strict';
  document.body.addEventListener('keyup', function (event) {
    event.preventDefault();
    console.log(event.keyCode);
    if(event.keyCode === ESC_KEY){
      hideDetails();
    }
  });
}
function initializeEvents() {
  'use strict';
  var thumbnails = getThumbnailsArray();
  thumbnails.forEach(addThumbClickHandler);
  addKeyPressHandler();
}
initializeEvents();
