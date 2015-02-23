
PostgreSQL 9.3 Notes
====================

These notes are intended as help for initial usage of the postgresql database.
A default installation of postgresql 9.3 will install everything you need to
manage a server instance. It will also take certain steps to create a default
server 'cluster' and start the server process. Below is a short summary of the
basic ideas behind operating a PostgreSQL server.

  Further Help
  ------------
  * man <postgres tool>
  * http://www.postgresql.org/docs/9.3/static/index.html
  
PostgreSQL Files
================

  A signle postgres server expects all of its configuration and state files to
  be located in a single directory tree. This tree is called a 'cluster'
  (PostgreSQL specific terminology). There are many files and directories
  necessary for postgres to operate correctly and they must all be present and
  consistent. The default postresql installation will create a cluster for you.

  You can determine the 'cluster' path from inside a psql prompt with the
  following command: 
  
    SHOW data_directory;

initdb
======

  This is a utility that helps you create a default 'cluster'. While it takes
  many optional command line arguemnts, it can choose default values and create
  a basic 'cluster' given just a location to place the 'cluster'.

  Usage - initdb -D <CLUSTER>

    CLUSTER - a directory path for a postres server process's fs storage

  Further Help
  ------------
  * man initdb
  * http://www.postgresql.org/docs/9.3/static/app-initdb.html

postgresql.confg
================

  This is the primary configuration file used by the postgres server process. It
  is located in the base directory for the 'cluster'.

pg_hba.confg
============

  This is the roles and authentication file for all postgres users. It must be
  modified to support new users/roles, changes to users/roles, etc.

PostgreSQL Server
=================

  Once a 'cluster' has been established a postresql server can begin running.
  Most default installations will create a cluster and start a server instance
  using that default cluster.

pg_ctl
======

  This utility provides a very basic set of high level adminstrative functions
  focused on process management for a single prosgtres server.

  Usage - pg_ctl <ACTION> -D <CLUSTER>

    ACTION
    ------
    start - start a postres server process
    stop - stop a postres server process
    restart - restars a postgres server process
    status - shows a postgres server process

    CLUSTER - a directory path for a postres server process's fs storage

  Further Help
  ------------
  * man pg_ctl
  * http://www.postgresql.org/docs/9.3/static/app-pg-ctl.html

pg_dump
=======

  Dump the entire contents of a database; similar to a snapshot.

  Usage - pg_dump <DB NAME> > <OUTPUT FILE>

psql
====

  This is the postgres CLI provided to interact with the databases housed by any
  particular postgres server.

  Usage - psql -U <ROLE> -d <DBNAME> -h <HOSTNAME> [-f <SQL SCRIPT>]

  ROLE - role to use to connect with the database
  DBNAME - database name to connect to
  HOSTNAME - hostname of the postgres server
  SQL SCRIPT - an SQL file to execute; omit for interactive mode

  Common Commands
  ===============

  \l - list all databases hosted by this server
  \c <DBNAME> - connect to the named database
  \dt - list all tables of the currently connected database
  \du - list the database's roles
  \q - quit the interactive shell

  Command SQL Statements
  ======================

  CREATE ROLE <ROLE> <OPTIONS> ; - creates a role with specified permissions
  CREATE USER <ROLE> <OPTIONS> ; - alias for CREATE ROLE but with LOGIN option

    OPTIONS ::= SUPERUSER | CREATEDB | CREATEROLE | REPLICATION
              | PASSWORD '<password>' | LOGIN

  DROP ROLE <ROLE> ;            - delete a role

  ALTER ROLE <OPTIONS> ;        - change the base role's options
  GRANT <ROLE> to <TARGET> ;    - grant privledges of ROLE to TARGET
  REVOKE <ROLE> from <TARGET> ; - revoke privledges of ROLE from TARGET
  SET ROLE <ROLE> ;             - set role to specified role, must be in heirarchy
  RESET ROLE <ROLE> ;           - reset role to base role

  CREATE DATABASE <DBNAME> ;    - creates a database
  DROP DATABASE <DBNAME> ;      - deletes a database

  Further Help
  ------------
  * man psql
  * http://www.postgresql.org/docs/9.3/static/app-psql.html

General Utilities
=================

  The following are small utilities that wrap common SQL statements and allow
  for exectuion from outside the psql shell.

  pg_dump/pg_dumpall - dump the state of a database
  createdb <DBNAME> [-o <ROLE>] - create a database
  dropdb <DBNAME> - delete a database
  createuser <ROLE> - create a role
  dropuser <ROLE> - delete a role

  Further Help
  ------------
  * man <utility>
  * check the online reference



