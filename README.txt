TemplatePicker Module 

Allows users with permissions to change a page-level template used on a particular node.  This allows a different look with, perhaps, columns, different logos or headers and footers.  Scans the theme directory for page—*.tpl.php and adds an options drop-down to the node edit form.  

Based on work by Bryan Braun (Template Picker) and Tuomas Leppänen (Page Template Picker).  

The ability to pick templates is used to assign page templates in Wordpress, and this module is a port of similar functionality to Drupal.

Steps to using the module:

Preparation: Download, install, and enable the module.

  1. Enable template picking for any or all of your content types through setting module permissions.

  2. Populate the options list by dropping template files into your theme and naming them appropriately. Here are some examples:
        page--article--tp-1.tpl.php
        page--article--tp-custom-header.tpl.php
        page--article--tp-may2013.tpl.php

  3. When editing a node, pick the template you want from the options list in the vertical tabs. This is the template that will be used to display the node.


Clean Names:

Clean names affect how your templates display in the options list like this:

  Display w/out clean name: page--article--custom-header.tpl.php
  Display with clean name: Custom header

You can add a "clean name" to each template by specifying the name in the comments of the template. For example, you can assign the clean name of "Custom header" like this:

/**
 * @file
 * Template Name: Custom header
 *
 * Available variables:
 * ...
