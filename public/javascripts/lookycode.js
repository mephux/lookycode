var GitHub;
var Owner;
var Repo;
var current_user = 'mephux';

(function($) {
  $.fn.sorted = function(customOptions) {
    var options = {
      reversed: false,
      by: function(a) { return a.text();  }
    };
    $.extend(options, customOptions);
    $data = $(this);
    arr = $data.get();
    arr.sort(function(a, b) {
      var valA = options.by($(a));
      var valB = options.by($(b));
      if (options.reversed) {
        return (valA < valB) ? 1 : (valA > valB) ? -1 : 0;				
      } else {		
        return (valA < valB) ? -1 : (valA > valB) ? 1 : 0;	
      }
    });
    return $(arr);
  };
})(jQuery);

var __bind = function(fn, me) { 
  return function(){ return fn.apply(me, arguments) }; 
};

function update_request_count (requests) {
  if (requests.meta) {
    $('span#request-counter').html(requests.meta['X-RateLimit-Remaining']);
  };
};

function render(source, data) {
  var template = Handlebars.compile(source);
  return template(data);
};

function loading(callback) {

  $('img.lookycode-loading').remove();
  $('#user .inside').html("<div id='user-loading'></div>");
  
  $('<img class="lookycode-loading" width="341px" height="104px" ' + 
    'src="images/loading.png" />').css({
    position: 'absolute',
    display: 'block',
    width: '341px',
    opacity: 0,
    height: '104px',
    top: '350px',
    'z-index': 99999,
    left: $(window).width() / 2 - (341 / 2)
  }).prependTo('body').animate({
    opacity: 0.6
  }, 500);
  
  $('#page').stop().css({
    opacity: 1,
    display: 'block'
  }).animate({
    opacity: 0.4,
  }, 700, function() {
    
    $('img.lookycode-loading').fadeOut('fast');
    if (typeof callback == 'function') { callback(); };
    
  });
  
};

function buildChart(username, repos) {
  var chart;
  var data = { watchers: [], categories: [], forks: [], issues: []};
  
  if (repos.length < 2) {
    var text = '<div id="no-data">This user does not have enough ' + 
    'information to graph.</div>';

    $('#page').prepend('<div id="user-metrics" ' + 
    'style="width:960px;margin:auto;">' + text + '</div>');

    return false;
  };
  
  $('#page').prepend('<div id="user-metrics" ' + 
  'style="width:960px;margin:auto;"></div>');
  
  for (var i=0; i < repos.length; i++) {
    data.categories.push(repos[i].name)
    data.watchers.push(repos[i].watchers);
    data.forks.push(repos[i].forks);
    data.issues.push(repos[i].open_issues);
  };
  
  $(document).ready(function() {
     chart = new Highcharts.Chart({
        chart: {
           renderTo: 'user-metrics',
           defaultSeriesType: 'column',
           backgroundColor: 'transparent',
           zoomType: 'x',
           margin: [ 60, 30, null, 60],
           spacingRight: 20
        },
        credits: {
          enabled: false
        },
        title: {
          align: 'center',
          y: 25,
           text: username + ' repository metrics',
           style: {
             color: '#acacac'
           }
        },
        xAxis: {
          gridLineColor: '#000',
          categories: data.categories,
          labels: {
             rotation: -35,
             align: 'right',
             style: {
                  color: '#adadad',
                 font: 'normal 0.9em Verdana, sans-serif'
             }
          }
        },
        yAxis: {
          gridLineColor: '#515151',
          opposite: false,
           title: {
              text: 'Watchers, Forks, Issues.',
              margin: 5,
              style: {
                fontWeight: 'none',
                color: '#acacac'
              }
           },
           min: 0
        },
        legend: {
           align: 'right',
           x: 0,
           verticalAlign: 'top',
           y: 7,
           floating: false,
           backgroundColor: 'transparent',
           borderColor: '#000',
           borderWidth: 0,
           shadow: false,
           itemHoverStyle: {
           	color: '#FFF'
           },
           itemStyle: {
           	cursor: 'pointer',
           	color: '#d1d1d1'
           }
        },
        plotOptions: {
          column: {
            borderColor: 'transparent',
            borderWidth: 0,
            color: '#fff' 
          }
        },
        tooltip: {
          backgroundColor: {
             linearGradient: [0, 0, 0, 50],
             stops: [
                [0, 'rgba(96, 96, 96, .8)'],
                [1, 'rgba(16, 16, 16, .8)']
             ]
          },
          borderWidth: 0,
          style: {
             color: '#FFF'
          },
            formatter: function() {
               return '<b>'+ this.x +'</b>: '+
                   this.series.name +': '+ this.y +'<br/>';
            }
         },
        series: [{
           name: 'Watchers',
           color: '#84c2f0',
           data: data.watchers
        },{
          name: 'Forks',
          color: '#cb2b00',
          data: data.forks
       },{
          name: 'issues',
          color: '#79bc79',
          data: data.issues
       }]
     });

  });
}

Handlebars.registerHelper('repo-description', function(description) {
  if (description != null && description.length > 0) {
    return description;
  } else {
    return 'This repository description is currently unavailable.';
  };
});

Handlebars.registerHelper('truncate', function(string, length, message) {
  if (string != null && string.length > 0) {
    if (string.length > length) {
      return string.substring(0,length) + '...';
    } else {
      return string;
    };
  } else {
    return message;
  };
});

Handlebars.registerHelper('nil', function(data) {
  if (data != null && data.length > 0) {
    return data;
  } else {
    return '☹ Not Available';
  };
});

Handlebars.registerHelper('fullname', function() {
  if (this.name != null && this.name.length > 0) {
    return this.name;
  } else {
    return this.login;
  };
});

Handlebars.registerHelper('link', function(url) {
  if (url != null) {
    return url;
  } else {
    return '#';
  };
});

function error(data) {
  var error = $('<div id="error"></div>').css('opacity', 0);
  error.html('<div class="error-message">'+data.message+'</div>');
  $('#wrapper').css('opacity',0.1);
  $('body').prepend(error);
  error.animate({opacity: 1}, 200);
};

GitHub = (function() {
  
  function GitHub(username, callback) {
    var self = this;
    self.callback = callback;
    
    self.name = username;
    var raw = { 
      user: null, 
      repos: null
    };
    
    self.urls = {
      profile: {
        api: 'https://api.github.com/users/' + self.name,
        https: 'https://github.com/' + self.name,
      },
      repositories: {
        api: 'https://api.github.com/users/'+self.name+'/repos',
        https: 'https://github.com/' + self.name,
        other: 'https://api.github.com/users/'+self.name+'/repos' // '/fetch/' + self.name
      },
      followers: {
        api: 'https://api.github.com/users/'+self.name+'/followers',
        https: 'https://github.com/'+self.name+'/followers'
      },
      following: {
        api: 'https://api.github.com/users/'+self.name+'/following',
        https: 'https://github.com/'+self.name+'/following'
      }
    };
    
    self.fetch_user();
  };
  
  GitHub.prototype = {
    
    fetch_user: function() {
       var self = this;
       $.ajax({
         url: self.urls.profile.api,
         type: 'GET',
         contentType: "application/json; charset=utf-8",
         dataType: 'jsonp',
         success: function(json, textStatus, xhr) {
           update_request_count(json);
           
           self.user = json.data;
           self.user.more = {};

           self.user.more.followers = null;
           self.user.more.repos = null;
           self.user.more.following = null;
           self.user.more.gists = null;
           
           self.fetch_repos();
         },
         error: function(xhr, textStatus, errorThrown) {
           self.userError();
         }
       });
     },

     fetch_repos: function() {
       var self = this;
       
       $.ajax({
         url: self.urls.repositories.other,
         type: 'GET',
         contentType: "application/json; charset=utf-8",
         dataType: 'jsonp',
         success: function(data, textStatus, xhr) {
           update_request_count(data);
           self.repos = data.data;
           
           //self.build_repos();
           self.addUserInformation();
           
           if (self.callback) { self.callback(); };
         },
         error: function(xhr, textStatus, errorThrown) {
           self.repoError();
         }
       });
     },

     build_repos: function(){
       var self = this;
       $('#page').html("<ul id='repos' class='repos'></ul>");
       updateURL(self.name + " - Repositories", self.name);

       var count = 1;

       for (var i=0; i < self.repos.length; i++) {
         if (count == 1) {
           self.repos[i].klass = 'first'
           self.addUserRepo(self.repos[i]);
           count++
         } else if (count == 2) {
           self.repos[i].klass = 'middle'
           self.addUserRepo(self.repos[i]);
           count++
         } else {
           self.repos[i].klass = 'last'
           self.addUserRepo(self.repos[i]);
           count = 1;
         };

       };
       
       if (self.user) {
         self.user.repos = self.repos;
         self.addUserInformation();
       } else {
         self.userError();
       };
       
       buildChart(self.name, self.repos);
     },

     fetch_followers: function(){
      var self = this;

      updateURL(self.name + " - Followers", self.name + "/followers");

      var source = " \
        <ul id='followers' class='image-box'> \
        {{#more/followers}} \
        <li> \
        <a href='{{login}}' class='load-new-user' data-username='{{login}}'> \
          <img width='80px' height='80px' src='{{avatar_url}}' /> \
        </a> \
        <div id='username'>{{truncate login 13 \"???\"}}</div> \
        </li> \
        {{/more/followers}} \
        </ul>";
      
      if (self.user.more.followers == null) {
        $.ajax({
          url: self.urls.followers.api,
          type: 'GET',
          contentType: "application/json; charset=utf-8",
          dataType: 'jsonp',
          success: function(data, textStatus, xhr) {
            update_request_count(data);
            self.user.more.followers = data.data;
            
            if (data.meta.Link) {
              $('#page').html(render(source, self.user));
              
              var count = parseInt(data.meta.Link[data.meta.Link.length - 1]
              .toString().match(/page\=(\d+)/m)[1]) + 1;
              
              for (var i=2; i < count; i++) {
                
                self.fetch_more('https://api.github.com/users/' + 
                self.user.login + '/followers?page=' + i, 'followers');

              };
              
            } else {
              $('#page').html(render(source, self.user));
            };
            
          },
          error: function(xhr, textStatus, errorThrown) {
            self.user.more.followers = [];
            self.repoError();
          }
        });
        
      } else {
        $('#page').html(render(source, self.user));
      };
      
     },

     fetch_more: function(url, holder){
       var self = this;
       var source = " \
       {{#users}} \
       <li> \
         <a href='{{login}}' class='load-new-user' data-username='{{login}}'> \
           <img width='80px' height='80px' src='{{avatar_url}}' /> \
         </a> \
         <div id='username'>{{truncate login 13 \"???\"}}</div> \
       </li> \
       {{/users}}";
         
       $.ajax({
         url: url,
         type: 'GET',
         dataType: 'jsonp',
         success: function(data, textStatus, xhr) {
           update_request_count(data);
           
           for (var i=0; i < data.data.length; i++) {
             
            if (holder == 'followers') {
              self.user.more.followers.push(data.data[i]);
            } else {
              self.user.more.following.push(data.data[i]);
            };
            
           };
           
           $('ul#' + holder).append(render(source, { users: data.data }));
         }
       });
     },

     fetch_following: function(){
      var self = this;
     
      updateURL(self.name + " - Following", self.name + "/following");

      var source = " \
        <ul id='following' class='image-box'> \
          {{#more/following}} \
          <li> \
            <a href='{{login}}' class='load-new-user' data-username='{{login}}'> \
              <img width='80px' height='80px' src='{{avatar_url}}' /> \
            </a> \
            <div id='username'>{{truncate login 10 \"???\"}}</div> \
          </li> \
          {{/more/following}} \
        </ul>";
      
      if (self.user.more.following == null) {
        $.ajax({
          url: self.urls.following.api,
          type: 'GET',
          contentType: "application/json; charset=utf-8",
          dataType: 'jsonp',
          success: function(data, textStatus, xhr) {
            update_request_count(data);
            self.user.more.following = data.data;
            
            if (data.meta.Link) {
              $('#page').html(render(source, self.user));
              var count = parseInt(data.meta.Link[data.meta.Link.length - 1].toString().match(/page\=(\d+)/m)[1]) + 1;
              
              for (var i=2; i < count; i++) {
                self.fetch_more('https://api.github.com/users/'+self.user.login+'/following?page=' + i, 'following');
              };
              
            } else {
              $('#page').html(render(source, self.user));
            };

          },
          error: function(xhr, textStatus, errorThrown) {
            self.user.more.following = [];
            self.repoError();
          }
        });
        
      } else {
        $('#page').html(render(source, self.user));
      };
      
     },

     userError: function() {
       var user = new Handlebars.SafeString(self.name).string;
       error({
         message: '<s>We</s> You were unable to fetch this users' + 
          ' github information.',
         user: user
       });
     },

     repoError: function() {
       var user = new Handlebars.SafeString(self.name).string;
       error({
         message: '<s>We</s> You were unable to fetch the repository list from github.',
         user: user
       });
     },

     addUserRepo: function(repo) {
       var self = this;
       var source = " \
         <li class='repo {{klass}}' data-size='{{size}}' data-lang='{{language}}' data-fork='{{fork}}'> \
           <div class='inside'> \
             <div class='repo-title'> \
               <div class='repo-name'><a href='{{html_url}}' target='_blank'>{{name}}</a></div> \
               <div class='repo-size'>{{size}} KB</div> \
             </div> \
             <div class='repo-metadata'> \
               <div class='repo-description'>{{truncate description 130 \"This repository description is currently unavailable.\"}}</div> \
             </div> \
             <div class='repo-footer'> \
               <div class='repo-box first'> \
                 <a href='{{html_url}}/watchers' target='_blank'> \
                   {{watchers}}<div class='box-title'>Watchers</div> \
                 </a> \
               </div> \
               <div class='repo-box'> \
                 <a href='{{html_url}}/issues' target='_blank'> \
                   {{open_issues}}<div class='box-title'>Open Issues</div> \
                 </a> \
               </div> \
               <div class='repo-box last'> \
                 <a href='{{html_url}}/network' target='_blank'> \
                   {{forks}}<div class='box-title'>Forks</div> \
                 </a> \
               </div> \
             </div> \
           </div> \
         </li>";
         
       $('#page ul#repos').append(render(source, repo));
     },
     
     addUserInformation: function(){
       var self = this;
       var source = " \
       <div id='user-information'> \
         <div class='detail'> \
           <div id='avatar'> \
             <img width='80' height='80' id='user-avatar-paper' src='{{avatar_url}}' /> \
           </div> \
           <div id='name'>{{fullname}} <span class='username' title='{{login}}'>({{truncate login 10 \"???\"}})</span></div> \
           <ul id='more'> \
             <li><div class='key'>Company</div> <div class='value'>{{nil company}}</div></li> \
             <li><div class='key'>Website</div> <div class='value'><a href='{{link blog}}'>{{nil blog}}</a></div></li> \
             <li><div class='key'>Location</div> <div class='value'>{{nil location}}</div></li> \
           </ul> \
         </div> \
         <ul id='user-info'> \
           <li> \
             <div class='user-inside'> \
               <a class='followers' href='https://github.com/{{login}}/followers' target='_blank'> \
                 <div class='info-title green'>followers</div><div class='info-count'>{{followers}}</div> \
               </a> \
             </div> \
           </li> \
           <li> \
             <div class='user-inside'> \
               <a class='following' href='https://github.com/{{login}}/following' target='_blank'> \
               <div class='info-title blue'>following</div><div class='info-count'>{{following}}</div> \
               </a> \
             </div> \
           </li> \
           <li> \
             <div class='user-inside'> \
               <a class='gists' href='https://gist.github.com/{{login}}' target='_blank'> \
                 <div class='info-title orange'>public gists</div><div class='info-count'>{{public_gists}}</div> \
               </a> \
             </div> \
           </li> \
           <li> \
             <div class='user-inside'> \
               <a class='repositories' href='{{html_url}}' target='_blank'> \
                 <div class='info-title red'>public repos</div><div class='info-count'>{{public_repos}}</div> \
               </a> \
             </div> \
           </li> \
         </ul> \
       </div>";
       
       $('#user .inside').html(render(source, self.user));
     }
  };
  
  return GitHub;
})();

Owner = (function() {
  
  function Owner(user) {
    this.name = user.login;
  };
  
  Owner.prototype.toHTML = function() {
    return '<strong>' + this.name + '</strong><br />';
  };
  
  return Owner;
})();

Repo = (function() {
  function Repo(repository) {
    return repository;
  };
  
  Repo.prototype.toHTML = function() {
    return '<strong>' + this.name + '</strong><br />';
  };
  
  return Repo;
})();

updateURL = function(title, route) {
  if (history && history.pushState) {
    history.pushState(null, title, "#/" + route);
  } else {
    document.title = title;
    window.location.hash = "#/" + route;
  };
};

jQuery(document).ready(function($) {
  
  if ((window.location.hash == "") || (window.location.pathname != "/")) {
    current_user = new GitHub("mephux", function() {
      
      if (current_user) { current_user.build_repos() };
      updateURL("Mephux", "mephux");
    });
  };
 
  $('#logo a').live('click', function() {
    event.preventDefault();

    updateURL("Mephux", "mephux");

    if (current_user && (current_user.name === "mephux")) {
      current_user.build_repos();
    } else {
      current_user = new GitHub("mephux", function() {
        current_user.build_repos();
      });
    }
  });

  $('a.followers').live('click', function(event) {
    event.preventDefault();
    current_user.fetch_followers();
  });
  
  $('a.following').live('click', function(event) {
    event.preventDefault();
    current_user.fetch_following();
  });
  
  $('img#user-avatar-paper, a.repositories').live('click', function(event) {
    event.preventDefault();
    current_user.build_repos();
  });
  
  $('a.load-new-user').live('click', function(event) {
    event.preventDefault();
    var username = $(this).data('username');
    
    $('img#user-avatar-paper').animate({
      opacity: 0
    }, 400);
    
    $.scrollTo('#header', 500);
    
    var image = $('img', this).clone().addClass('tmp-avatar').css({
      display: 'block',
      position: 'absolute',
      'z-index': 99999,
      overflow: 'hidden',
    	border: '1px solid #383838',
      top: $('img', this).offset().top,
      left: $('img', this).offset().left
    }).appendTo('body').animate({
      top: $('img#user-avatar-paper').offset().top,
      left: $('img#user-avatar-paper').offset().left
    }, 400, function() {
       current_user = new GitHub(username, function() {
         $('title').html('Looky some code from ' + username);

        updateURL(username, username);
        current_user.build_repos();
        
        $('img.tmp-avatar').remove();
     });
     
    });
    
  });
  
  $('form#find-user').submit(function(event) {
    event.preventDefault();
    var self = this;
    var username = $('input', this).attr('value');
    
    if (username.length > 0) {
      
      loading(function() {

        current_user = new GitHub(username, function() {
          
          $('#page').animate({
            opacity: 1
          }, 500);
          
          $('title').html('Looky some code from ' + username);

          updateURL(document.title, username)

          $('input', self).blur();
          $('input', self).val('');

          current_user.build_repos();
          
        });
        
      });
      
    };
  });
  
  $('#error').live('click', function(event) {
    event.preventDefault();
    $(this).animate({
      opacity: 0
      }, 500, function() {
      $(this).remove();
      
      loading(function() {
        current_user = new GitHub('mephux', function() {
        $('#wrapper, #page').fadeTo('fast', 1);
        });
      });
      
    });
  });
 

  // Router

  route = function(type) {
    if (type === "followers") {
      current_user.fetch_followers();
    } else if (type === "following") {
      current_user.fetch_following();
    } else if (type === "/") {
      current_user.build_repos(); 
    } else {
    
    };
  };

  var routes = {
    '/:username': function(username) {
      if (username === current_user.name) {
        route("/");
      } else {
        current_user = new GitHub(username, function() {
          current_user.build_repos();
        });
      };
    },
    '/:username/:type': function(username, type) {

      if (username === current_user.name) {
        route(type);
      } else {
        current_user = new GitHub(username, function() {
          route(type);
        });
      };

    }
  };

  var router = Router(routes); 
  router.init();
});
