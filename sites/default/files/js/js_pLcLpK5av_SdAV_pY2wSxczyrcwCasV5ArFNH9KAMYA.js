/* @license GNU-GPL-2.0-or-later https://www.drupal.org/licensing/faq */
tippy('[data-tippy-content]');var tippyInitializationFunction=function(initType){tippy('[data-tippy-interactive]',{content(reference){const id=reference.getAttribute('aria-controls');const template=document.getElementById(id);return template.innerHTML;},duration:[800,100],placement:'bottom',trigger:'mouseenter'});};utilityInitializer('entity-bundle-hotspot','tippyInitializationFunction');document.addEventListener('click',function(event){if(event.target!==document&&event.target.closest('.hotspot-anchor'))event.preventDefault();},false);;