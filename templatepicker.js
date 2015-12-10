/**
 * @file
 * Attaches behaviors for the template picker module.
 */

(function($) {

    Drupal.behaviors.templatePickerFieldsetSummaries = {

        attach: function(context) {
        	
            $('fieldset.tp-form', context).drupalSetSummary(function(context) {
                var choice = $('.form-item-page-template-picker-template option:selected').text();
                return choice;
            });

        }
    };

})(jQuery);
