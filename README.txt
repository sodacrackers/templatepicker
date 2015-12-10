Based on: Template Picker
by Bryan Braun
forked by Tuomas Leppänen

Page-template picker gives content creators a list of page templates to choose from as they create nodes. The templates in this list are auto-discovered in your site's default theme through a simple naming convention (page--content-type--tp*.tpl.php).

The ability to pick templates is used to assign page templates in Wordpress, and this module is a port of similar functionality to Drupal.

Steps to using the module:

Preparation: Download, install, and enable the module.

  1. Enable template picking for any or all of your content types through setting module permissions.
  2. Populate the options list by dropping template files into your theme and naming them appropriately (page--content-type--tp*.tpl.php). Here are some examples:
        page--article--tp-1.tpl.php
        page--article--tp-custom-header.tpl.php
        page--article--tp-may2013.tpl.php
  3. When editing a node, pick the template you want from the options list in the vertical tabs. This is the template that will be used to display the node.

Clean Names:

Clean names affect how your templates display in the options list like this:

  Display w/out clean name: page--article--tp-custom-header.tpl.php
  Display with clean name: Custom header

You can add a "clean name" to each template by specifying the name in the comments of the template. For example, you can assign the clean name of "Custom header" like this:

/**
 * @file
 * Template Name: Custom header
 *
 * Available variables:
 * ...
