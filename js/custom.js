(function ($, Drupal) {


  Drupal.behaviors.moveIt = {
    attach: function (context, settings) {
      $(document).ready(function() {
        // Move the Author's details above the title. 
        // $('.path-node footer.node__meta').insertBefore('.path-node .node__content .field--name-body');
      });
    }
  };


})(jQuery, Drupal);