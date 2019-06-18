angular.module('testApp').controller('localizationTestController', function ($translate) {
    var vm = this;

    vm.changeLanguage = function (selectedLanguage) {
        localStorage.setItem("preferedLanguage", selectedLanguage)
        $translate.use(selectedLanguage)
    }
});