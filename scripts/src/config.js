require.config({
  baseUrl: '/scripts',
  paths: {
    'jquery': [
      '//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min',
      '//ajax.aspnetcdn.com/ajax/jQuery/jquery-1.10.2.min',
      'lib/jquery/jquery-1.10.2.min'
    ],
    'underscore': [
      '//cdnjs.cloudflare.com/ajax/libs/underscore.js/1.5.2/underscore-min',
      '//cdn.jsdelivr.net/underscorejs/1.5.2/underscore-min',
      'lib/underscore/underscore-min'
    ],
    'cryptojs': [
      '//crypto-js.googlecode.com/svn/tags/3.1.2/build/rollups/md5',
      'lib/cryptojs/md5'
    ]
  },
  shim: {
    'underscore': { 
      exports: '_'
    },
    'cryptojs': {
      exports: 'CryptoJS'
    }
  }
});

define('modernizr', [], function() {
  return window.Modernizr;
});