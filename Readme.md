nbespin
=======

A text editor with Bespin Embedded as a frontend and Node.js as a backend, written in CoffeeScript.  Not yet ready for damn near anything except some basic file editing, check the issues in github.  This is really just a bit of an experiment, not much more.

Requirements
------------
 * Node.js (http://nodejs.org) v0.1.93+
 * CoffeeScript (http://coffeescript.org) v0.6.2+

Installation
------------
	$ git clone git://github.com/bengl/nbespin.git
	$ cd nbespin
	$ coffee -c nbespin.coffee

Usage
-----
Provided <nbespin path>/bin is on your $PATH, you can do this:
	$ nbespin <file>
Then open your HTML5 web browser of choice to http://localhost:8080/ and have at your file!  Save at any time by clicking the save link.  Kill the process when you're done (Ctrl+C in the terminal you ran it from).

Note: nbespin currently edits only one file at a time.

License
-------
(The MIT License)

Copyright (c) 2010 Bryan English

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.