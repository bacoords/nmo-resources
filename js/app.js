// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'ngCordova', 'starter.controllers', 'ngIOS9UIWebViewPatch', 'monospaced.elastic', 'angularMoment'])

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

//      db = window.openDatabase("my.db", "1.0", "Cordova Demo", 200000); //Development only
      db = $cordovaSQLite.openDB({ name: "my.db" }); //Production Only
      
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
                    templateUrl: 'templates/about/about_menu.html'
                }
            }
        })
        .state('app.about_one', {
            url: '/about_one',
            views: {
                'menuContent': {
                    templateUrl: 'templates/about/about_one.html'
                }
            }
        })
        .state('app.about_one_single', {
            url: '/about_one/:aboid',
            views: {
                'menuContent': {
                    templateUrl: 'templates/about/about_one_single.html'
                }
            }
        })
        .state('app.about_two', {
            url: '/about_two',
            views: {
                'menuContent': {
                    templateUrl: 'templates/about/about_two.html'
                }
            }
        })
        .state('app.faqs', {
            url: '/faqs',
            views: {
                'menuContent': {
                    templateUrl: 'templates/about/about_three.html'
                }
            }
        })
        .state('app.faq', {
            url: '/faqs/:faqid',
            views: {
                'menuContent': {
                    templateUrl: 'templates/about/about_three_single.html'
                }
            }
        })
        .state('app.diag_menu', {
            url: '/diag_menu',
            views: {
                'menuContent': {
                    templateUrl: 'templates/diag/diag_menu.html'
                }
            }
        })
        .state('app.diag_one', {
            url: '/diag_one',
            views: {
                'menuContent': {
                    templateUrl: 'templates/diag/diag_one.html'
                }
            }
        })
        .state('app.diag_two', {
            url: '/diag_two',
            views: {
                'menuContent': {
                    templateUrl: 'templates/diag/diag_two.html'
                }
            }
        })
        .state('app.diag_three', {
            url: '/diag_three',
            views: {
                'menuContent': {
                    templateUrl: 'templates/diag/diag_three.html'
                }
            }
        })
        .state('app.diag_four', {
            url: '/diag_four',
            views: {
                'menuContent': {
                    templateUrl: 'templates/diag/diag_four.html'
                }
            }
        })
        .state('app.diag_five', {
            url: '/diag_five',
            views: {
                'menuContent': {
                    templateUrl: 'templates/diag/diag_five.html'
                }
            }
        })
        .state('app.rese_menu', {
            url: '/rese_menu',
            views: {
                'menuContent': {
                    templateUrl: 'templates/rese/rese_menu.html'
                }
            }
        })
        .state('app.rese_one', {
            url: '/rese_one',
            views: {
                'menuContent': {
                    templateUrl: 'templates/rese/rese_one.html'
                }
            }
        })
        .state('app.rese_two', {
            url: '/rese_two',
            views: {
                'menuContent': {
                    templateUrl: 'templates/rese/rese_two.html'
                }
            }
        })
        .state('app.clin_menu', {
            url: '/clin_menu',
            views: {
                'menuContent': {
                    templateUrl: 'templates/clin/clin_menu.html'
                }
            }
        })
        .state('app.clin_faq', {
            url: '/clin_faq/',
            views: {
                'menuContent': {
                    templateUrl: 'templates/clin/clin_faq.html'
                }
            }
        })
        .state('app.clin_faq_single', {
            url: '/clin_faq/:faqid',
            views: {
                'menuContent': {
                    templateUrl: 'templates/clin/clin_faq_single.html'
                }
            }
        })
        .state('app.clin_web', {
            url: '/clin_web/',
            views: {
                'menuContent': {
                    templateUrl: 'templates/clin/clin_web.html'
                }
            }
        })
        .state('app.clin_web_single', {
            url: '/clin_web/:ctwid',
            views: {
                'menuContent': {
                    templateUrl: 'templates/clin/clin_web_single.html'
                }
            }
        })
        .state('app.docstates', {
            url: '/docstates',
            views: {
                'menuContent': {
                    templateUrl: 'templates/docs/docs_states.html'
                }
            }
        })
        .state('app.doccountries', {
            url: '/doccountries',
            views: {
                'menuContent': {
                    templateUrl: 'templates/docs/docs_countries.html'
                }
            }
        })
        .state('app.docstate', {
            url: '/docstates/:statename',
            views: {
                'menuContent': {
                    templateUrl: 'templates/docs/docs_state.html'
                }
            }
        })
        .state('app.doccountry', {
            url: '/doccountries/:countryname',
            views: {
                'menuContent': {
                    templateUrl: 'templates/docs/docs_country.html'
                }
            }
        })
        .state('app.blood_menu', {
            url: '/blood_menu',
            views: {
                'menuContent': {
                    templateUrl: 'templates/blood/blood_menu.html'
                }
            }
        })
        .state('app.blood_one', {
            url: '/blood_one',
            views: {
                'menuContent': {
                    templateUrl: 'templates/blood/blood_one.html'
                }
            }
        })
        .state('app.blood_two', {
            url: '/blood_two',
            views: {
                'menuContent': {
                    templateUrl: 'templates/blood/blood_two.html'
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
                       templateUrl: 'templates/vids/vids_menu.html'
                   }
               }
           })
        .state('app.vids_menu_single', {
               url: '/vids_menu/:catId/:catName',
               views: {
                   'menuContent': {
                       templateUrl: 'templates/vids/vids_menu_single.html'
                   }
               }
           })
        .state('app.notes_menu', {
               url: '/notes_menu',
               views: {
                   'menuContent': {
                       templateUrl: 'templates/notes/notes_menu.html'
                   }
               }
           })
        .state('app.notesrev_menu', {
               url: '/notesrev_menu',
               cache: false,
               views: {
                   'menuContent': {
                       templateUrl: 'templates/notes/notesrev_menu.html'
                   }
               }
           })
        .state('app.notes_add_page', {
               url: '/notes_add_page',
               views: {
                   'menuContent': {
                       templateUrl: 'templates/notes/notes_add_page.html'
                   }
               }
           })
        .state('app.notes_edit_page', {
               url: '/notes_edit_page/:id/:title/:content',
//               params: ['id', 'title', 'content'],
               views: {
                   'menuContent': {
                       templateUrl: 'templates/notes/notes_edit_page.html'
                   }
               }
           })
        .state('app.adre_menu', {
            url: '/adre_menu',
            views: {
                'menuContent': {
                    templateUrl: 'templates/adre/adre_menu.html'
                }
            }
        })
          .state('app.adre_one', {
            url: '/adre_one',
            views: {
                'menuContent': {
                    templateUrl: 'templates/adre/adre_one.html'
                }
            }
        })
          .state('app.adre_two', {
            url: '/adre_two',
            views: {
                'menuContent': {
                    templateUrl: 'templates/adre/adre_two.html'
                }
            }
        })
          .state('app.adre_three', {
            url: '/adre_three',
            views: {
                'menuContent': {
                    templateUrl: 'templates/adre/adre_three.html'
                }
            }
        })
          .state('app.adre_four', {
            url: '/adre_four',
            views: {
                'menuContent': {
                    templateUrl: 'templates/adre/adre_four.html'
                }
            }
        })
          .state('app.adre_five', {
            url: '/adre_five',
            views: {
                'menuContent': {
                    templateUrl: 'templates/adre/adre_five.html'
                }
            }
        })
        .state('app.events_menu', {
            url: '/events_menu',
            views: {
                'menuContent': {
                    templateUrl: 'templates/events/events_menu.html'
                }
            }
        })
        .state('app.rt8_menu', {
            url: '/rt8_menu',
            views: {
                'menuContent': {
                    templateUrl: 'templates/rt8/rt8_menu.html'
                }
            }
        })
        .state('app.rt8_one', {
            url: '/rt8_one',
            views: {
                'menuContent': {
                    templateUrl: 'templates/rt8/rt8_one.html'
                }
            }
        })
        .state('app.rt8_two', {
            url: '/rt8_two',
            views: {
                'menuContent': {
                    templateUrl: 'templates/rt8/rt8_two.html'
                }
            }
        })
        .state('app.rt8_three', {
            url: '/rt8_three',
            views: {
                'menuContent': {
                    templateUrl: 'templates/rt8/rt8_three.html'
                }
            }
        })
        .state('app.rt8_three_single', {
            url: '/rt8_three_single/:item',
            views: {
                'menuContent': {
                    templateUrl: 'templates/rt8/rt8_three_single.html'
                }
            }
        })
        .state('app.pd16_menu', {
            url: '/pd16_menu',
            views: {
                'menuContent': {
                    templateUrl: 'templates/pd16/pd16_menu.html'
                }
            }
        })
        .state('app.pd16_one', {
            url: '/pd16_one',
            views: {
                'menuContent': {
                    templateUrl: 'templates/pd16/pd16_one.html'
                }
            }
        })
        .state('app.pd16_two', {
            url: '/pd16_two',
            views: {
                'menuContent': {
                    templateUrl: 'templates/pd16/pd16_two.html'
                }
            }
        })
        .state('app.pd16_three', {
            url: '/pd16_three',
            views: {
                'menuContent': {
                    templateUrl: 'templates/pd16/pd16_three.html'
                }
            }
        })
        .state('app.pd16_four', {
            url: '/pd16_four',
            views: {
                'menuContent': {
                    templateUrl: 'templates/pd16/pd16_four.html'
                }
            }
        })
        .state('app.pd16_five', {
            url: '/pd16_five',
            views: {
                'menuContent': {
                    templateUrl: 'templates/pd16/pd16_five.html'
                }
            }
        })
        .state('app.pd16_six', {
            url: '/pd16_six',
            views: {
                'menuContent': {
                    templateUrl: 'templates/pd16/pd16_six.html'
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