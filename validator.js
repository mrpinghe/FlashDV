(function($) {

	$.fn.formValidate = function(options) {
		
		var opt = 
			{
				ruleSet: null,
				onPass: function() {
					// default do nothing
				},
				onFail: function(errors) {
					var errMsg = "";
					for (var i = 0; i < errors.length; i++) {
						errMsg += ("+ " + errors[i] + "\n")
					}
					alert(errMsg);
				}
			};
			
		$.extend(opt, options);
		
		var results = {pass: true, errors: []};
		
		if (opt.ruleSet == null) {
			return this;
		}
		
		this.each(function() {
			if (this.tagName == 'FORM') {
				var curForm = this;
				$(ruleSet).each(function() {
					var elems = $(curForm).find(this.selector);
					var displayName = this.displayName;
					
					$(this.rules).each(function() {
						var val = elems.val();
						if (elems.is(":radio") || elems.is(":checkbox")) {
							val = this.filter(":checked").val();
						}
						
						if (this.type == 'maxlength') {
							if ($.trim(val).length > this.test) {
								results.pass = false;
								var msg = displayName + " is too long. It needs to be shorter than " + this.test + " characters";
							}
						}
						else if (this.type == 'minlength') {
							if ($.trim(val) != "" && $.trim(val).length < this.test) {
								results.pass = false;
								var msg = displayName + " is too short. It needs to be longer than " + this.test + " characters";
							}
						}
						else if (this.type == 'required') {
							if ($.trim(val) == "") {
								results.pass = false;
								var msg = displayName + " is required";
							}
						}
						else if (this.type == 'knownGood') {
							if ($.trim(val) != "" && this.test.test(val) == 0) {
								results.pass = false;
								var msg = displayName + " is invalid";
							}
						}
						else if (this.type == 'custom') {
							if (!this.test()) {
								results.pass = false;
								var msg = displayName + " failed validation";
							}
						}
						if (this.errorMsg != undefined) {
							msg = this.errorMsg;
						}
						results.errors.push(msg);
					});
				});
			}
		});
		
		if (!results.pass) {
			opt.onFail(results.errors);
		}
		else {
			opt.onPass();
		}
		
		return this;
	}

}(jQuery))
