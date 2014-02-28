var alphaNumeric = /^([A-Za-z0-9]+)$/;
var emailRegex = /^(\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,6})$/;
var monthMMM = /^(JAN|FEB)$/

var ruleSet = 
[
	{
		selector: "[name='summary']",
		displayName: "Summary",
		rules: 
		[
			{
				type: "knownGood",
				test: alphaNumeric
			},
			{
				type: "maxlength",
				test: 10
			},
			{
				type: "custom",
				test: function() {
					return $("#personalEmail").val() != 'admin@admin.com';
				},
				errorMsg: "I just don't like admin@admin.com"
			}
		]
	},
	{
		selector: "#personalEmail",
		displayName: "Personal Email",
		rules: 
		[
			{
				type: "knownGood",
				test: emailRegex,
				errorMsg: "Personal email is in wrong format"
			},
			{
				type: "minlength",
				test: 6
			},
			{
				type: "required"
			}
		]
	}
]
