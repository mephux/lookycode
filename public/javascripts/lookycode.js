var GitHub;
var Owner;
var Repo;

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

function render(source, data) {
  var template = Handlebars.compile(source);
  return template(data);
}

function buildChart(username, repos) {
  var chart;
  var data = { watchers: [], categories: [], forks: [], issues: []};
  
  $('#page').prepend('<div id="user-metrics" style="width:960px;margin:auto;"></div>');
  
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

function userLoader () {
  $('#user .inside').html("<div id='user-loading'></div>");
};

GitHub = (function() {
  
  function GitHub(username) {
    var self = this;
    this.name = username;
    var raw = { 
      user: null, 
      repos: null
    };
    
    self.fetchUser();
  };
  
  GitHub.prototype.fetchUser = function() {
    var self = this;
    $.ajax({
      url: 'https://api.github.com/users/' + this.name,
      type: 'GET',
      dataType: 'jsonp',
      complete: function(xhr, textStatus) {
        //called when complete
      },
      success: function(json, textStatus, xhr) {
        self.user = json.data;
        self.fetchRepos();
      },
      error: function(xhr, textStatus, errorThrown) {
        self.userError();
      }
    });
  };
  
  GitHub.prototype.fetchRepos = function() {
    var self = this;
    
    $.ajax({
      url: 'https://api.github.com/users/'+this.name+'/repos',
      type: 'GET',
      dataType: 'jsonp',
      complete: function(xhr, textStatus) {
        //called when complete
      },
      success: function(data, textStatus, xhr) {
        var repos = data.data;
        $('#page').html("<ul id='repos' class='repos'></ul>");
        
        var count = 1;
        for (var i=0; i < repos.length; i++) {
          if (count == 1) {
            repos[i].klass = 'first'
            self.addUserRepo(repos[i]);
            count++
          } else if (count == 2) {
            repos[i].klass = 'middle'
            self.addUserRepo(repos[i]);
            count++
          } else {
            repos[i].klass = 'last'
            self.addUserRepo(repos[i]);
            count = 1;
          };

        };
        
        if (self.user) {
          self.user.repos = data.data;
          self.addUserInformation();
        } else {
          self.userError();
        };
        
        buildChart(self.name, repos);
        
        $('#page #repos').css({
          opacity: 0
        });
        
        $('#page #repos').stop().animate({
          'opacity': 1
        }, 500);
        
      },
      error: function(xhr, textStatus, errorThrown) {
        self.repoError();
      }
    });
  };
  
  GitHub.prototype.userError = function() {
    var user = new Handlebars.SafeString(self.name).string;
    error({
      message: '<s>We</s> You were unable to fetch this users github information.',
      user: user
    });
  };
  
  GitHub.prototype.repoError = function() {
    var user = new Handlebars.SafeString(self.name).string;
    error({
      message: '<s>We</s> You were unable to fetch the repository list from github.',
      user: user
    });
  };
  
  GitHub.prototype.addUserRepo = function(repo) {
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
  };
  
  GitHub.prototype.addUserInformation = function() {
    var self = this;
    var source = " \
    <div id='user-information'> \
      <div class='detail'> \
        <div id='avatar'> \
          <img width='80' height='80' src='{{avatar_url}}' /> \
        </div> \
        <div id='name'>{{fullname}} <span class='username'>({{login}})</span></div> \
        <ul id='more'> \
          <li><div class='key'>Company</div> <div class='value'>{{nil company}}</div></li> \
          <li><div class='key'>Website</div> <div class='value'><a href='{{link blog}}'>{{nil blog}}</a></div></li> \
          <li><div class='key'>Location</div> <div class='value'>{{nil location}}</div></li> \
        </ul> \
      </div> \
      <ul id='user-info'> \
        <li> \
          <div class='user-inside'> \
            <a href='https://github.com/{{login}}/followers' target='_blank'> \
              <div class='info-title green'>followers</div><div class='info-count'>{{followers}}</div> \
            </a> \
          </div> \
        </li> \
        <li> \
          <div class='user-inside'> \
            <a href='https://github.com/{{login}}/following' target='_blank'> \
            <div class='info-title blue'>following</div><div class='info-count'>{{following}}</div> \
            </a> \
          </div> \
        </li> \
        <li> \
          <div class='user-inside'> \
            <a href='https://gist.github.com/{{login}}' target='_blank'> \
              <div class='info-title orange'>public gists</div><div class='info-count'>{{public_gists}}</div> \
            </a> \
          </div> \
        </li> \
        <li> \
          <div class='user-inside'> \
            <a href='{{html_url}}' target='_blank'> \
              <div class='info-title red'>public repos</div><div class='info-count'>{{public_repos}}</div> \
            </a> \
          </div> \
        </li> \
      </ul> \
    </div>";
    $('#user .inside').html(render(source, self.user));
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

jQuery(document).ready(function($) {
  $('form#find-user').submit(function(event) {
    event.preventDefault();
    var self = this;
    var username = $('input', this).attr('value');
    
    if (username.length > 0) {
        
      $('#page #repos').stop().animate({
        'opacity': 0
      }, 500, function() {
        userLoader();
        $('#page').attr('style', '');
        new GitHub(username);
        $('title').html('Looky some code from ' + username);

        if (history && history.pushState) {
    			history.pushState(null, document.title, username);
    		};
    		
        $('input', self).blur();
      });
    };
  });
  
  $('#error').live('click', function(event) {
    event.preventDefault();
    $(this).animate({
      opacity: 0
      }, 500, function() {
      $(this).remove();
      $('#wrapper').fadeTo('fast', 1);
    });
  });
  
});