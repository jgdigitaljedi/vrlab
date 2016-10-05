'use strict';

angular.module('vrlabApp').factory('HelperService', 
	function () {

		return {
			hasScrollBar: function () {
				if ($(document).height() > $(window).height()) {
				    $('.social-icons').removeClass('has-no-scroll');
				    $('.social-icons').addClass('has-scroll');
				} else {
				    $('.social-icons').removeClass('has-scroll');
				    $('.social-icons').addClass('has-no-scroll');               
				}
			}
		};
  	}
);