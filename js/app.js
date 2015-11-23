// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'ngCordova', 'starter.controllers', 'ngIOS9UIWebViewPatch'])

  .directive('mainParallax', function($document) {

  return {
    restrict: 'A',
    link: function($scope, $element, $attr) {
      var resizeFactor, scrollFactor, blurFactor;
      var paraheader = $document[0].body.querySelector(".welcome-parallax");
      
      $element.bind('scroll', function(e) {
        if (e.detail.scrollTop >= 0) {
          scrollFactor = e.detail.scrollTop/2;
          paraheader.style[ionic.CSS.TRANSFORM] = 'translate3d(0, +' + scrollFactor + 'px, 0)';
          blurFactor = 100 - (e.detail.scrollTop / 4);
          if(blurFactor <= 100){
            paraheader.style.webkitFilter = 'brightness('+blurFactor+'%)';
          }
        } else {
        }
      });
    }
  }
})

.directive('headerParallax', function($document) {


  return {
    restrict: 'A',
    link: function($scope, $element, $attr) {
      var resizeFactor, scrollFactor, blurFactor;
      var paraheader = $document[0].body.querySelector(".parallax");
      
      $element.bind('scroll', function(e) {
        if (e.detail.scrollTop >= 0) {
          scrollFactor = e.detail.scrollTop/2;
          paraheader.style[ionic.CSS.TRANSFORM] = 'translate3d(0, +' + scrollFactor + 'px, 0)';
             blurFactor = 100 - (e.detail.scrollTop / 3);
          if(blurFactor <= 100){
            paraheader.style.webkitFilter = 'brightness('+blurFactor+'%)';
          }
        } else {
     
        }
      });
    }
  }
})

.directive('headerParallaxsub', function($document) {
 
  return {
    restrict: 'A',
    link: function($scope, $element, $attr) {
      var resizeFactor, scrollFactor, blurFactor;
      var header = $document[0].body.querySelector(".parallax-sub");
      
      $element.bind('scroll', function(e) {
        if (e.detail.scrollTop >= 0) {
          scrollFactor = e.detail.scrollTop/2;
          header.style[ionic.CSS.TRANSFORM] = 'translate3d(0, +' + scrollFactor + 'px, 0)';
             blurFactor = 100 - (e.detail.scrollTop / 3);
          if(blurFactor <= 100){
            header.style.webkitFilter = 'brightness('+blurFactor+'%)';
          }
        } else {
        }
      });
    }
  }
})

  .run(function ($ionicPlatform, $cordovaSQLite, $cordovaStatusbar, $ionicPopup) {
    $ionicPlatform.ready(function () {

      $cordovaStatusbar.style(1);

      db = window.openDatabase("my.db", "1.0", "Cordova Demo", 200000); //Development only
//      db = $cordovaSQLite.openDB({ name: "my.db" }); //Production Only
      
      $cordovaSQLite.execute(db, "CREATE TABLE IF NOT EXISTS notes (id integer primary key, title text, content text, date text)");
      $cordovaSQLite.execute(db, "CREATE TABLE IF NOT EXISTS settings (id integer primary key, name text, value text)");
      var query = "SELECT id, name, value FROM settings";
      $cordovaSQLite.execute(db, query, []).then(function(res) {
          if(res.rows.length > 0) {
              for(var i = 0; i < res.rows.length; i++) {
                 if( (res.rows.item(i).name === 'fontSize') && (res.rows.item(i).value === 'true')){
                    document.documentElement.style.fontSize = "22px";
                    document.documentElement.style.lineHeight = "26px";
                 }
                 if( (res.rows.item(i).name === 'fontWeight') && (res.rows.item(i).value === 'true')){
                    document.documentElement.style.fontWeight = '700';
                 }
                if( (res.rows.item(i).name === 'bgImages') && (res.rows.item(i).value === 'true')){
                  
               var sheet = document.createElement('style')
                sheet.innerHTML = "h1.sunleaf, .welcome-parallax, .frnt-2 {background: #397633 !important;} .frnt-2 {height:auto !important; min-height:70px;}";
                   sheet.id = 'bgImagesSheet';
                document.body.appendChild(sheet);
                 }  
              }
          } 
      }, function (err) {
          console.error(err);
      });
      
      //Check Internet Connection
      if(window.Connection) {
          if(navigator.connection.type == Connection.NONE) {
              $ionicPopup.alert({
                  title: "No Internet Connection",
                  content: "The internet is disconnected on your device. Some functionality may be limited."
              })
              .then(function(result) {

              });
          }
      }
      
      
      //Initialize Analytics
      if(typeof analytics !== 'undefined') {
          analytics.debugMode();
          analytics.startTrackerWithId('UA-23971517-7');
      } else {
          console.log("Google Analytics Unavailable");
      } 

    });
})





.config(function ($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
  
    $ionicConfigProvider.backButton.previousTitleText(false).text(' ').icon('ion-ios-arrow-left');
    $stateProvider

      .state('app', {
          url: '/app',
          abstract: true,
          templateUrl: 'templates/menu.html',
          controller: 'AppCtrl'
      })
        .state('app.main_page', {
            url: '/main_page',
            views: {
                'menuContent': {
                    templateUrl: 'templates/mainpage.html'
                }
            }
        })
        .state('app.about_menu', {
            url: '/about_menu',
            views: {
                'menuContent': {
                    templateUrl: 'templates/about_menu.html'
                }
            }
        })
        .state('app.about_one', {
            url: '/about_one',
            views: {
                'menuContent': {
                    templateUrl: 'templates/about_one.html'
                }
            }
        })
        .state('app.about_one_single', {
            url: '/about_one/:aboid',
            views: {
                'menuContent': {
                    templateUrl: 'templates/about_one_single.html'
                }
            }
        })
        .state('app.about_two', {
            url: '/about_two',
            views: {
                'menuContent': {
                    templateUrl: 'templates/about_two.html'
                }
            }
        })
        .state('app.faqs', {
            url: '/faqs',
            views: {
                'menuContent': {
                    templateUrl: 'templates/about_three.html'
                }
            }
        })
        .state('app.faq', {
            url: '/faqs/:faqid',
            views: {
                'menuContent': {
                    templateUrl: 'templates/about_three_single.html'
                }
            }
        })
        .state('app.diag_menu', {
            url: '/diag_menu',
            views: {
                'menuContent': {
                    templateUrl: 'templates/diag_menu.html'
                }
            }
        })
        .state('app.diag_one', {
            url: '/diag_one',
            views: {
                'menuContent': {
                    templateUrl: 'templates/diag_one.html'
                }
            }
        })
        .state('app.diag_two', {
            url: '/diag_two',
            views: {
                'menuContent': {
                    templateUrl: 'templates/diag_two.html'
                }
            }
        })
        .state('app.diag_three', {
            url: '/diag_three',
            views: {
                'menuContent': {
                    templateUrl: 'templates/diag_three.html'
                }
            }
        })
        .state('app.diag_four', {
            url: '/diag_four',
            views: {
                'menuContent': {
                    templateUrl: 'templates/diag_four.html'
                }
            }
        })
        .state('app.diag_five', {
            url: '/diag_five',
            views: {
                'menuContent': {
                    templateUrl: 'templates/diag_five.html'
                }
            }
        })
        .state('app.rese_menu', {
            url: '/rese_menu',
            views: {
                'menuContent': {
                    templateUrl: 'templates/rese_menu.html'
                }
            }
        })
        .state('app.rese_one', {
            url: '/rese_one',
            views: {
                'menuContent': {
                    templateUrl: 'templates/rese_one.html'
                }
            }
        })
        .state('app.rese_two', {
            url: '/rese_two',
            views: {
                'menuContent': {
                    templateUrl: 'templates/rese_two.html'
                }
            }
        })
        .state('app.clin_menu', {
            url: '/clin_menu',
            views: {
                'menuContent': {
                    templateUrl: 'templates/clin_menu.html'
                }
            }
        })
        .state('app.ctfaq', {
            url: '/clin_menu/:faqid',
            views: {
                'menuContent': {
                    templateUrl: 'templates/clin_menu_single.html'
                }
            }
        })
        .state('app.docstates', {
            url: '/docstates',
            views: {
                'menuContent': {
                    templateUrl: 'templates/docs_states.html'
                }
            }
        })
        .state('app.doccountries', {
            url: '/doccountries',
            views: {
                'menuContent': {
                    templateUrl: 'templates/docs_countries.html'
                }
            }
        })
        .state('app.docstate', {
            url: '/docstates/:statename',
            views: {
                'menuContent': {
                    templateUrl: 'templates/docs_state.html'
                }
            }
        })
        .state('app.doccountry', {
            url: '/doccountries/:countryname',
            views: {
                'menuContent': {
                    templateUrl: 'templates/docs_country.html'
                }
            }
        })
        .state('app.blood_menu', {
            url: '/blood_menu',
            views: {
                'menuContent': {
                    templateUrl: 'templates/blood_menu.html'
                }
            }
        })
        .state('app.blood_one', {
            url: '/blood_one',
            views: {
                'menuContent': {
                    templateUrl: 'templates/blood_one.html'
                }
            }
        })
        .state('app.blood_two', {
            url: '/blood_two',
            views: {
                'menuContent': {
                    templateUrl: 'templates/blood_two.html'
                }
            }
        })
        .state('app.gjcf_menu', {
               url: '/gjcf_menu',
               views: {
                   'menuContent': {
                       templateUrl: 'templates/gjcf_menu.html'
                   }
               }
           })
        .state('app.vids_menu', {
               url: '/vids_menu',
               views: {
                   'menuContent': {
                       templateUrl: 'templates/vids_menu.html'
                   }
               }
           })
        .state('app.vids_menu_single', {
               url: '/vids_menu/:category',
               views: {
                   'menuContent': {
                       templateUrl: 'templates/vids_menu_single.html'
                   }
               }
           })
        .state('app.notes_menu', {
               url: '/notes_menu',
               views: {
                   'menuContent': {
                       templateUrl: 'templates/notes_menu.html'
                   }
               }
           })
        .state('app.adre_menu', {
            url: '/adre_menu',
            views: {
                'menuContent': {
                    templateUrl: 'templates/adre_menu.html'
                }
            }
        })
          .state('app.adre_one', {
            url: '/adre_one',
            views: {
                'menuContent': {
                    templateUrl: 'templates/adre_one.html'
                }
            }
        })
          .state('app.adre_two', {
            url: '/adre_two',
            views: {
                'menuContent': {
                    templateUrl: 'templates/adre_two.html'
                }
            }
        })
          .state('app.adre_three', {
            url: '/adre_three',
            views: {
                'menuContent': {
                    templateUrl: 'templates/adre_three.html'
                }
            }
        })
          .state('app.adre_four', {
            url: '/adre_four',
            views: {
                'menuContent': {
                    templateUrl: 'templates/adre_four.html'
                }
            }
        })
          .state('app.adre_five', {
            url: '/adre_five',
            views: {
                'menuContent': {
                    templateUrl: 'templates/adre_five.html'
                }
            }
        })
        .state('app.settings', {
               url: '/settings',
               views: {
                   'menuContent': {
                       templateUrl: 'templates/settings.html'
                   }
               }
           })
    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/main_page');
  
});