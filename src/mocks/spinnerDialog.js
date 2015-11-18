ngCordovaMocks.factory('$cordovaSpinnerDialog', function () {
  return {
      hide: function () {
          // do nothing. everything happens behind the scenes in this case.
          // its a stub that is present for completeness.
          return true;
      },
      show: function () {
          // do nothing. everything happens behind the scenes in thi
          return true;
      }
  };
});
