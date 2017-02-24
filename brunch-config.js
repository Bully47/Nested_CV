
'use strict'
exports.config = {
    paths: {
        watched: ['public'],
        public: 'public'
    },
    files: {
        javascripts: {
            joinTo: {

                  'js/vendor.min.js': /^node_modules/,
                  'js/plugins.min.js': /^node_modules\/materialize-v3.1\/demo\/js\/plugins/,
                  'js/upload.min.js': /^node_modules\/ng-file-upload\/dist/,
                  'js/app.min.js': /^public\/js/,
                  'js/mplugins.min.js': /^public\/materialize-plugins/,

            },
            order: {
                before: [
               'node_modules/jquery/dist/*.js',
               'node_modules/angular/*.js',
               'node_modules/materialize-v3.1/demo/js/plugins/**/*.js',
               'node_modules/ng-file-upload/dist/**/*.js',
               'node_modules/ng-file-upload/dist/**/*.min.js',
               'public/materialize-plugins/*.js',
               'public/materialize-plugins/**/*.min.js',
               'public/js/app.js',
               'public/js/**/*.md.js',
               'public/js/components/**/*.js'
                    ]
            }
        },
        stylesheets: {
            joinTo: {
                'css/vendor.min.css': [],
                'css/app.min.css': /^node_modules\/scss/,
                'css/scss.min.css': /^public\/scss/
              }
        },
        order: {
            before: [
                     'node_modules/materialize-v3.1/getting_started/sass/components/**/*.scss',
                     'node_modules/materialize-v3.1/getting_started/sass/theme-components/layouts/**/*.scss',
                     'node_modules/materialize-v3.1/getting_started/sass/theme-components/pages/**/*.scss',
                     'node_modules/materialize-v3.1/getting_started/sass/theme-components/pages/**/*.scss',
                     'node_modules/materialize-v3.1/getting_started/sass/themes/default/**/*.scss',
                     'node_modules/materialize-v3.1/getting_started/sass/style.scss',
                     'node_modules/materialize-v3.1/getting_started/sass/materialize.scss',
                     'public/scss/**/*.scss'



                    ]
              },
    },
    npm: {
        enabled: true,
        compilers: ['angular', 'angular-ui-router', 'angular-cookies', 'angular-materialize', 'jquery', 'Material-Design-Icons','ng-file-upload']
    },
    conventions: {
        assets: /static[\\/]/,
        ignored: ['public/**/*.min.js', 'public/css/*']
    },
    modules: {
        wrapper: false,
        definition: 'commonjs'
    },
    plugins: {
        autoReload: {
            enabled: {
                css: 'on',
                js: 'on',
                json: 'on'
            }
        },
        babel: {
            ignore: [
                /^(node_modules)/
            ]
        }
    },
    overrides: {
        production: {
            sourceMaps: false,
            plugins: {
                autoReload: {
                    enabled: false
                }
            }
        }
    },
    server: {
        path: 'server.js',
        port: 8000,
        run: true
    }
}
