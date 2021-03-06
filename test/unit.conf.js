module.exports = function(config) {
   config.set({

      frameworks:['jasmine'],
   
      // base path, that will be used to resolve files and exclude
      basePath : '..',
      
      // list of files / patterns to load in the browser
      files : [           
         'test/libs/es5-shim.js'        
      ,  'test/libs/es5-sham.js'        
      ,  'src/functional.js'
      ,  'src/util.js'
      ,  'src/lists.js' 
      ,  'test/libs/sinon.js'
      ,  'test/libs/sinon-ie.js'
      ,  'test/libs/*.js'
      ,  'src/libs/clarinet.js'
      ,  'src/clarinetListenerAdaptor.js'
      ,  'src/streamingHttp-browser.js'
      ,  'src/jsonPathSyntax.js'
      ,  'src/incrementalContentBuilder.js'
      ,  'src/jsonPath.js'
      ,  'src/pubSub.js' 
      ,  'src/events.js'  
      ,  'src/instanceController.js'
      ,  'src/wire.js'
      ,  'src/publicApi.js'
        
      ,  'test/specs/*.unit.spec.js'
      ,  'test/specs/*.component.spec.js'
//    ,  'test/specs/*integration.spec.js'
      ],
                            
      // level of logging
      // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
      logLevel : config.LOG_INFO,
            
      // enable / disable watching file and executing tests whenever any file changes
      autoWatch : false,
           
      // Continuous Integration mode
      // if true, it capture browsers, run tests and exit
      singleRun : true
  });
};
