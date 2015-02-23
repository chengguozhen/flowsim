##Global Dependencies

This project has a minimal number of external dependencies. You must ensure
these dependencies are present before attempting the installation process.
- java 1.6 or higher
- nodejs
- postgresql 9.3
- curl (optional)

Java is only used by the flyway migration tool. The entire site is built in
javascript and the backend depends on nodejs to run. Persistence is provided
through a postgresql database. Finaly, if you are doing development you may need
the cURL command line utility. In which case now is the time to install it.This
set of dependencies you must manually install before proceeding with the
installation procedure.

##Installation

The following is a set of procedures to finalize the installation of all
necessary global and local node and bower dependencies. One important point to
note is that if a step does not explicitly tell you to use the sudo command, do
not use the sudo command. With few exceptions all steps should be taken as your
development user.

###Setup Procedure

Before installing either the frontend or backend you need a few node development
tools; grunt-cli, and bower. Our first step is to install these as global npm
packages using the '-g' option.
- sudo npm install -g grunt-cli
- sudo npm install -g bower
- sudo npm install -g yo
- sudo npm install -g generator-angular

During this process it is possible that you have accidentally changed ownership
of some of your node package management configuration files. This will cause
problems during subsequent steps. So as a provalactic we will ensure your
package management configuration files are owned properly. Execute the following
command:
- sudo chown -R \`whoami\` ~/.npm

###Backend Procedure

The node packages for the backend install using the typical node process. Just
change to the backend directory, use the node package manager (npm) to install
all packages specified in the package.json file.
- cd backend 
- npm install

Now you must setup the postgres database. First, you will create a postgres
database cluster. This is accomplished with the initdb command. Next, you will
start the colleciton of postgres processes that manage a database instance. You
do this with the pg_ctl command, which expects the location of the database
cluster files. You can build your database cluser anywhere. Now that the 
database server is running you need to create the flowsim database, this is
accomplished with teh createdb command. Finally, you will need to create the
development user account on the database. This account can have trivial
username/password flogdev and flogdev. This is for development only.
- initdb <db cluster name>
- pg_ctl -D <db cluster name> start
- createdb flowsim
- createuser -P flogdev

Finally, lets initialize the flowsim database scheme with flyway. First, you
must establish the environment variables that flyway depends upon. Then you can
run the flyway command. Running a flyway migration is necessary upon every
versioned scheme change. Upon completion you can change back to the top level
directory.
- source flyway_env
- flyway migrate
- cd ..

###Frontend Procedure

The node packages for the frontend install using the typical node process plus
some additional hand holding. Just change to the frontend directory, use the 
node package manager (npm) to install all packages specified in the package.json
file, then use a special grunt task to finish the package installation, and
finally return to the top level directory.

- cd flowsim-ui
- npm install
- bower install
- cd ..

##Build Operations

Building the frontend and the backend differ slightly. The frontend requires
more build process due to thigns like: js/css concatentation, minification, and
normalizing angularjs dependency injection. The details are below ...

###Building the backend

There are only a few things you can build with the backend. There is a simple
grunt file that will build documentation for the backend using jsdoc, run jshint
across existing source for static analysis, and remove inermediate files and
directories.
- Run static analysis: grunt -or- grunt default
- Generate docs: grunt doc
- Remove intermediates: grunt clean

###Building flowsim-ui

The frontend is slightly more complicated due to concatenating and minimizing
js and css files. You can build a debug version of the frontend which does not
concnatenate or minify any dependent files. A directory called debug will be
created that contains the document root of static files. The release version
will concatenate and minify your resources. Both versions run jshint over your
code for static analysis.
- Locally serve a debug version:     grunt serve
- Locally serve the release version: grunt serve:dist
- Build and test the release distro: grunt
- Build the release distribution:    grunt build
- Remove imtermediates:              grunt clean

A note of caution, some browsers will cache static files when there is a large
number and prevent the developer from seeing their changes. We found this
scenario with chrome. You must disable cachien on the developer console in order
to reliably see your changes immediately.

###Common npm Operations

- Run all local unit tests:             npm test
- Update local npm dependencies:        npm update
- Add a new npm runtime depdendency:    npm install   --save <dep name>
- Remove an npm runtime depdenency:     npm uninstall --save <dep name>
- Add a new npm development dependency: npm install   --dev-save <dev dep name>
- Remove an npm development dependency: npm uninstall --dev-save <dev dep name>

##Running Flowsim

Running the flowsim service is pretty simple. Assuming you have built the
frontend and backend as well as established the database, you just need to
configure and start the service. The server configuration file is located at 
backend/src/config.json. It is a json file that modularizes confirmation for the
major elements of backend service.

###Service configuration

There are four main components of the backend service that you need to
configure: mailer, server credentials, server bindings, and static content. The
mailer is used to send email to users of the service to verify account ownership
during registration and password resets. The server credentials are used to
present and sign a TLS certificate. The server bindings help establish what IP
addresses and ports the server binds. The static content specifies the folder of
the static resources to server. Finally, the database component specifies the
database connection information and credentials.

###Starting the backend service
You can run either the debug or release version of the frontend. Remember the
PEM pass phrase is 'flowsim'.
-debug: .. i'm not surehow to do this yet
-release: ./backend/src/index.js -c \`pwd\`/config.json -d \`pwd\`/flowsim-ui/dist

