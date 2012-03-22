;(function($) {
    /*
     * Simple tabs plugin for jquery
     * Version 0.0.1
     *
     * Copyright (c) 2012 Luminosity Group
     */
    $.fn.tabs = function(options) {
        return this.each(function() {
            
            /* Default settings */
            var defaults = {
                /* Selectors */
                content: '.tabs_content',
                navigation: '.tabs_nav',

                hash_prefix: 'tab'
            };

            var settings = $.extend(true, {}, defaults, options);

            var container            = $(this)
            var navigation_container = $(settings.navigation, container);
            var content_container    = $(settings.content, container);
            var content_items        = $(content_container).children();

            $('li', navigation_container).click(function(e) {
                e.preventDefault();
                activate_tab($(this), true);
            });

            /**
             * Activates a tab
             *
             * tab         - a jQuery Element that represents the tab to activate
             * update_hash - A Boolean value. When true, updates the
             *               window.location.hash
             */
            var activate_tab = function(tab, update_hash) {
                var id = $(tab).attr('rel');

                $(tab).addClass('active');

                $(content_items).hide();
                $(id, content_container).show().addClass('active');

                if (update_hash) {
                    window.location.hash = settings.hash_prefix + '-' + id.replace('#', ''); 
                }
            };

            var hash = window.location.hash.replace('#' + settings.hash_prefix + '-', '');
            var element = hash ? $('li[rel=#' + hash + ']', navigation_container) : $('li:first', navigation_container);
            activate_tab(element, false);
        });
    }
})(jQuery);
