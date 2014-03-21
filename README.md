FlashDV
=======

A jQuery plugin for quickly configure and maintain client side data validation

- validator.js: the source code of the library
- validator.min.js: minified version
- validate.js: a sample of how to configure a "rule set" (what fields to validate on, what rules are applied to each field etc)
- test.html: a sample of putting everything together

<pre>
Rule set API:
var ruleSet = [
    {
        selector: "", // required, the jQuery selector, which would return all elements applicable to rules below
        displayName: "", // required, the human friendly name for the collection of elements
        rules: [ // required, a list of rules to apply to elemenets represented by "selector"
          {
            type: "", // required, to indicate what type of validation you want. Supported validations are knownGood, maxlength, minlength, required, custom
            test: "", // required for all types of validations except "required". A regex for knownGood, a number for maxlength and minlength, a custom function for "custom"
            errorMsg: "" // optional, the error message to display if validation failed for this item. A default error message is available for each type.
          },
          ...
        ]
    },
    ...
]
</pre>
